"use client";

import { motion } from "framer-motion";
import { ALERTS_FEATURES } from "@/lib/alerts-redefine/constants";
import { useActiveOnScroll } from "@/hooks/useActiveOnScroll";
import { staggerContainer, staggerItem } from "@/lib/motion/premium";
import { FeatureItem } from "./FeatureItem";

export function FeatureList() {
  const { activeIndex, setItemRef, setActive } = useActiveOnScroll({
    itemCount: ALERTS_FEATURES.length,
  });

  return (
    <motion.div
      role="tablist"
      aria-label="Smart Alerts capabilities"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="mt-10 lg:mt-12"
    >
      {ALERTS_FEATURES.map((feature, index) => (
        <motion.div key={feature.id} variants={staggerItem}>
          <FeatureItem
            title={feature.title}
            description={feature.description}
            isActive={activeIndex === index}
            index={index}
            onFocus={() => setActive(index)}
            itemRef={setItemRef(index)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
