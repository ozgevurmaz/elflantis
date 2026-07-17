import type { Metadata } from "next";
import Script from "next/script";

import { ClosingSection } from "@/components/on-gorusme/ClosingSection";
import { ExpectationSection } from "@/components/on-gorusme/ExpectationSection";
import { FitSection } from "@/components/on-gorusme/FitSection";
import { OnGorusmeHero } from "@/components/on-gorusme/OnGorusmeHero";
import { ProcessSection } from "@/components/on-gorusme/ProcessSection";
import { QuestionSection } from "@/components/on-gorusme/QuestionSection";
import { TransformationSection } from "@/components/on-gorusme/TransformationSection";
import { TruthSection } from "@/components/on-gorusme/TruthSection";
import { Footer } from "@/components/Footer";
import { PRE_CONSULTATION_SEO, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: PRE_CONSULTATION_SEO.title,
  description: PRE_CONSULTATION_SEO.description,
  alternates: {
    canonical: `${SITE_CONFIG.url}/on-gorusme`,
  },
  openGraph: {
    title: PRE_CONSULTATION_SEO.title,
    description: PRE_CONSULTATION_SEO.description,
    url: `${SITE_CONFIG.url}/on-gorusme`,
    siteName: SITE_CONFIG.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PRE_CONSULTATION_SEO.title,
    description: PRE_CONSULTATION_SEO.description,
  },
};

export default function OnGorusmePage() {
  return (
    <main>
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      <OnGorusmeHero />
      <QuestionSection />
      <TruthSection />
      <TransformationSection />
      <ProcessSection />
      <FitSection />
      <ExpectationSection />
      <ClosingSection />
      <Footer />
    </main>
  );
}
