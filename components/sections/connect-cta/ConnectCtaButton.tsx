"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CONNECT_CTA_COPY } from "@/lib/connect-cta/constants";
import { floatAnimation, premiumEase } from "@/lib/motion/premium";

type ConnectCtaButtonProps = {
  href?: string;
};

export function ConnectCtaButton({ href = "#" }: ConnectCtaButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={prefersReducedMotion ? undefined : floatAnimation(0.35, 4)}
      className="mt-10 sm:mt-12"
    >
      <motion.a
        href={href}
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                scale: 1.035,
                y: -2,
                boxShadow:
                  "0 2px 4px rgba(0,0,0,0.04), 0 16px 40px -10px rgba(229, 77, 46, 0.28), inset 0 1px 0 rgba(255,255,255,1)",
              }
        }
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98, y: 0 }}
        transition={{ duration: 0.42, ease: premiumEase }}
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#E8EAED] bg-gradient-to-b from-[#FAFBFC] via-white to-[#F3F4F6] px-9 py-3.5 text-[15px] font-medium tracking-[-0.01em] text-[#D4622A] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_10px_28px_-10px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] sm:px-10 sm:py-4 sm:text-base"
      >
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/90 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: premiumEase }}
          aria-hidden
        />
        <span className="relative">{CONNECT_CTA_COPY.button}</span>
      </motion.a>
    </motion.div>
  );
}
