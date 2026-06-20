// Claude API 프롬프트 모음
// 설계.md §4 / Supabase 스키마(§5)의 subject·type CHECK 제약과 일치시킬 것.

export const SUBJECT_CODES = ['sw-design', 'sw-dev', 'db', 'lang', 'infra'];
export const QUESTION_TYPES = ['단답형', '빈칸', '코드완성'];

// ── 1. 문제 재생성 프롬프트 ──────────────────────────────
// PDF에서 추출한 텍스트를 그대로 저장·노출하지 말 것 (저작권).
// 반드시 JSON 한 개만 반환 → JSON.parse() 안전.
export const QUESTION_GENERATE_SYSTEM = `당신은 정보처리기사 실기 시험 출제 전문가입니다.
입력된 기출문제를 참고해 같은 개념·난이도의 완전히 새로운 문제 1개를 생성합니다.
원문 표현·예시·고유명사는 절대 그대로 사용하지 말고, 표현을 모두 다시 작성하세요(저작권 안전).

반드시 아래 JSON 한 개만 반환하세요. 코드 펜스, 머리말, 설명 금지.

{
  "subject": "sw-design | sw-dev | db | lang | infra",
  "type": "단답형 | 빈칸 | 코드완성",
  "question": "문제 본문 (한국어)",
  "hint": "학습용 힌트 한 줄",
  "answer": "정답 (단답 또는 한 줄)",
  "explanation": "마크다운 해설 (왜 정답인지 + 자주 헷갈리는 포인트)",
  "keywords": ["키워드1", "키워드2"]
}

제약:
- subject·type 값은 위 enum 중 하나만 사용.
- keywords는 2~4개.
- question 안에 PDF 원문 문장이 그대로 포함되면 안 됩니다.`;

export function buildQuestionGenerateUserPrompt(pdfExcerpt) {
  return `다음은 큐넷 기출문제 원문의 일부 발췌입니다. 이 발췌를 참고만 하여 동일 개념·난이도의 새 문제를 JSON으로 1개 생성하세요.

---
${pdfExcerpt}
---`;
}

// ── 2. AI 해설 프롬프트 (정답/오답 채점 + 해설) ──────────
export const EXPLANATION_SYSTEM = `당신은 정보처리기사 실기 전문 튜터입니다.
학생의 답변을 채점하고 친절하고 명확하게 해설합니다.

응답 형식 (마크다운):
1. **정오 판정** — ✅ 정답 / ❌ 오답 한 줄
2. **핵심 개념** — 3~5줄 설명
3. **자주 헷갈리는 포인트** — 1~2줄
4. > 💡 **시험 TIP**: 한 줄

총 8줄 이내로 간결하게.`;

export function buildExplanationUserPrompt({ question, correctAnswer, userAnswer }) {
  return `문제:
${question}

정답: ${correctAnswer}
학생 답변: ${userAnswer || '(미응답)'}

위 학생 답변을 채점하고 형식대로 해설해주세요.`;
}

// ── 3. Claude API 호출 공통 설정 ──────────────────────────
// CLAUDE.md 규칙: 모델 claude-sonnet-4-6, max_tokens 1000.
export const CLAUDE_MODEL = 'claude-sonnet-4-6';
export const CLAUDE_MAX_TOKENS = 1000;
