import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const FreeTrialBanner = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-surflux-aqua to-surflux-turquoise text-white">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="text-yellow-300 fill-yellow-300" size={24} />
            <span className="text-lg font-medium">Free Trial Available</span>
            <Star className="text-yellow-300 fill-yellow-300" size={24} />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Try Surflux for free
          </h2>
          
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get 1M credits for free and get started in minutes! No credit card required, full API access, and comprehensive documentation to get you building immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg"
              className="bg-white text-surflux-aqua hover:bg-gray-100 font-medium px-8 py-4 text-lg"
            >
              Start Now
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-surflux-aqua px-8 py-4 text-lg"
            >
              Learn More
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-surflux-aqua px-8 py-4 text-lg"
            >
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">1M</div>
              <div className="text-sm opacity-90">Free API Credits</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">30s</div>
              <div className="text-sm opacity-90">Setup Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm opacity-90">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialBanner;