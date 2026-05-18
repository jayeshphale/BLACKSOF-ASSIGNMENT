"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { ParallaxFloat } from "@/components/motion/ParallaxFloat";
import { ALERTS_REDEFINE_VISUAL } from "@/lib/alerts-redefine/constants";
import { floatAnimation, premiumEase } from "@/lib/motion/premium";

export function AlertsRedefineVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <ParallaxFloat className="relative mx-auto w-full max-w-[min(100%,520px)] lg:mx-0 lg:max-w-[560px]">
      <ImageReveal delay={0.08}>
        <motion.div
          className="relative z-10 will-change-transform"
          animate={prefersReducedMotion ? undefined : floatAnimation(0.25, 7)}
        >
          <motion.div
            className="relative overflow-visible"
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    scale: 1.01,
                    transition: { duration: 0.5, ease: premiumEase },
                  }
            }
          >
            <Image
              src={ALERTS_REDEFINE_VISUAL.src}
              alt={ALERTS_REDEFINE_VISUAL.alt}
              width={ALERTS_REDEFINE_VISUAL.width}
              height={ALERTS_REDEFINE_VISUAL.height}
              className="h-auto w-full select-none"
              sizes="(max-width: 1024px) 92vw, 560px"
              priority
            />
          </motion.div>
        </motion.div>
      </ImageReveal>

      <motion.div
        className="pointer-events-none absolute top-[52%] left-1/2 -z-10 h-[62%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E54D2E]/[0.06] blur-[72px]"
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.5, 0.75, 0.5], scale: [1, 1.04, 1] }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden
      />
    </ParallaxFloat>
  );
}
