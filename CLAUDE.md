# CLAUDE.md — AI Context for React Task Manager

This file gives AI assistants the context needed to understand, navigate, and contribute to this codebase effectively.

## Project Overview

A priority-based task management single-page application. Users can:
- Create tasks with a title and one of three priority levels (low, medium, high)
- Mark tasks complete or delete them
- Filter the list by All / Active / Completed status
- Rely on localStorage to persist their task list across browser sessions

## Architecture

### Component Tree

```
App
├── AddTaskForm      (title input + priority select + submit button)
├── FilterBar        (All / Active / Completed filter tabs)
└── TaskList
    └── TaskItem[]   (checkbox, title, priority badge, delete button)
```

### Data Flow

All state lives in the `useTasks` hook (src/hooks/useTasks.ts):
- A `useReducer` manages the task array with ADD / TOGGLE / DELETE / LOAD actions.
- A `useEffect` keeps localStorage in sync whenever the task array changes.
- A `useMemo` derives `filteredTasks` from the current `filter` value.
- `App.tsx` calls `useTasks()` and passes the returned values down as props.

No external state library (Redux, Zustand, etc.) is used — the built-in React hooks are sufficient for this scope.

## Key Design Decisions

| Decision | Rationale |
|---|---|
| `useReducer` for task state | Predictable state transitions; easy to add new action types later |
| CSS Modules | Zero-runtime scoped styles; no naming conflicts; compatible with Vite |
| localStorage via generic hook | `useLocalStorage` is reusable for any serialisable value |
| Vitest + RTL | Native ESM support; fast; works without extra Babel config in a Vite project |
| GitHub Actions deploy | Zero-cost hosting on GitHub Pages; CD is triggered only after tests pass |

## Development Commands

```bash
npm run dev          # Vite dev server at http://localhost:5173
npm run build        # TypeScript compile + Vite production build → dist/
npm run preview      # Serve the dist/ folder locally
npm test             # Vitest in watch mode
npm run test:run     # Vitest single run (used in CI)
npm run coverage     # Vitest run + V8 coverage report
```

## File Structure

```
D:/cursor_Open project/
├── .github/
│   └── workflows/
│       └── ci.yml           # CI (test + build) and CD (GitHub Pages deploy)
├── src/
│   ├── __tests__/           # Unit tests (co-located by concern, not by file)
│   │   ├── AddTaskForm.test.tsx
│   │   ├── TaskItem.test.tsx
│   │   ├── useLocalStorage.test.ts
│   │   └── useTasks.test.ts
│   ├── components/
│   │   ├── AddTaskForm.tsx / .module.css
│   │   ├── FilterBar.tsx    / .module.css
│   │   ├── TaskItem.tsx     / .module.css
│   │   └── TaskList.tsx     / .module.css
│   ├── hooks/
│   │   ├── useTasks.ts      # Primary state hook
│   │   └── useLocalStorage.ts
│   ├── test/
│   │   └── setup.ts         # @testing-library/jest-dom matchers
│   ├── types/
│   │   └── task.ts          # Task, Priority, FilterStatus
│   ├── App.tsx
│   ├── App.module.css
│   ├── index.css            # Global resets and CSS variables
│   └── main.tsx             # React DOM entry point
├── CLAUDE.md
├── README.md
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Testing Approach

- **Framework:** Vitest with jsdom environment (configured in `vite.config.ts`)
- **Setup:** `src/test/setup.ts` imports `@testing-library/jest-dom` for DOM matchers
- **Hook tests:** `renderHook` + `act` from `@testing-library/react` — no mocking of localStorage (jsdom provides it)
- **Component tests:** `render` + `screen` queries + `userEvent` for realistic interactions
- **What is tested:** addTask, toggleTask, deleteTask, filter logic, form submit/clear/validation, checkbox state, delete button

## Known Limitations & Future Work

- No backend — all data is lost if the user clears their browser storage
- No drag-and-drop reordering
- No due dates or reminders
- No multi-user or sync support
- Priority ordering within the list is not enforced (tasks appear in insertion order)
- Test coverage for `FilterBar` and `TaskList` components could be added
