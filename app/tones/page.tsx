'use client'
import { tones, TONE_NAMES } from '@/data/alphabet'
import { useProgress } from '@/hooks/useProgress'
import { AudioButton } from '@/components/AudioButton'
import Link from 'next/link'

export default function TonesPage() {
  const { progress, viewTone, tonesDone } = useProgress()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center gap-3 z-10">
        <Link href="/" className="text-2xl">←</Link>
        <h1 className="font-bold text-lg">베트남어 6성조</h1>
        <span className="ml-auto text-sm text-gray-500">
          {progress.viewedTones.length}/{TONE_NAMES.length}
        </span>
      </div>
      {tonesDone && (
        <div className="mx-4 mt-4 p-3 bg-green-100 text-green-800 rounded-xl text-center font-medium text-sm">
          ✅ 성조 완료! 이제 단어를 학습할 수 있어요.
        </div>
      )}
      <div className="flex flex-col gap-4 p-4">
        {tones.map(tone => (
          <div
            key={tone.name}
            onClick={() => viewTone(tone.name)}
            className={`bg-white rounded-2xl border-2 p-5 shadow-sm cursor-pointer transition-all ${
              progress.viewedTones.includes(tone.name) ? 'border-green-400' : 'border-gray-200 hover:border-yellow-400'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-lg text-gray-900">{tone.name} <span className="text-red-600">{tone.mark}</span></span>
              {progress.viewedTones.includes(tone.name) && <span className="text-green-500 text-xl">✓</span>}
            </div>
            <p className="text-red-700 font-medium mb-3">{tone.descriptionKo}</p>
            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
              <span className="text-2xl font-bold text-gray-800">{tone.example}</span>
              <span className="text-gray-600">= {tone.exampleMeaning}</span>
              <div className="ml-auto">
                <AudioButton text={tone.example} size="sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
