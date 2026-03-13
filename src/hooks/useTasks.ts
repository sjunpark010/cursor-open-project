import { useReducer, useMemo, useEffect } from "react"
import { Task, Priority, FilterStatus, SortOrder } from "../types/task"
import { useLocalStorage } from "./useLocalStorage"

const PRIORITY_ORDER: Record<Priority, number> = { critical: 0, major: 1, minor: 2 }

type Action =
  | { type: "ADD"; title: string; priority: Priority; dueDate?: string; assignee?: string }
  | { type: "TOGGLE"; id: string }
  | { type: "DELETE"; id: string }
  | { type: "EDIT"; id: string; title: string; priority: Priority; dueDate?: string; assignee?: string }
  | { type: "CLEAR_COMPLETED" }
  | { type: "LOAD"; tasks: Task[] }

export function reducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          title: action.title,
          priority: action.priority,
          completed: false,
          createdAt: Date.now(),
          dueDate: action.dueDate,
          assignee: action.assignee,
        },
      ]
    case "TOGGLE":
      return state.map((t) => (t.id === action.id ? { ...t, completed: !t.completed } : t))
    case "DELETE":
      return state.filter((t) => t.id !== action.id)
    case "EDIT":
      return state.map((t) =>
        t.id === action.id
          ? { ...t, title: action.title, priority: action.priority, dueDate: action.dueDate, assignee: action.assignee }
          : t
      )
    case "CLEAR_COMPLETED":
      return state.filter((t) => !t.completed)
    case "LOAD":
      return action.tasks
    default:
      return state
  }
}

export function sortTasks(tasks: Task[], sort: SortOrder): Task[] {
  if (sort === "priority") {
    return [...tasks].sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority])
  }
  if (sort === "dueDate") {
    return [...tasks].sort((a, b) => {
      if (!a.dueDate && !b.dueDate) return 0
      if (!a.dueDate) return 1
      if (!b.dueDate) return -1
      return a.dueDate.localeCompare(b.dueDate)
    })
  }
  return tasks
}

export function useTasks() {
  const [storedTasks, setStoredTasks] = useLocalStorage<Task[]>("tasks", [])
  const [tasks, dispatch] = useReducer(reducer, storedTasks)
  const [filter, setFilter] = useLocalStorage<FilterStatus>("filter", "all")
  const [sort, setSort] = useLocalStorage<SortOrder>("sort", "default")

  useEffect(() => {
    setStoredTasks(tasks)
  }, [tasks, setStoredTasks])

  const filteredTasks = useMemo(() => {
    let result: Task[]
    switch (filter) {
      case "active":
        result = tasks.filter((t) => !t.completed)
        break
      case "completed":
        result = tasks.filter((t) => t.completed)
        break
      default:
        result = tasks
    }
    return sortTasks(result, sort)
  }, [tasks, filter, sort])

  const addTask = (title: string, priority: Priority, dueDate?: string, assignee?: string) =>
    dispatch({ type: "ADD", title, priority, dueDate, assignee })

  const toggleTask = (id: string) => dispatch({ type: "TOGGLE", id })

  const deleteTask = (id: string) => dispatch({ type: "DELETE", id })

  const editTask = (id: string, title: string, priority: Priority, dueDate?: string, assignee?: string) =>
    dispatch({ type: "EDIT", id, title, priority, dueDate, assignee })

  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" })

  return { tasks, filteredTasks, filter, setFilter, sort, setSort, addTask, toggleTask, deleteTask, editTask, clearCompleted }
}
