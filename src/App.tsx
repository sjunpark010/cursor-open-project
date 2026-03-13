import { useTasks } from './hooks/useTasks'
import { AddTaskForm } from './components/AddTaskForm'
import { FilterBar } from './components/FilterBar'
import { TaskList } from './components/TaskList'
import styles from './App.module.css'

export default function App() {
  const { filteredTasks, filter, setFilter, addTask, toggleTask, deleteTask, tasks } = useTasks()
  const completedCount = tasks.filter(t => t.completed).length

  return (
    <div className={styles.page}>
      <div className={`${styles.shape} ${styles.shape1}`} />
      <div className={`${styles.shape} ${styles.shape2}`} />
      <div className={`${styles.shape} ${styles.shape3}`} />
      <div className={`${styles.shape} ${styles.shape4}`} />
      <div className={styles.card}>
        <p className={styles.badge}>Task Manager</p>
        <h1 className={styles.title}>My Tasks</h1>
        <p className={styles.subtitle}>{completedCount} / {tasks.length} completed</p>
        <AddTaskForm onAdd={addTask} />
        <FilterBar filter={filter} onChange={setFilter} />
        <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>
  )
}
