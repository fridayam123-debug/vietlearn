'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { QuizMultipleChoice } from '@/components/QuizMultipleChoice'
import { QuizTyping } from '@/components/QuizTyping'
import { useProgress } from '@/hooks/useProgress'
import { generateQuiz, QuizQuestion } from '@/lib/quiz'
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

export default function QuizPage() {
  const { topicId, sid } = useParams<{ topicId: string; sid: string }>()
  const router = useRouter()
  const [type, sessionStr] = sid.split('-')
  const session = parseInt(sessionStr)
  const { passQuiz } = useProgress()

  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [current, setCurrent]     = useState(0)
  const [score, setScore]         = useState(0)
  const [done, setDone]           = useState(false)
  const [wrong, setWrong]         = useState<QuizQuestion[]>([])

  useEffect(() => {
    const mod = DATA_MAP[topicId]
    if (!mod) return
    const all: VocabItem[] = type === 'word' ? mod.words : mod.verbs
    setQuestions(generateQuiz(all.filter(v => v.session === session)))
  }, [topicId, type, session])

  function handleAnswer(correct: boolean) {
    const newScore = score + (correct ? 1 : 0)
    if (!correct) setWrong(w => [...w, questions[current]])
    if (current + 1 >= questions.length) {
      passQuiz(topicId as TopicId, type as 'word' | 'verb', session, newScore)
      setScore(newScore)
      setDone(true)
    } else {
      setScore(newScore)
      setCurrent(c => c + 1)
    }
  }

  function retry() {
    const mod = DATA_MAP[topicId]
    if (!mod) return
    const all: VocabItem[] = type === 'word' ? mod.words : mod.verbs
    setQuestions(generateQuiz(all.filter(v => v.session === session)))
    setCurrent(0); setScore(0); setDone(false); setWrong([])
  }

  if (!questions.length) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'var(--muted)' }}>
      로딩 중…
    </div>
  )

  if (done) {
    const passed = score >= 20
    return (
      <>
        <div className="page-header">
          <Link href={`/topic/${topicId}`} className="back-link" style={{ margin: 0 }}>←</Link>
          <h1>퀴즈 결과</h1>
        </div>
        <div className="app" style={{ paddingTop: 20 }}>
          <div className="quiz-result">
            <div style={{ fontSize: '56px' }}>{passed ? '🎉' : '😅'}</div>
            <div className="result-score" style={{ color: passed ? 'var(--success)' : 'var(--error)' }}>
              {score}/25
            </div>
            <div className="result-label">{passed ? '통과! 다음 세션이 열렸어요.' : '다시 도전해 보세요 (80% 이상 필요)'}</div>

            {wrong.length > 0 && (
              <div className="wrong-list">
                <h3>틀린 단어 복습 ({wrong.length}개)</h3>
                {wrong.map(q => (
                  <div key={q.item.id} className="wrong-row">
                    <span className="w-vi">{q.item.vi}</span>
                    <span className="w-ko">{q.item.ko}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flashcard-nav" style={{ justifyContent: 'center' }}>
              {!passed && (
                <button className="btn btn-primary" onClick={retry} style={{ flex: 1 }}>
                  다시 풀기
                </button>
              )}
              <Link href={`/topic/${topicId}`} className="btn" style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}>
                돌아가기
              </Link>
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
        <h1>{type === 'word' ? '단어' : '동사'} 퀴즈</h1>
        <span className="ph-count">{current + 1}/{questions.length}</span>
      </div>
      <div className="app" style={{ paddingTop: 20 }}>
        <div className="quiz-screen">
          <div className="quiz-progress">
            <div className="quiz-progress-fill" style={{ width: `${pct}%` }} />
          </div>
          {q.type === 'multipleChoice'
            ? <QuizMultipleChoice question={q} onAnswer={handleAnswer} />
            : <QuizTyping question={q} onAnswer={handleAnswer} />
          }
        </div>
      </div>
    </>
  )
}
