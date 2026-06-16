import { Calendar, ArrowRight } from "lucide-react";

export function HeroText() {
  return (
    <div className="flex flex-col gap-6 max-w-[560px]">
      <p className="text-blue-500 text-xs font-semibold tracking-[0.2em] uppercase">
        I Build Systems That
      </p>

      <div className="flex flex-col gap-1">
        {["Save Time", "Reduce Headaches", "Solve Real Problems"].map((line) => (
          <h1 key={line} className="text-white text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
            {line}
          </h1>
        ))}
      </div>

      <div className="w-full h-px bg-blue-500/25" />

      <div className="flex flex-col gap-3 text-white/70 text-base leading-relaxed">
        <p>
          I help businesses stop wasting time on manual work,<br />
          messy processes, and scattered tools.
        </p>
        <p>
          From automation to custom applications,<br />
          I build systems that actually{" "}
          <span className="text-blue-400">make work easier</span>.
        </p>
      </div>

      <div className="flex items-center gap-4 mt-2">
        <button
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-500 transition-all"
          style={{ boxShadow: "0 0 20px rgba(59,130,246,0.45)" }}
        >
          <ArrowRight size={16} />
          See My Work
        </button>
        <button className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-lg bg-[#0A0F1E] border border-white/20 hover:border-blue-500/50 transition-all">
          <Calendar size={16} />
          Book a Call
        </button>
      </div>
    </div>
  );
}
