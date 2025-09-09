import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LogoMarquee from '@/components/LogoMarquee';
import FeaturesSection from '@/components/FeaturesSection';
import UniqueFeatures from '@/components/UniqueFeatures';
import WaveGoodbyeSection from '@/components/WaveGoodbyeSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LogoMarquee />
      <FeaturesSection />
      <UniqueFeatures />
      <WaveGoodbyeSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
