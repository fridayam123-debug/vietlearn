'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { QuizMultipleChoice } from '@/components/QuizMultipleChoice'
import { QuizTyping } from '@/components/QuizTyping'
import { useProgress } from '@/hooks/useProgress'
import { generateQuiz, QuizQuestion } from '@/lib/quiz'
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
  'real-estate': () => import('@/data/real-estate'),
}

export default function QuizPage() {
  const { topicId, sid } = useParams<{ topicId: string; sid: string }>()
  const router = useRouter()
  const [type, sessionStr] = sid.split('-')
  const session = parseInt(sessionStr)
  const { passQuiz } = useProgress()

  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [wrong, setWrong] = useState<QuizQuestion[]>([])

  useEffect(() => {
    const loader = DATA_MAP[topicId]
    if (!loader) return
    loader().then(mod => {
      const all: VocabItem[] = type === 'word' ? mod.words : mod.verbs
      setQuestions(generateQuiz(all.filter(v => v.session === session)))
    })
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

  if (!questions.length) return (
    <div className="flex items-center justify-center h-screen text-gray-500">로딩 중...</div>
  )

  if (done) {
    const passed = score >= 20
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 gap-6">
        <div className="text-6xl">{passed ? '🎉' : '😅'}</div>
        <h1 className="text-2xl font-bold">{passed ? '통과!' : '다시 도전!'}</h1>
        <p className="text-xl font-bold">{score}/25 정답</p>
        {!passed && (
          <p className="text-gray-600 text-center">80% 이상 맞혀야 통과해요. (20/25 이상)</p>
        )}
        {wrong.length > 0 && (
          <div className="w-full bg-white rounded-2xl p-4 border-2 border-red-200">
            <p className="font-bold text-red-700 mb-3">틀린 단어 복습 ({wrong.length}개)</p>
            {wrong.map(q => (
              <div key={q.item.id} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-gray-800">{q.item.vi}</span>
                <span className="text-red-700 font-medium">{q.item.ko}</span>
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-3 w-full">
          {!passed && (
            <button
              onClick={() => {
                const loader = DATA_MAP[topicId]
                if (!loader) return
                loader().then(mod => {
                  const all: VocabItem[] = type === 'word' ? mod.words : mod.verbs
                  setQuestions(generateQuiz(all.filter(v => v.session === session)))
                  setCurrent(0); setScore(0); setDone(false); setWrong([])
                })
              }}
              className="flex-1 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700"
            >
              다시 풀기
            </button>
          )}
          <Link href={`/topic/${topicId}`} className="flex-1 py-3 bg-gray-200 rounded-xl font-bold text-center flex items-center justify-center hover:bg-gray-300">
            돌아가기
          </Link>
        </div>
      </div>
    )
  }

  const q = questions[current]
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center gap-3 z-10">
        <Link href={`/topic/${topicId}`} className="text-2xl">←</Link>
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div
            className="bg-red-500 h-2 rounded-full transition-all"
            style={{ width: `${(current / questions.length) * 100}%` }}
          />
        </div>
        <span className="text-sm text-gray-500">{current + 1}/{questions.length}</span>
      </div>
      <div className="p-4">
        {q.type === 'multipleChoice'
          ? <QuizMultipleChoice question={q} onAnswer={handleAnswer} />
          : <QuizTyping question={q} onAnswer={handleAnswer} />
        }
      </div>
    </div>
  )
}
