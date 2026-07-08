import Image from 'next/image'
import { Reveal } from '../Reveal'

export default function CTASection() {
  return (
    <Reveal
      y={40}
      id="contact"
      className="relative mx-auto max-w-[1440px] scroll-mt-24 overflow-hidden rounded-2xl border border-[rgba(99,116,255,.18)] bg-[rgba(10,13,26,.6)] px-6 py-7 md:px-8"
    >
      <div className="flex flex-col items-start gap-7 md:flex-row md:items-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(500px 200px at 85% 50%, rgba(90,40,200,.14), transparent 70%)',
          }}
        />
        <div
          className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[14px]"
          style={{
            boxShadow: '0 0 0 1px rgba(99,116,255,.35), 0 10px 30px rgba(20,20,60,.6)',
            animation: 'floatY 5s ease-in-out infinite',
          }}
        >
          <Image src="/images/cta-avatar.png" alt="Sean" fill className="object-cover" sizes="96px" />
        </div>
        <div className="relative flex-1">
          <div className="text-2xl font-extrabold tracking-[-.01em] text-ink md:text-[27px]">
            Have an idea, problem, or project in mind?
          </div>
          <div className="mt-1.5 text-base text-ink-dim">
            Let&apos;s build something worth building.
          </div>
        </div>
        <div className="relative flex flex-wrap gap-7">
          <div className="flex items-center gap-2.5">
            <span
              className="grid h-[26px] w-[26px] place-items-center text-[#7d95ff]"
              style={{ animation: 'spinSlow 8s linear infinite' }}
            >
              ✦
            </span>
            <span className="text-[13px]">
              <b>Fast Execution</b>
              <br />
              <span className="text-xs text-ink-dim">Move quick. Build right.</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span
              className="grid h-[26px] w-[26px] place-items-center text-[#a78bfa]"
              style={{ animation: 'dotPulse 3s ease-in-out infinite' }}
            >
              ◉
            </span>
            <span className="text-[13px]">
              <b>Clear Communication</b>
              <br />
              <span className="text-xs text-ink-dim">No fluff. Just clarity.</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span
              className="grid h-[26px] w-[26px] place-items-center text-[#3ddc84]"
              style={{ animation: 'dotPulse 3s ease-in-out 1s infinite' }}
            >
              ✓
            </span>
            <span className="text-[13px]">
              <b>Real Results</b>
              <br />
              <span className="text-xs text-ink-dim">Systems that deliver.</span>
            </span>
          </div>
        </div>
        <a
          href="/faq#contact"
          className="relative inline-flex items-center gap-3 rounded-[10px] bg-[linear-gradient(120deg,#2f47e0,#6d28d9)] px-[30px] py-[17px] text-base font-bold text-white transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_16px_50px_rgba(124,81,255,.65)]"
          style={{ boxShadow: '0 8px 30px rgba(99,81,255,.4)' }}
        >
          Let&apos;s Build Together <span>→</span>
        </a>
      </div>
    </Reveal>
  )
}
