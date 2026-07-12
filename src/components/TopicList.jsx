export default function TopicList({ chapter, onSelectTopic, onBack }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {/* 헤더 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
        <button
          onClick={onBack}
          style={{
            padding: '5px 12px', borderRadius: 6, fontSize: 12,
            cursor: 'pointer', backgroundColor: '#1a1a1a',
            border: '1px solid #333', color: '#888', flexShrink: 0,
          }}
        >
          ← 챕터
        </button>
        <div>
          <div style={{ fontSize: 11, color: '#cc785c' }}>Ch.{chapter.id}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#ececec' }}>{chapter.name}</div>
        </div>
      </div>

      <p style={{ fontSize: 12, color: '#555', marginBottom: 4 }}>
        토픽을 선택하면 AI가 문제를 즉시 생성합니다.
      </p>

      {/* 토픽 목록 */}
      {chapter.topics.map((topic) => (
        <button
          key={topic.id}
          onClick={() => onSelectTopic(topic)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '11px 14px',
            borderRadius: 8,
            border: '1px solid #2a2a2a',
            backgroundColor: '#1e1e1e',
            color: '#ccc',
            cursor: 'pointer',
            textAlign: 'left',
            fontSize: 13,
            lineHeight: 1.5,
            transition: 'background-color 0.15s',
            width: '100%',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#262626')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1e1e1e')}
        >
          <span style={{ flex: 1 }}>{topic.name}</span>
          <span style={{ fontSize: 11, color: '#444', flexShrink: 0, marginLeft: 12 }}>
            AI 생성 →
          </span>
        </button>
      ))}
    </div>
  );
}
