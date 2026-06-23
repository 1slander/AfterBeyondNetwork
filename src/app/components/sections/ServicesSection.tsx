import { Divider } from "@/app/components/shared/Divider";
import { GradientOrb } from "@/app/components/shared/GradientOrb";
import { GradientText } from "@/app/components/shared/GradientText";
import type { Translation } from "@/app/content/translations";

type ServicesSectionProps = {
  tx: Translation;
};

const serviceColors = ["#7C3AED", "#EC4899", "#F97316"];

export function ServicesSection({ tx }: ServicesSectionProps) {
  return (
    <section id="services" className="reveal-section relative py-32 px-6 overflow-hidden">
      <GradientOrb className="w-[500px] h-[500px] bottom-0 left-[-100px]" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <Divider />
        <div className="mt-20 flex flex-col items-center text-center gap-6 mb-16">
          <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Space Mono', monospace", color: "var(--muted-foreground)" }}>
            {tx.servicesTag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Rajdhani', sans-serif", color: "var(--foreground)" }}>
            {tx.servicesTitleA} <GradientText>{tx.servicesTitleB}</GradientText>
          </h2>
          <p className="max-w-2xl text-[1.05rem] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: "var(--muted-foreground)" }}>
            {tx.servicesIntro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tx.services.map((service, i) => {
            const color = serviceColors[i % serviceColors.length];

            return (
              <div
                key={service}
                className="interactive-panel relative p-5 min-h-[112px] flex items-start gap-4 overflow-hidden transition-all duration-300 hover:translate-y-[-2px]"
                style={{ background: "var(--card)", border: `1px solid ${color}22` }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: color }} />
                <span
                  className="mt-1 text-xs font-bold tracking-widest"
                  style={{ fontFamily: "'Space Mono', monospace", color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--foreground)" }}>
                  {service}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
