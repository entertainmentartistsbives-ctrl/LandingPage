import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useChat } from '../lib/usechat'
import ChatMessageBubble from './chat/ChatMessage'
import InputBar from './chat/InputBar'
import TypingIndicator from './chat/TypingIndicator'
import { MessageCircle, X, RotateCcw } from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, sendMessage, isBusy, resetChat } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isBusy, isOpen])

  const handleSend = (text: string) => {
    sendMessage(text)
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      fontFamily: 'Inter, sans-serif',
    }}>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'absolute',
              bottom: '80px',
              right: 0,
              width: 'min(420px, 90vw)',
              height: 'min(600px, 80vh)',
              background: 'rgba(10, 10, 10, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '24px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(212, 175, 55, 0.1)',
              border: '1px solid var(--chat-border2)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '18px 22px',
              background: 'rgba(15, 15, 17, 0.6)',
              borderBottom: '1px solid var(--chat-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              zIndex: 10,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10,
                  background: 'linear-gradient(135deg, var(--chat-accent), var(--chat-accent2))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 800, color: 'var(--chat-text2)',
                  boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)',
                }}>AI</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--chat-text)' }}>Aura Assistant</div>
                  <div style={{ fontSize: 11, color: 'var(--chat-text3)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
                    Active Now
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  onClick={resetChat}
                  style={{
                    background: 'none', border: 'none', color: 'var(--chat-text3)',
                    cursor: 'pointer', padding: 6, borderRadius: '50%',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = 'var(--chat-bg3)')}
                  onMouseOut={e => (e.currentTarget.style.background = 'none')}
                  title="Reset Conversation"
                >
                  <RotateCcw size={18} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: 'none', border: 'none', color: 'var(--chat-text3)',
                    cursor: 'pointer', padding: 6, borderRadius: '50%',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = 'var(--chat-bg3)')}
                  onMouseOut={e => (e.currentTarget.style.background = 'none')}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              background: 'transparent',
            }}>
              {messages.map((msg, i) => (
                <ChatMessageBubble 
                  key={i} 
                  message={msg} 
                  isLatest={i === messages.length - 1} 
                />
              ))}
              {isBusy && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <InputBar onSend={handleSend} disabled={isBusy} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: isOpen ? 'var(--chat-bg2)' : 'linear-gradient(135deg, var(--chat-accent), var(--chat-accent2))',
          color: isOpen ? 'var(--chat-text)' : 'var(--chat-text2)',
          cursor: 'pointer',
          boxShadow: isOpen ? '0 10px 30px rgba(0,0,0,0.6)' : '0 10px 30px rgba(212, 175, 55, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          transition: 'all 0.3s ease',
          border: isOpen ? '1px solid var(--chat-border)' : '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={30} fill="currentColor" fillOpacity={0.2} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
