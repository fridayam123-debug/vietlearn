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
    setTimeout(() => setCurrent(c => c + dir), 200)
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)' }}>
      {/* Header */}
      <div className="sticky top-0 bg-white px-4 py-3 flex items-center gap-3 z-10" style={{ borderBottom: '1px solid var(--border)' }}>
        <Link href="/" className="text-2xl text-[#1a1a1a]">←</Link>
        <h1 className="font-bold text-lg text-[#1a1a1a]">베트남어 알파벳</h1>
        <span className="ml-auto text-sm" style={{ color: 'var(--muted)' }}>{current + 1}/{ALPHABET_CHARS.length}</span>
      </div>

      {/* Progress bar */}
      <div className="px-4 pt-3">
        <div className="rounded-full h-1.5" style={{ background: 'var(--border)' }}>
          <div
            className="h-1.5 rounded-full transition-all"
            style={{ width: `${(progress.viewedAlphabet.length / ALPHABET_CHARS.length) * 100}%`, background: 'var(--accent)' }}
          />
        </div>
        <p className="text-xs mt-1 text-right" style={{ color: 'var(--muted)' }}>
          {progress.viewedAlphabet.length}개 학습 완료
        </p>
      </div>

      {/* Card area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6 pb-8">
        <div
          onClick={handleFlip}
          style={{ perspective: '1000px', width: '100%', maxWidth: '340px', height: '360px' }}
          className="cursor-pointer select-none"
        >
          <div
            className="relative w-full h-full transition-transform duration-500"
            style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center gap-3"
              style={{ backfaceVisibility: 'hidden', border: '1.5px solid var(--border)', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
            >
              {viewed && (
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">✓</div>
              )}
              <span className="font-bold" style={{ fontSize: '88px', lineHeight: 1, color: 'var(--text)' }}>{letter.char}</span>
              <span className="font-light" style={{ fontSize: '44px', color: 'var(--border)' }}>{letter.char.toUpperCase()}</span>
              <p className="text-sm mt-3" style={{ color: 'var(--muted)' }}>탭하여 발음 확인 👆</p>
            </div>
            {/* Back */}
            <div
              className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center gap-4 p-7"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', border: '1.5px solid var(--accent)', boxShadow: '0 2px 12px rgba(220,38,38,0.1)' }}
            >
              <span className="font-bold text-5xl" style={{ color: 'var(--text)' }}>{letter.char}</span>
              <p className="text-xl font-bold text-center" style={{ color: 'var(--accent)' }}>{letter.pronunciationKo}</p>
              <p className="text-sm text-center leading-relaxed" style={{ color: 'var(--muted)' }}>{letter.mouthShape}</p>
              <div className="flex items-center gap-3 rounded-2xl px-4 py-2.5 w-full justify-center" style={{ background: 'var(--bg)' }}>
                <span className="font-bold text-lg" style={{ color: 'var(--accent)' }}>{letter.example}</span>
                <span className="text-sm" style={{ color: 'var(--muted)' }}>= {letter.exampleMeaning}</span>
                <AudioButton text={letter.example} size="sm" />
              </div>
              <AudioButton text={letter.char} size="lg" />
            </div>
          </div>
        </div>

        {/* Nav buttons */}
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
          {!isLast ? (
            <button
              onClick={() => go(1)}
              className="flex-1 py-3 rounded-2xl font-bold text-white transition-all active:scale-95"
              style={{ background: 'var(--accent)' }}
            >
              다음 →
            </button>
          ) : allViewed ? (
            <Link
              href="/alphabet/quiz"
              className="flex-1 py-3 rounded-2xl font-bold text-white text-center transition-all"
              style={{ background: '#16a34a' }}
            >
              테스트 시작 🎯
            </Link>
          ) : (
            <button
              onClick={() => setCurrent(0)}
              className="flex-1 py-3 rounded-2xl font-bold text-white"
              style={{ background: '#ca8a04' }}
            >
              처음부터 다시
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
