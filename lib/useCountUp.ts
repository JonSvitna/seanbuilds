'use client'

import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number) {
  const [value, setValue] = useState(target)
  const ref = useRef<HTMLSpanElement>(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setValue(0)

    const run = () => {
      if (done.current) return
      done.current = true
      const t0 = performance.now()
      const dur = 1600
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur)
        const e = 1 - Math.pow(1 - p, 3)
        setValue(Math.round(target * e))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && run()),
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return { ref, value }
}
