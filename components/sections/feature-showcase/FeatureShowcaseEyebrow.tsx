"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/motion/premium";

function DotGridIcon() {
  return (
    <span
      className="inline-grid grid-cols-3 gap-[3px]"
      aria-hidden
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className="size-[3px] rounded-full bg-[#E54D2E]"
        />
      ))}
    </span>
  );
}

type FeatureShowcaseEyebrowProps = {
  label: string;
};

export function FeatureShowcaseEyebrow({ label }: FeatureShowcaseEyebrowProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="flex items-center gap-2.5"
    >
      <DotGridIcon />
      <span className="text-[11px] font-semibold tracking-[0.18em] text-[#E65F41] uppercase sm:text-[12px]">
        {label}
      </span>
    </motion.div>
  );
}
