import { LineChart, Line } from "recharts";

const chartData = [
  { v: 30 }, { v: 45 }, { v: 35 }, { v: 55 }, { v: 48 }, { v: 62 }, { v: 58 }, { v: 70 },
];

export function TradingJournalCard() {
  return (
    <div
      className="rounded-2xl border border-blue-500/25 bg-[#080D1A] p-4 flex flex-col gap-3"
      style={{ width: 240, height: 120 }}
    >
      <div>
        <p className="text-white text-xs font-bold">Trading Journal</p>
        <p className="text-white/45 text-[10px]">Performance Overview</p>
      </div>

      <div className="flex gap-4">
        <div>
          <p className="text-[9px] text-white/40">Net P&amp;L</p>
          <p className="text-green-400 text-xs font-bold">+$4,256.21</p>
        </div>
        <div>
          <p className="text-[9px] text-white/40">Win Rate</p>
          <p className="text-white text-xs font-bold">62%</p>
        </div>
        <div>
          <p className="text-[9px] text-white/40">Total Trades</p>
          <p className="text-white text-xs font-bold">86</p>
        </div>
      </div>

      <div style={{ height: 28 }}>
        <LineChart width={210} height={28} data={chartData}>
          <Line type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={1.5} dot={false} />
        </LineChart>
      </div>
    </div>
  );
}
