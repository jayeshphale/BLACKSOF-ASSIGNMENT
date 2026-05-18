export const MOTION = {
  ease: {
    premium: [0.22, 1, 0.36, 1] as const,
    out: [0.16, 1, 0.3, 1] as const,
    inOut: [0.65, 0, 0.35, 1] as const,
  },
  duration: {
    fast: 0.28,
    base: 0.55,
    slow: 0.85,
    float: 5.2,
  },
  stagger: {
    children: 0.09,
    delayChildren: 0.05,
  },
  viewport: {
    once: true,
    amount: 0.18,
    margin: "-72px",
  },
  parallax: {
    subtle: 28,
    medium: 48,
  },
} as const;
