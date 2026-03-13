export type Priority = "minor" | "major" | "critical"
export type FilterStatus = "all" | "active" | "completed"
export type SortOrder = "default" | "priority" | "dueDate"

export interface Task {
  id: string
  title: string
  priority: Priority
  completed: boolean
  createdAt: number
  dueDate?: string
  assignee?: string
}
