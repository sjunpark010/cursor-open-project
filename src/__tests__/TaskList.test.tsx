import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TaskList } from '../components/TaskList'
import { Task } from '../types/task'

const makeTasks = (...overrides: Partial<Task>[]): Task[] =>
  overrides.map((o, i) => ({
    id: String(i + 1),
    title: `Task ${i + 1}`,
    priority: 'major' as const,
    completed: false,
    createdAt: Date.now(),
    ...o,
  }))

const noop = vi.fn()

describe('TaskList', () => {
  it('renders empty state when task list is empty', () => {
    render(<TaskList tasks={[]} onToggle={noop} onDelete={noop} onEdit={noop} />)
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText('등록된 태스크가 없습니다.')).toBeInTheDocument()
  })

  it('renders a list item for each task', () => {
    const tasks = makeTasks({ title: 'Alpha' }, { title: 'Beta' }, { title: 'Gamma' })
    render(<TaskList tasks={tasks} onToggle={noop} onDelete={noop} onEdit={noop} />)
    expect(screen.getByText('Alpha')).toBeInTheDocument()
    expect(screen.getByText('Beta')).toBeInTheDocument()
    expect(screen.getByText('Gamma')).toBeInTheDocument()
  })

  it('does not render empty state when tasks exist', () => {
    const tasks = makeTasks({ title: 'Some task' })
    render(<TaskList tasks={tasks} onToggle={noop} onDelete={noop} onEdit={noop} />)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('renders tasks inside a list element', () => {
    const tasks = makeTasks({ title: 'Item' })
    render(<TaskList tasks={tasks} onToggle={noop} onDelete={noop} onEdit={noop} />)
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(1)
  })
})
