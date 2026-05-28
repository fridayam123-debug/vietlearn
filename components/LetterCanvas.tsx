'use client'
import { useRef, useEffect, useState } from 'react'

interface Props {
  char: string
}

const W = 180
const H = 180

export function LetterCanvas({ char }: Props) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const isDrawing  = useRef(false)
  const lastPos    = useRef<{ x: number; y: number } | null>(null)
  const [feedback, setFeedback] = useState(false)

  function drawGhost(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, W, H)
    ctx.fillStyle = '#e0e0e0'
    ctx.font = `bold 150px Arial, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(char, W / 2, H / 2 + 8)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width  = W
    canvas.height = H
    const ctx = canvas.getContext('2d')!
    drawGhost(ctx)
  }, [char])

  function getPos(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!
    const rect   = canvas.getBoundingClientRect()
    // Scale from CSS pixels → canvas pixels
    const scaleX = W / rect.width
    const scaleY = H / rect.height
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top)  * scaleY,
    }
  }

  function onDown(e: React.PointerEvent<HTMLCanvasElement>) {
    e.stopPropagation()
    e.currentTarget.setPointerCapture(e.pointerId)
    isDrawing.current = true
    const pos = getPos(e)
    lastPos.current = pos
    // Draw a starting dot so single taps are visible
    const ctx = canvasRef.current!.getContext('2d')!
    ctx.beginPath()
    ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2)
    ctx.fillStyle = '#1a1a1a'
    ctx.fill()
  }

  function onMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!isDrawing.current || !lastPos.current) return
    e.stopPropagation()
    const pos = getPos(e)
    const ctx = canvasRef.current!.getContext('2d')!
    ctx.beginPath()
    ctx.moveTo(lastPos.current.x, lastPos.current.y)
    ctx.lineTo(pos.x, pos.y)
    ctx.lineWidth   = 4
    ctx.lineCap     = 'round'
    ctx.lineJoin    = 'round'
    ctx.strokeStyle = '#1a1a1a'
    ctx.stroke()
    lastPos.current = pos
  }

  function onUp(e: React.PointerEvent<HTMLCanvasElement>) {
    e.stopPropagation()
    isDrawing.current = false
    lastPos.current   = null
  }

  function clear(e: React.MouseEvent) {
    e.stopPropagation()
    const ctx = canvasRef.current!.getContext('2d')!
    drawGhost(ctx)
  }

  function done(e: React.MouseEvent) {
    e.stopPropagation()
    const ctx = canvasRef.current!.getContext('2d')!
    drawGhost(ctx)
    setFeedback(true)
    setTimeout(() => setFeedback(false), 1200)
  }

  return (
    <div onClick={e => e.stopPropagation()}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 600 }}>✏️ 써보기</div>

      <canvas
        ref={canvasRef}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        style={{
          border: '1.5px solid var(--border)',
          borderRadius: 12,
          cursor: 'crosshair',
          touchAction: 'none',
          width: W,
          height: H,
        }}
      />

      <div style={{ display: 'flex', gap: 8, width: W }}>
        <button className="btn" onClick={clear} style={{ flex: 1, fontSize: '13px' }}>🗑️ 지우기</button>
        <button className="btn btn-primary" onClick={done} style={{ flex: 1, fontSize: '13px' }}>✅ 완성</button>
      </div>

      {feedback && (
        <div style={{ fontSize: '16px', fontWeight: 700, color: '#2a8a2a' }}>잘했어요! 👍</div>
      )}
    </div>
  )
}
