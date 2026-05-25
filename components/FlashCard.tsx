'use client'
import { useState } from 'react'
import { VocabItem } from '@/lib/types'
import { AudioButton } from './AudioButton'

function parseUsage(usage: string): { vi: string; ko: string } {
  const prefix = 'Ví dụ: '
  const start = usage.startsWith(prefix) ? prefix.length : 0
  const parenIdx = usage.indexOf(' (', start)
  if (parenIdx === -1) return { vi: usage.substring(start), ko: '' }
  const vi = usage.substring(start, parenIdx).replace(/\.$/, '').trim()
  const ko = usage.substring(parenIdx + 2, usage.lastIndexOf(')')).replace(/\.$/, '').trim()
  return { vi, ko }
}

export function FlashCard({ item, onViewed }: { item: VocabItem; onViewed?: () => void }) {
  const [flipped, setFlipped] = useState(false)
  const example = parseUsage(item.usage)

  function handleFlip() {
    if (!flipped) { setFlipped(true); onViewed?.() }
    else setFlipped(false)
  }

  return (
    <div className="flip-wrapper" onClick={handleFlip}>
      <div className={`flip-inner${flipped ? ' flipped' : ''}`}>

        {/* Front */}
        <div className="flip-front">
          <span className="fc-vi">{item.vi}</span>
          <span className="fc-ko">{item.ko}</span>
          <AudioButton text={item.vi} size="lg" />
          {example.vi && (
            <div style={{
              fontSize: '14px',
              color: 'var(--muted)',
              textAlign: 'center',
              lineHeight: 1.6,
              padding: '0 12px',
              fontStyle: 'italic',
            }}>
              {example.vi}
            </div>
          )}
          <span className="fc-hint">탭하여 예문 보기 👆</span>
        </div>

        {/* Back */}
        <div className="flip-back">
          <span className="fc-ko" style={{ fontSize: '28px' }}>{item.ko}</span>

          <div style={{
            width: '100%',
            background: 'var(--soft)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: '14px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '17px', fontWeight: 600, color: 'var(--fg)', lineHeight: 1.5 }}>
              {example.vi}
            </div>
            {example.ko && (
              <div style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.4 }}>
                {example.ko}
              </div>
            )}
          </div>

          {/* Example audio — centered, no word audio */}
          <AudioButton text={example.vi} size="lg" />
        </div>

      </div>
    </div>
  )
}
