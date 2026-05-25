'use client'
import { useState } from 'react'
import { VocabItem } from '@/lib/types'
import { AudioButton } from './AudioButton'

export function FlashCard({ item, onViewed }: { item: VocabItem; onViewed?: () => void }) {
  const [flipped, setFlipped] = useState(false)

  function handleFlip() {
    if (!flipped) {
      setFlipped(true)
      onViewed?.()
    } else {
      setFlipped(false)
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="relative w-full cursor-pointer select-none"
      style={{ perspective: '1000px', height: '220px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white border-2 border-gray-200 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 p-6"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <p className="text-3xl font-bold text-gray-900 text-center">{item.vi}</p>
          <AudioButton text={item.vi} size="lg" />
          <p className="text-sm text-gray-400">탭하여 뜻 보기</p>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 bg-red-50 border-2 border-red-200 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-3 p-6"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-3xl font-bold text-red-700 text-center">{item.ko}</p>
          <p className="text-sm text-gray-600 text-center bg-white rounded-xl p-3 w-full">{item.usage}</p>
          <AudioButton text={item.vi} size="md" />
        </div>
      </div>
    </div>
  )
}
