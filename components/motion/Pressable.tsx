"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { hoverScale, premiumEase, tapScale } from "@/lib/motion/premium";

type PressableProps = HTMLMotionProps<"a">;

export function Pressable({ children, className, ...props }: PressableProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      className={className}
      whileHover={prefersReducedMotion ? undefined : hoverScale}
      whileTap={prefersReducedMotion ? undefined : tapScale}
      transition={{ duration: 0.32, ease: premiumEase }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
