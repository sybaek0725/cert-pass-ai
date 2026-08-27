// 정처기 실기 기출문제 데이터 생성 스크립트
// 출처: github.com/0625yt/jeongcheogi-practice
// 실행: node scripts/build-exam-data.js

import { writeFileSync, writeSync, openSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../src/data/examQuestions.js');
const URL = 'https://raw.githubusercontent.com/0625yt/jeongcheogi-practice/main/src/data/exams.js';

// ── HTML 파싱 유틸 ────────────────────────────────────────────

function decodeHtmlEntities(str) {
  return str
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&le;/g, '≤')
    .replace(/&ge;/g, '≥');
}

function stripTags(html) {
  return decodeHtmlEntities(html.replace(/<[^>]*>/g, ''));
}

// colorscripter 코드 테이블에서 코드 추출
function extractCode(html) {
  const tableMatch = html.match(/<table[^>]*colorscripter-code-table[^>]*>([\s\S]*?)<\/table>/i);
  if (!tableMatch) return null;

  // 두 번째 <td> = 코드 컬럼
  const tds = tableMatch[1].match(/<td[\s\S]*?<\/td>/gi);
  if (!tds || tds.length < 2) return null;

  const codeTd = tds[1];
  // 각 <div> 한 줄씩 추출
  const lines = [...codeTd.matchAll(/<div[^>]*>([\s\S]*?)<\/div>/gi)]
    .map(m => decodeHtmlEntities(m[1].replace(/<[^>]*>/g, '')));

  return lines.join('\n').trim() || null;
}

// 코드 테이블 제거 후 질문 텍스트 추출
function extractQuestion(html) {
  // colorscripter 블록 전체 제거
  let text = html.replace(/<div[^>]*colorscripter-code[^>]*>[\s\S]*?(?=<p|$)/gi, '');
  // table 블록 제거 (코드 테이블)
  text = text.replace(/<table[\s\S]*?<\/table>/gi, '');
  // p 태그 내용 추출 → 줄바꿈 연결
  const paragraphs = [...text.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(m => stripTags(m[1]).trim())
    .filter(Boolean);

  if (paragraphs.length > 0) return paragraphs.join('\n').trim();

  // fallback: 태그 전부 제거
  return stripTags(text).replace(/\s+/g, ' ').trim();
}

// ── 메인 ─────────────────────────────────────────────────────

async function main() {
  console.log('📥 exams.js 다운로드 중...');
  const res = await fetch(URL);
  if (!res.ok) { console.error('❌ fetch 실패:', res.status); process.exit(1); }
  const raw = await res.text();

  // ES module export → 변수 추출
  const match = raw.match(/export const exams\s*=\s*(\[[\s\S]*\]);?\s*$/);
  if (!match) { console.error('❌ exams 데이터 파싱 실패'); process.exit(1); }

  const exams = JSON.parse(match[1]);
  console.log(`📦 세션: ${exams.length}개`);

  // ── 변환 ──────────────────────────────────────────────────
  const SESSIONS = [];
  const QUESTIONS = {};

  for (const exam of exams) {
    // "2026년-1회" → year: 2026, round: 1
    const m = exam.id.match(/(\d{4})년-(\d+)회/);
    if (!m) continue;
    const year = parseInt(m[1]);
    const round = parseInt(m[2]);
    const key = `${year}-${round}`;

    const qs = exam.questions.map(q => {
      const code = extractCode(q.promptHtml);
      const question = extractQuestion(q.promptHtml);
      return {
        id: `${key}-${String(q.number).padStart(2, '0')}`,
        number: q.number,
        question: question,
        answer: q.answerText || '',
        explanation: null,
        code: code,
        type: code ? '코드완성' : '단답형',
      };
    });

    SESSIONS.push({ year, round, count: qs.length });
    QUESTIONS[key] = qs;
  }

  // 연도 내림차순, 회차 오름차순 정렬
  SESSIONS.sort((a, b) => a.year !== b.year ? b.year - a.year : a.round - b.round);

  const total = Object.values(QUESTIONS).reduce((s, arr) => s + arr.length, 0);

  // ── 출력 ──────────────────────────────────────────────────
  const output = `// 정보처리기사 실기 기출문제 (2020~2026, 개정 이후 전 회차)
// 출처: github.com/0625yt/jeongcheogi-practice
// 생성: ${new Date().toISOString().slice(0, 10)}  재생성: node scripts/build-exam-data.js

const SESSIONS = ${JSON.stringify(SESSIONS, null, 2)};

const QUESTIONS = ${JSON.stringify(QUESTIONS, null, 2)};

export function getSessionList() {
  return SESSIONS;
}

export function getSessionQuestions(year, round) {
  return QUESTIONS[\`\${year}-\${round}\`] || [];
}
`;

  writeFileSync(OUT, output, 'utf8');
  console.log(`✅ 완료: ${OUT}`);
  console.log(`   세션 ${SESSIONS.length}개 · 문제 ${total}개`);

  // 샘플 출력
  const sample = QUESTIONS[Object.keys(QUESTIONS)[0]]?.[0];
  if (sample) {
    console.log('\n📋 샘플 (첫 번째 문제):');
    console.log('  Q:', sample.question.slice(0, 60) + '...');
    console.log('  A:', sample.answer);
    console.log('  코드:', sample.code ? '있음' : '없음');
  }
}

main().catch(e => { console.error('💥', e.message); process.exit(1); });
