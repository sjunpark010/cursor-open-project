import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useLocalStorage } from '../hooks/useLocalStorage'

describe('useLocalStorage', () => {
  beforeEach(() => localStorage.clear())

  it('returns initial value when key is absent', () => {
    const { result } = renderHook(() => useLocalStorage('key', 42))
    expect(result.current[0]).toBe(42)
  })

  it('persists updated value to localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('key', 0))
    act(() => result.current[1](99))
    expect(result.current[0]).toBe(99)
    expect(JSON.parse(localStorage.getItem('key')!)).toBe(99)
  })
})
