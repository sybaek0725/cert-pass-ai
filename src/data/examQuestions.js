// 정보처리기사 실기 기출문제 (2020~2026, 개정 이후 전 회차)
// 출처: github.com/0625yt/jeongcheogi-practice
// 생성: 2026-08-26  재생성: node scripts/build-exam-data.js

const SESSIONS = [
  {
    "year": 2026,
    "round": 1,
    "count": 20
  },
  {
    "year": 2025,
    "round": 1,
    "count": 20
  },
  {
    "year": 2025,
    "round": 2,
    "count": 20
  },
  {
    "year": 2025,
    "round": 3,
    "count": 20
  },
  {
    "year": 2024,
    "round": 1,
    "count": 20
  },
  {
    "year": 2024,
    "round": 2,
    "count": 20
  },
  {
    "year": 2024,
    "round": 3,
    "count": 20
  },
  {
    "year": 2023,
    "round": 1,
    "count": 20
  },
  {
    "year": 2023,
    "round": 2,
    "count": 20
  },
  {
    "year": 2023,
    "round": 3,
    "count": 20
  },
  {
    "year": 2022,
    "round": 1,
    "count": 20
  },
  {
    "year": 2022,
    "round": 2,
    "count": 20
  },
  {
    "year": 2022,
    "round": 3,
    "count": 20
  },
  {
    "year": 2021,
    "round": 1,
    "count": 20
  },
  {
    "year": 2021,
    "round": 2,
    "count": 20
  },
  {
    "year": 2021,
    "round": 3,
    "count": 20
  },
  {
    "year": 2020,
    "round": 1,
    "count": 20
  },
  {
    "year": 2020,
    "round": 2,
    "count": 20
  },
  {
    "year": 2020,
    "round": 3,
    "count": 20
  },
  {
    "year": 2020,
    "round": 4,
    "count": 20
  }
];

