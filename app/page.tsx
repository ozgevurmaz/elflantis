import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { WhoIsItForSection } from "@/components/WhoIsItForSection";

export default function Home() {
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
