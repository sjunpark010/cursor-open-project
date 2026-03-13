import { Task, Priority } from "../types/task"
import { TaskItem } from "./TaskItem"
import styles from "./TaskList.module.css"

interface Props {
  tasks: Task[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, title: string, priority: Priority, dueDate?: string, assignee?: string) => void
}

export function TaskList({ tasks, onToggle, onDelete, onEdit }: Props) {
  if (tasks.length === 0) {
    return (
      <div className={styles.empty} role="status">
        <div className={styles.emptyIcon}>✓</div>
        <p>등록된 태스크가 없습니다.</p>
      </div>
    )
  }

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  )
}
