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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center gap-3 z-10">
        <Link href="/" className="text-2xl">←</Link>
        <h1 className="font-bold text-lg">베트남어 알파벳</h1>
        <span className="ml-auto text-sm text-gray-500">{current + 1}/{ALPHABET_CHARS.length}</span>
      </div>

      <div className="px-4 pt-3">
        <div className="bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-red-500 h-1.5 rounded-full transition-all"
            style={{ width: `${((current + 1) / ALPHABET_CHARS.length) * 100}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1 text-right">{progress.viewedAlphabet.length}개 학습 완료</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
        <div
          onClick={handleFlip}
          style={{ perspective: '1000px', width: '100%', maxWidth: '320px', height: '340px' }}
          className="cursor-pointer"
        >
          <div
            className="relative w-full h-full transition-transform duration-500"
            style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 bg-white border-2 border-gray-200 rounded-3xl shadow-lg flex flex-col items-center justify-center gap-2"
              style={{ backfaceVisibility: 'hidden' }}
            >
              {progress.viewedAlphabet.includes(letter.char) && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
              )}
              <span className="text-8xl font-bold text-gray-900">{letter.char}</span>
              <span className="text-5xl font-light text-gray-300">{letter.char.toUpperCase()}</span>
              <p className="text-sm text-gray-400 mt-4">탭하여 발음 확인 👆</p>
            </div>
            {/* Back */}
            <div
              className="absolute inset-0 bg-yellow-50 border-2 border-yellow-300 rounded-3xl shadow-lg flex flex-col items-center justify-center gap-3 p-6"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <span className="text-5xl font-bold text-gray-900">{letter.char}</span>
              <p className="text-xl font-bold text-yellow-800 text-center">{letter.pronunciationKo}</p>
              <p className="text-sm text-gray-600 text-center leading-relaxed">{letter.mouthShape}</p>
              <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5">
                <span className="font-bold text-red-600 text-lg">{letter.example}</span>
                <span className="text-gray-500 text-sm">= {letter.exampleMeaning}</span>
                <AudioButton text={letter.example} size="sm" />
              </div>
              <AudioButton text={letter.char} size="lg" />
            </div>
          </div>
        </div>

        <div className="flex gap-3 w-full max-w-xs">
          {current > 0 && (
            <button
              onClick={() => go(-1)}
              className="flex-1 py-3 bg-gray-200 rounded-2xl font-bold text-gray-700"
            >
              ← 이전
            </button>
          )}
          {!isLast ? (
            <button
              onClick={() => go(1)}
              className="flex-1 py-3 bg-red-600 text-white rounded-2xl font-bold"
            >
              다음 →
            </button>
          ) : allViewed ? (
            <Link
              href="/alphabet/quiz"
              className="flex-1 py-3 bg-green-600 text-white rounded-2xl font-bold text-center"
            >
              테스트 시작 🎯
            </Link>
          ) : (
            <button
              onClick={() => go(1 - ALPHABET_CHARS.length)}
              className="flex-1 py-3 bg-yellow-500 text-white rounded-2xl font-bold"
            >
              처음부터 다시
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
