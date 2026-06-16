import { Shield, Code2, Zap, Users } from "lucide-react";

const highlights = [
  { icon: Code2, label: "20+ Projects Built", sub: "Across security, AI, fitness, finance, and ops" },
  { icon: Shield, label: "15+ Years in Tech", sub: "Security, infrastructure, and software development" },
  { icon: Zap, label: "Security + AI Background", sub: "Built for environments where it actually matters" },
  { icon: Users, label: "Worked With Teams of All Sizes", sub: "From solo founders to enterprise security orgs" },
];

const thoughts = [
  { title: "Most automation projects fail for the same reason.", body: "They optimize the symptom, not the system. I spend the first part of every engagement understanding the actual workflow before writing a single line of code." },
  { title: "AI is a tool, not a strategy.", body: "Everyone wants to 'use AI.' Few have thought through where it actually helps. I help teams figure out the right problems to point it at." },
  { title: "Security should be boring.", body: "If your security program is exciting, something is wrong. Good security is invisible, consistent, and doesn't require heroics." },
];

export function AboutPage() {
  return (
    <div className="px-10 py-12 flex flex-col gap-16">
      <div className="flex gap-16 items-start">
        <div className="w-1/2 flex flex-col gap-6">
          <p className="text-blue-500 text-xs font-semibold tracking-[0.2em] uppercase">About</p>
          <h1 className="text-white text-5xl font-bold leading-tight">
            I'm Sean.<br />I build systems<br />that <span className="text-blue-400">actually work.</span>
          </h1>
          <p className="text-white/65 text-base leading-relaxed">15+ years in tech. Security background. Obsessed with automation, AI, and building tools that solve real problems instead of just looking good in demos.</p>
          <p className="text-white/65 text-base leading-relaxed">I started SeanBuilds because I kept seeing the same pattern: smart teams wasting hours every week on manual work that software should be handling. I build the systems that fix that.</p>
          <p className="text-white/65 text-base leading-relaxed">I work with founders, operators, and security teams who are tired of off-the-shelf tools that almost fit. I build things that actually fit.</p>
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-4 pt-2">
          {highlights.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="rounded-xl border border-white/8 bg-[#0A0F1E] p-5 flex flex-col gap-3">
              <Icon size={18} className="text-blue-400" strokeWidth={1.5} />
              <p className="text-white text-sm font-semibold leading-tight">{label}</p>
              <p className="text-white/45 text-xs leading-relaxed">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/8 pt-14 flex gap-16">
        <div className="w-1/3 shrink-0">
          <h2 className="text-white text-3xl font-bold leading-tight">How I think<br /><span className="text-blue-400">about the work.</span></h2>
          <p className="text-white/50 text-sm leading-relaxed mt-4">A few things I've figured out after a decade and a half of building.</p>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          {thoughts.map(({ title, body }) => (
            <div key={title} className="flex gap-4">
              <div className="w-1 shrink-0 rounded-full bg-blue-500/40 mt-1" />
              <div className="flex flex-col gap-2">
                <p className="text-white text-sm font-semibold">{title}</p>
                <p className="text-white/55 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
