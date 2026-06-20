export default function QuestionCard({ question, showHint }) {
  if (!question) return null;
  return (
    <div style={{ backgroundColor: '#262626', borderRadius: 12, padding: 24, border: '1px solid #333' }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 20, backgroundColor: '#1a1a1a', color: '#888', border: '1px solid #333' }}>
          {question.subject}
        </span>
        <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 20, backgroundColor: '#cc785c22', color: '#e8906f', border: '1px solid #cc785c44' }}>
          {question.type}
        </span>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, color: '#ddd', whiteSpace: 'pre-line', fontFamily: 'monospace' }}>
        {question.question}
      </p>

      {showHint && question.hint && (
        <div style={{ marginTop: 16, padding: '10px 14px', backgroundColor: '#fbbf2411', borderRadius: 8, border: '1px solid #fbbf2433', fontSize: 13, color: '#fbbf24' }}>
          💡 {question.hint}
        </div>
      )}
    </div>
  );
}
