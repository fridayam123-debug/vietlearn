'use client'
import { audioPath } from '@/lib/audio'
import { useSpeech } from '@/hooks/useSpeech'

const SIZE_PX: Record<string, number> = { sm: 40, md: 48, lg: 56 }
const FONT_PX: Record<string, number> = { sm: 16, md: 20, lg: 22 }

export function AudioButton({ text, size = 'md' }: { text: string; size?: 'sm' | 'md' | 'lg' }) {
  const { speak } = useSpeech()
  const px = SIZE_PX[size]
  const fs = FONT_PX[size]

  return (
    <button
      onClick={(e) => {
        // audio.play() must be called synchronously within the user gesture
        const audio = new Audio(audioPath(text))
        audio.play().catch(() => {
          // Pre-generated file not available — fall back to device TTS
          speak(text)
        })
        e.stopPropagation()
      }}
      className="speak-btn"
      style={{ width: px, height: px, fontSize: fs, flexShrink: 0 }}
      aria-label="발음 듣기"
    >
      🔊
    </button>
  )
}
