"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { ParallaxFloat } from "@/components/motion/ParallaxFloat";
import { PHONE_IMAGE, SMART_ALERT_CARDS } from "@/lib/hero/constants";
import { fadeUp, floatAnimation } from "./motion";
import { SmartAlertCard } from "./SmartAlertCard";

export function HeroPhoneVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.22 }}
      className="relative mx-auto mt-10 w-full max-w-[980px] px-4 sm:mt-14 sm:px-6 lg:mt-16"
    >
      <motion.div className="relative mx-auto hidden min-h-[520px] sm:block md:min-h-[580px] lg:min-h-[640px]">
        <ParallaxFloat className="relative z-20 mx-auto w-[min(100%,520px)] md:w-[min(100%,600px)] lg:w-[min(100%,680px)]">
          <ImageReveal>
            <motion.div
              animate={prefersReducedMotion ? undefined : floatAnimation(0.15, 6)}
              className="relative w-full will-change-transform"
            >
              <Image
                src={PHONE_IMAGE.src}
                alt={PHONE_IMAGE.alt}
                width={PHONE_IMAGE.width}
                height={PHONE_IMAGE.height}
                className="h-auto w-full select-none"
                priority
                sizes="(max-width: 768px) 90vw, 680px"
              />
            </motion.div>
          </ImageReveal>
        </ParallaxFloat>

        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {SMART_ALERT_CARDS.map((card) => (
            <SmartAlertCard
              key={card.id}
              title={card.title}
              description={card.description}
              className={card.position}
              floatDelay={card.floatDelay}
              floatAmplitude={card.floatAmplitude}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="sm:hidden"
      >
        <ImageReveal>
          <motion.div className="relative z-10 mx-auto w-full max-w-[360px]">
            <Image
              src={PHONE_IMAGE.src}
              alt={PHONE_IMAGE.alt}
              width={PHONE_IMAGE.width}
              height={PHONE_IMAGE.height}
              className="h-auto w-full"
              priority
              sizes="90vw"
            />
          </motion.div>
        </ImageReveal>
        <motion.div
          className="mt-6 space-y-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {SMART_ALERT_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35 + index * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SmartAlertCard
                title={card.title}
                description={card.description}
                layout="stacked"
                floatAmplitude={0}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
