import type { CSSProperties } from "react";

type GradientOrbProps = {
  className?: string;
  style?: CSSProperties;
};

export function GradientOrb({ className, style }: GradientOrbProps) {
  return (
    <div
      className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
      style={{
        background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(236,72,153,0.2) 50%, transparent 70%)",
        ...style,
      }}
    />
  );
}
