import { useState, FormEvent } from "react"
import { Priority } from "../types/task"
import styles from "./AddTaskForm.module.css"

interface Props {
  onAdd: (title: string, priority: Priority) => void
}

export function AddTaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState<Priority>("medium")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    onAdd(trimmed, priority)
    setTitle("")
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Add new task">
      <input
        className={styles.input}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        aria-label="Task title"
      />
      <select
        className={styles.select}
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        aria-label="Task priority"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button className={styles.submitBtn} type="submit">
        Add Task
      </button>
    </form>
  )
}
