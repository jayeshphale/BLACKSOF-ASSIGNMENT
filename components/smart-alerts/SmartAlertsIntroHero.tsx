"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import {
  FLOATING_ALERT_CARDS,
  HERO_PHONE_IMAGE,
  SMART_ALERTS_HERO,
} from "@/lib/smart-alerts/constants";
import {
  INTRO_PIN_SCROLL,
  SCRUB_INTRO,
} from "@/lib/smart-alerts/scroll-config";
import { CinematicAtmosphere } from "./CinematicAtmosphere";
import { FloatingAlertCard } from "./FloatingAlertCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SmartAlertsIntroHero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const pin = pinRef.current;
      const headline = headlineRef.current;
      const scene = sceneRef.current;
      const phone = phoneRef.current;
      if (!track || !pin || !headline || !scene || !phone) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        "[data-alert-card]",
        scene,
      );

      cards.forEach((card, i) => {
        const meta = FLOATING_ALERT_CARDS[i];
        if (meta) gsap.set(card, meta.motion.from);
      });

      gsap.set(scene, { autoAlpha: 1, scale: 1 });
      // Don't set `y` here — leave vertical translate to CSS to avoid jump on refresh
      gsap.set(phone, { scale: 1, x: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "none", force3D: true },
        scrollTrigger: {
          trigger: track,
          start: "top top",
          end: () => `+=${INTRO_PIN_SCROLL}`,
          pin,
          pinSpacing: true,
          scrub: SCRUB_INTRO,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        headline,
        { y: -48, autoAlpha: 0, filter: "blur(3px)", duration: 0.26 },
        0.22,
      );

      tl.fromTo(phone, { scale: 0.96 }, { scale: 1, duration: 0.4 }, 0);

      // Slide the phone downward across the scrubbed intro timeline
      const sceneHeight = (scene as HTMLElement).clientHeight || window.innerHeight;
      // cap the vertical move so it doesn't go too far on large screens
      const phoneMove = Math.min(440, Math.round(sceneHeight * 0.36));
      tl.to(
        phone,
        { y: phoneMove, ease: "none", duration: 0.9 },
        0.12,
      );

      cards.forEach((card, i) => {
        const meta = FLOATING_ALERT_CARDS[i];
        if (!meta) return;
        const offset = 0.06 + i * 0.04;

        tl.fromTo(
          card,
          meta.motion.from,
          { ...meta.motion.mid, duration: 0.28 },
          offset,
        );
        tl.to(card, { ...meta.motion.to, duration: 0.32 }, offset + 0.28);
      });

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
    <div ref={trackRef} className="relative hidden w-full bg-[#F9FAFB] lg:block">
      <section
        ref={pinRef}
        className="relative grid h-screen w-full grid-rows-[auto_1fr] overflow-hidden bg-[#F9FAFB]"
        style={{
          backgroundImage: "url('/assets/smartAlert/bgImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CinematicAtmosphere variant="hero" />

        <div
          ref={headlineRef}
          className="relative z-20 mx-auto max-w-[920px] px-6 pt-[84px] pb-[200px] text-center xl:pt-[92px]"
        >
          <h1 className="text-[42px] leading-[70px] font-medium tracking-[-0.02em] text-black xl:text-[54px]">
            {SMART_ALERTS_HERO.titleLead}
            <span className="text-[#CA3604]">{SMART_ALERTS_HERO.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-3 max-w-[620px] text-[17px] leading-[1.55] font-light text-[#4B5563]">
            {SMART_ALERTS_HERO.subtitle}
          </p>
        </div>

        <div className="relative z-10 flex min-h-0 items-center justify-center px-6 pb-24">
          <div
            ref={sceneRef}
            className="relative h-[min(68vh,680px)] w-full max-w-[1080px] will-change-transform"
          >
            {FLOATING_ALERT_CARDS.map((card) => (
              <FloatingAlertCard
                key={card.id}
                dataCard={card.id}
                label={card.label}
                title={card.title}
                description={card.description}
                className={card.positionClass}
              />
            ))}

            <div
              ref={phoneRef}
              className="absolute top-1/2 left-1/2 z-30 w-[min(92%,780px)] -translate-x-1/2 -translate-y-[60%] will-change-transform xl:w-[min(820px,54vw)]"
            >
              <Image
                src={HERO_PHONE_IMAGE}
                alt="Dejoule smart alert on mobile"
                width={1200}
                height={1063}
                className="h-auto w-full select-none drop-shadow-[0_40px_80px_rgba(0,0,0,0.16)]"
                priority
                sizes="(max-width: 1280px) 54vw, 820px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
