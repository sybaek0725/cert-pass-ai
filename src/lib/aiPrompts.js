// AI 프롬프트 모음 — V2: NCS 토픽 기반 문제 생성
// Supabase 스키마의 subject·type CHECK 제약과 일치시킬 것.

export const SUBJECT_CODES = ['sw-design', 'sw-dev', 'db', 'lang', 'infra'];
export const QUESTION_TYPES = ['단답형', '빈칸', '코드완성'];

// ── 1. 문제 생성 프롬프트 (V2: 토픽 기반) ────────────────
// PDF 없이 NCS 토픽명만 받아 완전히 새로운 문제를 생성한다.
export const QUESTION_GENERATE_SYSTEM = `당신은 정보처리기사 실기 시험 출제 전문가입니다.
주어진 NCS 토픽(개념 단위)에 맞는 실전 수준의 문제 1개를 생성합니다.

반드시 아래 JSON 한 개만 반환하세요. 코드 펜스, 머리말, 설명 금지.

{
  "subject": "sw-design | sw-dev | db | lang | infra",
  "type": "단답형 | 빈칸 | 코드완성",
  "question": "문제 본문 (한국어, 2~4문장)",
  "hint": "학습용 힌트 한 줄",
  "answer": "정답 (단답 또는 한 줄)",
  "explanation": "마크다운 해설 (핵심 개념 + 자주 헷갈리는 포인트)",
  "keywords": ["키워드1", "키워드2"]
}

제약:
- subject·type 값은 위 enum 중 하나만 사용.
- keywords는 2~4개.
- 토픽에서 실제로 자주 출제되는 핵심 내용을 문제화할 것.
- 정답은 명확하게 하나로 수렴해야 함.`;

export function buildTopicQuestionUserPrompt(topicName, chapterName) {
  return `다음 NCS 토픽에 대한 정보처리기사 실기 문제를 JSON으로 1개 생성하세요.

챕터: ${chapterName}
토픽: ${topicName}

위 토픽의 핵심 개념·용어·절차 중 시험에 자주 나오는 내용을 문제로 만들어주세요.`;
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

export function buildExplanationUserPrompt({ question, correctAnswer, userAnswer, topicName }) {
  const topicLine = topicName ? `\n토픽: ${topicName}` : '';
  return `문제:${topicLine}
${question}

정답: ${correctAnswer}
학생 답변: ${userAnswer || '(미응답)'}

위 학생 답변을 채점하고 형식대로 해설해주세요.`;
}

// ── 3. AI 호출 공통 설정 ──────────────────────────────────
// V2: Gemini 2.5 Flash (Vercel Serverless Function 경유, 무료 한도 활용).
export const AI_MODEL = 'gemini-2.5-flash';
export const AI_MAX_OUTPUT_TOKENS = 1000;
