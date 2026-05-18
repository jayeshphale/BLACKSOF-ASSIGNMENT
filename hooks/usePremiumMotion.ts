"use client";

import { useReducedMotion, type Variants } from "framer-motion";
import { premiumTransition, viewportReveal } from "@/lib/motion/premium";

export function usePremiumMotion() {
  const prefersReducedMotion = useReducedMotion();

  return {
    prefersReducedMotion,
    shouldAnimate: !prefersReducedMotion,
    viewport: viewportReveal,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : premiumTransition,
    motionProps: prefersReducedMotion
      ? {}
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: viewportReveal,
        },
    resolveVariants: (variants: Variants) =>
      prefersReducedMotion
        ? { hidden: {}, visible: {} }
        : variants,
  };
}
