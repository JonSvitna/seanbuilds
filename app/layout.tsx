import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'SeanBuilds — Systems That Save Time',
  description: 'I build systems that save time, reduce headaches, and solve real problems. From automation to custom applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
