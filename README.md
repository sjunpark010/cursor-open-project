# React Task Manager

![CI](https://github.com/sjunpark010/cursor-open-project/actions/workflows/ci.yml/badge.svg)

A priority-based task management app built with React and TypeScript, featuring task filtering and local persistence via localStorage.

**Live Demo:** https://sjunpark010.github.io/cursor-open-project/

## Features

- Add tasks with a title and priority level (low / medium / high)
- Filter tasks by status: All, Active, or Completed
- Tasks are persisted in localStorage — they survive page refreshes
- Responsive glassmorphism UI with animated gradient background
- Full unit test coverage for hooks and components

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| TypeScript | Type safety |
| Vite | Build tool and dev server |
| CSS Modules | Scoped component styles |
| Vitest | Unit test runner |
| @testing-library/react | Component testing utilities |
| GitHub Actions | CI pipeline and deployment |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests (watch mode)
npm test

# Run tests once
npm run test:run

# Generate coverage report
npm run coverage

# Build for production
npm run build
```

## Project Structure

```
src/
  components/
    AddTaskForm.tsx     # Form: title input + priority select + submit
    FilterBar.tsx       # Navigation: All / Active / Completed
    TaskItem.tsx        # Single task row: checkbox, title, badge, delete
    TaskList.tsx        # Renders a list of TaskItem components
  hooks/
    useTasks.ts         # Main state hook: useReducer + localStorage sync
    useLocalStorage.ts  # Generic localStorage hook
  types/
    task.ts             # Task, Priority, FilterStatus type definitions
  __tests__/            # Vitest unit tests for hooks and components
  test/
    setup.ts            # @testing-library/jest-dom global setup
  App.tsx               # Root component — wires everything together
```

## CI/CD

Every push to `master` or `main`:
1. Installs dependencies with `npm ci`
2. Runs the full test suite with `npm run test:run`
3. Builds the project with `npm run build`
4. Deploys the `dist/` folder to GitHub Pages automatically

Pull requests trigger the test + build steps but do not deploy.

## License

MIT
