import { Divider } from "@/app/components/shared/Divider";
import { GradientOrb } from "@/app/components/shared/GradientOrb";
import { GradientText } from "@/app/components/shared/GradientText";
import type { Translation } from "@/app/content/translations";

type EssenceSectionProps = {
  tx: Translation;
};

export function EssenceSection({ tx }: EssenceSectionProps) {
  return (
    <section id="essence" className="reveal-section relative py-32 px-6 overflow-hidden">
      <GradientOrb className="w-[460px] h-[460px] top-[-80px] left-[-120px] opacity-60" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <Divider />
        <div className="mt-20 grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <div
            className="interactive-panel p-8 min-h-[280px] flex flex-col justify-between md:order-1"
            style={{ background: "var(--card)", border: "1px solid rgba(236,72,153,0.16)" }}
          >
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Space Mono', monospace", color: "var(--muted-foreground)" }}>
              {tx.essenceTag}
            </span>
            <span
              className="text-7xl font-bold"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                backgroundImage: "linear-gradient(135deg, #7C3AED, #EC4899, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              2019
            </span>
          </div>

          <div className="flex flex-col gap-6 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Rajdhani', sans-serif", color: "var(--foreground)" }}>
              {tx.essenceTitleA} <GradientText>{tx.essenceTitleB}</GradientText>
            </h2>
            <p className="leading-relaxed text-[1.08rem]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: "var(--muted-foreground)" }}>
              {tx.essenceBody}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
