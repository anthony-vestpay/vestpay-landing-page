import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { LogosSection } from "@/components/logos-section";
import { ProblemSection } from "@/components/problem-section";
import { FeaturesSection } from "@/components/features-section";
import { RulesetSection } from "@/components/ruleset-section";
import { ApiSection } from "@/components/api-section";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LogosSection />
      <ProblemSection />
      <FeaturesSection />
      <RulesetSection />
      <ApiSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
