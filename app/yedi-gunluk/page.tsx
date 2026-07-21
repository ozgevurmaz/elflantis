import { AboutSection } from "@/components/yedi-gunluk/AboutSection";
import { CTASection } from "@/components/yedi-gunluk/CTASection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/yedi-gunluk/HeroSection";
import { JourneySection } from "@/components/yedi-gunluk/JourneySection";
import { WhoIsItForSection } from "@/components/yedi-gunluk/WhoIsItForSection";

export default function YediGunlukPage() {
  return (
    <main>
      <HeroSection />
      <JourneySection />
      <WhoIsItForSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
