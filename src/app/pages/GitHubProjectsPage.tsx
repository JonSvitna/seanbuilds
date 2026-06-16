import { Github, ExternalLink, Shield, Bot, TrendingUp, Zap, Globe, Lock } from "lucide-react";

const projects = [
  { icon: Shield, name: "Vulnaguard Sentinel", description: "Executive security dashboard for tracking vulnerabilities, compliance scores, and risk posture across your environment.", tags: ["React", "Python", "Security", "Dashboard"], status: "Active" },
  { icon: Bot, name: "AI OS", description: "A personal AI operating layer — voice-enabled assistant with context memory, workflow triggers, and integration hooks.", tags: ["Python", "OpenAI", "Voice", "Automation"], status: "Active" },
  { icon: TrendingUp, name: "Trading Journal", description: "Performance tracking for active traders. P&L analytics, win rate breakdowns, trade tagging, and pattern recognition.", tags: ["React", "TypeScript", "Charts", "Finance"], status: "Active" },
  { icon: Zap, name: "Automation Flow Engine", description: "Internal workflow automation toolkit. Drag-and-drop flow builder with connectors for common business tools.", tags: ["Node.js", "React", "Webhooks", "APIs"], status: "Active" },
  { icon: Globe, name: "Svitna Fitness", description: "Personalized fitness tracking app with weekly planning, progress analytics, and habit building.", tags: ["React Native", "TypeScript", "Health"], status: "Active" },
  { icon: Lock, name: "BlueAlamo Security Toolkit", description: "Collection of security utilities for small teams — asset discovery, exposure scanning, and automated reporting.", tags: ["Python", "Security", "CLI", "Open Source"], status: "Active" },
];

export function GitHubProjectsPage() {
  return (
    <div className="px-10 py-12 flex flex-col gap-10">
      <div className="flex flex-col gap-4 max-w-xl">
        <p className="text-blue-500 text-xs font-semibold tracking-[0.2em] uppercase">GitHub Projects</p>
        <h1 className="text-white text-5xl font-bold leading-tight">20+ projects.<br /><span className="text-blue-400">All real problems.</span></h1>
        <p className="text-white/60 text-base leading-relaxed">Everything I build starts from a real pain point. No tutorial projects. No demo CRUD apps.</p>
      </div>

      <a href="https://github.com/JonSvitna" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-fit px-5 py-2.5 text-sm text-white rounded-lg border border-white/15 bg-[#0A0F1E] hover:border-blue-500/40 transition-colors no-underline">
        <Github size={16} />
        View all on GitHub
        <ExternalLink size={13} className="text-white/40" />
      </a>

      <div className="grid grid-cols-3 gap-5">
        {projects.map(({ icon: Icon, name, description, tags, status }) => (
          <div key={name} className="rounded-xl border border-white/8 bg-[#0A0F1E] p-6 flex flex-col gap-4 hover:border-blue-500/30 transition-colors group">
            <div className="flex items-start justify-between">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Icon size={16} className="text-blue-400" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">{status}</span>
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-2">{name}</p>
              <p className="text-white/55 text-xs leading-relaxed">{description}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {tags.map((tag) => (
                <span key={tag} className="text-[10px] text-blue-400/80 bg-blue-500/8 border border-blue-500/15 px-2 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
