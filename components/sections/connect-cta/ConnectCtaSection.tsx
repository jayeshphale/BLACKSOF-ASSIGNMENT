"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CONNECT_CTA_COPY } from "@/lib/connect-cta/constants";
import { DESIGN_TOKENS } from "@/lib/design/tokens";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion/premium";
import { ConnectCtaButton } from "./ConnectCtaButton";

export function ConnectCtaSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="connect-cta"
      aria-labelledby="connect-cta-heading"
      className="relative overflow-hidden bg-white"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(249, 250, 251, 0.6) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        variants={prefersReducedMotion ? fadeUp : staggerContainer}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={viewportReveal}
        className={`relative flex min-h-[min(72vh,680px)] flex-col items-center justify-center ${DESIGN_TOKENS.container} py-28 sm:min-h-[min(68vh,720px)] sm:py-36 lg:py-44`}
      >
        <h2
          id="connect-cta-heading"
          className="font-display max-w-[min(100%,720px)] text-center text-[clamp(1.625rem,3.6vw,2.5rem)] leading-[1.22] font-medium tracking-[-0.03em] text-[#1F2937] sm:leading-[1.2] lg:max-w-[780px] lg:text-[clamp(1.875rem,3.2vw,2.625rem)]"
        >
          <span className="block sm:inline">
            <motion.span variants={staggerItem} className="inline">
              {CONNECT_CTA_COPY.lead}
            </motion.span>
            <motion.span
              variants={staggerItem}
              className="inline font-bold text-[#111827]"
            >
              {CONNECT_CTA_COPY.emphasis1}
            </motion.span>
            <motion.span variants={staggerItem} className="inline">
              {CONNECT_CTA_COPY.join}
            </motion.span>
          </span>
          <span className="block sm:inline">
            <motion.span
              variants={staggerItem}
              className="inline font-bold text-[#111827]"
            >
              {CONNECT_CTA_COPY.emphasis2}
            </motion.span>
            <motion.span variants={staggerItem} className="inline">
              {CONNECT_CTA_COPY.trail}
            </motion.span>
          </span>
        </h2>

        <motion.div variants={staggerItem}>
          <ConnectCtaButton />
        </motion.div>
      </motion.div>
    </section>
  );
}
