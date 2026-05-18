"use client";

import { motion } from "framer-motion";
import { ALERTS_REDEFINE_COPY } from "@/lib/alerts-redefine/constants";
import {
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion/premium";

export function AlertsRedefineIntro() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportReveal}
    >
      <motion.h2
        variants={staggerItem}
        className="font-display text-[clamp(1.875rem,3.8vw,2.75rem)] leading-[1.12] font-medium tracking-[-0.03em] text-[#111827]"
      >
        {ALERTS_REDEFINE_COPY.titleLead}
        <span className="font-bold">{ALERTS_REDEFINE_COPY.titleBold}</span>
        {ALERTS_REDEFINE_COPY.titleTrail}
      </motion.h2>

      <motion.div variants={staggerItem} className="mt-6 space-y-4 sm:mt-7">
        {ALERTS_REDEFINE_COPY.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="text-[15px] leading-[1.65] text-[#4B5563] sm:text-base sm:leading-[1.7]"
          >
            {paragraph}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
}
