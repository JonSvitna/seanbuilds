import type { Metadata } from 'next'
import { Manrope, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Sean Builds — I Build Systems That Solve Real Problems',
  description:
    "If it takes fourteen clicks to get to a solution, that's not you. That's the system. I build the systems, tools, and compliance work that get small teams unstuck.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