const QUESTIONS = {
  "2026-1": [
    {
      "id": "2026-1-01",
      "number": 1,
      "question": "1. 다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "106.00",
      "explanation": null,
      "code": "#include <stdio.h>\n \ndouble arr1(int p[], int len) {\n    double av = 0;\n    int i;\n    for (i = 0; i < len; i++) {\n        av += (double) p[i];\n    }\n    return av / len;\n}\n \ndouble arr2(int * p, int len) {\n    double av = 0;\n    int i;\n    for (i = 0; i < len; i++) {\n        av += (double)( * (p + i));\n    }\n    return av / len;\n}\n \nint main() {\n    int arr[10] = {\n        80,\n        20,\n        50,\n        55,\n        45,\n        95,\n        55,\n        10,\n        40,\n        80\n    };\n    int len = 10;\n \n    printf(\"%.2f\", arr1(arr, len) + arr2(arr, len));\n \n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2026-1-02",
      "number": 2,
      "question": "2. 다음 설명에 해당하는 디자인 패턴의 유형을 괄호( ) 안에 쓰시오.\n&bull; ( ㄱ ) 패턴은 기능의 클래스 계층과 구현의 클래스 계층을 연결 &bull; ( ㄴ ) 패턴은 한 객체의 상태가 바뀌면 그 객체에 의존",
      "answer": "ㄱ. Bridge ㄴ. Observer",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2026-1-03",
      "number": 3,
      "question": "3. 데이터베이스(DB) 설계 절차를 순서대로 나타낸 것이다. 각 빈칸에 들어갈 알맞은 용어를 쓰시오.",
      "answer": "ㄱ.요구사항 분석 ㄴ.개념적 설계 ㄷ.논리적 설계 ㄹ.물리적 설계 ㅁ.구현",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2026-1-04",
      "number": 4,
      "question": "4. 다음은 비기능적 요구사항에 대한 설명이다. 각 항목이 의미하는 요구사항 유형을 보기에서 골라 쓰시오.1. 시스템 운영 중 로그 관리 및 모니터링 기능을 제공해야 한다.2. 시스템 운영 시 최소 메모리 용량을 확보해야 하며, 자원 사용량은 제한 범위 내에 있어야 한다. 3. 사용자 요청에 대한 응답 시간은 최대 1분을 초과하지 않아야 한다.\n보기\n신뢰성, 가용성, 운영, 유지보수성, 자원, 성능, 이식성 ,보안, 품질",
      "answer": "1. 운영 2. 자원 3. 성능",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2026-1-05",
      "number": 5,
      "question": "5. 다음 용어의 영문 약자를 쓰시오.",
      "answer": "ISMS",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2026-1-06",
      "number": 6,
      "question": "6. HDLC는 비트 중심의 데이터 링크 제어 프로토콜로, 프레임 단위로 데이터를 전송하며 흐름 제어 및 오류 복구 기능을 제공한다. 다음 설명을 읽고 알맞은 용어를 쓰시오.\nHDLC 구성 요소\n1. HDLC 프레임의 구성 단위로, 실제 사용자 데이터를 전송하는 프레임\n2. 데이터 링크의 흐름을 관리하고 오류 제어 및 통신 상태를 감시하는 프레임\n3. 순서 번호 없이 링크 설정, 해제, 모드 설정 등 제어 기능을 수행하는 프레임\n4. 두 국(Station)이 동등한 위치에서 서로 명령과 응답을 주고받는 모드\n5. 종국(Secondary)이 주국(Primary)의 허가 없이도 자발적으로 응답을 전송할 수 있는 모드",
      "answer": "1. 정보 2. 감독 3. 비번호 4. 비동기 균형 모드 5. 비동기 응답 모드",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2026-1-07",
      "number": 7,
      "question": "7. 다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "2",
      "explanation": null,
      "code": "class A {\n    String f(Object x) {\n        return \"1\";\n    }\n    \n    String g() {\n        return f(\"a\"); \n    }\n}\n \nclass B extends A {\n    String f(Object x) {\n        return \"2\";\n    }\n    \n    String f(String x) {\n        return \"3\";\n    }\n}\n \npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.g());\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2026-1-08",
      "number": 8,
      "question": "8. 아래 파이썬 코드가 있다. 입력값으로 HumanDev를 주었을 때 출력되는 결과를 쓰시오.",
      "answer": "veDamuH",
      "explanation": null,
      "code": "i = input()\nx = []\n \nfor word in i.split():\n    x.append(word)\n \ny = ''.join(x)\nz = ''.join(c for c in y[::-1] if c not in 'ong')\n \nprint(z)",
      "type": "코드완성"
    },
    {
      "id": "2026-1-09",
      "number": 9,
      "question": "9. 아래 조건을 참고하여 각 SQL 구문을 실행했을 때 반환되는 행(Row)의 수를 쓰시오. (단, DEPT 칼럼은 학과명이다.)\n테이블 조건\nSTUDENT 테이블에는 다음 세 학과의 학생 정보가 저장되어 있다. 컴퓨터과  50명  &middot; 인터넷과  100명  &middot; 사무자동화과  50 SQL 구문 1. SELECT DEPT FROM STUDENT; 2. SELECT DISTINCT DEPT FROM STUDENT; 3. SELECT COUNT(DISTINCT DEPT) FROM STUDENT     WHERE DEPT = '컴퓨터과';",
      "answer": "1. 200 2. 3 3. 1",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2026-1-10",
      "number": 10,
      "question": "10. 아래는 선수(PLAYER) 정보를 관리하는 테이블을 정의하는 SQL 문이다. 팀(TEAM) 테이블의 특정 칼럼을 참조하는 외래키 제약 조건을 추가하려 할 때, 괄호 ①~⑤에 들어갈 적절한 예약어(keyword) 또는 칼럼명을 아래 조건을 참고하여 쓰시오.\n조건\n외래키 제약 조건의 이름은 TEAM_TF 로 지정한다. PLAYER 테이블의 TEAM_ID 칼럼이 외래키 역할을 한다. TEAM 테이블의 TEAM_ID2 칼럼을 참조 대상으로 한다. SQL 문\nCREATE TABLE PLAYER (   PLAYER_ID  CHAR(7)     NOT NULL,   PLAYER_NAME VARCHAR2(20) NOT NULL,   TEAM_ID   CHAR(3)     NOT NULL,   PRIMARY KEY (PLAYER_ID),   ( 1 ) TEAM_TF   ( 2 ) KEY ( 3 )   ( 4 ) TEAM ( 5 ) );",
      "answer": "1. CONSTRAINT 2. FOREIGN 3. TEAM_ID 4. REFERENCES 5. TEAM_ID2",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2026-1-11",
      "number": 11,
      "question": "11. 두 호스트 a, b의 IP 주소와 서브넷 마스크가 주어졌을 때, 각 호스트가 속한 네트워크 주소를 CIDR 표기법으로 쓰시오.\n조건 &middot; 호스트 a의 IP 주소: 192.168.11.20 &middot; 호스트 b의 IP 주소: 192.168.12.200 &middot; 서브넷 마스크: 255.255.254.0 구하는 것 a. 호스트 a (192.168.11.20) 가 속한 네트워크 주소 b. 호스트 b (192.168.12.200) 가 속한 네트워크 주소",
      "answer": "a. 192.168.10.0/23 b. 192.168.12.0/23",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2026-1-12",
      "number": 12,
      "question": "12. 다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "20",
      "explanation": null,
      "code": "struct fns {\n    int* (*fn)(int*);\n} mine;\n \nint* dummy(int *d) {\n    return d + 1;\n}\n \nint main() {\n    struct fns mine;\n    int n[] = {16, 32};\n    mine.fn = dummy;\n    printf(\"%x\", *mine.fn(n));\n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2026-1-13",
      "number": 13,
      "question": "13. 다음은 파이썬에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "9A7A5A3A1A",
      "explanation": null,
      "code": "lst = list(range(10))\nfor c in lst[::-2]:\n    print(c, end='A')\nprint()",
      "type": "코드완성"
    },
    {
      "id": "2026-1-14",
      "number": 14,
      "question": "14. 아래 파이썬 코드를 실행했을 때 출력되는 값을 쓰시오.",
      "answer": "10",
      "explanation": null,
      "code": "def f(a):\n    m = [[x] for x in a]\n    b = m[:]\n    for i in range(len(b) - 1):\n        b[i+1] += b[i]\n    return sum(len(x) for x in m)\n \nprint(f([1, 2, 3, 4]))",
      "type": "코드완성"
    },
    {
      "id": "2026-1-15",
      "number": 15,
      "question": "15. 다음은 특정 공격 기법에 대한 설명이다. 아래 내용을 읽고 해당하는 공격 기법을 [보기]에서 골라 쓰시오.\n원본 데이터 파일은 별도로 존재하며, 공격자는 해당 파일의 경로를 가리키는 특수 파일을 생성한다. 프로그램이 임시 파일을 생성하는 순간을 틈타 해당 임시 파일을 미리 준비한 특수 파일로 교체한다. 이후 프로그램이 임시 파일의 존재를 확인하면 교체된 파일을 정상으로 인식하고 동작하게 된다. 공격 절차 1. 공격자는 실제 파일이 아닌, 특정 파일의 경로를 참조하는 특수 파일을 미리 준비한다. 2. 프로그램이 임시 파일을 생성하는 시점을 노려 해당 임시 파일을 준비한 특수 파일로 교체한다. 3. 프로그램이 임시 파일의 존재 여부를 확인할 때, 조건에 부합하면 정상으로 판단하고 동작하며 부합하지 않으면 임시 파일을 삭제한다.\n[보기] 하드링크 / 심볼릭링크 / 소프트링크 / 정적링크 / 동적링크",
      "answer": "심볼릭링크",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2026-1-16",
      "number": 16,
      "question": "16. 다음은 특정 보안 공격 기법에 대한 설명이다. 해당하는 공격 기법의 명칭을 쓰시오.\n공격자는 목표 대상이 업무 또는 관심사로 인해 자주 방문하는 합법적인 웹사이트를 사전에 파악한다.\n해당 사이트에 악성코드를 삽입하여 감염시켜 놓고, 피해자가 해당 사이트에 접속하는 순간 피해자의 시스템에 악성 프로그램이 자동으로 설치되도록 유도한다. 공격자는 불특정 다수를 노리는 것이 아니라 특정 조직이나 인물을 겨냥하며, 접속자의 IP나 환경 조건을 확인하여 목표 대상에게만 선택적으로 악성코드가 실행되도록 설계하는 경우도 있다.\n피해자는 정상적인 사이트를 방문했을 뿐이므로 감염 사실을 인지하기 어렵다는 특징이 있다.",
      "answer": "워터링 홀 (Watering Hole)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2026-1-17",
      "number": 17,
      "question": "17.다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "1123",
      "explanation": null,
      "code": "public class Main {\n    public static void main(String[] args) {\n        int x1 = 9;\n        int x2 = 2;\n        String x3 = \"3\";\n        System.out.println(x1 + x2 + \"2\" + x3);\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2026-1-18",
      "number": 18,
      "question": "18. 다음은 SQL에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.\nSELECT COUNT(*) FROM employee e JOIN dept d ON e.dep_id = d.dept_id WHERE d.budget > (     SELECT AVG(budget) FROM dept );",
      "answer": "2",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2026-1-19",
      "number": 19,
      "question": "19.다음은 통합 테스트에서 사용되는 더미 모듈에 대한 설명이다. 괄호 안에 들어갈 알맞은 용어를 쓰시오.\n( 1 ) 은/는 하위 모듈을 대신하여 단순한 결과값만 반환하도록 임시로 작성된 더미 모듈로, 하향식 통합 테스트 수행 시 필요하다. ( 2 ) 은/는 상위 모듈을 대신하여 하위 모듈의 데이터 입력과 출력을 확인하기 위한 더미 모듈로, 상향식 통합 테스트 수행 시 필요하다.",
      "answer": "1. 스텁 2. 드라이버",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2026-1-20",
      "number": 20,
      "question": "20. 다음은 응집도의 유형에 대한 설명이다. 괄호 안에 들어갈 알맞은 용어를 쓰시오.\n( 1 ) 은/는 모듈이 다수의 관련 기능을 가질 때, 모듈 안의 구성요소들이 그 기능을 순차적으로 수행하는 경우의 응집도이다. ( 2 ) 은/는 동일한 입력과 출력을 사용하여 서로 다른 기능을 수행하는 활동들이 모여 있는 경우의 응집도이다. ( 3 ) 은/는 모듈 내부의 모든 기능이 단일한 목적을 위해 수행되는 경우의 응집도이다.",
      "answer": "1. 절차 2. 교환 3. 기능",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2025-1": [
    {
      "id": "2025-1-01",
      "number": 1,
      "question": "1. 다음은 네트워크 보완에 관련된 문제이다. 괄호안에 알맞는 용어를 작성하시오.\n(   )은/는 '세션을 가로채다.' 라는 의미로 다른 사람의 세션 상태를 훔치거나 도용하여 액세스하는 해킹 기법이다.\nTCP (   )은/는 TCP의 3-way 핸드셰이크가 완료된 후에 공격자가 시퀀스 번호 등을 조작하여 정상적인 세션을 가로채고 인증 없이 통신을 탈취하는 공격 공격이다.",
      "answer": "세션 하이재킹",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-1-02",
      "number": 2,
      "question": "2. 다음은 제약조건과 관련된 문제이다. 괄호안에 알맞는 용어를 보기에 골라 작성하시오.\n[보기]\n개체, 참조, 도메인",
      "answer": "ㄱ. 도메인 ㄴ. 개체 ㄷ. 참조",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-1-03",
      "number": 3,
      "question": "3. 아래의 내용에서 설명 글의 괄호안의 용어를 영문 약자로 작성하시오.\n(        ) 은/는 3글자의 영어 약자로 이루어진 오류 기법으로 데이터를 전송하거나 저장할 때 데이터의 오류를 감지하는 데 사용되는 오류 검출 코드이다.\n(        ) 은/는 데이터에 체크섬을 추가하여 데이터를 전송하거나 저장한 후, 수신 또는 읽을 때 이 체크섬을 다시 계산하여 데이터가 변경되었는지 확인하는 기법이다.\n(        ) 은/는 데이터 전송의 안정성을 높이는 데 중요한 역할을 한다.\n데이터는 이진수(0과 1)로 표현되며 정해진 다항식(x&sup3; + x + 1)을 기반으로 데이터를 2진수 나눗셈하고나머지를 (       ) 값으로 삼는다.",
      "answer": "CRC",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-1-04",
      "number": 4,
      "question": "4. 다음은 악성코드 관련된 문제이다. 아래 내용을 확인하여 보기에 골라 작성하시오. 사용자가 원치 않는 소프트웨어를 구매하도록 조작하기 위해 사회 공학을 사용하여 충격, 불안 또는 위협에 대한 인식을 유발하는 악성 소프트웨어의 한 형태이다. &lsquo;겁을 주다&rsquo;라는 영어 단어에서 유래한 것으로 공포를 이용하여 피해자를 속여 대가를 지불 하거나 특정 행동을 유도하는 랜섬웨어이다. 가짜 바이러스 경고나 시스템 문제를 표시하여 사용자가 돈을 지불하거나 특정 소프트웨어를 설치하도록 속이는 방식으로 작동한다.\n보기\nㄱ. 컴포넌트 웨어  ㄴ. 유즈웨어  ㄷ. 셔블웨어  ㄹ. 스캐어 웨어  ㅁ. 안티 스파이 웨어  ㅂ. 네트웨어  ㅅ. 그룹웨어  ㅇ. 애드웨어",
      "answer": "ㄹ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-1-05",
      "number": 5,
      "question": "5. 다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "출력1출력5",
      "explanation": null,
      "code": "public class Main {\n \n  public static void main(String[] args) {\n \n    int a=5,b=0;\n \n    try{\n      System.out.print(a/b);\n    }catch(ArithmeticException e){\n      System.out.print(\"출력1\");\n    }catch(ArrayIndexOutOfBoundsException e) {\n      System.out.print(\"출력2\");\n    }catch(NumberFormatException e) {\n      System.out.print(\"출력3\");\n    }catch(Exception e){\n      System.out.print(\"출력4\");\n    }finally{\n      System.out.print(\"출력5\");\n    }\n  }\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-1-06",
      "number": 6,
      "question": "6. 아래 내용은 ARP/RARP에 대한 설명이다. 각 설명에 해당하는 것을 작성하시오.\n( 1 ) 은/는 네트워크상에서 IP 주소를 MAC 주소로 변환하는 프로토콜이고,\n( 2 ) 은/는 MAC 주소를 IP 주소로 변환하는 프로토콜이다.",
      "answer": "(1) ARP (2) RARP",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-1-07",
      "number": 7,
      "question": "7. 다음은 SQL 문제이다. 아래 두 테이블을 참고하여 보기에 쿼리 실행 결과를 작성하시오.\n[보기]\nSELECT name, incentive FROM emp, sal WHERE emp.id = sal.id and incentives >= 500",
      "answer": "name | incentives 이순신 | 1000",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-1-08",
      "number": 8,
      "question": "8. 아래는 데이터베이스에 관련된 설명이다. 알맞는 용어를 보기에서 골라 괄호를 작성하시오. 1. 릴레이션에서 속성의 개수를 의미 : ( 1 ) 2. 릴레이션에서 튜플의 개수를 의미 : ( 2 ) 3. 한 릴레이션의 속상이 다른 릴레이션의 기본 키를 참조할 때, 참조하는 속성을 의미 : ( 3 ) 4. 특정 속성에 대해 입력될 수 있는 값의 유형이나 범위를 의미하고 무결성을 보장하는 기준 : ( 4 )\n[보기]\nㄱ. domain   ㄴ. primary   ㄷ. degree    ㄹ. candidate   ㅁ. cardinality   ㅂ. attribute   ㅅ. foreign",
      "answer": "(1) ㄷ (2) ㅁ (3) ㅅ (4) ㄱ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-1-09",
      "number": 9,
      "question": "9. IP 주소가 192.168.35.10, 서브넷 255.255.252.0인 PC에서 브로드캐스팅으로 다른 IP로 정보를 전달한다고 할 때 수신할 수 있는 알맞는 IP를 보기에서 골라 모두 작성하시오.\n[보기] ㄱ. 192.168.34.1  ㄴ. 192.168.32.19 ㄷ. 192.168.35.200 ㄹ. 192.168.33.138 ㅁ. 192.168.35.50",
      "answer": "ㄱ,ㄴ,ㄷ,ㄹ,ㅁ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-1-10",
      "number": 10,
      "question": "10. 다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "4 BACDE",
      "explanation": null,
      "code": "#include <stdio.h>\nchar Data[5] = {'B', 'A', 'D', 'E'};\nchar c;\n \nint main(){\n    int i, temp, temp2;\n \n    c = 'C';\n    printf(\"%d\\n\", Data[3]-Data[1]);\n \n    for(i=0;i<5;++i){\n        if(Data[i]>c)\n            break;\n    }\n \n    temp = Data[i];\n    Data[i] = c;\n    i++;\n \n    for(;i<5;++i){\n        temp2 = Data[i];\n        Data[i] = temp;\n        temp = temp2;\n    }\n \n    for(i=0;i<5;i++){\n        printf(\"%c\", Data[i]);\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-1-11",
      "number": 11,
      "question": "11. 다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "13",
      "explanation": null,
      "code": "#include <stdio.h>\n#include <stdlib.h>\n \nvoid set(int** arr, int* data, int rows, int cols) {\n    for (int i = 0; i < rows * cols; ++i) {\n        arr[((i + 1) / rows) % rows][(i + 1) % cols] = data[i];\n    }\n}\n \nint main() {\n    int rows = 3, cols = 3, sum = 0;\n    int data[] = {5, 2, 7, 4, 1, 8, 3, 6, 9}; \n    int** arr;\n    arr = (int**) malloc(sizeof(int*) * rows);\n    for (int i = 0; i < cols; i++) {\n        arr[i] = (int*) malloc(sizeof(int) * cols);\n    }\n \n    set(arr, data, rows, cols);\n \n    for (int i = 0; i < rows * cols; i++) {\n        sum += arr[i / rows][i % cols] * (i % 2 == 0 ? 1 : -1);\n    }\n \n    for(int i=0; i<rows; i++) {\n        free(arr[i]);\n    }\n    free(arr);\n \n    printf(\"%d\", sum);\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-1-12",
      "number": 12,
      "question": "12. 다음은 결합도와 관련된 내용이다. 보기에 알맞는 답을 골라 작성하시오. (1) 다른 모듈 내부에 있는 변수나 기능을 다른 모듈에서 사용하는 경우의 결합도 (2) 모듈 간의 인터페이스로 배열이나 오브젝트, 자료구조 등이 전달되는 경우의 결합도 (3) 파라미터가 아닌 모듈 밖에 선언되어 있는 전역 변수를 참조하고 전역 변수를 갱신하는 식으로 상호작용하는 경우의 결합도 [보기] ㄱ. 자료 결합도  ㄴ. 스탬프 결합도 ㄷ. 제어 결합도  ㄹ. 공통 결합도  ㅁ. 내용 결합도  ㅂ. 외부 결합도",
      "answer": "(1) ㅁ (2) ㄴ (3) ㄹ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-1-13",
      "number": 13,
      "question": "13. 다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "54",
      "explanation": null,
      "code": "public class Main {\n    public static void main(String[] args) {\n        new Child();\n        System.out.println(Parent.total);\n    }\n}\n \n \nclass Parent {\n    static int total = 0;\n    int v = 1;\n \n    public Parent() {\n        total += (++v);\n        show();    \n    }\n \n    public void show() {\n        total += total;\n    }\n}\n \n \nclass Child extends Parent {\n    int v = 10;\n \n    public Child() {\n        v += 2;\n        total += v++;\n        show();\n    }\n \n    @Override\n    public void show() {\n        total += total * 2;\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-1-14",
      "number": 14,
      "question": "14. 아래는 디자인 패턴에 대한 설명이다. 알맞는 답을 보기에 골라 작성하시오.  서로 다른 인터페이스를 가진 클래스들을 연결해 사용 가능하게 한다. 기존 클래스(Adaptee)를 원하는 인터페이스(Target)에 맞게 변환하는 어댑터(Adapter)를 만든다. 기존 클래스를 감싸서(wrapper) 인터페이스를 변환해주는 역할을 한다.",
      "answer": "Adapter",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-1-15",
      "number": 15,
      "question": "15. 문장(Statement) 커버리지 테스트를 수행하려고 한다. 코드를 아래의 제어 흐름도 빈칸에 연결되도록 작성하고 문장 커버리지 순서대로 작성하시오.\n[흐름도]\n1. (    ①    )    2. (    ②    )    3. (    ③    )    4. (    ④    )    5. (    ⑤    )  6. (    ⑥    )\n문장 커버리지 순서 1 &rarr; 2  &rarr; (          ⑦           )",
      "answer": "(1) int a = 0 (2) a < m || b[a] < x (3) b[a] < 0 (4) b[a] = -b[a]; (5) a++; (6) return 1; (7) ③ &rarr; ④ &rarr; ⑤ &rarr; ② &rarr; ⑥",
      "explanation": null,
      "code": "int Main(int b[], int m, int x) {\n    int a = 0;\n    while (a < m || b[a] < x) {\n        if (b[a] < 0)\n            b[a] = -b[a];\n        a++;\n    }\n    return 1;\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-1-16",
      "number": 16,
      "question": "16. 다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "20",
      "explanation": null,
      "code": "public class Main {\n \n    public static void main(String[] args) {\n        int[] data = {3, 5, 8, 12, 17};\n        System.out.println(func(data, 0, data.length - 1));\n    }\n \n    static int func(int[] a, int st, int end) {\n        if (st >= end) return 0;\n        int mid = (st + end) / 2;\n        return a[mid] + Math.max(func(a, st, mid), func(a, mid + 1, end));\n    } \n \n}",
      "type": "코드완성"
    },
    {
      "id": "2025-1-17",
      "number": 17,
      "question": "17. 다음은 파이썬에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "13",
      "explanation": null,
      "code": "class Node:\n    def __init__(self, value):\n        self.value = value\n        self.children = []\n \ndef tree(li):\n    nodes = [Node(i) for i in li]\n    for i in range(1, len(li)):\n        nodes[(i - 1) // 2].children.append(nodes[i])\n    return nodes[0]\n \ndef calc(node, level=0):\n    if node is None:\n        return 0\n    return (node.value if level % 2 == 1 else 0) + sum(calc(n, level + 1) for n in node.children)\n \nli = [3, 5, 8, 12, 15, 18, 21]\n \nroot = tree(li)\n \nprint(calc(root))",
      "type": "코드완성"
    },
    {
      "id": "2025-1-18",
      "number": 18,
      "question": "18. 다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "35421",
      "explanation": null,
      "code": "#include <stdio.h>   \n#include <stdlib.h>  \n \ntypedef struct Data {\n    int value;\n    struct Data *next;\n} Data;\n \nData* insert(Data* head, int value) {\n    Data* new_node = (Data*)malloc(sizeof(Data));\n    new_node->value = value;\n    new_node->next = head;\n    return new_node;\n}\n \nData* reconnect(Data* head, int value) {\n    if (head == NULL || head->value == value) return head;\n    Data *prev = NULL, *curr = head;\n    while (curr != NULL && curr->value != value) {\n        prev = curr;\n        curr = curr->next;\n    }\n \n    if (curr != NULL && prev != NULL) {\n        prev->next = curr->next;\n        curr->next = head;\n        head = curr;\n    }\n    return head;\n}\n \nint main() {\n \n    Data *head = NULL, *curr;\n    for (int i = 1; i <= 5; i++)\n        head = insert(head, i);\n    head = reconnect(head, 3);\n    for (curr = head; curr != NULL; curr = curr->next)\n        printf(\"%d\", curr->value);\n    return 0; \n}",
      "type": "코드완성"
    },
    {
      "id": "2025-1-19",
      "number": 19,
      "question": "19.다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "908",
      "explanation": null,
      "code": "#include <stdio.h>\n \ntypedef struct student {\n    char* name;\n    int score[3];\n} Student;\n \nint dec(int enc) {\n    return enc & 0xA5;\n}\n \nint sum(Student* p) {\n    return dec(p->score[0]) + dec(p->score[1]) + dec(p->score[2]);\n}\n \nint main() {\n    Student s[2] = { \"Kim\", {0xA0, 0xA5, 0xDB}, \"Lee\", {0xA0, 0xED, 0x81} };\n    Student* p = s;\n    int result = 0;\n \n    for (int i = 0; i < 2; i++) {\n        result += sum(&s[i]);\n    }\n    printf(\"%d\", result);\n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-1-20",
      "number": 20,
      "question": "20. 다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "4",
      "explanation": null,
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(calc(\"5\"));\n  }\n \n  static int calc(int value) {\n    if (value <= 1) return value;\n    return calc(value - 1) + calc(value - 2);\n  }\n \n  static int calc(String str) {\n    int value = Integer.valueOf(str);\n    if (value <= 1) return value;\n    return calc(value - 1) + calc(value - 3);\n  }\n}",
      "type": "코드완성"
    }
  ],
  "2025-2": [
    {
      "id": "2025-2-01",
      "number": 1,
      "question": "1. 다음은 파일 구조와 관련된 설명이다. 설명을 읽고 괄호 안에 들어갈 가장 알맞은 용어를 작성하시오.\n데이터베이스의 물리 설계 시, 레코드에 접근하는 방법은 순차 접근 방법, [&emsp;&emsp;&emsp;] 방법, 해싱 방법 등이 있다.\n이 중 [&emsp;&emsp;&emsp;] 방법은 레코드의 키 값과 포인터를 쌍으로 묶어 저장하며 검색 시 키 값을 기준으로 빠르게 탐색할 수 있도록 설계되어 있다.\n이 방식은 검색 속도가 빠르며 <키 값, 포인터> 쌍으로 구성된 자료 구조를 사용하여 해당 키가 가리키는 주소를 통해 원하는 레코드를 직접 찾을 수 있다.",
      "answer": "인덱스 or 색인",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-2-02",
      "number": 2,
      "question": "2. 다음은 데이터베이스 릴레이션의 구성 요소 중 하나에 대한 설명이다. 설명을 읽고 보기에서 알맞은 기호를 골라 작성하시오.\n릴레이션(Relation)에서 열(Column)을 의미하며 데이터 항목의 속성(Attribute) 또는 특성을 나타낸다.\n각 열은 고유한 이름을 가지며 특정 도메인(Domain)에서 정의된 값을 갖는다.\n예를 들어 \"학생\" 릴레이션에서 학번, 이름, 전공 등은 각각 하나의 열이며 이 열들은 학생의 고유한 속성을 나타낸다.\n이 개념은 파일 구조에서의 필드(Field)에 해당하며 릴레이션에서 행(Row, Tuple)의 구성 요소가 된다.\n[보기]\nㄱ. Cardinality\nㄴ. Domain\nㄷ. Attribute\nㅁ. Degree\nㅂ. Schema\nㅅ. Tuple",
      "answer": "ㄷ. Attribute",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-2-03",
      "number": 3,
      "question": "3. 다음은 정보보안 관련 문제이다. 아래 내용을 보고 알맞는 단어를 작성하시오.\n원격 접속과 관련된 보안 프로토콜이며 암호화된 통신을 제공하는 보안 접속용 프로토콜이다.\n공개키 기반의 인증 방식을 사용하며 암호화된 데이터 전송을 지원한다.\n주로 원격 서버에 안전하게 접속할 때 사용되며 기본 포트 번호는 22번이다.\nTelnet의 보안 취약점을 보완한 대안으로 널리 사용된다.",
      "answer": "SSH",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-2-04",
      "number": 4,
      "question": "4. 스케줄링 알고리즘에 관한 다음 설명을 읽고 (1)과 (2)에 알맞은 스케줄링 알고리즘의 명칭을 각각 쓰시오.\n(1) CPU burst 시간이 짧은 프로세스를 우선적으로 처리하는 스케줄링 방식이다. \"Shortest Next CPU Burst\"라고도 불리며 선점형 또는 비선점형으로 구현될 수 있다.\n(2) 위의 스케줄링 방식을 선점형으로 구현한 형태로 실행 중인 프로세스보다 더 짧은 burst 시간을 가진 프로세스가 도착하면 현재 CPU를 선점한다.",
      "answer": "(1) SJF (Shortest Job First) (2) SRT (Shortest Remaining Time)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-2-05",
      "number": 5,
      "question": "5. 다음은 Java의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
      "answer": "BB",
      "explanation": null,
      "code": "public class Main {\n    public static void change(String[] data, String s){\n        data[0] = s;\n        s = \"Z\";\n    }\n    \n    public static void main(String[] args) {\n        String data[] = { \"A\" };\n        String s = \"B\";\n        \n        change(data, s);\n        System.out.print(data[0] + s);\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-2-06",
      "number": 6,
      "question": "6. 다음은 IP 주소와 서브넷 마스크에 관한 문제이다. 주어진 정보를 참고하여 괄호 안에 들어갈 알맞은 값을 쓰시오.\n호스트의 IP 주소가 223.13.234.132이고 서브넷 마스크가 255.255.255.192일 때 다음 물음에 답하시오.\n이 호스트가 속한 네트워크 주소는 223.13.234.( ① )이다.\n이 네트워크에서 사용 가능한 호스트 수는 ( ② )개이다.\n(단, 네트워크 주소와 브로드캐스트 주소는 제외한다.)",
      "answer": "① 128 ② 62",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-2-07",
      "number": 7,
      "question": "7. 다음은 디자인 패턴에 관한 문제이다. 아래 내용을 보고 알맞는 단어를 작성하시오.\n어떤 객체에 대한 접근을 제어하거나 추가적인 기능을 부여하기 위해 해당 객체의 대리 객체를 사용하는 방식의 디자인 패턴이다.\n실제 객체에 대한 접근 전에 필요한 작업을 수행할 수 있으며 실제 객체의 생성을 지연시켜 메모리와 자원을 절약할 수 있다.\n또한, 실제 객체를 감추어 정보은닉을 강화할 수 있다는 장점이 있다.",
      "answer": "Proxy",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-2-08",
      "number": 8,
      "question": "8. 다음은 웹 데이터 교환 방식에 관한 문제이다. 아래 설명을 읽고 괄호 안에 들어갈 알맞은 용어를 작성하시오.\n(&emsp;&emsp;&emsp;)은/는 웹 페이지 전체를 다시 불러오지 않고 JavaScript와 XML(또는 JSON)을 이용하여 일부 콘텐츠만 비동기적으로 갱신할 수 있는 기술이다.\n(&emsp;&emsp;&emsp;)은/는 HTML만으로는 구현하기 어려운 동적인 기능들을 가능하게 하여 사용자가 웹 페이지와 보다 자유롭게 상호작용할 수 있도록 해주는 웹 개발 기법이다.",
      "answer": "AJAX",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-2-09",
      "number": 9,
      "question": "9. 다음은 Java언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
      "answer": "19",
      "explanation": null,
      "code": "public class Main {\n \n    static interface F {\n        int apply(int x) throws Exception;\n    }\n \n    public static int run(F f) {\n        try {\n            return f.apply(3);\n        } catch (Exception e) {\n            return 7;\n        }\n    }\n \n    public static void main(String[] args) {\n \n        F f = (x) -> {\n            if (x > 2) {\n                throw new Exception();\n            }\n            return x * 2;\n        };\n \n        System.out.print(run(f) + run((int n) -> n + 9));\n    }\n \n}",
      "type": "코드완성"
    },
    {
      "id": "2025-2-10",
      "number": 10,
      "question": "10. 다음은 Java언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
      "answer": "5P",
      "explanation": null,
      "code": "public class Main{\n \n    public static class Parent {\n \n        public int x(int i) { return i + 2; }\n        public static String id() { return \"P\";}\n        \n    }\n \n    public static class Child extends Parent {\n        \n        public int x(int i) { return i + 3; }\n        public String x(String s) { return s + \"R\"; }\n        public static String id() { return \"C\"; }\n        \n    }\n \n    public static void main(String[] args) {\n \n        Parent ref = new Child();\n        System.out.println(ref.x(2) + ref.id());\n        \n    }\n    \n}",
      "type": "코드완성"
    },
    {
      "id": "2025-2-11",
      "number": 11,
      "question": "11. 다음 아래 제어 흐름 그래프가 분기 커버리지를 만족하기 위한 테스팅 순서를 쓰시오.",
      "answer": "1234561, 124567 or 1234567, 124561",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-2-12",
      "number": 12,
      "question": "12. 다음은 C언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
      "answer": "2 그리고 3",
      "explanation": null,
      "code": "#include <stdio.h>\n#define SIZE 3\n \ntypedef struct {\n    int a[SIZE];\n    int front;\n    int rear;\n} Queue;\n \nvoid enq(Queue* q, int val){\n    q->a[q->rear] = val; \n    q->rear = (q->rear + 1) % SIZE;\n}\n \nint deq(Queue* q) {\n    int val = q->a[q->front];\n    q->front = (q->front + 1) % SIZE;\n    return val;\n}\n \nint main() {\n    Queue q = {{0}, 0, 0};\n \n    enq(&q,1); enq(&q,2); deq(&q); enq(&q, 3);\n    \n    int first = deq(&q);\n    int second = deq(&q);\n    printf(\"%d 그리고 %d\", first, second);\n    \n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-2-13",
      "number": 13,
      "question": "13. 라운드로빈(RR) 방식을 이용하고 아래 내용을 참고하여 평균대기시간을 구하시오.\n운영체제에서 라운드로빈(Round Robin, RR) 스케줄링은 각 프로세스에 동일한 시간 할당량(타임 퀀텀)을 순차적으로 부여하며 CPU를 할당하는 방식이다.\n다음은 4개의 프로세스가 서로 다른 시간에 도착하며 각기 다른 실행 시간을 가지는 상황이다. 이때 시간 할당량은 4ms이고 컨텍스트 스위칭 시간은 무시한다고 가정한다.\n아래 정보를 바탕으로 라운드로빈(RR) 방식으로 CPU 스케줄링을 수행할 경우 모든 프로세스의 평균 대기시간(Average Waiting Time)은 얼마인가?",
      "answer": "11.75ms",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-2-14",
      "number": 14,
      "question": "14. 다음은 C언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
      "answer": "5 그리고 6",
      "explanation": null,
      "code": "#include <stdio.h>\n \nstruct dat {\n    int x;\n    int y;\n};\n \nint main() {\n    struct dat a[] = {{1, 2}, {3, 4}, {5, 6}};\n    struct dat* ptr = a;\n    struct dat** pptr = &ptr;\n \n    (*pptr)[1] = (*pptr)[2];\n    printf(\"%d 그리고 %d\", a[1].x, a[1].y);\n \n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-2-15",
      "number": 15,
      "question": "15. 다음은 Java언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
      "answer": "1a3b3",
      "explanation": null,
      "code": "public class Main{\n    public static class BO {\n        public int v;\n        public BO(int v) {\n            this.v = v;\n        }\n    }\n    public static void main(String[] args) {\n        BO a = new BO(1);\n        BO b = new BO(2);\n        BO c = new BO(3);\n        BO[] arr = {a, b, c};\n        BO t = arr[0];\n        arr[0] = arr[2];\n        arr[2] = t;\n        arr[1].v = arr[0].v;\n        System.out.println(a.v + \"a\" + b.v + \"b\" + c.v);\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-2-16",
      "number": 16,
      "question": "16. 다음은 C언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
      "answer": "3 1 2",
      "explanation": null,
      "code": "#include <stdio.h>\n#include <stdlib.h>\n \nstruct node {\n    int p;\n    struct node* n;\n};\n \nint main() {\n    struct node a = {1, NULL};\n    struct node b = {2, NULL};\n    struct node c = {3, NULL};\n \n    a.n = &b; b.n = &c; c.n = NULL;\n    c.n = &a; a.n = &b; b.n = NULL;\n    struct node* head = &c;\n    printf(\"%d %d %d\", head->p, head->n->p, head->n->n->p);\n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-2-17",
      "number": 17,
      "question": "17. 다음은 Pyhon언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
      "answer": "2",
      "explanation": null,
      "code": "lst = [1,2,3]\ndst = {i : i* 2 for i in lst}\ns = set(dst.values())\nlst[0] = 99 \ndst[2]=7\ns.add(99)\nprint(len(s & set(dst.values())))",
      "type": "코드완성"
    },
    {
      "id": "2025-2-18",
      "number": 18,
      "question": "18. 다음은 C언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
      "answer": "TSEB",
      "explanation": null,
      "code": "#include <stdio.h>\n#include <stdlib.h>\n \nstruct node {\n    char c;\n    struct node* p;\n};\n \nstruct node* func(char* s) {\n    struct node* h = NULL, *n;\n    \n    while(*s) {\n        n = malloc(sizeof(struct node));\n        n->c = *s++;\n        n->p = h;\n        h = n;\n    }\n    \n    return h;\n}\n \nint main() {\n    struct node* n = func(\"BEST\");\n    \n    while(n) {\n        putchar(n->c);\n        struct node* t = n;\n        n = n->p;\n        free(t);\n    }\n    \n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-2-19",
      "number": 19,
      "question": "19. 다음은 TCP 통신 과정에서 발생할 수 있는 보안 취약점에 대한 설명이다. 이를 이용한 공격 기법으로 옳은 것은?\nTCP는 연결을 수립하기 위해 클라이언트가 서버에 SYN 패킷을 보내고 서버는 SYN-ACK 패킷으로 응답한 후 클라이언트가 다시 ACK 패킷을 보내는 3-way-handshake 과정을 거친다.\n이때 공격자는 클라이언트 역할로 수많은 SYN 패킷을 서버에 전송한 뒤 마지막 ACK를 고의로 보내지 않아 서버가 연결 대기 상태를 계속 유지하게 만든다.\n이로 인해 서버의 연결 대기 큐가 가득 차면서 정상적인 접속 요청을 처리하지 못하게 되어 서비스 거부 상태가 발생한다.",
      "answer": "SYN Flooding",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-2-20",
      "number": 20,
      "question": "20. 다음 테이블에서 &pi;TTL(employee)에 대한 연산 결과 값을 작성하시오.\n[employee테이블]",
      "answer": "1. TTL 2. 부장 3. 대리 4. 과장 5. 차장",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2025-3": [
    {
      "id": "2025-3-01",
      "number": 1,
      "question": "1. 다음은 UML (    ) 다이어그램이다. 아래 내용을 보고 다이어그램의 관계를 확인하여 명칭을 작성하시오.\n(   ) 다이어그램이란\n시스템을 폴더 모양의 (   ) 단위로 구분하여 구성 요소 간의 관계를 표현하는 UML 구조 다이어그램이다.\n하나의 (   ) 안에는 여러 클래스나 하위 (   ) 가 포함될 수 있으며,\n(   ) 간에는 &laquo;import&raquo;, &laquo;access&raquo;, &laquo;merge&raquo; 등의 관계를 통해 의존성(Dependency) 을 표현한다.\n이 다이어그램은 코드의 실제 구조(폴더 구조)와 비슷하게 표현되기 때문에\n소프트웨어의 모듈화, 재사용성, 의존 관계를 시각적으로 설계할 때 자주 사용된다.",
      "answer": "패키지",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-3-02",
      "number": 2,
      "question": "2. 다음은 소프트웨어 테스트 기법 중 하나에 대한 설명이다.\n소프트웨어 테스트의 구조 기반(화이트박스) 기법 중 하나로,\n결정 포인트(Decision Point) 내에 존재하는 모든 개별 조건식(Atomic Condition) 을 대상으로 하는 커버리지 기준이 있다.\n하나의 결정문(예: if (A && B) 또는 if (X > 10 || Y == 0)) 안에는\n여러 개의 조건식이 포함될 수 있는데 이 커버리지는\n각각의 조건식이 True와 False 두 가지 경우를 모두 한 번 이상 만족하도록\n테스트 케이스를 설계해야 한다.\n즉, 모든 개별 조건이 두 방향의 결과를 거쳐야 &ldquo;커버되었다&rdquo;고 판단하지만\n그렇다고 해서 전체 결정식(Decision Expression) 의 결과(True/False)가\n모두 수행된다고 보장하지는 않는다.\n[보기]\nㄱ. 경로(Path)\nㄴ. 결정(Decision)\nㄷ. 조건/결정(Condition/Decision)\nㄹ. 변경 조건/결정(Modified Condition/Decision, MC/DC)\nㅁ. 다중 조건(Multiple Condition)\nㅂ. 문장(Statement)\nㅅ. 분기(Branch)\nㅇ. 조건(Condition)\nㅈ. 루프(Loop)",
      "answer": "ㅇ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-3-03",
      "number": 3,
      "question": "3. 다음은 유닉스(Unix) 또는 리눅스(Linux) 환경에서 자주 사용하는 기본 명령어에 대한 설명이다.\n각 설명에 맞는 명령어를 보기에서 골라 연결하시오.\n1. 현재 작업 중인 디렉터리의 경로를 출력한다. (&emsp;&emsp;&emsp;)\n2. 디렉터리의 내용(파일 및 하위 디렉터리)을 목록으로 표시한다. (&emsp;&emsp;&emsp;)\n3. 다른 디렉터리로 이동한다. (&emsp;&emsp;&emsp;)\n4. 파일을 복사한다. (&emsp;&emsp;&emsp;)\n[보기]\nls, cd, cp, pwd",
      "answer": "1.pwd 2.ls 3.cd 4.cp",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-3-04",
      "number": 4,
      "question": "4. 다음은 오류검출 방식을 설명하는 내용이다. 설명의 빈칸 (①)~(⑤) 에 들어갈 알맞은 용어를 <보기>에서 고르시오.\n(①) 코드는 전송 데이터에 여러 개의 검사 비트를 추가하여 오류를 검출하고 수정까지 가능한 방법이다.\n이 코드는 재전송 없이 수신 측에서 자체 수정하는 (②) 방식에 속한다.\n이에 반해 오류 발생 시 송신 측에 재전송을 요구하는 방식은 (③)이라 하며, 여기에 포함되는 대표적 검출 기법으로 (④) 검사와 (⑤) 검사가 있다.\n(④) 검사는 데이터 블록 끝에 1비트 검사 비트를 추가하여 오류를 검출한다.\n(⑤) 검사는 송신측과 수신측이 동일한 특정 다항식을 사용하여 오류를 검출한다.\n[보기]\n㉠ CRC&emsp;㉡ FEC&emsp;㉢ BEC&emsp;㉣ NAK&emsp;㉤ Parity&emsp;㉥ MD5&emsp;㉦ BCD&emsp;㉧ Hamming",
      "answer": "① ㉧ Hamming ② ㉡ FEC ③ ㉢ BEC ④ ㉤ Parity ⑤ ㉠ CRC",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-3-05",
      "number": 5,
      "question": "5. 다음은 C코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "C",
      "explanation": null,
      "code": "#include <stdio.h>\n \nstruct Test {\n    int i;\n    const char *g;\n};\n \nint main() {\n    struct Test test[] = {{1, \"AB\"}, {2, \"DC\"}, {3, \"EB\"}}; \n    struct Test *p = &test[1]; \n    printf(\"%s\", p->g + (p->i - 1));\n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-3-06",
      "number": 6,
      "question": "6. 다음은 C코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "E",
      "explanation": null,
      "code": "#include <stdio.h>\n \nint main(void) {\n    char str[] = \"REPUBLICOFKOREA\";\n    int a = 0;\n \n    while (str[a] != '\\0')\n        ++a;\n \n    putchar(str[a - 2]);\n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-3-07",
      "number": 7,
      "question": "7. 다음은 C코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "187",
      "explanation": null,
      "code": "#include <stdio.h>\n \nstruct Node {\n    struct Node* next;\n    unsigned int x;\n};\n \nint main() {\n    struct Node t1 = { 0, 5u };\n    struct Node t2 = { 0, 7u };\n    struct Node t3 = { 0, 11u };\n \n    t3.next = &t2;\n    t2.next = &t1;\n \n    struct Node* curr = &t3;\n    int sum = 0;\n \n    while (curr) {\n        sum = sum * 3 + curr->x;\n        curr = curr->next;\n    }\n \n    sum = (sum ^ 42u) + 100u;\n \n    printf(\"%u\\n\", sum);\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-3-08",
      "number": 8,
      "question": "8. 아래 코드는 Machine 이라는 인터페이스를 정의하고 WashingMachine 클래스에서 해당 인터페이스를 사용하고자 한다. 빈칸에 들어갈 올바른 키워드를 작성하시오.",
      "answer": "implements",
      "explanation": null,
      "code": "interface Machine {\n    void run();\n}\n \nclass WashingMachine (____빈칸____) Machine {  \n    private String name;\n \n    public WashingMachine() {\n        this.name = \"LG Washer\";\n    }\n \n    public void run() {\n        System.out.println(\"Washing machine running\");\n    }\n}\n \npublic class Main {\n    public static void main(String[] args) {\n        WashingMachine wm = new WashingMachine();\n        wm.run();\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-3-09",
      "number": 9,
      "question": "9. 다음은 파이썬에 대한 문제이다. 아래 코드를 확인하여 출력값에 알맞는 값을 작성하시오.\n[ 출력값 ]\n{0: (①, ②), 1: (③, ④), 2: (⑤, ⑥), 3: (⑦, ⑧)}",
      "answer": "① =15, ② =5, ③ =10, ④ =3, ⑤ =18, ⑥ =5, ⑦ =9, ⑧ =2",
      "explanation": null,
      "code": "data = [\n    [3, 5, 2, 4, 1],\n    [4, 5, 1],\n    [4, 4, 1, 5, 4],\n    [4, 5]\n]\n \nresult = {}\n \nfor index, lis in enumerate(data):\n    list_sum = sum(lis)\n    list_len = len(lis)\n \n    result[index] = (list_sum, list_len)\n \nprint(result)",
      "type": "코드완성"
    },
    {
      "id": "2025-3-10",
      "number": 10,
      "question": "10. 다음은 테이블에서 조건값을 실행한 화면이다. 이에 대한 알맞는 결과값을 작성하시오.",
      "answer": "4",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-3-11",
      "number": 11,
      "question": "11. 다음 설명에 해당하는 인증 기술을 쓰시오.\n한 번 사용하면 즉시 폐기되어 재사용이 불가능하다.\n서버와 토큰(또는 앱)은 시간 동기화나 카운터 기반 방식으로 매번 새로운 값을 생성하고, 내부 검증은 해시 함수를 이용한 방식으로 서버에 평문을 저장하지 않고도 유효성을 확인할 수 있다.\n이 특성 때문에 은행 인증 등 고보안 영역에서 널리 사용되며 재전송 공격 방지와 사용자 편의성을 동시에 만족한다.",
      "answer": "OTP",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-3-12",
      "number": 12,
      "question": "12. 다음은 Java의 상속과 생성자 호출에 관한 코드이다. 밑줄에 알맞은 단어를 작성하시오.",
      "answer": "super",
      "explanation": null,
      "code": "class Rectangle {\n \n    int width, height;\n \n    Rectangle(int width, int height) {\n        this.width = width;\n        this.height = height;\n    }\n}\n \nclass Square extends Rectangle {\n \n    Square(int a) {\n        ____(a,a);\n    }\n \n    int getSquareArea() {\n        return width * height;\n    }\n}\n \npublic class Main {\n    public static void main(String[] args) {\n        Square sq = new Square(10);\n        System.out.println(sq.getSquareArea());\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-3-13",
      "number": 13,
      "question": "13. 다음은 인증 및 자원 접근 방식에 대한 설명이다. 알맞은 단어를 작성하시오.\n사용자가 새로운 사이트에 가입하지 않고 평소에 이용하던 서비스의 계정으로 로그인할 수 있게 해주는 기술이다.\n사용자의 비밀번호는 절대 전달되지 않으며 사용자가 승인한 범위에 대해서만 접근 권한이 위임된다.\n이 방식은 직접 인증(Authentication)을 수행하지 않고 \"인가(Authorization)\" 절차를 통해 접근 권한을 제3자에게 부여한다.\n인증 완료 후, 서비스 제공자는 Access Token을 발급하며 애플리케이션은 이 토큰을 이용해 API를 호출하여 필요한 정보에 접근한다.\n대표적인 예는 소셜 로그인이며 SSO(Single Sign-On)과 달리 동일 시스템 내 인증이 아니라 서로 다른 서비스 간의 권한 위임에 초점이 맞춰져 있다.",
      "answer": "OAuth",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-3-14",
      "number": 14,
      "question": "14. 다음 아래의 테이블을 확인하여 R%S의 결과를 테이블 형태로 기재하시오.",
      "answer": "A a1",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-3-15",
      "number": 15,
      "question": "15. 다음은 C코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "0",
      "explanation": null,
      "code": "#include <stdio.h>\nint main() {\n    int x=7, y=4, z;\n    z = y%3<3 ? 2 : 1;\n    z = z & z >> 1;\n    z = x>5 && z<=3 ? z*x : z/x;\n    printf(\"%d\", z);\n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-3-16",
      "number": 16,
      "question": "16. 관계형 데이터베이스 개념에 대한 설명이다. 빈칸에 들어갈 용어를 <보기>에서 골라 순서대로 쓰시오.\nㄱ. 테이블에서 한 행(Row)을 의미하며, 하나의 레코드를 구성하는 요소\nㄴ. 실제 데이터가 저장되어 있는 테이블의 내용 전체를 의미하며, 데이터의 상태를 나타낸다.\nㄷ. 테이블에 저장된 행(Row)의 총 개수를 의미한다.\n[보기]\n스키마(Structure)&emsp;&emsp;속성(Attribute)&emsp;&emsp;튜플(Tuple)\n차수(Degree)&emsp;&emsp;&emsp;&emsp;인스턴스(Instance)&emsp;&emsp;카디널리티(Cardinality)",
      "answer": "ㄱ . 튜플 ㄴ . 인스턴스 ㄷ . 카디널리티",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-3-17",
      "number": 17,
      "question": "17. 다음은 Java에 대한 코드이다. 알맞는 출력값을 작성하시오.",
      "answer": "AB",
      "explanation": null,
      "code": "enum Tri {\n    A(\"A\"), B(\"AB\"), C(\"ABC\");\n \n    private String code;\n \n    Tri(String code) {\n        this.code = code;\n    }\n \n    public String code() {\n        return code;\n    }\n}\n \npublic class Main {\n    public static void main(String[] args) {\n        Tri t = Tri.values()[Tri.A.name().length()];\n        System.out.print(t.code());\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2025-3-18",
      "number": 18,
      "question": "18. 다음은 정보보안에서 사용하는 접근통제(Access Control) 방식에 대한 설명이다.\n설명에 해당하는 접근통제 모델을 <보기>에서 골라 빈칸에 작성하시오.\n[보기]\nDAC     MAC      RBAC",
      "answer": "ㄱ. MAC ㄴ. RBAC ㄷ. DAC",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-3-19",
      "number": 19,
      "question": "19. 다음은 테스트케이스의 구성요소에 대한 설명이다. 괄호 ( ) 안에 들어갈 알맞는 보기를 고르시오.\n[보기]\nㄱ. 테스트 조건 ㄴ. 테스트 환경  ㄷ. 테스트 유형  ㄹ. 테스트 데이터\nㅁ. 예상 결과 ㅂ. 수행 단계 ㅅ. 성공/실패 기준",
      "answer": "(왼쪽순으로) ㄱ ㄹ ㅁ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2025-3-20",
      "number": 20,
      "question": "20. 다음은 SQL에 관한 문제이다. 아래 A테이블을 참고하여 쿼리의 결과를 작성하시오.\n[ SQL ]\nSELECT count(col2) FROM A WHERE col1 IN (2, 3) OR col2 IN (3, 5)",
      "answer": "4",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2024-1": [
    {
      "id": "2024-1-01",
      "number": 1,
      "question": "1.  다음 Java 코드에서 알맞는 출력 값을 작성하시오.",
      "answer": "4",
      "explanation": null,
      "code": "class Connection {\n \n    private static Connection _inst = null;\n    private int count = 0;\n    \n    static public Connection get() {\n        if(_inst == null) {\n            _inst = new Connection();\n            return _inst;\n        }\n        return _inst;\n    }\n    \n    public void count() {\n         count++; \n    }\n    \n    public int getCount() {\n         return count; \n    }\n}\n \n \npublic class main {  \n \n    public static void main(String[] args) {\n \n        Connection conn1 = Connection.get();\n        conn1.count();\n \n        Connection conn2 = Connection.get();\n        conn2.count();\n \n        Connection conn3 = Connection.get();\n        conn3.count();\n        \n        conn1.count();\n        System.out.print(conn1.getCount());\n    }\n \n}",
      "type": "코드완성"
    },
    {
      "id": "2024-1-02",
      "number": 2,
      "question": "2. 다음 C언어 코드에서 알맞는 출력 값을 작성하시오.",
      "answer": "151",
      "explanation": null,
      "code": "#include <stdio.h>\n \nint main() {\n \n    int v1 = 0, v2 = 35, v3 = 29;\n    \n    if(v1 > v2 ? v2 : v1) {\n        v2 = v2 << 2;\n    }else{\n        v3 = v3 << 2;\n    }\n    \n    printf(\"%d\", v2+v3);\n \n}",
      "type": "코드완성"
    },
    {
      "id": "2024-1-03",
      "number": 3,
      "question": "3. 다음은 응집도와 관련해서 보기에서 응집도가 높은 순으로 나열하시오.\n보기",
      "answer": "ㄱ, ㄴ, ㄹ, ㄷ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-1-04",
      "number": 4,
      "question": "4. 다음은 C언어에 대한 문제이다. 알맞는 출력 값을 작성하시오.",
      "answer": "GECA",
      "explanation": null,
      "code": "#include <stdio.h>\n#include <string.h>\n \nvoid reverse(char* str){\n    int len = strlen(str);\n    char temp;\n    char*p1 = str;\n    char*p2 = str + len - 1;\n    while(p1<p2){\n        temp = *p1;\n        *p1 = *p2;\n        *p2 = temp;\n        p1++;\n        p2--;\n    }\n}\n \nint main(int argc, char* argv[]){\n    char str[100] = \"ABCDEFGH\";\n \n    reverse(str);\n \n    int len = strlen(str);\n \n    for(int i=1; i<len; i+=2){\n        printf(\"%c\",str[i]);\n    }\n \n    printf(\"\\n\");\n \n    return 0;\n \n}",
      "type": "코드완성"
    },
    {
      "id": "2024-1-05",
      "number": 5,
      "question": "5. 아래 그림에서의 네트워크에서 라우터을 통한 할당 가능한  2번, 4번, 5번의 IP를 작성하시오.\n1) 192.168.35.3/24 3) 129.200.10.16/22 6) 192.168.36.24/24\n보기\n192.168.35.0\n192.168.35.72\n192.168.36.0\n192.168.36.249\n129.200.8.0\n129.200.8.249",
      "answer": "2)192.168.35.72 4)129.200.8.249 5)192.168.36.249",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-1-06",
      "number": 6,
      "question": "6. 아래 표에서 나타나고 있는 정규형을 작성하시오.",
      "answer": "제 3정규형",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-1-07",
      "number": 7,
      "question": "7. 아래의 내용에서 설명하는 네트워크 용어를 영문 약자로 작성하시오.\n1. 대표적인 링크 상태 라우팅 프로토콜이다. 이것은 인터넷에서 연결된 링크의 상태를 감시하여 최적의 경로를 선택한다는것이다. 2. 단일 자율 시스템 내에서 라우팅 정보를 배포하는 데 사용되는 내부 게이트웨이 프로토콜이다. 3. 모든 대상에 도달하기 위한 최단 경로를 구축하고 계산하며 최단 경로는 Dijkstra 알고리즘을 사용하여 계산된다.",
      "answer": "OSPF (Open Shortest Path First)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-1-08",
      "number": 8,
      "question": "8. 아래 내용의 각각의 설명에 대한 답을 작성하시오.\n(1) 조인에 참여하는 두 릴레이션의 속성 값을 비교하여 조건을 만족하는 튜플만 반환한다. (2) 조건이 정확하게 '=' 등호로 일치하는 결과를 반환한다.  (3) ( (2) ) 조인에서 조인에 참여한 속성이 두 번 나오지 않도록 중복된 속성을 제거한 결과를 반환한다.",
      "answer": "(1) 세타 조인 (2) 동등 조인 (3) 자연 조인",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-1-09",
      "number": 9,
      "question": "9. 다음은 운영체제 페이지 순서를 참고하여 할당된 프레임의 수가 3개일 때  LRU와 LFU 알고리즘의 페이지 부재 횟수를 작성하시오.\n페이지 참조 순서 : 1, 2, 3, 1, 2, 4, 1, 2, 5, 7\n(1) LRU :  (2) LFU :",
      "answer": "(1) : 6 (2) : 6",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-1-10",
      "number": 10,
      "question": "10. 아래 JAVA언어 코드의 실행 순서를 중복 번호없이 작성하시오.\n실행 순서 : 5 &rarr; ( ) &rarr; ( ) &rarr; ( ) &rarr; ( ) &rarr; ( )",
      "answer": "6 3 1 7 2",
      "explanation": null,
      "code": "class Parent {\n    int x, y;\n \n    Parent(int x, int y) { ①\n        this.x=x;\n        this y=y;\n    }\n \n    int getT() { ②\n        return x*y;\n    }\n}\n \n \n \n​class Child extend Parent {\n    int x;\n \n    Child (int x) { ③\n        super(x+1, x);\n        this.x=x;\n    }\n \n    int getT(int n){ ④\n        return super.getT()+n;\n    }\n}\n \n \n \nclass Main {\n    public static void main(String[] args) { ⑤\n        Parent parent = new Child(3); ⑥\n        System.out.println(parent.getT()); ⑦\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-1-11",
      "number": 11,
      "question": "11. 다음 C언어의 알맞는 출력값을 작성하시오.",
      "answer": "9981 and 2795.10",
      "explanation": null,
      "code": "#include <stdio.h>\n \n \ntypedef struct{\n    int accNum;\n    double bal;\n}BankAcc;\n \n \n \ndouble sim_pow(double base, int year){\n    int i;\n    double r = 1.0;\n \n    for(i=0; i<year; i++){\n        r = r*base;\n    }\n    return r;\n} \n \n \n \nvoid initAcc(BankAcc *acc, int x, double y){\n    acc -> accNum = x;\n    acc -> bal = y;\n}\n \n \n \nvoid xxx(BankAcc *acc, double *en){\n    if (*en > 0 && *en < acc -> bal) {\n        acc -> bal = acc -> bal-*en;\n    }else{\n        acc -> bal = acc -> bal+*en;\n    }\n}\n \n \n \nvoid yyy(BankAcc *acc){\n    acc -> bal = acc -> bal * sim_pow((1+0.1),3);\n}\n \n \nint main(){\n \n    BankAcc myAcc;\n    initAcc(&myAcc, 9981, 2200.0);\n    double amount = 100.0;\n    xxx(&myAcc, &amount);\n    yyy(&myAcc);\n    printf(\"%d and %.2f\", myAcc.accNum, myAcc.bal);\n    return 0;\n \n}",
      "type": "코드완성"
    },
    {
      "id": "2024-1-12",
      "number": 12,
      "question": "12. 다음 파이썬 코드에 대한 알맞는 출력 값을 작성하시오.",
      "answer": "Seynaau",
      "explanation": null,
      "code": "a = [\"Seoul\", \"Kyeonggi\", \"Incheon\", \"Daejun\", \"Daegu\", \"Pusan\"] \nstr = \"S\"\n \nfor i in a:\n    str = str + i[1]\n \nprint(str)",
      "type": "코드완성"
    },
    {
      "id": "2024-1-13",
      "number": 13,
      "question": "13. 아래 보기의 SQL 문장과 테이블을 참고하여 출력 값을 표로 작성하시오.\n보기",
      "answer": "B a b",
      "explanation": null,
      "code": "SELECT\n    B\nFROM\n    R1\nWHERE\n    C IN (SELECT C FROM R2 WHERE D=\"k\");",
      "type": "코드완성"
    },
    {
      "id": "2024-1-14",
      "number": 14,
      "question": "14. 아래는 애플리케이션 테스트 관리에 대한 내용이다. 설명하는 답을 보기에서 골라 작성하시오.\n1. 모든 분기와 조건의 조합을 고려하나 모든 조합을 테스트하는 대신에 테스트가 필요한 중요한 조합을 찾아내는데에 중점을 둔다.  2. 특정 조건을 수행할 때 다른 조건과는 상관없이 전체 결과에 영향을 미치는 조건만을 테스트한다.  3. 각각의 파라미터는 적어도 한 번은 최종 결과에 영향을 주어야 한다.\n보기\nㄱ. 구문 커버리지      ㄴ. 결정 커버리지    ㄷ. 조건 커버리지    ㄹ. 변경 조건/결정 커버리지     ㅁ.다중 조건 커버리지      ㅂ.경로 커버리지    ㅅ.조건/결정 커버리지",
      "answer": "ㄹ.변경 조건/결정 커버리지",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-1-15",
      "number": 15,
      "question": "15. 다음 아래 내용을 보고  보기에서 알맞는 용어를 골라 작성하시오.\n인터넷 공격자의 존재를 숨기면서 이 공격자에게 시스템에 대한 무제한 접근 권한을 부여하는 악성 프로그램이다. 해커가 자신의 존재를 숨기면서 허가되지 않은 컴퓨터나 소프트웨어에 접근할 수 있도록 설계된 도구이다. 일반적으로 펌웨어, 가상화 계층 등의 다양한 시스템 영역에서 작동하며, 운영체제의 시스템콜을 해킹하여 악성코드의 실행여부를 숨겨 안티바이러스 탐지를 우회할 수 있다.\n보기",
      "answer": "ㅅ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-1-16",
      "number": 16,
      "question": "16. 다음 Java 코드를 보고 알맞는 출력 값을 작성하시오.",
      "answer": "9",
      "explanation": null,
      "code": "class classOne {\n    int a, b;\n \n    public classOne(int a, int b) {\n        this.a = a;\n        this.b = b;\n    }\n \n    public void print() {\n        System.out.println(a + b);\n    }\n \n}\nclass classTwo extends classOne {\n    int po = 3;\n    \n    public classTwo(int i) {\n        super(i, i+1);\n    }\n \n    public void print() {\n        System.out.println(po*po);\n    }\n}\n \npublic class main {  \n    public static void main(String[] args) {\n        classOne one = new classTwo(10);\n        one.print();\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-1-17",
      "number": 17,
      "question": "17. 다음 아래 내용을 보고  보기에서 알맞는 용어를 골라 작성하시오.\n1. 불특정 다수가 아닌 명확한 표적을 정하여 지속적인 정보수집 후 공격감행할 수 있다.2. 시스템에 직접 침투하는 것뿐 아니라 표적 내부직원들이 이용하는 다양한 단말을 대상으로 한다.3. 한가지 기술만이 아닌 Zero-day 취약점, 악성코드 등 다양한 보안 위협 공격 기술을 사용한다.4. 일반적으로 공격은 침투, 검색, 수집 및 유출의 4단계로 실행되며, 각 단계별로 다양한 공격 기술을 사용한다.\n보기",
      "answer": "ㅅ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-1-18",
      "number": 18,
      "question": "18. 아래의 SQL 코드와 테이블을 참고하여 결과 값을 작성하시오.",
      "answer": "1",
      "explanation": null,
      "code": "SELECT \n    COUNT(*) \nFROM \n    TABLE \nWHERE \n    EMPNO > 100 \nAND \n    SAL >= 3000 OR EMPNO = 200",
      "type": "코드완성"
    },
    {
      "id": "2024-1-19",
      "number": 19,
      "question": "19. 다음 C언어 코드의 알맞는 출력 값을 작성하시오.",
      "answer": "Nd sc 1",
      "explanation": null,
      "code": "#include<stdio.h>\n#include<ctype.h>\n \nint main(){\n    char*p = \"It is 8\";\n    char result[100];\n    int i;\n \n    for(i=0; p[i]!='\\0'; i++){\n        if(isupper(p[i]))\n            result[i] = (p[i]-'A'+5)% 25 + 'A';\n        else if(islower(p[i]))\n            result[i] = (p[i]-'a'+10)% 26 + 'a';\n        else if(isdigit(p[i]))\n            result[i] = (p[i]-'0'+3)% 10 + '0';\n        else if(!(isupper(p[i]) || islower(p[i]) || isdigit(p[i])))    \n            result[i] = p[i];\n    }\n \n    result[i] = '\\0';\n    printf(\"%s\\n\",result);\n \n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-1-20",
      "number": 20,
      "question": "20. 다음 아래의 내용을 보고 알맞는 용어를 작성하시오.\n구체적인 클래스에 의존하지 않고 서로 연관되거나 의존적인 객체들의 조합을 만드는 인터페이스를 제공하는 패턴이다. 연관성이 있는 객체 군이 여러개 있을 경우 이들을 묶어 추상화하고, 어떤 구체적인 상황이 주어지면 팩토리 객체에서 집합으로 묶은 객체 군을 구현화 하는 생성 패턴이다 관련성 있는 여러 종류의 객체를 일관된 방식으로 생성하는 경우에 유용하다. kit라고도 불린다.",
      "answer": "Abstract Factory",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2024-2": [
    {
      "id": "2024-2-01",
      "number": 1,
      "question": "1. 다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "NNN",
      "explanation": null,
      "code": "class Main {\n    public static void main(String[] args) {\n        int[] a = new int[]{1, 2, 3, 4};\n        int[] b = new int[]{1, 2, 3, 4};\n        int[] c = new int[]{1, 2, 3};\n        \n        check(a, b);\n        check(a, c); \n        check(b, c); \n    }\n \n    public static void check(int[] a, int[] b) {\n        if (a==b) {\n            System.out.print(\"O\");\n        }else{\n            System.out.print(\"N\");\n        }\n        \n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-2-02",
      "number": 2,
      "question": "2. 다음 문제에서 설명하는 용어를 작성하시오.\n데이터를 중복시켜 성능을 향상시키기 위한 기법으로 데이터를 중복 저장하거나\n테이블을 합치는 등으로 성능을 향상시키지만 데이터 무결성이 저하될 수 있는 기법",
      "answer": "반정규화",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-2-03",
      "number": 3,
      "question": "3. 다음은 SQL에 관한 문제이다. 아래 SQL 구문의 빈칸을 작성하시오.\n테이블\n사원 [사원번호(PK), 이름, 나이, 부서]\n부서 [사원번호(PK), 이름, 주소, 나이]\n신입 사원이 들어와서 사원 테이블에 추가\nINSERT INTO 사원 (사원번호, 이름, 주소, 부서)   [      ①     ] (32431, '정실기', '서울', '영업');\n위에 신입사원을 검색하면서 부서 테이블에 추가\nINSERT INTO 부서 (사원번호, 이름, 나이, 부서)\n[    ②     ] 사원번호, 이름, 나이, 23 FROM 사원 WHERE 이름 = '정실기';\n전체 사원 테이블 조회\nSELECT  *   [    ③   ]   사원;\n퇴사로 인해 부서에 해당하는 값을 '퇴사'로 변경\nUPDATE 사원   [      ④     ]   부서  =  '퇴사'  WHERE 사원번호  = 32431;",
      "answer": "① : VALUES ② : SELECT ③ : FROM ④ : SET",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-2-04",
      "number": 4,
      "question": "4. 다음 릴레이션의 Cardinality와 Degree를 작성하시오.\nCardinality : (  ①  )\nDegree      : (  ②  )",
      "answer": "① : 5 ② : 4",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-2-05",
      "number": 5,
      "question": "5. 다음은 프로토콜에 대한 내용이다. 아래 내용을 읽고 알맞는 답을 작성하시오.\n- Network layer에서 IP패킷을 암호화하고 인증하는 등의 보안을 위한 표준이다.\n- 기업에서 사설 인터넷망으로 사용할 수 있는 VPN을 구현하는데 사용되는 프로토콜이다. - AH(Authentication Header)와 ESP(Encapsulating Security Payload)라는 두 가지 보안 프로토콜을 사용한다.",
      "answer": "IPSec",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-2-06",
      "number": 6,
      "question": "6. 다음은 Python에 대한 문제이다. 아래 코드를 읽고 알맞는 출력 값을 작성하시오.",
      "answer": "ab3ca3",
      "explanation": null,
      "code": "def fnCalculation(x,y):\n    result = 0;\n    for i in range(len(x)):\n     temp = x[i:i+len(y)] \n     if temp == y:\n       result += 1;\n    return result\n \na = \"abdcabcabca\"\np1 = \"ab\";\np2 = \"ca\";\n \nout = f\"ab{fnCalculation(a,p1)}ca{fnCalculation(a,p2)}\"\nprint(out)",
      "type": "코드완성"
    },
    {
      "id": "2024-2-07",
      "number": 7,
      "question": "7. 아래 설명하는 내용을 확인하여 알맞는 알고리즘을 작성하시오.\n- 대칭키 알고리즘으로 1997년 NIST(미국 국립기술표준원)에서 DES를 대체하기 위해 생성되었다. - 128비트, 192비트 또는 256비트의 가변 키 크기와 128비트의 고정 블록 크기를 사용한다. - 높은 안전성과 효율성, 속도 등으로 인해 DES 대신 전 세계적으로 많이 사용되고 있다.",
      "answer": "AES",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-2-08",
      "number": 8,
      "question": "8. 패킷 교환 방식 중에 연결형과 비연결형에 해당하는 방식을 작성하시오.\n① 연결형 교환 방식\n② 비연결형 교환 방식",
      "answer": "① 가상회선 ② 데이터그램",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-2-09",
      "number": 9,
      "question": "9. 아래 내용을 확인하고 보기에서 알맞는 답을 고르시오.\n실행 순서가 밀접한 관계를 갖는 기능을 모아 모듈로 구성한다. 한 모듈 내부의 한 기능 요소에 의한 출력 자료가 다음 기능 원소의 입력 자료로서 제공되는 형태이다.\n보기\nㄱ.  기능적(functional)           ㄴ.  우연적(Coincidental)          ㄷ.  통신적(Communication)       ㄹ.  절차적(Procedural)         ㅁ.  시간적(Temporal)           ㅂ.  순차적(sequential)              ㅅ.    논리적(Logical)",
      "answer": "ㅂ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-2-10",
      "number": 10,
      "question": "10. 아래는 디자인 패턴에 관한 설명이다. 아래 설명을 읽고 보기에서 알맞는 용어를 작성하시오.\n- 컬렉션 객체의 내부 구조를 노출하지 않고 순차적으로 접근할 수 있게 하는 패턴이다.  - 이 패턴은 객체의 내부 표현 방식에 독립적으로 요소에 접근할 수 있도록 해준다 - 반복 프로세스를 캡슐화하여 클라이언트 코드에서는 컬렉션의 구체적인 구현에 종속되지 않도록 한다.\n보기",
      "answer": "Iterator",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-2-11",
      "number": 11,
      "question": "11. 아래 그림을 바탕으로 RIP을 구성하여 최단 경로 비용을 계산하여 흐름에 맞게 작성하시오.\n예제\nA  &rarr;",
      "answer": "A &rarr; D &rarr; C &rarr; F",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-2-12",
      "number": 12,
      "question": "12. 아래의 표를 확인하여 SRT 스케줄링의 평균 대기시간을 계산하여 작성하시오.",
      "answer": "6.5",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-2-13",
      "number": 13,
      "question": "13. 다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "21",
      "explanation": null,
      "code": "#include <stdio.h>\n \nint main() {\n    int arr[3][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9};\n    int* parr[2] = {arr[1], arr[2]};\n    printf(\"%d\", parr[1][1] + *(parr[1]+2) + **parr);\n    \n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-2-14",
      "number": 14,
      "question": "14. 다음은 Java 언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "25, 20",
      "explanation": null,
      "code": "class Main {\n    public static void main(String[] args) {\n        int a[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};\n        ODDNumber OE = new ODDNumber();\n        System.out.print(OE.sum(a, true) + \", \" + OE.sum(a, false));\n    }\n}\n \ninterface Number {\n    int sum(int[] a, boolean odd);\n}\n \nclass ODDNumber implements Number {\n    public int sum(int[] a, boolean odd) {\n        int result = 0;\n        for(int i=0; i < a.length; i++){\n            if((odd && a[i] % 2 != 0) || (!odd && a[i] % 2 == 0))\n                result += a[i];\n        }        \n        return result;\n    }    \n}",
      "type": "코드완성"
    },
    {
      "id": "2024-2-15",
      "number": 15,
      "question": "15. 다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "10",
      "explanation": null,
      "code": "#include <stdio.h>\n#include <string.h>\n \nvoid sumFn(char* d, const char* s) {\n \n    while (*s) {\n        *d = *s;\n        d++;\n        s++;\n    }\n    *d = '\\0'; \n}\n \nint main() {\n   const char* str1 = \"first\";\n    char str2[50] = \"teststring\";  \n    int result=0;\n    sumFn(str2, str1);\n \n    for (int i = 0; str2[i] != '\\0'; i++) {\n        result += i;\n    }\n    printf(\"%d\", result);\n    \n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-2-16",
      "number": 16,
      "question": "16. 아래는 소프트웨어 설계에 대한 내용이다. 내용을 읽고 괄호안에 알맞는 답을 작성하시오.\n- 어떤 모듈이 다른 모듈 내부의 논리적인 흐름을 제어하기 위해, 제어를 통신하거나 제어 요소를 전달하는 결합도이다. - 한 모듈이 다른 모듈의 상세한 처리 절차를 알고 있어 이를 통제하는 경우나 처리 기능이 두 모듈에 분리되어 설계된 경우에 발생한다.\n(              ) Coupling",
      "answer": "제어 or Control",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-2-17",
      "number": 17,
      "question": "17. 다음은 Java에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력 값을 작성하시오.",
      "answer": "dcba",
      "explanation": null,
      "code": "class Main {\n    public static void main(String[] args) {\n        String str = \"abacabcd\";\n        boolean[] seen = new boolean[256];\n        System.out.print(calculFn(str, str.length()-1, seen));\n    }\n \n    public static String calculFn(String str, int index, boolean[] seen) {\n        if(index < 0) return \"\";\n        char c = str.charAt(index);\n        String result = calculFn(str, index-1, seen);\n        if(!seen[c]) {\n            seen[c] = true;\n            return c + result;\n        }\n        return result;\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-2-18",
      "number": 18,
      "question": "18. 다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력 값을 작성하시오.",
      "answer": "-13",
      "explanation": null,
      "code": "#include <stdio.h>\n \nvoid swap(int a, int b) {\n    int t = a;\n    a = b;\n    b = t;\n}\n \nint main() {\n    \n    int a = 11;\n    int b = 19;\n    swap(a, b);\n    \n    switch(a) {\n        case 1:\n            b += 1;\n        case 11:\n            b += 2;\n        default:\n            b += 3;\n        break;\n    }\n    \n    printf(\"%d\", a-b);\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-2-19",
      "number": 19,
      "question": "19. 다음은 C언어의 구조체에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력 값을 작성하시오.",
      "answer": "20",
      "explanation": null,
      "code": "#include <stdio.h>\n \nstruct node {\n    int n1;\n    struct node *n2;\n};\n \nint main() {\n \n    struct node a = {10, NULL};\n    struct node b = {20, NULL};\n    struct node c = {30, NULL};\n \n    struct node *head = &a;\n    a.n2 = &b;\n    b.n2 = &c;\n \n    printf(\"%d\\n\", head->n2->n1);\n \n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-2-20",
      "number": 20,
      "question": "20. 다음은 Java에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력 값을 작성하시오.",
      "answer": "S",
      "explanation": null,
      "code": "class Main {\n    public static void main(String[] args) {\n        String str = \"ITISTESTSTRING\";\n        String[] result = str.split(\"T\");\n        System.out.print(result[3]);\n    }\n}",
      "type": "코드완성"
    }
  ],
  "2024-3": [
    {
      "id": "2024-3-01",
      "number": 1,
      "question": "1. 다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "OOAAA",
      "explanation": null,
      "code": "public class Main{\n  static String[] s = new String[3];\n \n  static void func(String[]s, int size){\n    for(int i=1; i<size; i++){\n      if(s[i-1].equals(s[i])){\n        System.out.print(\"O\");\n      }else{\n        System.out.print(\"N\");\n      }\n    }\n      for (String m : s){\n        System.out.print(m);\n      }\n    }\n  \n \n  public static void main(String[] args){\n    s[0] = \"A\";\n    s[1] = \"A\";\n    s[2] = new String(\"A\");\n \n    func(s, 3);\n  }\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-3-02",
      "number": 2,
      "question": "2. 다음은 파이썬에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "3",
      "explanation": null,
      "code": "def func(lst):\n  for i in range(len(lst) //2):\n    lst[i], lst[-i-1] = lst[-i-1], lst[i]\n \nlst = [1,2,3,4,5,6] \nfunc(lst)\nprint(sum(lst[::2]) - sum(lst[1::2]))",
      "type": "코드완성"
    },
    {
      "id": "2024-3-03",
      "number": 3,
      "question": "3. 아래의 employee테이블과 project테이블을 참고하여 보기의 SQL명령어에 알맞는 출력 값을 작성하시오.",
      "answer": "1",
      "explanation": null,
      "code": "SELECT \n    count(*) \nFROM employee AS e JOIN project AS p ON e.project_id = p.project_id \nWHERE p.name IN (\n    SELECT name FROM project p WHERE p.project_id IN (\n        SELECT project_id FROM employee GROUP BY project_id HAVING count(*) < 2\n    )\n);",
      "type": "코드완성"
    },
    {
      "id": "2024-3-04",
      "number": 4,
      "question": "4. 다음은 운영체제 페이지 순서를 참고하여 할당된 프레임의 수가 3개일 때  LRU 알고리즘의 페이지 부재 횟수를 작성하시오.\n페이지 참조 순서 : 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1",
      "answer": "12",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-3-05",
      "number": 5,
      "question": "5. 다음은 네트워크 취약점에 대한 문제이다. 아래 내용을 보고 알맞는 용어를 작성하시오.\n- IP나 ICMP의 특성을 악용하여 엄청난 양의 데이터를 한 사이트에 집중적으로 보냄으로써 네트워크의 일부를 불능 상태로 만드는 공격이다.  - 여러 호스트가 특정 대상에게 다량의 ICMP Echo Reply 를 보내게 하여 서비스거부(DoS)를 유발시키는 보안공격이다.  - 공격 대상 호스트는 다량으로 유입되는 패킷으로 인해 서비스 불능 상태에 빠진다.",
      "answer": "스머프(Smurf) 또는 스머핑(Smurfing)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-3-06",
      "number": 6,
      "question": "6. 다음은 GoF 디자인 패턴과 관련된 문제이다. 괄호안에 알맞는 용어를 작성하시오.\n(        ) 패턴은 클래스나 객체들이 서로 상호작용하는 방법이나 책임 분배 방법을 정의하는 패턴이다. (        ) 패턴은 객체들 간의 통신 방법을 정의하고 알고리즘을 캡슐화하여 객체 간의 결합도를 낮춘다.(        ) 패턴은 Chain of Responsibility나 Command 또는 Observer 패턴이 있다.",
      "answer": "행위",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-3-07",
      "number": 7,
      "question": "7. 다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "20",
      "explanation": null,
      "code": "#include <stdio.h>\n \nint func(){\n static int x =0; \n  x+=2; \n  return x;\n}\n \nint main(){\n  int x = 1; \n  int sum=0; \n  for(int i=0;i<4;i++) {\n    x++; \n    sum+=func();\n  } \n  printf(\"%d\", sum);\n \n  return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-3-08",
      "number": 8,
      "question": "8. 다음은 무결성제약조건에 대한 문제이다. 아래 표에서 어떠한 (       ) 무결성을 위반하였는지 작성하시오.",
      "answer": "개체",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-3-09",
      "number": 9,
      "question": "9. 다음은 URL 구조에 관한 문제이다 . 아래  보기의 순서대로 URL에 해당하는 번호를 작성하시오.\nquery : 서버에 전달할 추가 데이터 path : 서버 내의 특정 자원을 가리키는 경로\nscheme : 리소스에 접근하는 방법이나 프로토콜\nauthority : 사용자 정보, 호스트명, 포트 번호\nfragment : 특정 문서 내의 위치",
      "answer": "43125",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-3-10",
      "number": 10,
      "question": "10. 다음은 파이썬에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "45",
      "explanation": null,
      "code": "def func(value):\n    if type(value) == type(100):\n        return 100\n    elif type(value) == type(\"\"):\n        return len(value) \n    else:\n        return 20\n \n \na = '100.0'\nb = 100.0\nc = (100, 200)\n \nprint(func(a) + func(b) + func(c))",
      "type": "코드완성"
    },
    {
      "id": "2024-3-11",
      "number": 11,
      "question": "11. 다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "52",
      "explanation": null,
      "code": "public class Main{\n  public static void main(String[] args){\n    Base a =  new Derivate();\n    Derivate b = new Derivate();\n    \n    System.out.print(a.getX() + a.x + b.getX() + b.x);\n  }\n}\n \n \nclass Base{\n  int x = 3;\n \n  int getX(){\n     return x * 2; \n  }\n}\n \nclass Derivate extends Base{\n  int x = 7;\n  \n  int getX(){\n     return x * 3;\n  }\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-3-12",
      "number": 12,
      "question": "12. 다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "312",
      "explanation": null,
      "code": "#include <stdio.h>\n \nstruct Node {\n int value;\n struct Node* next;\n};\n \nvoid func(struct Node* node){\n  while(node != NULL && node->next != NULL){\n     int t = node->value;\n     node->value = node->next->value;\n     node->next->value = t;\n     node = node->next->next;\n  }\n}\n \nint main(){\n  struct Node n1 = {1, NULL};\n  struct Node n2 = {2, NULL};\n  struct Node n3 = {3, NULL};\n  \n  n1.next = &n3;\n  n3.next = &n2;\n \n  func(&n1);  \n \n  struct Node* current = &n1;\n \n  while(current != NULL){\n    printf(\"%d\", current->value);\n    current = current->next;\n }\n \n return 0;\n \n}",
      "type": "코드완성"
    },
    {
      "id": "2024-3-13",
      "number": 13,
      "question": "13. 다음은 테스트 커버리지에 대한 문제이다. 아래 내용에 알맞는 답을 보기에서 골라 작성하시오. 1. 테스트를 통해 프로그램의 모든 문장을 최소한 한 번씩 실행했는지를 측정 2. 프로그램 내의 모든 분기(조건문)의 각 분기를 최소한 한 번씩 실행했는지를 측정 3. 복합 조건 내의 각 개별 조건이 참과 거짓으로 평가되는 경우를 모두 테스트했는지를 측정\nㄱ. 조건     ㄴ. 경로      ㄷ. 결정      ㄹ. 분기      ㅁ.함수          ㅂ. 문장      ㅅ. 루프",
      "answer": "1. 문장 2. 분기 3. 조건",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-3-14",
      "number": 14,
      "question": "14.아래는 UML클래스의 관계에 관한 문제이다. 보기를 보고 알맞는 관계를 선택하여 작성하시오.\nㄱ. 의존         ㄴ. 연관         ㄷ. 일반화",
      "answer": "(1) 연관 (2) 일반화 (3) 의존",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-3-15",
      "number": 15,
      "question": "15. 다음은 데이터베이스에 관한 문제이다. 아래 내용을 읽고 알맞는 답을 보기에서 찾아 골라 작성하시오.\n(1) 다른 테이블, 릴레이션의 기본 키를 참조하는 속성 또는 속성들의 집합 (2) 테이블에서 각 행을 유일하게 식별할 수 있는 최소한의 속성들의 집합 (3) 후보 키 중에서 선정된 기본 키를 제외한 나머지 후보 키 (4) 테이블에서 각 행을 유일하게 식별할 수 있는 속성들의 집합 ㄱ. 슈퍼키         ㄴ. 외래키            ㄷ. 대체키             ㄹ. 후보키",
      "answer": "(1) 외래키 (2) 후보키 (3) 대체키 (4) 슈퍼키",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-3-16",
      "number": 16,
      "question": "16. 다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "1",
      "explanation": null,
      "code": "#include <stdio.h>\n \nvoid func(int** arr, int size){\n  for(int i=0; i<size; i++){\n     *(*arr + i) = (*(*arr+i) + i) % size;\n  }\n}\n \nint main(){\n  int arr[] = {3,1, 4, 1, 5};\n  int* p = arr;\n  int** pp = &p;\n  int num = 6;\n  \n  func(pp, 5);  \n  num = arr[2];\n  printf(\"%d\", num);  \n \n  return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-3-17",
      "number": 17,
      "question": "17. 다음 아래 내용을 보고 알맞는 용어를 작성하시오. (3글자로 작성)\n- 공용 네트워크를 통해 사설 네트워크를 확장하는 기술이다.  - 사용자의 IP 주소를 숨기고, 사용자가 어디에서 접속하는지를 추적하기 어렵게 만든다.  - 종류로는 IPsec 또는 SSL, L2TP 등이 있다.",
      "answer": "VPN",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2024-3-18",
      "number": 18,
      "question": "18. 다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "101",
      "explanation": null,
      "code": "public class ExceptionHandling {\n  public static void main(String[] args) {\n      int sum = 0;\n      try {\n          func();\n      } catch (NullPointerException e) {\n          sum = sum + 1;\n      } catch (Exception e) {\n          sum = sum + 10;\n      } finally {\n          sum = sum + 100;\n      }\n      System.out.print(sum);\n  }\n \n  static void func() throws Exception {\n      throw new NullPointerException(); \n  }\n}",
      "type": "코드완성"
    },
    {
      "id": "2024-3-19",
      "number": 19,
      "question": "19. 다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
      "answer": "B0",
      "explanation": null,
      "code": "class Main {\n \n  public static class Collection<T>{\n    T value;\n \n    public Collection(T t){\n        value = t;\n    }\n \n    public void print(){\n       new Printer().print(value);\n    }\n \n   class Printer{\n      void print(Integer a){\n        System.out.print(\"A\" + a);\n      }\n      void print(Object a){\n        System.out.print(\"B\" + a);\n      } \n      void print(Number a){\n        System.out.print(\"C\" + a);\n      }\n   }\n }\n \n  public static void main(String[] args) {\n      new Collection<>(0).print();\n  }\n  \n}",
      "type": "코드완성"
    },
    {
      "id": "2024-3-20",
      "number": 20,
      "question": "20. 다음은 네트워크에 대한 문제이다.  아래 내용을 보고 알맞는 용어를 작성하시오.   - 중앙 관리나 고정된 인프라 없이 임시로 구성되는 네트워크이다.   - 일반적으로 무선 통신을 통해 노드들이 직접 연결되어 데이터를 주고받는다.  - 긴급 구조, 긴급 회의, 군사적인 상황 등에서 유용하게 활용될 수 있다. ㄱ.Infrastructure Network        ㄴ. Firmware Network        ㄷ. Peer-to-Peer Network        ㄹ. Ad-hoc Network         ㅁ. Mesh Network        ㅂ.Sensor Network        ㅅ.Virtual Private Network",
      "answer": "ㄹ. ( Ad-hoc Network )",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2023-1": [
    {
      "id": "2023-1-01",
      "number": 1,
      "question": "1. 아래 자바 코드에서 출력되는 값을 작성하시오.",
      "answer": "10 11 10 20",
      "explanation": null,
      "code": "class Static{\n \n    public int a = 20;\n    static int b = 0;\n    \n}\n \npublic class Main{\n    public static void main(String[] args) {\n        \n        int a;\n        a = 10;\n        Static.b = a;\n \n        Static st = new Static();\n \n        System.out.println(Static.b++);\n        System.out.println(st.b);\n        System.out.println(a);\n        System.out.print(st.a);\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2023-1-02",
      "number": 2,
      "question": "2. 다음 C언어의 출력값을 작성하시오.",
      "answer": "Art A A Art Art",
      "explanation": null,
      "code": "#include <stdio.h>\n \nint main(){\n    char a[] = \"Art\";\n    char* p = NULL;\n    p = a;\n \n    printf(\"%s\\n\", a);\n    printf(\"%c\\n\", *p);\n    printf(\"%c\\n\", *a);\n    printf(\"%s\\n\", p);\n \n    for(int i = 0; a[i] != '\\0'; i++)\n    printf(\"%c\", a[i]);\n \n}",
      "type": "코드완성"
    },
    {
      "id": "2023-1-03",
      "number": 3,
      "question": "3. 다음 C언어의 출력값을 작성하시오.",
      "answer": "qwe",
      "explanation": null,
      "code": "#include <stdio.h>\n \nint main(){\n \n    char* a = \"qwer\";\n    char* b = \"qwtety\";\n \n    for(int i = 0; a[i] != '\\0' ; i++){\n        for(int j = 0; b[j] != '\\0'; j++){\n            if(a[i] == b[j]) printf(\"%c\", a[i]);\n        }\n    }\n \n}",
      "type": "코드완성"
    },
    {
      "id": "2023-1-04",
      "number": 4,
      "question": "4. 다음 괄호안에 들어가는 용어의 Full Name 또는 약자를 작성하시오.\n(   )은/는 비동기적인 웹 애플리케이션의 제작을 위해 JavaScript와 XML을 이용한 비동기적 정보 교환 기법이다. (   )은/는 필요한 데이터만을 웹서버에 요청해서 받은 후 클라이언트에서 데이터에 대한 처리를 할 수 있다.  보통 SOAP이나 XML 기반의 웹 서비스 프로토콜이 사용되며, 웹 서버의 응답을 처리하기 위해 클라이언트 쪽에서는 자바스크립트를 쓴다. (   )은/는 Google Map과 Google pages에서 사용한 기술에 기반하여 제작되었다.",
      "answer": "AJAX (Asynchronous JavaScript and XML)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-1-05",
      "number": 5,
      "question": "5. 아래 내용을 확인하여 괄호 안에 용어를 표안에 알맞는 값을 고르시오.\n(보기가 있습니다. ex: 패킷​  등)",
      "answer": "가상회선, 데이터그램",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-1-06",
      "number": 6,
      "question": "6. 아래 내용을 확인하여 알맞는 답을 작성하시오.",
      "answer": "L2TP",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-1-07",
      "number": 7,
      "question": "7. 아래 내용에서 괄호안에 알맞는 용어를 작성하시오.​\n(    )  네트워크 상의 다른 컴퓨터에 로그인하거나 원격 시스템에서 명령을 실행하고 다른 시스템으로 파일을 복사할 수 있도록 해주는 응용 프로그램 또는 그 프로토콜을 가리킨다.\n(    )  보안 접속을 통한 rsh, rcp, rlogin, rexec, telnet, ftp 등을 제공하며, IP spoofing (IP스푸핑, 아이피 위/변조 기법중 하나)을 방지하기 위한 기능을 제공한다.\n(    )  기본적으로 포트는 22번이다.​",
      "answer": "SSH (Secure SHell)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-1-08",
      "number": 8,
      "question": "8. 아래 설명에 대한 알맞는 답을 작성하시오.\n(보기가 있습니다. ex: 랜섬웨어, 스파이웨어​  등)",
      "answer": "1. 웜 2. 트로이 목마 3. 바이러스",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-1-09",
      "number": 9,
      "question": "9. 다음 아래 코드에서 이진수를 십진수로 변환하는 코드에 대해 괄호 (a) (b)의 적합한 답을 작성하시오.",
      "answer": "1. (a) % ,(b) 10 or 5 or 2 2. (a) & ,(b) 1",
      "explanation": null,
      "code": "#include <stdio.h>\n \nint main() {\n \n    int input = 101110;\n    int di = 1;\n    int sum = 0;\n \n    while (1) {\n \n        if (input == 0) break\n        else {\n \n          sum = sum + (input (a)(b)) * di;\n             di = di * 2;\n             input = input / 10;\n \n        }\n    }\n \n    printf(\"%d\", sum);\n \n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2023-1-10",
      "number": 10,
      "question": "10. 다음 보안 관련 설명으로 괄호안에 알맞는 용어를  작성하시오.\n(    )은/는 TCP/IP에서 IP 패킷을 처리할 때 발생되는 문제를 알려주는 프로토콜이다.\n(    ) 프로토콜은 보통 다른 호스트나 게이트웨이 와 연결된 네트웍에 문제가 있는지 확인하기 위한 목적으로 주로 사용된다.\n(    ) 을/를 이용한 공격에는 (    ) Flooding가 있는데 ping 명령어를 통한 (     ) 패킷을 연속적으로 계속 보내어 서버의 요청에 응답으로 인한 다른작업을 하지 못하도록 하는 공격이다.",
      "answer": "ICMP",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-1-11",
      "number": 11,
      "question": "11. 다음은 디자인 패턴에 관한 설명이다. 설명에 내용에 알맞는 답을 고르시오.\n(생성/구조/행위 별로 표형태의 보기가 있습니다. ex: Builder, Bridge​  등)\n- 다른 무언가와 이어지는 인터페이스 역할을 하는 클래스를 의미한다.\n- 실제 객체를 호출하면 행위를 중간에 가로채서 다른 동작을 수행하는 객체로 변경한다.\n- 객체를 정교하게 제어해야 하거나 객체 참조가 필요한 경우 사용한다.\n- 분리된 객체를 위임함으로써 대리 작업을 중간 단계에 삽입할 수도 있으며 분리된 객체를 동적으로 연결함으로써 객체의 실행 시점을 관리할 수도 있다.",
      "answer": "proxy",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-1-12",
      "number": 12,
      "question": "12. 다음은 데이터베이스에 관련된 내용이다. 각 괄호안에 알맞는 답을 작성하시오.\n(보기가 있습니다. ex: 릴레이션 스키마​  등)",
      "answer": "1. 튜플 2. 릴레이션 인스턴스 3. 카디널리티",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-1-13",
      "number": 13,
      "question": "13. [학생] 테이블에서 학생 이름이 '민수'인 튜플을 삭제하는 쿼리를 작성하시오.\n조건 - 컬럼의 값이 문자열일 경우 작은 따움표 ('  ')를 표시하시오. - SQL 마지막에 세미콜론(;)은 표기하지 않아도 관계 없습니다.",
      "answer": "delete from 학생 where 이름 = '민수';",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-1-14",
      "number": 14,
      "question": "14. 다음 코드에서 괄호안에 알맞는 값을 변수명으로 작성하시오.\n(코드가 해깔려 시험문제와 동일하지 않지만 패턴이 비슷하다는 점만 참고해주세요.)\n출력 값 : 1 2 3 5 7 8",
      "answer": "idx2, nx",
      "explanation": null,
      "code": "public class Sort {\n \n    public static void swap(int[] arr, int idx1, int idx2){\n        int temp = arr[idx1];\n        arr[idx1] = arr[idx2];\n        arr[( 1 )] = temp;\n    }\n \n    public static void Usort(int[] array, int length){\n        for (int i = 0; i < length; i++) {\n            for (int j = 0; j < length - i - 1; j++) {\n                if (array[j] > array[j + 1]) {\n                    swap(array, j, j + 1);\n                }\n            }\n        }\n    }\n \n    public static void main(String[] args) {\n        int[] item = new int[] { 5, 3, 8, 1, 2, 7 };\n        int nx = 6;   \n        Usort(item, ( 2 ));\n \n        for (int data : item) {\n            System.out.print(data + \" \");\n        }\n    }\n \n}",
      "type": "코드완성"
    },
    {
      "id": "2023-1-15",
      "number": 15,
      "question": "15. 다음 파이썬 코드의 알맞는 출력값을 작성하시오.",
      "answer": "{'한국', '중국', '베트남', '홍콩', '태국'}",
      "explanation": null,
      "code": "a = {'한국', '중국', '일본'}\na.add('베트남')\na.add('중국')\na.remove('일본')\na.update({'홍콩', '한국', '태국'})\nprint(a)",
      "type": "코드완성"
    },
    {
      "id": "2023-1-16",
      "number": 16,
      "question": "16. 다음 성적 테이블에서 과목별 점수의 평균이 90점 이상인 '과목이름', '최소점수', '최대점수' 를 검색하고자 한다. [조건]을 참고하여 적합한 SQL문을 작성하시오.\n조건:  - where사용하지 말하야 한다. - SELECT절에 별칭을 사용하여 작성해야 한다. - SQL 구문 마지막에 세미콜론 생락 가능하다. - 반드시 GROUP BY와 having을 사용해야 한다. - 집계함수를 사용해야 한다.",
      "answer": "SELECT 과목이름 ,MIN(점수) AS 최소점수 ,MAX(점수) AS 최대점수 From 성적 GROUP BY 과목이름 HAVING AVG(점수) >= 90",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-1-17",
      "number": 17,
      "question": "17. 다음 JAVA 코드에서 알맞는 출력 값을 작성하시오.",
      "answer": "Vehicle name: Spark",
      "explanation": null,
      "code": "abstact class Vehicle {\n \n    String name;\n    abstract public String getName(String val);\n \n    public String getName() {\n            return \"Vehicle name: \" + name;\n    }\n}\n \n \n \nclass Car extends Vehicle {\n \n    public Car(String val) {\n            name=super.name=val;\n    }\n \n    public String getName(String val) {\n            return \"Car name:\" + val;\n    }\n \n    public String getName(byte val[]) {\n            return \"Car name:\" + val;\n    }\n}\n \n \npublic class Main {\n \n    public static void main(String[] args) {\n \n    Vehicle obj = new Car(\"Spark\");\n    System.out.println(obj.getName());\n \n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2023-1-18",
      "number": 18,
      "question": "18. 다음은 스키마와 관련된 내용이다. 각 괄호안에 알맞는 답을 작성하시오.\n(보기가 있습니다.)",
      "answer": "1. 외부 2. 개념 3. 내부",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-1-19",
      "number": 19,
      "question": "19. 다음 아래 제어 흐름 그래프가 분기 커버리지를 만족하기 위한 테스팅 순서를 쓰시오.",
      "answer": "1234561, 124567 or 1234567, 124561",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-1-20",
      "number": 20,
      "question": "20. 다음 자바 코드에 대한 출력 값을 작성하시오.",
      "answer": "500",
      "explanation": null,
      "code": "class Parent {\n    int x = 100;\n \n    Parent() {\n        this(500);\n    }\n \n    Parent(int x) {\n        this.x = x;\n    }\n \n    int getX() {\n        return x;\n    }\n}\n \nclass Child extends Parent {\n    int x = 4000;\n    \n    Child() {\n        this(5000);\n    }\n \n    Child(int x) {\n        this.x = x;\n    }\n}\n \npublic class Main {\n    public static void main(String[] args) {\n        Child obj = new Child();\n        System.out.println(obj.getX());\n    }\n}",
      "type": "코드완성"
    }
  ],
  "2023-2": [
    {
      "id": "2023-2-01",
      "number": 1,
      "question": "1. 다음은 C언어 코드의 문제이다. 보기의 조건에 맞도록 괄호안에 알맞은 코드를 작성하시오.\n입력값이 54321일 경우 출력값이 43215로 출력되어야 한다.",
      "answer": "n[(i+1) % 5]",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-02",
      "number": 2,
      "question": "2. 다음은 JAVA 코드 문제이다. 가지고 있는 돈이 총 4620원일 경우 1000원, 500원, 100원, 10원의 지폐 및 동전을 이용하여 보기의 조건에 맞춰 최소한의 코드를 통해 괄호안을 작성하시오.\n아래 주어진 항목들을 갖고 괄호안의 코드를 작성\n변수 : m연산자 : / , %괄호 : [ , ] , ( , ) 정수 : 1000, 500, 100, 10",
      "answer": "m / 1000 (m % 1000) / 500 (m % 500) / 100 (m % 100) / 10",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-03",
      "number": 3,
      "question": "3. 다음은 c언어의 코드이다. 보기의 조건에 맞추어 알맞은 출력값을 작성하시오.\n입력값은 홍길동, 김철수, 박영희 순서로 주어진다.",
      "answer": "박영희 박영희 박영희",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-04",
      "number": 4,
      "question": "4. 다음은 테이블에 데이터를 삽입하기 위한 과정이다. 보기의 조건식에 맞게 데이터 삽입을 위한 SQL문을 작성하시오.\nCREATE TABLE 학생 (  학번 int,  이름 varchar(20),  학년 int,  전공 varchar(30),  전화번호varchar(20));\n[학생]\n문자열일 경우 작은따음표(작은따음표가 아니라 다른 단어로 명시되었습니다.)",
      "answer": "INSTER INTO 학생(학번,이름,학년,전공,전화번호) VALUES(9830287,'뉴진스',3,'경영학개론','010-1234-1234');",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-05",
      "number": 5,
      "question": "5. 다음은 C언어의 문제이다. 알맞은 출력값을 작성하시오.",
      "answer": "BCD",
      "explanation": null,
      "code": "#include <stdio.h>\n \nvoid main(){\n    int n[3] = {73, 95, 82};\n    int sum = 0;\n \n    for(int i=0;i<3;i++){\n        sum += n[i];\n    }\n \n    switch(sum/30){\n        case 10:\n        case 9: printf(\"A\");\n        case 8: printf(\"B\");\n        case 7:\n        case 6: printf(\"C\");\n        default: printf(\"D\");\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2023-2-06",
      "number": 6,
      "question": "6. 다음은 테스트 커버리지에 대한 내용이다. 내용을 보고 보기에 알맞는 기호를 고르시오.\nㄱ. 구문 커버리지  ㄴ. 경로 커버리지  ㄷ. 조건/결정 커버리지   ㄹ. 변형 조건/결정 커버리지\nㅂ. 다중 조건 커버리지  ㅅ. 결정 커버리지  ㅇ. 조건 커버리지",
      "answer": "ㅇ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-07",
      "number": 7,
      "question": "7. 다음은 소스코드의 알맞은 출력을 작성하시오.",
      "answer": "505",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-08",
      "number": 8,
      "question": "8. 다음 내용에 알맞는 답을 작성하시오.",
      "answer": "템퍼프루핑",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-09",
      "number": 9,
      "question": "9. 다음은 C언어 문제이다. 알맞은 출력값을 작성하시오.",
      "answer": "213465",
      "explanation": null,
      "code": "#include <stdio.h>\n#define MAX_SIZE 10\n \nint isWhat[MAX_SIZE];\nint point= -1;\n \nint isEmpty() {\n    if (point == -1) return 1;\n    return 0;\n}\n \nint isFull() {\n    if (point == 10) return 1;\n    return 0;\n}\n \nvoid into(int num) {\n    if (point >= 10) printf(\"Full\");\n    else isWhat[++point] = num;\n}\n \nint take() {\n    if (isEmpty() == 1) printf(\"Empty\");\n    else return isWhat[point--];\n    return 0;\n}\n \nint main(int argc, char const *argv[]){\n    int e;\n    into(5); into(2);\n \n    while(!isEmpty()){\n        printf(\"%d\", take());\n        into(4); into(1); printf(\"%d\", take());\n        into(3); printf(\"%d\", take()); printf(\"%d\", take());\n        into(6); printf(\"%d\", take()); printf(\"%d\", take());\n    }\n    \n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2023-2-10",
      "number": 10,
      "question": "10. 데이터베이스 설계 순서에 관한 내용이다. 보기를 이용하여 괄호안에 알맞은 내용을 작성하시오.\n구현, 요구조건 분석, 개념적 설계, 물리적 설계, 논리적 설계",
      "answer": "요구조건 분석, 개념적 설계, 논리적 설계, 물리적 설계, 구현",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-11",
      "number": 11,
      "question": "11. 다음은 디자인 패턴에 관한 문제이다. 보기에서 알맞는 답을 작성하시오.\n1.\n2.",
      "answer": "1. Singleton 2. Visitor",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-12",
      "number": 12,
      "question": "12. 다음 내용에서 설명하는 문제에 대해 보기에 알맞는 답을 골라 작성하시오.\n( 1 ) Code는 데이터 전송시 1 비트의 에러를 정정할 수 있는, 오류정정부호의 일종으로 미국의 Bell 연구소의 Hamming에 의해 고안되었다. 선형블록부호 및 순회부호에 속에 속한다.\n( 2 ) 은/는 송신측이 전송할 문자나 프레임에 부가적 정보(Redundancy)를 첨가하여 전송하고 수신측이 이 부가적 정보를 이용하여 에러검출 및 에러정정을 하는 방식이다.\n( 3 ) 은/는 데이터 전송 과정에서 오류가 발생하면 송신 측에 재전송을 요구하는 방식이다. 오류를 검출하는 방법은 Parity검사와 CRC, 블록 합 검사 등이 있다.\n( 4 ) 은/는 데이터가 저장장치 내의 한 장소에서 다른 장소로 이동되거나, 컴퓨터들간에 전송될 때, 데이터가 유실 또는 손상되었는지 여부를 점검하는 기술과 관련된 용어이다.\n( 5 ) 은/는 네트워크 등을 통하여 데이터를 전송할 때 전송된 데이터에 오류가 있는지를 확인하기 위한 체크값을 결정하는 방식을 말한다.\nEAC, FEC, hamming, CRC, PDS, parity, BEC",
      "answer": "1. hamming 2. FEC 3. BEC 4. parity 5. CRC",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-13",
      "number": 13,
      "question": "13. 다음은 HDLC 프로토콜에 대한 설명이다. 보기 안에 알맞는 답을 골라 작성하시오.\n( 1 ) 프레임은 Seq, Next, P/F의 필드를 가진다. 또한 맨 처음 비트를 0으로 가진다. Seq는 송신용 순서번호를 가지고 있다. Next는 응답용 순서번호를 가진다. P/F는 P가 1로 설정된 경우 주국에서 종국에 데이터 전송을 허용하는 것을 의미하고 F가 1로 설정된 경우 종국에서 주국으로 데이터 전송을 하는 것을 의미한다.\n( 2 ) 프레임은 맨 앞의 필드가 1로 되어 있어 정보 프레임이 아니라는 것을 나타내고 다음 비트가 0이 나와있다. Type의 경우에는 2비트를 가지고 있어 4가지의 종류로 나누어진다.  데이터를 보내는 역할이 아니라 응답의 기능을 수행하므로 Seq에 대한 값은 필요가 없고 다음 프레임을 요구하는 Next만 존재한다.\n( 3 ) 프레임은 순서 번호가 없는 프레임을 의미한다. 첫 번째 비트와 두 번째 비트가 모두 1로 설정되어 있다. 여러 종류를 가지고 있는데 Type의 2비트와 Modifier의 3비트를 합쳐 5비트를 통해 종류를 나눈다.\n( 4 ) 은/는 두 호스트 모두 혼합국으로 동작한다. 양쪽에서 명령과 응답을 전송할 수 있다.\n( 5 ) 은/는 불균형 모드로 주국의 허락 없이 종국에서 데이터를 전송할 수 있다.\nㄱ. 연결제어     ㄴ. 감독     ㄷ. 정보     ㄹ. 양방향 응답     ㅁ. 익명     ㅂ. 비번호ㅅ. 릴레이    ㅇ. 동기균형     ㅈ. 동기응답    ㅊ. 비동기균형     ㅋ. 비동기응답",
      "answer": "1. ㄷ 2. ㄴ 3. ㅂ 4. ㅊ 5. ㅋ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-14",
      "number": 14,
      "question": "14. 다음은 자바에 대한 문제이다. 알맞은 출력값을 작성하시오.",
      "answer": "true false true true",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-15",
      "number": 15,
      "question": "15. 다음 보기는 암호화 알고리즘에 대한 내용이다. 대칭키와 비대칭키에 해당하는 보기의 내용을 작성하시오\n대칭키 : (              )\n비대칭키 : (                    )\nDES, RSA, AES, ECC,  ARIA, SEED",
      "answer": "대칭키: DES, AES, ARIA, SEED 비대칭키: RSA, ECC",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-16",
      "number": 16,
      "question": "16. 다음 괄호안에 알맞는 답을 작성하시오.",
      "answer": "해시 or 해싱 or hash",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-17",
      "number": 17,
      "question": "17. 다음 보기의 SQL문에서 괄호안에 알맞는 단어를 작성하시오.\nDROP VIEW 학생 (         )",
      "answer": "cascade (대소문자 상관 X)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-18",
      "number": 18,
      "question": "18. 다음 코드는 선택정렬 구현에 관한 문제이다.  오름차순으로 정렬할 경우 빈칸에 알맞는 연산자를 보기에서 골라 작성하시오.\n<, <=, =>, >, ==, /, %",
      "answer": ">",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-19",
      "number": 19,
      "question": "19. 다음 파이썬 코드에서 알맞는 출력값을 작성하시오.",
      "answer": "engneing",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-2-20",
      "number": 20,
      "question": "20. 다음 설명에 대한 알맞는 답을 작성하시오.\n1.\n2.",
      "answer": "1. 스텁 2. 드라이버",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2023-3": [
    {
      "id": "2023-3-01",
      "number": 1,
      "question": "1. 다음은 Java 코드이다. 올바른 출력 결과를 작성하시오.",
      "answer": "BDCDD",
      "explanation": null,
      "code": "public class main{\n    public static void main(String[] args) {\n        A b = new B();\n        b.paint();\n        b.draw();\n    }\n}\n \nclass A {\n    public void paint() {\n        System.out.print(\"A\");\n        draw();\n    }\n    public void draw() {\n        System.out.print(\"B\");\n        draw();\n    }\n}\n \nclass B extends A {\n    public void paint() {\n        super.draw();\n        System.out.print(\"C\");\n        this.draw();\n    }\n    public void draw() {\n        System.out.print(\"D\");\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2023-3-02",
      "number": 2,
      "question": "2. 다음 설명하는 용어를 보기에 맞게 골라 기호를 작성하시오.\n보기",
      "answer": "ㅇ ( OAuth )",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-3-03",
      "number": 3,
      "question": "3. 리눅스(Linux)에서 사용자에게 읽기/쓰기/실행 권한을 부여하고, 그룹에게는 읽기/실행을 부여하고, 그 이외에는 실행 권한을 test.txt 파일에 부여하는 위한 명령어는 다음과 같다. 빈칸에 들어갈 답을 작성하시오. (8진법 사용)\n(    (1)    ) (    (2)    ) test.txt",
      "answer": "(1) chmod (2) 751",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-3-04",
      "number": 4,
      "question": "4. 다음은 C 언어 코드이다. 알맞는 출력 결과를 작성하시오.",
      "answer": "34",
      "explanation": null,
      "code": "#include <stdio.h>\n \nint test(int n) {\n    int i, sum = 0;\n \n    for (i = 1; i <= n / 2; i++){\n        if (n % i == 0)\n        sum += i;\n    }\n \n    if (n == sum) \n        return 1;\n    ​\n    return 0;\n}\n \n \nint main(){\n    int i, sum=0;\n \n    for (i = 2; i <= 100; i++){ \n        if (test(i))\n        sum += i;\n    }\n    \n    printf(\"%d \", sum); \n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2023-3-05",
      "number": 5,
      "question": "5. C언어에서 구조체의 멤버에 접근하기 위해 괄호안의 기호를 작성하시오.\n출력결과\n10\n10",
      "answer": "&rarr;",
      "explanation": null,
      "code": "#include <stdio.h>\n#include <stdlib.h>\n \ntypedef struct Data{\n    char c;\n    int *numPtr; \n} Data;\n \nint main(){\n    int num = 10;\n    Data d1;    \n    Data *d2 = malloc(sizeof(struct Data));\n    \n    d1.numPtr = &num;  \n   d2 ( ) numPtr = &num; \n \n    printf(\"%d\\n\", *d1.numPtr); \n    printf(\"%d\\n\", *d2 ( ) numPtr);\n \n    free(d2); \n    return 0;\n}",
      "type": "코드완성"
    },
    {
      "id": "2023-3-06",
      "number": 6,
      "question": "6. 다음 빈칸에 들어갈 UNION 연산의 결과값을 작성하시오.\n[테이블]\nT1\nT2\n[쿼리]\n결과 테이블",
      "answer": "4 3 2 1",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-3-07",
      "number": 7,
      "question": "7. 다음 설명은 서버 접근 통제의 유형이다. 괄호 안에 들어갈 용어를 작성하시오. (영어 약자로 작성하시오.)",
      "answer": "(1) MAC (2) RBAC (3) DAC",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-3-08",
      "number": 8,
      "question": "8. 다음 C언어 코드에 알맞는 출력값을 작성하시오.",
      "answer": "5040",
      "explanation": null,
      "code": "#include\n \nint f(int n) {\n    if(n<=1) return 1;\n    else return n*f(n-1);\n}\n \nint main() {\n    printf(\"%d\", f(7));\n}",
      "type": "코드완성"
    },
    {
      "id": "2023-3-09",
      "number": 9,
      "question": "9. 다음 설명에 대해 괄호 안에 알맞는 용어를 작성하시오. (영어 약자로 작성하시오.)",
      "answer": "ATM",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-3-10",
      "number": 10,
      "question": "10. 다음은 C언어의 포인터 문제이다. 알맞는 출력값을 작성하시오.",
      "answer": "KOREA OREA K E O",
      "explanation": null,
      "code": "#include\n \nint main() {\n    char* p = \"KOREA\";\n    printf(\"%s\\n\", p);\n    printf(\"%s\\n\", p+1);\n    printf(\"%c\\n\", *p);\n    printf(\"%c\\n\", *(p+3));\n    printf(\"%c\\n\", *p+4);\n}",
      "type": "코드완성"
    },
    {
      "id": "2023-3-11",
      "number": 11,
      "question": "11. 다음은 Java 코드에 대한 알맞는 출력값을 작성하시오.",
      "answer": "2",
      "explanation": null,
      "code": "class Parent {\n    int compute(int num) {\n        if(num <= 1)\n            return num;\n        return compute(num-1) + compute(num-2);\n    }\n}\n \nclass Child extends Parent {\n    int compute(int num) {\n        if(num <= 1)\n            return num;\n        return compute(num-1) + compute(num-3);\n    }\n}\n \npublic class main {\n    public static void main(String args[]) {\n        Parent obj = new Child();\n        System.out.print(obj.compute(7));\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2023-3-12",
      "number": 12,
      "question": "12. IP 패킷에서 외부의 공인 IP주소와 포트 주소에 해당하는 내부 IP주소를 재기록하여 라우터를 통해 네트워크 트래픽을 주고받는 기술은 무엇인가?",
      "answer": "NAT(Network Address Transformation)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-3-13",
      "number": 13,
      "question": "13. 다음 자바 코드를 실행할 경우 에러가 발생이 된다. 에러가 발생하는 라인명을 작성하시오.",
      "answer": "7",
      "explanation": null,
      "code": "class Person {\n    private String name;\n    public Person(String val) {\n        name = val;\n    }\n    public static String get() {\n    return name;\n    }\n    public void print() {\n        System.out.println(name);\n    }\n}\npublic class main {\n    public static void main(String[] args) {\n        Person obj = new Person(\"Kim\");\n        obj.print();\n    }\n}",
      "type": "코드완성"
    },
    {
      "id": "2023-3-14",
      "number": 14,
      "question": "14. 다음은 파이썬에 대한 문제이다. 밑줄친 부분에 알맞는 답을 작성하시오.\n특이사항\n입력값은 2와 3이다.\n출력화면\n파이썬 입력출에 대한 문제입니다. 2 3 2 + 3 = 5",
      "answer": "split",
      "explanation": null,
      "code": "print(\"파이썬 입출력에 대한 문제입니다.\")\n \nnum1, num2 = input()._____()\nnum1 = int(num1)\nnum2 = int(num2)\nprint(num1,num2)\n \nnum3 = num1 + num2\nprint(num1 + \" + \"  + num2 + \" = \" + num3)",
      "type": "코드완성"
    },
    {
      "id": "2023-3-15",
      "number": 15,
      "question": "15. 다음은 판매와 관련된 다이어그램이다. 해당 다이어그램의 명칭을 쓰시오.",
      "answer": "패키지",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-3-16",
      "number": 16,
      "question": "16. 다음 설명에 알맞는 답을 보기에서 골라 작성하시오.\n보기",
      "answer": "ㄱ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-3-17",
      "number": 17,
      "question": "17. 다음은 클라우드에 대한 유형 문제이다. 괄호안에 알맞는 답을 보기에 골라 작성하시오.\n출처 :&nbsp; https://www.whatap.io/ko/blog/9/\n보기",
      "answer": "(1) laas (2) PaaS (3) SaaS",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-3-18",
      "number": 18,
      "question": "18. 다음은 프로토콜 종류에 관한 설명이다. 알맞는 답을 작성하시오.",
      "answer": "RIP",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-3-19",
      "number": 19,
      "question": "19. 다음은 관계 대수에 대한 내용이다. 보기에 알맞는 기호를 작성하시오.\n1. join :   (   1   )\n2. project :   (   2   )\n3. select :   (   3   )\n4. division :   (   4   )\n보기",
      "answer": "(1) ㄷ (2) ㄴ (3) ㄱ (4) ㄹ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2023-3-20",
      "number": 20,
      "question": "20. 다음은 데이터베이스에 관련된 문제이다. 괄호 안에 알맞는 답을 작성하시오.",
      "answer": "참조",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2022-1": [
    {
      "id": "2022-1-01",
      "number": 1,
      "question": "1. 아래 설명에 맞는 RAID 단계를 숫자로 작성하시오.- Striping(스트라이핑) 구현 방식- I/O 로드의 분산으로 매우 빠른 속도- 데이터를 블럭으로 분할 저장하며, 각 블럭은 다른 디스크로 나뉘어 저장",
      "answer": "0",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-1-02",
      "number": 2,
      "question": "2. 다음 설명을 확인하여 해당하는 항목을 보기에서 찾아 적으시오. (실제 기출문제에서는 답의 보기가 주어집니다.(오답 중, rollback 등..))1. 오류가 발생하기 전까지의 사항을 로그(log)로 기록해 놓고, 이전 상태로 되돌아간 후, 실패가 발생하기 전까지의 과정을 그대로 따라가는 현상2. 작업을 취소하여 트랜잭션을 이전 상태로 되돌리는 것",
      "answer": "1. redo 2. undo",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-1-03",
      "number": 3,
      "question": "3. 다음 자바 문법에 알맞는 출력 결과를 작성하시오.",
      "answer": "2000",
      "explanation": null,
      "code": "class A {\n  int a;\n  int b;\n}\n  \n  public class Main {\n  \n  static void func1(A m){\n   m.a *= 10;\n  }\n  \n  static void func2(A m){\n    m.a += m.b;\n  }\n  \n  public static void main(String args[]){\n  \n  A m = new A();\n  \n  m.a = 100;\n  func1(m);\n  m.b = m.a;\n  func2(m);\n  \n  System.out.printf(\"%d\", m.a);\n  \n  }\n}",
      "type": "코드완성"
    },
    {
      "id": "2022-1-04",
      "number": 4,
      "question": "4. 다음 SQL 결과에 알맞는 쿼리을 작성하시오.\nSELECT name, score FROM 성적 ( 1 ) BY ( 2 ) ( 3 )",
      "answer": "1. ORDER 2. score 3. DESC",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-1-05",
      "number": 5,
      "question": "5. 데이터베이스의 이상현상 중, 삭제 이상에 대해 서술하시오.",
      "answer": "데이터를 삭제할 경우 원하지 않는 다른 데이터도 삭제되어버리는 이상",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-1-06",
      "number": 6,
      "question": "6. 다음은 파이썬 코드에서 출력되는 a와 b의 값을 작성하시오.",
      "answer": "a= 20 b= 2",
      "explanation": null,
      "code": "def exam(num1, num2=2):\n  print('a=', num1, 'b=', num2)\nexam(20)",
      "type": "코드완성"
    },
    {
      "id": "2022-1-07",
      "number": 7,
      "question": "7. 다음 설명과 관련된 답을 보기에서 골라 작성하시오.(실제 기출문제에서는 답의 보기가 주어집니다.(오답 중, remove, sort 등..))1. 요소를 확장해준다는 의미를 가지고 있으며, 모든 항목을 하나의 요소로 추가2. 리스트 내부 요소를 꺼내주는 함수로써, 그 요소는 리스트 안에서 삭제하고 그 값을 반환3. 리스트 내부의 요소의 순서는 뒤집는 역할",
      "answer": "1. extend 2. pop 3. reverse",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-1-08",
      "number": 8,
      "question": "8. 다음 아래 단어를 영어 약자로 작성하시오.임시 키 무결성 프로토콜",
      "answer": "TKIP (Temporal Key Integrity Protocol)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-1-09",
      "number": 9,
      "question": "9. 다음 중, 설명에 대한 답을 영어 약자로 작성하시오.키보드나 마우스와 같은 장치 없이 말이나 행동 그리고 감정과 같은 인간의 자연스러운 표현으로 컴퓨터나 장치를 제어할 수 있는 환경",
      "answer": "NUI",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-1-10",
      "number": 10,
      "question": "10. 다음은 분석도구에 대한 설명으로 보기에 알맞는 답을 작성하시오.(실제 기출문제에서는 답의 보기가 주어집니다.(오답 중, running analysis 등..))1. 소스 코드의 실행 없이, 코드의 의미를 분석해 결함을 찾아내는 원시적 코드 분석 기법2. 소스 코드를 실행하여 프로그램 동작이나 반응을 추적하고 코드에 존재하는 메모리 누수, 스레드 결함 등을 분석",
      "answer": "1. static 2. dynamic",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-1-11",
      "number": 11,
      "question": "11. 다음 Java 코드 중에서 밑줄에 들어갈 알맞는 코드를 작성하시오.",
      "answer": "Car",
      "explanation": null,
      "code": "class Car implements Runnable{\n  int a;\n  \n  public void run(){\n     system.out.println(\"message\")\n  }\n}\n  \npublic class Main{\n  public static void main(String args[]){\n    Thread t1 = new Thread(new ___());\n    t1.start();\n  }\n}",
      "type": "코드완성"
    },
    {
      "id": "2022-1-12",
      "number": 12,
      "question": "12. 다음 설명에 대한 알맞는 단어를 작성하시오.자바 프로그래밍 언어를 이용한 xUnit의 테스트 기법으로써 숨겨진 단위 테스트를 끌어내어 정형화시켜 단위 테스트를 쉽게 해주는 테스트용 Framework이다.",
      "answer": "JUnit",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-1-13",
      "number": 13,
      "question": "13. 다음 보기 중에서 블랙박스 테스트 기법을 3가지 골라 작성하시오.",
      "answer": "ㄷ, ㄹ, ㅂ",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-1-14",
      "number": 14,
      "question": "14. 다음 소스코드에서 입력값이 5가 들어왔을때 출력되는 값을 작성하시오.",
      "answer": "120",
      "explanation": null,
      "code": "#include <stdio.h>\nint func(int a) {\n  if (a <= 1) return 1;\n  return a * func(a - 1);\n}\n \nint main() {\n  int a;\n  scanf(\"%d\", &a);\n  printf(\"%d\", func(a));\n \n}",
      "type": "코드완성"
    },
    {
      "id": "2022-1-15",
      "number": 15,
      "question": "15. 다음 중, 괄호 ( ) 안에 들어갈 연산자를 써서 정수를 역순으로 출력하는 알맞는 답을 작성하시오.\n결과 : 4321",
      "answer": "1. > 2. % 3. /",
      "explanation": null,
      "code": "#include <stdio.h>\nint main() {\n \n  int number = 1234;\n  int div = 10;\n  int result = 0;\n \n  while (number ( 1 ) 0) {\n  \n    result = result * div;\n    result = result + number ( 2 ) div;\n    number = number ( 3 ) div;\n  \n  }\n \n  printf(\"%d\", result);return 0;\n \n}",
      "type": "코드완성"
    },
    {
      "id": "2022-1-16",
      "number": 16,
      "question": "16. 다음 설명에 대한 답을 영어 약자로 작성하시오.정보보호 관리체계의 영문 약자",
      "answer": "ISMS (Information Security Management System)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-1-17",
      "number": 17,
      "question": "17. 다음 설명 중, 괄호 ( ) 안에 들어가는 알맞는 답을 보기에서 선택하여 작성하시오.(실제 기출문제에서는 답의 보기가 주어집니다.(오답 중, 참조성, 무결성 등..))1. 슈퍼키는 ( 1 ) 의 속성을 갖는다.\n2. 후보키는 ( 1 ) 와/과 ( 2 ) 의 속성을 갖는다.",
      "answer": "1. 유일성 2. 최소성",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-1-18",
      "number": 18,
      "question": "18. 다음 설명과 관련된 답을 보기에 찾아서 작서하시오. (실제 기출문제에서는 답의 보기가 주어집니다.(오답 중, Pharming, Ransomware등..))이 공격은 APT 공격에서 주로 쓰이는 공격으로, 공격 대상이 방문할 가능성이 있는 합법적인 웹 사이트를 미리 감염시킨 뒤, 잠복하고 있다가 공격 대상이 방문하면 대상의 컴퓨터에 악성코드를 설치하는 방식",
      "answer": "watering hole",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-1-19",
      "number": 19,
      "question": "19. 다음 소스코드가 실행할 때의 출력값을 작성하시오.",
      "answer": "29",
      "explanation": null,
      "code": "#include <stdio.h> \nint isPrime(int number) { \n  int i; \n  for (i=2; i<number; i++) { \n    if (number % i == 0) return 0; \n  } \n  return 1; \n} \n \nint main(void) { \n  int number = 13195, max_div=0, i; \n  for (i=2; i<number; i++) \n  if (isPrime(i) == 1 && number % i == 0) max_div = i; \n  printf(\"%d\", max_div); \n  return 0; \n}",
      "type": "코드완성"
    },
    {
      "id": "2022-1-20",
      "number": 20,
      "question": "20. 다음은 V모델에서의 테스트 단계에 대한 설명으로 괄호안에 들어갈 답을 작성하시오.",
      "answer": "1. 단위 테스트 2. 통합 테스트 3. 시스템 테스트 4. 인수 테스트",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2022-2": [
    {
      "id": "2022-2-01",
      "number": 1,
      "question": "1. 다음은 관계 데이터 모델에 대한 설명이다. 괄호안에 들어가는 용어를 작성하시오.\n( )은 /는 관계 데이터의 연산을 표현하는 방법으로, 원하는 정보를 정의할 때는 계산 수식을 사용한다.수학의 predicate calculus에 기반을 두고 있으며, 관계 데이터 모델의 제안자인 codd가 수학에 가까운 기반을 두고 특별히 관계 데이터베이스를 위해 제안하여 탄생하였다.\n( ) /은/는 원하는 정보가 무엇이라는 것만 정의하는 비절차적 특성을 지니며, 튜블 ( )와/과 도메인 ( ) 이/가 있다.",
      "answer": "관계해석",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-02",
      "number": 2,
      "question": "2. 다음은 대칭 키 알고리즘에 대한 설명이다. 해당 설명에 맞는 용어를 보기에 골라 작성하시오.\n1. Xuejia Lai와 James Messey 가 만든 알고리즘으로 PES(Proposed Encryption Standard)에서 IPES(Improved PES)로 변경되었다가, 1991년에 제작된 블록 암호 알고리즘으로 현재 국제 데이터 암호화 알고리즘으로 사용되고 있다. 64비트 블록을 128비트의 key를 이용하여 8개의 라운드로 구성되어 있다.\n2. 미국의 NSA에서 개발한 Clipper 칩에 내장되는 블록 알고리즘이다. 전화기와 같은 음성을 암호화 하는데 주로 사용되며 64비트 입출력에 80비트의 키 총 32라운드를 가진다.",
      "answer": "1.IDEA 2.SKIPJACK",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-03",
      "number": 3,
      "question": "3. H회사의 전체 제품 단가 보다 큰 제품 출력을 하고자 한다. 괄호안에 들어갈 알맞는 용어를 작성하시오.\n[제품테이블]\nSELECT 제조사, 제품명, 단가FROM 제품WHERE 단가 > ( ) (SELECT 단가 FROM 제품 WHERE 제조사='H')",
      "answer": "ALL",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-04",
      "number": 4,
      "question": "4. 다음 SQL 결과에 알맞는 답을 작성하시오.\n[TABLE]\nSELECT count(col2)FROM TABLEWHERE col1 in(2,3) or col2 in(3,5);",
      "answer": "4",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-05",
      "number": 5,
      "question": "5. 다음은 네트워크에 관련한 내용이다. 괄호안에 들어갈 알맞는 답을 작성하시오.\n( )은/는 인터넷을 통해 디바이스 간에 사설 네트워크 연결을 생성하며, 퍼블릭 네트워크를 통해 데이터를 안전하게 익명으로 전송하는 데 사용된다.\n또한 사용자 IP 주소를 마스킹하고 데이터를 암호화하여 수신 권한이 없는 사람이 읽을 수 없도록 한다.",
      "answer": "VPN",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-06",
      "number": 6,
      "question": "6. 다음은 SOLID 원칙에 관한 내용이다. 괄호안에 알맞는 단어를 보기에서 고르시오.(실제 기출문제에서는 답의 보기가 주어집니다.(오답 중, SRP, LSP 등..))\n( ) 은/는 클라이언트가 자신이 이용하지 않는 메서드에 의존하지 않아야 한다는 원칙이다.\n( ) 은/는 큰 덩어리의 인터페이스들을 구체적이고 작은 단위들로 분리시킴으로써 클라이언트들이 꼭 필요한 메서드들만 이용할 수 있게 한다.\n예를 들어 하나의 복합기에 프린터와 복사기, 팩스 메서드가 있는데 이 세가지 메서드는 같은 파일에 존재하므로 프린터 로직만 바뀌어도 복사기와 팩스도 재컴파일을 해야한다.\n그러므로 ( ) 을/를 적용하여 로직이 바뀌어도 다른 메서드는 영향을 받지 않도록 해야한다.",
      "answer": "ISP (Interface segregation principle)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-07",
      "number": 7,
      "question": "7. 다음 자바 코드에 알맞는 출력값을 작성하시오.",
      "answer": "-8",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-08",
      "number": 8,
      "question": "8. 다음 소스코드에 대한 출력값을 작성하시오.",
      "answer": "2",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-09",
      "number": 9,
      "question": "9. IP 주소가 139.127.19.132이고 서브넷마스크 255.255.255.192일 때 아래의 답을 작성하시오.(10진수로 표기)\n(1) 괄호안에 들어갈 네트워크 주소 : 139.127.19.( )\n(2) 해당 네트워크 주소와 브로드캐스트 주소를 제외한 호스트 개수",
      "answer": "128 , 62",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-10",
      "number": 10,
      "question": "10. 다음 설명에 대한 괄호안에 알맞는 단어를 작성하시오.\n1. ( ) 테스트는 하드웨어나 소프트웨어의 개발 단계에서 상용화하기 전에 실시하는 제품 검사 작업. 제품의 결함 여부, 제품으로서의 가치 등을 평가하기 위해 실시한다. 선발된 잠재 고객으로 하여금 일정 기간 무료로 사용하게 한 후에 나타난 여러 가지 오류를 수정, 보완한다. 공식적인 제품으로 발매하기 이전에 최종적으로 실시하는 검사 작업이다.\n2. ( ) 테스트는 새로운 제품 개발 과정에서 이루어지는 첫 번째 테스트. 즉, 시제품이 운영되는 동안의 신제품 연구와 개발 과정 단계에서 초기 작동의 결과를 평가하는 수단이며 개발 회사 내부에서 이루어지는 테스트로서 단위 테스트, 구성 테스트, 시스템 테스트 등을 포함한다.",
      "answer": "베타, 알파",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-11",
      "number": 11,
      "question": "11. 다음 설명에 알맞는 테스트 용어를 보기에서 골라 작성하시오.(실제 기출문제에서는 답의 보기가 주어집니다.(오답 중, Iterating등..))\n오류를 제거하거나 수정한 시스템이나 시스템 컴포넌트 또는 프로그램이 오류 제거와 수정에 의해 새로이 유입된 오류가 없는지를 확인하는 일종의 반복 시험이다.\n반복적인 시험이 필요한 이유는 오류가 제거&middot;수정되는 상당수의 시스템이 의도치 않았던 오동작이나 새로운 형태의 오류를 일으키기 때문이다.\n결국, 수정&middot;변경된 시스템이나 시스템 컴포넌트 또는 프로그램이 명세된 요구 사항을 충족시키는지를 확인하는 시험의 한 형태이다.",
      "answer": "Regression",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-12",
      "number": 12,
      "question": "12. 다음 테이블에서 &pi;TTL(employee)에 대한 연산 결과 값을 작성하시오.\n[employee테이블]",
      "answer": "1. TTL 2. 부장 3. 대리 4. 과장 5. 차장",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-13",
      "number": 13,
      "question": "13. 다음은 파이썬 코드이다. 알맞는 출력값을 작성하시오.",
      "answer": "REMEMBER AND STR",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-14",
      "number": 14,
      "question": "14. 다음 설명에 대해 보기에 주어진 답을 골라 작성하시오.(실제 기출문제에서는 답의 보기가 주어집니다.(오답 중, ARP, RARP 등..))\n1. 라우터로 상호 접속이 되어있는 여러 개의 네트워크 집합으로 도메인 혹은 자율시스템(Autonomous System, AS)이라고 한다.\n같은 도메인 내에 존재하는 라우터는 도메인 내부 라우터가 되고 도메인 외부에 존재하는 라우터는 도메인 외부 라우터가 되는데, 여기서 도메인 내부 경로 설정을 가르킨다.\n2. 시스템 사이에 경로 설정 정보 등을 교환하기 위해 사용하는 프로토콜로써,다른 도메인 사이에 라우팅 시 정리된 관리가 거의 없고 많은 경우에 신용도가 매우 낮아 빠른 수행보다는 보안과 제어가 본래의 목적이다.\n3. IP 라우팅 프로토콜의 한 종류로써 RIP(routing information protocol)보다 규모가 큰 네트워크에서도 사용할 수 있다.규모가 크고 복잡한 TCP/IP 네트워크에서 RIP의 단점을 개선한 라우팅 프로토콜로써 RIP에 비해 자세한 제어가 가능하고, 관리 정보의 트래픽도 줄일 수 있다.\n4. 서로 다른 자율 시스템(AS)의 라우터 간에 라우팅 정보를 교환하는 데 사용되는 외부 게이트웨이 프로토콜(EGP)이다.각 목적지에 대한 전체 경로가 포함되며, 다른 시스템과 교환하는 네트워크 도달 가능성 정보의 데이터베이스를 유지한다.네트워크 도달 가능성 정보를 사용하여 AS 연결 그래프를 구성하며, 이를 통해 라우팅 루프를 제거하고 AS 수준에서 정책 결정을 실행할 수 있다.",
      "answer": "1. IGP 2. EGP 3. OSPF 4. BGP",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-15",
      "number": 15,
      "question": "15. 다음 C언어에서 출력에 대한 알맞은 답을 작성하시오.",
      "answer": "10",
      "explanation": null,
      "code": "#include <stdio.h>\n \nint len(char*p);\n \nint main(){\n \n  char* p1 = \"2022\";\n  char* p2 = \"202207\";  \n  \n  int a = len(p1);\n  int b = len(p2);\n  \n  printf(\"%d\", a + b);\n \n}\n \nint len(char* p){\n  int r = 0;\n  while(*p != '\\0'){\n    p++;\n    r++;\n }\n return r;\n}",
      "type": "코드완성"
    },
    {
      "id": "2022-2-16",
      "number": 16,
      "question": "16. 다음 C언어 코드에서 알맞는 출력값을 작성하시오.",
      "answer": "22",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-17",
      "number": 17,
      "question": "17. 다음 자바코드에서 알맞는 출력값을 작성하시오.",
      "answer": "61",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-18",
      "number": 18,
      "question": "18. 다음은 함수 종속성에 대한 설명이다. 해당 문제에 대한 알맞는 답을 보기에서 골라 작성하시오.(실제 기출문제에서는 답의 보기가 주어집니다.(오답 중, union 등..))\n1. 성적은 {학생,학과}에 대해서 ( ) Functional Dependency이다.\n2. 성적은 학과만 알아도 식별이 가능하므로, 이 경우에는 성적 속성은 기본키에 ( ) Functional Dependency이다.\n3. 릴레이션에서 X, Y, Z라는 3 개의 속성이 있을 때 X&rarr;Y, Y&rarr;Z 이란 종속 관계가 있을 경우, X&rarr;Z가 성립될 경우",
      "answer": "1. Full 2. Partial 3. Transitive",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-19",
      "number": 19,
      "question": "19. 다음 설명에 대한 알맞는 답을 보기에서 고르시오.(실제 기출문제에서는 답의 보기가 주어집니다.(오답 중, ajax, 등..))\n1. 인터넷에서, 웹 서버와 사용자의 인터넷 브라우저 사이에 문서를 전송하기 위해 사용되는 통신 규약을 말한다.인터넷에서 하이퍼텍스트(hypertext) 문서를 교환하기 위하여 사용되는 통신규약이다.이 규약에 맞춰 개발해서 서로 정보를 교환할 수 있게 되었다.\n2. 문자, 그래픽, 음성 및 영상을 하나의 연상 거미집(Web of Association)과 같이 서로 연결시켜, 제시된 순서에 관계없이 이용자가 관련된 정보를 검색할 수 있도록 하는 정보 제공 방법이다.즉, 한 페이지에서 링크된 순서에 상관없이 사용자들이 원하는 정보를 클릭함으로써 원하는 정보에 쉽게 접근하는 방식을 말한다.\n3. 웹 페이지 표시를 위해 개발된 지배적인 마크업 언어다.또한, 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다.",
      "answer": "ㅇ. HTTP ㄹ. Hypertext ㅂ. HTML",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-2-20",
      "number": 20,
      "question": "20. 다음 모듈 F에 대한 Fan-in과 Fan-out을 작성하시오.",
      "answer": "Fan-in : 3 Fan-out : 2",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2022-3": [
    {
      "id": "2022-3-01",
      "number": 1,
      "question": "1. 아래는 C언어의 2차원 배열 형태이다. field의 경우 2차원 배열 형태는 예시처럼 출력되므로, 이를 참고하여 mines의 2차원 배열 형태를 작성하시오.",
      "answer": "1, 1, 3, 2 3, 4, 5, 3 3, 5, 6, 4 3, 5, 5, 3",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-02",
      "number": 2,
      "question": "2. 아래 예시를 보고 관계 대수에 대한 기호를 작성하시오.",
      "answer": "U, -, X, &pi;, ⋈",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-03",
      "number": 3,
      "question": "3. 다음은 디자인 패턴에 대한 설명이다. 괄호안에 알맞는 답을 작성하시오.\n(기호식 보기가 있습니다. ex: Abstract Factory, Mediator 등)\n(   1   )은/는 기능을 처리하는 클래스와 구현을 담당하는 추상 클래스로 구별한다.\n구현뿐 아니라 추상화도 독립적 변경이 필요할 때 브리지 패턴을 사용한다.기존 시스템에 부수적인 새로운 기능들을 지속적으로 추가할 때 사용하면 유용하며,새로운 인터페이스를 정의하여 기존 프로그램의 변경 없이 기능을 확장할 수 있다.\n(   2   )은/는 한 객체의 상태가 변화하면 객체에 상속되어 있는 다른 객체들에게 변화된 상태를 전달해주는 패턴이다.일대다 관계를 가지며, ​주로 분산된 시스템 간에 이벤트를 생성&middot;발행(Publish)하고, 이를 수신(Subscribe)해야 할 때 이용한다.",
      "answer": "1. Bridge 2. Observer",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-04",
      "number": 4,
      "question": "4. 아래 코드에 대한 출력 값을 작성하시오.",
      "answer": "24513",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-05",
      "number": 5,
      "question": "5. 아래 코드에 대한 출력 값을 작성하시오.\n첫번째 네트워크 주소가 192.168.1.0/24일때 FLSM 3개로 분할했을때 두번째 네트워크 브로드캐스드 IP를 10진수로 변환한 값을 작성하시오.",
      "answer": "192.168.1.127",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-06",
      "number": 6,
      "question": "6. 아래 표를 확인하여 보기에 알맞는 값을 고르시오.\n(기호식 보기가 있습니다. ex: Boundary Value Partitioning​, Equivalence Partitioning 등)",
      "answer": "Boundary Value Analysis",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-07",
      "number": 7,
      "question": "7. 아래 데이터 명령어를 적용할 경우 알맞는 출력값을 작성하시오.​\n​\n​",
      "answer": "(1). 3 (2). 4",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-08",
      "number": 8,
      "question": "8. 아래 설명에 대한 알맞는 답을 작성하시오.\n(     1     ) 은/는 보안학적 측면에서 기술적인 방법이 아닌 사람들간의 기본적인 신뢰를 기반으로 사람을 속여 비밀 정보를 획득하는 기법이다.\n(     2     ) 은/는  빅데이터(Big Data)와 비슷하면서도 구조화돼 있지 않고, 더는 사용하지 않는 &lsquo;죽은&rsquo; 데이터를 의미한다. 일반적으로 정보를 수집해 저장한 이후 분석이나 특별한 목적을 위해 활용하는 데이터가 아니며,  저장공간만 차지하고 이러한 이유로 심각한 보안 위험을 초래할 수 있다.",
      "answer": "1. 사회공학 2. 다크 데이터",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-09",
      "number": 9,
      "question": "9. 다음 파이썬 코드에 대한 출력값을 작성하시오.",
      "answer": "[101,102,103,104,105]",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-10",
      "number": 10,
      "question": "10. 다음 보안 관련 설명으로 가장 알맞는 용어를  작성하시오.\n(          )  은/는 머신러닝 기술을 이용하여 IT 시스템에서 발생하는 대량의 로그를 통합관리 및 분석하여 사전에 위협에 대응하는 보안 솔루션이다.\n서로 다른 기종의 보안솔루션 로그 및 이벤트를 중앙에서 통합 수집하여 분석할 수 있으며, 네트워크 상태의 monitoring 및 이상징후를 미리 감지할 수 있다.",
      "answer": "SIEM",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-11",
      "number": 11,
      "question": "11. 다음 보기 중, 형상 관리 항목을 3가지 고르시오.",
      "answer": "CVS, SVN, GIT",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-12",
      "number": 12,
      "question": "12. STUDENT 테이블에서 컴퓨터과 학생 50명, 전기과 학생 100명, 인터넷과 학생 50명의 정보가 저장되어 있을 때, 다음 SQL문의 실행 결과에 따른 튜플의 수는? (단, DEPT 칼럼은 학과명이다.)\n1) SELECT DERP FROM STUDENT;\n2) SELECT DISTINCT DEPT FROM STUDENT;\n3) SELECT COUNT(DISTINCT DEPT) FROM STUDENT WHERE DEPT = '인터넷과';",
      "answer": "1) 200 2) 3 3) 1",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-13",
      "number": 13,
      "question": "13. 다음 코드에 대한 출력 값을 작성하시오.",
      "answer": "2",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-14",
      "number": 14,
      "question": "14. 아래 설명에 대하여 알맞는 답을 보기에서 고르시오.\n(기호식 보기가 있습니다. ex: CSRF 등)\n(   1   )은/는 프로세서(processor) 안에 독립적인 보안 구역을 따로 두어 중요한 정보를 보호하는 ARM사에서 개발한 하드웨어 기반의 보안 기술로 프로세서(processor) 안에 독립적인 보안 구역을 별도로 하여, 중요한 정보를 보호하는 하드웨어 기반의 보안 기술이다.\n(   2   )은/는 사용자들이 사이트에 접속할 때 주소를 잘못 입력하거나 철자를 빠뜨리는 실수를 이용하기 위해 유사한 유명 도메인을 미리 등록하는 일로 URL 하이재킹(hijacking)이라고도 한다.",
      "answer": "1. Trustzone 2. typosquatting",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-15",
      "number": 15,
      "question": "15. 아래 설명에 대하여 알맞는 용어를 작성하시오.\n(       )은/는 여러 개의 사이트에서 한번의 로그인으로 여러가지 다른 사이트들을 자동적으로 접속하여 이용하는 방법을 말한다. 일반적으로 서로 다른 시스템 및 사이트에서 각각의 사용자 정보를 관리하게 되는데 이때 하나의 사용자 정보를 기반으로 여러 시스템을 하나의 통합 인증을 사용하게 하는 것을 말한다.\n즉 하나의 시스템에서 인증을 할 경우 타 시스템에서는 인증 정보가 있는지 확인하고 있으면 로그인 처리를 하도록 하고, 없는 경우 다시 통합 인증을 할 수 있도록 만드는 것을 의미한다.",
      "answer": "SSO",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-16",
      "number": 16,
      "question": "16. 다음은 스케줄링에 관한 내용이다. 괄호안에 알맞는 답을 작성하시오.",
      "answer": "SJF, RR, SRT",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-17",
      "number": 17,
      "question": "17. 다음은 UML에 관한 설명이다. 괄호안에 알맞는 답을 작성하시오.\nUML은 통합 모델링 언어로써, 시스템을 모델로 표현해주는 대표적인 모델링 언어이다.\n구성 요소로는 사물, (    1    ), 다이어그램으로 이루어져 있으며, 구조 다이어그램 중, (     2    ) 다이어그램은 시스템에서 사용되는 객체 타입을 정의하고, 그들 간의 존재하는 정적인 관계를 다양한 방식으로 표현한 다이어그램이다.\n또한 UML 모델링에서 (     3    )은/는 클래스와 같은 기타 모델 요소 또는 컴포넌트가 구현해야 하는 오퍼레이션 세트를 정의하는 모델 요소이다.",
      "answer": "1. 관계 2. 클래스 3. 인터페이스",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-18",
      "number": 18,
      "question": "18. 다음은 E-R다이어그램에 관한 설명이다. 괄호 안에 알맞는 답을 작성하시오.\n(아래 그래프 기호는 정확히 기억이 나지 않아 임의로 작성한 것이니 참고만 해주세요.)\n(    1    )  :  개체집합 - 관계집합 연결\n(    2    )  :  개체 집합과의 연결\n(    3    )  :  관계집합 - 관계집합의 속성 연결\n(    4    )  :  두 개체집합 관계에서 생성되는 값을 저장하는 속성\n(    5    )  :  같은 속성을 공유하는 개체들의 모임",
      "answer": "1. 실선 (ㄷ) 2. 관계집합 (ㅂ) 3. 점선 (ㄹ) 4. 관계집합의 속성 (ㄴ) 5. 개체집합 (ㄱ)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-19",
      "number": 19,
      "question": "19. 다음 자바 코드에 대한 출력 값을 작성하시오.",
      "answer": "0123",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2022-3-20",
      "number": 20,
      "question": "20. 다음 자바 코드에 대한 출력 값을 작성하시오.",
      "answer": "993",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2021-1": [
    {
      "id": "2021-1-01",
      "number": 1,
      "question": "1. 물리 네트워크(MAC) 주소에 해당하는 IP 주소를 알려주는 프로토콜로 역순 주소 결정 프로토콜을 무엇이라고 하는지 쓰시오.",
      "answer": "RARP (Reverse Address Resolution Protocol) OSI 7계층은 국제표준화기구(International Standard Organization, ISO)에서 발표한 네트워크 표준 모델로써 네트워크 통신의 각 과정을 계층별로 개념화한 모델이기에 각 계층의 구간별로 데이터의 움직임을 알수 있고, 장치간의 데이터 통신을 설명하는데 유용하게 활용됩니다. [1계층] 물리 계층 : 전선, 전파, 광섬유, 동축케이블, 도피관, PSTN, DSU, CSU, Modem [2계층] 데이터 링크 계층 : Ethernet, ToKen Ring, PPP, HDLC, ISDN, ATM [3계층] 네트워크 계층 : IP, ARP, RARP, ICMP, IGMP, 라우팅 프로토콜 [4계층] 전송 계층 : TCP, UDP, RTP, SCTP, SPX [5계층] 세션 계층 : TLS, SSH, ISO 8327 / CCITTX225, RPC, NetBIOS [6계층] 표현 계층 : JPEG, MPEG, XDR, ASN1, SMB, AFP [7계층] 응용 계층 : HTTP, SMTP, SNMP, FTP, Telnet, SSH&SCP, NFS, RTSP",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-02",
      "number": 2,
      "question": "2. 다음은 DB 설계 절차에 관한 설명이다. 다음 빈칸에 들어갈 알맞은 용어를 쓰시오.\n- (   1.   )은/는 특정 DBMS의 특성 및 성능을 고려하여 데이터베이스 저장 구조로 변환하는 과정으로 결과로 나오는 명세서는 테이블 정의서 등이 있다.\n- (   2.   )은/는 현실 세계에 대한 인식을 추상적, 개념적으로 표현하여 개념적 구조를 도출하는 과정으로 주요 산출물에는 E-R 다이어그램이 있다.\n- (    3.   )은/는 목표 DBMS에 맞는 스키마 설계, 트랜잭션 인터페이스를 설계하는 정규화 과정을 수행한다.\n[보기] : 구현 / 개념적 설계 / 논리적 설계 / 요구사항 분석 / 물리적 설계",
      "answer": "1. 물리적 설계 2. 개념적 설계 3. 논리적 설계 DB설계 절차 : 요구사항 분석 > 개념적 설계 > 논리적 설계 > 물리적 설계 > 구현",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-03",
      "number": 3,
      "question": "3. 다음은 요구사항의 분류에 대한 설명이다. 괄호 (   ) 안에 들어갈 요구사항의 유형에 대해서 쓰시오.\n- (   1.   ) 요구사항은 시스템이 제공하는 기능, 서비스에 대한 요구사항이다.\n- (   2.   ) 요구사항은 시스템이 수행하는 기능 이외의 사항, 시스템 구축에 대한 제약사항에 관한 요구사항이다.",
      "answer": "1. 기능적 2. 비기능적 요구사항이란 시스템 개발 분야에서 어떤 과제를 수행하기 위해, 필요한 조건이나 능력을 말합니다. - 기능적 요구사항 : 사용자 요구사항, 시스템 요구사항 - 비 기능적 요구사항 : 제품 요구사항, 조직 요구사항, 외부 요구사항",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-04",
      "number": 4,
      "question": "4. 웹 서비스명, 제공 위치, 메세지 포맷, 프로토콜 정보 등 웹 서비스에 대한 상세 정보가 기술된 XML 형식으로 구성된 언어를 무엇이라고 하는지 쓰시오.",
      "answer": "WSDL WSDL (Web Services Description Language의 약자)은 웹 서비스 기술언어 또는 기술된 정의 파일의 총칭으로 XML로 기술됩니다. 웹 서비스의 구체적 내용이 기술되어 있으며 서비스 제공 장소, 서비스 메시지 포맷, 프로토콜 등이 기술됩니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-05",
      "number": 5,
      "question": "5. 다음은 파이썬 코드이다. 출력 결과를 쓰시오.\nclass good :\n\tli = [\"seoul\", \"kyeonggi\",\"inchon\",\"daejeon\",\"daegu\",\"pusan\"]\n\ng = good()\nstr01 = ''\nfor i in g.li:\n\tstr01 = str01 + i[0]\n    \nprint(str01)",
      "answer": "s kiddp 각 단어들의 0번째(첫번째 글자) row 출력",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-06",
      "number": 6,
      "question": "6. 다음 SQL 실행 결과를 숫자만 쓰시오.\nSELECT COUNT(*) FROM 급여\nWHERE EMPNO > 100 AND SAL >= 3000 OR EMPNO = 200;",
      "answer": "답 : 1",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-07",
      "number": 7,
      "question": "7. 다음 Java 프로그램 결과를 쓰시오.\npublic class good{\n\tpublic static void main(String[] args){\n    \tint[][]arr = new int[][]{{45,50,75},{89}};\n        System.out.println(arr[0].length);\n        System.out.println(arr[1].length);\n        System.out.println(arr[0][0]);\n        System.out.println(arr[0][1]);\n        System.out.println(arr[1][0]);",
      "answer": "3 1 45 50 89",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-08",
      "number": 8,
      "question": "8. 정규화된 엔티티, 속성, 관계에 대해 성능 향상과 개발 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링의 기법을 무엇이라고 하는지 쓰시오.",
      "answer": "비정규화 or 반정규화 or 역정규화 반정규화 방법 : 테이블 통합, 테이블 분할, 중복 테이블 추가, 중복 속성 추가",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-09",
      "number": 9,
      "question": "9. 다음은 블랙박스 기법에 대한 예제이다. 블랙박스 기법 두 가지를 쓰시오.\n예)\n1. 0 <= x <= 10이면 -1 0 10 11 검사\n2. 입력 데이터의 영역을 유사한 도메인별로 유횻값 / 무횻값을 그룹핑하여 나누어서 검사",
      "answer": "1. 경곗값 분석 2. 동등분할 테스트 블랙박스 테스트 종류 동치 분할 검사(동등분할기법) : 입력 자료에 초점을 맞춰 테스트 케이스를 만들고 검사하는 방법 경계값 분석 : 동치 분할 기법을 보완한 기법으로 입력 조건의 중간값보다 경계값에서 오류가 발생될 확률이 높다는 점을 이용하여 입력 조건의 경계값을 테스트 케이스로 선정하여 검사하는 기법 원인-효과 그래프 검사 : 입력 데이터 간의 관계와 출력에 영향을 미치는 상황을 체계적으로 분석한 다음, 효용성이 높은 테스트 케이스를 선정하여 검사하는 기법 오류 예측 검사 : 과거의 경험이나 확인자의 감각으로 테스트하는 기법 비교 검사 : 여러 버전의 프로그램에 동일한 테스트 자료를 제공하여 동일한 결과가 출력되는지 확인하는 기법",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-10",
      "number": 10,
      "question": "10. 다음은 테스트 종류에 대한 설명이다. 빈칸에 들어갈 알맞은 용어를 보기에서 찾아 기호로 쓰시오.\n- (   1.   ) 은/는 개별 모듈, 서브루틴이 정상적으로 실행되는지 확인\n- (   2.   ) 은/는 인터페이스 간 시스템이 정상적으로 실행되는지 확인\n[보기] : 시스템 테스트 / 인수 테스트 / 알파 테스트 / 단위 테스트 / 통합 테스트 / 회귀 테스트",
      "answer": "1. 단위 테스트 2. 통합 테스트 시스템 테스트 : 구현된 시스템이 정해진 요건에 적합한지 여부를 평가하기 위해 실제 운용과 같은 환경에서 시스템 전체에 대해서 행하는 테스트 인수 테스트 : 계약상의 요구 사항이 만족되었는지 확인하기 위해, 설치 후 구입자의 현장에서 납품자도 참가하여 구입자에 의해 실시되는 시스템 또는 기능 단위 테스트 알파 테스트 : 특정 사용자들에 의해 개발자 관점에서 수행 (가장 자주 사용) 회귀 테스트 : 어플리케이션에 대하여 변경, 결함 수정 또는 기능개선 등과 같은 원인으로 프로그램 코드에 대하여 물리적인 변경이 발생했을 경우, 새로운 결함에 대비하여 이미 실시했던 테스트케이스를 재시험하는 테스트",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-11",
      "number": 11,
      "question": "11. 다음은 빈칸에 들어갈 알맞은 용어를 쓰시오.\n- IPv6는 (   1.   )  비트 길이를 가진다.\n- IPv4는 길이 32bit이며, (   2.  ) 비트씩 네 부분으로 나눈다.",
      "answer": "1. 128 2. 8",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-12",
      "number": 12,
      "question": "12. 공유메모리, 소켓, 세마포어, 메세지 큐 등 프로세스 간 통신하는 기술을 무엇이라고 하는지 쓰시오.",
      "answer": "IPC (Inter Process Communication)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-13",
      "number": 13,
      "question": "13. 시스템 통합에 사용되는 솔루션으로 구축 유형에는 Point to Point, Hub & Spoke, Message Bus가 있다. 기업에서 운영되는 서로 다른 플랫폼 및 애플리케이션 간의 정보를 전달, 연계 , 통합이 가능하도록 해주는 솔루션을 무엇이라고 하는지 쓰시오.",
      "answer": "EAI (Enterprise Application integration) EAI 구축 유형 : 포인트 투 포인트 - 가장 기초적인 애플리케이션 통합 방법 ( 1:1 단순 통합 방법) / 개발자간 대화를 통해 통합 가능 허브 앤 스포크 - 단일한 접점의 허브 시스템을 통하여 데이터를 전송하는 중앙 집중적 방식 메세지 버스 - 애플리케이션 사이 미들웨어를 두어 연계하는 통합 방식 / 뛰어난 확장성과 대용량 데이터 처리 가능 하이브리드 - 그룹 내는 허브 앤 스포크 방식 / 그룹 간에는 메세지 버스 방식 사용하는 통합 방식",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-14",
      "number": 14,
      "question": "14. 주어진 테이블의 Cardinality / Degree를 구하시오.",
      "answer": "Cardinality : 5 Degree : 4 Cardinality : 데이터의 행의 수 Degree : 속성의 수",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-15",
      "number": 15,
      "question": "15. 다음은 C언어 프로그램이다. 실행 결과를 쓰시오.\n#include <stdio.h>\n\nstruct good {\n\tchar name[10];\n    int age;\n };\n \n void main(){\n \tstruct good s[] = {\"Kim\",28,\"Lee\",38,\"Seo\",50,\"Park\",35};\n    \n    struct good *p;\n    p = s;\n    p++;\n    printf(\"%s\\n\", p-> name);\n    printf(\"%d\\n\", p-> age);",
      "answer": "Lee 38 p++로 인해 s[1]가 되면서 두번째 배열인 Lee와 38이 출력이 된다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-16",
      "number": 16,
      "question": "16. 데이터 모델 구성요소 3가지를 쓰시오.\n- 데이터베이스에 저장된 실제 데이터를 처리하는 작업에 대한 명세로서 데이터베이스를 조작하는 기본 도구이다.\n- 개체 데이터 모델에서는 (  1.  ) 을/를 이용하여 실제 데이터를 처리하는 작업에 대한 명세를 나타내는데 논리 데이터 모델에서는 (  2.  ) 을/를 어떻게 나타낼 것인지 표현한다.\n- (  3.  ) 은/는 데이터 무결성 유지를 위한 db의 보편적 방법으로 릴레이션의 특정 칼럼에 설정하는 제약을 의미하며, 개체무결성과 참조 무결성 등이 있다.",
      "answer": "1.연산 2. 구조 3. 제약조건",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-17",
      "number": 17,
      "question": "17. 다음은 Java 프로그램이다. 실행 결과를 쓰시오.\npublic class good {\n\tpublic static void main(String[] args){\n    int i, j;\n    for(j=0, i=0; i<=5; i++){\n    j+=i;\n    System.out.print(i);\n    if(i==5){\n    System.out.print(\"=\");\n    System.out.print(j);\n   }else{\n   \tSystem.out.print(\"+\");\n\t}\n   }\n  }\n }",
      "answer": "0 + 1 + 2 + 3 + 4 + 5 = 15",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-18",
      "number": 18,
      "question": "18. 시스템 객체의 접근을 개인 또는 그룹의 식별자에 기반을 둔 방법, 어떤 종류의 접근 권한을 가진 사용자가 다른 사용자에 자신의 판단에 따라 권한을 허용하는 접근제어 방식은 ?",
      "answer": "임의적 접근 통제 or DAC (Discretionary Access Control) 접근 통제는 사람이나 프로세스가 시스템이나 파일에 접근 여부를 허가하거나 거부하는 기능을 말합니다. 서버 접근통제 유형 - 임의적 접근통제 / 강제적 접근통제 / 역할 기반 접근통제 임의적 접근 통제(DAC - Discretionary Access Control) : 시스템 객체에 대한 접근을 사용자나 그룹의 신분을 기준으로 제한하는 방법 강제적 접근 통제(MAC - Mandatory Access Control) : 미리 정해진 정책과 보안 등급에 의거하여 주체에게 허용된 접근 권한과 객체에게 부여된 허용 등급을 비교하여 접근을 통제하는 모델 역할기반 접근 통제(RBAC - Role Based Access Control) : DAC와 MAC의 단점을 보완한 방식으로 멀티 프로그래밍 환경에서의 보완 처리를 위해 제안되었으며 사용자에게 할당된 역할에 기반하여 접근을 통제하며 중앙에서 집중적으로 관리",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-19",
      "number": 19,
      "question": "19. 다음은 결합도에 대한 설명이다. 빈칸에 들어갈 알맞은 용어를 보기에서 찾아 기호로 쓰시오.\n- (  1.  ) 은/는 다른 모듈 내부에 있는 변수나 기능을 다른 모듈에서 사용하는 경우의 결합도\n- (  2.  ) 은/는 모듈 간의 인터페이스로 배열이나 객체, 구조 등이 전달되는 경우의 결합도\n- (  3.  ) 은/는 파라미터가 아닌 모듈 밖에 선언된 전역 변수를 참조하고 전역 변수를 갱신하는 식으로 상호작용하는 경우의 결합도\n[보기] : 자료 결합도 / 스탬프 결합도 / 제어 결합도 / 공통 결합도 / 내용 결합도 / 외부 결합도",
      "answer": "1. 내용 결합도 2. 스탬프 결합도 3. 공통 결합도 결합도와 품질(낮은 품질에서 좋은 품질 순) : 내용결합도 > 공통 결합도 > 외부 결합도 > 제어 결합도 > 스탬프 결합도 > 자료 결합도 외부 결합도 : 어떤 모듈에서 반환한 값을 다른 모듈에서 참조해서 사용하는 경우 제어 결합도 : 단순히 처리를 해야할 대상인 값만 전달되는게 아니라 어떻게 처리를 해야 한다는 제어요소가 전달 자료 결합도 : 모듈간의 인터페이스 전달되는 파라미터를 통해서만 모듈간의 상호 작용이 일어나는 경우",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-1-20",
      "number": 20,
      "question": "20. 괄호 안에 공통으로 들어갈 공격 기법을 적으시오.\n- (      ) 은/는 '세션을 가로채다' 라는 의미로 정상적 연결을 RST 패킷을 통해 종료시킨 후 재연결 시 희생자가 아닌 공격자에게 연결한다.\n- (      ) 은/는 세션 관리 취약점을 이용한 공격 기법이다.",
      "answer": "세션 하이재킹",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2021-2": [
    {
      "id": "2021-2-01",
      "number": 1,
      "question": "1. 네트워크 장치를 필요로하지 않고 네트워크 토폴로지가 동적으로 변화되는 특징이 있으며 응용 분야로는 긴급 구조, 긴급 회의, 전쟁터에서의 군사 네트워크에 활용되는 네트워크는?",
      "answer": "애드혹 네트워크(Ad-hoc Network) 무선 네트워크 구성 방식 : 애드혹 네트워크 - 센서망, 재난망에 사용되며 구성이 빠르고 모든 단말이 동등한 자격으로 망을 구성 Infrastructure 네트워크 - 이동통신망,Wi-Fi에 사용되며 중앙집중형 방식 메쉬 네트워크 - 무선백본망에 사용되며 신뢰성이 우수하고, 계층적인 구조를 가지고 있음",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-02",
      "number": 2,
      "question": "2. 다음 (1), (2)에 알맞는 답안을 쓰시오.\n(1) 사람의 감정이나 경험을 나타내는 개념\n(2) 사용자 인터페이스. 예로는 CLI이 있다.",
      "answer": "(1) UX(User Experience) / (2) UI(User Interface)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-03",
      "number": 3,
      "question": "3.  트랜잭션의 특징 중, 원자성에 대해 약술하십시오.",
      "answer": "모두 반영되거나 아니면 전혀 반영되지 않아야 한다. 트랜젝션 특징 - 원자성, 일관성 , 독립성, 지속성 일관성 : 트랜잭션의 작업 처리 결과가 항상 일관성이 있어야 한다는 것 독립성 : 둘 이상의 트랜잭션이 동시에 실행되고 있을 경우, 어떤 하나의 트랜잭션이라도 다른 트랜잭션의 연산에 끼어 들 수 없다는 점 지속성 : 트랜잭션이 성공적으로 완료되었을 경우에 결과는 영구적으로 반영되어야 한다는 점",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-04",
      "number": 4,
      "question": "4. 다음은 제 ( ) 정규형으로써, 부분 함수적 종속성을 제거하여, 완전 함수적 종속을 만족하는 정규형은?",
      "answer": "제 2 정규형 - 기본키(주문번호 컬럼)이 제품번호에 의해 결정될 수 있기때문에 분해를 해야합니다. - 부분 함수적 종속성 : 기본키의 부분집합이 결정자가 되버린 현상 제 1정규형 : 도메인이 원자값 제 2정규형 : 부분 함수적 종속 제거 제 3정규형 : 이행적 함수 종속 제거 BCNF : 결정자이면서 후보키가 아닌 것 제거 제 4정규형 : 다치 종속 제거 제 5정규형 : 조인 종속 제거",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-05",
      "number": 5,
      "question": "5. 다음은 테이블을 수정할때의 상황입니다. SQL 보기에서 괄호안에 알맞는 문장을 작성하시오.\n(    1   ) 테이블명  (     2    )  컬럼 = 값 WHERE 점수 >= 90;",
      "answer": "1. UPDATE 2. SET",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-06",
      "number": 6,
      "question": "6. 다음 SQL 보기에서 JOIN할 경우 괄호안에 알맞는 문장을 작성하시오.\nSELECT .... FROM 학생정보 a JOIN 학과정보 b (   1   ) a.학과 = b.(   2   )",
      "answer": "1. ON 2. 학과",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-07",
      "number": 7,
      "question": "7. 파이썬 비트 연산자 코드 결과\na = 100\nresult = 0\nfor i in range(1,3);\n   result = a >> i\n   result = result + 1\npirnt(result)",
      "answer": "26",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-08",
      "number": 8,
      "question": "8. 미국 국립 표준 기술연구소 (NIST), DES를 대체하며, 128 비트 블록 크기와 128,192,256비트 키 크기의 대칭 키 암호화 방식은?",
      "answer": "AES (Advanced Encryption Standard) 대칭키 알고리즘 : 동일한 키를 사용하여 암호화와 복호화를 하는 것을 의미하며 가장많이 사용하는 알고리즘이 AES 입니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-09",
      "number": 9,
      "question": "9. 화이트박스 테스트 검중 중에, 각 번호에 해당하는 단어 선택해주시오. (실제 시험문제에서는 보기가 주어집니다.)\n1. 최소 한번은 모든 문장 수행\n2. 결정(Decision) 검증기준이라고도 하며, 조건별 참 / 거짓\n3. 2번과 달리 전체 조건식을 무시하며, 조건 상관없이 개별 조건 참 / 거짓",
      "answer": "1. 문장 2. 결정 3. 조건",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-10",
      "number": 10,
      "question": "10. SQL문에서 괄호안에 알맞은 답안을 작성하시오. (실제 시험에는 결과 이미지가 있습니다.)\n('이름'이란 컬럼에 '이'로 시작하는 문자열을 '내림차순'하는 쿼리 결과 내용입니다.)\nSELECT .... FROM ... WHERE '이름' LIKE (   1   )  ORDER BY  '컬럼명'  (    2    )",
      "answer": "1. 이% 2. DESC",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-11",
      "number": 11,
      "question": "11. 응집도 문제로써, 각 번호에 해당하는 응집도를 쓰시오. (실제 시험문제에서는 보기가 주어집니다.)\n1. 입출력 간 연관성은 없으나, 순서에 따라 수행되는 것\n2. 동일한 입력과 출력 사용\n3. 하나의 기능에 모두 기어하고 밀접하게 연관되어 있는 것 (그룹화)",
      "answer": "1. 절차적 응집도 2. 교환적 응집도 3. 기능적 응집도 응집도 순서 (낮은것부터 높은 순서) 우연적 > 논리적 > 시간적 > 절차적 > 교환적 > 순차적 > 기능적 우연적 응집도 : 모듈 내부의 각 구성요소들이 연관이 없을 경우 논리적 응집도 : 유사한 성격을 갖거나 특정 형태로 분류되는 처리 요소들이 한 모듈에서 처리되는 경우 시간적 응집도 : 연관된 기능이라기보단 특정 시간에 처리되어야 하는 활동들을 한 모듈에서 처리할 경우 순차적 응집도 : 모듈 내에서 한 활동으로부터 나온 출력값을 다른 활동이 사용할 경우",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-12",
      "number": 12,
      "question": "12.  패킷교환방식 중에서, 번호에 해당하는 방식을 적으시오.\n1. 목적지 호스트와 미리 연결한 후, 통신하는 연결형 교환 방식\n2. 헤더에 붙어서 개별적으로 전달하는 비연결형 교환 방식",
      "answer": "1. 가상 회선 방식 2. 데이터그램 방식 패킷교환방식(저장 방식) : 패킷이라는 단위를 사용하여 데이터를 송신하고 수신합니다. 패킷이란 정보를 일정한 크기로 분할한 뒤 각각의 패킷에 송수신 주소 및 부가 정보를 입력한 것으로 현재 컴퓨터 네트워크에서 주로 사용하는 방식입니다. (EX : 인터넷) * 반대개념 회선 교환 방식(비 저장 방식) : 물리적 전용선을 활용하여 데이터 전달 경로가 정해진 후 동일 경로로만 전달이 됩니다. 데이터를 동시에 전송할 수 있는 양을 의미하는 대역폭이 고정되고 안정적인 전송률을 확보할 수 있습니다. (EX : 전화망)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-13",
      "number": 13,
      "question": "13. 괄호 (   ) 안에 알맞는 단어를 쓰시오.\n디자인 패턴 중에서 (   )패턴은 반복적으로 사용되는 객체들의 상호작용을 패턴화 한 것으로,\n클래스나 객체들이 상호작용하는 방법이다. 알고리즘의 패턴에는 Interpreter, Observer, Command 가 있다.",
      "answer": "행위(behavioral) 행위패턴은 객체나 클래스 간의 교류 방법에 대해 정의하는 방법을 제시합니다. 행위패턴 클래스 : Interpreter, Template 행위패턴 객체 : Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-14",
      "number": 14,
      "question": "14. 병행제어기법 중, 접근한 데이터에 대한 연산을 모두 마칠때까지 상호배제하는 기법을 무엇이라 하는지 작성하시오.",
      "answer": "로킹 병행제어란 다중 프로그램이 이점을 활용하여 동시에 여러 개의 트랜잭션을 병행수행할 때, 동시에 실행되는 트랜잭션들이 데이터베이스의 일관성을 파괴하지 않도록 트랜잭션 간의 상호작용을 제어하는 것입니다. 병행제어기법 - 로킹, 타임 스탬프 순서, 최적 병행 수행, 다중 버전 기법 타임 스탬프 순서(Time Stamp Ordering) : 트랜잭션과 트랜잭션이 읽거나 갱신한 데이터에 대해 트랜잭션이 실행을 시작하기 전에 시간표(time stamp)를 부여하여 부여된 시간에 따라 작업을 수행하는 기법 최적 병행 수행(검증기법, 낙관적 기법) : 병행수행하고자 하는 대부분의 트랜잭션이 읽기 전용 트랜잭션일 경우, 트랜잭션 간의 충동률이 매우 낮아서 병행제어 기법을 사용하지 않고 실행되어도 이 중의 많은 트랜잭션은 시스템의 상태를 일관성 있게 유지한다는 점을 이용한 기법 다중 버전 기법 : 타임 스탬프의 개념을 이용한 기법으로 타임 스탬프는 트랜잭션 및 데이터들이 이용될 때의 시간을 시간표로 관리하지만 다중 버전 기법은 갱신될 때마다의 버전을 부여하여 관리하는 기법",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-15",
      "number": 15,
      "question": "15. 럼바우 데이터 모델링에 관한 설명으로써, 보기에 해당하는 답안을 작성하시오.\n(실제 시험문제에서는 보기가 주어집니다.)\n1. 입력값이 출력값일 때 ex) 자료 흐름도(DFD)\n2. 시간에 따라 변하는 것 ex) 상태 다이어그램(상태도)\n3. 객체들 간의 관계를 정의 ex) ER다이어그램(ERD)",
      "answer": "1. Function Modeling 2. Dynamic Modeling 3. Object Modeling 럼바우 객체지향 분석 기법은 소프트웨어 구성 요소를 그래픽 표기법을 이용하여 모델링하는 분석 기법입니다. 분석활동 : 객체 모델링(Object Modeling), 동적 모델링(Dynamic Modeling), 기능 모델링(Functional Modeling) 럼바우 객체지향 분석 기법의 절차 : 객체 모델링 > 동적 모델링 > 기능 모델링",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-16",
      "number": 16,
      "question": "16. 다음은 C언어에 관한 소스코드이다. 실행 결과값을 작성하시오.\nint main(){\n   int res;\n   res = mp(2,10);\n   printf(\"%d\",res);\n   return 0;\n}\n\nint mp(int base, int exp) {\n   int res = 1;\n   for(int i=0; i < exp; i++){\n      res = res * base;\n   }\n   \n   return res;\n}",
      "answer": "1024",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-17",
      "number": 17,
      "question": "17. 클래스 내에서 객체 생성 없이 사용할 수 있는 메소드로써 출력 결과를 작성하시오.\npublic class Test {\n   public static void main(String[] args){\n      system.out.print(Test.check(1));\n   }\n   \n   (    )  String check (int num) {\n      return (num >= 0) ? \"positive\" : \"negative\";\n   }\n}\n\n[출력결과]\npositive",
      "answer": "static",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-18",
      "number": 18,
      "question": "18. 다음은 C언어 문제이다. 출력값을 작성하시오.\nint main(){\n\nint ary[3];\nint s = 0;\n*(ary+0)=1;\nary[1] = *(ary+0)+2;\nary[2] = *ary+3;\nfor(int i=0; i<3; i++){\n  s=s+ary[i]\n}\n\nprint(\"%d\",s);\n\n}",
      "answer": "8",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-19",
      "number": 19,
      "question": "19. 다음은 JAVA 관한 문제이다. 알맞는 출력값을 작성하시오.\npublic class ovr1 {\n\tpublic static void main(String[] args){\n    \tovr1 a1 = new ovr1();\n        ovr2 a2 = new ovr2();\n        System.out.println(a1.sun(3,2) + a2.sun(3,2));\n    }\n    \n    int sun(int x, int y){\n    \treturn x + y;\n    }\n}\n\nclass ovr2 extends ovr1 {\n\n\tint sun(int x, int y){\n    \treturn x - y + super.sun(x,y);\n    }\n\n}",
      "answer": "11",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-2-20",
      "number": 20,
      "question": "20. 다음 괄호 안에 알맞은 답안을 작성하시오.\n- 테스트 하네스의 도구 구성 요소 중, 상향식 테스트시, 상위 모듈 역할을 대신하는 테스트 드라이버와 하향식 테스트 시, 하위 모듈 역할을 대신하는 테스트 (       ) 이 있다.",
      "answer": "스텁 테스트 하네스란 시스템 및 시스템 컴포넌트 시험하는 환경의 일부분으로 시험을 지원하는 목적 하에 생성된 코드와 데이터를 뜻합니다. 시험 드라이버라고도 하며, 일반적으로 단위 시험이나 모듈 시험에 사용하기 위해 코드 개발자가 만듭니다. 테스트 하네스 도구 구성 요소 : 테스트 드라이버, 테스트 스텁, 테스트 슈트, 테스트 케이스, 테스트 스크립트, 목 오브젝트",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2021-3": [
    {
      "id": "2021-3-01",
      "number": 1,
      "question": "1. 다음 Java 코드에 대한 알맞는 출력값을 쓰시오.",
      "answer": "3 1. conn1을 생성하여 Connection.get()을 호출할 때, _inst는 null이므로 Connection() 객체를 생성합니다. (객체를 생성하면 인스턴스를 생성하고 참조값을 return하기 때문에 여기서 부터는 _inst가 null이 아니게 됩니다.) conn1.count() 는 0에서 count++ 하므로 1이 됩니다. 2. conn2를 생성하고 다시 get()을 호출하면 _inst는 null이 아니기 때문에 객체를 생성하지 않고 count 값을 그대로 가지고 갑니다. 그래서 conn2.count() 는 1에서 count++ 하므로 2가 됩니다. 3. conn3.count()도 마찬가지로 위의 시스템처럼 진행되므로 2에서 count++로 3이 됩니다.",
      "explanation": null,
      "code": "class Connection {\n  private static Connection _inst = null;\n  private int count = 0;\n    static public Connection get() {\n      if(_inst == null) {\n      _inst = new Connection();\n      return _inst; \n      }\n    return _inst;\n    }\n  public void count() { count ++; }\n  public int getCount() { return count; }\n}\n \npublic class testcon {\n  public static void main(String[] args) {\n    Connection conn1 = Connection.get();\n    conn1.count();\n    Connection conn2 = Connection.get();\n    conn2.count();\n    Connection conn3 = Connection.get();\n    conn3.count();\n    \n    System.out.print(conn1.getCount());\n  }\n}",
      "type": "코드완성"
    },
    {
      "id": "2021-3-02",
      "number": 2,
      "question": "2. 다음은 정보 보호 기술인 AAA에 대한 설명이다. 각 설명에 맞는 답을 고르시오\n(실제 기출문제에서는 답의 보기 중, A에 대한 보기가 주어집니다.(오답 중, Application 등..))\n1. 시스템을 접근하기 전에 접근 시도하는 사용자의 신원을 검증\n2. 검증된 사용자에게 어떤 수준의 권한과 서비스를 허용\n3. 사용자의 자원(시간,정보,위치 등)에 대한 사용 정보를 수집",
      "answer": "1.Authentication 2.Authorization 3.Accounting AAA는 유무선 이동 및 인터넷 환경에서 가입자에 대한 안전하고, 신뢰성 있는 인증, 권한 검증 등의 기능을 체계적으로 제공하는 정보 보호 기술입니다. 신분을 확인하는 인증(authentication) 접근&middot;허가를 결정하는 인가(authorization) 리소스 사용정보를 수집&middot;관리하는 계정(accounting) 위의 3가지를 통합한 보안소프트웨어로 3A라고도 합니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-03",
      "number": 3,
      "question": "3. Grant의 기능에 대해 간략하게 약술하시오.",
      "answer": "사용자(User)에게 접속권한, 오브젝트 생성권한, DBA 권한 등을 부여할 수 있는 명령어 Grant는 사용자에게 접속권한, 오브젝트 생성권한, DBA 권한 등을 부여할 수 있는 명령어이며, Revoke는 사용자에게 부여한 권한을 다시 회수하는 명령어입니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-04",
      "number": 4,
      "question": "4. 다음 중, 설명에 대한 괄호( ) 안에 들어가는 내용에 대해 작성하시오.\n(설명과 함께 동작과정 이미지가  있습니다.)\n( ) 스푸핑은 근거리 통신망 하에서 ( ) 메시지를 이용하여 상대방의 데이터 패킷을 중간에서 가로채는 중간자 공격 기법이다. 이 공격은 데이터 링크 상의 프로토콜인 (  )를 이용하기 때문에 근거리상의 통신에서만 사용할 수 있는 공격이다.",
      "answer": "ARP 위 내용은 ARP 스푸핑에 대한 내용이고 ARP에 대해 알아보겠습니다. ARP : ARP는 (Address Resolution Protocol) 의 약자로 주소 결정 프로토콜이라 불립니다. 네트워크 상에서 IP주소를 물리적 네트워크 주소(이더넷)로 대응(bind)시키기 위해 사용되는 프로토콜이며, 인터넷 계층에 속해있습니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-05",
      "number": 5,
      "question": "5. 다음은 Coupling에 대한 설명이다. 설명에 대한 Coupling 종류를 영문으로 작성하시오.\n어떤 모듈이 다른 모듈의 내부 논리 조직을 제어하기 위한 목적으로 제어 신호를 이용하여 통신하는 경우의 결합도\n하위 모듈에서 상위 모듈로 제어 신호가 이동하여 상위 모듈에게 처리 명령을 부여하는 권리 전도 현상이 발생",
      "answer": "control 소프트웨어 공학에서 coupling이란 결합도를 의미합니다. 결합도는 약할수록 모듈의 독립성이 높아지는데, 내용 > 공통 > 외부 > 제어 > 스탬프 > 자료 결합도 순으로 결합도가 약해집니다. 영어용어의 출제가 빈번해지면서 영어용어도 같이 숙지할 필요가 있어보입니다. 내용 결합도(Content Coupling) 공통 결합도(Common Coupling) 외부 결합도(External Coupling) 제어 결합도(Control Coupling) 스탬프 결합도(Stamp Coupling) 자료 결합도(Data Coupling)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-06",
      "number": 6,
      "question": "6. OSI 7 Layer의 설명으로 해당되는 설명의 답을 작성하시오.\n1. 물리계층을 통해 송수신되는 정보의 오류와 흐름을 관리하여 안전한 정보의 전달을 수행할 수 있도록 도와주는 역할\n2. 데이터를 목적지까지 가장 안전하고 빠르게 전달하는 기능\n3. 수신자에서 데이터의 압축을 풀수 있는 방식으로 된 데이터 압축",
      "answer": "1. 데이터링크 2. 네트워크 3. 표현 OSI 7 Layer : OSI 7 Layer란 네트워크에서 통신이 일어나는 과정을 단계별로 파악하기 위해 7단계로 나눈 것을 말합니다. 1 Layer - 물리계층(Physical Layer) 단순 데이터를 전기적인 신호로 변환(on/off)해서 주고받는 기능만 하며, 케이블, 리피터, 허브를 통해 데이터를 전송합니다. 2 Layer - 데이터 링크계층(DataLink Layer) 물리계층을 통해 송수신되는 정보의 오류와 흐름을 관리하여 안전한 정보의 전달을 수행하도록 역할합니다. MAC주소를 가지고 통신을 합니다. 3 Layer - 네트워크 계층(NetWork Layer) 전송 데이터를 목적지까지 경로를 찾아 전송하는 계층입니다. 주소(IP)를 정하고, 경로(route)를 선택하여 패킷을 전달하는 것이 핵심입니다. 4 Layer - 전송 계층(Transport) 데이터를 전송하고 전송 속도를 조절하며 오류가 발생된 부분은 다시 맞춰주며, 주로 TCP프로토콜을 사용합니다. 5 Layer - 세션 계층(Session) 네트워크의 양쪽 연결을 관리하고 지속적으로 연결을 시켜줍니다. TCP/IP의 세션을 만들고 없애는 것을 반복합니다. 6 Layer - 표현 계층(Presentation) 응용계층으로부터 전달받거나 전송하는 데이터의 인코딩(언어처리) 및 디코딩이 이루어 집니다. JPEG,TIFF,GIF 등의 다양한 포멧을 지원합니다. 7 Layer - 응용계층(Application) 사용자가 네트워크에 접근할 수 있도록 도와줍니다. 사용자에게 보이는 유일한 계층으로 메일전송/인터넷접속 등의 작업을 수행합니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-07",
      "number": 7,
      "question": "7. 다음 중, 설명에 대한 괄호 ( ) 안에 들어갈 알맞는 보기를 고르시오.\n(실제 기출문제에서는 답에 대한 영어용어의 보기가 주어집니다.)\n눈에 보이지 않는 것을 개념적으로 표현하는 것이 '추상화'라하며,  이는 실세계의 복잡한 상황을 간결하고 명확하게 개념화(槪念化)하는 것이다.\n(  1  )은 클래스들 사이의 전체 또는 부분 같은 관계를 나타내는 것이고,\n(  2  )은 한 클래스가 다른 클래스를 포함하는 상위 개념일 때 IS-A관계라하며, 일반화 관계로 모델링한다.",
      "answer": "1. Aggregation 2. Generalization UML다이어그램의 구조 다이어그램안에 클래스 다이어그램에 대한 종류 문제입니다. UML : UML(Unified Modeling Language)는 통합 모델링 언어라 불리며, 시스템을 모델로 표현해주는 대표적인 모델링 언어입니다. UML 다이어그램 종류 1. 구조 다이어그램 (Structure Diagram) (1) 클래스 다이어그램 (이곳에 해당됩니다.) (2) 객체 다이어그램 (3) 복합체 구조 다이어그램 (4) 배치 다이어그램 (5) 컴포넌트 다이어그램 (6) 패키지 다이어그램 2. 행위 다이어그램 (Behavior Diagram) (1) 활동 다이어그램 (2) 상태 머신 다이어그램 (3) 유즈 케이스 다이어그램 (4) 상호작용 다이어그램 클래스 다이어그램 (Class Diagram) : 시 간에 따라 변하지 않는 시스템의 정적인 면을 보여주는 대표적인 UML 구조 다이어그램이며, 시스템을 구성하는 클래스들 사이의 관계를 표현합니다. UML에서 제공하는 클래스 사이의 관계 : (1) 연관 관계 (association) : 클래스들이 개념상 서로 연결되어 있음을 나타냅니다. (2) 일반화 관계 (generalization) : 상속 관계를 설명합니다. (위 문제 참조) (3) 집합관계 : 1) 집약 관계(aggregation) : 클래스 사이의 전체 또는 부분 같은 관계를 나타냅니다. (객체 라이프 타임 : 독립적) 2) 합성 관계 (composition) : 클래스 사이의 전체 또는 부분 같은 관계를 나타냅니다. (객체 라이프 타임 : 의존적) (4) 의존 관계 (dependency) : 연관 관계와 같이 한 클래스가 다른 클래스에서 제공하는 기능을 사용합니다. (5) 실체화 관계 (realization) : 인터페이스와 구현 클래스 사이의 관계를 나타냅니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-08",
      "number": 8,
      "question": "8. 다음은 테스트케이스의 구성요소에 대한 설명이다. 괄호 ( ) 안에 들어갈 알맞는 보기를 고르시오.\n(실제 기출문제에서는 답에 대한 보기가 주어집니다.)",
      "answer": "1. 테스트 조건 2. 테스트 데이터 3. 예상 결과 테스트 케이스란 특정 프로그램의 부분 및 경로를 실행해보거나, 요구사항에 준수하는지 확인하기 위해 개발된 입력 값, 조건, 예상된 결과 세트입니다. 케스트 케이스를 함으로써 오류감소 / 비용감소 / 의사소통의 효과가 나타납니다. 테스트 케이스의 설계 기법 종류로는 블랙박스 기법의 명세기반 / 경험기반 기법과 화이트박스 기법의 구조기반 기법이 있습니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-09",
      "number": 9,
      "question": "9. 다음 중, 설명에 대한 괄호 ( ) 안에 들어갈 알맞는 보기를 고르시오.\n(실제 기출문제에서는 답에 대한 보기 중, 영문 보기가 주어집니다.)\n(  ) 통해 요구사항 명세를 입력 조건과 출력 조건 간의 논리적 관계로 표현하고,\n이를 기반으로 테스트케이스를 도출한다.\n(  )의 &lsquo;원인(causes)&rsquo;은 입력 조건을 의미하고 &lsquo;결과(effects)&rsquo;는 입력 조건의 결과를 의미하며, 원인과 결과 간의 논리적 관계를 AND, OR, NOT 같은 boolean 연산자를 사용하여 표현한다.",
      "answer": "cause effect graph 동적 테스트(Dynamic Test) - 테스트데이터를 이용해 실제 프로그램을 실행함으로써 오류를 찾는 과정입니다. &bull; 명세 기반 테스트(Black Box Test) 1) 신택스 기법(Syntax Analysis) 2) 동등 분할 기법(Equivalence Partitioning Analysis) 3) 경계 값 분석 기법(Boundary Value Analysis) 4) 원인-결과 그래프 기법(Cause-Effect Graph Analysis) 5) 의사결정 테이블 기법(Decision Table Analysis) &bull; 구현 기반 테스트(White Box Test) 1) 문장 검증 기준(Statement Coverage) 2) 분기 검증 기준(Branch Coverage) 3) 조건 검증 기준(Condition Coverage) 4) 분기/조건 검증 기준(Branch/Condition Coverage) 5) 다중 조건 검증 기준(Multiple Condition Coverage) 6) 기본 경로 테스트(Basic Path Test)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-10",
      "number": 10,
      "question": "10. 다음 중, 설명에 대한 괄호 ( ) 안에 들어갈 알맞는 보기를 고르시오.\n(   )는 블록 암호의 일종으로, 미국 NBS (National Bureau of Standards, 현재 NIST)에서 국가 표준으로 정한 암호이다.\n(   )는 64비트 평문을 64비트 암호문으로 암호화하는 대칭키 암호 알고리즘이다.\n(   )의 키는 7비트마다 오류검출을 위한 정보가 1비트씩 들어가기 때문에 실질적으로는 56비트이다.",
      "answer": "DES DES(Data Encryption Standard)와 AES(Advanced Encryption Standard)는 대칭키 암호화 방식 중 하나입니다. DES의 취약점을 보완하기 위해 만들어진 고급 암호 화 표준 방식이 AES입니다. DES와 다르게 128비트 평문을 128비트로 암호화 하였으며, 10/12/14 라운드 수와 이에 대응해 128/192/256비트의 키길이를 갖습니다.(AES-128/ AES-192/ AES-256 ) 하기 때문에 안전하여 현재 보편적으로 사용되는 암호화 방식입니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-11",
      "number": 11,
      "question": "11. 다음 Java 코드에 대한 알맞는 출력값을 쓰시오.",
      "answer": "7 & : 비트연산자로써 같은 자리를 비교했을때 모두 같을 경우 True / 아니면 False | : 비트연산자로써 같은 자리를 비교했을때 하나라도 조건이 맞을 경우 True / 아니면 False ^ : XOR연산자로써 두 값이 같으면 False / 아니면 True",
      "explanation": null,
      "code": "public class testco {\n public static void main(String[] args) {\n  int a = 3, b = 4, c = 3, d = 5;\n  if((a == 2 | a == c) & !(c > d) & (1 == b ^ c != d)) {\n   a = b + c;\n    if(7 == b ^ c != a) {\n     System.out.println(a);\n    } else {\n    System.out.println(b);\n    }\n  } else {\n    a = c + d;\n    if(7 == c ^ d != a) {\n    System.out.println(a);\n    } else {\n    System.out.println(d);\n    }\n  }\n }\n}",
      "type": "코드완성"
    },
    {
      "id": "2021-3-12",
      "number": 12,
      "question": "12. 다음 C언어에 대한 알맞는 출력값을 쓰시오.",
      "answer": "37 *array[1] = 24 **array + 1 = 12 + 1 = 13 24 + 13 = 37",
      "explanation": null,
      "code": "#include <stdio.h>\n \nint main(){\nint *arr[3];\nint a = 12, b = 24, c = 36;\narr[0] = &a;\narr[1] = &b;\narr[2] = &c;\n \nprintf(\"%d\\n\", *arr[1] + **arr + 1);\n \n}",
      "type": "코드완성"
    },
    {
      "id": "2021-3-13",
      "number": 13,
      "question": "13. 다음은, 테이블에서 조건값을 실행한 화면이다. 이에 대한 알맞는 결과값을 작성하시오.",
      "answer": "4 cross join은 join을 해서 나올 수 있는 모든 행의 조합을 보여주는 것으로 각 결과를 곱해주면 됩니다. 즉, S로 시작하는 A.NAME의 개수는 2개, T를 포함하는 A.NAME의 개수 또한 2개이므로 2*2 = 4가 됩니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-14",
      "number": 14,
      "question": "14. 다음 파이썬 코드이다. 알맞는 출력값을 쓰시오.",
      "answer": "False 여기서는 앞글자를 대문자로 표기하는 것이 포인트입니다.",
      "explanation": null,
      "code": "a,b = 100, 200 \nprint(a==b)",
      "type": "코드완성"
    },
    {
      "id": "2021-3-15",
      "number": 15,
      "question": "15. 다음 중, 설명에 대한 괄호 ( ) 안에 들어갈 알맞는 답을 작성하시오.\n( ) 다이어그램은 문제 해결을 위한 도메인 구조를 나타내어 보이지 않는 도메인 안의 개념과\n같은 추상적인 개념을 기술하기 위해 나타낸 것이다.\n또한 소프트웨어의 설계 혹은 완성된 소프트웨어의 구현 설명을 목적으로 사용할 수 있다.\n( ) 다이어그램의 형식은 ( )를 포함하여 속성(attribute)과 메서드(method)가 있다.",
      "answer": "클래스 UML(Unified Modeling Language)은 통합 모델링 언어라고 합니다. UML를 사용하면 의미가 명확하고 소통이 원활해 지며, 전체 시스템 구조와 클래스 간의 의존성 파악도 쉬우며, 원활한 유지보수를 위한 문서 활용으로도 사용됩니다. UML다이어그램은 구조 다이어그램 (Structure Diagram : 정적) 과 행위 다이어그램 (Behavior Diagram : 동적) 으로 나뉘는데 클래스 다이어그램은 구조 다이어그램에 속합니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-16",
      "number": 16,
      "question": "16. 다음 중, 설명에 대한 괄호 ( ) 안에 들어갈 알맞는 보기를 고르시오.\n(실제 기출문제에서는 답에 대한 보기 중, 영문 보기가 주어집니다.)\n( ) 패턴은 객체지향 디자인 패턴이다.\n( )는 부모(상위) 클래스에 알려지지 않은 구체 클래스를 생성하는 패턴이며,  자식(하위) 클래스가 어떤 객체를 생성할지를 결정하도록 하는 패턴이기도 하다.\n부모(상위) 클래스 코드에 구체 클래스 이름을 감추기 위한 방법으로도 사용한다.",
      "answer": "Factory method",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-17",
      "number": 17,
      "question": "17. 다음 C언어에 대한 알맞는 출력값을 쓰시오.",
      "answer": "501 jsu에는 {name, os, db, hab, hhab} 이런형태의 데이터가 들어가 있습니다. p = &st[0]; : p = {\"데이터1\", 95, 88} (p+1)&rarr;hab = (p+1)&rarr;os + (p+2)&rarr;db; : (p+1) = {\"데이터2\", 84, 91}, (p+2) = {\"데이터3\", 86, 75} (p+1)&rarr;os + (p+2)&rarr;db : 84 + 75 = 159 (p+1)&rarr;hhab = (p+1)&rarr;hab + p&rarr;os + p&rarr;db; : (p+1)&rarr;hab + p&rarr;os + p&rarr;db : 159 + 95 + 88 = 342 printf(\"%d\", (p+1)&rarr;hab + (p+1)&rarr;hhab) : (p+1)&rarr;hab + (p+1)&rarr;hhab : 159 + 342 = 501",
      "explanation": null,
      "code": "#include <stdio.h>\n \nstruct jsu {\n  char name[12];\n  int os, db, hab, hhab;\n};\n \nint main(){\nstruct jsu st[3] = {{\"데이터1\", 95, 88}, \n                    {\"데이터2\", 84, 91}, \n                    {\"데이터3\", 86, 75}};\nstruct jsu* p;\n \np = &st[0];\n \n(p + 1)->hab = (p + 1)->os + (p + 2)->db;\n(p + 1)->hhab = (p+1)->hab + p->os + p->db;\n \nprintf(\"%d\\n\", (p+1)->hab + (p+1)->hhab);\n}",
      "type": "코드완성"
    },
    {
      "id": "2021-3-18",
      "number": 18,
      "question": "18. 다음은, 파일 구조(File Structures)에 대한 설명이다. 괄호 ( ) 안에 들어갈 알맞는 답을 작성하시오.\n파일구조는 파일을 구성하는 레코드들이 보조기억장치에 편성되는 방식으로 접근 방식에 따라 방식이 달라진다.\n접근 방법중, 레코드들을 키-값 순으로 정렬하여 기록하고, 레코드의 키 항목만을 모은 (  )을 구성하여 편성하는 방식이 있으며, 레코드를 참조할 때는 (   ) 이 가르키는 주소를 사용하여 직접 참조할 수 있다. 파일 구조에는 순차 접근, (  ) 접근,  해싱 접근이 있다.",
      "answer": "인덱스 (색인)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-19",
      "number": 19,
      "question": "19. 다음 설명에 대한 알맞는 답을 영문약어로 작성하시오.\n(  )는 사용자가 그래픽을 통해 컴퓨터와 정보를 교환하는 환경을 말한다. 이전까지 사용자 인터페이스는 키보드를 통해 명령어로 작업을 수행시켰지만  (   )에서는 키보드 뿐만 아니라 마우스 등을 이용하여 화면의 메뉴 중 하나를 선택하여 작업을 수행한다. 화면에 아이콘을 띄어 마우스를 이용하여 화면에 있는 아이콘을 클릭하여 작업을 수행하는 방식이다. 대표적으로는 마이크로소프트의 Windows, 애플의 Mac 운영체제 등이 있다.",
      "answer": "GUI",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2021-3-20",
      "number": 20,
      "question": "20. 다음은 소프트웨어 통합 테스트에 대한 설명이다.  괄호 ( ) 안에 들어갈 알맞는 답을 작성하시오.\n(  1.  ) 방식은 이름에서도 알 수 있듯이, 하위 모듈부터 시작하여 상위 모듈로 테스트를 진행하는 방식이며,\n이 방식을 사용하기 위해서는 (  2. )가 필요하다.\n(   2.   )는 이미 존재하는 하위 모듈과 존재하지 않은 상위 모듈에 대한 인터페이스 역할을 한다.",
      "answer": "1. 상향식 2. 테스트 드라이버 모듈을 통합하는 과정에서 모듈 간 호환성의 문제를 찾아내기 위해 수행되는 테스트입니다. 즉, 모듈 간의 인터페이스가 올바르게 작동하는지를 테스트하게 됩니다. 통합 테스트에는 아래와 같은 방식이 존재합니다. 1. 빅뱅(Big Bang) 접근법 : 모든 구성 요소들을 한꺼번에 통합된 후에 테스트 수행 2. 점증적(incremental) 접근법 : 논리적으로 연관된 두개 또는 그 이상의 모듈을 조합시켜서 수행 (1) 하향식(Top Down) 접근법 : 소프트웨어 시스템의 제어 흐름이 위에서 아래로 발생 (테스팅을 위해 스텁의 도움이 필요) (2) 상향식(Bottom Up) 접근법 : 모든 모듈들이 테스트될 때까지 더 낮은 레벨에 있는 각 모듈은 더 위에 있는 모듈과 함께 테스트 수행 (테스팅을 위한 드라이버의 도움이 필요) (3) 샌드위치 접근법 : 하향식과 상향식 접근법의 조합",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2020-1": [
    {
      "id": "2020-1-01",
      "number": 1,
      "question": "1. 살충제 패러독스의 개념에 관해서 서술하시오.",
      "answer": "동일한 테스트 케이스에 의한 반복적 테스트는 새로운 버그를 찾지 못한다는 테스트 원리 애플리케이션 테스트 : 애플리케이션에 잠재되어 있는 결함을 찾아내는 일련의 행위 또는 절차 절차 : - 확인(Validation) : 개발된 소프트웨어가 고객의 요구사항을 만족하는가 - 검증(Verification) : 개발된 소프트웨어가 기능을 정확히 수행하는가 기본원리 : - 완벽한 테스트 불가능 : 애플리케이션 테스트는 소프트웨어의 잠재적 결함은 줄일 수 있지만 결함이 없다고 증명할 수는 없다. - 결합 집중(Defect Clustering) : 애플리케이션 결함은 대부분 개발자의 특성이나 애플리케이션 기능적 특징 때문에 모듈에 집중되어 있다. - 파레토 법칙(Pareto Principle) : 애플리케이션의 20%에 해당하는 코드에서 전체 결함의 80%가 발견된다. - 살충제 패러독스(Pesticide Paradox) : 동일한 테스트를 반복하면 더 이상 결함이 발견되지 않는 \"살충제 패러독스\" 현상이 발생. 지속적으로 테스트케이스 보안 개선 - 테스팅은 정황(Context) 의존 : 소프트웨어 특징, 테스트 환경, 테스터 역량 등 정황에 따라 테스트를 다르게 수행해야한다. - 오류-부재의 궤변 : 소프트웨어 결함을 모두 제거해도, 결국 사용자의 요구사항을 만족시키지 못하면 해당 소프트웨어는 품질이 높지 않다",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-02",
      "number": 2,
      "question": "2. 데이터 마이닝의 개념에 관해서 서술하시오.",
      "answer": "대규모로 저장된 데이터 안에서 체계적이고 자동적으로 통계적 규칙이나 패턴을 찾아내는 기술",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-03",
      "number": 3,
      "question": "3. 프로토콜의 기본 요소 3가지를 쓰시오.",
      "answer": "구문(Syntax), 의미(Semantics) , 순서(Timing) 구문 : 데이터의 형식이나 부호화 및 신호 레벨 등을 규정 의미 : 전송의 조작이나 오류 제어를 위한 제어 정보에 대한 규정 순서 : 접속되어 있는 개체 간의 통신 속도의 조정이나 메세지의 순서 제어 등을 규정",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-04",
      "number": 4,
      "question": "4. 다음이 설명하는 용어는 무엇인지 쓰시오.\nW3C(World wide Web Consortium)에서 개발되었고, 웹 브라우저 간 호환이 되지 않는 문제와 SGML(Standard Generalized Markup Language)의 복잡함을 해결하기 위해 개발된 다목적 마크업 언어이다.",
      "answer": "XML (eXtensible Markup Language)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-05",
      "number": 5,
      "question": "5. 속성-값(Attribute-value Pair)으로 이루어진 데이터 오프젝트를 전달하기 위해 사용하는 개방형 표준 포멧이다. Ajax(Asynchronous JavaScript and XML)에서 많이 사용되고 XML(eXtensible Markup Language)을 대체하는 주요 데이터 포맷이다. 언어 독립형 데이터 포맷으로 다양한 데이터 프로그래밍 언어에서 사용하고 있는 기술은 무엇인가?",
      "answer": "JSON(JavaScript Object Notation)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-06",
      "number": 6,
      "question": "6. STUDENT 테이블에서 컴퓨터과 학생 50명, 인터넷과 학생 100명, 사무자동화과 학생 50명의 정보가 저장되어 있을 때, 다음 SQL문의 실행 결과에 따른 튜플의 수는? (단, DEPT 칼럼은 학과명이다.)\n1) SELECT DERP FROM STUDENT;\n2) SELECT DISTINCT DEPT FROM STUDENT;\n3) SELECT COUNT(DISTINCT DEPT) FROM STUDENT WHERE DEPT = '컴퓨터과';",
      "answer": "1. 200 2. 3 3. 1",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-07",
      "number": 7,
      "question": "7. 스케줄링 방식에서 HRN(Highest Response ratio Next) 우선순위 계산식을 쓰시오.",
      "answer": "(대기 시간 + 서비스 시간) / 서비스 시간 HRN 스케줄링 기법은 SJF 스케줄링 기법의 약점인 긴 작업과 짧은 작업 사이의 불평등을 보완하기 위한 방법으로, 위에 우선순위 계산식은 시스템 응답시간이 커질수록 우선순위가 높아진다는 의미 입니다. 위의 HRN를 비롯하여, SJF와 FIFO, 우선순위, 기반부는 비선점형 프로세스 스케줄링 에 속합니다. SJF(Shortest Job First) : 프로세스의 실행시간이 가장 적은 프로세스를 먼저 실행시키는 기법입니다. FIFO(First In First Out)는 각 페이지가 주기억장치에 적재될 때마다 가장 먼저 들어왔던 페이지가 가장 오래 있었기 때문에 해당 페이지를 교체하는 기법입니다. 우선순위 : 미리 정의한 알고리즘대로 프로세스의 우선순위를 결정하는 방식 기한부 : 프로세스마다 정해진 시간할당량만큼만 실행되도록 지정하는 방식",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-08",
      "number": 8,
      "question": "8. 트랜잭션의 특징 중, 일관성 지속성 외 2개의 특성을 쓰시오.",
      "answer": "원자성, 독립성 원자성 : 트랜잭션이 데이터베이스에 모두 반영되던가, 전혀 반영되지 않아야 한다는 점 일관석 : 트랜잭션의 작업 처리 결과가 항상 일관성이 있어야 한다는 점 독립성 : 둘 이상의 트랜잭션이 동시에 실행되고 있을 경우, 어떤 하나의 트랜잭션이라도 다른 트랜잭션의 연산에 끼어들 수 없다는 점 지속성 : 트랜잭션이 성공적으로 완료되었을 경우, 결과는 영구적으로 반영되어야 한다는 점",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-09",
      "number": 9,
      "question": "9. 공격자가 패킷의 출발지 주소나 포트를 임의로 변경해 출발지와 목적지 주소를 동일하게 함으로써 공격 대상 컴퓨터의 실행속도를 느리게 하거나 동작을 마비시켜 서비스 거부 상태에 빠지도록 하는 공격 방법은 무엇인가?",
      "answer": "랜드 어택 (Land Attack) 네트워크 공격 유형 서비스 거부 공격 (DOS - Denial of Service) : 표적이 되는 서비스 자원을 고갈시킬 목적으로 다수의 공격자 또는 시스템에서 대량의 데이터를 한 곳의 서버에 집중적으로 전송함으로써 표적이 되는 서버의 정상적인 기능을 방해하는 공격 방법으로, DDoS와의 차이점은 Attacker가 직접 공격을 수행 분산 서비스 거부 (DDoS -Distributed Denial of Service) : Attacker가 여러 대의 컴퓨터를 감염시켜 동시에 한 타깃 시스템을 집중적으로 공격하는 방법으로써, 짧은 시간 안에 서버를 마비시킬 수 있으며 Dos보다 치명적이고 Dos와의 차이점은 실질적인 Attacker가 아닌 Attacker가 감염시킨 좀비 PC가 공격을 수행한다는 점 Ping of Death : ping 명령을 전송할 때 패킷의 크기를 인터넷 프로토콜 허용 범위 이상으로 전송하여 네트워크를 마비시키는 공격 방법 Smurfing : IP또는 ICMP의 특성을 악용하여 엄청난 양의 데이터를 한 사이트에 집중적으로 보내냄으로써 네트워크 불능 상태로 만드는 공격 SYN Flooding : 공격자가 가상의 클라이언트로 위장하여 3-way-handshake 과정을 의도적으로 중단 시킴으로써 공격 대상자인 서버가 대기 상태에 놓여 정상적으로 서비스를 수행하지 못하게 하는 공격 방법 TearDrop : 데이터의 송.수신 과정에서 패킷의 크기가 여러 개로 분할되어 전송할때 분할 순서를 변경시켜 수신측에서 패킷을 재조립할 때 오류로 인한 과부하를 발생시킴으로써 시스템이 다운되도록 하는 공격 방법 Smurfing : IP또는 ICMP의 특성을 악용하여 엄청난 양의 데이터를 한 사이트에 집중적으로 보내냄으로써 네트워크 불능 상태로 만드는 공격",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-10",
      "number": 10,
      "question": "10. RFC 1321로 지정되어 있으며, 주로 프로그램이나 파일이 원본 그대로 인지를 확인하는 무결성 검사 등에 사용된다. 1991년 로널드 라이베스트가 예전에 쓰이던 MD4를 대체하기 위해 고안된 128비트 암호화 해시 함수는 무엇인가?",
      "answer": "MD5",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-11",
      "number": 11,
      "question": "11. 다음은 공통 모듈 구현의 개념에 대한 설명이다. 괄호 (    ) 안에 알맞은 용어를 쓰시오.\n- 소프트웨어 개발에 있어 기능을 분할하고 추상화하여 성능을 향상시키고 유지보수를 효과적으로 하기 위한 공통 컴포넌트 구현 기법이다.\n- 인터페이스 모듈, 데이터베이스 접근 모듈 등 필요한 공통 모듈을 구현한다.\n- 모듈 간의 (   1.   ) 은/는 줄이고, (   2 .  ) 은/는 높은 공통 모듈 구현을 권한하고 있다.",
      "answer": "1. 결합도 2. 응집도",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-12",
      "number": 12,
      "question": "12. 다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.\n#include <stdio.h>\n void main(){\n \tint i,j;\n    int temp;\n    int a[5] = {75,95,85,100,50};\n    \n    for(i=0; i<4; i++){\n    \tfor(j=0; j<4-i; j++){\n        \tif(a[j] > a[j+1]){\n            \ttemp=a[j];\n                a[j] = a[j+1];\n                a[j+1] = temp;\n             }\n           }\n        }\n        \n       \tfor(i=0; i<5; i++){\n        \tprintf(\"%d\", a[i]);\n        }\n  }",
      "answer": "50758595100",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-13",
      "number": 13,
      "question": "13. 다음은 자바 소스코드이다. 출력 결과를 쓰시오.\npublic class good {\n\tpublic static void main(String[] args){\n    \tint i;\n        int[] a = {0,1,2,3};\n        for(i=0; i<4; i++){\n        \tSystem.out.print(a[i] + \" \");\n        }\n     }\n }",
      "answer": "0 1 2 3",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-14",
      "number": 14,
      "question": "14. 다음은 자바 소스코드이다. 출력 결과를 쓰시오.\npublic class good {\n\tpublic static void main(String[] args){\n    \tint i = 3;\n        int k = 1;\n        swich (i) {\n        case 0;\n        case 1;\n        case 2;\n        case 3 k = 0;\n        case 4 k += 3;\n        case 5 k -= 10;\n        default: k--;\n        }\n        system.out.print(k);\n     }\n}",
      "answer": "-8 switch case문에 break가 없는 점을 주의하셔야 합니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-15",
      "number": 15,
      "question": "15. 다음이 설명하는 제품 패키지 릴리스 노트의 작성 항목은 무엇인가?\n[보기]\n문서 이름(릴리스 노트 이름), 제품 이름, 버전 번호, 릴리스 날짜, 참고 날짜, 노트 버전 등의 정보",
      "answer": "해더 릴리스 노트 : 개발 과정에서 정리된 릴리스 정보를 소프트웨어의 최종 사용자인 고객과 공유하기 위한 문서입니다. 릴리스 노트 항목 : 해더, 개요, 목적, 문제요약, 재현항목, 수정/개선 내용, 사용자 영향도, SW지원 영향도, 노트, 면책조항, 연락처 릴리스 노트 작성 순서 : 모듈 식별 > 릴리스 정보 확인 > 릴리스 노트 개요 작성 > 영향도 체크 > 정식 릴리스 노트 작성 > 추가 개선 항목 식별",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-16",
      "number": 16,
      "question": "16. LoC(Line of Code)가 30,000라인이고, 개발자가 5명이며, 개발자가 월평균 300라인을 개발한다. 이때 프로젝트 개발 기간과 계산식을 쓰시오.",
      "answer": "프로젝트 개발 기간 : 20개월 계산식 : (30,000라인 / 300라인) / 5명 = 20개월",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-17",
      "number": 17,
      "question": "17. 비정규화(De-Normalization)의 개념을 쓰시오",
      "answer": "정규화된 엔티티, 속성, 관계에 대해 성능 향상과 개발 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터모델링 기법",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-18",
      "number": 18,
      "question": "18. OSI 계층 중 비트를 전송하는 계층은 무엇인가?",
      "answer": "물리 계층 (Physical Layer)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-19",
      "number": 19,
      "question": "19. 애플리케이션의 성능을 측정하기 위한 지표는 무엇인가?",
      "answer": "1. 처리량 2. 응답 시간 3. 경과 시간",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-1-20",
      "number": 20,
      "question": "20. 다음은 모듈의 관계를 나타낸 다이어그램이다. fan-in  개수가 2 이상인 모듈 명칭을 쓰시오.",
      "answer": "F,H 모듈에서 화살표가 나가는 경우 팬아웃이고 모듈에서 화살표가 들어오는 경우 팬인이라고 합니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2020-2": [
    {
      "id": "2020-2-01",
      "number": 1,
      "question": "1. 정보시스템 운영 중 서버가 다운되거나 자연재해나 시스템 장애 등의 이유로 고객에게 서비스가 불가능한 경우가 종종 발생한다. 이와 같은 상황에서 비상사태 또는 업무중단 시정부터 업무가 복구되어 다시 정상 가동될때까지의 시간을 의미하는 용어가 무엇인지 쓰시오.",
      "answer": "재해 복구 시간 or RTO(Recovery Time Objective) 재해복구시점 (RPO : Recovery Point Objective) : 재해 발생시, 데이터손실을 수용 손실 허용 시점 네트워크복구시간 (RCO : Recovery Communication Objective) : 주 영업점과 DR센터 간 네트워크 복구 수준 재해복구범위(RSO : Recovery Scope Objective ) : 업무 중요도에 따른 복구 대상시스템 선정",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-02",
      "number": 2,
      "question": "2. 다음은 파이썬 코드이다. 출력 결과를 쓰시오.\na={'일본','중국','한국'}\na.add('베트남')\na.add('중국')\na.remove('일본')\na.update(['홍콩','한국','태국'])\nprint(a)",
      "answer": "{'중국','한국','베트남','홍콩','태국'}",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-03",
      "number": 3,
      "question": "3. 브라우저가 가지고 있는 XMLHttpRequest 객체를 이용해서 전체 페이지를 새로 고치지 않고도 페이지의 일부분만을 위한 데이터를 로드하는 기법이며, 하이퍼텍스트 표기 언어(HTML)만으로 어려운 다양한 작업을 웹 페이지에서 구현해 이용자가 웹 페이지와 자유롭게 상호작용할 수 있도록 하는 기술명을 쓰시오.",
      "answer": "비동기 통신 기법 or AJAX(Asynchronous JavaScript and XML)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-04",
      "number": 4,
      "question": "4. 절차보다는 사람이 중심이 되어 변화에 유연하고 신속하게 적응하면서 효율적으로 시스템을 개발할 수 있는 신속 적응적 경량 개발방법론으로, 개발 기간이 짧고 신속하며, 워터폴에 대비되는 방법론으로 최근 회사에서 각광받는 방법론은 무엇인가?",
      "answer": "애자일 방법론",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-05",
      "number": 5,
      "question": "5. 다음은 자바 코드이다. 다음 밑줄에 들어갈 키워드를 쓰시오.\nclass parent\n\tpublic void show(){\n    \tsystem.out.println(\"Parent\");\n    }\n}\n\nclass Child extends Parent{\n\tpublic void show(){\n    \tsystem.out.println(\"Child\");\n    }\n}\n\npublic class good{\n\tpublic static void main(String[] args){\n    \tParent pa = ____  Child();\n        pa.show();\n    }\n}",
      "answer": "new",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-06",
      "number": 6,
      "question": "6. 학생 테이블은 학번, 이름, 학년, 수강과목, 점수, 연락처를 속성으로 가진다. 아래 조건을 만족하는 SQL문을 작성하시오.\n1) 학생 테이블에서 3,4학년인 학번, 이름을 조회한다.\n2) IN 연산자 사용해야 한다.\n[학생]",
      "answer": "SELECT 학번, 이름 FROM 학생 WHERE 학년 IN (3,4);",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-07",
      "number": 7,
      "question": "7. 트랜잭션 Rollback에 대해 설명하시오.",
      "answer": "트랜잭션 처리 중 오류가 발생했을 때, 오류 이전의 특징 시점(SAVEPOINT, CHECKPOINT) 상태로 되돌려주는 제어어(명령문)이다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-08",
      "number": 8,
      "question": "8. 무결성과 인증을 보장하는 인증해더(AH)와 기밀성을 보장하는 암호화(ESP)를 이용한 프로토콜로 네트워크 계층(Network Layer)인 인터넷 프로토콜(IP)에 보안성을 제공해주는 표준화된 기술에 대해 쓰시오.",
      "answer": "IPSec(Internet Protocol Security)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-09",
      "number": 9,
      "question": "9. 애플리케이션을 실행하지 않고, 소스 코드에 대한 코딩 표준, 코딩 스타일, 코드 복잡도 및 남은 결함을 발견하기 위해 사용하는 도구는 무엇인지 쓰시오.",
      "answer": "정적 분석 도구",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-10",
      "number": 10,
      "question": "10. 다음 보기가 설명하는 패턴을 쓰시오. (영문 Full-Name으로 작성하시오)\n[보기]\n한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체들이 연락이 가고 자동으로 내용이 갱신되는 방법으로 일대 다의 의존성을 가지며 상호작용하는 객체 사이에서는 가능하면 느슨하게 결합하는 디자인을 사용해야 한다.",
      "answer": "Observer Pattern",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-11",
      "number": 11,
      "question": "11. Linux 운영체제 위에서 구동하며 휴대폰 전화를 비롯한 휴대용 장치를 위한 운영체제와 미들웨어, 사용자 인터페이스 그리고 표준 응용프로그램(웹 브라우저 등) 등을 포함하고 있는 소프트웨어 스택이자 리눅스 모바일 운영체제로 개발자들이 자바와 코틀린 언어로 응용 프로그램을 작성할 수 있게 했고, 컴파일 된 바이트 코드를 구동할 수 있는 런타임 라이브러리를 제공하는 운영체제는 무언인지 쓰시오.",
      "answer": "안드로이드",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-12",
      "number": 12,
      "question": "12. 학생 테이블의 name속성에 IDX_NAME 이름으로 인덱스 생성하는 SQL문을 작성하시오.",
      "answer": "CREATE INDEX IDX_NAME ON 학생(NAME);",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-13",
      "number": 13,
      "question": "13. 다음 설명 중 빈칸에 들어갈 알맞는 용어를 작성하시오.\nHTTP, HTTPS SMTP를 통해서 XML 기반의 데이터를 주고받는 프로토콜로 웹 서비스 방식에 HTTP기반의  (    ) 을/를 사용하여 송수신한다. (    ) 대신 레스트풀(RESTful) 프로토콜로 대체할 수 있다.",
      "answer": "SOAP (Simple Object Access Protocol)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-14",
      "number": 14,
      "question": "14. SQL Injection이 무엇인지 서술하시오.",
      "answer": "응용 프로그램의 보안 취약점을 이용해서 악의적인 SQL 구문을 삽입, 실행시켜서 데이터베이스의 접근을 통해 정보를 탈취하거나 조작 등의 행위를 하는 공격 기법",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-15",
      "number": 15,
      "question": "15. 사용자에게 읽기 / 쓰기 / 실행 권한을 부여하고 그룹에게는 읽기 / 실행을 부여하고 그 이외에는 실행 권한을  a.txt에 부여하는 명령어를 한줄로 작성하시오 (8진법을 사용하시오)",
      "answer": "chmod 751 a.txt",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-16",
      "number": 16,
      "question": "16. UI 설계 원칙에서 정확하고 완벽하게 사용자의 목표가 달성될 수 있도록 제작할 수 있어야 한다. 다음 빈칸에 들어갈 특징은 무엇인가?\n직관성 - 누구나 쉽게 이해하고 사용할 수 있어야 한다.\n학습성 - 누구나 쉽게 배우고 익힐 수 있어야 한다.\n유연성 - 사용자의 요구사항을 최대한 수용하며 오류를 최소화해야 한다.\n(      )  - 사용자의 목적을 정확하게 달성하여야 한다.",
      "answer": "유효성",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-17",
      "number": 17,
      "question": "17. 전 세계 오픈된 정보를 하나로 묶는 방식으로 link data와 open data의 합성어가 무엇인지 쓰시오.",
      "answer": "LOD (Linked Open Data)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-18",
      "number": 18,
      "question": "18. 다음은 데이터 모델링 절차이다. 절차에 맞도록 보기에서 찾아 채우시오.\n[보기]\n1. 물리적 데이터 모델링\n2. 개념적 데이터 모델링\n3. 논리적 데이터 모델링\n요구사항 분석 > (  1.  ) > (  2. )  > (  3.  )",
      "answer": "1. 개념적 데이터 모델링 2. 논리적 데이터 모델링 3. 물리적 데이터 모델링",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-19",
      "number": 19,
      "question": "19. 다음은 자바 코드이다. 출력 결과를 쓰시오.\nclass A{\n\tprivate int a;\n    public A(int a){\n    \tthis.a = a;\n    }\n    public void display(){\n    \tsystem.out.println(\"a=\" + a);\n    }\n}\n\nclass B extends A {\n\tpublic B(int a){\n    \tsuper(a);\n        super.display();\n    }\n}\n\n\npublic class good {\n\tpublic static void main(String[] args){\n    \tB obj = new B(10);\n    }\n}",
      "answer": "a = 10",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-2-20",
      "number": 20,
      "question": "20. 소프트웨어 개발 과정에서 변경 사항을 관리하는 기법은 (     ) 기법이라고 하며, (      ) 기법을 활용한 도구로는 CVS, SVN, Git 등이 있다. 빈칸에 알맞은 용어를 쓰시오.",
      "answer": "형상관리",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2020-3": [
    {
      "id": "2020-3-01",
      "number": 1,
      "question": "1. 리팩토링의 목적에 대하여 서술하시오.",
      "answer": "복잡한 코드의 단순화, 소스의 가독성을 통해 유지보수성 향상, 유연한 시스템, 생산성 향상, 품질 향상이 있다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-02",
      "number": 2,
      "question": "2. 다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.\n#include <stdio.h>\n\tvoid main(){\n    \tint i=0, c=0;\n        while (i<10){\n        i++;\n        c*=i;\n        }\n        printf(\"%d\",c);\n   }",
      "answer": "0 c가 0이므로 어떤수를 곱해도 0이 됩니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-03",
      "number": 3,
      "question": "3. 대표적인 내부 라우팅 프로토콜로 다익스트라 알고리즘을 이용한 대규모 네트워크에 적합한 링크 상태 라우팅 프로토콜로 불리는 라우팅 프로토콜은 무엇인가?",
      "answer": "OSPF(Open Shortest Path First) OSPF(Open Shortest Path First)의 특징 : 다익스트라 알고리즘 사용 - 다익스트라 알고리즘 사용하는 내부 라우팅 프로토콜 라우팅 메트릭 지정 - 최소, 지연, 최대 처리량 등 관리자가 라우팅 메트릭 지정 AS분할 사용 - 자치 시스템을 지역으로 나누어 라우팅을 효과적으로 관리 홉 카운트 무제한 - 홉 카운트에 제한이 없다. 라우팅 : 어떤 네트워크 안에서 통신 데이터를 보낼 때 최적의 결로를 선택하는 과정입니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-04",
      "number": 4,
      "question": "4. 형상 통제를 설명하시오.",
      "answer": "형상 항목의 버전 관리를 위해서 변경 여부와 변경 활동을 통제하는 활동 형상 관리 절차 : 형상 식별 - 형상 관리 대상을 정의 및 식별하는 활동 형상 통제 - 형상 항목의 버전 관리를 위한 형상통제위원회 운영 형상 감사 - 소프트웨어 베이스라인의 무결성 평가 형상 기록 - 소프트웨어 현상 및 변경관리에 대한 각종 수행결과를 기록",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-05",
      "number": 5,
      "question": "5. 심리학자 톰 마릴은 컴퓨터가 메세지를 전달하고, 메세지가 제대로 도착했는지 확인하며, 도착하지 않았을 경우 메세지를 재전송하는 일련의 방법을 '기술적 은어'를 뜻하는 (      )이라는 용어로 정의했다. 괄호 (    ) 안에 들어갈 용어를 쓰시오.",
      "answer": "프로토콜 프로토콜 : 서로 다른 시스템이나 기기들 간의 데이터 교환을 원할히 하기 위한 표준된 통신규약입니다. 프로토콜 기능 : 데이터 처리 기능 / 제어 기능 / 관리 기능",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-06",
      "number": 6,
      "question": "6. TCP/IP에서 오류가 발생하면 (      ) 메세지를 보내서 오류가 발생했음을 알린다. 괄호 (     )안에 들어갈 용어를 쓰시오.",
      "answer": "ICMP(Internet Control Message Protocol) ICMP : IP 패킷을 처리할 때 발생하는 문제를 알려주는 프로토콜로, 메세지 형식은 8바이트의 헤더와 가변 길이의 데이터 영역으로 분리되어 있다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-07",
      "number": 7,
      "question": "7. 다음 아래 제어 흐름 그래프가 분기 커버리지를 만족하기 위한 테스팅 순서를 쓰시오.",
      "answer": "1234561, 124567 or 1234567, 124561 결정 커버리지는 결정 포인트 내의 전체 조건식이 적어도 한 번은 참과 거짓의 결과를 수행해야 하기 때문에 첫 번째 분기문도 참, 거짓이 와야 하고, 두 번째 분기도 참, 거짓이 한 번씩 와야 한다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-08",
      "number": 8,
      "question": "8. 다음 조건을 만족하면서, 과목별 점수의 평균이 90이 상인 과목이름, 최소점수, 최대점수를 구하는 SQL문을 작성하시오.\n- 대소문자를 구분하지 않는다.\n- WHERE 구분을 사용하지 않는다.\n- GROUP BY, HAVING구문을 반드시 사용한다.\n- 세미콜론(;)은 생략 가능하다.\n- 별칭(AS)을 사용해야 한다.\n[성적]\n[결과]",
      "answer": "SELECT 과목이름, MIN(점수) AS 최소점수, MAX(점수) AS 최대점수 FROM 성적 GROUP BY 과목이름 HAVING AVG(점수) >= 90;",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-09",
      "number": 9,
      "question": "9. 학생 테이블에서 이름이 민수인 튜플을 삭제하는 SQL문을 작성하시오\n[학생]",
      "answer": "DELETE FROM 학생 WHERE 이름 = '민수';",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-10",
      "number": 10,
      "question": "10. 릴레이션 A, B가 있을 때 릴레이션 B 조건에 맞는 것들만 릴레이션 A에서 튜플을 꺼내 프로젝션하는 관계 대수의 기호는 무엇인가?",
      "answer": "&divide; 순수관계연산자는 셀렉트( &sigma; ) / 프로젝트( &pi; ) / 조인(⋈) / 디비전( &divide; ) 이 있습니다. 셀렉트 : 릴레이션에 존재하는 튜플들 중에서 특정 조건을 만족하는 튜플들의 부분집합을 구하여 새로운 릴레이션을 만듭니다. 프로젝트 : 주어진 릴레이션에서 속성 리스트에 제시된 속성 값만을 추출하여 새로운 릴레이션을 만듭니다. (단 연산 결과에 중복이 발생하면 중복이 제거됩니다.) 조인 : 공통 속성을 중심으로 2개의 릴레이션을 하나로 합쳐서 새로운 릴레이션을 만듭니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-11",
      "number": 11,
      "question": "11. 다음 중 헝가리안 표기법(Hungarian Case)에 대해서 서술하시오.",
      "answer": "헝가리안 표기법은 식별자 표기 시 접두어에 자료형을 붙이는 표기법 식별자 표기법 : 카멜 표기법 - 식별자 표기 시에 여러 단어가 이어지면 첫 단어 시작만 소문자로 표시하고, 각 단어의 첫 글자는 대문자로 지정하는 표기법 (ex : goodMan) 파스칼 표기법 - 식별자 표기 시에 여러 단어가 이어지면 각 단어의 첫 글자는 대문자로 지정하는 표기법 (ex : GoodMan) 스네이크 표기법 - 식별자 표기 시에 여러 단어가 이어지면 단어 사이에 언더 바를 넣는 표기법 (ex : good_man) 헝가리안 표기법 - 식별자 표기 시, 접두어에 자료형을 붙이는 표기법 (ex : szGoodMan (sz는 String Zero로 약자로 문자열이 없다는 표기입니다.)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-12",
      "number": 12,
      "question": "12. 테스트의 종류 중, 둥치분할 테스트, 경계값 분석 테스트 등의 종류가 있는 테스트 기법을 쓰시오.",
      "answer": "블랙박스 테스트 (명세 기반 테스트) 블랙박스 테스트는 소프트웨어가 수행할 특정 기능을 알기 위해서 각 기능이 완전히 작동되는 것을 입증하는 테스트로 기능 테스트라고 불립니다. 동치 분할 검사 : 입력 자료에 초점을 맞춰 테스트 케이스를 만들고 검사하는 방법 (= 동등 분할 기법) 경계값 분석 : 입력 자료에만 치중한 동치 분할 기법을 보완한 기법으로, 입력 조건의 중간값보다 경계값에서 오류가 발생될 확률이 높다는 점을 이용하여 입력 조건의 경계값을 테스트 케이스로 선정하여 검사하는 기법 원인-효과 그래프 검사 : 입력 데이터 간의 관계와 출력에 영향을 미치는 상황을 체계적으로 분석한 다음 효용성이 높은 테스트 케이스를 선정하여 검사하는 기법 오류 예측 검사 : 과거의 경험이나 확인자의 감각으로 테스트하는 기법으로, 다른 블랙박스 테스트 기법으로는 찾아낼 수 없는 오류를 찾아내는 일력의 보충적 검사 기법 (= 데이터 확인 검사) 비교 검사 : 여러 버전의 프로그램에 동일한 테스트 자료를 제공하여 동일한 결과가 출력되는지 테스트하는 기법",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-13",
      "number": 13,
      "question": "13. 다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.\n#include <studio.h>\nint r1(){\n\treturn 4;\n}\nint r10(){\n\treturn (30+r1());\n}\nint r100(){\n\treturn (200+r10());\n}\nint main(){\n\tprintf(\"%d\\n\", r100());\n    return 0;\n}",
      "answer": "234",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-14",
      "number": 14,
      "question": "14. DB스키마에 대해서 서술하시오.",
      "answer": "데이터베이스의 구조, 제약조건 등의 정보를 담고 있는 기본적인 구조",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-15",
      "number": 15,
      "question": "15. 다음은 자바 코드이다. 출력 결과를 쓰시오.\nabstract class vehicle{\n\tprivate String name;\n    abstract public String getName(String val);\n    public String getName(){\n    \treturn \"vehicle name:\" + name;\n    }\n\tpublic void setName(String val){\n    \tname = val;\n    }\n}\n\nclass Car extends Vehicle{\n\tpublic Car(String val){\n    \tsetName(val);\n   }\npublic String getName(String val){\n\treturn \"Car name : \" + val;\n   }\npublic String getName(byte val[]){\n\treturn \"Car name : \" + val;\n   }\n}\n\npublic class good {\n\tpublic Static void main(String[] args){\n    Vehicle obj = new Car(\"Spark\");\n    System.out.print(obj.getName());\n    }\n}",
      "answer": "Vehicle name : Spark",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-16",
      "number": 16,
      "question": "16. UI 설계 원칙 중 직관성에 대해서 쓰시오.",
      "answer": "누구나 쉽게 이해하고, 쉽게 사용할 수 있어야 하고,쉬운 검색, 쉬운 사용성, 일관성이 부특성을 가지고 있는 UI설계 원칙",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-17",
      "number": 17,
      "question": "17. 다음은 자바 코드이다. 출력 결과를 쓰시오.\npublic class good {\n\tpublic static void main(String[] args){\n    int i=0;\n    int sum=0;\n    while (i<10){\n    \ti++;\n        if(i%2 ==1)\n        \tcontinue;\n        sum += i;\n     }\n     System.out.println(sum);\n   }\n}",
      "answer": "30 2+4+6+8+10=30이 됩니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-18",
      "number": 18,
      "question": "18. EAI 유형에는 메세지 버스(Message bus), 하이브리드(Hybrid), (   1.  ), (   2.   ) 4가지가 있다.",
      "answer": "1. 포인트 투 포인트(Point-to-point) 2. 허브 앤 스포크(Hub & Spoke) EAI (기업 내외부 정보시스템 통합) EAI의 유형 (데이터 전송 모델) 메세지 버스 : 애플리케이션과 미들웨어간 웹서비스 인터페이스를 통해 전송 하이브리드 : 허브앤스포크와 메세지버스 혼합 포인트 투 포인트 : 1:1방식으로 애플리케이션 통합 수행 허브 앤 스포크 : 단일 접점인 허브시스템을 통해 데이터를 전송하는 중앙 집중 방식",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-19",
      "number": 19,
      "question": "19. C++에서 생성자란 무엇인지 쓰시오.",
      "answer": "해당 클래스의 객체가 생성될 때 자동으로 호출되는 특수한 종류의 메서드",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-3-20",
      "number": 20,
      "question": "20. 학생 테이블에 주소 속성을 추가하는 SQL문을 작성하시오.\n(    1.   ) TABLE 학생   (   2.  ) 주소 VARCHAR(20);",
      "answer": "1.ALTER 2.ADD",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ],
  "2020-4": [
    {
      "id": "2020-4-01",
      "number": 1,
      "question": "1. 현재 IPv4의 확장형으로 IPv4가 가지고 있는 주소 고갈, 보안성, 이동성 지원 등의 문제점을 해결하기 위해서 개발된 128비트 주소체계를 갖는 차세대 인터넷 프로토콜은 무엇인가?",
      "answer": "IPv6",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-02",
      "number": 2,
      "question": "2. 목적에 따른 디자인 패턴의 유형에는 생성, 구조, (  ) 이/가 있다. 괄호 (   ) 안에 알맞는 유형을 쓰시오.",
      "answer": "행위 디자인 패턴 목적 : 생성 / 구조 / 행위 범위 : 클래스 / 객체",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-03",
      "number": 3,
      "question": "3. 다음은 판매와 관련된 다이어그램이다. 해당 다이어그램의 명칭을 쓰시오.",
      "answer": "패키지 다이어그램 UML(Unified Modeling Laguage)다이어그램 : UML 다이어그램은 통합 모델링 언어를 사용하여 시스템 상호작용, 업무흐름, 시스템 구조, 컴포넌스 관계 등을 그린 도면입니다. 사용이유는 프로그래밍을 단순화 시켜 표현하여 의사소통하기 좋고, 대규모 프로젝트 구조의 로드맵을 만들거나 개발을 위한 시스템 구축에 기본을 마련합니다. UML 다이어그램의 종류 : 클래스 다이어그램 / 객체 다이어그램 / 유스케이스 다이어그램 / 상태 다이어그램 / 시퀸스 다이어그램 / 활동 다이어그램 / 통신 다이어그램 / 컴포넌트 다이어그램 / 배포 다이어그램 / 복합체 구조 다이어그램 / 교류 개요 다이어그램 / 타이밍 다이어그램 / 패키지 다이어그램 패키지 다이어그램은 UML 다이어그램의 안에 속하는 다이어그램입니다. 폴더 모양의 패키지와 점섬으로 표시된 의존관계, import라는 스테레오 타입 표기를 통해 패키지 다이어그램인지 파악합니다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-04",
      "number": 4,
      "question": "4. 데이터베이스의 회복(Recovery) 기법 중 Rollback 시 Redo, Undo가 모두 실행되는 트랜잭션 처리법으로 트랜잭션 수행 중 갱신 결과를 바로 DB에 반영하는 기법은 무엇인가?",
      "answer": "즉각 갱신 회복 기법 회복 기법 종류 : 로그 기반 회복 기법 - 지연 갱신 회복 기법 / 즉각 갱신 회복 기법 체크 포인트 회복 기법 그림자 페이징 회복 기법 미디어 회복 기법 지연 갱신 회복 기법 : 트랜잭션의 부분 완료 상태에선 변경 내용을 로그 파일에만 저장 체크 포인트 회복 기법 : 장애 발생 시, 검사점(checkpoint) 이전에 처리된 트랜잭션은 회복에서 제외하고 검사점 이후에 처리된 트랜잭션은 회복 작업 수행 그림자 페이징 회복 기법 : 트랜잭션이 실행되는 메모리상의 current page table과 하드디스크의 shadow page table이용 미디어 회복 기법 : 디스크와 같은 비휘발성 저장 장치가 손상되는 장애 발생을 대비한 회복 기법",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-05",
      "number": 5,
      "question": "5. 다음은 n이 10일 때, 10을 2진수로 변환하는 자바 소스 코드이다. 1,2에 알맞는 값을 적으시오.\n[출력결과] : 00001010\nclass good {\n\tpublic static void main (String[] args) {\n    \tint[]a = new int[8];\n        int i=0; int n=10;\n        while (  1.  ) {\n        \ta[i++] = (  2.  );\n            n /= 2;\n        }\n        for(i=7; i>=0; i--){\n         System.out.print(a[i]);\n        }\n     }\n  }",
      "answer": "1. n > 0 or n >=1 or i < 8 or i <= 7 2. n%2 or n&1",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-06",
      "number": 6,
      "question": "6. 다음은 자바 소스 코드이다. 출력 결과를 보고 , 1,2에 알맞는 값을 적으시오.\n[출력 결과]\n1 4 7 10 13\n2 5 8 11 14\n3 6 9 12 15\npublic class good {\n\tpublic static void main(String[] args) {\n    \tint[][]a = new int[(1.)][(2.)];\n        for(int i = 0; i <3; i++){\n        for(int j=0; j < 5; j++){\n        a[i][j] = j*3+(i+1);\n        \tSystem.out.print(a[i][j]+\"\");\n         }\n         System.out.println();\n       }\n     }\n   }",
      "answer": "1. 3 2. 5",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-07",
      "number": 7,
      "question": "7. 스니핑(Sniffing)에 대하여 서술하시오.",
      "answer": "암호화되지 않은 패킷들을 수집하여 순서대로 재조합 후 ID, PW와 같은 중요한 정보를 유출하기 위한 수동적인 형태의 공격 네트워크 공격 기법 스니핑 / 네트워크 스캐너, 스니퍼 / 패스워드 크래킹 / IP 스푸핑 / ARP 스푸핑 / ICMP Redirect 공격 / 트로이 목마 IP스푸핑 : 발신지 IP나 목적지 IP를 위조하여 공격하는 기법 ARP스푸핑 : MAC 주소를 위조하여 랜상에서의 통신 흐름을 왜곡시키는 공격 기법 트로이 목마 : 사용자가 원하는 무언가로 변장해 시스템 방어망을 뚫고 들어가는 공격 기법",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-08",
      "number": 8,
      "question": "8. IP 패킷에서 외부의 공인 IP주소와 포트 주소에 해당하는 내부 IP주소를 재기록하여 라우터를 통해 네트워크 트래픽을 주고받는 기술은 무엇인가?",
      "answer": "NAT(Network Address Transformation)",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-09",
      "number": 9,
      "question": "9. 다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.\nlol = [[1,2,3],[4,5],[6,7,8,9]]\nprint(lol[0])\nprint(lol[2][1])\n\tfor sub in lol:\n   \tfor item in sub:\n        \tprint(item, end = '')\n      \tprint()",
      "answer": "[1,2,3] 7 123 45 6789",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-10",
      "number": 10,
      "question": "10. 분산 컴퓨팅 기술 기반의 데이터 위변조 방지 기술로 P2P방식을 기반으로 하여 소규모 데이터들이 연결되어 형성된 '블록'이라는 분산 데이터 저장 환경에 관리 대상 데이터를 저장함으로써 누구도 임의로 수정할 수 없고 누구나 변경의 결과를 열람할 수 있게끔 만드는 기술은 무엇인가?",
      "answer": "블록체인",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-11",
      "number": 11,
      "question": "11. 오픈 소스 기반으로 한 분산 컴퓨팅 플랫폼으로, 일반 PC급 컴퓨터들로 가상화된 대형 스토리지를 형성하고 그 안에 보관된 거대한 데이터 세트를 병렬로 처리할 수 있도록 개발된 자바 소프트웨어 프레임워크로 구글, 야후 등에 적용한 기술은 무엇인가?",
      "answer": "하둡",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-12",
      "number": 12,
      "question": "12. 이상 현상의 종류 3가지를 쓰시오.",
      "answer": "삽 입 이상, 삭제 이상, 갱신 이상 데이터베이스의 이상현상 3가지",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-13",
      "number": 13,
      "question": "13. 다음은 프로세스 상태 전이도이다. 1,2,3에 알맞은 상태를 쓰시오.",
      "answer": "1. 준비 2. 실행 3. 대기",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-14",
      "number": 14,
      "question": "14. 테스트 오라클 중 특정한 몇 개의 입력값에 대해서만 기대하는 결과를 제공해주는 오라클은 무엇인가?",
      "answer": "샘플링 오라클 테스트 오라클은 테스트의 결과가 참인지 거짓인지를 판단하기 위해서 사전에 정의된 참값을 입력하여 비교하는 기법 테스트 오라클 유형 : 참 오라클 - 모든 입력값에 대하여 기대하는 결과를 생성하여 오류 검출 샘플링 오라클 - 특정한 몇 개의 입력값에 대해서만 기대하는 결과를 제공 휴리스틱 오라클 - 샘플링 오라클을 개선 / 특정 입력값에 올바른 결과를 제공하고 나머지 값은 휴리스틱(추정)으로 처리 일관성 검사 오라클 - 애플리케이션 변경이 있을 때, 수행 전과 후의 결괏값이 동일한지 확인",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-15",
      "number": 15,
      "question": "15. 점수에 따른 성적 부여가 잘 되었는지 테스트하고자 한다. 아래에 알맞는 테스트 기법은 무엇인가?\n[테스트 값] : -10점 / 30점 / 65점 / 75점 / 85점 / 95점 / 110점",
      "answer": "동등분할 테스트 동등분할 테스트는 입력 데이터의 영역을 유사한 도메인별로 유효 값 / 무효 값을 그룹핑하여 대푯값 테스트 케이스를 도출하여 테스트하는 기법 (블랙박스 테스트) 데이터 영역에 가까운 값이 아닌 영역 내에 있는 일반 값들로 테스트한다.",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-16",
      "number": 16,
      "question": "16. 다음 조건을 만족하면서 학과별로 튜플 수가 얼마인지 구하는 SQL문을 작성하시오.\n- 대소문자를 구분하지 않는다.\n- WHERE 구문을 사용하지 않는다.\n- GROUP BY 를 사용한다.\n- 세미콜론(;)은 생략 가능하다.\n- 별칭(AS)을 사용해야 한다. (별칭 사용 시 별칭은 작은 따옴표를 써야 함)\n- 집계 함수를 사용해야 한다.\n[학생]\n[결과]",
      "answer": "SELECT 학과, COUNT(학과) AS 학과별튜플수 FROM 학생 GROUP BY 학과;",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-17",
      "number": 17,
      "question": "17. 데니스 리치와 켄톰슨 등이 함께 벨 연구소를 통해 만든 운영체제이며, 90% 이상 C언어로 구현되어 있고, 시스템 프로그램이 모듈화되어 있어서 다른 하드웨어 기종으로 쉽게 이식 가능하며 계층적 트리 구조를 가짐으로써 통합적인 파일 관리가 용이한 운영체제는 무엇인가?",
      "answer": "유닉스 유닉스 계열 운영체제의 특징 : 대화식 운영체제 기능 제공 / 다중 작업 기능 제공 / 다중 사용자 기능 제공 / 이식성 제공 / 계층적 트리 구조 파일 시스템 제공",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-18",
      "number": 18,
      "question": "18. 다음은 C언어 소스 코드이다. 출력값을 쓰시오.\n#include <stdio.h>\n\nvoid main(){\n\tchar *p = \"KOREA\"\n    printf(\"%s\\n\" , p);\n    printf(\"%s\\n\" , p+3);\n    printf(\"%c\\n\" , *p);\n    printf(\"%c\\n\" , *(p+3));\n    printf(\"%c\\n\" , *p+2);",
      "answer": "KOREA EA K E M",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-19",
      "number": 19,
      "question": "19. 다음은 자바 소스 코드이다. 출력 결과를 쓰시오.\nclass parent{\n\tpublic int compute(int num){\n    \tif(num <=1) return num;\n        return compute(num-1) + compute(num-2);\n    }\n }\n \n class Child extends parent {\n \tpublic int compute(int num){\n    \tif(num<=1) return num;\n        \treturn compute(num-1) + compute(num-3);\n        }\n   }\n   \n  class good{\n  \tpublic static void main (String[] args){\n    parent obj = new Child();\n    System.out.print(obj.compute(4));\n   }\n }",
      "answer": "1",
      "explanation": null,
      "code": null,
      "type": "단답형"
    },
    {
      "id": "2020-4-20",
      "number": 20,
      "question": "20. 정보보안에서 가용성(Availablility) 에 대하여 서술하시오.",
      "answer": "권한을 가진 사용자가 애플리케이션이 원하는 서비스를 지속 사용할 수 있도록 보장하는 특성 SW개발 보안의 3개 요소 : 기밀성 / 무결성 / 가용성 기밀성 : 인가되지 않은 개인 혹은 시스템 접근에 따라 정보 공개 및 노출을 차단하는 특성 무결성 : 정당한 방법을 따르지 않고선 데이터가 변경될 수 없으며, 데이터의 정확성 및 완정성과 고의/악의로 변경되거나 훼손 또는 파괴되지 않음을 보장하는 특성",
      "explanation": null,
      "code": null,
      "type": "단답형"
    }
  ]
};

export function getSessionList() {
  return SESSIONS;
}

export function getSessionQuestions(year, round) {
  return QUESTIONS[`${year}-${round}`] || [];
}
