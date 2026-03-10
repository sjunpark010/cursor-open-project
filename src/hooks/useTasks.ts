import { useReducer, useMemo, useEffect } from "react"
import { Task, Priority, FilterStatus } from "../types/task"
import { useLocalStorage } from "./useLocalStorage"

type Action =
  | { type: "ADD"; title: string; priority: Priority }
  | { type: "TOGGLE"; id: string }
  | { type: "DELETE"; id: string }
  | { type: "LOAD"; tasks: Task[] }

function reducer(state: Task[], action: Action): Task[] {
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
        },
      ]
    case "TOGGLE":
      return state.map((t) => (t.id === action.id ? { ...t, completed: !t.completed } : t))
    case "DELETE":
      return state.filter((t) => t.id !== action.id)
    case "LOAD":
      return action.tasks
    default:
      return state
  }
}

export function useTasks() {
  const [storedTasks, setStoredTasks] = useLocalStorage<Task[]>("tasks", [])
  const [tasks, dispatch] = useReducer(reducer, storedTasks)
  const [filter, setFilter] = useLocalStorage<FilterStatus>("filter", "all")

  useEffect(() => {
    setStoredTasks(tasks)
  }, [tasks, setStoredTasks])

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "active":
        return tasks.filter((t) => !t.completed)
      case "completed":
        return tasks.filter((t) => t.completed)
      default:
        return tasks
    }
  }, [tasks, filter])

  const addTask = (title: string, priority: Priority) =>
    dispatch({ type: "ADD", title, priority })

  const toggleTask = (id: string) => dispatch({ type: "TOGGLE", id })

  const deleteTask = (id: string) => dispatch({ type: "DELETE", id })

  return { tasks, filteredTasks, filter, setFilter, addTask, toggleTask, deleteTask }
}
