'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { List, X } from '@phosphor-icons/react/dist/ssr'

const navLinks = [
  { label: 'Work', href: '/' },
  { label: 'What I Build', href: '/what-i-build' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-100 h-[72px] border-b border-line bg-void/85 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1400px] items-center px-6 md:px-12">
        <Link href="/" className="flex items-baseline text-xl font-semibold tracking-tight">
          <span className="text-ink">Sean</span>
          <span className="text-signal">{'Builds </>'}</span>
        </Link>

        <div className="ml-auto hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-signal-bright ${
                  isActive ? 'text-signal-bright' : 'text-ink-dim'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <Link
          href="/faq#contact"
          className="ml-8 hidden h-10 items-center rounded-pill border border-line-bright px-5 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal-bright lg:flex"
        >
          Book a Call
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-input text-ink lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-[72px] flex flex-col gap-1 border-b border-line bg-void px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-input px-3 py-3 text-base font-medium text-ink-dim hover:bg-raised hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/faq#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex h-11 items-center justify-center rounded-pill border border-line-bright text-sm font-medium text-ink"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  )
}
