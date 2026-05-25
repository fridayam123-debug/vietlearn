'use client'
import { useState } from 'react'
import { tones, TONE_NAMES } from '@/data/alphabet'
import { useProgress } from '@/hooks/useProgress'
import { AudioButton } from '@/components/AudioButton'
import Link from 'next/link'

const TONE_SHAPE = ['—', '↘', '↗', '↘↗', '↗꺾', '↘꺾']
const TONE_COLOR = [
  'bg-blue-50 border-blue-300 text-blue-800',
  'bg-purple-50 border-purple-300 text-purple-800',
  'bg-red-50 border-red-300 text-red-800',
  'bg-orange-50 border-orange-300 text-orange-800',
  'bg-pink-50 border-pink-300 text-pink-800',
  'bg-gray-100 border-gray-400 text-gray-800',
]

export default function TonesPage() {
  const { progress, viewTone } = useProgress()
  const [current, setCurrent] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const tone = tones[current]
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center gap-3 z-10">
        <Link href="/" className="text-2xl">←</Link>
        <h1 className="font-bold text-lg">베트남어 6성조</h1>
        <span className="ml-auto text-sm text-gray-500">{current + 1}/6</span>
      </div>

      <div className="px-4 pt-3">
        <div className="flex gap-1.5">
          {tones.map((t, i) => (
            <div
              key={t.name}
              className={`flex-1 h-2 rounded-full transition-all ${
                progress.viewedTones.includes(t.name)
                  ? 'bg-green-500'
                  : i === current
                  ? 'bg-red-400'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
        <div className={`w-full max-w-xs rounded-3xl border-2 shadow-lg p-8 flex flex-col items-center gap-4 min-h-80 ${TONE_COLOR[current]}`}>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold">{tone.name}</span>
            <span className="text-3xl font-bold opacity-70">{tone.mark}</span>
          </div>

          <div className="text-5xl font-bold opacity-20">{TONE_SHAPE[current]}</div>

          {!revealed ? (
            <button
              onClick={handleReveal}
              className="mt-4 px-8 py-3 bg-white rounded-2xl font-bold text-gray-800 shadow-sm text-lg"
            >
              발음 확인 👆
            </button>
          ) : (
            <div className="flex flex-col items-center gap-4 w-full">
              <p className="text-lg font-bold text-center">{tone.descriptionKo}</p>
              <div className="flex items-center gap-3 bg-white bg-opacity-70 rounded-2xl px-5 py-3 w-full justify-center">
                <span className="text-3xl font-bold">{tone.example}</span>
                <span className="text-lg opacity-70">= {tone.exampleMeaning}</span>
                <AudioButton text={tone.example} size="md" />
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 w-full max-w-xs">
          {current > 0 && (
            <button onClick={() => go(-1)} className="flex-1 py-3 bg-gray-200 rounded-2xl font-bold text-gray-700">
              ← 이전
            </button>
          )}
          {revealed && (
            isLast ? (
              <Link href="/" className="flex-1 py-3 bg-green-600 text-white rounded-2xl font-bold text-center">
                ✅ 완료!
              </Link>
            ) : (
              <button onClick={() => go(1)} className="flex-1 py-3 bg-red-600 text-white rounded-2xl font-bold">
                다음 →
              </button>
            )
          )}
        </div>
      </div>
    </div>
  )
}
