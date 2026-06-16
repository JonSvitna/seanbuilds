import { Mic } from "lucide-react";

export function AIOSCard() {
  const bars = [2, 4, 6, 8, 5, 9, 7, 4, 6, 3, 8, 5, 7, 4, 6];

  return (
    <div
      className="rounded-2xl border border-blue-500/30 bg-[#080D1A] p-4 flex flex-col gap-3"
      style={{ width: 160, height: 170 }}
    >
      <p className="text-white text-xs font-bold">AI OS</p>
      <p className="text-white/50 text-[10px]">How can I help you today?</p>

      <div className="flex justify-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: "conic-gradient(from 180deg, #7c3aed, #3b82f6, #06b6d4, #7c3aed)",
            padding: 2,
          }}
        >
          <div className="w-full h-full rounded-full bg-[#080D1A] flex items-center justify-center">
            <Mic size={14} className="text-blue-400" />
          </div>
        </div>
      </div>

      <div className="flex items-end justify-center gap-[2px] h-6">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-[3px] rounded-full bg-blue-500"
            style={{ height: `${h * 2.5}px`, opacity: 0.7 + (i % 3) * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}
