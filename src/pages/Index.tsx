import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ProductsGallery } from "@/components/ProductsGallery";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { Footer } from "@/components/Footer";
import { PurchaseNotification } from "@/components/PurchaseNotification";

const Index = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <PurchaseNotification />
      <HeroSection onCtaClick={scrollToPricing} />
      <WhyChooseSection onCtaClick={scrollToPricing} />
      <ProductsGallery onCtaClick={scrollToPricing} />
      <TestimonialsSection />
      <div ref={pricingRef}>
        <PricingSection />
      </div>
      <FAQSection onCtaClick={scrollToPricing} />
      <GuaranteeSection />
      <Footer />
    </main>
  );
};

export default Index;
