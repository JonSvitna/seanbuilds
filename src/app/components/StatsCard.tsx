import { Code2, Clock, Shield, Zap } from "lucide-react";

const stats = [
  { icon: Code2, value: "20+", label: "Projects Built" },
  { icon: Clock, value: "15+", label: "Years in Tech" },
  { icon: Shield, value: "Security + AI", label: "Background" },
  { icon: Zap, value: "Thousands", label: "of Hours Building" },
];

export function StatsCard() {
  return (
    <div
      className="rounded-2xl bg-[#080D1A] p-5 flex flex-col justify-between"
      style={{
        width: 155,
        height: 240,
        border: "1px solid rgba(59,130,246,0.6)",
        boxShadow: "0 0 24px rgba(59,130,246,0.25), inset 0 0 24px rgba(59,130,246,0.04)",
      }}
    >
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={label} className="flex items-start gap-3">
          <div className="mt-0.5">
            <Icon size={14} className="text-blue-400" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-white text-xs font-bold leading-tight">{value}</p>
            <p className="text-white/45 text-[10px] leading-tight">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
