'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FlashCard } from '@/components/FlashCard'
import { useProgress } from '@/hooks/useProgress'
import { TopicId, VocabItem } from '@/lib/types'
import Link from 'next/link'
import * as _school       from '@/data/school'
import * as _food         from '@/data/food'
import * as _animals      from '@/data/animals'
import * as _family       from '@/data/family'
import * as _daily        from '@/data/daily'
import * as _numbersTime  from '@/data/numbers-time'
import * as _travel       from '@/data/travel'
import * as _cooking      from '@/data/cooking'
import * as _mart         from '@/data/mart'
import * as _electronics  from '@/data/electronics'
import * as _hotel        from '@/data/hotel'
import * as _realEstate   from '@/data/real-estate'
import * as _business     from '@/data/business'

const DATA_MAP: Record<string, { words: VocabItem[]; verbs: VocabItem[] }> = {
  school:         _school,
  food:           _food,
  animals:        _animals,
  family:         _family,
  daily:          _daily,
  'numbers-time': _numbersTime,
  travel:         _travel,
  cooking:        _cooking,
  mart:           _mart,
  electronics:    _electronics,
  hotel:          _hotel,
  'real-estate':  _realEstate,
  business:       _business,
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
    const mod = DATA_MAP[topicId]
    if (!mod) return
    const all: VocabItem[] = type === 'word' ? mod.words : mod.verbs
    setItems(all.filter(v => v.session === session))
  }, [topicId, type, session])

  if (!items.length) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'var(--muted)' }}>
      로딩 중…
    </div>
  )

  const prog = sessionProg(topicId as TopicId, type as 'word' | 'verb', session)
  const current = items[index]
  const pct = Math.round((index / items.length) * 100)

  return (
    <>
      {/* Header */}
      <div className="page-header">
        <Link href={`/topic/${topicId}`} className="back-link" style={{ margin: 0 }}>←</Link>
        <h1>{type === 'word' ? '단어' : '동사'} 세션 {session}</h1>
        <span className="ph-count">{index + 1}/{items.length}</span>
      </div>

      <div className="app" style={{ paddingTop: 20 }}>
        {/* Progress */}
        <div style={{ marginBottom: 24 }}>
          <div className="bar-labels">
            <span>진도</span>
            <span>{prog.viewed.length}/{items.length} 학습 완료</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <div className="flashcard-screen">
          <FlashCard
            key={current.id}
            item={current}
            onViewed={() => viewCard(topicId as TopicId, type as 'word' | 'verb', session, current.id)}
          />
          <div className="flashcard-nav">
            <button
              className="btn"
              onClick={() => setIndex(i => Math.max(0, i - 1))}
              disabled={index === 0}
              style={{ flex: 1 }}
            >
              ← 이전
            </button>
            <span className="flashcard-progress">{index + 1} / {items.length}</span>
            {index < items.length - 1 ? (
              <button
                className="btn btn-primary"
                onClick={() => setIndex(i => i + 1)}
                style={{ flex: 1 }}
              >
                다음 →
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={() => router.push(`/topic/${topicId}/quiz/${type}-${session}`)}
                style={{ flex: 1 }}
              >
                퀴즈 시작 →
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
