'use client'

import { useEffect, useRef } from 'react'

/**
 * Ports the hero's mouse-tilt + scroll-parallax from the Claude Design
 * prototype: elements tagged data-depth/data-tilt drift on scroll and tilt
 * toward the cursor, scaled relative to the stage's own bounding box.
 */
export function useParallaxTilt(stageRef: React.RefObject<HTMLElement | null>) {
  const rafRef = useRef<number | null>(null)
  const mx = useRef(0)
  const my = useRef(0)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = Array.from(stage.querySelectorAll<HTMLElement>('[data-depth]'))

    const apply = () => {
      rafRef.current = null
      const sy = window.scrollY
      els.forEach((el) => {
        const d = parseFloat(el.getAttribute('data-depth') || '0')
        const t = parseFloat(el.getAttribute('data-tilt') || '0')
        const x = mx.current * t
        const y = my.current * t * 0.7 - sy * d * 3
        el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`
      })
    }
    const queue = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(apply)
    }
    const onScroll = () => queue()
    const onMove = (e: MouseEvent) => {
      const r = stage.getBoundingClientRect()
      mx.current = Math.max(-1, Math.min(1, (e.clientX - r.left - r.width / 2) / (r.width / 2)))
      my.current = Math.max(-1, Math.min(1, (e.clientY - r.top - r.height / 2) / (r.height / 2)))
      queue()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [stageRef])
}
