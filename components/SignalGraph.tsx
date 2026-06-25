'use client'

import { useEffect, useRef } from 'react'

type Node = { x: number; y: number; vx: number; vy: number; r: number }

const NODE_COUNT = 22
const LINK_DIST = 150
const SIGNAL_COLOR = '#3169f0'
const SIGNAL_BRIGHT = '#5c8cff'
const LINE_COLOR = 'rgba(140, 160, 200, 0.16)'

export function SignalGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const nodes: Node[] = []

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function seed() {
      nodes.length = 0
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 1.4,
        })
      }
    }

    resize()
    seed()

    let pulse = 0
    let frameId = 0

    function drawStatic() {
      ctx!.clearRect(0, 0, width, height)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DIST) {
            ctx!.strokeStyle = LINE_COLOR
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }
      for (const n of nodes) {
        ctx!.fillStyle = SIGNAL_BRIGHT
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    function step() {
      pulse += 0.012
      ctx!.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DIST) {
            const t = (Math.sin(pulse + i * 0.4 + j * 0.2) + 1) / 2
            ctx!.strokeStyle = `rgba(91, 140, 255, ${0.05 + t * 0.18})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      for (const n of nodes) {
        const glow = (Math.sin(pulse * 2 + n.x) + 1) / 2
        ctx!.fillStyle = glow > 0.7 ? SIGNAL_BRIGHT : SIGNAL_COLOR
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r + glow * 0.6, 0, Math.PI * 2)
        ctx!.fill()
      }

      frameId = requestAnimationFrame(step)
    }

    if (reduceMotion) {
      drawStatic()
    } else {
      frameId = requestAnimationFrame(step)
    }

    const onResize = () => {
      resize()
      seed()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      aria-hidden="true"
    />
  )
}
