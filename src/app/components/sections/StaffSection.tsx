import { Divider } from "@/app/components/shared/Divider";
import { GradientOrb } from "@/app/components/shared/GradientOrb";
import { GradientText } from "@/app/components/shared/GradientText";
import type { Translation } from "@/app/content/translations";

type StaffSectionProps = {
  tx: Translation;
};

export function StaffSection({ tx }: StaffSectionProps) {
  return (
    <section id="staff" className="reveal-section relative py-32 px-6 overflow-hidden">
      <GradientOrb className="w-[520px] h-[520px] bottom-[-160px] right-[-160px] opacity-60" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <Divider />
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6 md:order-1">
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Space Mono', monospace", color: "var(--muted-foreground)" }}>
              {tx.staffTag}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Rajdhani', sans-serif", color: "var(--foreground)" }}>
              {tx.staffTitleA} <GradientText>{tx.staffTitleB}</GradientText>
            </h2>
          </div>
          <div className="flex flex-col gap-5 md:order-2">
            {[tx.staffBody1, tx.staffBody2].map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-[1.05rem]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: "var(--muted-foreground)" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
