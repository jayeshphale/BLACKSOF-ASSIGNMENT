"use client";

import { motion, useReducedMotion } from "framer-motion";
import { premiumEase } from "@/lib/motion/premium";

type FeatureShowcaseCtaProps = {
  label: string;
};

export function FeatureShowcaseCta({ label }: FeatureShowcaseCtaProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href="#"
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              scale: 1.03,
              y: -1,
              boxShadow: "0 12px 32px -12px rgba(229, 77, 46, 0.35)",
            }
      }
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.35, ease: premiumEase }}
      className="mt-8 inline-flex items-center justify-center rounded-full border border-[#FED7C8] bg-[#FFF4EF] px-6 py-3 text-[14px] font-semibold text-[#E54D2E] shadow-[0_2px_12px_-4px_rgba(229,77,46,0.15)] transition-colors hover:border-[#FECDB8] hover:bg-[#FFEDE5] sm:mt-9 sm:px-7 sm:py-3.5"
    >
      {label}
    </motion.a>
  );
}
