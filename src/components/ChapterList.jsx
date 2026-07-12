import { CHAPTERS } from '../data/topics.js';

export default function ChapterList({ onSelect }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <p style={{ fontSize: 13, color: '#888', marginBottom: 4 }}>
        12개 챕터 중 학습할 챕터를 선택하세요.
      </p>
      {CHAPTERS.map((chapter) => (
        <button
          key={chapter.id}
          onClick={() => onSelect(chapter)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 16px',
            borderRadius: 10,
            border: '1px solid #333',
            backgroundColor: '#262626',
            color: '#ececec',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'background-color 0.15s',
            width: '100%',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2f2f2f')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#262626')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{
              width: 32, height: 32, borderRadius: 8,
              backgroundColor: '#cc785c22', border: '1px solid #cc785c44',
              color: '#cc785c', fontSize: 11, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              {chapter.id}
            </span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{chapter.name}</div>
            </div>
          </div>
          <span style={{ fontSize: 11, color: '#555', flexShrink: 0, marginLeft: 8 }}>
            {chapter.topics.length}토픽 →
          </span>
        </button>
      ))}
    </div>
  );
}
