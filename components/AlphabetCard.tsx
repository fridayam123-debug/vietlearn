'use client'
import { useState } from 'react'
import { AlphabetLetter } from '@/lib/types'
import { AudioButton } from './AudioButton'

export function AlphabetCard({ letter, onViewed }: { letter: AlphabetLetter; onViewed?: () => void }) {
  const [flipped, setFlipped] = useState(false)

  function handleFlip() {
    if (!flipped) { setFlipped(true); onViewed?.() }
    else setFlipped(false)
  }

  return (
    <div
      onClick={handleFlip}
      className="cursor-pointer w-full"
      style={{ perspective: '1000px', height: '110px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white border-2 border-gray-200 rounded-xl shadow flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-3xl font-bold text-gray-900">
            {letter.char.toUpperCase()}/{letter.char}
          </span>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 bg-yellow-50 border-2 border-yellow-300 rounded-xl shadow flex flex-col items-center justify-center gap-1 p-2"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-sm font-bold text-yellow-800 text-center">{letter.pronunciationKo}</p>
          <p className="text-xs text-gray-500 text-center leading-tight">{letter.mouthShape}</p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-700">예: <span className="font-bold">{letter.example}</span> ({letter.exampleMeaning})</span>
            <AudioButton text={letter.char} size="sm" />
          </div>
        </div>
      </div>
    </div>
  )
}
