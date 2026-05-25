'use client'
import { useSpeech } from '@/hooks/useSpeech'

export function AudioButton({ text, size = 'md' }: { text: string; size?: 'sm' | 'md' | 'lg' }) {
  const { speak } = useSpeech()
  const sizes = { sm: 'w-8 h-8 text-sm', md: 'w-10 h-10 text-base', lg: 'w-14 h-14 text-xl' }
  return (
    <button
      onClick={(e) => { e.stopPropagation(); speak(text) }}
      className={`${sizes[size]} rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 active:scale-95 transition-all shadow`}
      aria-label="발음 듣기"
    >
      🔊
    </button>
  )
}
