import Link from 'next/link'
import { Lightning, Wrench, Brain, ShieldCheck, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Navbar from '../components/Navbar'
import { SignalGraph } from '../components/SignalGraph'
import { HorizontalProcess } from '../components/HorizontalProcess'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'

const stats = [
  { value: '20+', label: 'Projects shipped' },
  { value: '8+', label: 'Years in security and software' },
  { value: 'Security + AI', label: 'Background, not a buzzword' },
  { value: '1,000s', label: 'Of hours spent building' },
]

const capabilities = [
  {
    icon: Lightning,
    title: 'Automation',
    body: 'Approvals, reporting, and manual handoffs that run themselves.',
    span: 'md:col-span-2',
    tint: 'bg-gradient-to-br from-signal-dim to-transparent',
    radius: 'rounded-[3rem_1.5rem_3rem_1.5rem]',
  },
  {
    icon: Wrench,
    title: 'Custom Tools',
    body: 'Internal software built around how your team actually works.',
    radius: 'rounded-[1.5rem_3rem_1.5rem_3rem]',
  },
  {
    icon: Brain,
    title: 'AI, Used Right',
    body: "Applied where it earns its place. Not because it's trendy.",
    radius: 'rounded-[3rem_3rem_1.5rem_3rem]',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Security',
    body: 'CMMC-grade thinking applied to your systems, not just your paperwork.',
    flag: true,
    radius: 'rounded-[1.5rem_3rem_3rem_3rem]',
  },
]

function GraphCallout({
  label,
  corner,
}: {
  label: string
  corner: 'tl' | 'tr' | 'bl' | 'br'
}) {
  const pos = {
    tl: 'left-6 top-6 items-start text-left',
    tr: 'right-6 top-6 items-end text-right',
    bl: 'left-6 bottom-6 items-start text-left',
    br: 'right-6 bottom-6 items-end text-right',
  }[corner]
  return (
    <div className={`absolute flex flex-col gap-2 ${pos}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-signal-bright" />
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-dim">
        {label}
      </span>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-void">
        {/* Hero */}
        <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 pt-36 pb-20 md:grid-cols-2 md:items-center md:px-12 md:pt-24">
          <div>
            <p className="text-sm font-semibold tracking-[0.08em] text-signal-bright">
              SYSTEMS FOR SMALL TEAMS
            </p>
            <h1 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-7xl md:leading-[1.02]">
              Stop clicking.
              <br />
              Start shipping.
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-dim">
              I build the automations, internal tools, AI integrations, and compliance
              systems that get small teams unstuck. Fast.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/what-i-build"
                className="flex h-14 items-center gap-2 rounded-pill bg-signal px-7 text-sm font-semibold text-ink transition-colors hover:bg-signal-bright"
              >
                See the Work <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="/faq#contact"
                className="flex h-14 items-center rounded-pill border border-line-bright px-7 text-sm font-semibold text-ink transition-colors hover:border-signal"
              >
                Book a Call
              </Link>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-12 -z-10 rounded-full bg-signal/15 blur-[100px]" />
              <div className="relative h-[380px] overflow-hidden rounded-card border border-line bg-raised md:h-[460px]">
                <SignalGraph />
                <GraphCallout label="Automation" corner="tl" />
                <GraphCallout label="AI" corner="tr" />
                <GraphCallout label="Tools" corner="bl" />
                <GraphCallout label="Compliance" corner="br" />
              </div>
            </div>
            <p className="mt-4 text-sm text-ink-faint">
              Every project starts as a tangle. This is what untangling looks like.
            </p>
          </Reveal>
        </section>

        {/* Stats - flat row, no cards */}
        <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-12">
          <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 md:grid-cols-4">
            {stats.map((s) => (
              <RevealItem key={s.label} className="border-l border-line pl-5">
                <p className="font-mono text-2xl text-ink md:text-3xl">{s.value}</p>
                <p className="mt-2 text-sm text-ink-dim">{s.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Capabilities bento */}
        <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-12">
          <p className="text-sm font-semibold tracking-[0.08em] text-signal-bright">
            WHAT GETS FIXED
          </p>
          <h2 className="mt-4 max-w-[28ch] text-3xl font-medium tracking-tight text-ink md:text-4xl">
            I don&apos;t build everything. I build what wastes your time the most.
          </h2>

          <RevealGroup className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <RevealItem
                  key={cap.title}
                  className={`relative overflow-hidden border border-line bg-raised p-9 ${cap.radius} ${cap.span ?? ''} ${
                    cap.flag ? 'border-t-2 border-t-flag' : ''
                  }`}
                >
                  {cap.tint && <div className={`absolute inset-0 ${cap.tint}`} />}
                  <div className="relative">
                    <Icon size={26} className="text-signal-bright" weight="duotone" />
                    <p className="mt-6 text-2xl font-semibold tracking-tight text-ink">{cap.title}</p>
                    <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-ink-dim">{cap.body}</p>
                  </div>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </section>

        {/* Manifesto */}
        <section className="border-y border-line bg-surface px-6 py-28 md:px-12">
          <div className="mx-auto max-w-[1400px]">
            <RevealGroup className="text-4xl font-medium leading-[1.15] tracking-tight text-ink md:text-6xl" stagger={0.12}>
              <RevealItem>If it takes fourteen clicks</RevealItem>
              <RevealItem>to get to a solution,</RevealItem>
              <RevealItem>that&apos;s not you.</RevealItem>
              <RevealItem className="text-signal-bright">That&apos;s the system.</RevealItem>
            </RevealGroup>
            <Reveal delay={0.3} className="mt-8">
              <p className="text-lg text-ink-dim">I fix the system.</p>
            </Reveal>
          </div>
        </section>

        {/* Process - horizontal pan */}
        <section className="mx-auto max-w-[1400px] px-6 pt-24 md:px-12">
          <h2 className="max-w-[26ch] text-3xl font-medium tracking-tight text-ink md:text-4xl">
            The same three moves, every time.
          </h2>
        </section>
        <HorizontalProcess />

        {/* Compliance authority block */}
        <section className="border-y border-line bg-surface px-6 py-24 md:px-12">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto]">
            <Reveal>
              <h2 className="max-w-[32ch] text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
                Built by someone who already thinks like an auditor.
              </h2>
              <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-ink-dim">
                Security work doesn&apos;t bolt onto a system after it&apos;s built. It&apos;s
                part of how I build, every time, whether you asked for it or not.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative flex items-center justify-center">
                <div className="absolute h-32 w-32 rounded-full bg-flag/10 blur-[60px]" />
                <ShieldCheck size={96} weight="thin" className="relative text-line-bright" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-32 text-center md:px-12">
          <Reveal>
            <h2 className="mx-auto max-w-[24ch] text-3xl font-medium tracking-tight text-ink md:text-5xl">
              Come learn something. Leave with it solved.
            </h2>
            <Link
              href="/faq#contact"
              className="mt-9 inline-flex h-14 items-center gap-2 rounded-pill bg-signal px-8 text-sm font-semibold text-ink transition-colors hover:bg-signal-bright"
            >
              Book a Call <ArrowRight size={16} weight="bold" />
            </Link>
          </Reveal>
        </section>
      </main>
    </>
  )
}
