import type { Transition, Variants } from "framer-motion";
import { MOTION } from "./tokens";

export const premiumEase = MOTION.ease.premium;

export const premiumTransition: Transition = {
  duration: MOTION.duration.slow,
  ease: premiumEase,
};

export const fastTransition: Transition = {
  duration: MOTION.duration.fast,
  ease: premiumEase,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: premiumTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: MOTION.duration.base, ease: premiumEase },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: premiumTransition,
  },
};

export const blurReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: MOTION.duration.slow,
      ease: premiumEase,
    },
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.035, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: premiumEase,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: MOTION.stagger.children,
      delayChildren: MOTION.stagger.delayChildren,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION.duration.base + 0.1,
      ease: premiumEase,
    },
  },
};

export const headlineWord: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: MOTION.duration.base + 0.1,
      ease: premiumEase,
    },
  },
};

export const viewportReveal = MOTION.viewport;

export function floatAnimation(delay = 0, amplitude = 10) {
  return {
    y: [0, -amplitude, 0],
    transition: {
      duration: MOTION.duration.float,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay,
    },
  };
}

export const hoverLift = {
  y: -3,
  transition: fastTransition,
};

export const hoverScale = {
  scale: 1.02,
  transition: fastTransition,
};

export const tapScale = {
  scale: 0.98,
  transition: { duration: 0.15 },
};
