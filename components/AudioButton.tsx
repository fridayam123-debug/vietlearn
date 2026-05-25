'use client'
import { useSpeech } from '@/hooks/useSpeech'

const SIZES = {
  sm: 'w-9 h-9 text-base shadow-sm',
  md: 'w-12 h-12 text-xl shadow',
  lg: 'w-16 h-16 text-2xl shadow-md',
}

export function AudioButton({ text, size = 'md' }: { text: string; size?: 'sm' | 'md' | 'lg' }) {
  const { speak } = useSpeech()
  return (
    <button
      onClick={(e) => { e.stopPropagation(); speak(text) }}
      className={`${SIZES[size]} rounded-full bg-white border-2 border-[#dc2626] text-[#dc2626] flex items-center justify-center hover:bg-red-50 active:scale-95 transition-all flex-shrink-0`}
      aria-label="발음 듣기"
    >
      🔊
    </button>
  )
}
