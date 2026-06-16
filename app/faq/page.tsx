'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

const faqs = [
  { q: 'What types of projects do you take on?', a: 'Projects that save time, reduce busywork, or solve real problems. That includes automation, internal tools, dashboards, AI integrations, and full custom applications.' },
  { q: 'Do you work with small businesses or startups?', a: 'Yes. Most of my clients are small teams, founders, and growing businesses who need real solutions without the overhead of a large dev agency.' },
  { q: 'How is this different from hiring a developer?', a: "You're not just getting code — you're getting a thinking partner who understands your problem first. I focus on outcomes, not hours." },
  { q: "What's your process?", a: 'We start with a discovery call to understand the pain. Then I scope the solution, build iteratively, and hand over something your team can actually use.' },
  { q: 'How do you charge?', a: 'Project-based for most work, with retainer options for ongoing builds. No hidden fees, no billing surprises.' },
  { q: 'How long does a typical project take?', a: 'Small automations: 1–2 weeks. Custom tools and applications: 4–8 weeks. Complex platforms: 8+ weeks. We scope clearly upfront so you know what to expect.' },
  { q: 'Can you work on existing tools and systems?', a: "Absolutely. I integrate with existing stacks all the time. You don't have to start over — we build on what you have." },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
        <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 54px 0' }}>
          <p style={{ fontWeight: 600, fontSize: '13px', color: 'var(--accent-blue)', letterSpacing: '0.08em', marginBottom: '24px' }}>FAQ</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'end', marginBottom: '56px' }}>
            <h1 style={{ fontWeight: 700, fontSize: '47px', lineHeight: 1.18, color: 'var(--text-white)' }}>
              Common questions.<br />Straight answers.
            </h1>
            <p style={{ fontWeight: 400, fontSize: '18px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '350px', paddingBottom: '8px' }}>
              No fluff. Just the stuff people<br />usually want to know before we talk.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '760px 1fr', gap: '32px', paddingBottom: '80px' }}>
            {/* Accordion */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="faq-btn"
                    style={{
                      width: '100%', backgroundColor: 'var(--bg-secondary)',
                      border: `1px solid ${openIndex === i ? 'var(--accent-blue)' : 'var(--border)'}`,
                      borderRadius: '7px', padding: '0 22px', height: '45px',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer',
                    }}>
                    <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-white)', textAlign: 'left' }}>{faq.q}</span>
                    <span style={{ fontWeight: 600, fontSize: '20px', color: 'var(--text-white)', flexShrink: 0, marginLeft: '16px' }}>
                      {openIndex === i ? '−' : '+'}
                    </span>
                  </button>
                  {openIndex === i && (
                    <div style={{
                      padding: '16px 22px',
                      backgroundColor: 'var(--bg-secondary)',
                      borderLeft: '1px solid var(--accent-blue)',
                      borderRight: '1px solid var(--accent-blue)',
                      borderBottom: '1px solid var(--accent-blue)',
                      borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px',
                      marginTop: '-7px',
                    }}>
                      <p style={{ fontWeight: 400, fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div id="contact" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '40px' }}>
                <h3 style={{ fontWeight: 600, fontSize: '28px', lineHeight: 1.2, color: 'var(--text-white)', marginBottom: '20px' }}>
                  Still have questions?<br />Let&apos;s talk.
                </h3>
                <p style={{ fontWeight: 400, fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '28px' }}>
                  A quick call usually clears things up faster.
                </p>
                <Link href="https://calendly.com" target="_blank" className="btn-cta">Book a Call</Link>
              </div>
              <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '40px' }}>
                <p style={{ fontWeight: 700, fontSize: '48px', color: 'var(--accent-blue)', lineHeight: 1, marginBottom: '16px' }}>&ldquo;</p>
                <p style={{ fontWeight: 400, fontSize: '18px', color: 'var(--text-white)', lineHeight: 1.5, marginBottom: '20px' }}>
                  Sean has a rare ability to take complicated problems and turn them into simple, effective solutions that actually get used.
                </p>
                <p style={{ fontWeight: 400, fontSize: '14px', color: 'var(--text-muted)' }}>— Director of Operations</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
