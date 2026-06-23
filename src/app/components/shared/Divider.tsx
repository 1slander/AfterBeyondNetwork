function HexBorder({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="32,2 58,17 58,47 32,62 6,47 6,17" stroke="url(#hg)" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <defs>
        <linearGradient id="hg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="0.5" stopColor="#EC4899" />
          <stop offset="1" stopColor="#F97316" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Divider() {
  return (
    <div className="w-full flex items-center gap-4 my-2">
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(236,72,153,0.3))" }} />
      <HexBorder size={20} />
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(236,72,153,0.3))" }} />
    </div>
  );
}
