// Vercel Serverless Function — Gemini AI 해설 스트리밍
// 클라이언트는 fetch('/api/explanation', {method:'POST', body: JSON.stringify(...)}) 호출.
// 응답은 SSE 형식. 각 라인 "data: {\"text\": \"...\"}\n\n" 또는 "data: [DONE]\n\n".

import { GoogleGenerativeAI } from '@google/generative-ai';
import {
  EXPLANATION_SYSTEM,
  buildExplanationUserPrompt,
  AI_MODEL,
  AI_MAX_OUTPUT_TOKENS,
} from '../src/lib/aiPrompts.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'GEMINI_API_KEY 환경변수가 설정되지 않았습니다.' });
    return;
  }

  const { question, correctAnswer, userAnswer } = req.body || {};
  if (!question || !correctAnswer) {
    res.status(400).json({ error: 'question, correctAnswer는 필수입니다.' });
    return;
  }

  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: AI_MODEL,
      systemInstruction: EXPLANATION_SYSTEM,
      generationConfig: { maxOutputTokens: AI_MAX_OUTPUT_TOKENS, temperature: 0.4 },
    });

    const userPrompt = buildExplanationUserPrompt({ question, correctAnswer, userAnswer });
    const result = await model.generateContentStream(userPrompt);

    for await (const chunk of result.stream) {
      const text = chunk.text();
      if (text) res.write(`data: ${JSON.stringify({ text })}\n\n`);
    }
    res.write('data: [DONE]\n\n');
    res.end();
  } catch (e) {
    const message = e?.message || 'AI 응답 생성 중 오류가 발생했습니다.';
    res.write(`data: ${JSON.stringify({ error: message })}\n\n`);
    res.end();
  }
}
