import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { CTAButton } from "@/app/components/shared/CTAButton";
import { GradientOrb } from "@/app/components/shared/GradientOrb";
import { GradientText } from "@/app/components/shared/GradientText";
import { DiscordIcon, MinecraftIcon } from "@/app/components/shared/icons";
import { heroStats, siteLinks } from "@/app/content/site";
import type { Translation } from "@/app/content/translations";
import logoFull from "@/imports/LOGO_SIN_FONDO.png";

type HeroSectionProps = {
  tx: Translation;
};

export function HeroSection({ tx }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20">
      <GradientOrb className="w-[700px] h-[700px] top-[-200px] left-[-150px]" />
      <GradientOrb
        className="w-[500px] h-[500px] bottom-[-100px] right-[-100px]"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(236,72,153,0.15) 50%, transparent 70%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)",
          backgroundSize: "100% 6px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-8">
        <ImageWithFallback
          src={logoFull}
          alt="After Beyond Networks full logo"
          className="w-full max-w-[420px] object-contain drop-shadow-2xl"
        />

        <h1 className="text-xl md:text-2xl leading-relaxed max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: "var(--muted-foreground)" }}>
          {tx.heroTagline1}{" "}
          <GradientText>{tx.heroTaglineHighlight}</GradientText>
          {tx.heroTagline2}
        </h1>

        <div className="flex flex-col items-center gap-2">
          {tx.heroSlogans.map((slogan) => (
            <span key={slogan} className="text-sm md:text-base tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--muted-foreground)" }}>
              {slogan}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <CTAButton href={siteLinks.discord} variant="primary" icon={<DiscordIcon />}>
            {tx.heroDiscord}
          </CTAButton>
          <CTAButton href={siteLinks.communitySection} variant="secondary" icon={<MinecraftIcon />}>
            {tx.heroExplore}
          </CTAButton>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-6 text-center w-full max-w-[520px]">
          {heroStats.map((value, i) => (
            <div key={i} className="flex min-w-0 flex-col items-center gap-1 px-2">
              <span
                className="text-2xl font-bold"
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  backgroundImage: "linear-gradient(135deg, #7C3AED, #EC4899, #F97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </span>
              <span className="max-w-[8rem] text-[10px] sm:text-xs leading-tight tracking-[0.12em] uppercase whitespace-normal break-words" style={{ fontFamily: "'Space Mono', monospace", color: "var(--muted-foreground)" }}>
                {tx.heroStats[i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest" style={{ fontFamily: "'Space Mono', monospace", color: "var(--muted-foreground)" }}>
          {tx.heroScroll}
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#EC4899] to-transparent" />
      </div>
    </section>
  );
}
