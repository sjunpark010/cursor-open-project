import { Task } from "../types/task"
import styles from "./TaskItem.module.css"

interface Props {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const PRIORITY_LABELS: Record<string, string> = {
  minor: "Minor",
  major: "Major",
  critical: "Critical",
}

function getDday(dueDate: string): { label: string; overdue: boolean } {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const due = new Date(dueDate)
  due.setHours(0, 0, 0, 0)
  const diff = Math.round((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  if (diff < 0) return { label: `D+${Math.abs(diff)}`, overdue: true }
  if (diff === 0) return { label: "D-Day", overdue: false }
  return { label: `D-${diff}`, overdue: false }
}

export function TaskItem({ task, onToggle, onDelete }: Props) {
  const dday = task.dueDate && !task.completed ? getDday(task.dueDate) : null

  return (
    <li className={`${styles.item} ${task.completed ? styles.completedItem : ""}`}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`"${task.title}" ${task.completed ? "미완료로 변경" : "완료로 변경"}`}
      />
      <div className={styles.content}>
        <span className={`${styles.title}${task.completed ? ` ${styles.done}` : ""}`}>
          {task.title}
        </span>
        <div className={styles.meta}>
          {task.assignee && (
            <span className={styles.assignee}>👤 {task.assignee}</span>
          )}
          {task.dueDate && (
            <span className={styles.dueDate}>
              📅 {task.dueDate}
            </span>
          )}
        </div>
      </div>
      <div className={styles.badges}>
        <span className={`${styles.badge} ${styles[task.priority]}`}>
          {PRIORITY_LABELS[task.priority]}
        </span>
        {dday && (
          <span className={`${styles.dday} ${dday.overdue ? styles.overdue : dday.label === "D-Day" ? styles.dday0 : ""}`}>
            {dday.label}
          </span>
        )}
      </div>
      <button
        className={styles.deleteBtn}
        onClick={() => onDelete(task.id)}
        aria-label={`"${task.title}" 삭제`}
        title="삭제"
      >
        ×
      </button>
    </li>
  )
}
