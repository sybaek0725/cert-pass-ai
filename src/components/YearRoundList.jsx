import { getSessionList } from '../data/examQuestions';

export default function YearRoundList({ onSelect }) {
  const sessions = getSessionList();

  const grouped = {};
  sessions.forEach(({ year, round, count }) => {
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push({ round, count });
  });
  Object.values(grouped).forEach((rounds) => rounds.sort((a, b) => a.round - b.round));

  const years = Object.keys(grouped).sort((a, b) => b - a);

  if (years.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px', color: '#444' }}>
        <p style={{ fontSize: 40 }}>📭</p>
        <p style={{ fontSize: 14, color: '#666', marginTop: 12 }}>기출 데이터가 없어요</p>
        <p style={{ fontSize: 12, color: '#444', marginTop: 6 }}>
          src/data/examQuestions.js에 문제를 추가해주세요
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {years.map((year) => (
        <div key={year}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: '#555',
              marginBottom: 8,
              letterSpacing: '0.5px',
            }}
          >
            {year}년
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {grouped[year].map(({ round, count }) => (
              <button
                key={round}
                onClick={() => onSelect({ year: Number(year), round })}
                style={{
                  padding: '14px 16px',
                  backgroundColor: '#262626',
                  border: '1px solid #333',
                  borderRadius: 8,
                  color: '#ececec',
                  fontSize: 14,
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'border-color 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#cc785c')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#333')}
              >
                <span style={{ fontWeight: 500 }}>
                  {year}년 {round}회 기출
                </span>
                <span style={{ fontSize: 12, color: '#555' }}>{count}문제 →</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
