import Image from 'next/image'
import { Reveal, RevealGroup, RevealItem } from '../Reveal'

type Build = {
  title: string
  desc: string
  tag: string
  tagColor: string
  tagBorder: string
  image?: { src: string; alt: string }
}

const builds: Build[] = [
  {
    title: 'VULNAGUARD SENTINEL',
    desc: 'Compliance intelligence platform for organizations handling sensitive data.',
    tag: 'ACTIVE DEVELOPMENT',
    tagColor: '#3ddc84',
    tagBorder: 'rgba(61,220,132,.45)',
  },
  {
    title: 'GOLF PERFORMANCE APP',
    desc: 'AI-powered app that uses data and machine learning to improve performance and lower scores.',
    tag: 'MOBILE APP',
    tagColor: '#7d95ff',
    tagBorder: 'rgba(99,116,255,.45)',
  },
  {
    title: 'AI OS',
    desc: 'Your command center for productivity. All your tools, automations, and projects in one intelligent hub.',
    tag: 'PRODUCTIVITY PLATFORM',
    tagColor: '#a78bfa',
    tagBorder: 'rgba(167,139,250,.45)',
  },
  {
    title: 'LOCAL BUSINESS WEBSITE BUILDS',
    desc: 'Fast, modern websites for local businesses that drive real results.',
    tag: 'CLIENT WORK',
    tagColor: '#3ddc84',
    tagBorder: 'rgba(61,220,132,.45)',
    image: { src: '/images/thumb-web-builds.png', alt: 'Local business website build' },
  },
  {
    title: 'SEO AGENT',
    desc: 'Autonomous SEO agent that analyzes, optimizes, and grows organic traffic on autopilot.',
    tag: 'AI AUTOMATION',
    tagColor: '#7d95ff',
    tagBorder: 'rgba(99,116,255,.45)',
    image: { src: '/images/thumb-seo-agent.png', alt: 'SEO agent' },
  },
]

function BuildThumb({ build }: { build: Build }) {
  if (build.image) {
    return (
      <div className="relative h-[74px] overflow-hidden rounded-lg">
        <Image
          src={build.image.src}
          alt={build.image.alt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
          sizes="220px"
        />
      </div>
    )
  }
  return (
    <div
      className="grid h-[74px] place-items-center rounded-lg border border-dashed border-[rgba(99,116,255,.3)]"
      style={{
        background:
          'repeating-linear-gradient(135deg, rgba(99,116,255,.05) 0 10px, transparent 10px 20px)',
      }}
    >
      <span className="font-mono text-[10px] tracking-[.1em] text-ink-faint">COMING SOON</span>
    </div>
  )
}

export default function FeaturedBuilds() {
  return (
    <Reveal
      y={40}
      className="rounded-2xl border border-[rgba(99,116,255,.18)] bg-[rgba(10,13,26,.6)] p-6"
    >
      <div className="mb-[18px] flex items-center">
        <div className="text-[15px] font-extrabold tracking-[.18em] text-ink">FEATURED BUILDS</div>
        <a
          href="/what-i-build"
          className="ml-auto inline-flex items-center gap-2 text-[13px] font-bold text-[#7d95ff] transition-[color,gap] duration-[250ms] hover:gap-3.5 hover:text-white"
        >
          View All Projects <span>→</span>
        </a>
      </div>
      <RevealGroup className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5" stagger={0.09}>
        {builds.map((build) => (
          <RevealItem
            key={build.title}
            className="group flex flex-col gap-3 rounded-xl border border-[rgba(99,116,255,.22)] bg-[rgba(14,17,34,.7)] p-3.5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(139,92,246,.6)] hover:shadow-[0_16px_40px_rgba(63,81,255,.28)]"
          >
            <BuildThumb build={build} />
            <div className="text-sm font-extrabold leading-[1.35] tracking-[.04em] text-ink">
              {build.title}
            </div>
            <div className="flex-1 text-[12.5px] leading-[1.55] text-ink-dim">{build.desc}</div>
            <div
              className="self-start rounded-[5px] border px-2 py-1 font-mono text-[10px] tracking-[.08em]"
              style={{ color: build.tagColor, borderColor: build.tagBorder }}
            >
              {build.tag}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Reveal>
  )
}
