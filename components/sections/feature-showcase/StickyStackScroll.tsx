"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FEATURE_SHOWCASE_CARDS } from "@/lib/feature-showcase/constants";
import { getStackTrackHeight } from "@/lib/feature-showcase/stackScroll";
import { useGsapStackScroll } from "@/hooks/useGsapStackScroll";
import { fadeUp, viewportReveal } from "@/lib/motion/premium";
import { FeatureShowcaseCard } from "./FeatureShowcaseCard";

export function StickyStackScroll() {
  const prefersReducedMotion = useReducedMotion();
  const [collapsed, setCollapsed] = useState<boolean[]>(() =>
    FEATURE_SHOWCASE_CARDS.map(() => false),
  );
  const [trackHeight, setTrackHeight] = useState("320vh");

  useEffect(() => {
    const update = () => setTrackHeight(getStackTrackHeight());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleCollapseChange = useCallback((index: number, value: boolean) => {
    setCollapsed((prev) => {
      if (prev[index] === value) return prev;
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }, []);

  const { trackRef, pinRef, setCardRef, setImageRef } = useGsapStackScroll({
    enabled: !prefersReducedMotion,
    onCollapseChange: handleCollapseChange,
  });

  if (prefersReducedMotion) {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportReveal}
        className="mx-auto flex w-full max-w-[1120px] flex-col gap-5 px-6 lg:px-10"
      >
        {FEATURE_SHOWCASE_CARDS.map((card, index) => (
          <FeatureShowcaseCard
            key={card.id}
            card={card}
            stackIndex={index}
            collapsed={index < FEATURE_SHOWCASE_CARDS.length - 1}
          />
        ))}
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        ref={trackRef}
        className="relative mx-auto hidden w-full max-w-[1120px] px-6 lg:block lg:px-10"
        style={{ height: trackHeight }}
        aria-label="Feature showcase sticky scroll"
      >
        <div
          ref={pinRef}
          className="relative w-full"
          style={{
            height: "min(760px, calc(100vh - 6rem))",
            top: 0,
          }}
        >
          {FEATURE_SHOWCASE_CARDS.map((card, index) => (
            <div
              key={card.id}
              ref={setCardRef(index)}
              className="stack-card absolute inset-x-0 top-0"
            >
              <FeatureShowcaseCard
                card={card}
                stackIndex={index}
                collapsed={collapsed[index] ?? false}
                imageRef={setImageRef(index)}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportReveal}
        className="mx-auto flex w-full max-w-[1120px] flex-col gap-5 px-6 lg:hidden lg:px-10"
      >
        {FEATURE_SHOWCASE_CARDS.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <FeatureShowcaseCard
              card={card}
              stackIndex={index}
              collapsed={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
