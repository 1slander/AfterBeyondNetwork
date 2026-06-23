import { GradientText } from "@/app/components/shared/GradientText";
import type { Translation } from "@/app/content/translations";

type FoundersSectionProps = {
  tx: Translation;
};

const doubleStruckChars: Record<string, string> = {
  A: "\u{1D538}",
  B: "\u{1D539}",
  C: "\u2102",
  D: "\u{1D53B}",
  E: "\u{1D53C}",
  F: "\u{1D53D}",
  G: "\u{1D53E}",
  H: "\u210D",
  I: "\u{1D540}",
  J: "\u{1D541}",
  K: "\u{1D542}",
  L: "\u{1D543}",
  M: "\u{1D544}",
  N: "\u2115",
  O: "\u{1D546}",
  P: "\u2119",
  Q: "\u211A",
  R: "\u211D",
  S: "\u{1D54A}",
  T: "\u{1D54B}",
  U: "\u{1D54C}",
  V: "\u{1D54D}",
  W: "\u{1D54E}",
  X: "\u{1D54F}",
  Y: "\u{1D550}",
  Z: "\u2124",
  a: "\u{1D552}",
  b: "\u{1D553}",
  c: "\u{1D554}",
  d: "\u{1D555}",
  e: "\u{1D556}",
  f: "\u{1D557}",
  g: "\u{1D558}",
  h: "\u{1D559}",
  i: "\u{1D55A}",
  j: "\u{1D55B}",
  k: "\u{1D55C}",
  l: "\u{1D55D}",
  m: "\u{1D55E}",
  n: "\u{1D55F}",
  o: "\u{1D560}",
  p: "\u{1D561}",
  q: "\u{1D562}",
  r: "\u{1D563}",
  s: "\u{1D564}",
  t: "\u{1D565}",
  u: "\u{1D566}",
  v: "\u{1D567}",
  w: "\u{1D568}",
  x: "\u{1D569}",
  y: "\u{1D56A}",
  z: "\u{1D56B}",
  "0": "\u{1D7D8}",
  "1": "\u{1D7D9}",
  "2": "\u{1D7DA}",
  "3": "\u{1D7DB}",
  "4": "\u{1D7DC}",
  "5": "\u{1D7DD}",
  "6": "\u{1D7DE}",
  "7": "\u{1D7DF}",
  "8": "\u{1D7E0}",
  "9": "\u{1D7E1}",
};

function toDoubleStruck(value: string) {
  return Array.from(value)
    .map((char) => doubleStruckChars[char] ?? char)
    .join("");
}

export function FoundersSection({ tx }: FoundersSectionProps) {
  return (
    <section className="reveal-section relative py-28 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
        <div className="flex flex-col gap-5 lg:order-2">
          <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Space Mono', monospace", color: "var(--muted-foreground)" }}>
            {tx.foundersTag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Rajdhani', sans-serif", color: "var(--foreground)" }}>
            {tx.foundersTitleA} <GradientText>{tx.foundersTitleB}</GradientText>
          </h2>
          <p className="leading-relaxed text-[1.05rem]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: "var(--muted-foreground)" }}>
            {tx.foundersBody}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:order-1">
          {tx.founders.map((founder) => (
            <span
              key={founder}
              aria-label={founder}
              className="founder-chip interactive-panel px-4 py-2 text-sm font-semibold tracking-wide"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                background: "var(--card)",
                color: "var(--foreground)",
              }}
            >
              <span aria-hidden="true">{toDoubleStruck(founder)}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
