// PDF 파싱 유틸 — 브라우저 클라이언트에서만 동작 (서버 저장 없음, 저작권 안전)
// 추출한 raw 텍스트는 절대 그대로 DB에 저장하거나 UI에 그대로 노출하지 말 것.
// 반드시 Claude API로 재생성된 결과만 다음 단계로 전달.

import * as pdfjsLib from 'pdfjs-dist';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

export const MAX_PDF_BYTES = 10 * 1024 * 1024; // 10MB

export class PdfParseError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'PdfParseError';
    this.code = code; // 'TOO_LARGE' | 'NOT_PDF' | 'EMPTY' | 'PARSE_FAILED'
  }
}

function validateFile(file) {
  if (!file) throw new PdfParseError('파일이 선택되지 않았습니다.', 'EMPTY');
  if (file.type && file.type !== 'application/pdf' && !file.name?.toLowerCase().endsWith('.pdf')) {
    throw new PdfParseError('PDF 파일만 업로드할 수 있어요.', 'NOT_PDF');
  }
  if (file.size > MAX_PDF_BYTES) {
    throw new PdfParseError('PDF는 10MB 이하만 지원해요.', 'TOO_LARGE');
  }
}

// PDF → 페이지별 텍스트 배열. onProgress(currentPage, totalPages)로 진행률 알림.
export async function parsePdf(file, { onProgress } = {}) {
  validateFile(file);

  let pdf;
  try {
    const arrayBuffer = await file.arrayBuffer();
    pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  } catch (e) {
    throw new PdfParseError('PDF를 열 수 없습니다. 손상되었거나 비밀번호가 걸려 있을 수 있어요.', 'PARSE_FAILED');
  }

  const pages = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const text = content.items.map((item) => item.str).join(' ').replace(/\s+/g, ' ').trim();
    pages.push(text);
    onProgress?.(i, pdf.numPages);
  }

  const fullText = pages.join('\n');
  if (!fullText.trim()) {
    throw new PdfParseError('PDF에서 추출할 텍스트가 없습니다 (스캔본일 수 있어요).', 'EMPTY');
  }
  return { pages, fullText, pageCount: pdf.numPages };
}
