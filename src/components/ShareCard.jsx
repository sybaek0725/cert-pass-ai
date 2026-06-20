import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

// 예상 합격률 = 정답률을 살짝 위로 보정 (학습 효과 가정, 95% 상한)
function predictPassRate(correctRate) {
  return Math.min(95, Math.round(correctRate + 10));
}

function subjectBreakdown(wrongAnswers) {
  const counts = {};
  for (const w of wrongAnswers) counts[w.subject] = (counts[w.subject] || 0) + 1;
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
}

export default function ShareCard({ correctCount, wrongAnswers }) {
  const cardRef = useRef(null);
  const [saving, setSaving] = useState(false);
  const total = correctCount + wrongAnswers.length;
  const correctRate = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const passRate = predictPassRate(correctRate);
  const breakdown = subjectBreakdown(wrongAnswers);

  async function handleSave() {
    if (!cardRef.current || saving) return;
    setSaving(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#1a1a1a',
        scale: 2,
        useCORS: true,
      });
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `certpass-ai-${Date.now()}.png`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div
        ref={cardRef}
        style={{
          backgroundColor: '#1a1a1a',
          borderRadius: 16,
          padding: 28,
          border: '1px solid #333',
          fontFamily: "'Noto Sans KR', system-ui, sans-serif",
          color: '#ececec',
          maxWidth: 420,
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* 브랜드 헤더 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #cc785c, #e8906f)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
            }}
          >
            🎯
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>CertPass AI</div>
            <div style={{ fontSize: 11, color: '#888' }}>정처기 실기 AI 학습</div>
          </div>
        </div>

        {/* 정답률 메인 수치 */}
        <div style={{ textAlign: 'center', padding: '12px 0 20px' }}>
          <div style={{ fontSize: 12, color: '#888', marginBottom: 6 }}>나의 정답률</div>
          <div style={{ fontSize: 56, fontWeight: 800, color: '#cc785c', lineHeight: 1 }}>
            {correctRate}
            <span style={{ fontSize: 24, color: '#e8906f', marginLeft: 4 }}>%</span>
          </div>
          <div style={{ fontSize: 13, color: '#aaa', marginTop: 10 }}>
            총 <strong style={{ color: '#ececec' }}>{total}</strong>문제 풀이 ·{' '}
            <span style={{ color: '#4ade80' }}>정답 {correctCount}</span> ·{' '}
            <span style={{ color: '#f87171' }}>오답 {wrongAnswers.length}</span>
          </div>
        </div>

        {/* 예상 합격률 배너 */}
        <div
          style={{
            backgroundColor: '#cc785c11',
            border: '1px solid #cc785c44',
            borderRadius: 10,
            padding: '12px 14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <span style={{ fontSize: 13, color: '#e8906f' }}>📈 예상 합격률</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#e8906f' }}>{passRate}%</span>
        </div>

        {/* 약점 과목 */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>약점 과목 (오답 많은 순)</div>
          {breakdown.length === 0 ? (
            <div style={{ fontSize: 13, color: '#555' }}>아직 오답이 없어요 🎉</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {breakdown.map(([subject, count]) => (
                <div
                  key={subject}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 13,
                    padding: '6px 10px',
                    borderRadius: 6,
                    backgroundColor: '#262626',
                    border: '1px solid #333',
                  }}
                >
                  <span style={{ color: '#ddd' }}>{subject}</span>
                  <span style={{ color: '#f87171', fontWeight: 600 }}>{count}개</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 푸터 */}
        <div
          style={{
            borderTop: '1px solid #2a2a2a',
            paddingTop: 12,
            fontSize: 10,
            color: '#666',
            textAlign: 'center',
          }}
        >
          AI가 기출 분석해서 만들어준 유사 문제 풀이 결과 · certpass-ai
        </div>
      </div>

      <button
        onClick={handleSave}
        disabled={saving}
        style={{
          padding: '10px 16px',
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 600,
          cursor: saving ? 'default' : 'pointer',
          backgroundColor: saving ? '#333' : '#cc785c',
          color: '#fff',
          border: 'none',
          alignSelf: 'center',
          minWidth: 160,
        }}
      >
        {saving ? '이미지 저장 중…' : '📷 이미지로 저장'}
      </button>
    </div>
  );
}
