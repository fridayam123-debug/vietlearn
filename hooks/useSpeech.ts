import { useCallback, useEffect, useRef } from 'react'

export function useSpeech() {
  // Chrome Android bug: speechSynthesis pauses itself after ~15s of page inactivity.
  // Workaround: keep a periodic resume() going while something is speaking.
  const resumeTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearInterval(resumeTimer.current)
    }
  }, [])

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()
    if (resumeTimer.current) clearInterval(resumeTimer.current)

    function doSpeak() {
      const utt = new SpeechSynthesisUtterance(text)
      utt.lang = 'vi-VN'
      utt.rate = 0.8
      utt.pitch = 1
      utt.volume = 1

      // Try to find the best Vietnamese voice, but don't block if none found.
      // Android system TTS will handle vi-VN automatically via utt.lang.
      const voices = window.speechSynthesis.getVoices()
      if (voices.length > 0) {
        const best =
          voices.find(v => v.lang === 'vi-VN' && v.name.toLowerCase().includes('google')) ||
          voices.find(v => v.lang === 'vi-VN') ||
          voices.find(v => v.lang.startsWith('vi'))
        if (best) utt.voice = best
      }

      utt.onstart = () => {
        // Chrome Android fix: resume every 10s to prevent auto-pause
        resumeTimer.current = setInterval(() => {
          window.speechSynthesis.pause()
          window.speechSynthesis.resume()
        }, 10000)
      }

      utt.onend = () => {
        if (resumeTimer.current) {
          clearInterval(resumeTimer.current)
          resumeTimer.current = null
        }
      }

      utt.onerror = () => {
        if (resumeTimer.current) {
          clearInterval(resumeTimer.current)
          resumeTimer.current = null
        }
      }

      // Chrome Android: call resume() right before speak() to unblock
      window.speechSynthesis.resume()
      window.speechSynthesis.speak(utt)
    }

    // Voices may not be loaded yet — wait for them, but with a fallback timeout
    // so mobile devices that never fire onvoiceschanged still work.
    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      doSpeak()
    } else {
      // Fallback: speak anyway after 300ms even if voices never load
      const fallbackTimer = setTimeout(() => {
        window.speechSynthesis.onvoiceschanged = null
        doSpeak()
      }, 300)

      window.speechSynthesis.onvoiceschanged = () => {
        clearTimeout(fallbackTimer)
        window.speechSynthesis.onvoiceschanged = null
        doSpeak()
      }
    }
  }, [])

  return { speak }
}
