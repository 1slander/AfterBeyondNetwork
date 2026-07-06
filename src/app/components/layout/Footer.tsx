import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { footerLinks, siteLinks } from "@/app/content/site";
import type { Translation } from "@/app/content/translations";
import logoIcon from "@/imports/ICONO_SIN_FONDO_micro.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote";
import XIcon from "@mui/icons-material/X";

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
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="flex items-center gap-5">
            {footerLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="text-xs tracking-widest uppercase transition-colors duration-200 hover:text-pink-500"
                style={{ fontFamily: "'Space Mono', monospace", color: "var(--muted-foreground)" }}
              >
                {footerLabelByKey[key](tx)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2" aria-label="Redes sociales">
            {[
              { label: "Instagram", href: siteLinks.instagram, icon: InstagramIcon },
              { label: "X", href: siteLinks.x, icon: XIcon },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="grid h-9 w-9 place-items-center rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:text-pink-500"
                style={{ color: "var(--muted-foreground)", border: "1px solid rgba(236,72,153,0.18)" }}
              >
                <Icon sx={{ fontSize: 18 }} />
              </a>
            ))}
            <span
              aria-label="TikTok, próximamente"
              title="TikTok — próximamente"
              className="grid h-9 w-9 cursor-not-allowed place-items-center rounded-full opacity-40"
              style={{ color: "var(--muted-foreground)", border: "1px solid rgba(236,72,153,0.18)" }}
            >
              <TikTokIcon sx={{ fontSize: 18 }} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
