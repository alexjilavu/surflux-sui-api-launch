import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import Metrics from '@/components/Metrics';
import TechShowcase from '@/components/TechShowcase';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Blog from '@/components/Blog';
import FreeTrialBanner from '@/components/FreeTrialBanner';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <main>
        <Hero />
        
        {/* Value Proposition */}
        <ValueProposition />
        
        {/* Performance Metrics */}
        <Metrics />
        
        {/* Tech Showcase */}
        <TechShowcase />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Pricing */}
        <Pricing />
        
        {/* Blog */}
        <Blog />
        
        {/* Free Trial Banner */}
        <FreeTrialBanner />
        
        {/* FAQ */}
        <FAQ />
        
        {/* Final CTA */}
        <FinalCTA />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
};

export default Index;
