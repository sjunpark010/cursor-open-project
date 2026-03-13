import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AddTaskForm } from '../components/AddTaskForm'

describe('AddTaskForm', () => {
  it('renders input, select, and submit button', () => {
    render(<AddTaskForm onAdd={vi.fn()} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument()
  })

  it('calls onAdd with trimmed title and selected priority', async () => {
    const onAdd = vi.fn()
    render(<AddTaskForm onAdd={onAdd} />)
    await userEvent.type(screen.getByRole('textbox'), '  Buy milk  ')
    await userEvent.selectOptions(screen.getByRole('combobox'), 'high')
    await userEvent.click(screen.getByRole('button', { name: /add task/i }))
    expect(onAdd).toHaveBeenCalledWith('Buy milk', 'high')
  })

  it('does not call onAdd for empty input', async () => {
    const onAdd = vi.fn()
    render(<AddTaskForm onAdd={onAdd} />)
    await userEvent.click(screen.getByRole('button', { name: /add task/i }))
    expect(onAdd).not.toHaveBeenCalled()
  })

  it('clears input after successful submit', async () => {
    render(<AddTaskForm onAdd={vi.fn()} />)
    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'Task title')
    await userEvent.click(screen.getByRole('button', { name: /add task/i }))
    expect(input).toHaveValue('')
  })
})
