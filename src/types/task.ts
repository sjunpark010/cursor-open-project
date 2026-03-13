export type Priority = "minor" | "major" | "critical"
export type FilterStatus = "all" | "active" | "completed"

export interface Task {
  id: string
  title: string
  priority: Priority
  completed: boolean
  createdAt: number
  dueDate?: string
  assignee?: string
}
