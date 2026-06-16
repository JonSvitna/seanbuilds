import { Clock, Eye, Wrench, Brain } from "lucide-react";

const features = [
  { icon: Clock, title: "Save Time", body: "Automate repetitive work and eliminate busywork." },
  { icon: Eye, title: "Improve Visibility", body: "Turn scattered data into clear dashboards and reports." },
  { icon: Wrench, title: "Build Better Tools", body: "Custom solutions that fit how you actually work." },
  { icon: Brain, title: "Make AI Practical", body: "Use the right tools in the right places for real results." },
];

export function FeatureStrip() {
  return (
    <div className="w-full mt-12">
      <div className="w-full h-px bg-blue-500/20 mb-10" />
      <div className="grid grid-cols-4 gap-8 px-10 pb-12">
        {features.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex flex-col gap-3">
            <Icon size={22} className="text-blue-500" strokeWidth={1.5} />
            <p className="text-white text-sm font-semibold">{title}</p>
            <p className="text-white/55 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
