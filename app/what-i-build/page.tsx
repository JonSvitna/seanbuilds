import Link from 'next/link'
import Navbar from '../../components/Navbar'

const cards = [
  { icon: '◯', title: 'Save Time', desc: 'Automate repetitive tasks, approvals, reporting, and manual processes.', id: 'save-time' },
  { icon: '◯', title: 'Improve Visibility', desc: 'Turn scattered data into dashboards, reports, and information you can actually use.', id: 'improve-visibility' },
  { icon: '◯', title: 'Build Better Tools', desc: 'Custom internal tools and applications built around how your team actually works.', id: 'build-better-tools' },
  { icon: '◯', title: 'Make AI Practical', desc: "Use AI where it creates real value — not just because it's trendy.", id: 'make-ai-practical' },
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
      <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
        <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 54px 0' }}>
          <p style={{ fontWeight: 600, fontSize: '13px', color: 'var(--accent-blue)', letterSpacing: '0.08em', marginBottom: '40px' }}>
            WHAT I BUILD
          </p>
          <h1 style={{ fontWeight: 700, fontSize: '47px', lineHeight: 1.18, color: 'var(--text-white)', maxWidth: '620px', marginBottom: '32px' }}>
            I don&apos;t build everything.<br />I build what wastes<br />your time the most.
          </h1>
          <p style={{ fontWeight: 400, fontSize: '17px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '420px', marginBottom: '64px' }}>
            Here&apos;s how I help businesses get more done with less busywork.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '20px', marginBottom: '64px' }}>
            {cards.map((card) => (
              <div key={card.id} id={card.id} className="service-card" style={{
                backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: '28px 28px 24px',
                display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '200px',
              }}>
                <p style={{ fontWeight: 400, fontSize: '28px', color: 'var(--accent-blue)' }}>{card.icon}</p>
                <p style={{ fontWeight: 600, fontSize: '20px', color: 'var(--text-white)', marginTop: '8px' }}>{card.title}</p>
                <p style={{ fontWeight: 400, fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5, flexGrow: 1 }}>{card.desc}</p>
                <Link href={`/what-i-build#${card.id}`} style={{ fontWeight: 600, fontSize: '13px', color: 'var(--accent-blue)' }}>
                  Learn more  →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 54px 80px' }}>
          <div style={{
            backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)',
            borderRadius: '14px', padding: '40px 32px',
            display: 'grid', gridTemplateColumns: '300px 1fr 1fr 1fr', gap: '40px', alignItems: 'start',
          }}>
            <div>
              <p style={{ fontWeight: 600, fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '20px' }}>
                MY APPROACH IS SIMPLE
              </p>
              <p style={{ fontWeight: 700, fontSize: '30px', lineHeight: 1.18, color: 'var(--accent-blue)' }}>
                Find the pain.<br />Fix the process.<br />Give time back.
              </p>
            </div>
            {outcomes.map((o) => (
              <div key={o.title}>
                <p style={{ fontWeight: 600, fontSize: '19px', color: 'var(--text-white)', marginBottom: '12px' }}>{o.title}</p>
                <p style={{ fontWeight: 400, fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
