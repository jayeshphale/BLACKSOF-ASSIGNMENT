export const ALERTS_REDEFINE_COPY = {
  titleLead: "Redefining what ",
  titleBold: "alerts",
  titleTrail: " should do for you",
  paragraphs: [
    "Operations teams shouldn't be bombarded with irrelevant, static, and stagnating alerts that increase overhead instead of reducing it.",
    "Smart Alerts by DeJoule is redefining how alerts should speak to you—personalized, actionable, and like an intelligent teammate, always guiding you with clear, corrective steps.",
  ],
} as const;

export const ALERTS_FEATURES = [
  {
    id: "role-based",
    title: "Role-based & SLA-driven",
    description:
      "Get personalized alerts as per your job role without any notification clutter. Our one-click alert subscriptions and SLA-based escalations save time and boost operational efficiency.",
  },
  {
    id: "root-cause",
    title: "Root-cause analysis",
    description:
      "Get to the root cause of the problem and history of its occurrence, based on real-time analysis of equipment and building operations.",
  },
  {
    id: "actionable",
    title: "Actionable solutions",
    description:
      "Replace reactive firefighting with direct resolution actions or recommendations to prevent failures, maintain peak performance, and keep your building one step ahead.",
  },
] as const;

export const ALERTS_REDEFINE_VISUAL = {
  src: "/images/multi-channel.webp",
  width: 1200,
  height: 1063,
  alt: "Hand holding a smartphone with DeJoule smart alert notifications",
} as const;

export const ALERTS_FEATURE_COUNT = ALERTS_FEATURES.length;
