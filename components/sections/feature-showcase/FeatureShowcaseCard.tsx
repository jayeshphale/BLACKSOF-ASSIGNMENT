"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  FEATURE_SHOWCASE_CARDS,
  type FeatureShowcaseCard as FeatureShowcaseCardData,
} from "@/lib/feature-showcase/constants";
import { premiumEase } from "@/lib/motion/premium";
import { FeatureAccordionRow } from "./FeatureAccordionRow";
import { FeatureCardBullet } from "./FeatureCardBullet";
import { FeatureShowcaseCardVisual } from "./FeatureShowcaseCardVisual";
import { FeatureShowcaseCta } from "./FeatureShowcaseCta";

type FeatureShowcaseCardProps = {
  card: FeatureShowcaseCardData;
  stackIndex: number;
  collapsed: boolean;
  imageRef?: (node: HTMLDivElement | null) => void;
};

export function FeatureShowcaseCard({
  card,
  stackIndex,
  collapsed,
  imageRef,
}: FeatureShowcaseCardProps) {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const isLastCard = stackIndex === FEATURE_SHOWCASE_CARDS.length - 1;

  const toggleAccordion = (id: string) => {
    setOpenAccordionId((current) => (current === id ? null : id));
  };

  const showExpanded = !collapsed || isLastCard;

  return (
    <article
      className="relative w-full"
      style={{ zIndex: stackIndex + 1 }}
      data-stack-card
    >
      <motion.div
        layout
        whileHover={
          prefersReducedMotion || showExpanded
            ? undefined
            : { y: -4, transition: { duration: 0.38, ease: premiumEase } }
        }
        transition={{ layout: { duration: 0.5, ease: premiumEase } }}
        className={[
          "relative overflow-hidden rounded-[22px] border bg-white sm:rounded-[26px] lg:rounded-[28px]",
          showExpanded
            ? "border-[#E8EAED] shadow-[0_24px_64px_-24px_rgba(17,24,39,0.14),0_0_0_1px_rgba(229,77,46,0.06)]"
            : "border-[#ECEEF1] shadow-[0_8px_32px_-12px_rgba(17,24,39,0.1)]",
        ].join(" ")}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(ellipse_80%_55%_at_18%_0%,rgba(229,77,46,0.14)_0%,transparent_58%)]"
          animate={{ opacity: showExpanded ? 1 : 0.35 }}
          transition={{ duration: 0.45, ease: premiumEase }}
          aria-hidden
        />

        <AnimatePresence mode="popLayout" initial={false}>
          {showExpanded ? (
            <motion.div
              key="expanded"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: premiumEase }}
              className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-10 lg:p-10 xl:gap-12 xl:p-12"
              data-card-body
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <FeatureCardBullet />
                  <h3 className="font-display text-[15px] font-semibold tracking-[-0.02em] text-[#111827] sm:text-base">
                    {card.title}
                  </h3>
                </div>

                {card.tagline ? (
                  <p className="mt-5 font-display text-[clamp(1.125rem,2.2vw,1.375rem)] leading-[1.35] font-semibold tracking-[-0.02em] text-[#111827] sm:mt-6">
                    {card.tagline}
                  </p>
                ) : null}

                {card.description ? (
                  <p className="mt-4 max-w-[420px] text-[14px] leading-[1.65] text-[#6B7280] sm:mt-5 sm:text-[15px] sm:leading-[1.7]">
                    {card.description}
                  </p>
                ) : null}

                {card.accordionItems ? (
                  <motion.div layout className="mt-6 sm:mt-8">
                    {card.accordionItems.map((item) => (
                      <FeatureAccordionRow
                        key={item.id}
                        title={item.title}
                        detail={item.detail}
                        isOpen={openAccordionId === item.id}
                        onToggle={() => toggleAccordion(item.id)}
                      />
                    ))}
                  </motion.div>
                ) : null}

                {card.ctaLabel ? (
                  <FeatureShowcaseCta label={card.ctaLabel} />
                ) : null}
              </div>

              <div ref={imageRef} className="flex items-center lg:pl-2">
                <FeatureShowcaseCardVisual image={card.image} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: premiumEase }}
              className="flex items-center gap-3 px-6 py-4 sm:px-8 sm:py-[18px]"
              data-card-header
            >
              <FeatureCardBullet />
              <h3 className="font-display text-[15px] font-semibold tracking-[-0.02em] text-[#111827] sm:text-base">
                {card.title}
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </article>
  );
}
