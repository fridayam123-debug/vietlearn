import { useCallback } from 'react'

export function useSpeech() {
  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const utt = new SpeechSynthesisUtterance(text)
    utt.lang = 'vi-VN'
    utt.rate = 0.85
    window.speechSynthesis.speak(utt)
  }, [])

  return { speak }
}
