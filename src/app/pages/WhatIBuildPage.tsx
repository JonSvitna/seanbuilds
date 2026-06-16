import { useState } from "react";
import { Clock, Eye, Wrench, Brain, ChevronDown, ChevronUp } from "lucide-react";

const services = [
  { icon: Clock, title: "Save Time", body: "Automate the repetitive stuff — data entry, status updates, report generation. If a human is doing the same thing twice a week, a system should be doing it instead." },
  { icon: Eye, title: "Improve Visibility", body: "Build dashboards and reporting layers that turn scattered data into something your team can actually act on. No more spreadsheet archaeology." },
  { icon: Wrench, title: "Build Better Tools", body: "Off-the-shelf software fits generic use cases. I build tools that fit how your team actually works — the weird edge cases included." },
  { icon: Brain, title: "Make AI Practical", body: "Not hype. Not demos. Actual AI integrations that slot into real workflows — document processing, triage, summarization, search. The stuff that saves hours." },
];

const faqs = [
  { q: "What types of projects do you take on?", a: "Automation systems, internal tools, custom web apps, security dashboards, AI integrations, and anything that sits at the intersection of business process and software." },
  { q: "How is this different from hiring a developer?", a: "Most developers build what you spec. I help you figure out what to build, then build it. I've been in tech for 15+ years — I'll push back on bad ideas and tell you when a simpler solution exists." },
  { q: "Do you work with non-technical teams?", a: "Yes. In fact that's most of my clients. I translate business problems into working systems without requiring you to know what an API is." },
  { q: "How do engagements work?", a: "Typically a scoping call first, then a fixed-scope proposal. I prefer focused, outcome-driven engagements over open-ended retainers — you always know what you're getting." },
  { q: "What does a project actually cost?", a: "Depends entirely on scope. Simple automation workflows start in the low thousands. Full custom applications range higher. Book a call and we'll figure out what makes sense." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-5 cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between gap-4">
        <p className="text-white text-sm font-medium">{q}</p>
        {open ? <ChevronUp size={16} className="text-blue-400 shrink-0" /> : <ChevronDown size={16} className="text-white/40 shrink-0" />}
      </div>
      {open && <p className="text-white/60 text-sm leading-relaxed mt-3">{a}</p>}
    </div>
  );
}

export function WhatIBuildPage() {
  return (
    <div className="flex flex-col">
      <div className="flex items-start px-10 pt-12 pb-16 gap-16">
        <div className="w-1/2 flex flex-col gap-6">
          <p className="text-blue-500 text-xs font-semibold tracking-[0.2em] uppercase">What I Build</p>
          <h1 className="text-white text-5xl font-bold leading-tight">I build what creates <span className="text-blue-400">your time</span> the most.</h1>
          <p className="text-white/65 text-base leading-relaxed">Time is the only resource that doesn't refill. Every hour your team spends on manual work, chasing down data, or fighting clunky tools is an hour not spent on what actually moves the business forward.</p>
          <p className="text-white/65 text-base leading-relaxed">I build the systems that give that time back.</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-blue-400 text-sm font-medium">Find the gaps.</span>
            <span className="text-white/20">·</span>
            <span className="text-blue-400 text-sm font-medium">Fix the process.</span>
            <span className="text-white/20">·</span>
            <span className="text-blue-400 text-sm font-medium">Build the thing.</span>
          </div>
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-4">
          {services.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl border border-white/8 bg-[#0A0F1E] p-5 flex flex-col gap-3 hover:border-blue-500/30 transition-colors">
              <Icon size={20} className="text-blue-500" strokeWidth={1.5} />
              <p className="text-white text-sm font-semibold">{title}</p>
              <p className="text-white/55 text-xs leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/8 px-10 py-16">
        <div className="flex gap-16">
          <div className="w-1/3 shrink-0">
            <h2 className="text-white text-3xl font-bold leading-tight">Common questions.<br /><span className="text-blue-400">Straight answers.</span></h2>
            <p className="text-white/50 text-sm leading-relaxed mt-4">No fluff. If something isn't covered here, book a call and we'll talk through it directly.</p>
          </div>
          <div className="flex-1 flex flex-col">
            {faqs.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
