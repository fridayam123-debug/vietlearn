'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FlashCard } from '@/components/FlashCard'
import { ProgressDots } from '@/components/ProgressDots'
import { useProgress } from '@/hooks/useProgress'
import { TopicId, VocabItem } from '@/lib/types'
import Link from 'next/link'

const DATA_MAP: Record<string, () => Promise<{ words: VocabItem[]; verbs: VocabItem[] }>> = {
  school:        () => import('@/data/school'),
  food:          () => import('@/data/food'),
  animals:       () => import('@/data/animals'),
  family:        () => import('@/data/family'),
  daily:         () => import('@/data/daily'),
  'numbers-time':() => import('@/data/numbers-time'),
  travel:        () => import('@/data/travel'),
  cooking:       () => import('@/data/cooking'),
  mart:          () => import('@/data/mart'),
  electronics:   () => import('@/data/electronics'),
  hotel:         () => import('@/data/hotel'),
}

export default function SessionPage() {
  const { topicId, sid } = useParams<{ topicId: string; sid: string }>()
  const router = useRouter()
  const [type, sessionStr] = sid.split('-')
  const session = parseInt(sessionStr)
  const [items, setItems] = useState<VocabItem[]>([])
  const [index, setIndex] = useState(0)
  const { viewCard, sessionProg } = useProgress()

  useEffect(() => {
    const loader = DATA_MAP[topicId]
    if (!loader) return
    loader().then(mod => {
      const all: VocabItem[] = type === 'word' ? mod.words : mod.verbs
      setItems(all.filter(v => v.session === session))
    })
  }, [topicId, type, session])

  if (!items.length) return (
    <div className="flex items-center justify-center h-screen text-gray-500">로딩 중...</div>
  )

  const prog = sessionProg(topicId as TopicId, type as 'word' | 'verb', session)
  const current = items[index]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center gap-3 z-10">
        <Link href={`/topic/${topicId}`} className="text-2xl">←</Link>
        <h1 className="font-bold">{type === 'word' ? '단어' : '동사'} 세션 {session}</h1>
        <span className="ml-auto text-sm text-gray-500">{index + 1}/{items.length}</span>
      </div>
      <div className="px-4 pt-4">
        <ProgressDots total={items.length} viewed={prog.viewed.length} />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-4 gap-6 py-6">
        <FlashCard
          item={current}
          onViewed={() => viewCard(topicId as TopicId, type as 'word' | 'verb', session, current.id)}
        />
        <div className="flex gap-3 w-full">
          <button
            onClick={() => setIndex(i => Math.max(0, i - 1))}
            disabled={index === 0}
            className="flex-1 py-3 rounded-xl border-2 border-gray-200 font-medium disabled:opacity-30 hover:border-gray-300"
          >
            ← 이전
          </button>
          {index < items.length - 1 ? (
            <button
              onClick={() => setIndex(i => i + 1)}
              className="flex-1 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700"
            >
              다음 →
            </button>
          ) : (
            <button
              onClick={() => router.push(`/topic/${topicId}/quiz/${type}-${session}`)}
              className="flex-1 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700"
            >
              퀴즈 시작 →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
