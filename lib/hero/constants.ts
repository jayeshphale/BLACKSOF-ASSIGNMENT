export const HERO_COLORS = {
  brand: "#E54D2E",
  brandDark: "#CA3604",
  headline: "#111827",
  nav: "#4B5563",
  body: "#6B7280",
  cardTitle: "#E54D2E",
  background: "#F9FAFB",
} as const;

export const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Operational Excellence", href: "#operational-excellence" },
  { label: "Solutions", href: "#solutions", hasChevron: true },
  { label: "A Day in a Building", href: "#day-in-building" },
] as const;

export const HERO_COPY = {
  eyebrow: "AFDD POWERED BY SMART ALERTS",
  headlineLead: "Making alerts ",
  headlineBold1: "relevant, personalized,",
  headlineJoin: " and ",
  headlineBold2: "directly actionable",
} as const;

export const SMART_ALERT_CARDS = [
  {
    id: "ahu-overcooled",
    title: "4F NW CORRIDOR AHU AREA OVERCOOLED",
    description:
      "4F NW Corridor area is overcooled where the area temperature is below the setpoint while the valve remains more than 10% open.",
    position:
      "left-[-1%] top-[36%] z-30 w-[min(100%,280px)] md:left-[-3%] md:w-[300px] lg:left-[-5%] lg:top-[38%] lg:w-[328px]",
    floatDelay: 0,
    floatAmplitude: 9,
  },
  {
    id: "chiller-tripped",
    title: "CHILLER 2 250TR SJPL TRIPPED",
    description:
      "Chiller tripped due to high discharge pressure caused by insufficient cooling tower operation and high ambient wet bulb temperature.",
    position:
      "right-[-1%] top-[4%] z-40 w-[min(100%,280px)] md:right-[-3%] md:w-[300px] lg:right-[-5%] lg:top-[6%] lg:w-[328px]",
    floatDelay: 0.35,
    floatAmplitude: 11,
  },
  {
    id: "chwp-maintenance",
    title: "CHILLED WATER PUMP 1 MAINTENANCE REQUIRED",
    description:
      "Low power consumption detected for CHWP possibly due to blocked strainer or impeller issue. Maintenance recommended.",
    position:
      "right-[0%] bottom-[12%] z-50 w-[min(100%,280px)] md:right-[-2%] md:w-[300px] lg:right-[-4%] lg:bottom-[10%] lg:w-[328px]",
    floatDelay: 0.7,
    floatAmplitude: 8,
  },
] as const;

export const PHONE_IMAGE = {
  src: "/images/multi-channel.webp",
  width: 1200,
  height: 1063,
  alt: "Hand holding a smartphone displaying DeJoule smart alerts",
} as const;
