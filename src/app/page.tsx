import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { TechSection } from "@/components/TechSection";
import { PricingSection } from "@/components/PricingSection";
import { ContributeSection } from "@/components/ContributeSection";
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
        <ContributeSection />
      </main>
      <FooterSection />
    </>
  );
}
