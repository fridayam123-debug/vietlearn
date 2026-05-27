'use client'
import { useState, useRef } from 'react'

// Levenshtein distance for similarity scoring
function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length
  const dp: number[][] = []
  for (let i = 0; i <= m; i++) {
    dp[i] = []
    for (let j = 0; j <= n; j++) {
      dp[i][j] = i === 0 ? j : j === 0 ? i : 0
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    }
  }
  return dp[m][n]
}

function similarity(a: string, b: string): number {
  const maxLen = Math.max(a.length, b.length)
  if (maxLen === 0) return 100
  return Math.round((1 - levenshtein(a.toLowerCase(), b.toLowerCase()) / maxLen) * 100)
}

interface Props {
  expected: string   // Vietnamese word to pronounce (e.g. 'ba', 'ăn')
  hint: string       // Korean meaning hint (e.g. '아빠')
}

type State = 'idle' | 'listening' | 'done' | 'error' | 'unsupported'

export function PronunciationPractice({ expected, hint }: Props) {
  const [state, setState] = useState<State>('idle')
  const [recognized, setRecognized] = useState('')
  const [score, setScore] = useState(0)
  const recRef = useRef<SpeechRecognition | null>(null)

  function start(e: React.MouseEvent) {
    e.stopPropagation()
    const SR = (window as typeof window & { SpeechRecognition?: typeof SpeechRecognition; webkitSpeechRecognition?: typeof SpeechRecognition }).SpeechRecognition
      || (window as typeof window & { webkitSpeechRecognition?: typeof SpeechRecognition }).webkitSpeechRecognition
    if (!SR) { setState('unsupported'); return }

    const rec = new SR()
    rec.lang = 'vi-VN'
    rec.interimResults = false
    rec.maxAlternatives = 5
    recRef.current = rec

    setState('listening')
    setRecognized('')
    setScore(0)

    rec.onresult = (ev) => {
      const alts = Array.from(ev.results[0]) as SpeechRecognitionAlternative[]
      const transcripts = alts.map(r => r.transcript.trim())

      // Pick the alternative with best similarity to expected
      let best = transcripts[0] ?? ''
      let bestScore = 0
      for (const t of transcripts) {
        const s = similarity(t, expected)
        if (s > bestScore) { bestScore = s; best = t }
      }

      setRecognized(best)
      setScore(bestScore)
      setState('done')
    }

    rec.onerror = (ev) => {
      if (ev.error === 'no-speech') {
        setState('idle')
      } else {
        setState('error')
      }
    }

    rec.start()
  }

  function cancel(e: React.MouseEvent) {
    e.stopPropagation()
    recRef.current?.abort()
    setState('idle')
  }

  function reset(e: React.MouseEvent) {
    e.stopPropagation()
    recRef.current?.abort()
    setState('idle')
    setRecognized('')
    setScore(0)
  }

  const scoreColor =
    score >= 90 ? '#16a34a' :
    score >= 70 ? '#2563eb' :
    score >= 50 ? '#d97706' :
    '#dc2626'

  const feedback =
    score >= 90 ? '🌟 완벽해요!' :
    score >= 70 ? '👍 잘했어요!' :
    score >= 50 ? '🔄 조금만 더!' :
    '💪 다시 해봐요'

  if (state === 'unsupported') {
    return (
      <div style={{ fontSize: '13px', color: 'var(--muted)', textAlign: 'center', padding: '8px 0' }}>
        이 브라우저는 발음 인식을 지원하지 않아요 (Chrome 권장)
      </div>
    )
  }

  return (
    <div
      onClick={e => e.stopPropagation()}
      style={{
        width: '100%',
        border: '1.5px dashed var(--border)',
        borderRadius: 14,
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        background: 'var(--soft)',
      }}
    >
      {/* Header */}
      <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 600, textAlign: 'center' }}>
        🎤 발음 연습 — <span style={{ color: '#2563eb' }}>"{expected}"</span> ({hint}) 을 말해보세요
      </div>

      {/* IDLE */}
      {state === 'idle' && (
        <button
          className="btn btn-primary"
          onClick={start}
          style={{ fontSize: '15px', padding: '10px 28px' }}
        >
          🎙️ 녹음 시작
        </button>
      )}

      {/* LISTENING */}
      {state === 'listening' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ fontSize: '32px' }}>🎙️</div>
          <div style={{ fontSize: '14px', color: '#2563eb', fontWeight: 600 }}>
            듣고 있어요...
          </div>
          <button
            className="btn"
            onClick={cancel}
            style={{ fontSize: '13px' }}
          >
            취소
          </button>
        </div>
      )}

      {/* ERROR */}
      {state === 'error' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ fontSize: '14px', color: '#dc2626' }}>인식 실패. 다시 시도해주세요.</div>
          <button className="btn" onClick={reset}>다시 시도</button>
        </div>
      )}

      {/* DONE — result */}
      {state === 'done' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, width: '100%' }}>
          {/* Score */}
          <div style={{ fontSize: '44px', fontWeight: 800, color: scoreColor, lineHeight: 1 }}>
            {score}%
          </div>
          <div style={{ fontSize: '16px', fontWeight: 700 }}>{feedback}</div>

          {/* Comparison */}
          <div style={{
            background: '#fff',
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: '10px 14px',
            width: '100%',
            fontSize: '14px',
            lineHeight: 1.8,
          }}>
            <div>
              <span style={{ color: 'var(--muted)' }}>내 발음: </span>
              <span style={{ fontWeight: 700, color: scoreColor }}>"{recognized || '—'}"</span>
            </div>
            <div>
              <span style={{ color: 'var(--muted)' }}>정답: </span>
              <span style={{ fontWeight: 700, color: '#1a1a1a' }}>"{expected}"</span>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{
            width: '100%', height: 8,
            background: 'var(--border)',
            borderRadius: 4,
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              borderRadius: 4,
              background: scoreColor,
              width: `${score}%`,
              transition: 'width 0.6s ease',
            }} />
          </div>

          <button className="btn" onClick={reset} style={{ fontSize: '14px', marginTop: 2 }}>
            🔁 다시 연습
          </button>
        </div>
      )}
    </div>
  )
}
