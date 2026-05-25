'use client'
import { useState } from 'react'
import { VocabItem } from '@/lib/types'
import { AudioButton } from './AudioButton'

export function FlashCard({ item, onViewed }: { item: VocabItem; onViewed?: () => void }) {
  const [flipped, setFlipped] = useState(false)

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
          <span className="fc-hint">탭하여 예문 보기</span>
        </div>
        {/* Back */}
        <div className="flip-back">
          <span className="fc-ko" style={{ fontSize: '32px' }}>{item.ko}</span>
          <div style={{
            width: '100%',
            background: 'var(--soft)',
            borderRadius: '12px',
            padding: '16px 20px',
            fontSize: '15px',
            lineHeight: '1.6',
            color: 'var(--fg)',
            textAlign: 'center',
          }}>
            {item.usage}
          </div>
          <AudioButton text={item.vi} size="lg" />
        </div>
      </div>
    </div>
  )
}
