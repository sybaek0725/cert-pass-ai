// CERT-42: 공유 풀 시드 스크립트
// 241토픽 × 1문제를 Gemini로 생성해 Supabase에 source='shared'로 INSERT.
// 실행: node scripts/seed-questions.js
// 이미 시드된 토픽은 건너뜀 (재실행 안전).

import 'dotenv/config';
import { WebSocket } from 'ws';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';
import { getAllTopics } from '../src/data/topics.js';
import {
  QUESTION_GENERATE_SYSTEM,
  buildTopicQuestionUserPrompt,
  AI_MODEL,
} from '../src/lib/aiPrompts.js';

globalThis.WebSocket = WebSocket;

const DELAY_MS = 4200; // 15 RPM 한도 내 유지
const SUBJECT_CODES = ['sw-design', 'sw-dev', 'db', 'lang', 'infra'];
const QUESTION_TYPES = ['단답형', '빈칸', '코드완성'];

function parseQuestion(raw) {
  const trimmed = raw.trim().replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
  const obj = JSON.parse(trimmed);
  if (!SUBJECT_CODES.includes(obj.subject)) obj.subject = null;
  if (!QUESTION_TYPES.includes(obj.type)) obj.type = '단답형';
  if (!obj.question || !obj.answer) throw new Error('question/answer 누락');
  obj.keywords = Array.isArray(obj.keywords) ? obj.keywords : [];
  return obj;
}

async function main() {
  // ── 환경변수 검증 ─────────────────────────────────────────
  const geminiKey = process.env.GEMINI_API_KEY;
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const adminEmail = (process.env.ADMIN_EMAILS || '').split(',')[0].trim().toLowerCase();

  if (!geminiKey || !supabaseUrl || !serviceRoleKey) {
    console.error('❌ 필수 환경변수 없음: GEMINI_API_KEY, VITE_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY');
    process.exit(1);
  }
  if (!adminEmail) {
    console.error('❌ ADMIN_EMAILS 환경변수 없음');
    process.exit(1);
  }

  // ── Supabase (service_role → RLS 우회) ───────────────────
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  // ── 관리자 UUID 조회 ──────────────────────────────────────
  const { data: { users }, error: userErr } = await supabase.auth.admin.listUsers({ perPage: 1000 });
  if (userErr) {
    console.error('❌ 관리자 계정 조회 실패:', userErr.message);
    process.exit(1);
  }
  const adminUser = users.find((u) => u.email?.toLowerCase() === adminEmail);
  if (!adminUser) {
    console.error(`❌ 관리자 계정 없음: ${adminEmail}`);
    process.exit(1);
  }
  console.log(`✅ 관리자: ${adminEmail} (${adminUser.id})`);

  // ── 이미 시드된 토픽 확인 (재실행 안전) ──────────────────
  const { data: existing } = await supabase
    .from('questions')
    .select('topic_id')
    .eq('source', 'shared')
    .not('topic_id', 'is', null);
  const seededIds = new Set((existing || []).map((q) => q.topic_id));
  console.log(`📊 이미 시드됨: ${seededIds.size}개`);

  // ── 시드 대상 필터 ────────────────────────────────────────
  const allTopics = getAllTopics();
  const toSeed = allTopics.filter((t) => !seededIds.has(t.id));
  console.log(`🎯 시드 대상: ${toSeed.length}/${allTopics.length}개`);
  console.log(`⏱  예상 시간: 약 ${Math.ceil((toSeed.length * DELAY_MS) / 60000)}분\n`);

  if (toSeed.length === 0) {
    console.log('✅ 모든 토픽 시드 완료');
    return;
  }

  // ── Gemini 모델 초기화 ────────────────────────────────────
  const genAI = new GoogleGenerativeAI(geminiKey);
  const model = genAI.getGenerativeModel({
    model: AI_MODEL,
    systemInstruction: QUESTION_GENERATE_SYSTEM,
    generationConfig: {
      maxOutputTokens: 2048,
      temperature: 0.8,
      responseMimeType: 'application/json',
    },
  });

  // ── 시드 루프 ─────────────────────────────────────────────
  let success = 0;
  let failed = 0;

  for (let i = 0; i < toSeed.length; i++) {
    const topic = toSeed[i];
    const label = `[${String(i + 1).padStart(3, '0')}/${toSeed.length}]`;
    const name = topic.name.length > 35 ? topic.name.slice(0, 35) + '…' : topic.name;
    process.stdout.write(`${label} Ch.${topic.chapterId} · ${name} → `);

    try {
      const userPrompt = buildTopicQuestionUserPrompt(topic.name, topic.chapterName);
      const result = await model.generateContent(userPrompt);
      const q = parseQuestion(result.response.text());

      const { error: insertErr } = await supabase.from('questions').insert({
        user_id: adminUser.id,
        subject: q.subject || null,
        type: q.type,
        question: q.question,
        answer: q.answer,
        hint: q.hint || null,
        explanation: q.explanation || null,
        keywords: q.keywords,
        source: 'shared',
        chapter_id: topic.chapterId,
        topic_id: topic.id,
      });

      if (insertErr) throw new Error(insertErr.message);
      console.log('✅');
      success++;
    } catch (e) {
      console.log(`❌ ${e.message}`);
      failed++;
    }

    if (i < toSeed.length - 1) {
      await new Promise((r) => setTimeout(r, DELAY_MS));
    }
  }

  console.log(`\n🎉 완료! 성공: ${success}개, 실패: ${failed}개`);
  if (failed > 0) console.log('💡 실패한 토픽은 재실행하면 자동으로 다시 시도합니다.');
}

main().catch((e) => {
  console.error('💥 오류:', e.message);
  process.exit(1);
});
