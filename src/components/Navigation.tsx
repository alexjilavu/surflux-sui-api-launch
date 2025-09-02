import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-surflux-aqua to-surflux-turquoise rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">Surflux</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="https://buidly.gitbook.io/buidly-docs/get-started" 
              className="text-foreground-muted hover:text-foreground transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              Docs & Resources
            </a>
            <a 
              href="#pricing" 
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a 
              href="#blog" 
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              Blog
            </a>
            <a 
              href="#contact" 
              className="btn-gradient text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Contact Us
            </a>
            <a 
              href="/login" 
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              Login
            </a>
            <Button 
              className="bg-gradient-to-r from-surflux-aqua to-surflux-turquoise text-white hover:from-primary-hover hover:to-secondary-hover"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground-muted hover:text-foreground p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-border">
              <a 
                href="https://buidly.gitbook.io/buidly-docs/get-started" 
                className="block px-3 py-2 text-foreground-muted hover:text-foreground transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                Docs & Resources
              </a>
              <a 
                href="#pricing" 
                className="block px-3 py-2 text-foreground-muted hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a 
                href="#blog" 
                className="block px-3 py-2 text-foreground-muted hover:text-foreground transition-colors"
              >
                Blog
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-foreground-muted hover:text-foreground transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="/login" 
                className="block px-3 py-2 text-foreground-muted hover:text-foreground transition-colors"
              >
                Login
              </a>
              <Button 
                className="w-full mt-2 bg-gradient-to-r from-surflux-aqua to-surflux-turquoise text-white"
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;