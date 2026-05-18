export const FEATURE_SHOWCASE_COPY = {
  eyebrow: "RETURN ON INTELLIGENCE",
  headlineLead: "Smarter buildings don't just function. ",
  headlineBold: "They deliver value.",
  descriptionLead:
    "When systems think, buildings give back. DeJoule turns every minute into measurable gain across ",
  descriptionBold: "energy, uptime, and user satisfaction.",
} as const;

export type FeatureShowcaseCard = {
  id: string;
  title: string;
  tagline?: string;
  description?: string;
  accordionItems?: readonly { id: string; title: string; detail: string }[];
  ctaLabel?: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

/** Sticky stack tuning — aligned with dejoule.ai scroll pacing */
export const FEATURE_SHOWCASE_STACK = {
  /** Visible header peek per stacked card (px) */
  cardPeek: 52,
  /** Sticky offset from viewport top (px) */
  stickyTop: 96,
  /** Viewport heights of scroll per hand-off between cards */
  scrollPerCard: 0.92,
  /** Extra scroll after final card before unpin */
  endBuffer: 0.15,
  /** Pin area min height */
  pinMinHeight: 720,
  /** Scrub smoothness (seconds) — higher = smoother lag */
  scrub: 0.85,
} as const;

export const FEATURE_SHOWCASE_CARDS: readonly FeatureShowcaseCard[] = [
  {
    id: "analytics",
    title: "Smart Analytics & Reporting",
    tagline: "From raw data to real decisions in real time.",
    description:
      "Access an analytics engine that turns operational data into targeted insights that drive action. Built for complex facilities, it empowers your team with clear operational visibility, faster response times, and continuous improvement.",
    image: {
      src: "/images/feature-showcase/analytics.gif",
      width: 1400,
      height: 900,
      alt: "DeJoule Smart Analytics and Reporting dashboard",
    },
  },
  {
    id: "alerts",
    title: "Smart Alerts",
    tagline: "More than alerts. Built-in foresight.",
    description:
      "Get alerts that offer more than just a warning—delivering precise, actionable intelligence. From early fault detection to guided resolution, get everything you need to stay ahead of failures and downtime.",
    image: {
      src: "/images/feature-showcase/alerts.png",
      width: 1400,
      height: 900,
      alt: "DeJoule Smart Alerts interface",
    },
  },
  {
    id: "monitoring",
    title: "Facility-Wide Monitoring & Control",
    tagline: "One intelligent platform. Complete visibility. Seamless control.",
    description:
      "DeJoule acts as your building's central command—integrating data, control, and actions across all systems to ensure your facility runs in perfect sync.",
    image: {
      src: "/images/feature-showcase/monitoring.gif",
      width: 1400,
      height: 900,
      alt: "DeJoule facility-wide monitoring and control dashboard",
    },
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    tagline:
      "Your building's intelligence engine. Learning, adapting, and acting in real time.",
    description:
      "Let's bring your chiller plant to life with automation that evolves by the minute, making data-driven decisions to optimize performance without compromise.",
    accordionItems: [
      {
        id: "recipes",
        title: "Joule Recipes for mass customization",
        detail:
          "Define repeatable playbooks that trigger automatically when conditions match—setpoints, schedules, and safety checks included.",
      },
      {
        id: "orchestration",
        title: "Dynamic equipment modulation",
        detail:
          "Coordinate chillers, AHUs, and pumps as one system with real-time sequencing that adapts to occupancy and weather.",
      },
      {
        id: "utilization",
        title: "Dynamic equipment selection",
        detail:
          "Distribute runtime across assets to reduce wear, avoid simultaneous peaks, and keep critical equipment ready when you need it.",
      },
    ],
    ctaLabel: "See how it works",
    image: {
      src: "/images/feature-showcase/automation.gif",
      width: 1400,
      height: 900,
      alt: "DeJoule Intelligent Automation dashboard",
    },
  },
] as const;
