"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HERO_COPY } from "@/lib/hero/constants";
import { fadeUp, headlineWord, staggerContainer } from "./motion";

export function HeroHeadline() {
  const prefersReducedMotion = useReducedMotion();

  const wordVariants = prefersReducedMotion ? fadeUp : headlineWord;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-[920px] px-6 text-center"
    >
      <motion.p
        variants={fadeUp}
        className="text-[11px] font-bold tracking-[0.22em] text-[#E54D2E] uppercase sm:text-[12px]"
      >
        {HERO_COPY.eyebrow}
      </motion.p>

      <motion.h1
        variants={staggerContainer}
        className="font-display mt-5 text-[clamp(1.75rem,4.2vw,2.75rem)] leading-[1.18] font-medium tracking-[-0.025em] text-[#111827] sm:mt-6 sm:leading-[1.14]"
      >
        <motion.span variants={wordVariants} className="inline">
          {HERO_COPY.headlineLead}
        </motion.span>
        <motion.span variants={wordVariants} className="inline font-bold">
          {HERO_COPY.headlineBold1}
        </motion.span>
        <motion.span variants={wordVariants} className="inline">
          {HERO_COPY.headlineJoin}
        </motion.span>
        <motion.span variants={wordVariants} className="inline font-bold">
          {HERO_COPY.headlineBold2}
        </motion.span>
      </motion.h1>
    </motion.div>
  );
}
