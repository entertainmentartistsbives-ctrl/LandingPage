import { useState, useEffect, useRef, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ConversationState, ChatMessage as TChatMessage, AIResponse } from '@/types/conversation'
import { buildSystemPrompt } from './system-prompt'

function makeInitialState(sessionId: string): ConversationState {
  return {
    sessionId,
    company: '', industry: '', teamSize: '',
    serviceIntent: 'unknown', intentConfidence: 0,
    diagnosisStage: 0, confirmedPain: '',
    toneModifier: '', returningUser: false,
    currentPhase: 1, solution: '',
    leadName: '', leadEmail: '',
  }
}

// Model fallback chain — ordered from newest to oldest
const MODEL_CANDIDATES = [
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
]

export function useChat() {
  const [state, setState] = useState<ConversationState>(() => makeInitialState(uuidv4()))
  const [messages, setMessages] = useState<TChatMessage[]>([])
  const [isBusy, setIsBusy] = useState(false)
  const initialized = useRef(false)

  // Track which model worked so we don't retry all models every time
  const workingModel = useRef<string | null>(null)

  // Use refs to always have the latest state/messages without causing effect re-fires
  const stateRef = useRef(state)
  const messagesRef = useRef(messages)
  const isBusyRef = useRef(isBusy)
  stateRef.current = state
  messagesRef.current = messages
  isBusyRef.current = isBusy

  // Merge state updates
  const mergeState = useCallback((current: ConversationState, update: Partial<ConversationState>): ConversationState => {
    const next = { ...current }
    Object.keys(update).forEach(k => {
      const key = k as keyof ConversationState
      const val = update[key]
      if (val !== undefined && val !== '') {
        ;(next as Record<string, unknown>)[key] = val
      }
    })
    return next
  }, [])

  // Parse the Gemini API response into our AIResponse format
  const parseResponse = (data: any): AIResponse => {
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
    if (!rawText) return { message: "I'm sorry, I couldn't generate a response.", stateUpdate: {} }

    try {
      const firstBrace = rawText.indexOf('{')
      const lastBrace = rawText.lastIndexOf('}')
      if (firstBrace !== -1 && lastBrace !== -1) {
        const jsonStr = rawText.substring(firstBrace, lastBrace + 1)
        const parsed = JSON.parse(jsonStr)
        return {
          message: parsed.message || rawText,
          stateUpdate: parsed.stateUpdate || {}
        }
      }
    } catch {
      // Return raw text if JSON parsing fails
    }
    return { message: rawText, stateUpdate: {} }
  }

  // Call Gemini API directly via REST (no server route needed for Vite)
  const callGemini = useCallback(async (msgs: TChatMessage[], currentState: ConversationState): Promise<AIResponse> => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY
    if (!apiKey) throw new Error('Missing VITE_GEMINI_API_KEY in .env')

    const systemPrompt = buildSystemPrompt(currentState)

    const contents = msgs.map((m, idx) => {
      let text = m.content
      // Inject system prompt into the first user message for context
      if (idx === 0 && m.role === 'user') {
        text = `[SYSTEM INSTRUCTION]\n${systemPrompt}\n\n[USER MESSAGE]\n${text}`
      }
      return {
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text }]
      }
    })

    const payload = {
      contents,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7
      }
    }

    // If we already know a working model, try it first
    const modelsToTry = workingModel.current
      ? [workingModel.current, ...MODEL_CANDIDATES.filter(m => m !== workingModel.current)]
      : MODEL_CANDIDATES

    let lastError: Error | null = null

    for (const modelName of modelsToTry) {
      try {
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })

        const data = await response.json()

        if (data.error) {
          console.warn(`Model ${modelName} failed:`, data.error.message)
          lastError = new Error(data.error.message)
          continue // Try next model
        }

        // Success — remember this model for future calls
        if (workingModel.current !== modelName) {
          console.log(`✓ Using Gemini model: ${modelName}`)
          workingModel.current = modelName
        }

        return parseResponse(data)
      } catch (err: any) {
        console.warn(`Model ${modelName} network error:`, err.message)
        lastError = err
        continue
      }
    }

    // All models failed
    throw lastError || new Error('All Gemini model candidates failed')
  }, [])

  // The core send function — uses refs to avoid stale closures and unnecessary re-renders
  const sendMessage = useCallback(async (text: string, overrideMessages?: TChatMessage[], overrideState?: ConversationState) => {
    if (isBusyRef.current && !overrideMessages) return

    setIsBusy(true)
    const userMsg: TChatMessage = { role: 'user', content: text }
    const currentMsgs = overrideMessages || messagesRef.current
    const currentState = overrideState || stateRef.current

    const nextMessages = [...currentMsgs, userMsg]
    setMessages(nextMessages)

    try {
      const data = await callGemini(nextMessages, currentState)

      const aiMsg: TChatMessage = { role: 'assistant', content: data.message }
      setMessages(prev => [...prev, aiMsg])

      const nextState = mergeState(currentState, data.stateUpdate || {})
      setState(nextState)

      return { message: aiMsg, state: nextState }
    } catch (e: any) {
      console.error('Chat Error:', e)
      const errorMsg = e?.message || 'Unknown error'
      let userMessage = 'I encountered an error. Please try again in a moment.'
      
      if (errorMsg.includes('quota') || errorMsg.includes('429') || errorMsg.includes('RATE_LIMIT') || errorMsg.includes('limit')) {
        userMessage = 'API quota exceeded. Please check your Gemini API key quota at https://aistudio.google.com or try again later.'
      } else if (errorMsg.includes('API_KEY') || errorMsg.includes('401') || errorMsg.includes('403')) {
        userMessage = 'Invalid API key. Please check your VITE_GEMINI_API_KEY in the .env file.'
      } else if (errorMsg.includes('Failed to fetch') || errorMsg.includes('NetworkError')) {
        userMessage = 'Network error. Please check your internet connection.'
      }
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: userMessage,
      }])
    } finally {
      setIsBusy(false)
    }
  }, [callGemini, mergeState])

  // Initialize — stable dependency array, runs only once
  useEffect(() => {
    if (initialized.current) return
    initialized.current = true
    const initState = makeInitialState(uuidv4())
    setState(initState)
    sendMessage('Hello, I need business help.', [], initState)
  }, [sendMessage])

  const resetChat = useCallback(() => {
    const newState = makeInitialState(uuidv4())
    setState(newState)
    setMessages([])
    // Don't toggle initialized.current — just directly send the init message
    sendMessage('Hello, I need business help.', [], newState)
  }, [sendMessage])

  return {
    messages,
    state,
    isBusy,
    sendMessage,
    resetChat,
  }
}
