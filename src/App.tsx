import { useMemo } from 'react'
import { useTasks } from './hooks/useTasks'
import { AddTaskForm } from './components/AddTaskForm'
import { FilterBar } from './components/FilterBar'
import { TaskList } from './components/TaskList'
import styles from './App.module.css'

export default function App() {
  const { filteredTasks, filter, setFilter, addTask, toggleTask, deleteTask, tasks } = useTasks()

  const stats = useMemo(() => {
    const total = tasks.length
    const completed = tasks.filter(t => t.completed).length
    const critical = tasks.filter(t => t.priority === 'critical' && !t.completed).length
    const today = new Date(); today.setHours(0,0,0,0)
    const overdue = tasks.filter(t => {
      if (!t.dueDate || t.completed) return false
      return new Date(t.dueDate) < today
    }).length
    return { total, completed, critical, overdue }
  }, [tasks])

  return (
    <div className={styles.page}>
      <div className={`${styles.shape} ${styles.shape1}`} />
      <div className={`${styles.shape} ${styles.shape2}`} />
      <div className={`${styles.shape} ${styles.shape3}`} />
      <div className={`${styles.shape} ${styles.shape4}`} />
      <div className={styles.card}>
        <p className={styles.badge}>GC MediAI · QA Task Manager</p>
        <h1 className={styles.title}>업무 목록</h1>

        {/* 통계 카드 */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statVal}>{stats.total}</span>
            <span className={styles.statLabel}>전체</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statVal}>{stats.completed}</span>
            <span className={styles.statLabel}>완료</span>
          </div>
          <div className={`${styles.statItem} ${stats.critical > 0 ? styles.statDanger : ''}`}>
            <span className={styles.statVal}>{stats.critical}</span>
            <span className={styles.statLabel}>Critical</span>
          </div>
          <div className={`${styles.statItem} ${stats.overdue > 0 ? styles.statWarn : ''}`}>
            <span className={styles.statVal}>{stats.overdue}</span>
            <span className={styles.statLabel}>마감 초과</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statVal}>
              {stats.total ? Math.round(stats.completed / stats.total * 100) : 0}%
            </span>
            <span className={styles.statLabel}>완료율</span>
          </div>
        </div>

        <AddTaskForm onAdd={addTask} />
        <FilterBar filter={filter} onChange={setFilter} />
        <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>
  )
}
