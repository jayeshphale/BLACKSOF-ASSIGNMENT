"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { premiumEase } from "@/lib/motion/premium";

type FeatureAccordionRowProps = {
  title: string;
  detail: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function FeatureAccordionRow({
  title,
  detail,
  isOpen,
  onToggle,
}: FeatureAccordionRowProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="border-t border-[#ECEEF1] first:border-t-0">
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:bg-[#FAFAFA]/80 sm:py-[18px]"
        aria-expanded={isOpen}
      >
        <span className="text-[14px] font-medium text-[#374151] transition-colors group-hover:text-[#111827] sm:text-[15px]">
          {title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease: premiumEase }}
          className="flex size-7 shrink-0 items-center justify-center rounded-full text-[#9CA3AF] transition-colors group-hover:text-[#E54D2E]"
          aria-hidden
        >
          <Plus className="size-4 stroke-[1.75]" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.42,
              ease: premiumEase,
            }}
            className="overflow-hidden"
          >
            <p className="pb-4 pr-10 text-[13px] leading-[1.6] text-[#6B7280] sm:pb-5 sm:text-[14px]">
              {detail}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
