export const SMART_ALERTS_HERO = {
  titleLead: "AFDD powered by ",
  titleAccent: "Smart Alerts",
  subtitle:
    "Making alerts relevant, personalized, and directly actionable for your operations team.",
} as const;

/** Primary hero visual — hand + phone (used only in intro hero, not sticky story) */
export const HERO_PHONE_IMAGE = "/assets/smartAlerts/afdd/multi-channel.png";

/** Sticky story phone — generic hand mockup (no duplicate hero composite) */
export const STICKY_PHONE_IMAGE = "/assets/smartAlerts/banner_default.png";

/** Subtle motion around the phone — cards stay visually attached to the device */
export const FLOATING_ALERT_CARDS = [
  {
    id: "ahu",
    label: "Smart Alert from Dejoule",
    title: "4F NW Corridor AHU Area Overcooled",
    description:
      "4F NW Corridor area is overcooled where the area temperature is below the setpoint while the valve...",
    positionClass:
      "left-[2%] top-[12%] z-30 md:left-[4%] lg:left-[6%] lg:top-[14%]",
    motion: {
      from: { x: 0, y: 0, rotation: -2, scale: 1 },
      mid: { x: -12, y: -14, rotation: -4, scale: 1 },
      to: { x: -18, y: -22, rotation: -5, scale: 0.98 },
    },
  },
  {
    id: "chiller",
    label: "Smart Alert from Dejoule",
    title: "CHILLER 2 250TR SJPL TRIPPED",
    description:
      "Chiller tripped due to high discharge pressure caused by insufficent cooling tower operation...",
    positionClass:
      "right-[2%] top-[4%] z-40 md:right-[4%] lg:right-[6%] lg:top-[6%]",
    motion: {
      from: { x: 0, y: 0, rotation: 2, scale: 1 },
      mid: { x: 10, y: -18, rotation: 5, scale: 1.01 },
      to: { x: 16, y: -28, rotation: 7, scale: 0.98 },
    },
  },
  {
    id: "chwp",
    label: "Smart Alert from Dejoule",
    title: "CHILLED WATER PUMP 1 MAINTAINANCE REQUIRED",
    description:
      "Low power consumption detected for CHWP possibly due to blocked strainer",
    positionClass:
      "right-[4%] bottom-[10%] z-50 md:right-[6%] lg:right-[8%] lg:bottom-[12%]",
    motion: {
      from: { x: 0, y: 0, rotation: -1, scale: 1 },
      mid: { x: 12, y: 10, rotation: 3, scale: 1 },
      to: { x: 18, y: 18, rotation: 5, scale: 0.98 },
    },
  },
] as const;

export const STICKY_INTRO = {
  title: "Redefining what alerts should do for you",
  paragraphs: [
    "Operations teams shouldn't be bombarded with irrelevant, static, and stagnating alerts that increase overhead instead of reducing it.",
    "Smart Alerts by DeJoule is redefining how alerts should speak to you—personalized, actionable, and like an intelligent teammate, always guiding you with clear, corrective steps.",
  ],
} as const;

export const STICKY_STEPS = [
  {
    id: "role-based",
    label: "Role-based & SLA-driven",
    description:
      "Get personalized alerts as per your job role without any notification clutter. Our one-click alert subscriptions and SLA-based escalations save time and boost operational efficiency.",
    phoneImage: "/assets/smartAlerts/afdd/role-based.png",
    icon: "user",
  },
  {
    id: "root-cause",
    label: "Root-cause analysis",
    description:
      "Get to the root cause of the problem and history of its occurrence, based on real-time analysis of equipment and building operations.",
    phoneImage: STICKY_PHONE_IMAGE,
    icon: "search",
  },
  {
    id: "actionable",
    label: "Actionable solutions",
    description:
      "Replace reactive firefighting with direct resolution actions or recommendations to prevent failures, maintain peak performance, and keep your building one step ahead.",
    phoneImage: STICKY_PHONE_IMAGE,
    icon: "zap",
  },
  {
    id: "multi-channel",
    label: "Multi-channel delivery",
    description:
      "Get insights delivered wherever you work best, on WhatsApp, SMS, or email.",
    phoneImage: STICKY_PHONE_IMAGE,
    icon: "message",
    messages: [
      "/assets/smartAlert/message1.png",
      "/assets/smartAlert/message2.png",
      "/assets/smartAlert/message3.png",
    ],
  },
] as const;

export const RETURN_ON_INTELLIGENCE = {
  eyebrow: "RETURN ON INTELLIGENCE",
  headlineLead: "Smarter buildings don't just function. ",
  headlineBold: "They deliver value.",
  descriptionLead:
    "When systems think, buildings give back. DeJoule turns every minute into measurable gain across ",
  descriptionBold: "energy, uptime, and user satisfaction.",
} as const;

export const ALERTS_IN_ACTION = {
  eyebrow: "Alerts in action",
  title: "No matter the issue, Smart Alerts always have your back!",
  description:
    "Smart Alerts conduct real-time smart prognosis to catch issues that traditional systems miss. They run deep, real-time Automated Fault Detection and Diagnostics (AFDD) to detect potential risks that could impact your building's performance, energy efficiency, and occupant comfort.",
} as const;

export const ISSUE_CARDS = [
  {
    id: "energy",
    title: "Hidden energy leaks",
    description:
      "Detect energy inefficiencies and fix them before they increase your energy costs.",
    image: "/assets/smartAlerts/issues/01.webp",
  },
  {
    id: "downtime",
    title: "Downtime triggers",
    description:
      "Identify equipment failures and process interruptions before they cascade.",
    image: "/assets/smartAlerts/issues/02.webp",
  },
  {
    id: "automation",
    title: "Automation gaps",
    description:
      "Spot control logic failures and missed optimization opportunities instantly.",
    image: "/assets/smartAlerts/issues/03.webp",
  },
  {
    id: "edge",
    title: "Edge device & connectivity errors",
    description:
      "Monitor sensor health and communication issues across your building network.",
    image: "/assets/smartAlerts/issues/04.webp",
  },
  {
    id: "comfort",
    title: "Indoor discomfort",
    description:
      "Catch temperature, humidity, and air quality deviations before occupants notice.",
    image: "/assets/smartAlerts/issues/05.webp",
  },
  {
    id: "predictive",
    title: "Predictive maintenance",
    description:
      "Get ahead of wear-and-tear with alerts that flag maintenance needs early.",
    image: "/assets/smartAlerts/issues/06.webp",
  },
  {
    id: "critical",
    title: "Life-critical alerts",
    description:
      "Prioritize safety-critical faults with immediate escalation paths.",
    image: "/assets/smartAlerts/issues/07.webp",
  },
] as const;

export const SMART_ALERTS_CTA = {
  title: "Let's activate your smartest teammate!",
  button: "Talk to us!",
} as const;

export const SITE_NAV = [
  { label: "Full-stack BMS", href: "#" },
  { label: "Chiller Plant Optimizer", href: "#" },
  { label: "Our Edge", href: "#", hasDropdown: true },
  { label: "Inside DeJoule", href: "#", hasDropdown: true },
  { label: "Resources", href: "#" },
] as const;
