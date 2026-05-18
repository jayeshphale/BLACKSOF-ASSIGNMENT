import { Hero } from "@/components/hero";
import { AlertsRedefineSection } from "@/components/sections/alerts-redefine";
import { ConnectCtaSection } from "@/components/sections/connect-cta";
import { SiteFooter } from "@/components/sections/footer";
import { FeatureShowcaseSection } from "@/components/sections/feature-showcase";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#F9FAFB]">
        <Hero />
        <AlertsRedefineSection />
        <FeatureShowcaseSection />
        <ConnectCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
