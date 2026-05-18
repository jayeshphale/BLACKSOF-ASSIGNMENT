"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DESIGN_TOKENS } from "@/lib/design/tokens";
import { fadeUp, viewportReveal } from "@/lib/motion/premium";
import { FeatureShowcaseHeader } from "./FeatureShowcaseHeader";
import { StickyStackScroll } from "./StickyStackScroll";

export function FeatureShowcaseSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="feature-showcase"
      className="relative overflow-hidden bg-white"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 15% 0%, rgba(229, 77, 46, 0.03) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(249, 250, 251, 0.9) 0%, transparent 55%)",
        }}
        aria-hidden
      />

      <motion.div
        variants={fadeUp}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={viewportReveal}
        className={`relative ${DESIGN_TOKENS.container} pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16`}
      >
        <FeatureShowcaseHeader />
      </motion.div>

      <StickyStackScroll />
    </section>
  );
}
