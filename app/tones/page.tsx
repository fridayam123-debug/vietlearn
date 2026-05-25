'use client'
import { useState } from 'react'
import { tones, TONE_NAMES } from '@/data/alphabet'
import { useProgress } from '@/hooks/useProgress'
import { AudioButton } from '@/components/AudioButton'
import Link from 'next/link'

// pitch shape text and card accent colors per tone
const TONE_META = [
  { shape: '———',  accent: '#3b82f6', bg: '#eff6ff', border: '#bfdbfe' }, // ngang: flat
  { shape: '↘↘',  accent: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' }, // huyền: falling
  { shape: '↗↗',  accent: '#dc2626', bg: '#fef2f2', border: '#fecaca' }, // sắc: rising
  { shape: '↘↗',  accent: '#d97706', bg: '#fffbeb', border: '#fde68a' }, // hỏi: dip
  { shape: '↗!',   accent: '#db2777', bg: '#fdf2f8', border: '#fbcfe8' }, // ngã: broken rise
  { shape: '↘!',   accent: '#475569', bg: '#f8fafc', border: '#cbd5e1' }, // nặng: stopped
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
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)' }}>
      {/* Header */}
      <div className="sticky top-0 bg-white px-4 py-3 flex items-center gap-3 z-10" style={{ borderBottom: '1px solid var(--border)' }}>
        <Link href="/" className="text-2xl text-[#1a1a1a]">←</Link>
        <h1 className="font-bold text-lg text-[#1a1a1a]">베트남어 6성조</h1>
        <span className="ml-auto text-sm" style={{ color: 'var(--muted)' }}>{current + 1}/6</span>
      </div>

      {/* Dot progress */}
      <div className="px-4 pt-3 flex gap-2 justify-center">
        {tones.map((t, i) => (
          <div
            key={t.name}
            className="h-2 flex-1 rounded-full transition-all"
            style={{
              background: progress.viewedTones.includes(t.name)
                ? '#16a34a'
                : i === current
                ? meta.accent
                : 'var(--border)'
            }}
          />
        ))}
      </div>

      {/* Card */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6 pb-8">
        <div
          className="w-full rounded-3xl flex flex-col items-center justify-center gap-5 p-8"
          style={{
            maxWidth: '340px',
            minHeight: '360px',
            background: meta.bg,
            border: `1.5px solid ${meta.border}`,
            boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
          }}
        >
          {/* Tone name + mark */}
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold" style={{ color: meta.accent }}>{tone.name}</span>
            <span className="text-3xl font-bold opacity-60" style={{ color: meta.accent }}>{tone.mark}</span>
          </div>

          {/* Pitch shape */}
          <span className="text-5xl font-bold opacity-20" style={{ color: meta.accent, fontFamily: 'monospace' }}>
            {meta.shape}
          </span>

          {!revealed ? (
            <button
              onClick={handleReveal}
              className="px-8 py-3 rounded-2xl font-bold text-white text-lg active:scale-95 transition-all"
              style={{ background: meta.accent }}
            >
              발음 확인 👆
            </button>
          ) : (
            <div className="flex flex-col items-center gap-4 w-full">
              <p className="text-lg font-bold text-center" style={{ color: meta.accent }}>
                {tone.descriptionKo}
              </p>
              <div
                className="flex items-center gap-3 rounded-2xl px-5 py-3 w-full justify-center"
                style={{ background: 'rgba(255,255,255,0.7)' }}
              >
                <span className="text-3xl font-bold" style={{ color: '#1a1a1a' }}>{tone.example}</span>
                <span className="text-lg" style={{ color: 'var(--muted)' }}>= {tone.exampleMeaning}</span>
                <AudioButton text={tone.example} size="md" />
              </div>
            </div>
          )}
        </div>

        {/* Nav */}
        <div className="flex gap-3 w-full" style={{ maxWidth: '340px' }}>
          {current > 0 && (
            <button
              onClick={() => go(-1)}
              className="flex-1 py-3 rounded-2xl font-bold transition-all active:scale-95"
              style={{ background: 'var(--border)', color: 'var(--text)' }}
            >
              ← 이전
            </button>
          )}
          {revealed && (
            isLast ? (
              <Link
                href="/"
                className="flex-1 py-3 rounded-2xl font-bold text-white text-center"
                style={{ background: '#16a34a' }}
              >
                ✅ 완료!
              </Link>
            ) : (
              <button
                onClick={() => go(1)}
                className="flex-1 py-3 rounded-2xl font-bold text-white active:scale-95 transition-all"
                style={{ background: meta.accent }}
              >
                다음 →
              </button>
            )
          )}
        </div>
      </div>
    </div>
  )
}
