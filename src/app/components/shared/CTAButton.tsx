import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  variant: "primary" | "secondary";
  children: ReactNode;
  icon?: ReactNode;
};

export function CTAButton({ href, variant, children, icon }: CTAButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative inline-flex items-center gap-3 px-8 py-4 font-semibold text-base tracking-widest uppercase transition-all duration-300"
      style={{
        fontFamily: "'Rajdhani', sans-serif",
        letterSpacing: "0.12em",
        color: isPrimary ? "#fff" : "var(--foreground)",
        ...(isPrimary
          ? { background: "linear-gradient(135deg, #7C3AED 0%, #EC4899 60%, #F97316 100%)" }
          : {
              background: "rgba(16,16,26,0.8)",
              border: "1px solid rgba(236,72,153,0.4)",
            }),
      }}
    >
      {isPrimary && (
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(135deg, #9B59E8 0%, #F472B6 60%, #FB923C 100%)" }}
        />
      )}
      <span className="relative z-10 flex items-center gap-3">
        {icon}
        {children}
      </span>
    </a>
  );
}
