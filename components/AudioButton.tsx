'use client'
import { useSpeech } from '@/hooks/useSpeech'

const SIZE_PX: Record<string, number> = { sm: 40, md: 48, lg: 56 }
const FONT_PX: Record<string, number> = { sm: 16, md: 20, lg: 22 }

export function AudioButton({ text, size = 'md' }: { text: string; size?: 'sm' | 'md' | 'lg' }) {
  const { speak } = useSpeech()
  const px = SIZE_PX[size]
  const fs = FONT_PX[size]
  return (
    <button
      onClick={(e) => { e.stopPropagation(); speak(text) }}
      className="speak-btn"
      style={{ width: px, height: px, fontSize: fs, flexShrink: 0 }}
      aria-label="발음 듣기"
    >
      🔊
    </button>
  )
}
