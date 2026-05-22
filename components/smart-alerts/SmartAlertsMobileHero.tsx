"use client";

import Image from "next/image";
import {
  FLOATING_ALERT_CARDS,
  SMART_ALERTS_HERO,
  HERO_PHONE_IMAGE,
} from "@/lib/smart-alerts/constants";
import { CinematicAtmosphere } from "./CinematicAtmosphere";
import { FloatingAlertCard } from "./FloatingAlertCard";

export function SmartAlertsMobileHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F9FAFB] pt-[88px] pb-12 lg:hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('/assets/smartAlert/bgImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      <CinematicAtmosphere variant="hero" />
      <div className="relative z-10 mx-auto w-full max-w-[480px] px-6 text-center">
        <h1 className="text-[32px] leading-[1.2] font-medium text-black">
          {SMART_ALERTS_HERO.titleLead}
          <span className="text-[#CA3604]">{SMART_ALERTS_HERO.titleAccent}</span>
        </h1>
        <p className="mx-auto mt-3 max-w-[340px] text-[15px] leading-[1.55] font-light text-[#4B5563]">
          {SMART_ALERTS_HERO.subtitle}
        </p>

        <div className="relative mx-auto mt-8 w-full max-w-[360px]">
          <div className="mx-auto w-full max-w-[360px]">
            <Image
              src={HERO_PHONE_IMAGE}
              alt="Dejoule smart alert on mobile"
              width={800}
              height={900}
              className="mx-auto h-auto w-full select-none drop-shadow-[0_28px_56px_rgba(0,0,0,0.14)]"
              priority
              sizes="90vw"
            />
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {FLOATING_ALERT_CARDS.map((card) => (
            <FloatingAlertCard
              key={card.id}
              dataCard={card.id}
              label={card.label}
              title={card.title}
              description={card.description}
              layout="stacked"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
