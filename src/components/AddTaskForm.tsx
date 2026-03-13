import { useState, FormEvent } from "react"
import { Priority } from "../types/task"
import styles from "./AddTaskForm.module.css"

interface Props {
  onAdd: (title: string, priority: Priority, dueDate?: string, assignee?: string) => void
}

const PRIORITY_LABELS: Record<Priority, string> = {
  minor: "Minor",
  major: "Major",
  critical: "Critical",
}

export function AddTaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState<Priority>("major")
  const [dueDate, setDueDate] = useState("")
  const [assignee, setAssignee] = useState("")
  const [aiLoading, setAiLoading] = useState(false)
  const [aiReason, setAiReason] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    onAdd(trimmed, priority, dueDate || undefined, assignee.trim() || undefined)
    setTitle("")
    setDueDate("")
    setAssignee("")
    setAiReason("")
  }

  const suggestPriority = async () => {
    const trimmed = title.trim()
    if (!trimmed) { alert("태스크 제목을 먼저 입력해주세요."); return }

    let key = localStorage.getItem("gc-ai-key")
    if (!key) {
      key = prompt("Claude API 키를 입력하세요 (sk-ant-...)")
      if (!key) return
      localStorage.setItem("gc-ai-key", key.trim())
      key = key.trim()
    }

    setAiLoading(true)
    setAiReason("")
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-request-header": "true",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 256,
          messages: [{
            role: "user",
            content: `의료 QA 업무 관점에서 다음 태스크의 심각도를 분류해주세요:\n"${trimmed}"\n\ncritical(환자 안전·주요 기능 오류), major(기능 저하·데이터 오류), minor(경미한 UI·문서 오류) 중 하나와 한 줄 이유를 JSON으로만 답하세요:\n{"priority":"critical|major|minor","reason":"이유"}`
          }]
        })
      })
      const data = await res.json()
      const text = data.content?.[0]?.text ?? ""
      const match = text.match(/\{[\s\S]*\}/)
      if (match) {
        const parsed = JSON.parse(match[0])
        if (["critical", "major", "minor"].includes(parsed.priority)) {
          setPriority(parsed.priority as Priority)
          setAiReason(parsed.reason ?? "")
        }
      }
    } catch {
      alert("AI 제안 오류가 발생했습니다.")
    } finally {
      setAiLoading(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="태스크 추가">
      <div className={styles.row}>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="태스크 제목 입력..."
          aria-label="태스크 제목"
        />
        <select
          className={`${styles.select} ${styles[priority]}`}
          value={priority}
          onChange={(e) => { setPriority(e.target.value as Priority); setAiReason("") }}
          aria-label="심각도"
        >
          {(Object.keys(PRIORITY_LABELS) as Priority[]).map((p) => (
            <option key={p} value={p}>{PRIORITY_LABELS[p]}</option>
          ))}
        </select>
        <button
          type="button"
          className={styles.aiBtn}
          onClick={suggestPriority}
          disabled={aiLoading}
          title="AI 심각도 자동 제안"
        >
          {aiLoading ? "⏳" : "🤖 AI 제안"}
        </button>
      </div>
      {aiReason && (
        <div className={styles.aiReason}>💡 {aiReason}</div>
      )}
      <div className={styles.row}>
        <input
          className={styles.input}
          type="text"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          placeholder="담당자"
          aria-label="담당자"
        />
        <input
          className={styles.dateInput}
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          aria-label="마감일"
        />
        <button className={styles.submitBtn} type="submit">
          추가
        </button>
      </div>
    </form>
  )
}
