'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus } from '@phosphor-icons/react/dist/ssr'
import Navbar from '../../components/Navbar'
import { Reveal } from '../../components/Reveal'

const faqs = [
  { q: 'What types of projects do you take on?', a: 'Projects that save time, reduce busywork, or solve real problems. That includes automation, internal tools, dashboards, AI integrations, and full custom applications.' },
  { q: 'Do you work with small businesses or startups?', a: 'Yes. Most of my clients are small teams, founders, and growing businesses who need real solutions without the overhead of a large dev agency.' },
  { q: 'How is this different from hiring a developer?', a: "You're not just getting code. You're getting a thinking partner who understands your problem first. I focus on outcomes, not hours." },
  { q: "What's your process?", a: 'We start with a discovery call to understand the pain. Then I scope the solution, build iteratively, and hand over something your team can actually use.' },
  { q: 'How do you charge?', a: 'Project-based for most work, with retainer options for ongoing builds. No hidden fees, no billing surprises.' },
  { q: 'How long does a typical project take?', a: 'Small automations: 1-2 weeks. Custom tools and applications: 4-8 weeks. Complex platforms: 8+ weeks. We scope clearly upfront so you know what to expect.' },
  { q: 'Can you work on existing tools and systems?', a: "Absolutely. I integrate with existing stacks all the time. You don't have to start over, we build on what you have." },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <Navbar />
      <main className="bg-void">
        <section className="mx-auto max-w-[1400px] px-6 pt-36 pb-20 md:px-12 md:pt-32">
          <p className="text-sm font-semibold tracking-[0.08em] text-signal-bright">FAQ</p>
          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end">
            <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl">
              Common questions.
              <br />
              Straight answers.
            </h1>
            <p className="max-w-[40ch] text-lg leading-relaxed text-ink-dim">
              No fluff. Just the stuff people usually want to know before we talk.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 pb-10 md:grid-cols-[1fr_340px]">
            <div className="flex flex-col gap-2">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <div key={faq.q}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className={`flex w-full items-center justify-between rounded-input border px-5 py-4 text-left transition-colors ${
                        isOpen ? 'border-signal' : 'border-line hover:border-line-bright'
                      } bg-raised`}
                    >
                      <span className="text-sm font-medium text-ink md:text-base">{faq.q}</span>
                      {isOpen ? (
                        <Minus size={18} className="shrink-0 text-signal-bright" />
                      ) : (
                        <Plus size={18} className="shrink-0 text-ink-dim" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="rounded-b-input border-x border-b border-signal bg-raised px-5 py-4">
                        <p className="text-sm leading-relaxed text-ink-dim">{faq.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col gap-4">
              <Reveal>
                <div id="contact" className="rounded-card border border-line bg-raised p-9">
                  <h3 className="text-2xl font-medium leading-tight text-ink">
                    Still have questions?
                    <br />
                    Let&apos;s talk.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-dim">
                    A quick call usually clears things up faster.
                  </p>
                  <Link
                    href="https://calendly.com"
                    target="_blank"
                    className="mt-7 flex h-12 items-center justify-center rounded-pill bg-signal text-sm font-semibold text-ink transition-colors hover:bg-signal-bright"
                  >
                    Book a Call
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-card border border-line bg-raised p-9">
                  <p className="text-lg leading-relaxed text-ink">
                    &ldquo;Sean has a rare ability to take complicated problems and turn them into
                    simple, effective solutions that actually get used.&rdquo;
                  </p>
                  <p className="mt-4 text-sm text-ink-faint">Director of Operations</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
