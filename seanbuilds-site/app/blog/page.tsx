'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'

const posts = [
  { tag: 'AUTOMATION', title: "The 5 Signs You Should Automate (But Probably Haven't)", excerpt: "Simple ways to spot time-wasting tasks before they drain your team.", date: 'May 10, 2024', readTime: '6 min read', href: '#' },
  { tag: 'AI', title: "AI Is a Tool, Not a Strategy — Here's How I Think About It", excerpt: "Why most companies get AI wrong and how to use it where it actually helps.", date: 'Apr 28, 2024', readTime: '5 min read', href: '#' },
  { tag: 'BUILDING', title: "Don't Reinvent the Wheel. Just Make a Better Wheel.", excerpt: "Building on proven tools and focusing on what actually matters.", date: 'Apr 15, 2024', readTime: '4 min read', href: '#' },
]

const filters = ['All', 'Automation', 'AI', 'Security', 'Building']

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = posts.filter((p) => {
    const matchFilter = activeFilter === 'All' || p.tag.toLowerCase() === activeFilter.toLowerCase()
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchFilter && matchSearch
  })

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
        <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 54px 0' }}>
          <p style={{ fontWeight: 600, fontSize: '13px', color: 'var(--accent-blue)', letterSpacing: '0.08em', marginBottom: '24px' }}>BLOG</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '64px', alignItems: 'start' }}>
            <h1 style={{ fontWeight: 700, fontSize: '47px', lineHeight: 1.18, color: 'var(--text-white)' }}>
              Thoughts, lessons,<br />and things I&apos;m<br />figuring out.
            </h1>
            <p style={{ fontWeight: 400, fontSize: '18px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '400px', paddingTop: '8px' }}>
              Ideas and real-world lessons from building systems, automating processes, and working in security.
            </p>
          </div>

          {/* Filter + Search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`filter-btn ${activeFilter === f ? 'filter-active' : ''}`}
                style={{
                  height: '38px', padding: '0 20px',
                  backgroundColor: activeFilter === f ? 'var(--accent-blue-bright)' : 'var(--bg-primary)',
                  border: '1px solid var(--border)', borderRadius: '7px',
                  fontWeight: 500, fontSize: '13px', color: 'var(--text-white)', cursor: 'pointer',
                }}>
                {f}
              </button>
            ))}
            <div style={{ marginLeft: 'auto' }}>
              <input type="text" placeholder="Search articles..." value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                style={{
                  width: '370px', height: '38px', padding: '0 16px',
                  backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)',
                  borderRadius: '7px', fontWeight: 400, fontSize: '13px',
                  color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif',
                }}
              />
            </div>
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '20px', marginBottom: '48px' }}>
            {filtered.map((post) => (
              <a key={post.href + post.title} href={post.href}
                className="blog-card"
                style={{
                  backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column', minHeight: '345px', textDecoration: 'none',
                }}>
                <div style={{ margin: '18px 18px 0', height: '110px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '9px', flexShrink: 0 }} />
                <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                  <p style={{ fontWeight: 600, fontSize: '11px', color: 'var(--accent-blue)', letterSpacing: '0.06em' }}>{post.tag}</p>
                  <h3 style={{ fontWeight: 600, fontSize: '22px', lineHeight: 1.2, color: 'var(--text-white)' }}>{post.title}</h3>
                  <p style={{ fontWeight: 400, fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.5, flexGrow: 1 }}>{post.excerpt}</p>
                  <p style={{ fontWeight: 400, fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{post.date}  •  {post.readTime}</p>
                </div>
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '80px' }}>
            <button className="btn-view-all">View All Articles</button>
          </div>
        </section>
      </main>
    </>
  )
}
