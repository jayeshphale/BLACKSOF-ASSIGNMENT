"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DESIGN_TOKENS } from "@/lib/design/tokens";
import { fadeUp, viewportReveal } from "@/lib/motion/premium";
import { AlertsRedefineIntro } from "./AlertsRedefineIntro";
import { AlertsRedefineVisual } from "./AlertsRedefineVisual";
import { FeatureList } from "./FeatureList";

export function AlertsRedefineSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="alerts-redefine"
      className={`relative overflow-hidden ${DESIGN_TOKENS.sectionY}`}
      style={{ backgroundColor: DESIGN_TOKENS.colors.background }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(230, 95, 65, 0.04) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 10% 80%, rgba(249, 250, 251, 1) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <motion.div
        variants={fadeUp}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={viewportReveal}
        className={`relative ${DESIGN_TOKENS.container}`}
      >
        <AlertsRedefineIntro />

        <motion.div
          variants={fadeUp}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={viewportReveal}
          className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14 xl:gap-20"
        >
          <div className="order-2 lg:order-1">
            <FeatureList />
          </div>
          <div className="order-1 lg:order-2">
            <AlertsRedefineVisual />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
