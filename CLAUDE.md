# CLAUDE.md — AI Context for GC MediAI QA Task Manager

This file gives AI assistants the context needed to understand, navigate, and contribute to this codebase effectively.

## Project Overview

A medical QA priority-based task management SPA built for GC MediAI. Users can:
- Create tasks with title, severity priority (Critical / Major / Minor), due date, and assignee
- Edit tasks inline (title, priority, due date, assignee)
- Mark tasks complete or delete them
- Filter the list by All / Active / Completed
- Sort tasks by insertion order, priority (Critical first), or due date
- Clear all completed tasks with one button
- Get AI-powered priority suggestions via the Claude API (claude-haiku-4-5-20251001)
- View a stats card (total, completed, critical count, overdue count, completion %)
- Rely on localStorage to persist tasks, filter, and sort preference across sessions

## Architecture

### Component Tree

```
App
├── AddTaskForm      (title + severity select + AI suggest + assignee + due date + submit)
├── toolbar row
│   ├── FilterBar    (All / Active / Completed filter tabs)
│   ├── sort select  (등록순 / 우선순위순 / 마감일순)
│   └── clearBtn     (완료 삭제 — shown only when completedCount > 0)
└── TaskList
    └── TaskItem[]   (checkbox · title · meta · badges · edit btn · delete btn)
                      └── inline edit form (when isEditing === true)
```

### Data Flow

All state lives in the `useTasks` hook (`src/hooks/useTasks.ts`):
- A `useReducer` manages the task array with ADD / TOGGLE / DELETE / EDIT / CLEAR_COMPLETED / LOAD actions.
- A `useEffect` keeps localStorage in sync whenever the task array changes.
- `sortTasks()` is a pure helper that is exported separately for unit testing.
- `App.tsx` calls `useTasks()` and passes the returned values down as props.

No external state library (Redux, Zustand, etc.) is used — the built-in React hooks are sufficient.

## Key Types

```ts
// src/types/task.ts
export type Priority     = "minor" | "major" | "critical"
export type FilterStatus = "all" | "active" | "completed"
export type SortOrder    = "default" | "priority" | "dueDate"

export interface Task {
  id: string
  title: string
  priority: Priority
  completed: boolean
  createdAt: number
  dueDate?: string    // ISO date string "YYYY-MM-DD"
  assignee?: string
}
```

## Key Design Decisions

| Decision | Rationale |
|---|---|
| `useReducer` for task state | Predictable state transitions; easy to add new action types later |
| Exported `reducer` + `sortTasks` | Enables unit testing of pure logic without rendering |
| CSS Modules | Zero-runtime scoped styles; no naming conflicts; compatible with Vite |
| localStorage via generic `useLocalStorage` hook | Reusable for any serialisable value |
| Vitest + RTL | Native ESM support; fast; works without extra Babel config in a Vite project |
| Claude API in browser | `anthropic-dangerous-request-header: true` bypasses CORS for local dev; key stored in `gc-ai-key` localStorage entry |
| Inline edit on TaskItem | No modal needed; keeps the UX lightweight |

## Development Commands

```bash
npm run dev          # Vite dev server at http://localhost:5173
npm run build        # TypeScript compile + Vite production build → dist/
npm run preview      # Serve the dist/ folder locally
npm test             # Vitest in watch mode
npm run test:run     # Vitest single run
npm run coverage     # Vitest run + V8 coverage report
```

## File Structure

```
D:/cursor_Open project/
├── src/
│   ├── __tests__/
│   │   ├── AddTaskForm.test.tsx    # form submit, validation, AI button
│   │   ├── FilterBar.test.tsx      # button rendering, aria-pressed, onChange
│   │   ├── TaskItem.test.tsx       # render, toggle, delete, edit flow, cancel
│   │   ├── TaskList.test.tsx       # empty state, task list rendering
│   │   ├── useLocalStorage.test.ts
│   │   └── useTasks.test.ts        # add/toggle/delete/edit/clearCompleted + sortTasks
│   ├── components/
│   │   ├── AddTaskForm.tsx / .module.css   # two-row form + AI suggest
│   │   ├── FilterBar.tsx  / .module.css   # All / Active / Completed tabs
│   │   ├── TaskItem.tsx   / .module.css   # display + inline edit mode
│   │   └── TaskList.tsx   / .module.css   # list or empty state
│   ├── hooks/
│   │   ├── useTasks.ts          # primary state hook (reducer, sortTasks exported)
│   │   └── useLocalStorage.ts
│   ├── types/
│   │   └── task.ts              # Task, Priority, FilterStatus, SortOrder
│   ├── App.tsx                  # root: stats card + toolbar + form + list
│   ├── App.module.css
│   ├── index.css                # global resets and CSS variables
│   └── main.tsx
├── CLAUDE.md
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Testing Approach

- **Framework:** Vitest with jsdom environment (configured in `vite.config.ts`)
- **Setup:** `src/test/setup.ts` imports `@testing-library/jest-dom`
- **Hook tests:** `renderHook` + `act`; also tests pure `reducer` and `sortTasks` functions directly
- **Component tests:** `render` + `screen` + `userEvent`
- **Coverage:** ~72% statements; FilterBar and TaskList at 100%

## AI Integration

The "🤖 AI 제안" button in `AddTaskForm` calls the Anthropic API directly from the browser:
- Model: `claude-haiku-4-5-20251001`
- Prompt: asks Claude to classify the task as `critical | major | minor` with a one-line reason in JSON
- API key: prompted on first use, stored in `localStorage["gc-ai-key"]`
- Header: `anthropic-dangerous-request-header: true` (required for browser-side fetch)

## Known Limitations

- No backend — data is lost if the user clears browser storage
- AI API key is stored in plaintext in localStorage (acceptable for local/demo use)
- No drag-and-drop reordering
- No multi-user or sync support
