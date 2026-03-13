import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AddTaskForm } from '../components/AddTaskForm'

describe('AddTaskForm', () => {
  it('renders title input, priority select, and submit button', () => {
    render(<AddTaskForm onAdd={vi.fn()} />)
    expect(screen.getByRole('textbox', { name: /태스크 제목/ })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /심각도/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /추가/ })).toBeInTheDocument()
  })

  it('calls onAdd with trimmed title and selected priority', async () => {
    const onAdd = vi.fn()
    render(<AddTaskForm onAdd={onAdd} />)
    await userEvent.type(screen.getByRole('textbox', { name: /태스크 제목/ }), '  Buy milk  ')
    await userEvent.selectOptions(screen.getByRole('combobox', { name: /심각도/ }), 'critical')
    await userEvent.click(screen.getByRole('button', { name: /추가/ }))
    expect(onAdd).toHaveBeenCalledWith('Buy milk', 'critical', undefined, undefined)
  })

  it('does not call onAdd for empty input', async () => {
    const onAdd = vi.fn()
    render(<AddTaskForm onAdd={onAdd} />)
    await userEvent.click(screen.getByRole('button', { name: /추가/ }))
    expect(onAdd).not.toHaveBeenCalled()
  })

  it('clears input after successful submit', async () => {
    render(<AddTaskForm onAdd={vi.fn()} />)
    const input = screen.getByRole('textbox', { name: /태스크 제목/ })
    await userEvent.type(input, 'Task title')
    await userEvent.click(screen.getByRole('button', { name: /추가/ }))
    expect(input).toHaveValue('')
  })

  it('renders AI suggest button', () => {
    render(<AddTaskForm onAdd={vi.fn()} />)
    expect(screen.getByRole('button', { name: /AI 제안/ })).toBeInTheDocument()
  })
})
