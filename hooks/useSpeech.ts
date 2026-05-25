import { useCallback, useEffect, useRef } from 'react'

export function useSpeech() {
  const resumeTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    // Pre-load voices as early as possible
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.getVoices()
    }
    return () => {
      if (resumeTimer.current) clearInterval(resumeTimer.current)
    }
  }, [])

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return

    window.speechSynthesis.cancel()
    if (resumeTimer.current) clearInterval(resumeTimer.current)

    const utt = new SpeechSynthesisUtterance(text)
    utt.lang = 'vi-VN'
    utt.rate = 0.8
    utt.pitch = 1
    utt.volume = 1

    // Voice selection is optional — Android uses system TTS for vi-VN via utt.lang.
    // IMPORTANT: must be synchronous (called directly from click handler),
    // never inside setTimeout/Promise on Android Chrome.
    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      const best =
        voices.find(v => v.lang === 'vi-VN' && v.name.toLowerCase().includes('google')) ||
        voices.find(v => v.lang === 'vi-VN') ||
        voices.find(v => v.lang.startsWith('vi'))
      if (best) utt.voice = best
    }

    utt.onstart = () => {
      // Chrome Android fix: prevent auto-pause after ~15s
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

    // Unblock Chrome Android's speech synthesis before speaking
    window.speechSynthesis.resume()
    window.speechSynthesis.speak(utt)
  }, [])

  return { speak }
}
