'use client'
import { useRef, useEffect, useState } from 'react'

interface Props {
  char: string
}

export function LetterCanvas({ char }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = 240
    canvas.height = 240

    // White background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw ghost letter
    ctx.fillStyle = '#d3d3d3'
    ctx.font = '200px Arial, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(char, canvas.width / 2, canvas.height / 2)
  }, [char])

  function clearCanvas() {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Redraw ghost letter
    ctx.fillStyle = '#d3d3d3'
    ctx.font = '200px Arial, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(char, canvas.width / 2, canvas.height / 2)
  }

  function handleDone(e: React.MouseEvent) {
    e.stopPropagation()
    clearCanvas()
    setShowFeedback(true)
    setTimeout(() => setShowFeedback(false), 1200)
  }

  function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    e.stopPropagation()
    setIsDrawing(true)
    draw(e)
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!isDrawing) return
    e.stopPropagation()
    draw(e)
  }

  function handlePointerUp(e: React.PointerEvent<HTMLCanvasElement>) {
    e.stopPropagation()
    setIsDrawing(false)
  }

  function draw(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.lineWidth = 4
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = '#1a1a1a'

    ctx.lineTo(x, y)
    ctx.stroke()
  }

  return (
    <div
      onClick={e => e.stopPropagation()}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        marginBottom: 20,
      }}
    >
      <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 600 }}>
        ✏️ 써보기
      </div>

      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{
          border: '1.5px solid var(--border)',
          borderRadius: 12,
          backgroundColor: '#ffffff',
          cursor: 'crosshair',
          touchAction: 'none',
        }}
      />

      <div style={{ display: 'flex', gap: 8, width: '100%' }}>
        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation()
            clearCanvas()
          }}
          style={{
            flex: 1,
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          🗑️ 지우기
        </button>
        <button
          className="btn btn-primary"
          onClick={handleDone}
          style={{
            flex: 1,
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          ✅ 완성
        </button>
      </div>

      {showFeedback && (
        <div
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#2a8a2a',
            animation: 'fadeInOut 1.2s ease-in-out',
          }}
        >
          잘했어요!
        </div>
      )}

      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
