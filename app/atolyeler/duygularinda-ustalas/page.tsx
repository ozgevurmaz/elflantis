import type { Metadata } from "next";
import Script from "next/script";

import { AudienceSection } from "@/components/atolyeler/duygularinda-ustalas/AudienceSection";
import { LearnSection } from "@/components/atolyeler/duygularinda-ustalas/LearnSection";
import { OutcomeSection } from "@/components/atolyeler/duygularinda-ustalas/OutcomeSection";
import { PhilosophySection } from "@/components/atolyeler/duygularinda-ustalas/PhilosophySection";
import { ProcessSection } from "@/components/atolyeler/duygularinda-ustalas/ProcessSection";
import { WorkshopHero } from "@/components/atolyeler/duygularinda-ustalas/WorkshopHero";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG, WORKSHOP_SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: WORKSHOP_SEO.title,
  description: WORKSHOP_SEO.description,
  alternates: {
    canonical: `${SITE_CONFIG.url}/atolyeler/duygularinda-ustalas`,
  },
  openGraph: {
    title: WORKSHOP_SEO.title,
    description: WORKSHOP_SEO.description,
    url: `${SITE_CONFIG.url}/atolyeler/duygularinda-ustalas`,
    siteName: SITE_CONFIG.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: WORKSHOP_SEO.title,
    description: WORKSHOP_SEO.description,
  },
};

export default function DuygulardaUstalasPage() {
  return (
    <main>
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      <WorkshopHero />
      <AudienceSection />
      <LearnSection />
      <ProcessSection />
      <OutcomeSection />
      <PhilosophySection />
      <Footer />
    </main>
  );
}
