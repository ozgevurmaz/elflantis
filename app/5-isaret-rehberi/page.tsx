import type { Metadata } from "next";

import { GuideHero } from "@/components/5-isaret-rehberi/GuideHero";
import { WorkshopCTASection } from "@/components/5-isaret-rehberi/WorkshopCTASection";
import { Footer } from "@/components/Footer";
import { GUIDE_SEO, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: GUIDE_SEO.title,
  description: GUIDE_SEO.description,
  alternates: {
    canonical: `${SITE_CONFIG.url}/5-isaret-rehberi`,
  },
  openGraph: {
    title: GUIDE_SEO.title,
    description: GUIDE_SEO.description,
    url: `${SITE_CONFIG.url}/5-isaret-rehberi`,
    siteName: SITE_CONFIG.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: GUIDE_SEO.title,
    description: GUIDE_SEO.description,
  },
};

export default function GuidePage() {
  return (
    <main>
      <GuideHero />
      <WorkshopCTASection />
      <Footer />
    </main>
  );
}
