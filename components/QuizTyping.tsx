'use client'
import { useState } from 'react'
import { QuizQuestion } from '@/lib/quiz'
import { VietKeyboard } from './VietKeyboard'

export function QuizTyping({ question, onAnswer }: {
  question: QuizQuestion
  onAnswer: (correct: boolean) => void
}) {
  const [input, setInput]         = useState('')
  const [submitted, setSubmitted] = useState(false)

  function submit() {
    if (submitted || !input.trim()) return
    setSubmitted(true)
    const correct = input.trim().toLowerCase() === question.correct.toLowerCase()
    setTimeout(() => onAnswer(correct), 1200)
  }

  const isCorrect = submitted && input.trim().toLowerCase() === question.correct.toLowerCase()

  return (
    <div>
      <div className="quiz-question">
        <div className="q-hint">
          {question.promptLang === 'vi' ? '베트남어 → 한국어' : '한국어 → 베트남어'}
        </div>
        <span className="target">{question.prompt}</span>
      </div>

      <div style={{
        border: `1.5px solid ${submitted ? (isCorrect ? 'var(--success)' : 'var(--error)') : 'var(--border)'}`,
        background: submitted ? (isCorrect ? '#e6f4e6' : '#fbebea') : '#fff',
        borderRadius: 12,
        padding: '12px 16px',
        marginBottom: 12,
      }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && submit()}
          disabled={submitted}
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '18px',
            textAlign: 'center',
            fontFamily: 'inherit',
            color: 'var(--fg)',
          }}
          placeholder="답을 입력하세요"
        />
      </div>

      {submitted && !isCorrect && (
        <div style={{
          background: '#e6f4e6',
          borderRadius: 12,
          padding: '10px 16px',
          textAlign: 'center',
          color: 'var(--success)',
          fontWeight: 600,
          marginBottom: 12,
        }}>
          정답: {question.correct}
        </div>
      )}

      {question.answerLang === 'vi' && (
        <VietKeyboard onChar={c => setInput(p => p + c)} onBackspace={() => setInput(p => p.slice(0, -1))} />
      )}

      {!submitted && (
        <button className="btn btn-primary btn-full" onClick={submit} style={{ marginTop: 8 }}>
          확인
        </button>
      )}
    </div>
  )
}
