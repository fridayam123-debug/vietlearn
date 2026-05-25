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
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [wrong, setWrong] = useState<Question[]>([])

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
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 gap-6">
        <div className="text-6xl">{passed ? '🎉' : '😅'}</div>
        <h1 className="text-2xl font-bold">{passed ? '통과!' : '다시 도전!'}</h1>
        <p className="text-xl font-bold">{score}/{questions.length} 정답</p>
        {!passed && <p className="text-gray-600 text-center">80% 이상 맞혀야 통과해요.</p>}
        {wrong.length > 0 && (
          <div className="w-full bg-white rounded-2xl p-4 border-2 border-red-200">
            <p className="font-bold text-red-700 mb-3">틀린 문자 ({wrong.length}개)</p>
            {wrong.map((wq, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-3xl font-bold text-gray-800">{wq.target.char}</span>
                <span className="text-sm text-gray-600 text-right">{wq.target.pronunciationKo}</span>
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-3 w-full">
          <Link href="/alphabet" className="flex-1 py-3 bg-gray-200 rounded-2xl font-bold text-center text-gray-700">
            돌아가기
          </Link>
          <button onClick={restart} className="flex-1 py-3 bg-red-600 text-white rounded-2xl font-bold">
            다시 풀기
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center gap-3 z-10">
        <Link href="/alphabet" className="text-2xl">←</Link>
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div
            className="bg-red-500 h-2 rounded-full transition-all"
            style={{ width: `${(current / questions.length) * 100}%` }}
          />
        </div>
        <span className="text-sm text-gray-500">{current + 1}/{questions.length}</span>
      </div>

      <div className="p-6 flex flex-col gap-6">
        <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 flex flex-col items-center gap-3 min-h-44">
          <p className="text-sm text-gray-400">
            {q.type === 'to-pronunciation' ? '이 문자의 발음은?' : '이 발음의 문자는?'}
          </p>
          {q.type === 'to-pronunciation' ? (
            <span className="text-8xl font-bold text-gray-900">{q.target.char}</span>
          ) : (
            <p className="text-xl font-bold text-red-700 text-center px-2">{q.target.pronunciationKo}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {q.choices.map(choice => {
            const isSelected = selected === choice
            const isCorrect = choice === q.answer
            let cls = 'bg-white border-2 border-gray-200'
            if (selected) {
              if (isCorrect) cls = 'bg-green-100 border-2 border-green-500'
              else if (isSelected) cls = 'bg-red-100 border-2 border-red-500'
            }
            return (
              <button
                key={choice}
                onClick={() => handleSelect(choice)}
                className={`${cls} rounded-2xl p-4 font-bold text-center transition-all active:scale-95 min-h-20`}
              >
                {q.type === 'to-pronunciation' ? (
                  <span className="text-sm text-gray-800 leading-snug">{choice}</span>
                ) : (
                  <span className="text-5xl text-gray-900">{choice}</span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
