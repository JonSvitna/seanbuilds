'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParallaxTilt } from '../../lib/useParallaxTilt'
import Terminal from './Terminal'

const eqBars = [
  { h: 40, dur: 0.8, delay: -0.1 },
  { h: 66, dur: 0.7, delay: -0.4 },
  { h: 30, dur: 0.9, delay: -0.2 },
  { h: 56, dur: 0.65, delay: -0.55 },
  { h: 72, dur: 0.75, delay: -0.3 },
  { h: 46, dur: 0.85, delay: -0.15 },
  { h: 62, dur: 0.7, delay: -0.5 },
  { h: 34, dur: 0.95, delay: -0.25 },
]

const dots = [
  { top: 24, left: '46%', right: undefined, bottom: undefined, size: 8, color: '#8b9dff', dur: 3, delay: 0 },
  { top: 150, right: 210, size: 6, color: '#a78bfa', dur: 4, delay: 1 },
  { bottom: 140, right: 90, size: 7, color: '#8b9dff', dur: 3.4, delay: 0.5 },
  { bottom: 210, left: 220, size: 5, color: '#a78bfa', dur: 4.4, delay: 1.6 },
]

function FloatingCard({
  depth,
  tilt,
  className,
  entrance,
  floatAnim,
  clip,
  glow,
  children,
}: {
  depth: number
  tilt: number
  className: string
  entrance: string
  floatAnim: string
  clip: 'left' | 'right'
  glow: string
  children: React.ReactNode
}) {
  const clipPath =
    clip === 'left'
      ? 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))'
      : 'polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px)'
  return (
    <div
      data-depth={depth}
      data-tilt={tilt}
      className={`absolute will-change-transform ${className}`}
      style={{ animation: entrance }}
    >
      <div
        className="border border-[rgba(99,116,255,.4)] bg-[rgba(10,13,28,.78)] px-[18px] py-4 backdrop-blur-[8px]"
        style={{ animation: floatAnim, clipPath, boxShadow: `0 0 28px ${glow}` }}
      >
        {children}
      </div>
    </div>
  )
}

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null)
  useParallaxTilt(stageRef)

  return (
    <section
      id="hero"
      className="relative z-[1] mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-[30px] pt-[54px] md:grid-cols-[1.02fr_1fr] md:px-9"
    >
      {/* left copy */}
      <div className="flex flex-col gap-6">
        <h1
          className="m-0 text-[42px] font-extrabold leading-[1.06] tracking-[-.015em] text-ink sm:text-[52px] md:text-[66px]"
          style={{ animation: 'heroIn .9s cubic-bezier(.2,.7,.2,1) .1s both' }}
        >
          I Build Systems
          <br />
          That Solve{' '}
          <span
            className="bg-[linear-gradient(100deg,#5b7bff,#a044ff,#ff5bd0,#5b7bff)] bg-[length:300%_auto] bg-clip-text text-transparent"
            style={{ animation: 'shimmer 6s linear infinite' }}
          >
            Real
            <br />
            Problems.
          </span>
        </h1>
        <p
          className="m-0 max-w-[470px] text-lg leading-[1.6] text-ink-dim"
          style={{ animation: 'heroIn .9s cubic-bezier(.2,.7,.2,1) .25s both' }}
        >
          AI tools. Automation workflows. Cybersecurity platforms. Websites. Internal systems. I
          build solutions that help businesses move faster and operate smarter.
        </p>
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: 'heroIn .9s cubic-bezier(.2,.7,.2,1) .4s both' }}
        >
          <Link
            href="/#builds"
            className="inline-flex items-center gap-3 rounded-[10px] bg-[linear-gradient(120deg,#2f47e0,#4b32c8)] px-7 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_14px_44px_rgba(99,81,255,.6)]"
            style={{ boxShadow: '0 8px 30px rgba(63,81,255,.35)' }}
          >
            Explore My Builds <span className="text-[15px]">→</span>
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-[10px] border border-[rgba(140,150,200,.35)] bg-[rgba(16,19,38,.5)] px-7 py-4 text-base font-bold text-ink transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(160,120,255,.8)] hover:text-white hover:shadow-[0_10px_34px_rgba(124,77,255,.3)]"
          >
            Work With Me <span className="text-[15px]">→</span>
          </Link>
        </div>
        <div
          className="mt-3.5 text-xs font-bold tracking-[.28em] text-[#7d86a8]"
          style={{ animation: 'heroIn .9s cubic-bezier(.2,.7,.2,1) .55s both' }}
        >
          TRUSTED BY FOUNDERS &amp; BUSINESSES
        </div>
        <div
          className="flex flex-wrap items-center gap-9"
          style={{ animation: 'heroIn .9s cubic-bezier(.2,.7,.2,1) .7s both' }}
        >
          <div className="flex items-center gap-2.5 text-[15px] font-bold text-[#c6cce4]">
            <span
              className="inline-block h-[22px] w-[22px] rounded-[6px] bg-gradient-to-br from-[#5b7bff] to-[#8b3dff]"
              style={{ animation: 'dotPulse 3s ease-in-out infinite' }}
            />
            SENTINEL
          </div>
          <div className="flex items-center gap-2.5 text-[15px] font-bold text-[#c6cce4]">
            <span
              className="inline-block h-[22px] w-[22px] rounded-full bg-[#1d4ed8]"
              style={{ animation: 'dotPulse 3s ease-in-out .5s infinite' }}
            />
            AfterSwing
          </div>
          <div className="flex items-center gap-2.5 text-[15px] font-bold text-[#c6cce4]">
            <span
              className="inline-block h-[22px] w-[22px] rounded-full"
              style={{
                background: 'radial-gradient(circle at 40% 35%, #8b5cf6, #312e81)',
                animation: 'dotPulse 3s ease-in-out 1s infinite',
              }}
            />
            AI OS
          </div>
          <div className="flex items-center gap-2.5 text-sm font-semibold leading-tight text-[#c6cce4]">
            <span
              className="inline-block h-[22px] w-[22px] rounded-full border-2 border-dashed border-[#6b7394]"
              style={{ animation: 'spinSlow 14s linear infinite' }}
            />
            Local
            <br />
            Businesses
          </div>
        </div>
      </div>

      {/* right composition */}
      <div
        id="heroStage"
        ref={stageRef}
        className="relative h-[440px] sm:h-[520px] md:h-[590px]"
        style={{ animation: 'heroIn 1s cubic-bezier(.2,.7,.2,1) .2s both' }}
      >
        {/* animated grid + glow backdrop */}
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <div
            className="absolute -inset-[60px]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(91,123,255,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(91,123,255,.09) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              animation: 'gridPan 30s linear infinite',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(420px 340px at 55% 40%, rgba(64,72,190,.30), transparent 70%), radial-gradient(300px 260px at 85% 80%, rgba(124,58,237,.22), transparent 70%)',
            }}
          />
          <div
            className="absolute left-0 right-0 h-[90px]"
            style={{
              background: 'linear-gradient(180deg, transparent, rgba(120,140,255,.06), transparent)',
              animation: 'scanDrift 7s linear infinite',
            }}
          />
        </div>

        {/* portrait */}
        <div
          data-depth="0.02"
          className="absolute bottom-0 left-1/2 h-[70%] w-[66%] max-w-[392px] -translate-x-1/2 will-change-transform sm:h-[500px] sm:w-[392px]"
          style={{ filter: 'drop-shadow(0 20px 60px rgba(20,20,60,.8))' }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[18px]">
            <Image
              src="/images/hero-portrait.png"
              alt="Sean"
              fill
              priority
              className="object-cover object-top"
              sizes="392px"
            />
          </div>
        </div>

        {/* AI SYSTEMS */}
        <FloatingCard
          depth={0.09}
          tilt={26}
          clip="left"
          className="left-[-6px] top-[26px] hidden w-[218px] sm:block"
          entrance="cardIn .9s cubic-bezier(.2,.7,.2,1) .6s both"
          floatAnim="floatY 6s ease-in-out infinite"
          glow="rgba(88,101,255,.22)"
        >
          <div className="mb-2 flex items-center gap-2.5">
            <span
              className="grid h-[30px] w-[30px] place-items-center rounded-lg border border-[rgba(139,92,246,.6)] font-mono text-xs text-[#a78bfa]"
              style={{ animation: 'glowPulse 3.5s ease-in-out infinite' }}
            >
              ⁂
            </span>
            <span className="text-sm font-extrabold tracking-[.06em] text-ink">AI SYSTEMS</span>
          </div>
          <div className="text-[12.5px] leading-[1.5] text-ink-dim">
            Build smarter with AI agents, automations, and intelligent tools.
          </div>
        </FloatingCard>

        {/* CYBERSECURITY */}
        <FloatingCard
          depth={0.14}
          tilt={38}
          clip="left"
          className="left-[-2px] top-[218px] hidden w-[212px] sm:block"
          entrance="cardIn .9s cubic-bezier(.2,.7,.2,1) .75s both"
          floatAnim="floatY2 7s ease-in-out infinite"
          glow="rgba(88,101,255,.22)"
        >
          <div className="mb-2 flex items-center gap-2.5">
            <span
              className="grid h-[30px] w-[30px] place-items-center rounded-lg border border-[rgba(91,123,255,.6)] font-mono text-xs text-[#7d95ff]"
              style={{ animation: 'glowPulse 3.5s ease-in-out .8s infinite' }}
            >
              ◈
            </span>
            <span className="text-[13.5px] font-extrabold tracking-[.05em] text-ink">
              CYBERSECURITY
            </span>
          </div>
          <div className="text-[12.5px] leading-[1.6] text-ink-dim">
            Secure systems.
            <br />
            Protect data.
            <br />
            Stay ahead.
          </div>
        </FloatingCard>

        {/* AUTOMATION */}
        <FloatingCard
          depth={0.11}
          tilt={30}
          clip="right"
          className="right-[-8px] top-[60px] hidden w-[216px] sm:block"
          entrance="cardIn .9s cubic-bezier(.2,.7,.2,1) .9s both"
          floatAnim="floatY 6.5s ease-in-out 1.2s infinite"
          glow="rgba(124,77,255,.22)"
        >
          <div className="mb-2 flex items-center gap-2.5">
            <span
              className="grid h-[30px] w-[30px] place-items-center rounded-lg border border-[rgba(139,92,246,.6)] text-sm text-[#a78bfa]"
              style={{ animation: 'spinSlow 9s linear infinite' }}
            >
              ✳
            </span>
            <span className="text-sm font-extrabold tracking-[.06em] text-ink">AUTOMATION</span>
          </div>
          <div className="text-[12.5px] leading-[1.5] text-ink-dim">
            Streamline operations with workflows, integrations, and APIs.
          </div>
        </FloatingCard>

        {/* WEB BUILDS */}
        <FloatingCard
          depth={0.16}
          tilt={42}
          clip="right"
          className="right-[-4px] top-[268px] hidden w-[214px] sm:block"
          entrance="cardIn .9s cubic-bezier(.2,.7,.2,1) 1.05s both"
          floatAnim="floatY2 7.5s ease-in-out .6s infinite"
          glow="rgba(88,101,255,.22)"
        >
          <div className="mb-2 flex items-center gap-2.5">
            <span
              className="grid h-[30px] w-[30px] place-items-center rounded-lg border border-[rgba(91,123,255,.6)] font-mono text-[11px] text-[#7d95ff]"
              style={{ animation: 'glowPulse 3.5s ease-in-out 1.6s infinite' }}
            >
              &lt;/&gt;
            </span>
            <span className="text-sm font-extrabold tracking-[.06em] text-ink">WEB BUILDS</span>
          </div>
          <div className="text-[12.5px] leading-[1.5] text-ink-dim">
            Fast, modern websites and platforms that convert and scale.
          </div>
        </FloatingCard>

        {/* live terminal */}
        <div
          data-depth="0.07"
          data-tilt="20"
          className="absolute bottom-[34px] left-[34px] hidden w-[232px] will-change-transform sm:block"
          style={{ animation: 'cardIn .9s cubic-bezier(.2,.7,.2,1) 1.2s both' }}
        >
          <Terminal />
        </div>

        {/* equalizer */}
        <div className="absolute bottom-[26px] right-[18px] flex h-[74px] items-end gap-[5px]">
          {eqBars.map((bar, i) => (
            <div
              key={i}
              className="w-1.5 rounded-[2px] bg-[linear-gradient(180deg,#8b3dff,#3d5afe)]"
              style={{
                height: bar.h,
                transformOrigin: 'bottom',
                animation: `eq ${bar.dur}s ease-in-out ${bar.delay}s infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* constellation dots */}
        {dots.map((dot, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: dot.top,
              bottom: dot.bottom,
              left: dot.left,
              right: dot.right,
              width: dot.size,
              height: dot.size,
              background: dot.color,
              animation: `dotPulse ${dot.dur}s ease-in-out ${dot.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
