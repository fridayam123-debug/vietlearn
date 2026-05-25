'use client'
import { useState } from 'react'
import { QuizQuestion } from '@/lib/quiz'
import { VietKeyboard } from './VietKeyboard'

export function QuizTyping({ question, onAnswer }: {
  question: QuizQuestion
  onAnswer: (correct: boolean) => void
}) {
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function submit() {
    if (submitted || !input.trim()) return
    setSubmitted(true)
    const correct = input.trim().toLowerCase() === question.correct.toLowerCase()
    setTimeout(() => onAnswer(correct), 1200)
  }

  const isCorrect = submitted && input.trim().toLowerCase() === question.correct.toLowerCase()

  return (
    <div className="flex flex-col gap-4">
      <p className="text-center text-sm text-gray-500">
        {question.promptLang === 'vi' ? '베트남어 → 한국어' : '한국어 → 베트남어'}
      </p>
      <div className="bg-gray-50 rounded-2xl p-6 text-center">
        <p className="text-2xl font-bold text-gray-900">{question.prompt}</p>
      </div>
      <div className={`border-2 rounded-xl p-3 ${submitted ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-gray-300 bg-white'}`}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && submit()}
          disabled={submitted}
          className="w-full bg-transparent outline-none text-lg text-center"
          placeholder="답을 입력하세요"
        />
      </div>
      {submitted && !isCorrect && (
        <p className="text-center text-green-700 font-medium bg-green-50 rounded-xl p-2">
          정답: {question.correct}
        </p>
      )}
      {question.answerLang === 'vi' && (
        <VietKeyboard onChar={c => setInput(p => p + c)} onBackspace={() => setInput(p => p.slice(0, -1))} />
      )}
      {!submitted && (
        <button
          onClick={submit}
          className="w-full py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 active:scale-95 transition-all"
        >
          확인
        </button>
      )}
    </div>
  )
}
