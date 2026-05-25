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
    <div>
      <div className="quiz-question">
        <div className="q-hint">
          {question.promptLang === 'vi' ? '베트남어 → 한국어' : '한국어 → 베트남어'}
        </div>
        <span className="target">{question.prompt}</span>
      </div>
      <div className="quiz-choices">
        {question.options.map(opt => {
          let cls = 'quiz-choice'
          if (selected) {
            if (opt === question.correct) cls += ' correct'
            else if (opt === selected) cls += ' wrong'
          }
          return (
            <button key={opt} onClick={() => choose(opt)} className={cls}>{opt}</button>
          )
        })}
      </div>
    </div>
  )
}
