import CTA from '@/components/cta';
import FeaturesSection from '@/components/features-section';
import HeroSection from '@/components/hero-section';
import PricingSection from '@/components/pricing-section';
import TestimonialSection from '@/components/testimonial-section';

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialSection />
      <CTA />
    </div>
  );
}
