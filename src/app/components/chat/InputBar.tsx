import { useRef, useEffect } from 'react'

interface Props {
  onSend: (text: string) => void
  disabled: boolean
  placeholder?: string
}

export default function InputBar({ onSend, disabled, placeholder = 'Tell me about your business…' }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!disabled) ref.current?.focus()
  }, [disabled])

  function autoResize() {
    const el = ref.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 120) + 'px'
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  function handleSend() {
    const el = ref.current
    if (!el) return
    const text = el.value.trim()
    if (!text || disabled) return
    el.value = ''
    el.style.height = 'auto'
    onSend(text)
  }

  return (
    <div style={{
      padding: '12px 18px',
      borderTop: '1px solid var(--chat-border)',
      background: 'rgba(10, 10, 10, 0.85)',
      display: 'flex', gap: 9, alignItems: 'flex-end',
      flexShrink: 0,
    }}>
      <textarea
        ref={ref}
        rows={1}
        disabled={disabled}
        placeholder={placeholder}
        onKeyDown={handleKey}
        onInput={autoResize}
        style={{
          flex: 1, padding: '10px 13px',
          background: 'var(--chat-bg3)',
          border: '1px solid var(--chat-border2)',
          borderRadius: 12, color: 'var(--chat-text)',
          fontFamily: 'inherit', fontSize: 13.5,
          resize: 'none', outline: 'none',
          lineHeight: 1.5, minHeight: 42, maxHeight: 120,
          transition: 'border-color 0.2s',
          opacity: disabled ? 0.5 : 1,
        }}
        onFocus={e => (e.currentTarget.style.borderColor = 'var(--chat-accent)')}
        onBlur={e => (e.currentTarget.style.borderColor = 'var(--chat-border2)')}
      />
      <button
        onClick={handleSend}
        disabled={disabled}
        style={{
          width: 40, height: 40, borderRadius: 10, border: 'none',
          background: disabled ? 'var(--chat-bg4)' : 'linear-gradient(135deg, var(--chat-accent), var(--chat-accent2))',
          color: disabled ? 'var(--chat-text3)' : 'var(--chat-text2)',
          boxShadow: disabled ? 'none' : '0 4px 15px rgba(212, 175, 55, 0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: disabled ? 'default' : 'pointer',
          flexShrink: 0, transition: 'all 0.2s',
        }}
        onMouseOver={e => { if (!disabled) e.currentTarget.style.filter = 'brightness(1.1)' }}
        onMouseOut={e => { if (!disabled) e.currentTarget.style.filter = 'brightness(1)' }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  )
}
