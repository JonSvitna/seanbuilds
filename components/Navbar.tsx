'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { List, X } from '@phosphor-icons/react/dist/ssr'

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'BUILDS', href: '/#builds' },
  { label: 'SERVICES', href: '/what-i-build' },
  { label: 'BUILD LOG', href: '/#buildlog' },
  { label: 'ABOUT', href: '/faq' },
  { label: 'CONTACT', href: '/#contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[rgba(99,116,255,.10)] backdrop-blur-[14px] transition-[background,box-shadow] duration-[400ms] ease-out ${
        scrolled
          ? 'bg-[rgba(5,6,13,.9)] shadow-[0_10px_40px_rgba(3,4,12,.7)]'
          : 'bg-[rgba(5,6,13,.72)] shadow-none'
      }`}
      style={{ animation: 'heroIn .7s cubic-bezier(.2,.7,.2,1) both' }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center gap-6 px-6 py-3.5 md:gap-10 md:px-9">
        <Link href="/" className="flex shrink-0 items-center gap-3.5">
          <div
            className="grid h-11 w-11 place-items-center bg-gradient-to-br from-[#3d5afe] to-[#8b3dff]"
            style={{
              clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
              animation: 'glowPulse 4s ease-in-out infinite',
            }}
          >
            <div
              className="grid h-[38px] w-[38px] place-items-center bg-[#0a0d1c] text-[15px] font-extrabold tracking-[.5px]"
              style={{ clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' }}
            >
              SB
            </div>
          </div>
          <div className="text-[22px] font-extrabold tracking-[.04em] text-ink">
            SEAN{' '}
            <span
              className="bg-[linear-gradient(100deg,#5b7bff,#a044ff,#5b7bff)] bg-[length:200%_auto] bg-clip-text text-transparent"
              style={{ animation: 'shimmer 5s linear infinite' }}
            >
              BUILDS
            </span>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-8 text-[13.5px] font-semibold tracking-[.08em] lg:flex">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`border-b-2 pb-1.5 transition-colors duration-[250ms] hover:text-white ${
                  isActive
                    ? 'border-[#5b7bff] text-white [text-shadow:0_0_14px_rgba(91,123,255,.8)]'
                    : 'border-transparent text-[#aab3d2] hover:[text-shadow:0_0_14px_rgba(91,123,255,.9)]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/#contact"
          className="ml-6 hidden items-center gap-2.5 rounded-[10px] border border-[rgba(120,135,255,.45)] bg-[rgba(20,24,52,.4)] px-5 py-3 text-[14.5px] font-bold text-ink transition-all duration-300 hover:-translate-y-px hover:border-[rgba(160,120,255,.9)] hover:bg-[rgba(40,44,92,.5)] hover:shadow-[0_0_24px_rgba(99,102,241,.55)] lg:inline-flex"
        >
          Let&apos;s Build Together <span className="text-xs">↗</span>
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
        <div className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-[rgba(99,116,255,.10)] bg-[#05060d] px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-input px-3 py-3 text-sm font-semibold tracking-[.08em] text-[#aab3d2] hover:bg-raised hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex h-11 items-center justify-center rounded-[10px] border border-[rgba(120,135,255,.45)] text-sm font-bold text-ink"
          >
            Let&apos;s Build Together
          </Link>
        </div>
      )}
    </header>
  )
}
