"use client";

import { motion } from "framer-motion";
import { FEATURE_SHOWCASE_COPY } from "@/lib/feature-showcase/constants";
import {
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion/premium";
import { FeatureShowcaseEyebrow } from "./FeatureShowcaseEyebrow";

export function FeatureShowcaseHeader() {
  return (
    <motion.header
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportReveal}
      className="mb-12 sm:mb-14 lg:mb-16"
    >
      <FeatureShowcaseEyebrow label={FEATURE_SHOWCASE_COPY.eyebrow} />

      <motion.div
        variants={staggerContainer}
        className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14 xl:gap-20"
      >
        <motion.h2
          variants={staggerItem}
          className="font-display max-w-[640px] text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.12] font-medium tracking-[-0.03em] text-[#111827]"
        >
          {FEATURE_SHOWCASE_COPY.headlineLead}
          <span className="font-bold">
            {FEATURE_SHOWCASE_COPY.headlineBold}
          </span>
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="max-w-[480px] text-[15px] leading-[1.65] text-[#4B5563] sm:text-base sm:leading-[1.7] lg:pb-1"
        >
          {FEATURE_SHOWCASE_COPY.descriptionLead}
          <span className="font-semibold text-[#374151]">
            {FEATURE_SHOWCASE_COPY.descriptionBold}
          </span>
        </motion.p>
      </motion.div>
    </motion.header>
  );
}
