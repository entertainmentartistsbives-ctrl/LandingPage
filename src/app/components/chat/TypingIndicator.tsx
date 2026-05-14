export default function TypingIndicator() {
  return (
    <div style={{ display: 'flex', gap: 9, alignSelf: 'flex-start', maxWidth: '100%', marginBottom: '12px' }}>
      <div style={{
        width: 28, height: 28, borderRadius: 8, flexShrink: 0, marginTop: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, fontWeight: 600, background: 'var(--chat-accent)', color: 'white',
      }}>AI</div>
      <div style={{
        padding: '12px 16px', borderRadius: 13, borderTopLeftRadius: 4,
        background: 'var(--chat-bg3)', border: '1px solid var(--chat-border)',
        display: 'flex', gap: 4, alignItems: 'center',
      }}>
        {[0, 0.2, 0.4].map((delay, i) => (
          <div key={i} style={{
            width: 6, height: 6, borderRadius: '50%', background: 'var(--chat-text3)',
            animation: `blink 1.2s ${delay}s infinite`,
          }} />
        ))}
      </div>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  )
}
