import ReactMarkdown from 'react-markdown';

export default function ExplanationPanel({ loading, text }) {
  return (
    <div className="cp-fade-in" style={{ backgroundColor: '#262626', borderRadius: 12, padding: 20, border: '1px solid #333' }}>
      <p style={{ fontSize: 12, color: '#cc785c', fontWeight: 600, marginBottom: 12 }}>🤖 AI 해설</p>
      {loading ? (
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', color: '#555', fontSize: 13 }}>
          <span className="cp-dot" style={{ animationDelay: '0s' }} />
          <span className="cp-dot" style={{ animationDelay: '0.2s' }} />
          <span className="cp-dot" style={{ animationDelay: '0.4s' }} />
          <span style={{ marginLeft: 4 }}>해설 생성 중...</span>
        </div>
      ) : (
        <div style={{ fontSize: 14, color: '#ccc', lineHeight: 1.8 }} className="cp-markdown">
          <ReactMarkdown>{text || ''}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
