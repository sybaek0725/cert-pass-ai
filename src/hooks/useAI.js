// AI 호출 클라이언트 훅 — Vercel Serverless Function `/api/*` 경유.
// 키는 절대 브라우저에 두지 않음 — 서버 함수가 GEMINI_API_KEY 사용.

export function useAI() {
  // 답안 채점 + AI 해설 스트리밍. onToken(누적 텍스트)으로 부분 결과 전달.
  async function streamExplanation({ question, correctAnswer, userAnswer }, onToken) {
    const res = await fetch('/api/explanation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, correctAnswer, userAnswer }),
    });
    if (!res.ok || !res.body) {
      const errPayload = await res.json().catch(() => ({}));
      throw new Error(errPayload.error || `해설 요청 실패 (${res.status})`);
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';
    let accumulated = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      let nlIdx;
      while ((nlIdx = buffer.indexOf('\n\n')) !== -1) {
        const event = buffer.slice(0, nlIdx);
        buffer = buffer.slice(nlIdx + 2);
        if (!event.startsWith('data: ')) continue;
        const payload = event.slice(6).trim();
        if (payload === '[DONE]') return accumulated;
        try {
          const obj = JSON.parse(payload);
          if (obj.error) throw new Error(obj.error);
          if (obj.text) {
            accumulated += obj.text;
            onToken?.(accumulated);
          }
        } catch (e) {
          if (e instanceof SyntaxError) continue;
          throw e;
        }
      }
    }
    return accumulated;
  }

  // PDF 발췌 → 새 문제 JSON 1개 반환. 로그인 시 DB에 자동 저장.
  // options: { source: 'personal'|'shared', year, round, accessToken }
  async function generateQuestion(pdfExcerpt, options = {}) {
    const { source = 'personal', year = null, round = null, accessToken } = options;
    const headers = { 'Content-Type': 'application/json' };
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
    const res = await fetch('/api/generate-question', {
      method: 'POST',
      headers,
      body: JSON.stringify({ pdfExcerpt, source, year, round }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || `문제 생성 실패 (${res.status})`);
    return data.question;
  }

  return { streamExplanation, generateQuestion };
}
