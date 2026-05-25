'use client'
import { useState } from 'react'
import { alphabet, ALPHABET_CHARS } from '@/data/alphabet'
import { useProgress } from '@/hooks/useProgress'
import { AudioButton } from '@/components/AudioButton'
import Link from 'next/link'

export default function AlphabetPage() {
  const { progress, viewAlphabet } = useProgress()
  const [current, setCurrent] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const letter = alphabet[current]
  const isLast = current === ALPHABET_CHARS.length - 1
  const allViewed = progress.viewedAlphabet.length >= ALPHABET_CHARS.length
  const viewed = progress.viewedAlphabet.includes(letter.char)

  function handleFlip() {
    const next = !flipped
    setFlipped(next)
    if (next) viewAlphabet(letter.char)
  }

  function go(dir: number) {
    setFlipped(false)
    setTimeout(() => setCurrent(c => c + dir), 220)
  }

  const pct = Math.round((progress.viewedAlphabet.length / ALPHABET_CHARS.length) * 100)

  return (
    <>
      {/* Sticky header */}
      <div className="page-header">
        <Link href="/" className="back-link" style={{ margin: 0 }}>←</Link>
        <h1>베트남어 알파벳</h1>
        <span className="ph-count">{current + 1}/{ALPHABET_CHARS.length}</span>
      </div>

      <div className="app" style={{ paddingTop: 20 }}>
        {/* Progress + quiz shortcut */}
        <div style={{ marginBottom: 24 }}>
          <div className="bar-labels">
            <span>학습 진도</span>
            <span>{progress.viewedAlphabet.length}/{ALPHABET_CHARS.length} ({pct}%)</span>
          </div>
          <div className="progress-bar" style={{ marginBottom: 12 }}>
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <Link href="/alphabet/quiz" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', textDecoration: 'none', display: 'block' }}>
            🎯 알파벳 테스트 시작
          </Link>
        </div>

        {/* Flip card */}
        <div className="flashcard-screen">
          <div className="flip-wrapper" onClick={handleFlip} style={{ minHeight: 360 }}>
            <div className={`flip-inner${flipped ? ' flipped' : ''}`}>
              {/* Front */}
              <div className="flip-front">
                {viewed && <div className="fc-badge">✓</div>}
                <span className="fc-char">{letter.char}</span>
                <span style={{ fontSize: '44px', color: 'var(--border)', fontWeight: 300, lineHeight: 1 }}>
                  {letter.char.toUpperCase()}
                </span>
                <span className="fc-hint">탭하여 발음 확인 👆</span>
              </div>
              {/* Back */}
              <div className="flip-back">
                <span style={{ fontSize: '52px', fontWeight: 700 }}>{letter.char}</span>
                <span className="fc-ko">{letter.pronunciationKo}</span>
                <span className="fc-desc">{letter.mouthShape}</span>
                <div className="fc-example">
                  <span className="ex-vi">{letter.example}</span>
                  <span className="ex-ko">= {letter.exampleMeaning}</span>
                  <AudioButton text={letter.example} size="sm" />
                </div>
                <AudioButton text={letter.char} size="lg" />
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="flashcard-nav">
            <button
              className="btn"
              onClick={() => go(-1)}
              disabled={current === 0}
              style={{ flex: 1 }}
            >
              ← 이전
            </button>
            <span className="flashcard-progress">{current + 1} / {ALPHABET_CHARS.length}</span>
            {!isLast ? (
              <button className="btn btn-primary" onClick={() => go(1)} style={{ flex: 1 }}>
                다음 →
              </button>
            ) : allViewed ? (
              <Link href="/alphabet/quiz" className="btn btn-success" style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}>
                테스트 시작 🎯
              </Link>
            ) : (
              <button className="btn" onClick={() => setCurrent(0)} style={{ flex: 1, background: '#ca8a04', color: '#fff', borderColor: '#ca8a04' }}>
                처음부터
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
