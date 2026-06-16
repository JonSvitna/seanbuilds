import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>

        {/* Hero */}
        <section style={{
          maxWidth: '1440px', margin: '0 auto', padding: '64px 48px 0',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start',
        }}>
          {/* Left */}
          <div style={{ paddingTop: '64px' }}>
            <p style={{ fontWeight: 600, fontSize: '15px', color: 'var(--accent-blue)', letterSpacing: '0.05em', marginBottom: '40px' }}>
              I BUILD SYSTEMS THAT
            </p>
            <h1 style={{ fontWeight: 700, fontSize: '56px', lineHeight: 1.18, color: 'var(--text-white)', marginBottom: '48px' }}>
              Save time.<br />Reduce headaches.<br />Solve real problems.
            </h1>
            <p style={{ fontWeight: 400, fontSize: '19px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '48px', maxWidth: '520px' }}>
              From automation to custom applications,<br />I build systems that cut busywork,<br />bring clarity, and give you time back.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link href="/what-i-build" className="btn-primary">See My Work</Link>
              <Link href="/faq#contact" className="btn-secondary">Book a Call</Link>
            </div>
          </div>

          {/* Right: Dashboard preview — Vulnaguard card + 3 sub-cards below (matches Figma structure) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '32px' }}>
            {/* Vulnaguard Sentinel panel */}
            <div style={{
              backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-2xl)', padding: '32px',
            }}>
              <p style={{ fontWeight: 600, fontSize: '18px', color: 'var(--text-white)', marginBottom: '24px', letterSpacing: '0.05em' }}>
                VULNAGUARD SENTINEL
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px', marginBottom: '20px' }}>
                {[
                  { label: 'Risk', value: 'High', color: 'var(--text-danger)' },
                  { label: 'Threats', value: '128', color: 'var(--text-white)' },
                  { label: 'Active', value: '28', color: 'var(--text-white)' },
                  { label: 'Score', value: '78%', color: 'var(--text-white)' },
                ].map((m) => (
                  <div key={m.label} style={{
                    backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)', padding: '14px 12px', textAlign: 'center',
                  }}>
                    <p style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '6px' }}>{m.label}</p>
                    <p style={{ fontWeight: 700, fontSize: '25px', color: m.color }}>{m.value}</p>
                  </div>
                ))}
              </div>
              <div style={{
                backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)', padding: '16px',
              }}>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>Risk Trend</p>
                <div style={{ height: '2px', backgroundColor: 'var(--accent-blue-bright)', borderRadius: '1px' }} />
              </div>
            </div>

            {/* 3 sub-cards row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              <div style={{
                backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)', padding: '20px',
              }}>
                <p style={{ fontWeight: 600, fontSize: '16px', color: 'var(--text-white)', marginBottom: '12px' }}>AI OS</p>
                <div style={{ height: '2px', backgroundColor: 'var(--accent-blue-bright)', borderRadius: '1px', width: '60%' }} />
              </div>
              <div style={{
                backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)', padding: '20px',
              }}>
                <p style={{ fontWeight: 600, fontSize: '18px', color: 'var(--text-white)', marginBottom: '12px' }}>Svitna</p>
                <p style={{ fontWeight: 700, fontSize: '25px', color: 'var(--text-white)' }}>78%</p>
              </div>
              <div style={{
                backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--accent-blue-bright)',
                borderRadius: 'var(--radius-xl)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px',
              }}>
                {['New Request','Extract Data','Review & Approve','Update System','Notify Team'].map((s) => (
                  <div key={s} style={{
                    backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)', padding: '6px 10px',
                  }}>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '64px 48px 0' }}>
          <p style={{ fontWeight: 600, fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '24px' }}>
            TRUSTED BY TEAMS AND FOUNDERS
          </p>
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', marginBottom: '48px' }}>
            {['◉  Startups','◉  Small Teams','◉  Growing Businesses','◉  Security Leaders'].map((item) => (
              <p key={item} style={{ fontWeight: 400, fontSize: '15px', color: 'var(--text-white)' }}>{item}</p>
            ))}
          </div>
        </section>

        {/* Bottom Metrics */}
        <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 48px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px' }}>
            {[
              { top: '20+', bottom: 'Projects Built' },
              { top: '8+', bottom: 'Years in Tech' },
              { top: 'Security + AI', bottom: 'Background' },
              { top: 'Thousands', bottom: 'of Hours Building' },
            ].map((m) => (
              <div key={m.top} style={{
                backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: '24px 32px',
              }}>
                <p style={{ fontWeight: 600, fontSize: '20px', color: 'var(--text-white)', lineHeight: 1.3 }}>
                  {m.top}<br /><span style={{ fontSize: '16px' }}>{m.bottom}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
