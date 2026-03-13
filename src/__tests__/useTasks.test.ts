import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTasks, reducer, sortTasks } from '../hooks/useTasks'
import { Task } from '../types/task'

describe('useTasks', () => {
  beforeEach(() => localStorage.clear())

  it('starts with empty task list', () => {
    const { result } = renderHook(() => useTasks())
    expect(result.current.tasks).toHaveLength(0)
  })

  it('adds a task', () => {
    const { result } = renderHook(() => useTasks())
    act(() => result.current.addTask('Write tests', 'critical'))
    expect(result.current.tasks).toHaveLength(1)
    expect(result.current.tasks[0].title).toBe('Write tests')
    expect(result.current.tasks[0].priority).toBe('critical')
    expect(result.current.tasks[0].completed).toBe(false)
  })

  it('toggles a task', () => {
    const { result } = renderHook(() => useTasks())
    act(() => result.current.addTask('Toggle me', 'major'))
    const id = result.current.tasks[0].id
    act(() => result.current.toggleTask(id))
    expect(result.current.tasks[0].completed).toBe(true)
    act(() => result.current.toggleTask(id))
    expect(result.current.tasks[0].completed).toBe(false)
  })

  it('deletes a task', () => {
    const { result } = renderHook(() => useTasks())
    act(() => result.current.addTask('Delete me', 'minor'))
    const id = result.current.tasks[0].id
    act(() => result.current.deleteTask(id))
    expect(result.current.tasks).toHaveLength(0)
  })

  it('edits a task title and priority', () => {
    const { result } = renderHook(() => useTasks())
    act(() => result.current.addTask('Old title', 'minor'))
    const id = result.current.tasks[0].id
    act(() => result.current.editTask(id, 'New title', 'critical', '2026-12-31', '홍길동'))
    expect(result.current.tasks[0].title).toBe('New title')
    expect(result.current.tasks[0].priority).toBe('critical')
    expect(result.current.tasks[0].dueDate).toBe('2026-12-31')
    expect(result.current.tasks[0].assignee).toBe('홍길동')
  })

  it('clears only completed tasks', () => {
    const { result } = renderHook(() => useTasks())
    act(() => {
      result.current.addTask('Keep me', 'major')
      result.current.addTask('Delete me', 'minor')
    })
    act(() => result.current.toggleTask(result.current.tasks[1].id))
    act(() => result.current.clearCompleted())
    expect(result.current.tasks).toHaveLength(1)
    expect(result.current.tasks[0].title).toBe('Keep me')
  })

  it('filters tasks by status', () => {
    const { result } = renderHook(() => useTasks())
    act(() => {
      result.current.addTask('Task A', 'critical')
      result.current.addTask('Task B', 'minor')
    })
    act(() => result.current.toggleTask(result.current.tasks[0].id))
    act(() => result.current.setFilter('active'))
    expect(result.current.filteredTasks).toHaveLength(1)
    expect(result.current.filteredTasks[0].title).toBe('Task B')
    act(() => result.current.setFilter('completed'))
    expect(result.current.filteredTasks).toHaveLength(1)
    expect(result.current.filteredTasks[0].title).toBe('Task A')
  })
})

describe('reducer', () => {
  const base: Task[] = [
    { id: '1', title: 'A', priority: 'minor', completed: false, createdAt: 1 },
    { id: '2', title: 'B', priority: 'critical', completed: true, createdAt: 2 },
  ]

  it('EDIT updates matching task fields', () => {
    const result = reducer(base, { type: 'EDIT', id: '1', title: 'Updated', priority: 'major' })
    expect(result[0].title).toBe('Updated')
    expect(result[0].priority).toBe('major')
    expect(result[1]).toBe(base[1])
  })

  it('CLEAR_COMPLETED removes completed tasks', () => {
    const result = reducer(base, { type: 'CLEAR_COMPLETED' })
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('1')
  })
})

describe('sortTasks', () => {
  const tasks: Task[] = [
    { id: '1', title: 'A', priority: 'minor',    completed: false, createdAt: 1, dueDate: '2026-12-01' },
    { id: '2', title: 'B', priority: 'critical',  completed: false, createdAt: 2, dueDate: '2026-06-01' },
    { id: '3', title: 'C', priority: 'major',     completed: false, createdAt: 3 },
  ]

  it('"default" preserves original order', () => {
    const result = sortTasks(tasks, 'default')
    expect(result.map(t => t.id)).toEqual(['1', '2', '3'])
  })

  it('"priority" sorts critical → major → minor', () => {
    const result = sortTasks(tasks, 'priority')
    expect(result.map(t => t.priority)).toEqual(['critical', 'major', 'minor'])
  })

  it('"dueDate" sorts earliest first, no-date last', () => {
    const result = sortTasks(tasks, 'dueDate')
    expect(result[0].dueDate).toBe('2026-06-01')
    expect(result[1].dueDate).toBe('2026-12-01')
    expect(result[2].dueDate).toBeUndefined()
  })
})
