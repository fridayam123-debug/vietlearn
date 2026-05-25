'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { topics } from '@/data/topics'
import { useProgress } from '@/hooks/useProgress'
import { TopicId } from '@/lib/types'

export default function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>()
  const topic = topics.find(t => t.id === topicId)!
  const { unlocked, sessionProg } = useProgress()

  if (!topic) return <div className="app">주제를 찾을 수 없어요.</div>

  const wordSessions = [1, 2, 3, 4]
  const verbSessions = [1, 2]

  function SetCard({ type, session }: { type: 'word' | 'verb'; session: number }) {
    const locked = !unlocked(topicId as TopicId, type, session)
    const prog = sessionProg(topicId as TopicId, type, session)
    const label = type === 'word' ? `단어 세션 ${session}` : `동사 세션 ${session}`
    const sub = locked ? '잠김' : prog.quizPassed ? '완료 ✓' : `${prog.viewed.length}/25 학습`

    return (
      <Link
        href={locked ? '#' : `/topic/${topicId}/session/${type}-${session}`}
        className={`set-card${locked ? ' locked' : prog.quizPassed ? ' done' : ''}`}
      >
        <div className="sc-label">{locked ? '🔒 ' : ''}{label}</div>
        <div className="sc-sub">{sub}</div>
      </Link>
    )
  }

  return (
    <>
      {/* Sticky header */}
      <div className="page-header">
        <Link href="/" className="back-link" style={{ margin: 0 }}>←</Link>
        <span style={{ fontSize: '22px' }}>{topic.icon}</span>
        <h1>{topic.nameKo}</h1>
        <span className="ph-count" style={{ color: 'var(--muted)' }}>{topic.nameVi}</span>
      </div>

      <div className="app" style={{ paddingTop: 20 }}>
        {/* Mode grid */}
        <div className="mode-grid">
          <div className="mode-card" style={{ cursor: 'default' }}>
            <span className="mc-icon">📚</span>
            <span className="mc-label">단어</span>
            <span className="mc-desc">100개 핵심 단어</span>
          </div>
          <div className="mode-card" style={{ cursor: 'default' }}>
            <span className="mc-icon">🔤</span>
            <span className="mc-label">동사</span>
            <span className="mc-desc">50개 주요 동사</span>
          </div>
          <Link href={`/topic/${topicId}/conversation`} className="mode-card">
            <span className="mc-icon">💬</span>
            <span className="mc-label">회화</span>
            <span className="mc-desc">실용 대화 학습</span>
          </Link>
        </div>

        {/* Word sessions */}
        <div className="section-title">단어 세션</div>
        <div className="set-grid">
          {wordSessions.map(s => <SetCard key={s} type="word" session={s} />)}
        </div>

        {/* Verb sessions */}
        <div className="section-title">동사 세션</div>
        <div className="set-grid" style={{ gridTemplateColumns: '1fr 1fr', maxWidth: 280 }}>
          {verbSessions.map(s => <SetCard key={s} type="verb" session={s} />)}
        </div>
      </div>
    </>
  )
}
