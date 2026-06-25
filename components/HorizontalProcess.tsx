'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'motion/react'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    n: '1',
    title: 'Find the pain',
    body: 'A discovery call, not a sales pitch. We find the exact step that wastes the most time.',
  },
  {
    n: '2',
    title: 'Fix the process',
    body: 'I scope it, build it, and show you progress as it happens. No twelve-week black box.',
  },
  {
    n: '3',
    title: 'Give time back',
    body: "You get a system your team actually uses. That's the only definition of done that counts.",
  },
]

export function HorizontalProcess() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !wrapRef.current || !trackRef.current) return

    const ctx = gsap.context(() => {
      const distance = trackRef.current!.scrollWidth - window.innerWidth
      if (distance <= 0) return
      gsap.to(trackRef.current, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top top',
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    }, wrapRef)

    return () => ctx.revert()
  }, [reduce])

  if (reduce) {
    return (
      <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-3 md:px-12">
        {STEPS.map((step) => <StepCard key={step.n} step={step} />)}
      </div>
    )
  }

  return (
    <section ref={wrapRef} className="relative overflow-hidden">
      <div ref={trackRef} className="flex h-[100dvh] items-center gap-8 px-[8vw] md:gap-16">
        {STEPS.map((step) => (
          <div key={step.n} className="w-[88vw] flex-shrink-0 md:w-[44vw] lg:w-[32vw]">
            <StepCard step={step} />
          </div>
        ))}
      </div>
    </section>
  )
}

function StepCard({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <div className="border-l border-line pl-6 md:pl-8">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-bright font-mono text-xs text-ink-dim">
        {step.n}
      </span>
      <h3 className="mt-5 text-3xl font-medium tracking-tight text-ink md:text-4xl">{step.title}</h3>
      <p className="mt-5 max-w-[40ch] text-base leading-relaxed text-ink-dim">{step.body}</p>
    </div>
  )
}
