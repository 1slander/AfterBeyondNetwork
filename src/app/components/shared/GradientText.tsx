import type { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
};

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={className}
      style={{
        backgroundImage: "linear-gradient(160deg, #7C3AED 0%, #EC4899 45%, #F97316 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}
