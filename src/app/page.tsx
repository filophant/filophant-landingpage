import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { TechSection } from "@/components/TechSection";
import { PricingSection } from "@/components/PricingSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PainPointsSection />
        <TechSection />
        <PricingSection />
      </main>
      <FooterSection />
    </>
  );
}
