'use client'

import { useCountUp } from '../../lib/useCountUp'
import { Reveal } from '../Reveal'

const stats: { target: number; suffix: string; label: string; icon: React.ReactNode }[] = [
  {
    target: 10,
    suffix: '+',
    label: 'Years in IT & Security',
    icon: (
      <span className="relative grid h-[34px] w-[34px] place-items-center rounded-full border-2 border-[#3d5afe]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#5b7bff]" />
        <span
          className="absolute -inset-0.5 rounded-full border-2 border-[rgba(91,123,255,.6)]"
          style={{ animation: 'ringPing 2.6s ease-out infinite' }}
        />
      </span>
    ),
  },
  {
    target: 38,
    suffix: '+',
    label: 'Projects Shipped',
    icon: (
      <span
        className="grid h-[34px] w-[34px] place-items-center text-xl text-[#a78bfa]"
        style={{ animation: 'floatY 3s ease-in-out infinite' }}
      >
        ➤
      </span>
    ),
  },
  {
    target: 120,
    suffix: '+',
    label: 'Automations Built',
    icon: (
      <span
        className="h-[30px] w-[30px] bg-gradient-to-br from-[#5b7bff] to-[#8b3dff]"
        style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          animation: 'spinSlow 10s linear infinite',
        }}
      />
    ),
  },
  {
    target: 18,
    suffix: '',
    label: 'AI Models Used',
    icon: (
      <span
        className="grid h-8 w-8 place-items-center rounded-lg border-2 border-[#8b3dff] font-mono text-[10px] text-[#a78bfa]"
        style={{ animation: 'glowPulse 3s ease-in-out infinite' }}
      >
        AI
      </span>
    ),
  },
  {
    target: 216,
    suffix: '',
    label: 'Day Build Streak',
    icon: (
      <span
        className="grid h-[34px] w-[34px] place-items-center text-[22px] text-[#7d95ff]"
        style={{ animation: 'dotPulse 1.6s ease-in-out infinite' }}
      >
        ⚡
      </span>
    ),
  },
]

function Stat({ stat }: { stat: (typeof stats)[number] }) {
  const { ref, value } = useCountUp(stat.target)
  return (
    <div className="flex items-center justify-center gap-4">
      {stat.icon}
      <span>
        <span className="text-2xl font-extrabold text-ink md:text-[26px]">
          <span ref={ref}>{value}</span>
          {stat.suffix}
        </span>
        <br />
        <span className="text-[13px] text-ink-dim">{stat.label}</span>
      </span>
    </div>
  )
}

export default function StatsBar() {
  return (
    <Reveal y={40}>
      <section className="mx-auto max-w-[1440px] px-6 md:px-9">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-[rgba(99,116,255,.18)] bg-[rgba(10,13,26,.6)] px-5 py-6 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <Stat key={stat.label} stat={stat} />
          ))}
        </div>
      </section>
    </Reveal>
  )
}
