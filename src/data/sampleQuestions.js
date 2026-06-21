// 비로그인 게스트가 즉시 풀어볼 수 있는 데모 문제.
// 로그인 사용자에게도 함께 노출 (DB 풀과 합쳐서 보임).
// subject는 UI 라벨 형태 (codeToLabel 변환 결과와 일치).

export const SAMPLE_QUESTIONS = [
  {
    id: 'sample-1',
    subject: '데이터베이스',
    type: '단답형',
    question:
      '데이터베이스에서 트랜잭션의 특성 중 하나로, 트랜잭션 내의 연산이 모두 반영되거나 전혀 반영되지 않아야 하는 성질을 무엇이라고 하는가?',
    answer: '원자성(Atomicity)',
    hint: 'ACID 속성 중 하나입니다.',
    explanation:
      '**원자성(Atomicity)**은 트랜잭션의 연산이 모두 정상적으로 실행되거나, 하나라도 실패하면 전체가 취소(Rollback)되어야 하는 성질입니다.\n\n### ACID 특성 정리\n- **A**tomicity (원자성): All or Nothing\n- **C**onsistency (일관성): 트랜잭션 전후 DB 상태가 일관적\n- **I**solation (독립성): 트랜잭션 간 간섭 없음\n- **D**urability (지속성): 완료된 트랜잭션 결과는 영구 반영\n\n> 💡 **시험 TIP**: ACID를 영어 단어와 함께 암기하세요. 원자성은 \'분리 불가능\'으로 기억!',
    keywords: ['ACID', '트랜잭션', '원자성'],
    source: 'sample',
  },
  {
    id: 'sample-2',
    subject: '소프트웨어 설계',
    type: '단답형',
    question:
      '객체지향 설계 원칙(SOLID) 중 소프트웨어 요소는 확장에는 열려 있으나 변경에는 닫혀 있어야 한다는 원칙은?',
    answer: '개방-폐쇄 원칙(OCP, Open-Closed Principle)',
    hint: 'SOLID의 두 번째 원칙입니다.',
    explanation:
      '**개방-폐쇄 원칙(OCP)**은 기존 코드를 변경하지 않고 새로운 기능을 추가할 수 있어야 한다는 원칙입니다.\n\n### SOLID 원칙 전체 정리\n- **S**RP: 단일 책임 원칙\n- **O**CP: 개방-폐쇄 원칙 ← 오늘 문제\n- **L**SP: 리스코프 치환 원칙\n- **I**SP: 인터페이스 분리 원칙\n- **D**IP: 의존 역전 원칙\n\n> 💡 **시험 TIP**: 확장엔 Open, 수정엔 Closed. 인터페이스/추상클래스로 구현!',
    keywords: ['SOLID', 'OCP', '객체지향'],
    source: 'sample',
  },
  {
    id: 'sample-3',
    subject: '프로그래밍 언어',
    type: '코드완성',
    question:
      '다음 Python 코드의 출력 결과를 쓰시오.\n\n```python\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))\n```',
    answer: '120',
    hint: '재귀 함수입니다. 5! 를 계산하세요.',
    explanation:
      '**재귀 함수**로 팩토리얼을 계산하는 코드입니다.\n\n### 실행 흐름\n```\nfactorial(5)\n= 5 × factorial(4)\n= 5 × 4 × factorial(3)\n= 5 × 4 × 3 × factorial(2)\n= 5 × 4 × 3 × 2 × factorial(1)\n= 5 × 4 × 3 × 2 × 1\n= 120\n```\n\n> 💡 **시험 TIP**: 재귀 문제는 base case(탈출 조건)부터 확인하세요. `n <= 1`이면 1 반환!',
    keywords: ['재귀', '팩토리얼', 'Python'],
    source: 'sample',
  },
];
