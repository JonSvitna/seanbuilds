import Link from 'next/link'
import { Lightning, Wrench, Brain, ShieldCheck, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Navbar from '../../components/Navbar'
import { Reveal, RevealGroup, RevealItem } from '../../components/Reveal'

const cards = [
  {
    icon: Lightning,
    title: 'Save Time',
    desc: 'Automate repetitive tasks, approvals, reporting, and manual processes.',
    id: 'save-time',
  },
  {
    icon: Brain,
    title: 'Improve Visibility',
    desc: 'Turn scattered data into dashboards, reports, and information you can actually use.',
    id: 'improve-visibility',
  },
  {
    icon: Wrench,
    title: 'Build Better Tools',
    desc: 'Custom internal tools and applications built around how your team actually works.',
    id: 'build-better-tools',
  },
  {
    icon: ShieldCheck,
    title: 'Make AI Practical',
    desc: "Use AI where it creates real value, not just because it's trendy.",
    id: 'make-ai-practical',
  },
]

const outcomes = [
  { title: 'Less Busywork', desc: 'Automate the boring stuff that slows your team down.' },
  { title: 'Happier Teams', desc: 'Tools people enjoy using because they actually help.' },
  { title: 'Better Results', desc: 'More time for work that moves the business forward.' },
]

export default function WhatIBuildPage() {
  return (
    <>
      <Navbar />
      <main className="bg-void">
        <section className="mx-auto max-w-[1400px] px-6 pt-36 pb-20 md:px-12 md:pt-32">
          <p className="text-sm font-semibold tracking-[0.08em] text-signal-bright">WHAT I BUILD</p>
          <h1 className="mt-6 max-w-[20ch] text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl">
            I don&apos;t build everything. I build what wastes your time the most.
          </h1>
          <p className="mt-5 max-w-[50ch] text-lg leading-relaxed text-ink-dim">
            Here&apos;s how I help businesses get more done with less busywork.
          </p>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-4">
            {cards.map((card) => {
              const Icon = card.icon
              return (
                <RevealItem key={card.id}>
                  <div
                    id={card.id}
                    className="flex h-full flex-col gap-3 rounded-card border border-line bg-raised p-7 transition-colors hover:border-signal"
                  >
                    <Icon size={28} className="text-signal-bright" weight="duotone" />
                    <p className="mt-2 text-lg font-medium text-ink">{card.title}</p>
                    <p className="flex-grow text-sm leading-relaxed text-ink-dim">{card.desc}</p>
                    <Link
                      href={`/what-i-build#${card.id}`}
                      className="flex items-center gap-1 text-sm font-semibold text-signal-bright"
                    >
                      Learn more <ArrowRight size={14} weight="bold" />
                    </Link>
                  </div>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 pb-28 md:px-12">
          <Reveal>
            <div className="grid grid-cols-1 gap-10 rounded-card border border-line bg-surface p-9 md:grid-cols-[280px_1fr_1fr_1fr] md:p-12">
              <div>
                <p className="text-sm font-semibold tracking-[0.08em] text-ink-dim">MY APPROACH IS SIMPLE</p>
                <p className="mt-5 text-2xl font-medium leading-tight tracking-tight text-signal-bright md:text-3xl">
                  Find the pain.
                  <br />
                  Fix the process.
                  <br />
                  Give time back.
                </p>
              </div>
              {outcomes.map((o) => (
                <div key={o.title}>
                  <p className="text-lg font-medium text-ink">{o.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-dim">{o.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
    </>
  )
}
