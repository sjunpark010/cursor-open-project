import { FilterStatus } from "../types/task"
import styles from "./FilterBar.module.css"

interface Props {
  filter: FilterStatus
  onChange: (filter: FilterStatus) => void
}

const FILTERS: { label: string; value: FilterStatus }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
]

export function FilterBar({ filter, onChange }: Props) {
  return (
    <nav className={styles.bar} aria-label="Filter tasks">
      {FILTERS.map(({ label, value }) => (
        <button
          key={value}
          className={`${styles.btn}${filter === value ? ` ${styles.active}` : ""}`}
          onClick={() => onChange(value)}
          aria-pressed={filter === value}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}
