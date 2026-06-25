'use client'
import { useState } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import Navbar from '../../components/Navbar'
import { RevealGroup, RevealItem } from '../../components/Reveal'

const posts = [
  { tag: 'AUTOMATION', title: "The 5 Signs You Should Automate (But Probably Haven't)", excerpt: 'Simple ways to spot time-wasting tasks before they drain your team.', date: 'May 10, 2024', readTime: '6 min read', href: '#' },
  { tag: 'AI', title: 'AI Is a Tool, Not a Strategy. Here is How I Think About It', excerpt: 'Why most companies get AI wrong and how to use it where it actually helps.', date: 'Apr 28, 2024', readTime: '5 min read', href: '#' },
  { tag: 'BUILDING', title: "Don't Reinvent the Wheel. Just Make a Better Wheel.", excerpt: 'Building on proven tools and focusing on what actually matters.', date: 'Apr 15, 2024', readTime: '4 min read', href: '#' },
]

const filters = ['All', 'Automation', 'AI', 'Security', 'Building']

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = posts.filter((p) => {
    const matchFilter = activeFilter === 'All' || p.tag.toLowerCase() === activeFilter.toLowerCase()
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchFilter && matchSearch
  })

  return (
    <>
      <Navbar />
      <main className="bg-void">
        <section className="mx-auto max-w-[1400px] px-6 pt-36 pb-20 md:px-12 md:pt-32">
          <p className="text-sm font-semibold tracking-[0.08em] text-signal-bright">BLOG</p>
          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
            <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl">
              Thoughts, lessons, and things I&apos;m figuring out.
            </h1>
            <p className="max-w-[42ch] text-lg leading-relaxed text-ink-dim">
              Ideas and real-world lessons from building systems, automating processes, and
              working in security.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`h-10 rounded-pill border px-5 text-sm font-medium transition-colors ${
                  activeFilter === f
                    ? 'border-signal bg-signal text-ink'
                    : 'border-line text-ink-dim hover:border-line-bright'
                }`}
              >
                {f}
              </button>
            ))}
            <div className="relative ml-auto w-full sm:w-[320px]">
              <MagnifyingGlass
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint"
              />
              <input
                type="text"
                placeholder="Search articles"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 w-full rounded-pill border border-line bg-raised pl-10 pr-4 text-sm text-ink placeholder:text-ink-faint focus:border-signal focus:outline-none"
              />
            </div>
          </div>

          <RevealGroup className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {filtered.map((post) => (
              <RevealItem key={post.title}>
                <a
                  href={post.href}
                  className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-raised transition-all hover:-translate-y-1 hover:border-signal"
                >
                  <div className="m-4 h-28 flex-shrink-0 rounded-input border border-line bg-elevated" />
                  <div className="flex flex-grow flex-col gap-2 px-6 pb-6">
                    <p className="text-xs font-semibold tracking-[0.06em] text-signal-bright">{post.tag}</p>
                    <h3 className="text-xl font-medium leading-tight text-ink">{post.title}</h3>
                    <p className="flex-grow text-sm leading-relaxed text-ink-dim">{post.excerpt}</p>
                    <p className="mt-1 text-xs text-ink-faint">
                      {post.date} &middot; {post.readTime}
                    </p>
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mt-12 flex justify-center pb-20">
            <button className="h-12 rounded-pill border border-line px-9 text-sm font-medium text-ink transition-colors hover:border-signal">
              View All Articles
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
