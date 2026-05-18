"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ImageReveal } from "@/components/motion/ImageReveal";
import type { FeatureShowcaseCard } from "@/lib/feature-showcase/constants";
import { floatAnimation, premiumEase } from "@/lib/motion/premium";

type FeatureShowcaseCardVisualProps = {
  image: FeatureShowcaseCard["image"];
};

export function FeatureShowcaseCardVisual({ image }: FeatureShowcaseCardVisualProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div className="relative w-full" data-card-image>
      <ImageReveal>
        <motion.div
          animate={prefersReducedMotion ? undefined : floatAnimation(0.25, 6)}
          className="will-change-transform"
        >
          <motion.div
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    scale: 1.014,
                    y: -4,
                    transition: { duration: 0.45, ease: premiumEase },
                  }
            }
            className="overflow-hidden rounded-[16px] border border-[#E8EAED] bg-white shadow-[0_20px_50px_-20px_rgba(17,24,39,0.18)] sm:rounded-[18px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full select-none"
              sizes="(max-width: 1024px) 92vw, 620px"
              unoptimized={image.src.endsWith(".gif")}
            />
          </motion.div>
        </motion.div>
      </ImageReveal>

      <motion.div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-[radial-gradient(ellipse_at_center,rgba(229,77,46,0.08)_0%,transparent_70%)]"
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.6, 1, 0.6] }
        }
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
    </motion.div>
  );
}
