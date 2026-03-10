import { Task } from "../types/task"
import styles from "./TaskItem.module.css"

interface Props {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark "${task.title}" as ${task.completed ? "active" : "completed"}`}
      />
      <span className={`${styles.title}${task.completed ? ` ${styles.done}` : ""}`}>
        {task.title}
      </span>
      <span className={`${styles.badge} ${styles[task.priority]}`}>{task.priority}</span>
      <button
        className={styles.deleteBtn}
        onClick={() => onDelete(task.id)}
        aria-label={`Delete "${task.title}"`}
        title="Delete task"
      >
        ×
      </button>
    </li>
  )
}
