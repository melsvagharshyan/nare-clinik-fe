import { CtaSection } from "./landing/cta-section";
import { GallerySection } from "./landing/gallery-section";
import { HeroSection } from "./landing/hero-section";
import { HighlightsSection } from "./landing/highlights-section";
import ServicesMarquee from "./landing/services-marquee";
import { ServicesSection } from "./landing/services-section";
import { SiteFooter } from "./landing/site-footer";
import { SiteHeader } from "./landing/site-header";
import { SkipToContent } from "./landing/skip-to-content";
import { TestimonialsSlider } from "./landing/testimonials-slider";

export function DentalClinicLanding() {
  return (
    <div className="min-h-full bg-dental-cream text-[#1e1e1e]">
      <SkipToContent />
      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <HeroSection />
        <ServicesMarquee />
        <HighlightsSection />
        <GallerySection />
        <ServicesSection />
        <TestimonialsSlider />
        <CtaSection />
        <SiteFooter />
      </main>
    </div>
  );
}
