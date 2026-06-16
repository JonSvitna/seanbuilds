import { ArrowRight } from "lucide-react";

const posts = [
  { tag: "AI + Tools", title: "The 3 Signs You Should Automate Something (But Probably Haven't Yet)", excerpt: "Most automation opportunities are hiding in plain sight. They're the things your team does every day that nobody questions because they've always done it that way.", date: "Jun 2026" },
  { tag: "AI + Strategy", title: "AI Is a Tool, Not a Strategy — Here's How I Think About It", excerpt: "Every team I talk to wants to 'use AI.' Almost none of them have a clear answer when I ask: what specific problem does it solve, and how will you know if it worked?", date: "May 2026" },
  { tag: "Security", title: "Don't Let the Perfect Security Program Be the Enemy of the Actual One", excerpt: "Small teams don't need enterprise security frameworks. They need coverage on the stuff that actually gets exploited — which is a much shorter list than most people think.", date: "May 2026" },
  { tag: "Building", title: "Why I Stopped Building Features and Started Building Constraints", excerpt: "Adding features is easy. The hard thing is figuring out which problems are actually worth solving — and having the discipline to say no to everything else.", date: "Apr 2026" },
  { tag: "Automation", title: "The Automation That Actually Saves Time (Versus the Kind That Creates a Second Job)", excerpt: "Not all automation is created equal. Some of it genuinely saves hours. Some of it creates a fragile system that breaks every Tuesday and takes longer to fix than doing it manually.", date: "Apr 2026" },
  { tag: "Building", title: "Lessons From 20+ Projects: What I'd Tell Myself on Day One", excerpt: "After building across security, AI, fitness, finance, and ops — the patterns that actually matter versus the things I thought mattered but didn't.", date: "Mar 2026" },
];

export function WorkPage() {
  return (
    <div className="px-10 py-12 flex flex-col gap-10">
      <div className="flex flex-col gap-4 max-w-xl">
        <p className="text-blue-500 text-xs font-semibold tracking-[0.2em] uppercase">Thoughts + Work</p>
        <h1 className="text-white text-5xl font-bold leading-tight">Thoughts, lessons, and things <span className="text-blue-400">I'm figuring out.</span></h1>
        <p className="text-white/60 text-base leading-relaxed">Not a newsletter. Not a personal brand play. Just things I've learned building systems, breaking things, and watching what actually works in the real world.</p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {posts.map(({ tag, title, excerpt, date }) => (
          <div key={title} className="rounded-xl border border-white/8 bg-[#0A0F1E] p-6 flex flex-col gap-4 hover:border-blue-500/30 transition-colors group cursor-pointer">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">{tag}</span>
              <span className="text-[10px] text-white/30">{date}</span>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-white text-sm font-semibold leading-snug">{title}</p>
              <p className="text-white/50 text-xs leading-relaxed">{excerpt}</p>
            </div>
            <div className="flex items-center gap-1.5 text-blue-400/60 group-hover:text-blue-400 transition-colors">
              <span className="text-xs">Read more</span>
              <ArrowRight size={12} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
