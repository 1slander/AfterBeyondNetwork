import { Divider } from "@/app/components/shared/Divider";
import { GradientOrb } from "@/app/components/shared/GradientOrb";
import { GradientText } from "@/app/components/shared/GradientText";
import type { Translation } from "@/app/content/translations";

type AboutSectionProps = {
  tx: Translation;
};

export function AboutSection({ tx }: AboutSectionProps) {
  return (
    <section id="community" className="reveal-section relative py-32 px-6 overflow-hidden">
      <GradientOrb className="w-[400px] h-[400px] top-0 right-[-100px] opacity-50" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <Divider />
        <div className="mt-20 grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Space Mono', monospace", color: "var(--muted-foreground)" }}>
              {tx.aboutTag}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Rajdhani', sans-serif", color: "var(--foreground)" }}>
              {tx.aboutTitleA} <GradientText>{tx.aboutTitleB}</GradientText>
            </h2>
            <p className="leading-relaxed text-[1.05rem]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: "var(--muted-foreground)" }}>
              {tx.aboutBody}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["\u2B21", "\u25C8", "\u25C7", "\u2B21"].map((icon, i) => (
              <div
                key={i}
                className="interactive-panel group p-5 flex flex-col gap-3 transition-all duration-300 hover:translate-y-[-2px]"
                style={{ background: "var(--card)", border: "1px solid rgba(236,72,153,0.12)" }}
              >
                <span
                  className="text-2xl"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #7C3AED, #EC4899, #F97316)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {icon}
                </span>
                <h3 className="font-semibold text-sm tracking-wide" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.08em", color: "var(--foreground)" }}>
                  {tx.aboutCards[i].title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--muted-foreground)" }}>
                  {tx.aboutCards[i].desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
