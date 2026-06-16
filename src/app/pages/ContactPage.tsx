import { Calendar, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="px-10 py-12 flex flex-col gap-12">
      <div className="flex flex-col gap-4 max-w-lg">
        <p className="text-blue-500 text-xs font-semibold tracking-[0.2em] uppercase">Contact</p>
        <h1 className="text-white text-5xl font-bold leading-tight">Let's build<br /><span className="text-blue-400">something real.</span></h1>
        <p className="text-white/60 text-base leading-relaxed">If you have a problem worth solving, I want to hear about it. No sales pitch. No discovery call theater. Just a direct conversation about what you're trying to build.</p>
      </div>

      <div className="flex gap-12 items-start">
        <div className="flex-1">
          {sent ? (
            <div className="rounded-xl border border-blue-500/30 bg-[#0A0F1E] p-8 flex flex-col gap-3 items-start" style={{ boxShadow: "0 0 24px rgba(59,130,246,0.1)" }}>
              <div className="w-10 h-10 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
                <ArrowRight size={16} className="text-blue-400" />
              </div>
              <p className="text-white text-base font-semibold">Got it — I'll be in touch.</p>
              <p className="text-white/55 text-sm leading-relaxed">I read every message personally. You'll hear back within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-white/50 text-xs">Name</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="Your name" />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-white/50 text-xs">Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs">What are you trying to build or fix?</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-blue-500/50 transition-colors resize-none" placeholder="Tell me about the problem..." />
              </div>
              <button type="submit" className="flex items-center gap-2 w-fit px-6 py-3 text-sm font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors" style={{ boxShadow: "0 0 20px rgba(59,130,246,0.35)" }}>
                <ArrowRight size={15} />
                Send it
              </button>
            </form>
          )}
        </div>

        <div className="w-72 flex flex-col gap-4">
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl border border-white/8 bg-[#0A0F1E] p-5 hover:border-blue-500/30 transition-colors no-underline group">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Calendar size={16} className="text-blue-400" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Book a call</p>
              <p className="text-white/45 text-xs mt-0.5">30 min. No prep required.</p>
            </div>
            <ArrowRight size={14} className="text-white/25 ml-auto group-hover:text-blue-400 transition-colors" />
          </a>
          <a href="mailto:sean@seanbuilds.com" className="flex items-center gap-4 rounded-xl border border-white/8 bg-[#0A0F1E] p-5 hover:border-blue-500/30 transition-colors no-underline group">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Mail size={16} className="text-blue-400" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Email directly</p>
              <p className="text-white/45 text-xs mt-0.5">sean@seanbuilds.com</p>
            </div>
            <ArrowRight size={14} className="text-white/25 ml-auto group-hover:text-blue-400 transition-colors" />
          </a>
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
            <p className="text-white/70 text-xs leading-relaxed">I typically respond within one business day. If it's urgent, the calendar link is the fastest path.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
