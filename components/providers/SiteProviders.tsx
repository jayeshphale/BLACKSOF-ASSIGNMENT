"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { premiumEase } from "@/lib/motion/premium";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

type SiteProvidersProps = {
  children: ReactNode;
};

export function SiteProviders({ children }: SiteProvidersProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SmoothScrollProvider>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.5, ease: premiumEase }}
      >
        {children}
      </motion.div>
    </SmoothScrollProvider>
  );
}
