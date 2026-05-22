import { HomeHero } from "@/components/hero/HomeHero";
import { AlertsInActionSection } from "@/components/smart-alerts/AlertsInActionSection";
import { ConnectCtaSection } from "@/components/sections/connect-cta";
import { SiteFooter } from "@/components/sections/footer";
import { FeatureShowcaseSection } from "@/components/sections/feature-showcase";

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full overflow-x-hidden bg-[#F9FAFB]">
        <HomeHero />
        <FeatureShowcaseSection />
        <AlertsInActionSection />
        <ConnectCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
