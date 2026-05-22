"use client";

type CinematicAtmosphereProps = {
  variant?: "hero" | "sticky";
};

/** Light center, soft edge depth — matches dejoule.ai hero (no solid black blocks) */
const HERO_VIGNETTE =
  "radial-gradient(ellipse 85% 70% at 50% 52%, rgba(255, 255, 255, 0) 0%, rgba(249, 250, 251, 0.45) 50%, rgba(243, 244, 246, 0.9) 100%)";

const HERO_EDGE =
  "radial-gradient(ellipse 120% 80% at 50% 100%, rgba(229, 231, 235, 0.3) 0%, transparent 55%)";

const STICKY_PHONE_GLOW =
  "radial-gradient(ellipse 50% 60% at 58% 52%, rgba(202, 54, 4, 0.12) 0%, rgba(249, 250, 251, 0) 70%)";

export function CinematicAtmosphere({
  variant = "hero",
}: CinematicAtmosphereProps) {
  const isHero = variant === "hero";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {isHero ? (
        <>
          <div
            data-glow="center"
            className="absolute top-[54%] left-1/2 h-[min(88vw,700px)] w-[min(88vw,700px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(202, 54, 4, 0.14) 0%, rgba(202, 54, 4, 0.05) 40%, transparent 70%)",
            }}
          />
          <div className="absolute top-[20%] left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full border border-white/25 opacity-30" />
          <div className="absolute top-[16%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full border border-[#CA3604]/8 opacity-25" />
          <div
            data-hero-vignette
            className="absolute inset-0"
            style={{ background: HERO_VIGNETTE }}
          />
          <div
            className="absolute inset-0"
            style={{ background: HERO_EDGE }}
          />
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: STICKY_PHONE_GLOW }}
        />
      )}
    </div>
  );
}
