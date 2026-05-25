'use client'
import Link from 'next/link'
import { topics } from '@/data/topics'
import { useProgress } from '@/hooks/useProgress'
import { ALPHABET_CHARS, TONE_NAMES } from '@/data/alphabet'

export default function Home() {
  const { alphabetDone, tonesDone, progress } = useProgress()
  const wordsUnlocked = alphabetDone && tonesDone

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white px-4 py-6">
        <h1 className="text-2xl font-bold">🇻🇳 VietLearn</h1>
        <p className="text-red-200 text-sm mt-1">한국인을 위한 베트남어 학습</p>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {/* Alphabet */}
        <Link
          href="/alphabet"
          className={`p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${
            alphabetDone ? 'border-green-400 bg-green-50' : 'border-yellow-400 bg-yellow-50 hover:border-yellow-500'
          }`}
        >
          <span className="text-3xl">🔤</span>
          <div className="flex-1">
            <p className="font-bold text-gray-900">베트남어 알파벳</p>
            <p className="text-sm text-gray-600">
              {progress.viewedAlphabet.length}/{ALPHABET_CHARS.length} · 29개 문자 + 발음 + 입 모양
            </p>
          </div>
          {alphabetDone
            ? <span className="text-green-600 font-bold text-xl">✅</span>
            : <span className="text-yellow-600 font-bold text-sm bg-yellow-200 px-2 py-1 rounded-lg">시작</span>
          }
        </Link>

        {/* Tones */}
        <Link
          href={alphabetDone ? '/tones' : '#'}
          className={`p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${
            !alphabetDone
              ? 'opacity-50 pointer-events-none border-gray-200 bg-gray-50'
              : tonesDone
              ? 'border-green-400 bg-green-50'
              : 'border-yellow-400 bg-yellow-50 hover:border-yellow-500'
          }`}
        >
          <span className="text-3xl">🎵</span>
          <div className="flex-1">
            <p className="font-bold text-gray-900">{!alphabetDone ? '🔒 ' : ''}6성조</p>
            <p className="text-sm text-gray-600">
              {progress.viewedTones.length}/{TONE_NAMES.length} · 베트남어 6가지 성조
            </p>
          </div>
          {tonesDone && <span className="text-green-600 font-bold text-xl">✅</span>}
        </Link>

        {/* Topics */}
        <div className="flex items-center justify-between mt-2">
          <h2 className="font-bold text-gray-700">주제별 학습</h2>
          {!wordsUnlocked && (
            <span className="text-xs text-gray-500">알파벳 + 성조 완료 후 잠금 해제</span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {topics.map(topic => (
            <Link
              key={topic.id}
              href={wordsUnlocked ? `/topic/${topic.id}` : '#'}
              className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 text-center transition-all ${
                wordsUnlocked
                  ? 'border-gray-200 bg-white hover:border-red-300 hover:shadow-sm'
                  : 'opacity-50 pointer-events-none border-gray-200 bg-gray-50'
              }`}
            >
              <span className="text-3xl">{topic.icon}</span>
              <p className="font-medium text-sm text-gray-900">
                {!wordsUnlocked ? '🔒 ' : ''}{topic.nameKo}
              </p>
              <p className="text-xs text-gray-400">{topic.nameVi}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
