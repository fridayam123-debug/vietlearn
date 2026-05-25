'use client'
import Link from 'next/link'
import { topics } from '@/data/topics'
import { useProgress } from '@/hooks/useProgress'
import { ALPHABET_CHARS, TONE_NAMES } from '@/data/alphabet'

export default function Home() {
  const { alphabetDone, tonesDone, progress } = useProgress()
  const wordsUnlocked = alphabetDone && tonesDone

  const alphabetPct = Math.round((progress.viewedAlphabet.length / ALPHABET_CHARS.length) * 100)
  const tonesPct    = Math.round((progress.viewedTones.length / TONE_NAMES.length) * 100)

  return (
    <div className="app">
      {/* Header */}
      <div className="app-header">
        <h1>🇻🇳 VietLearn</h1>
        <span style={{ fontSize: '14px', color: 'var(--muted)' }}>한국인을 위한 베트남어</span>
      </div>

      {/* Foundations */}
      <div className="section-title">기초 학습</div>
      <div className="topic-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: 480 }}>
        {/* Alphabet */}
        <Link href="/alphabet" className={`topic-card${alphabetDone ? ' done' : ''}`}>
          <span className="tc-icon">🔤</span>
          <div className="tc-name">베트남어 알파벳</div>
          <div className="tc-sub">{progress.viewedAlphabet.length}/{ALPHABET_CHARS.length} 학습</div>
          <div className="progress-bar" style={{ marginTop: 10 }}>
            <div className={`progress-fill${alphabetDone ? ' done' : ''}`} style={{ width: `${alphabetPct}%` }} />
          </div>
        </Link>

        {/* Tones */}
        <Link
          href={alphabetDone ? '/tones' : '#'}
          className={`topic-card${!alphabetDone ? ' locked' : tonesDone ? ' done' : ''}`}
        >
          <span className="tc-icon">🎵</span>
          <div className="tc-name">{!alphabetDone ? '🔒 ' : ''}6성조</div>
          <div className="tc-sub">{progress.viewedTones.length}/{TONE_NAMES.length} 학습</div>
          <div className="progress-bar" style={{ marginTop: 10 }}>
            <div className={`progress-fill${tonesDone ? ' done' : ''}`} style={{ width: `${tonesPct}%` }} />
          </div>
        </Link>
      </div>

      {/* Topics */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="section-title" style={{ margin: 0 }}>주제별 학습</div>
        {!wordsUnlocked && (
          <span style={{ fontSize: '13px', color: 'var(--muted)' }}>알파벳 + 성조 완료 후 해제</span>
        )}
      </div>

      <div className="topic-grid">
        {topics.map(topic => (
          <Link
            key={topic.id}
            href={wordsUnlocked ? `/topic/${topic.id}` : '#'}
            className={`topic-card${!wordsUnlocked ? ' locked' : ''}`}
          >
            <span className="tc-icon">{topic.icon}</span>
            <div className="tc-name">{!wordsUnlocked ? '🔒 ' : ''}{topic.nameKo}</div>
            <div className="tc-sub">{topic.nameVi}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
