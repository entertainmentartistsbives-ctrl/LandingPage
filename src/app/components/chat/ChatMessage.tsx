import { ChatMessage } from '../../types/conversation'

interface Props {
  message: ChatMessage
  isLatest?: boolean
}

export default function ChatMessageBubble({ message, isLatest }: Props) {
  const isUser = message.role === 'user'

  return (
    <div
      className={isLatest ? 'animate-fadeIn' : ''}
      style={{
        display: 'flex',
        gap: 9,
        maxWidth: '100%',
        flexDirection: isUser ? 'row-reverse' : 'row',
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        marginBottom: '12px',
      }}
    >
      {/* Avatar */}
      <div style={{
        width: 28, height: 28, borderRadius: 8, flexShrink: 0, marginTop: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, fontWeight: 600,
        background: isUser ? 'var(--chat-bg4)' : 'linear-gradient(135deg, var(--chat-accent), var(--chat-accent2))',
        color: isUser ? 'var(--chat-text)' : 'var(--chat-text2)',
        boxShadow: isUser ? 'none' : '0 4px 12px rgba(212, 175, 55, 0.3)',
      }}>
        {isUser ? 'U' : 'AI'}
      </div>

      {/* Bubble */}
      <div style={{
        padding: '10px 14px',
        borderRadius: 13,
        borderTopLeftRadius: isUser ? 13 : 4,
        borderTopRightRadius: isUser ? 4 : 13,
        fontSize: 13.5,
        lineHeight: 1.65,
        maxWidth: '85%',
        background: isUser ? 'linear-gradient(135deg, var(--chat-accent), var(--chat-accent2))' : 'var(--chat-bg3)',
        color: isUser ? 'var(--chat-text2)' : 'var(--chat-text)',
        border: isUser ? 'none' : '1px solid var(--chat-border)',
        boxShadow: isUser ? '0 4px 15px rgba(212, 175, 55, 0.2)' : 'none',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}>
        {message.content}
      </div>
    </div>
  )
}
