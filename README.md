# React Task Manager

우선순위 기반 할 일 관리 앱 — React + TypeScript + Vite

---

## 주요 기능

- 할 일 추가 (제목 + 우선순위: 낮음 / 보통 / 높음)
- 상태별 필터링: 전체 / 진행 중 / 완료
- localStorage 자동 저장 — 새로고침 후에도 유지
- 애니메이션 그라데이션 + 글래스모피즘 UI
- hooks 및 컴포넌트 단위 테스트 포함

## 기술 스택

| 기술 | 역할 |
|---|---|
| React 18 | UI 라이브러리 |
| TypeScript | 타입 안전성 |
| Vite | 빌드 도구 및 개발 서버 |
| CSS Modules | 컴포넌트 스코프 스타일 |
| Vitest | 단위 테스트 실행기 |
| @testing-library/react | 컴포넌트 테스트 유틸 |

## 시작하기

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 테스트 실행 (감시 모드)
npm test

# 테스트 1회 실행
npm run test:run

# 커버리지 리포트 생성
npm run coverage

# 프로덕션 빌드
npm run build
```

## 프로젝트 구조

```
src/
  components/
    AddTaskForm.tsx     # 폼: 제목 입력 + 우선순위 선택 + 제출
    FilterBar.tsx       # 필터 네비게이션: 전체 / 진행 중 / 완료
    TaskItem.tsx        # 단일 할 일: 체크박스, 제목, 뱃지, 삭제 버튼
    TaskList.tsx        # TaskItem 목록 렌더링
  hooks/
    useTasks.ts         # 메인 상태 훅: useReducer + localStorage 동기화
    useLocalStorage.ts  # 범용 localStorage 훅
  types/
    task.ts             # Task, Priority, FilterStatus 타입 정의
  __tests__/            # hooks 및 컴포넌트 단위 테스트
  App.tsx               # 루트 컴포넌트
```

## 라이선스

MIT
