import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTasks } from '../hooks/useTasks'

describe('useTasks', () => {
  beforeEach(() => localStorage.clear())

  it('starts with empty task list', () => {
    const { result } = renderHook(() => useTasks())
    expect(result.current.tasks).toHaveLength(0)
  })

  it('adds a task', () => {
    const { result } = renderHook(() => useTasks())
    act(() => result.current.addTask('Write tests', 'high'))
    expect(result.current.tasks).toHaveLength(1)
    expect(result.current.tasks[0].title).toBe('Write tests')
    expect(result.current.tasks[0].priority).toBe('high')
    expect(result.current.tasks[0].completed).toBe(false)
  })

  it('toggles a task', () => {
    const { result } = renderHook(() => useTasks())
    act(() => result.current.addTask('Toggle me', 'medium'))
    const id = result.current.tasks[0].id
    act(() => result.current.toggleTask(id))
    expect(result.current.tasks[0].completed).toBe(true)
    act(() => result.current.toggleTask(id))
    expect(result.current.tasks[0].completed).toBe(false)
  })

  it('deletes a task', () => {
    const { result } = renderHook(() => useTasks())
    act(() => result.current.addTask('Delete me', 'low'))
    const id = result.current.tasks[0].id
    act(() => result.current.deleteTask(id))
    expect(result.current.tasks).toHaveLength(0)
  })

  it('filters tasks by status', () => {
    const { result } = renderHook(() => useTasks())
    act(() => {
      result.current.addTask('Task A', 'high')
      result.current.addTask('Task B', 'low')
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
