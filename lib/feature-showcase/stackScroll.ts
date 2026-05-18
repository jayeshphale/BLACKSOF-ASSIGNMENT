import { FEATURE_SHOWCASE_CARDS, FEATURE_SHOWCASE_STACK } from "./constants";

export const STACK_CARD_COUNT = FEATURE_SHOWCASE_CARDS.length;

export function getStackScrollDistance() {
  if (typeof window === "undefined") return 0;
  return (
    window.innerHeight *
    (STACK_CARD_COUNT - 1 + FEATURE_SHOWCASE_STACK.endBuffer) *
    FEATURE_SHOWCASE_STACK.scrollPerCard
  );
}

export function getStackTrackHeight() {
  if (typeof window === "undefined") return "400vh";
  const distance = getStackScrollDistance();
  const pinHeight = Math.min(
    FEATURE_SHOWCASE_STACK.pinMinHeight,
    window.innerHeight - FEATURE_SHOWCASE_STACK.stickyTop,
  );
  return `${distance + pinHeight}px`;
}

export function getCardStackY(index: number) {
  return index * FEATURE_SHOWCASE_STACK.cardPeek;
}

export function getCardScaleWhenCovered(
  cardIndex: number,
  activeIndex: number,
) {
  if (activeIndex <= cardIndex) return 1;
  const depth = activeIndex - cardIndex;
  return Math.max(0.9, 1 - depth * 0.032);
}
