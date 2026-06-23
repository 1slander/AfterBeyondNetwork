import { Divider } from "@/app/components/shared/Divider";
import { GradientOrb } from "@/app/components/shared/GradientOrb";
import { GradientText } from "@/app/components/shared/GradientText";
import type { Translation } from "@/app/content/translations";

type ObjectivesSectionProps = {
  tx: Translation;
};

export function ObjectivesSection({ tx }: ObjectivesSectionProps) {
  return (
    <section className="reveal-section relative py-32 px-6 overflow-hidden">
      <GradientOrb className="w-[420px] h-[420px] top-0 right-[-120px] opacity-50" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <Divider />
        <div className="mt-20 grid lg:grid-cols-[1fr_1.25fr] gap-12">
          <div className="flex flex-col gap-6 lg:order-1">
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Space Mono', monospace", color: "var(--muted-foreground)" }}>
              {tx.objectivesTag}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Rajdhani', sans-serif", color: "var(--foreground)" }}>
              {tx.objectivesTitleA} <GradientText>{tx.objectivesTitleB}</GradientText>
            </h2>
            <p className="leading-relaxed text-[1.05rem]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: "var(--muted-foreground)" }}>
              {tx.objectivesBody}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 lg:order-2">
            {tx.objectives.map((objective) => (
              <div
                key={objective}
                className="interactive-panel px-5 py-4"
                style={{ background: "var(--card)", border: "1px solid rgba(236,72,153,0.14)" }}
              >
                <span className="text-sm font-semibold tracking-wide" style={{ fontFamily: "'Rajdhani', sans-serif", color: "var(--foreground)" }}>
                  {objective}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
