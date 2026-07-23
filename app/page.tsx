import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { MyApproachSection } from "@/components/MyApproachSection";
import { ShortDescriptionSection } from "@/components/ShortDescriptionSection";
import { WhatIsRegulationCoachingSection } from "@/components/WhatIsRegulationCoachingSection";
import { WhoIsItForSection } from "@/components/WhoIsItForSection";
import { WhyNervousSystemSection } from "@/components/WhyNervousSystemSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShortDescriptionSection />
      <AboutSection />
      <WhyNervousSystemSection />
      <WhatIsRegulationCoachingSection />
      <WhoIsItForSection />
      <MyApproachSection />
      <CTASection />
      <Footer />
    </main>
  );
}
