import type { Metadata } from "next";
import { AlertsInActionSection } from "@/components/smart-alerts/AlertsInActionSection";
import { FeatureShowcaseSection } from "@/components/sections/feature-showcase/FeatureShowcaseSection";
import { SmartAlertsCta } from "@/components/smart-alerts/SmartAlertsCta";
import { SmartAlertsIntroHero } from "@/components/smart-alerts/SmartAlertsIntroHero";
import { SmartAlertsMobileHero } from "@/components/smart-alerts/SmartAlertsMobileHero";
import { SmartAlertsRedefineSection } from "@/components/smart-alerts/SmartAlertsRedefineSection";
import { SmartAlertsStickyStory } from "@/components/smart-alerts/SmartAlertsStickyStory";
import { SiteFooter } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "DeJoule's AFDD-powered Smart Alerts",
  description:
    "Making alerts relevant, personalized, and directly actionable for your operations team.",
};

export default function SmartAlertsPage() {
  return (
    <>
      <main className="w-full overflow-x-hidden bg-[#F9FAFB] no-scrollbar">
        <SmartAlertsIntroHero />
        <SmartAlertsStickyStory />
        <FeatureShowcaseSection />
        <SmartAlertsMobileHero />
        <SmartAlertsRedefineSection />
        <AlertsInActionSection />
        <SmartAlertsCta />
      </main>
      <SiteFooter />
    </>
  );
}
