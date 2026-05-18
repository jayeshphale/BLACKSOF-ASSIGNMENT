"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type UseActiveOnScrollOptions = {
  itemCount: number;
  rootMargin?: string;
  threshold?: number;
};

export function useActiveOnScroll({
  itemCount,
  rootMargin = "-35% 0px -35% 0px",
  threshold = 0.35,
}: UseActiveOnScrollOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const manualOverride = useRef(false);

  const setItemRef = useCallback(
    (index: number) => (node: HTMLElement | null) => {
      itemRefs.current[index] = node;
    },
    [],
  );

  const setActive = useCallback((index: number) => {
    manualOverride.current = true;
    setActiveIndex(index);
    window.setTimeout(() => {
      manualOverride.current = false;
    }, 1200);
  }, []);

  useEffect(() => {
    const elements = itemRefs.current.filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const ratios = new Array(itemCount).fill(0);

    const observer = new IntersectionObserver(
      (entries) => {
        if (manualOverride.current) return;

        for (const entry of entries) {
          const index = elements.indexOf(entry.target as HTMLElement);
          if (index === -1) continue;
          ratios[index] = entry.intersectionRatio;
        }

        let bestIndex = 0;
        let bestRatio = 0;
        for (let i = 0; i < itemCount; i++) {
          if (ratios[i] > bestRatio) {
            bestRatio = ratios[i];
            bestIndex = i;
          }
        }

        if (bestRatio > 0) {
          setActiveIndex(bestIndex);
        }
      },
      { rootMargin, threshold: [0, threshold, 0.5, 0.75, 1] },
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [itemCount, rootMargin, threshold]);

  return { activeIndex, setItemRef, setActive };
}
