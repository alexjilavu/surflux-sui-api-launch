import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Floating CTA */}
      <div className="hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className={`transition-all duration-300 ${isExpanded ? 'w-80' : 'w-16'}`}>
          {!isExpanded ? (
            // Collapsed state
            <button
              onClick={() => setIsExpanded(true)}
              className="w-16 h-16 bg-gradient-to-r from-surflux-aqua to-surflux-turquoise rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <Calendar className="text-white group-hover:scale-110 transition-transform" size={24} />
            </button>
          ) : (
            // Expanded state
            <div className="bg-white rounded-2xl shadow-xl border border-border p-6 relative">
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-3 right-3 text-foreground-muted hover:text-foreground"
              >
                <X size={20} />
              </button>
              
              <div className="mb-4">
                <h3 className="font-semibold text-foreground mb-2">Ready to get started?</h3>
                <p className="text-sm text-foreground-muted">
                  Book a demo or contact our team to learn more about Surflux.
                </p>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full btn-gradient flex items-center gap-2 justify-center"
                  size="sm"
                >
                  <Calendar size={16} />
                  Book a Demo
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white flex items-center gap-2 justify-center"
                  size="sm"
                >
                  <MessageCircle size={16} />
                  Contact Us
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Floating CTA */}
      <div className="lg:hidden fixed bottom-6 left-4 right-4 z-40">
        <div className="bg-gradient-to-r from-surflux-aqua to-surflux-turquoise rounded-2xl shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <div className="font-semibold text-sm">Ready to build on Sui?</div>
              <div className="text-xs opacity-90">Get started with 1M free credits</div>
            </div>
            <div className="flex gap-2">
              <Button 
                size="sm"
                className="bg-white text-surflux-aqua hover:bg-gray-100 text-xs px-3 py-2"
              >
                Demo
              </Button>
              <Button 
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-surflux-aqua text-xs px-3 py-2"
              >
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;