// Vercel Serverless Function — Gemini 문제 재생성 (JSON 단건 반환)
// 클라이언트: fetch('/api/generate-question', {method:'POST', body: JSON.stringify({pdfExcerpt})}) → JSON 객체.

import { GoogleGenerativeAI } from '@google/generative-ai';
import {
  QUESTION_GENERATE_SYSTEM,
  buildQuestionGenerateUserPrompt,
  AI_MODEL,
  AI_MAX_OUTPUT_TOKENS,
  SUBJECT_CODES,
  QUESTION_TYPES,
} from '../src/lib/aiPrompts.js';

function tryParseQuestionJson(raw) {
  // Gemini가 가끔 ```json ... ``` 코드 펜스를 두르므로 제거 후 파싱.
  const trimmed = raw.trim().replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
  const obj = JSON.parse(trimmed);
  if (!SUBJECT_CODES.includes(obj.subject)) {
    throw new Error(`subject 값이 유효하지 않습니다: ${obj.subject}`);
  }
  if (!QUESTION_TYPES.includes(obj.type)) {
    throw new Error(`type 값이 유효하지 않습니다: ${obj.type}`);
  }
  if (!obj.question || !obj.answer) {
    throw new Error('question 또는 answer가 비어 있습니다.');
  }
  obj.keywords = Array.isArray(obj.keywords) ? obj.keywords : [];
  return obj;
}

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

  const { pdfExcerpt } = req.body || {};
  if (!pdfExcerpt || typeof pdfExcerpt !== 'string') {
    res.status(400).json({ error: 'pdfExcerpt(string)는 필수입니다.' });
    return;
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: AI_MODEL,
      systemInstruction: QUESTION_GENERATE_SYSTEM,
      generationConfig: {
        maxOutputTokens: AI_MAX_OUTPUT_TOKENS,
        temperature: 0.8,
        responseMimeType: 'application/json',
      },
    });

    const userPrompt = buildQuestionGenerateUserPrompt(pdfExcerpt.slice(0, 4000));
    const result = await model.generateContent(userPrompt);
    const text = result.response.text();
    const question = tryParseQuestionJson(text);
    res.status(200).json({ question });
  } catch (e) {
    res.status(500).json({ error: e?.message || '문제 생성 중 오류가 발생했습니다.' });
  }
}
