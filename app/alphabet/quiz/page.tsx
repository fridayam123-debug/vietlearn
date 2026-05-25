'use client'
import { useState, useMemo } from 'react'
import { alphabet } from '@/data/alphabet'
import { AlphabetLetter } from '@/lib/types'
import Link from 'next/link'

type QType = 'to-pronunciation' | 'to-letter'

interface Question {
  type: QType
  target: AlphabetLetter
  choices: string[]
  answer: string
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function makeQuestions(): Question[] {
  return shuffle(alphabet).slice(0, 15).map((target, i) => {
    const others = shuffle(alphabet.filter(l => l.char !== target.char)).slice(0, 3)
    const type: QType = i % 3 === 2 ? 'to-letter' : 'to-pronunciation'
    if (type === 'to-pronunciation') {
      const choices = shuffle([target.pronunciationKo, ...others.map(l => l.pronunciationKo)])
      return { type, target, choices, answer: target.pronunciationKo }
    } else {
      const choices = shuffle([target.char, ...others.map(l => l.char)])
      return { type, target, choices, answer: target.char }
    }
  })
}

export default function AlphabetQuizPage() {
  const [round, setRound] = useState(0)
  const questions = useMemo(() => makeQuestions(), [round])
  const [current, setCurrent]   = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [score, setScore]       = useState(0)
  const [done, setDone]         = useState(false)
  const [wrong, setWrong]       = useState<Question[]>([])

  const q = questions[current]

  function handleSelect(choice: string) {
    if (selected) return
    setSelected(choice)
    const correct = choice === q.answer
    if (correct) setScore(s => s + 1)
    else setWrong(w => [...w, q])
    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setDone(true)
      } else {
        setCurrent(c => c + 1)
        setSelected(null)
      }
    }, 900)
  }

  function restart() {
    setRound(r => r + 1)
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setDone(false)
    setWrong([])
  }

  if (done) {
    const passed = score >= Math.ceil(questions.length * 0.8)
    return (
      <>
        <div className="page-header">
          <Link href="/alphabet" className="back-link" style={{ margin: 0 }}>←</Link>
          <h1>알파벳 테스트</h1>
        </div>
        <div className="app" style={{ paddingTop: 20 }}>
          <div className="quiz-result">
            <div style={{ fontSize: '56px' }}>{passed ? '🎉' : '😅'}</div>
            <div className="result-score" style={{ color: passed ? 'var(--success)' : 'var(--error)' }}>
              {score}/{questions.length}
            </div>
            <div className="result-label">{passed ? '통과!' : '80% 이상 맞혀야 통과해요.'}</div>

            {wrong.length > 0 && (
              <div className="wrong-list">
                <h3>틀린 문자 ({wrong.length}개)</h3>
                {wrong.map((wq, i) => (
                  <div key={i} className="wrong-row">
                    <span style={{ fontSize: '32px', fontWeight: 700 }}>{wq.target.char}</span>
                    <span className="w-ko">{wq.target.pronunciationKo}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flashcard-nav" style={{ justifyContent: 'center' }}>
              <Link href="/alphabet" className="btn" style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}>
                돌아가기
              </Link>
              <button className="btn btn-primary" onClick={restart} style={{ flex: 1 }}>
                다시 풀기
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  const pct = Math.round((current / questions.length) * 100)

  return (
    <>
      <div className="page-header">
        <Link href="/alphabet" className="back-link" style={{ margin: 0 }}>←</Link>
        <h1>알파벳 테스트</h1>
        <span className="ph-count">{current + 1}/{questions.length}</span>
      </div>

      <div className="app" style={{ paddingTop: 20 }}>
        <div className="quiz-screen">
          <div className="quiz-progress">
            <div className="quiz-progress-fill" style={{ width: `${pct}%` }} />
          </div>

          <div className="quiz-question">
            <div className="q-hint">
              {q.type === 'to-pronunciation' ? '이 문자의 발음은?' : '이 발음의 문자는?'}
            </div>
            {q.type === 'to-pronunciation' ? (
              <span className="target" style={{ fontSize: '72px', fontWeight: 700 }}>{q.target.char}</span>
            ) : (
              <span className="target" style={{ fontSize: '24px', fontWeight: 600, color: 'var(--accent-dark)' }}>
                {q.target.pronunciationKo}
              </span>
            )}
          </div>

          <div className="quiz-choices">
            {q.choices.map(choice => {
              let cls = 'quiz-choice'
              if (selected) {
                if (choice === q.answer) cls += ' correct'
                else if (selected === choice) cls += ' wrong'
              }
              return (
                <button key={choice} className={cls} onClick={() => handleSelect(choice)}>
                  {q.type === 'to-pronunciation' ? (
                    <span style={{ fontSize: '14px', lineHeight: 1.4 }}>{choice}</span>
                  ) : (
                    <span style={{ fontSize: '40px', fontWeight: 700 }}>{choice}</span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
