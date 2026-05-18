"use client";

import { motion, useReducedMotion } from "framer-motion";
import { premiumEase } from "@/lib/motion/premium";
import { DESIGN_TOKENS } from "@/lib/design/tokens";

export type FeatureItemProps = {
  title: string;
  description: string;
  isActive: boolean;
  index: number;
  onFocus: () => void;
  itemRef?: (node: HTMLElement | null) => void;
};

export function FeatureItem({
  title,
  description,
  isActive,
  index,
  onFocus,
  itemRef,
}: FeatureItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      ref={itemRef ?? undefined}
      onMouseEnter={onFocus}
      onFocus={onFocus}
      tabIndex={0}
      role="tab"
      aria-selected={isActive}
      className="cursor-default rounded-lg py-1 outline-none transition-[padding] duration-300 focus-visible:ring-2 focus-visible:ring-[#E54D2E]/30"
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0.28,
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : isActive
            ? { x: 3 }
            : { opacity: 0.5, x: 2 }
      }
      transition={{ duration: 0.45, ease: premiumEase }}
    >
      <motion.h3
        className="font-display text-[clamp(1.125rem,2vw,1.375rem)] leading-[1.3] font-semibold tracking-[-0.02em]"
        animate={{
          color: isActive
            ? DESIGN_TOKENS.colors.brandAccent
            : DESIGN_TOKENS.colors.inactive,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="mt-3 max-w-[520px] text-[15px] leading-[1.65] sm:text-base sm:leading-[1.7]"
        animate={{
          color: isActive
            ? DESIGN_TOKENS.colors.body
            : DESIGN_TOKENS.colors.inactive,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: isActive ? 0.04 : 0 }}
      >
        {description}
      </motion.p>
      {index < 2 ? (
        <div
          className="mt-8 h-px w-full bg-gradient-to-r from-[#E5E7EB] via-[#E5E7EB]/60 to-transparent lg:mt-10"
          aria-hidden
        />
      ) : null}
    </motion.article>
  );
}
