'use client'
import { useState, useMemo } from 'react'
import { alphabet } from '@/data/alphabet'
import { AlphabetLetter } from '@/lib/types'
import Link from 'next/link'

type QType = 'letter-to-ko' | 'ko-to-letter' | 'letter-to-example' | 'example-to-letter'

interface Question {
  type: QType
  target: AlphabetLetter
  choices: string[]
  answer: string
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

// Visual similarity groups for ko-to-letter distractors
const SIMILAR_LETTERS: Record<string, string[]> = {
  'a': ['ă', 'â'],
  'ă': ['a', 'â'],
  'â': ['a', 'ă'],
  'o': ['ô', 'ơ'],
  'ô': ['o', 'ơ'],
  'ơ': ['o', 'ô'],
  'e': ['ê'],
  'ê': ['e'],
  'u': ['ư'],
  'ư': ['u'],
}

function getDistractorsForKoToLetter(target: AlphabetLetter): AlphabetLetter[] {
  const similar = SIMILAR_LETTERS[target.char] || []
  const similarLetters = alphabet.filter(l => similar.includes(l.char))

  if (similarLetters.length >= 3) {
    return shuffle(similarLetters).slice(0, 3)
  }

  // Fallback to random if not enough similar ones
  const others = shuffle(alphabet.filter(l => l.char !== target.char)).slice(0, 3)
  return others
}

function makeQuestions(): Question[] {
  // All 29 letters, 4 rotating question types
  return alphabet.map((target, i) => {
    const typeIndex = i % 4

    if (typeIndex === 0) {
      // letter-to-ko: Show letter → pick pronunciation
      const others = shuffle(alphabet.filter(l => l.char !== target.char)).slice(0, 3)
      const choices = shuffle([target.pronunciationKo, ...others.map(l => l.pronunciationKo)])
      return { type: 'letter-to-ko', target, choices, answer: target.pronunciationKo }
    } else if (typeIndex === 1) {
      // ko-to-letter: Show pronunciation → pick letter
      const distractors = getDistractorsForKoToLetter(target)
      const choices = shuffle([target.char, ...distractors.map(l => l.char)])
      return { type: 'ko-to-letter', target, choices, answer: target.char }
    } else if (typeIndex === 2) {
      // letter-to-example: Show letter → pick example word
      const others = shuffle(alphabet.filter(l => l.char !== target.char)).slice(0, 3)
      const choices = shuffle([target.example, ...others.map(l => l.example)])
      return { type: 'letter-to-example', target, choices, answer: target.example }
    } else {
      // example-to-letter: Show example word → pick letter
      const others = shuffle(alphabet.filter(l => l.char !== target.char)).slice(0, 3)
      const choices = shuffle([target.char, ...others.map(l => l.char)])
      return { type: 'example-to-letter', target, choices, answer: target.char }
    }
  })
}

interface QuizState {
  questions: Question[]
  current: number
  selected: string | null
  score: number
  firstAttemptScore: number
  done: boolean
  wrong: Question[]
  retryMode: boolean
}

export default function AlphabetQuizPage() {
  const baseQuestions = useMemo(() => makeQuestions(), [])
  const [state, setState] = useState<QuizState>({
    questions: baseQuestions,
    current: 0,
    selected: null,
    score: 0,
    firstAttemptScore: 0,
    done: false,
    wrong: [],
    retryMode: false,
  })

  const q = state.questions[state.current]
  const PASS_THRESHOLD = 0.9

  function handleSelect(choice: string) {
    if (state.selected) return

    const correct = choice === q.answer
    setState(s => ({
      ...s,
      selected: choice,
      score: correct ? s.score + 1 : s.score,
      firstAttemptScore: !s.retryMode ? (correct ? s.firstAttemptScore + 1 : s.firstAttemptScore) : s.firstAttemptScore,
      wrong: !correct ? [...s.wrong, q] : s.wrong,
    }))

    setTimeout(() => {
      setState(s => {
        if (s.current + 1 >= s.questions.length) {
          // Check if still in first attempt phase (not retry)
          if (!s.retryMode && s.wrong.length > 0) {
            // Move to retry mode with wrong questions
            return {
              ...s,
              questions: shuffle(s.wrong),
              current: 0,
              selected: null,
              score: 0,
              wrong: [],
              retryMode: true,
            }
          } else {
            // All done
            return { ...s, done: true }
          }
        } else {
          return {
            ...s,
            current: s.current + 1,
            selected: null,
          }
        }
      })
    }, 900)
  }

  function restart() {
    setState({
      questions: makeQuestions(),
      current: 0,
      selected: null,
      score: 0,
      firstAttemptScore: 0,
      done: false,
      wrong: [],
      retryMode: false,
    })
  }

  if (state.done) {
    const passed = state.firstAttemptScore >= Math.ceil(baseQuestions.length * PASS_THRESHOLD)
    const targetScore = Math.ceil(baseQuestions.length * PASS_THRESHOLD)

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
              {state.firstAttemptScore}/{baseQuestions.length}
            </div>
            <div className="result-label">
              {passed
                ? '통과!'
                : `90% 이상 맞혀야 통과해요. (${targetScore}/${baseQuestions.length})`
              }
            </div>

            {state.retryMode && (
              <div className="retry-info" style={{
                marginBottom: 16,
                padding: '12px',
                background: 'var(--soft)',
                borderRadius: 12,
                fontSize: '13px',
                color: 'var(--muted)',
                textAlign: 'center',
              }}>
                재도전 완료!
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

  const pct = Math.round((state.current / state.questions.length) * 100)
  const targetScore = Math.ceil(baseQuestions.length * PASS_THRESHOLD)

  let questionLabel = ''
  if (q.type === 'letter-to-ko') {
    questionLabel = '이 문자의 발음은?'
  } else if (q.type === 'ko-to-letter') {
    questionLabel = '이 발음의 문자는?'
  } else if (q.type === 'letter-to-example') {
    questionLabel = '이 문자의 예시 단어는?'
  } else {
    questionLabel = '이 단어는 어느 문자에 속하나?'
  }

  return (
    <>
      <div className="page-header">
        <Link href="/alphabet" className="back-link" style={{ margin: 0 }}>←</Link>
        <h1>알파벳 테스트</h1>
        <span className="ph-count">{state.current + 1}/{state.questions.length}</span>
      </div>

      <div className="app" style={{ paddingTop: 20 }}>
        <div className="quiz-screen">
          <div className="quiz-progress">
            <div className="quiz-progress-fill" style={{ width: `${pct}%` }} />
          </div>

          {/* Score info */}
          <div style={{
            fontSize: '12px',
            color: 'var(--muted)',
            textAlign: 'center',
            marginBottom: 16,
          }}>
            1차 {state.firstAttemptScore}/{baseQuestions.length} (90% 목표: {targetScore})
          </div>

          <div className="quiz-question">
            <div className="q-hint">{questionLabel}</div>

            {q.type === 'letter-to-ko' && (
              <span className="target" style={{ fontSize: '72px', fontWeight: 700 }}>{q.target.char}</span>
            )}
            {q.type === 'ko-to-letter' && (
              <span className="target" style={{ fontSize: '24px', fontWeight: 600, color: 'var(--accent-dark)' }}>
                {q.target.pronunciationKo}
              </span>
            )}
            {q.type === 'letter-to-example' && (
              <span className="target" style={{ fontSize: '72px', fontWeight: 700 }}>{q.target.char}</span>
            )}
            {q.type === 'example-to-letter' && (
              <span className="target" style={{ fontSize: '28px', fontWeight: 600, color: '#2563eb' }}>
                {q.target.example}
              </span>
            )}
          </div>

          <div className="quiz-choices">
            {q.choices.map(choice => {
              let cls = 'quiz-choice'
              if (state.selected) {
                if (choice === q.answer) cls += ' correct'
                else if (state.selected === choice) cls += ' wrong'
              }

              const isBigFont = q.type === 'ko-to-letter' || q.type === 'example-to-letter'

              return (
                <button key={choice} className={cls} onClick={() => handleSelect(choice)}>
                  {isBigFont ? (
                    <span style={{ fontSize: '48px', fontWeight: 700 }}>{choice}</span>
                  ) : (
                    <span style={{ fontSize: '14px', lineHeight: 1.4 }}>{choice}</span>
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
