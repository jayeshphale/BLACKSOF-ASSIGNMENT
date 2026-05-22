"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, Search, User, Zap } from "lucide-react";
import { useRef } from "react";
import { STICKY_INTRO, STICKY_STEPS } from "@/lib/smart-alerts/constants";
import {
  SCRUB_STICKY,
  STICKY_PIN_SCROLL,
} from "@/lib/smart-alerts/scroll-config";
import { cn } from "@/lib/utils";
import { CinematicAtmosphere } from "./CinematicAtmosphere";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEP_ICONS = {
  user: User,
  search: Search,
  zap: Zap,
  message: MessageSquare,
} as const;

const INACTIVE_LABEL = "#D1D5DB";
const ACTIVE_LABEL = "#CA3604";

const MESSAGE_ORBIT = [
  "top-[6%] left-[-14%] -rotate-[6deg]",
  "top-[10%] right-[-12%] rotate-[5deg]",
  "bottom-[14%] left-[-10%] rotate-[4deg]",
] as const;

export function SmartAlertsStickyStory() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const phoneSceneRef = useRef<HTMLDivElement>(null);
  const phoneWrapRef = useRef<HTMLDivElement>(null);

  const stepLabelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const stepRowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepIconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const phoneLayersRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const track = trackRef.current;
      const pin = pinRef.current;
      const intro = introRef.current;
      const phoneScene = phoneSceneRef.current;
      const phoneWrap = phoneWrapRef.current;
      if (!track || !pin) return;

      const labels = stepLabelRefs.current.filter(Boolean) as HTMLSpanElement[];
      const rows = stepRowRefs.current.filter(Boolean) as HTMLDivElement[];
      const icons = stepIconRefs.current.filter(Boolean) as HTMLSpanElement[];
      const layers = phoneLayersRef.current.filter(Boolean) as HTMLDivElement[];

      const stepCount = STICKY_STEPS.length;
      const introPhase = 0.1;
      const stepPhase = (1 - introPhase) / (stepCount - 1);
      const lastIndex = stepCount - 1;

      gsap.set(intro, { autoAlpha: 1, y: 0 });
      gsap.set(phoneScene, { autoAlpha: 1, scale: 1 });
      gsap.set(phoneWrap, { y: 0, scale: 1, autoAlpha: 1 });
      gsap.set(labels, { color: INACTIVE_LABEL, opacity: 0.28 });
      gsap.set(rows, { autoAlpha: 0, y: 12, visibility: "hidden" });
      gsap.set(icons, {
        backgroundColor: "rgba(209, 213, 219, 0.45)",
        color: "rgba(202, 54, 4, 0.35)",
      });
      gsap.set(layers, { autoAlpha: 0, scale: 1, y: 0 });
      gsap.set(rows[0], { autoAlpha: 1, y: 0, visibility: "visible" });
      gsap.set(layers[0], { autoAlpha: 1, scale: 1, y: 0 });

      layers.forEach((layer) => {
        const msgs = gsap.utils.toArray("[data-wa-msg]", layer) as HTMLElement[];
        gsap.set(msgs, { autoAlpha: 0, y: 16, scale: 0.94 });
      });

      if (labels[0]) gsap.set(labels[0], { color: ACTIVE_LABEL, opacity: 1 });
      if (icons[0]) {
        gsap.set(icons[0], {
          backgroundColor: "#CA3604",
          color: "#ffffff",
        });
      }

      const tl = gsap.timeline({
        defaults: { ease: "none", force3D: true },
        scrollTrigger: {
          trigger: track,
          start: "top top",
          end: () => `+=${STICKY_PIN_SCROLL}`,
          pin,
          pinSpacing: true,
          scrub: SCRUB_STICKY,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        phoneScene,
        { autoAlpha: 0.6, scale: 0.98 },
        { autoAlpha: 1, scale: 1, duration: 0.08 },
        0,
      );

      tl.to(intro, { autoAlpha: 0, y: -24, duration: introPhase }, 0.04);

      for (let i = 1; i < stepCount; i++) {
        const t = introPhase + (i - 1) * stepPhase;
        const dur = stepPhase * 0.9;
        const prev = i - 1;
        const isLast = i === lastIndex;

        tl.to(
          labels[prev],
          { opacity: 0.28, color: INACTIVE_LABEL, duration: dur * 0.35 },
          t,
        );
        tl.to(
          rows[prev],
          { autoAlpha: 0, y: -10, visibility: "hidden", duration: dur * 0.3 },
          t,
        );
        tl.to(
          icons[prev],
          {
            backgroundColor: "rgba(209, 213, 219, 0.45)",
            color: "rgba(202, 54, 4, 0.35)",
            duration: dur * 0.35,
          },
          t,
        );

        tl.to(
          labels[i],
          { opacity: 1, color: ACTIVE_LABEL, duration: dur * 0.38 },
          t,
        );
        tl.fromTo(
          rows[i],
          { autoAlpha: 0, y: 12, visibility: "hidden" },
          { autoAlpha: 1, y: 0, visibility: "visible", duration: dur * 0.4 },
          t + dur * 0.05,
        );
        tl.to(
          icons[i],
          { backgroundColor: "#CA3604", color: "#ffffff", duration: dur * 0.36 },
          t,
        );

        if (layers[prev] && layers[i]) {
          const samePhone =
            STICKY_STEPS[prev].phoneImage === STICKY_STEPS[i].phoneImage;

          if (samePhone && !isLast) {
            /* Keep one phone visible — only left-side story changes */
          } else if (samePhone && isLast) {
            // Ensure the incoming layer fades in before we fully hide the previous one
            tl.fromTo(
              layers[i],
              { autoAlpha: 0, scale: 0.99 },
              { autoAlpha: 1, scale: 1, duration: dur * 0.42 },
              t,
            );
            tl.to(layers[prev], { autoAlpha: 0, duration: dur * 0.28 }, t + dur * 0.06);

            const messages = gsap.utils.toArray(
              "[data-wa-msg]",
              layers[i],
            ) as HTMLElement[];
            if (messages.length) {
              tl.to(
                messages,
                {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  duration: dur * 0.48,
                  stagger: 0.07,
                },
                t + dur * 0.28,
              );
            }
          } else {
            // Fade the incoming layer in first, then hide previous to avoid a blank frame
            tl.fromTo(
              layers[i],
              { autoAlpha: 0, scale: 0.99 },
              { autoAlpha: 1, scale: 1, duration: dur * 0.45 },
              t,
            );
            tl.to(layers[prev], { autoAlpha: 0, duration: dur * 0.38 }, t + dur * 0.06);
          }
        }
      }

      tl.set(rows[lastIndex], { autoAlpha: 1, y: 0, visibility: "visible" }, 1);
      tl.set(layers[lastIndex], { autoAlpha: 1, scale: 1 }, 1);
      tl.set(phoneWrap, { autoAlpha: 1, scale: 1, y: 0 }, 1);

      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      const ro = new ResizeObserver(() => ScrollTrigger.refresh());
      ro.observe(track);

      return () => {
        window.removeEventListener("load", onLoad);
        ro.disconnect();
      };
    },
    { scope: trackRef },
  );

  return (
    <div ref={trackRef} className="relative hidden w-[100dvw] bg-[#F9FAFB] lg:block">
      <div
        ref={pinRef}
        className="relative h-screen w-full overflow-hidden bg-[#F9FAFB]"
        style={{
          backgroundImage: "url('/assets/smartAlert/bgImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CinematicAtmosphere variant="sticky" />

        <div className="container-content relative z-10 mx-auto grid h-full w-full max-w-[1440px] grid-cols-[1.15fr_1.85fr] items-start gap-6 px-10 xl:px-16 pt-20 lg:pt-20">
          <div className="flex h-full flex-col justify-start">
            <div ref={introRef} className="mb-8 space-y-3">
              <h3 className="text-[30px] leading-[1.22] font-light tracking-[-0.01em] text-[#111827] xl:text-[34px]">
                {STICKY_INTRO.title}
              </h3>
              {STICKY_INTRO.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="max-w-[28rem] text-[14px] leading-[1.65] font-light text-[#4B5563]"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-6 relative min-h-[220px]">
              {STICKY_STEPS.map((step, index) => {
                const Icon = STEP_ICONS[step.icon as keyof typeof STEP_ICONS];
                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      stepRowRefs.current[index] = el;
                    }}
                    className="lable-row absolute inset-0 max-w-[26rem] overflow-hidden py-2.5"
                  >
                    <div className="flex cursor-default items-start gap-5">
                      <span
                        ref={(el) => {
                          stepIconRefs.current[index] = el;
                        }}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-colors duration-300"
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <span
                          ref={(el) => {
                            stepLabelRefs.current[index] = el;
                          }}
                          className="block text-[17px] font-normal leading-snug"
                        >
                          {step.label}
                        </span>
                        <p className="mt-2 text-[14px] leading-[1.65] font-normal text-[#6B7280]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex h-full min-h-0 items-center justify-center">
            <div
              ref={phoneSceneRef}
              className="relative flex h-full w-full max-w-[920px] items-center justify-center"
            >
              <div
                ref={phoneWrapRef}
                className="new-image-container relative h-[min(92vh,840px)] w-full max-w-[860px] will-change-transform"
              >
                {STICKY_STEPS.map((step, index) => (
                  <div
                    key={step.id}
                    ref={(el) => {
                      phoneLayersRef.current[index] = el;
                    }}
                    className="image-container absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative h-[88%] w-[88%] max-w-[680px]">
                      <Image
                        src={step.phoneImage}
                        alt={step.label}
                        fill
                        className="object-contain object-center drop-shadow-[0_40px_72px_rgba(0,0,0,0.14)]"
                        sizes="(max-width: 1280px) 58vw, 680px"
                        priority={index === 0}
                      />
                      {/* Notification images removed to keep phone visually dominant */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
