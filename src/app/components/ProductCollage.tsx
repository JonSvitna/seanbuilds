import { VulnaguardCard } from "./VulnaguardCard";
import { AIOSCard } from "./AIOSCard";
import { SvitnaCard } from "./SvitnaCard";
import { TradingJournalCard } from "./TradingJournalCard";
import { AutomationCard } from "./AutomationCard";
import { StatsCard } from "./StatsCard";

export function ProductCollage() {
  return (
    <div className="relative w-full collage-container flex justify-center items-center" style={{ height: 660 }}>
      <div className="relative" style={{ width: 800, height: 600 }}>
        {/* Blue radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 800,
            height: 600,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle at center, rgba(45,126,255,0.12) 0%, rgba(45,126,255,0.02) 40%, transparent 60%)",
            filter: "blur(20px)",
            zIndex: 0,
          }}
        />

        {/* Vulnaguard — anchor, center */}
        <div className="absolute transition-transform duration-500 hover:scale-[1.02]" style={{ top: 144, left: 176, zIndex: 10 }}>
          <VulnaguardCard />
        </div>

        {/* Svitna — top-left */}
        <div className="absolute transition-transform duration-500 hover:scale-[1.02] hover:z-[100]" style={{ top: 16, left: 0, zIndex: 20 }}>
          <SvitnaCard />
        </div>

        {/* Automation — top-right */}
        <div className="absolute transition-transform duration-500 hover:scale-[1.02] hover:z-[100]" style={{ top: 32, left: 640, zIndex: 30 }}>
          <AutomationCard />
        </div>

        {/* Stats — mid-right */}
        <div className="absolute transition-transform duration-500 hover:scale-[1.02] hover:z-[100]" style={{ top: 336, left: 640, zIndex: 40 }}>
          <StatsCard />
        </div>

        {/* Trading Journal — bottom-center */}
        <div className="absolute transition-transform duration-500 hover:scale-[1.02] hover:z-[100]" style={{ top: 448, left: 296, zIndex: 50 }}>
          <TradingJournalCard />
        </div>

        {/* AIOS — bottom-left */}
        <div className="absolute transition-transform duration-500 hover:scale-[1.02] hover:z-[100]" style={{ top: 352, left: 32, zIndex: 60 }}>
          <AIOSCard />
        </div>
      </div>
    </div>
  );
}
