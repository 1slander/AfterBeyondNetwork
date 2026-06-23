export const siteLinks = {
  home: "#top",
  discord: "https://discord.gg/tnBsKJgPhV",
  communitySection: "#community",
  essenceSection: "#essence",
  servicesSection: "#services",
  staffSection: "#staff",
  transparencySection: "#transparency",
} as const;

export const navTargets = [
  siteLinks.communitySection,
  siteLinks.essenceSection,
  siteLinks.servicesSection,
  siteLinks.staffSection,
  siteLinks.transparencySection,
] as const;

export const heroStats = ["2019", "24/7", "0"] as const;

export const footerLinks = [
  { key: "discord", href: siteLinks.discord },
  { key: "community", href: siteLinks.communitySection },
  { key: "transparency", href: siteLinks.transparencySection },
] as const;
