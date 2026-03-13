import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TaskItem } from '../components/TaskItem'
import { Task } from '../types/task'

const mockTask: Task = {
  id: '1',
  title: 'Test task',
  priority: 'critical',
  completed: false,
  createdAt: Date.now(),
}

describe('TaskItem', () => {
  it('renders task title and priority badge', () => {
    render(<TaskItem task={mockTask} onToggle={vi.fn()} onDelete={vi.fn()} onEdit={vi.fn()} />)
    expect(screen.getByText('Test task')).toBeInTheDocument()
    expect(screen.getByText('Critical')).toBeInTheDocument()
  })

  it('calls onToggle when checkbox clicked', async () => {
    const onToggle = vi.fn()
    render(<TaskItem task={mockTask} onToggle={onToggle} onDelete={vi.fn()} onEdit={vi.fn()} />)
    await userEvent.click(screen.getByRole('checkbox'))
    expect(onToggle).toHaveBeenCalledWith('1')
  })

  it('calls onDelete when delete button clicked', async () => {
    const onDelete = vi.fn()
    render(<TaskItem task={mockTask} onToggle={vi.fn()} onDelete={onDelete} onEdit={vi.fn()} />)
    await userEvent.click(screen.getByRole('button', { name: /삭제/ }))
    expect(onDelete).toHaveBeenCalledWith('1')
  })

  it('shows checkbox as checked when task is completed', () => {
    render(<TaskItem task={{ ...mockTask, completed: true }} onToggle={vi.fn()} onDelete={vi.fn()} onEdit={vi.fn()} />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('renders edit button', () => {
    render(<TaskItem task={mockTask} onToggle={vi.fn()} onDelete={vi.fn()} onEdit={vi.fn()} />)
    expect(screen.getByRole('button', { name: /편집/ })).toBeInTheDocument()
  })

  it('shows edit form when edit button is clicked', async () => {
    render(<TaskItem task={mockTask} onToggle={vi.fn()} onDelete={vi.fn()} onEdit={vi.fn()} />)
    await userEvent.click(screen.getByRole('button', { name: /편집/ }))
    expect(screen.getByRole('textbox', { name: /제목 편집/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '저장' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '취소' })).toBeInTheDocument()
  })

  it('calls onEdit with updated values on save', async () => {
    const onEdit = vi.fn()
    render(<TaskItem task={mockTask} onToggle={vi.fn()} onDelete={vi.fn()} onEdit={onEdit} />)
    await userEvent.click(screen.getByRole('button', { name: /편집/ }))
    const titleInput = screen.getByRole('textbox', { name: /제목 편집/ })
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'Updated title')
    await userEvent.click(screen.getByRole('button', { name: '저장' }))
    expect(onEdit).toHaveBeenCalledWith('1', 'Updated title', 'critical', undefined, undefined)
  })

  it('cancels edit and restores original title', async () => {
    render(<TaskItem task={mockTask} onToggle={vi.fn()} onDelete={vi.fn()} onEdit={vi.fn()} />)
    await userEvent.click(screen.getByRole('button', { name: /편집/ }))
    const titleInput = screen.getByRole('textbox', { name: /제목 편집/ })
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'Changed')
    await userEvent.click(screen.getByRole('button', { name: '취소' }))
    expect(screen.getByText('Test task')).toBeInTheDocument()
  })

  it('renders assignee and dueDate when provided', () => {
    const task = { ...mockTask, assignee: '홍길동', dueDate: '2026-12-31' }
    render(<TaskItem task={task} onToggle={vi.fn()} onDelete={vi.fn()} onEdit={vi.fn()} />)
    expect(screen.getByText(/홍길동/)).toBeInTheDocument()
    expect(screen.getByText(/2026-12-31/)).toBeInTheDocument()
  })
})
