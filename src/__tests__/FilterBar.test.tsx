import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FilterBar } from '../components/FilterBar'

describe('FilterBar', () => {
  it('renders All, Active, Completed buttons', () => {
    render(<FilterBar filter="all" onChange={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Active' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Completed' })).toBeInTheDocument()
  })

  it('marks the active filter button with aria-pressed="true"', () => {
    render(<FilterBar filter="active" onChange={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Active' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('button', { name: 'Completed' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('calls onChange with "all" when All is clicked', async () => {
    const onChange = vi.fn()
    render(<FilterBar filter="active" onChange={onChange} />)
    await userEvent.click(screen.getByRole('button', { name: 'All' }))
    expect(onChange).toHaveBeenCalledWith('all')
  })

  it('calls onChange with "active" when Active is clicked', async () => {
    const onChange = vi.fn()
    render(<FilterBar filter="all" onChange={onChange} />)
    await userEvent.click(screen.getByRole('button', { name: 'Active' }))
    expect(onChange).toHaveBeenCalledWith('active')
  })

  it('calls onChange with "completed" when Completed is clicked', async () => {
    const onChange = vi.fn()
    render(<FilterBar filter="all" onChange={onChange} />)
    await userEvent.click(screen.getByRole('button', { name: 'Completed' }))
    expect(onChange).toHaveBeenCalledWith('completed')
  })
})
