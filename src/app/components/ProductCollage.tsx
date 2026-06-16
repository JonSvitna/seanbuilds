import { VulnaguardCard } from "./VulnaguardCard";
import { AIOSCard } from "./AIOSCard";
import { SvitnaCard } from "./SvitnaCard";
import { TradingJournalCard } from "./TradingJournalCard";
import { AutomationCard } from "./AutomationCard";
import { StatsCard } from "./StatsCard";

export function ProductCollage() {
  return (
    <div className="relative w-full collage-container flex justify-center items-center" style={{ height: 536 }}>
      <div className="relative" style={{ width: 640, height: 520 }}>
        <div
          className="absolute pointer-events-none"
          style={{
            width: 640,
            height: 520,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse at center, rgba(45,126,255,0.18) 0%, transparent 65%)",
            zIndex: 0,
          }}
        />

        {/* Vulnaguard — anchor, center */}
        <div className="absolute" style={{ top: 80, left: 80, zIndex: 10 }}>
          <VulnaguardCard />
        </div>

        {/* Svitna — top-left */}
        <div className="absolute" style={{ top: 0, left: 0, zIndex: 20 }}>
          <SvitnaCard />
        </div>

        {/* Automation — top-right */}
        <div className="absolute" style={{ top: 0, left: 464, zIndex: 30 }}>
          <AutomationCard />
        </div>

        {/* Stats — below Automation */}
        <div className="absolute" style={{ top: 280, left: 472, zIndex: 40 }}>
          <StatsCard />
        </div>

        {/* Trading Journal — bottom-center */}
        <div className="absolute" style={{ top: 384, left: 192, zIndex: 50 }}>
          <TradingJournalCard />
        </div>

        {/* AIOS — bottom-left */}
        <div className="absolute" style={{ top: 320, left: 0, zIndex: 60 }}>
          <AIOSCard />
        </div>
      </div>
    </div>
  );
}
