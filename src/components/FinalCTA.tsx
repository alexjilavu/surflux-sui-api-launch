import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Ready to start{' '}
            <span className="bg-gradient-to-r from-surflux-aqua to-surflux-turquoise bg-clip-text text-transparent">
              building?
            </span>
          </h2>
          
          <p className="text-xl text-foreground-muted mb-12 max-w-2xl mx-auto">
            Join thousands of developers building the future on Sui with Surflux. Get started in seconds with our free tier, or book a demo to see how we can accelerate your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="btn-gradient flex items-center gap-3 px-8 py-4 text-lg"
            >
              <Calendar size={24} />
              Book a Demo
              <ArrowRight size={20} />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
            >
              Start for Free
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>

          <p className="text-sm text-foreground-light mt-6">
            1M free API credits • No credit card required • Full documentation included
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;