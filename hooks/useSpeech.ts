import { useCallback } from 'react'

export function useSpeech() {
  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()

    function doSpeak() {
      const utt = new SpeechSynthesisUtterance(text)
      utt.lang = 'vi-VN'
      utt.rate = 0.72
      utt.pitch = 1

      const voices = window.speechSynthesis.getVoices()
      // Prefer Google vi-VN (best tone support), then any vi-VN, then any vi-*
      const best =
        voices.find(v => v.lang === 'vi-VN' && v.name.toLowerCase().includes('google')) ||
        voices.find(v => v.lang === 'vi-VN') ||
        voices.find(v => v.lang.startsWith('vi'))

      if (best) utt.voice = best
      window.speechSynthesis.speak(utt)
    }

    // Voices may not be loaded yet on first call
    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      doSpeak()
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.onvoiceschanged = null
        doSpeak()
      }
    }
  }, [])

  return { speak }
}
