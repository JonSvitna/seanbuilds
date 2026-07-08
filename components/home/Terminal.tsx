'use client'

import { useEffect, useRef, useState } from 'react'

const LINES = ['> analyze', '> build !', '> automate', '> secure', '> scale']

export default function Terminal() {
  const [typed, setTyped] = useState<string[]>([''])
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced.current) {
      setTyped(LINES)
      return
    }

    const typeLine = (li: number, ci: number) => {
      if (li >= LINES.length) {
        timers.current.push(
          setTimeout(() => {
            setTyped([''])
            typeLine(0, 0)
          }, 4500)
        )
        return
      }
      const line = LINES[li]
      setTyped((prev) => {
        const next = prev.slice(0, li)
        next[li] = line.slice(0, ci + 1)
        return next
      })
      if (ci + 1 < line.length) {
        timers.current.push(setTimeout(() => typeLine(li, ci + 1), 55 + Math.random() * 45))
      } else {
        timers.current.push(setTimeout(() => typeLine(li + 1, 0), 420))
      }
    }

    timers.current.push(setTimeout(() => typeLine(0, 0), 1200))
    return () => {
      timers.current.forEach((t) => clearTimeout(t))
      timers.current = []
    }
  }, [])

  return (
    <div
      className="min-h-[122px] rounded-[10px] border border-[rgba(99,116,255,.5)] bg-[rgba(6,9,20,.92)] px-4 py-3.5 font-mono text-[13.5px] leading-[1.75] text-[#3ddc84] backdrop-blur-[8px]"
      style={{ boxShadow: '0 0 34px rgba(88,101,255,.3)' }}
    >
      {typed.map((ln, i) => (
        <div key={i} className="whitespace-pre">
          {ln}
        </div>
      ))}
      <span
        className="inline-block h-4 w-[9px] align-middle bg-[#3ddc84]"
        style={{ animation: 'blink 1s step-end infinite' }}
      />
    </div>
  )
}
