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

  const wordSessions = [1, 2, 3, 4]
  const verbSessions = [1, 2]

  function SessionButton({ type, session }: { type: 'word' | 'verb'; session: number }) {
    const locked = !unlocked(topicId as TopicId, type, session)
    const prog = sessionProg(topicId as TopicId, type, session)
    const label = type === 'word' ? `단어 세션 ${session}` : `동사 세션 ${session}`
    return (
      <Link
        href={locked ? '#' : `/topic/${topicId}/session/${type}-${session}`}
        className={`p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
          locked
            ? 'border-gray-200 bg-gray-50 opacity-50 pointer-events-none'
            : prog.quizPassed
            ? 'border-green-400 bg-green-50'
            : 'border-gray-200 bg-white hover:border-red-300'
        }`}
      >
        <span className="font-medium">{locked ? '🔒 ' : ''}{label}</span>
        {prog.quizPassed
          ? <span className="text-green-600 text-sm font-bold">✅ 완료</span>
          : !locked
          ? <span className="text-gray-400 text-sm">{prog.viewed.length}/25</span>
          : null
        }
      </Link>
    )
  }

  if (!topic) return <div className="p-4">주제를 찾을 수 없어요.</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center gap-3 z-10">
        <Link href="/" className="text-2xl">←</Link>
        <span className="text-2xl">{topic.icon}</span>
        <h1 className="font-bold text-lg">{topic.nameKo}</h1>
        <span className="ml-auto text-sm text-gray-500">{topic.nameVi}</span>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h2 className="font-bold text-gray-700 mt-2">📚 단어 (100개)</h2>
        {wordSessions.map(s => <SessionButton key={s} type="word" session={s} />)}
        <h2 className="font-bold text-gray-700 mt-4">🔤 동사 (50개)</h2>
        {verbSessions.map(s => <SessionButton key={s} type="verb" session={s} />)}
        <h2 className="font-bold text-gray-700 mt-4">💬 회화</h2>
        <Link
          href={`/topic/${topicId}/conversation`}
          className="p-4 rounded-xl border-2 border-gray-200 bg-white hover:border-red-300 font-medium flex items-center justify-between"
        >
          <span>회화 5개 학습하기</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  )
}
