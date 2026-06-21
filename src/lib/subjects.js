// 과목 코드 ↔ UI 라벨 단일 출처
// DB CHECK enum: 'sw-design' | 'sw-dev' | 'db' | 'lang' | 'infra'

export const SUBJECT_CODE_TO_LABEL = {
  'sw-design': '소프트웨어 설계',
  'sw-dev': '소프트웨어 개발',
  db: '데이터베이스',
  lang: '프로그래밍 언어',
  infra: '시스템 구축관리',
};

const LABEL_TO_CODE = Object.fromEntries(
  Object.entries(SUBJECT_CODE_TO_LABEL).map(([code, label]) => [label, code])
);

export function labelToCode(label) {
  if (LABEL_TO_CODE[label]) return LABEL_TO_CODE[label];
  if (SUBJECT_CODE_TO_LABEL[label]) return label; // already a code
  return null;
}

export function codeToLabel(code) {
  return SUBJECT_CODE_TO_LABEL[code] || code;
}
