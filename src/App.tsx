import { useMemo } from 'react'
import { useTasks } from './hooks/useTasks'
import { AddTaskForm } from './components/AddTaskForm'
import { FilterBar } from './components/FilterBar'
import { TaskList } from './components/TaskList'
import { SortOrder } from './types/task'
import styles from './App.module.css'

const SORT_OPTIONS: { label: string; value: SortOrder }[] = [
  { label: "등록순", value: "default" },
  { label: "우선순위순", value: "priority" },
  { label: "마감일순", value: "dueDate" },
]

export default function App() {
  const { filteredTasks, filter, setFilter, sort, setSort, addTask, toggleTask, deleteTask, editTask, clearCompleted, tasks } = useTasks()

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

        {/* 필터 + 정렬 + 완료 삭제 툴바 */}
        <div className={styles.toolbar}>
          <FilterBar filter={filter} onChange={setFilter} />
          <select
            className={styles.sortSelect}
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOrder)}
            aria-label="정렬 기준"
          >
            {SORT_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {stats.completed > 0 && (
            <button
              className={styles.clearBtn}
              onClick={clearCompleted}
              aria-label="완료된 태스크 삭제"
            >
              완료 삭제 ({stats.completed})
            </button>
          )}
        </div>

        <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} />
      </div>
    </div>
  )
}
