export default function AnswerInput({
  value,
  onChange,
  submitted,
  isCorrect,
  correctAnswer,
  onToggleHint,
  showHint,
  onSubmit,
  onNext,
}) {
  return (
    <div
      style={{
        backgroundColor: '#262626',
        borderRadius: 12,
        padding: 20,
        border: submitted
          ? isCorrect
            ? '1px solid #4ade8055'
            : '1px solid #f8717155'
          : '1px solid #333',
      }}
    >
      <label style={{ fontSize: 12, color: '#666', marginBottom: 8, display: 'block' }}>내 답변</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={submitted}
        placeholder="답을 입력하세요..."
        style={{
          width: '100%',
          minHeight: 80,
          backgroundColor: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: 8,
          padding: '10px 12px',
          color: '#ececec',
          fontSize: 14,
          resize: 'vertical',
          outline: 'none',
          boxSizing: 'border-box',
        }}
      />

      {submitted && (
        <div
          style={{
            marginTop: 12,
            padding: '10px 14px',
            borderRadius: 8,
            backgroundColor: isCorrect ? '#4ade8011' : '#f8717111',
            border: `1px solid ${isCorrect ? '#4ade8044' : '#f8717144'}`,
          }}
        >
          <p style={{ fontSize: 13, color: isCorrect ? '#4ade80' : '#f87171', fontWeight: 600 }}>
            {isCorrect ? '✅ 정답입니다!' : '❌ 오답입니다'}
          </p>
          <p style={{ fontSize: 13, color: '#888', marginTop: 4 }}>
            정답: <span style={{ color: '#ececec', fontWeight: 600 }}>{correctAnswer}</span>
          </p>
        </div>
      )}

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        {!submitted ? (
          <>
            <button
              onClick={onToggleHint}
              style={{ padding: '8px 16px', borderRadius: 8, fontSize: 13, cursor: 'pointer', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#888' }}
            >
              {showHint ? '힌트 숨기기' : '💡 힌트'}
            </button>
            <button
              onClick={onSubmit}
              disabled={!value.trim()}
              style={{
                flex: 1,
                padding: '8px 16px',
                borderRadius: 8,
                fontSize: 13,
                cursor: 'pointer',
                backgroundColor: value.trim() ? '#cc785c' : '#333',
                border: 'none',
                color: value.trim() ? '#fff' : '#555',
                fontWeight: 600,
                transition: 'all 0.15s',
              }}
            >
              제출하기
            </button>
          </>
        ) : (
          <button
            onClick={onNext}
            style={{ flex: 1, padding: '8px 16px', borderRadius: 8, fontSize: 13, cursor: 'pointer', backgroundColor: '#cc785c', border: 'none', color: '#fff', fontWeight: 600 }}
          >
            다음 문제 →
          </button>
        )}
      </div>
    </div>
  );
}
