'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect, useMemo } from 'react'
import { generateFullQuiz, FQQuestion, extractViSentence } from '@/lib/fullquiz'
import { VocabItem } from '@/lib/types'
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

const SET_SIZE = 25

function QuizQuestion({ q, onAnswer }: { q: FQQuestion; onAnswer: (correct: boolean) => void }) {
  const [selected, setSelected] = useState<string | null>(null)

  function choose(opt: string) {
    if (selected) return
    setSelected(opt)
    setTimeout(() => onAnswer(opt === q.correct), 900)
  }

  return (
    <div>
      {/* Question box */}
      <div className="quiz-question" style={{ minHeight: q.type === 'sentence-blank' ? 200 : 160 }}>
        <div className="q-hint">
          {q.type === 'vi-to-ko' && '베트남어 → 한국어'}
          {q.type === 'ko-to-vi' && '한국어 → 베트남어'}
          {q.type === 'sentence-blank' && '빈칸 채우기 (문장 완성)'}
        </div>

        {q.type === 'sentence-blank' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
            {/* Vietnamese sentence with blank */}
            <div style={{
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--fg)',
              textAlign: 'center',
              lineHeight: 1.6,
              padding: '0 8px',
            }}>
              {q.sentence}
            </div>
            {/* Korean hint */}
            <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
              힌트: {q.prompt}
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <span className="target" style={{
              fontSize: q.type === 'vi-to-ko' ? '36px' : '24px',
              fontWeight: q.type === 'vi-to-ko' ? 600 : 500,
            }}>
              {q.prompt}
            </span>
            {/* Vietnamese example sentence */}
            {q.item.usage && (
              <div style={{
                fontSize: '14px',
                color: 'var(--muted)',
                textAlign: 'center',
                lineHeight: 1.6,
                padding: '0 8px',
                fontStyle: 'italic',
              }}>
                {extractViSentence(q.item.usage)}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Choices */}
      <div className="quiz-choices">
        {q.options.map(opt => {
          let cls = 'quiz-choice'
          if (selected) {
            if (opt === q.correct) cls += ' correct'
            else if (opt === selected) cls += ' wrong'
          }
          return (
            <button key={opt} className={cls} onClick={() => choose(opt)}>
              <span style={{ fontSize: q.type === 'ko-to-vi' || q.type === 'sentence-blank' ? '16px' : '15px' }}>
                {opt}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

const TOPICS = ['school','food','animals','family','daily','numbers-time','travel','cooking','mart','electronics','hotel','real-estate','business']

export function generateStaticParams() {
  return TOPICS.flatMap(topicId =>
    ['1','2','3','4','5','6'].map(set => ({ topicId, set }))
  )
}

export default function FullQuizPage() {
  const { topicId, set } = useParams<{ topicId: string; set: string }>()
  const router = useRouter()
  const setIdx = parseInt(set) - 1   // 0-based

  const [allItems, setAllItems] = useState<VocabItem[]>([])
  const [current, setCurrent]   = useState(0)
  const [score, setScore]       = useState(0)
  const [done, setDone]         = useState(false)
  const [wrong, setWrong]       = useState<FQQuestion[]>([])

  useEffect(() => {
    const mod = DATA_MAP[topicId]
    if (!mod) return
    setAllItems([...mod.words, ...mod.verbs])
  }, [topicId])

  const questions = useMemo(
    () => allItems.length ? generateFullQuiz(allItems, setIdx, SET_SIZE) : [],
    [allItems, setIdx]
  )

  if (!questions.length) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'var(--muted)' }}>
      로딩 중…
    </div>
  )

  function handleAnswer(correct: boolean) {
    const newScore = score + (correct ? 1 : 0)
    const q = questions[current]
    if (!correct) setWrong(w => [...w, q])
    if (current + 1 >= questions.length) {
      setScore(newScore); setDone(true)
    } else {
      setScore(newScore); setCurrent(c => c + 1)
    }
  }

  if (done) {
    const passed = score >= Math.ceil(questions.length * 0.8)
    const nextSet = parseInt(set) + 1
    const hasNext = nextSet <= 6

    return (
      <>
        <div className="page-header">
          <Link href={`/topic/${topicId}`} className="back-link" style={{ margin: 0 }}>←</Link>
          <h1>퀴즈 {set} 결과</h1>
        </div>
        <div className="app" style={{ paddingTop: 20 }}>
          <div className="quiz-result">
            <div style={{ fontSize: '56px' }}>{passed ? '🎉' : '😅'}</div>
            <div className="result-score" style={{ color: passed ? 'var(--success)' : 'var(--error)' }}>
              {score}/{questions.length}
            </div>
            <div className="result-label">
              {passed ? `세트 ${set} 통과!` : '80% 이상 맞혀야 통과 (다시 도전!)'}
            </div>

            {wrong.length > 0 && (
              <div className="wrong-list">
                <h3>틀린 문제 ({wrong.length}개)</h3>
                {wrong.map((q, i) => (
                  <div key={i} className="wrong-row">
                    <span className="w-vi">{q.item.vi}</span>
                    <span className="w-ko">{q.item.ko}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flashcard-nav" style={{ justifyContent: 'center' }}>
              <Link href={`/topic/${topicId}`} className="btn" style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}>
                돌아가기
              </Link>
              {passed && hasNext && (
                <Link
                  href={`/topic/${topicId}/fullquiz/${nextSet}`}
                  className="btn btn-primary"
                  style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}
                >
                  다음 세트 →
                </Link>
              )}
              {!passed && (
                <Link
                  href={`/topic/${topicId}/fullquiz/${set}`}
                  className="btn btn-primary"
                  style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}
                >
                  다시 풀기
                </Link>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }

  const q = questions[current]
  const pct = Math.round((current / questions.length) * 100)

  return (
    <>
      <div className="page-header">
        <Link href={`/topic/${topicId}`} className="back-link" style={{ margin: 0 }}>←</Link>
        <h1>전체 퀴즈 — 세트 {set}/6</h1>
        <span className="ph-count">{current + 1}/{questions.length}</span>
      </div>
      <div className="app" style={{ paddingTop: 20 }}>
        <div className="quiz-screen">
          <div className="quiz-progress">
            <div className="quiz-progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <QuizQuestion key={current} q={q} onAnswer={handleAnswer} />
        </div>
      </div>
    </>
  )
}
