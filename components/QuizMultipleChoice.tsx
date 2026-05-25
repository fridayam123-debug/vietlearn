'use client'
import { useState } from 'react'
import { QuizQuestion } from '@/lib/quiz'

export function QuizMultipleChoice({ question, onAnswer }: {
  question: QuizQuestion
  onAnswer: (correct: boolean) => void
}) {
  const [selected, setSelected] = useState<string | null>(null)

  function choose(opt: string) {
    if (selected) return
    setSelected(opt)
    setTimeout(() => onAnswer(opt === question.correct), 900)
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-center text-sm text-gray-500">
        {question.promptLang === 'vi' ? '베트남어 → 한국어' : '한국어 → 베트남어'}
      </p>
      <div className="bg-gray-50 rounded-2xl p-6 text-center">
        <p className="text-2xl font-bold text-gray-900">{question.prompt}</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {question.options.map(opt => {
          let cls = 'p-4 rounded-xl border-2 text-center font-medium transition-all '
          if (!selected) cls += 'border-gray-200 bg-white hover:border-red-300'
          else if (opt === question.correct) cls += 'border-green-500 bg-green-50 text-green-800'
          else if (opt === selected) cls += 'border-red-500 bg-red-50 text-red-800'
          else cls += 'border-gray-200 bg-white opacity-50'
          return (
            <button key={opt} onClick={() => choose(opt)} className={cls}>{opt}</button>
          )
        })}
      </div>
    </div>
  )
}
