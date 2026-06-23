import { useEffect, useState } from "react";
import { navTargets, siteLinks } from "@/app/content/site";
import type { Lang, Translation } from "@/app/content/translations";

type NavProps = {
  dark: boolean;
  onTheme: () => void;
  lang: Lang;
  onLang: () => void;
  tx: Translation;
};

function ThemeToggle({ dark, label, onToggle }: { dark: boolean; label: string; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={label}
      aria-pressed={dark}
      className="relative flex items-center justify-center w-9 h-9 rounded-none transition-all duration-200 hover:opacity-80"
      style={{ border: "1px solid rgba(236,72,153,0.25)", background: "rgba(16,16,26,0.6)" }}
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#F97316" }}>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#7C3AED" }}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

function LangToggle({ lang, label, onToggle }: { lang: Lang; label: string; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={label}
      className="flex items-center gap-1.5 px-3 h-9 text-xs font-bold tracking-widest transition-all duration-200 hover:opacity-80"
      style={{
        fontFamily: "'Space Mono', monospace",
        border: "1px solid rgba(236,72,153,0.25)",
        background: "rgba(16,16,26,0.6)",
        color: "var(--foreground)",
      }}
    >
      <span style={lang === "en" ? { backgroundImage: "linear-gradient(135deg,#7C3AED,#EC4899,#F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : { opacity: 0.4 }}>
        EN
      </span>
      <span className="opacity-30">/</span>
      <span style={lang === "es" ? { backgroundImage: "linear-gradient(135deg,#7C3AED,#EC4899,#F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : { opacity: 0.4 }}>
        ES
      </span>
    </button>
  );
}

export function Nav({ dark, onTheme, lang, onLang, tx }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const navItems = [tx.navCommunity, tx.navEssence, tx.navServices, tx.navStaff, tx.navTransparency];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? (dark ? "rgba(8,8,14,0.92)" : "rgba(245,243,255,0.92)") : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(236,72,153,0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href={siteLinks.home} className="select-none">
          <span
            className="text-[18px] font-bold"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              backgroundImage: "linear-gradient(135deg, #7C3AED 0%, #EC4899 55%, #F97316 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.05em",
            }}
          >
            AFTERBEYOND
          </span>
        </a>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 mr-2">
            {navItems.map((item, i) => (
              <a
                key={item}
                href={navTargets[i]}
                className="text-sm transition-colors duration-200 tracking-wider"
                style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.1em", color: "var(--muted-foreground)" }}
              >
                {item}
              </a>
            ))}
          </div>
          <LangToggle lang={lang} label={tx.langToggleLabel} onToggle={onLang} />
          <ThemeToggle dark={dark} label={tx.themeToggleLabel} onToggle={onTheme} />
        </div>
      </div>
      <div className="md:hidden max-w-6xl mx-auto px-6 pb-4 overflow-x-auto">
        <div className="flex items-center gap-5 min-w-max">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={navTargets[i]}
              className="text-xs transition-colors duration-200 tracking-wider whitespace-nowrap"
              style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.1em", color: "var(--muted-foreground)" }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
