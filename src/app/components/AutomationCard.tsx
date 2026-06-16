import { CheckCircle } from "lucide-react";

const steps = ["New Request", "Extract Data", "Review & Approve", "Update System", "Notify Team"];

export function AutomationCard() {
  return (
    <div
      className="border border-blue-500/25 bg-[#080D1A] flex flex-col gap-2 p-4 rounded-2xl"
      style={{ width: 160, height: 272 }}
    >
      <p className="text-white text-xs font-bold mb-1">Automation Flow</p>

      <div className="flex flex-col items-center gap-0 flex-1">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center w-full">
            <div className="w-full bg-[#0D1424] border border-white/10 rounded-md px-2 py-1.5 text-center">
              <span className="text-[9px] text-white/70">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="w-px h-3 bg-blue-500/30" />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-1">
        <CheckCircle size={16} className="text-green-400" />
      </div>
    </div>
  );
}
