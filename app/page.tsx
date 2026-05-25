'use client'
import Link from 'next/link'
import { topics } from '@/data/topics'
import { useProgress } from '@/hooks/useProgress'
import { ALPHABET_CHARS, TONE_NAMES } from '@/data/alphabet'

export default function Home() {
  const { alphabetDone, tonesDone, progress } = useProgress()
  const wordsUnlocked = alphabetDone && tonesDone

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Header */}
      <div style={{ background: 'var(--accent)', color: '#fff', padding: '20px 16px 18px' }}>
        <h1 className="text-2xl font-bold">🇻🇳 VietLearn</h1>
        <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.75)' }}>한국인을 위한 베트남어 학습</p>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {/* Alphabet card */}
        <Link
          href="/alphabet"
          className="flex items-center gap-4 p-4 rounded-2xl bg-white transition-all active:scale-[0.99]"
          style={{
            border: alphabetDone ? '1.5px solid #16a34a' : '1.5px solid var(--border)',
            boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
          }}
        >
          <span className="text-3xl">🔤</span>
          <div className="flex-1 min-w-0">
            <p className="font-bold" style={{ color: 'var(--text)' }}>베트남어 알파벳</p>
            <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>
              {progress.viewedAlphabet.length}/{ALPHABET_CHARS.length} · 29개 문자 + 발음
            </p>
            <div className="mt-2 h-1.5 rounded-full" style={{ background: 'var(--border)' }}>
              <div
                className="h-1.5 rounded-full transition-all"
                style={{ width: `${(progress.viewedAlphabet.length / ALPHABET_CHARS.length) * 100}%`, background: alphabetDone ? '#16a34a' : 'var(--accent)' }}
              />
            </div>
          </div>
          {alphabetDone
            ? <span className="text-green-600 text-xl flex-shrink-0">✅</span>
            : <span className="text-xs font-bold px-2 py-1 rounded-lg flex-shrink-0" style={{ background: '#fef9c3', color: '#a16207' }}>시작</span>
          }
        </Link>

        {/* Tones card */}
        <Link
          href={alphabetDone ? '/tones' : '#'}
          className="flex items-center gap-4 p-4 rounded-2xl bg-white transition-all active:scale-[0.99]"
          style={{
            border: !alphabetDone ? '1.5px solid var(--border)' : tonesDone ? '1.5px solid #16a34a' : '1.5px solid var(--border)',
            boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
            opacity: !alphabetDone ? 0.5 : 1,
            pointerEvents: !alphabetDone ? 'none' : 'auto',
          }}
        >
          <span className="text-3xl">🎵</span>
          <div className="flex-1 min-w-0">
            <p className="font-bold" style={{ color: 'var(--text)' }}>{!alphabetDone ? '🔒 ' : ''}6성조</p>
            <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>
              {progress.viewedTones.length}/{TONE_NAMES.length} · 베트남어 6가지 성조
            </p>
            <div className="mt-2 h-1.5 rounded-full" style={{ background: 'var(--border)' }}>
              <div
                className="h-1.5 rounded-full transition-all"
                style={{ width: `${(progress.viewedTones.length / TONE_NAMES.length) * 100}%`, background: tonesDone ? '#16a34a' : '#7c3aed' }}
              />
            </div>
          </div>
          {tonesDone && <span className="text-green-600 text-xl flex-shrink-0">✅</span>}
        </Link>

        {/* Topics */}
        <div className="flex items-center justify-between mt-1">
          <h2 className="font-bold" style={{ color: 'var(--text)' }}>주제별 학습</h2>
          {!wordsUnlocked && (
            <span className="text-xs" style={{ color: 'var(--muted)' }}>알파벳 + 성조 완료 후 해제</span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {topics.map(topic => (
            <Link
              key={topic.id}
              href={wordsUnlocked ? `/topic/${topic.id}` : '#'}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white text-center transition-all active:scale-[0.99]"
              style={{
                border: '1.5px solid var(--border)',
                boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
                opacity: wordsUnlocked ? 1 : 0.45,
                pointerEvents: wordsUnlocked ? 'auto' : 'none',
              }}
            >
              <span className="text-3xl">{topic.icon}</span>
              <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
                {!wordsUnlocked ? '🔒 ' : ''}{topic.nameKo}
              </p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{topic.nameVi}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
