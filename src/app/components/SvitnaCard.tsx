export function SvitnaCard() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const filled = [true, true, true, true, true, false, false];

  return (
    <div
      className="rounded-2xl border border-blue-500/25 bg-[#080D1A] p-4 flex flex-col gap-3"
      style={{ width: 190, height: 150 }}
    >
      <div>
        <p className="text-white text-xs font-bold">Svitna</p>
        <p className="text-white/45 text-[10px]">Your Plan. Your Progress.</p>
      </div>

      <div className="flex gap-2">
        {days.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className={`w-4 h-4 rounded-full border ${filled[i] ? "bg-blue-500 border-blue-500" : "bg-transparent border-white/20"}`}
            />
            <span className="text-[8px] text-white/30">{d}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-white/50">Progress</span>
          <span className="text-[10px] text-blue-400 font-semibold">78%</span>
        </div>
        <div className="w-full h-1.5 bg-white/10 rounded-full">
          <div className="h-full rounded-full bg-blue-500" style={{ width: "78%" }} />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <span className="text-[10px] text-white/40">Workouts:</span>
        <span className="text-[10px] text-white font-semibold">12</span>
      </div>
    </div>
  );
}
