import { useCallback, useEffect, useRef } from 'react'

// Module-level voice cache — populated as soon as voices are available,
// so it's ready before the user's first click (important for iOS Safari).
let _voices: SpeechSynthesisVoice[] = []

if (typeof window !== 'undefined' && window.speechSynthesis) {
  const load = () => { _voices = window.speechSynthesis.getVoices() }
  load()
  window.speechSynthesis.addEventListener('voiceschanged', load)
}

function pickViVoice(): SpeechSynthesisVoice | null {
  const voices = _voices.length ? _voices : (
    typeof window !== 'undefined' ? window.speechSynthesis.getVoices() : []
  )
  return (
    voices.find(v => v.lang === 'vi-VN' && v.name.toLowerCase().includes('google')) ||
    voices.find(v => v.lang === 'vi-VN') ||
    voices.find(v => v.lang.startsWith('vi')) ||
    null
  )
}

const isIOS =
  typeof navigator !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.userAgent)

export function useSpeech() {
  const resumeTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearInterval(resumeTimer.current)
    }
  }, [])

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return

    window.speechSynthesis.cancel()
    if (resumeTimer.current) { clearInterval(resumeTimer.current); resumeTimer.current = null }

    const utt = new SpeechSynthesisUtterance(text)
    utt.lang   = 'vi-VN'
    utt.rate   = 0.8
    utt.pitch  = 1
    utt.volume = 1

    const voice = pickViVoice()
    if (voice) utt.voice = voice

    // Chrome Android fix: keep speech alive past ~15s
    // (iOS doesn't have this bug, so skip the interval there)
    if (!isIOS) {
      utt.onstart = () => {
        resumeTimer.current = setInterval(() => {
          window.speechSynthesis.pause()
          window.speechSynthesis.resume()
        }, 10000)
      }
      utt.onend = () => {
        if (resumeTimer.current) { clearInterval(resumeTimer.current); resumeTimer.current = null }
      }
      utt.onerror = () => {
        if (resumeTimer.current) { clearInterval(resumeTimer.current); resumeTimer.current = null }
      }
    }

    window.speechSynthesis.resume()
    window.speechSynthesis.speak(utt)
  }, [])

  return { speak }
}
