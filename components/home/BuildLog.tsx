'use client'

import { motion } from 'motion/react'
import { Reveal, RevealGroup, RevealItem } from '../Reveal'

const logRows = [
  { date: 'JUL 06', title: 'Built AI contract parser agent', tag: 'AI AUTOMATION', tagColor: '#7d95ff', tagBorder: 'rgba(99,116,255,.45)' },
  { date: 'JUL 04', title: 'Redesigned Sentinel dashboard', tag: 'SENTINEL', tagColor: '#a78bfa', tagBorder: 'rgba(167,139,250,.45)' },
  { date: 'JUL 02', title: 'Shipped Resume Builder v2.0', tag: 'WEB APP', tagColor: '#7d95ff', tagBorder: 'rgba(99,116,255,.45)' },
  { date: 'JUN 30', title: 'New workflow: Lead Intake Agent', tag: 'AUTOMATION', tagColor: '#a78bfa', tagBorder: 'rgba(167,139,250,.45)' },
  { date: 'JUN 28', title: 'YouTube video: Building in Public', tag: 'CONTENT', tagColor: '#3ddc84', tagBorder: 'rgba(61,220,132,.45)' },
  { date: 'JUN 26', title: 'Integrated OpenAI + Function Calling', tag: 'AI SYSTEMS', tagColor: '#7d95ff', tagBorder: 'rgba(99,116,255,.45)' },
]

export default function BuildLog() {
  return (
    <Reveal
      id="buildlog"
      x={46}
      y={0}
      className="scroll-mt-24 rounded-2xl border border-[rgba(99,116,255,.18)] bg-[rgba(10,13,26,.6)] p-6"
    >
      <div className="mb-5 flex items-center">
        <div className="text-[15px] font-extrabold tracking-[.18em] text-ink">BUILD LOG</div>
        <a
          href="/blog"
          className="ml-auto inline-flex items-center gap-2 text-[13px] font-bold text-[#7d95ff] transition-[color,gap] duration-[250ms] hover:gap-3.5 hover:text-white"
        >
          View Full Log <span>→</span>
        </a>
      </div>
      <div className="relative flex flex-col">
        <div
          className="absolute bottom-3 left-[5px] top-3 w-0.5"
          style={{ background: 'linear-gradient(180deg, #3d5afe, rgba(61,90,254,.05))' }}
        />
        <RevealGroup stagger={0.08}>
          {logRows.map((row) => (
            <RevealItem key={row.date + row.title} x={-36} y={0}>
              <motion.div
                className="relative flex items-center gap-3.5 rounded-lg py-[11px] pl-[26px]"
                whileHover={{ backgroundColor: 'rgba(61,90,254,.08)' }}
              >
                <span
                  className="absolute left-0 h-3 w-3 rounded-full border-2 border-[#0a0d1a] bg-[#3d5afe]"
                  style={{ animation: 'tickerDot 2.4s ease-in-out infinite' }}
                />
                <span className="w-[52px] shrink-0 font-mono text-xs text-[#7d86a8]">
                  {row.date}
                </span>
                <span className="flex-1 text-[13.5px] leading-[1.4] text-[#d5daef]">
                  {row.title}
                </span>
                <span
                  className="shrink-0 rounded-[5px] border px-[7px] py-[3px] font-mono text-[9.5px] tracking-[.06em]"
                  style={{ color: row.tagColor, borderColor: row.tagBorder }}
                >
                  {row.tag}
                </span>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Reveal>
  )
}
