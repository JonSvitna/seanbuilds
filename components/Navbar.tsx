'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Work', href: '/' },
  { label: 'What I Build', href: '/what-i-build' },
  { label: 'GitHub Projects', href: 'https://github.com', external: true },
  { label: 'About', href: '/#about' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      padding: '0 48px',
      height: '80px',
      backgroundColor: 'rgba(3,4,8,0.92)',
      borderBottom: '1px solid var(--border)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'baseline' }}>
        <span style={{ fontWeight: 700, fontSize: '26px', color: 'var(--text-white)', lineHeight: 1.18 }}>Sean</span>
        <span style={{ fontWeight: 700, fontSize: '26px', color: 'var(--accent-blue)', lineHeight: 1.18 }}>{'Builds </>'}</span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '24px' }}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return link.external ? (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="nav-link"
              style={{ fontWeight: 500, fontSize: '13px', color: 'var(--text-white)', padding: '0 28px', whiteSpace: 'nowrap' }}>
              {link.label}
            </a>
          ) : (
            <Link key={link.label} href={link.href}
              className="nav-link"
              style={{ fontWeight: 500, fontSize: '13px', color: isActive ? 'var(--accent-blue)' : 'var(--text-white)', padding: '0 28px', whiteSpace: 'nowrap' }}>
              {link.label}
            </Link>
          )
        })}
      </div>

      <Link href="/faq#contact" className="btn-outline">
        {"Let's Build Something"}
      </Link>
    </nav>
  )
}
