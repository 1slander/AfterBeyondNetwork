import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { footerLinks } from "@/app/content/site";
import type { Translation } from "@/app/content/translations";
import logoIcon from "@/imports/ICONO_SIN_FONDO_micro.png";

type FooterProps = {
  tx: Translation;
};

const footerLabelByKey = {
  discord: (tx: Translation) => "Discord",
  community: (tx: Translation) => tx.navCommunity,
  transparency: (tx: Translation) => tx.navTransparency,
} as const;

export function Footer({ tx }: FooterProps) {
  const currentYear = new Date().getFullYear().toString();
  const footerCopy = tx.footerCopy.replace("{year}", currentYear);

  return (
    <footer className="relative px-6 py-10" style={{ borderTop: "1px solid rgba(236,72,153,0.1)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 opacity-70">
          <ImageWithFallback src={logoIcon} alt="" aria-hidden="true" className="w-7 h-7 object-contain" />
          <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--muted-foreground)" }}>
            {footerCopy}
          </span>
        </div>
        <div className="flex items-center gap-5">
          {footerLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ fontFamily: "'Space Mono', monospace", color: "var(--muted-foreground)" }}
            >
              {footerLabelByKey[key](tx)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
