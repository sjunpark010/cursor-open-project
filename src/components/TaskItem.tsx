import { useState } from "react"
import { Task, Priority } from "../types/task"
import styles from "./TaskItem.module.css"

interface Props {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, title: string, priority: Priority, dueDate?: string, assignee?: string) => void
}

const PRIORITY_LABELS: Record<Priority, string> = {
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

export function TaskItem({ task, onToggle, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)
  const [editPriority, setEditPriority] = useState<Priority>(task.priority)
  const [editDueDate, setEditDueDate] = useState(task.dueDate ?? "")
  const [editAssignee, setEditAssignee] = useState(task.assignee ?? "")

  const dday = task.dueDate && !task.completed ? getDday(task.dueDate) : null

  const handleSave = () => {
    const trimmed = editTitle.trim()
    if (!trimmed) return
    onEdit(task.id, trimmed, editPriority, editDueDate || undefined, editAssignee.trim() || undefined)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditTitle(task.title)
    setEditPriority(task.priority)
    setEditDueDate(task.dueDate ?? "")
    setEditAssignee(task.assignee ?? "")
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <li className={styles.item} aria-label="태스크 편집">
        <div className={styles.editForm}>
          <div className={styles.editRow}>
            <input
              className={styles.editInput}
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              aria-label="제목 편집"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSave()
                if (e.key === "Escape") handleCancel()
              }}
            />
            <select
              className={`${styles.editSelect} ${styles[editPriority]}`}
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value as Priority)}
              aria-label="심각도 편집"
            >
              <option value="minor">Minor</option>
              <option value="major">Major</option>
              <option value="critical">Critical</option>
            </select>
          </div>
          <div className={styles.editRow}>
            <input
              className={styles.editInput}
              type="text"
              value={editAssignee}
              onChange={(e) => setEditAssignee(e.target.value)}
              placeholder="담당자"
              aria-label="담당자 편집"
            />
            <input
              className={styles.editDateInput}
              type="date"
              value={editDueDate}
              onChange={(e) => setEditDueDate(e.target.value)}
              aria-label="마감일 편집"
            />
          </div>
          <div className={styles.editActions}>
            <button className={styles.saveBtn} onClick={handleSave}>저장</button>
            <button className={styles.cancelBtn} onClick={handleCancel}>취소</button>
          </div>
        </div>
      </li>
    )
  }

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
            <span className={styles.dueDate}>📅 {task.dueDate}</span>
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
        className={styles.editBtn}
        onClick={() => setIsEditing(true)}
        aria-label={`"${task.title}" 편집`}
        title="편집"
      >
        ✎
      </button>
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
