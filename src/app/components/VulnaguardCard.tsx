import { LineChart, Line } from "recharts";

const riskData = [
  { v: 60 }, { v: 72 }, { v: 65 }, { v: 80 }, { v: 75 }, { v: 88 }, { v: 78 },
];

const navItems = ["Dashboard", "Risk", "Findings", "Assets", "Compliance", "Reports", "Settings"];

const metrics = [
  { label: "Overall Risk", value: "High", delta: "", valueColor: "text-red-400" },
  { label: "Open Findings", value: "128", delta: "+12", deltaColor: "text-red-400" },
  { label: "Critical", value: "28", delta: "+5", deltaColor: "text-red-400" },
  { label: "Compliance Score", value: "78%", delta: "+6%", deltaColor: "text-green-400" },
];

const riskAreas = ["Access Management", "Asset Management", "Vulnerability Management"];

export function VulnaguardCard() {
  return (
    <div
      className="flex rounded-xl overflow-hidden border border-blue-500/30 bg-[#080D1A]"
      style={{ width: 420, height: 280 }}
    >
      <div className="flex flex-col gap-3 px-3 py-4 bg-[#060A14] border-r border-white/5 min-w-[90px]">
        <p className="text-blue-400 text-[9px] font-bold tracking-widest uppercase mb-1">Vulnaguard</p>
        {navItems.map((item) => (
          <p
            key={item}
            className={`text-[10px] cursor-pointer px-2 py-1 rounded ${item === "Dashboard" ? "text-blue-400 bg-blue-500/10" : "text-white/40 hover:text-white/70"}`}
          >
            {item}
          </p>
        ))}
      </div>

      <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
        <p className="text-white text-xs font-semibold">Executive Dashboard</p>

        <div className="grid grid-cols-2 gap-2">
          {metrics.map(({ label, value, delta, valueColor, deltaColor }) => (
            <div key={label} className="bg-[#0D1424] rounded-lg p-2 border border-white/5">
              <p className="text-white/40 text-[9px] mb-1">{label}</p>
              <div className="flex items-baseline gap-1">
                <span className={`text-sm font-bold ${valueColor ?? "text-white"}`}>{value}</span>
                {delta && <span className={`text-[9px] ${deltaColor}`}>{delta}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0D1424] rounded-lg p-2 border border-white/5">
          <p className="text-white/40 text-[9px] mb-1">Risk Over Time</p>
          <div style={{ height: 40 }}>
            <LineChart width={270} height={40} data={riskData}>
              <Line type="monotone" dataKey="v" stroke="#f97316" strokeWidth={1.5} dot={false} />
            </LineChart>
          </div>
        </div>

        <div className="bg-[#0D1424] rounded-lg p-2 border border-white/5">
          <p className="text-white/40 text-[9px] mb-2">Top Risk Areas</p>
          <div className="flex flex-col gap-1">
            {riskAreas.map((area) => (
              <div key={area} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-red-400" />
                <p className="text-white/60 text-[9px]">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
