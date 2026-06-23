import { CTAButton } from "@/app/components/shared/CTAButton";
import { Divider } from "@/app/components/shared/Divider";
import { GradientOrb } from "@/app/components/shared/GradientOrb";
import { GradientText } from "@/app/components/shared/GradientText";
import { DiscordIcon } from "@/app/components/shared/icons";
import { siteLinks } from "@/app/content/site";
import type { Translation } from "@/app/content/translations";

type TransparencySectionProps = {
  tx: Translation;
};

export function TransparencySection({ tx }: TransparencySectionProps) {
  return (
    <section id="transparency" className="reveal-section relative py-36 px-6 overflow-hidden">
      <GradientOrb className="w-[760px] h-[760px] top-[-260px] left-1/2 -translate-x-1/2 opacity-50" />
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <Divider />
        <div className="mt-8 flex flex-col items-center gap-5">
          <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Space Mono', monospace", color: "var(--muted-foreground)" }}>
            {tx.transparencyTag}
          </span>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "'Rajdhani', sans-serif", color: "var(--foreground)" }}>
            {tx.transparencyTitleA} <GradientText>{tx.transparencyTitleB}</GradientText>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: "var(--muted-foreground)" }}>
            {tx.transparencyBody1}
          </p>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: "var(--muted-foreground)" }}>
            {tx.transparencyBody2}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 pt-8">
          <h3 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Rajdhani', sans-serif", color: "var(--foreground)" }}>
            {tx.finalTitleA} <GradientText>{tx.finalTitleB}</GradientText>
          </h3>
          <p className="text-base leading-relaxed max-w-xl" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: "var(--muted-foreground)" }}>
            {tx.finalDesc}
          </p>
          <CTAButton href={siteLinks.discord} variant="primary" icon={<DiscordIcon />}>
            {tx.heroDiscord}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
