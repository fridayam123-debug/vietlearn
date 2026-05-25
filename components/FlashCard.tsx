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
    <div
      onClick={handleFlip}
      className="relative w-full cursor-pointer select-none"
      style={{ perspective: '1000px', height: '360px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center gap-5 p-8"
          style={{ backfaceVisibility: 'hidden', border: '1.5px solid var(--border)', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
        >
          <p className="text-5xl font-bold text-[#1a1a1a] text-center leading-tight">{item.vi}</p>
          <p className="text-2xl font-semibold text-[#dc2626] text-center">{item.ko}</p>
          <AudioButton text={item.vi} size="lg" />
          <p className="text-sm text-[#888] mt-1">탭하여 예문 보기</p>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center gap-5 p-8"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', border: '1.5px solid #dc2626', boxShadow: '0 2px 12px rgba(220,38,38,0.1)' }}
        >
          <p className="text-3xl font-bold text-[#dc2626] text-center">{item.ko}</p>
          <div className="w-full bg-[#f7f9fb] rounded-2xl p-4">
            <p className="text-sm text-[#1a1a1a] text-center leading-relaxed">{item.usage}</p>
          </div>
          <AudioButton text={item.vi} size="lg" />
        </div>
      </div>
    </div>
  )
}
