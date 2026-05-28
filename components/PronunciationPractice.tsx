'use client'
import { useState, useRef } from 'react'
import { useSpeech } from '@/hooks/useSpeech'

interface Props {
  expected: string   // Vietnamese word to pronounce (e.g. 'ba', 'ăn')
  hint: string       // Korean meaning (e.g. '아빠')
}

type State = 'idle' | 'recording' | 'done' | 'error'

export function PronunciationPractice({ expected, hint }: Props) {
  const [state, setState] = useState<State>('idle')
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [seconds, setSeconds] = useState(0)
  const mediaRef  = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const timerRef  = useRef<ReturnType<typeof setInterval> | null>(null)
  const playRef   = useRef<HTMLAudioElement | null>(null)
  const { speak } = useSpeech()

  function stopTimer() {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }

  async function startRecording(e: React.MouseEvent) {
    e.stopPropagation()
    if (audioUrl) { URL.revokeObjectURL(audioUrl); setAudioUrl(null) }
    chunksRef.current = []
    setSeconds(0)

    let stream: MediaStream
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    } catch {
      setState('error'); return
    }

    const rec = new MediaRecorder(stream)
    mediaRef.current = rec

    rec.ondataavailable = e => { if (e.data.size > 0) chunksRef.current.push(e.data) }
    rec.onstop = () => {
      stream.getTracks().forEach(t => t.stop())
      const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
      setAudioUrl(URL.createObjectURL(blob))
      setState('done')
    }

    rec.start()
    setState('recording')
    timerRef.current = setInterval(() => setSeconds(s => s + 1), 1000)
  }

  function stopRecording(e: React.MouseEvent) {
    e.stopPropagation()
    stopTimer()
    mediaRef.current?.stop()
  }

  function playMyVoice(e: React.MouseEvent) {
    e.stopPropagation()
    if (!audioUrl) return
    if (playRef.current) { playRef.current.pause(); playRef.current.currentTime = 0 }
    const audio = new Audio(audioUrl)
    playRef.current = audio
    audio.play()
  }

  function playReference(e: React.MouseEvent) {
    e.stopPropagation()
    speak(expected)
  }

  function reset(e: React.MouseEvent) {
    e.stopPropagation()
    stopTimer()
    mediaRef.current?.stop()
    if (audioUrl) URL.revokeObjectURL(audioUrl)
    setAudioUrl(null)
    setSeconds(0)
    setState('idle')
  }

  return (
    <div
      onClick={e => e.stopPropagation()}
      style={{
        width: '100%',
        border: '1.5px dashed var(--border)',
        borderRadius: 14,
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        background: 'var(--soft)',
      }}
    >
      <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 600, textAlign: 'center' }}>
        🎤 발음 연습 — <span style={{ color: '#2563eb' }}>"{expected}"</span>{' '}
        <span style={{ color: 'var(--muted)' }}>({hint})</span>
      </div>

      {/* IDLE */}
      {state === 'idle' && (
        <button className="btn btn-primary" onClick={startRecording}
          style={{ fontSize: '15px', padding: '10px 28px' }}>
          🎙️ 녹음 시작
        </button>
      )}

      {/* RECORDING */}
      {state === 'recording' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              width: 10, height: 10, borderRadius: '50%', background: '#dc2626',
              display: 'inline-block',
              animation: 'pulse-dot 1s infinite',
            }} />
            <span style={{ fontSize: '15px', color: '#dc2626', fontWeight: 700 }}>
              녹음 중 {seconds}초
            </span>
          </div>
          <button className="btn" onClick={stopRecording}
            style={{ fontSize: '14px', borderColor: '#dc2626', color: '#dc2626' }}>
            ⏹ 중지
          </button>
        </div>
      )}

      {/* DONE */}
      {state === 'done' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, width: '100%' }}>
          <div style={{ fontSize: '13px', color: 'var(--muted)' }}>들어보고 비교해보세요!</div>

          <div style={{ display: 'flex', gap: 10, width: '100%' }}>
            {/* Reference */}
            <button className="btn" onClick={playReference}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '10px 8px' }}>
              <span style={{ fontSize: '22px' }}>🔊</span>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>원본</span>
            </button>

            {/* My voice */}
            <button className="btn btn-primary" onClick={playMyVoice}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '10px 8px' }}>
              <span style={{ fontSize: '22px' }}>▶️</span>
              <span style={{ fontSize: '12px' }}>내 발음</span>
            </button>
          </div>

          <div style={{ display: 'flex', gap: 8, width: '100%' }}>
            <button className="btn" onClick={reset} style={{ flex: 1, fontSize: '13px' }}>
              🔁 다시 녹음
            </button>
          </div>
        </div>
      )}

      {/* ERROR */}
      {state === 'error' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ fontSize: '13px', color: '#dc2626', textAlign: 'center' }}>
            마이크 권한이 필요해요.<br />브라우저 설정에서 허용해주세요.
          </div>
          <button className="btn" onClick={reset}>닫기</button>
        </div>
      )}

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </div>
  )
}
