"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { FEATURE_SHOWCASE_STACK } from "@/lib/feature-showcase/constants";
import {
  getCardStackY,
  getStackScrollDistance,
  STACK_CARD_COUNT,
} from "@/lib/feature-showcase/stackScroll";

gsap.registerPlugin(ScrollTrigger);

type UseGsapStackScrollOptions = {
  enabled: boolean;
  onCollapseChange: (index: number, collapsed: boolean) => void;
};

function getCollapseStates(progress: number, count: number) {
  const states = new Array<boolean>(count).fill(false);
  for (let i = 0; i < count - 1; i++) {
    const threshold = (i + 0.88) / (count - 1);
    states[i] = progress >= threshold;
  }
  return states;
}

export function useGsapStackScroll({
  enabled,
  onCollapseChange,
}: UseGsapStackScrollOptions) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const onCollapseRef = useRef(onCollapseChange);
  const lastCollapseRef = useRef<string>("");

  onCollapseRef.current = onCollapseChange;

  const setCardRef = (index: number) => (node: HTMLDivElement | null) => {
    cardRefs.current[index] = node;
  };

  const setImageRef = (index: number) => (node: HTMLDivElement | null) => {
    imageRefs.current[index] = node;
  };

  useLayoutEffect(() => {
    if (!enabled) return;

    const track = trackRef.current;
    const pin = pinRef.current;
    const cards = cardRefs.current.filter(
      (card): card is HTMLDivElement => card !== null,
    );

    if (!track || !pin || cards.length !== STACK_CARD_COUNT) return;

    const ctx = gsap.context(() => {
      const getDistance = () => getStackScrollDistance();
      const getEnterY = () => window.innerHeight * 0.72;

      gsap.set(cards, {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        transformOrigin: "top center",
        force3D: true,
        willChange: "transform",
      });

      cards.forEach((card, index) => {
        gsap.set(card, {
          zIndex: index + 1,
          y: index === 0 ? 0 : getEnterY(),
          scale: index === 0 ? 1 : 0.965,
        });
      });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: track,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin,
          pinSpacing: true,
          scrub: FEATURE_SHOWCASE_STACK.scrub,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const states = getCollapseStates(self.progress, cards.length);
            const key = states.map(String).join(",");
            if (key === lastCollapseRef.current) return;
            lastCollapseRef.current = key;

            states.forEach((collapsed, index) => {
              if (index < cards.length - 1) {
                onCollapseRef.current(index, collapsed);
              }
            });
          },
        },
      });

      const segmentDuration = 1;

      for (let i = 1; i < cards.length; i++) {
        const position = i - 1;

        timeline.to(
          cards[i],
          {
            y: getCardStackY(i),
            scale: 1,
            duration: segmentDuration,
            ease: "power3.out",
          },
          position,
        );

        for (let j = 0; j < i; j++) {
          timeline.to(
            cards[j],
            {
              y: getCardStackY(j),
              scale: Math.max(0.9, 1 - (i - j) * 0.032),
              duration: segmentDuration * 0.9,
              ease: "power2.inOut",
            },
            position,
          );

          const image = imageRefs.current[j];
          if (image) {
            timeline.to(
              image,
              {
                y: -6 * (i - j),
                scale: 1 - (i - j) * 0.018,
                duration: segmentDuration * 0.9,
                ease: "power2.inOut",
              },
              position,
            );
          }
        }
      }
    }, track);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(track);

    return () => {
      window.removeEventListener("resize", refresh);
      resizeObserver.disconnect();
      lastCollapseRef.current = "";
      ctx.revert();
    };
  }, [enabled]);

  return {
    trackRef,
    pinRef,
    setCardRef,
    setImageRef,
  };
}
