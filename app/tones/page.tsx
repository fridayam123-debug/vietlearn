'use client'
import { useState } from 'react'
import { tones, TONE_NAMES } from '@/data/alphabet'
import { useProgress } from '@/hooks/useProgress'
import { AudioButton } from '@/components/AudioButton'
import Link from 'next/link'

const TONE_META = [
  { shape: '———',  accent: '#3b82f6', bg: '#eff6ff', border: '#bfdbfe' },
  { shape: '↘↘',  accent: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' },
  { shape: '↗↗',  accent: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
  { shape: '↘↗',  accent: '#d97706', bg: '#fffbeb', border: '#fde68a' },
  { shape: '↗!',  accent: '#db2777', bg: '#fdf2f8', border: '#fbcfe8' },
  { shape: '↘!',  accent: '#475569', bg: '#f8fafc', border: '#cbd5e1' },
]

export default function TonesPage() {
  const { progress, viewTone } = useProgress()
  const [current, setCurrent] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const tone = tones[current]
  const meta = TONE_META[current]
  const isLast = current === TONE_NAMES.length - 1

  function handleReveal() {
    setRevealed(true)
    viewTone(tone.name)
  }

  function go(dir: number) {
    setRevealed(false)
    setTimeout(() => setCurrent(c => c + dir), 150)
  }

  return (
    <>
      {/* Sticky header */}
      <div className="page-header">
        <Link href="/" className="back-link" style={{ margin: 0 }}>←</Link>
        <h1>베트남어 6성조</h1>
        <span className="ph-count">{current + 1}/6</span>
      </div>

      <div className="app" style={{ paddingTop: 20 }}>
        {/* Dot progress */}
        <div className="tone-dots">
          {tones.map((t, i) => (
            <div
              key={t.name}
              className="tone-dot"
              style={{
                background: progress.viewedTones.includes(t.name)
                  ? 'var(--success)'
                  : i === current
                  ? meta.accent
                  : 'var(--border)',
              }}
            />
          ))}
        </div>

        {/* Card */}
        <div className="flashcard-screen">
          <div
            className="tone-card"
            style={{ background: meta.bg, border: `1.5px solid ${meta.border}` }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span className="tone-name" style={{ color: meta.accent }}>{tone.name}</span>
              <span className="tone-mark" style={{ color: meta.accent }}>{tone.mark}</span>
            </div>
            <span className="tone-shape" style={{ color: meta.accent }}>{meta.shape}</span>

            {!revealed ? (
              <button
                onClick={handleReveal}
                className="btn btn-primary"
                style={{ background: meta.accent, borderColor: meta.accent, fontSize: '17px', padding: '14px 32px' }}
              >
                발음 확인 👆
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
                <p className="tone-desc" style={{ color: meta.accent }}>{tone.descriptionKo}</p>
                <div className="fc-example">
                  <span className="ex-vi" style={{ color: '#1a1a1a' }}>{tone.example}</span>
                  <span className="ex-ko">= {tone.exampleMeaning}</span>
                  <AudioButton text={tone.example} size="md" />
                </div>
              </div>
            )}
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
            <span className="flashcard-progress">{current + 1} / 6</span>
            {revealed && (
              isLast ? (
                <Link href="/" className="btn btn-success" style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}>
                  ✅ 완료!
                </Link>
              ) : (
                <button
                  className="btn"
                  onClick={() => go(1)}
                  style={{ flex: 1, background: meta.accent, color: '#fff', borderColor: meta.accent }}
                >
                  다음 →
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}
