import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const codeSnippet = `// Connect to Surflux Sui API
const surflux = new SurfluxClient({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

// Get latest blocks
const blocks = await surflux.getBlocks({
  limit: 10,
  order: 'desc'
});

// Query NFT collections
const nfts = await surflux.getNFTs({
  owner: '0x1234...',
  collection: 'SuiFrens'
});

console.log('Connected to Sui via Surflux!');`;

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < codeSnippet.length) {
        setTypedText(codeSnippet.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Surflux – The Fastest{' '}
                <span className="bg-gradient-to-r from-surflux-aqua to-surflux-turquoise bg-clip-text text-transparent">
                  Sui API
                </span>{' '}
                for Developers
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-muted">
                Build on Sui. Build with Surflux
              </h2>
              <p className="text-lg text-foreground-light max-w-xl leading-relaxed">
                Surflux is the fastest, developer-first Sui API. Access live and historical Sui blockchain data with low-latency, reliable infrastructure designed for builders and institutions.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="btn-gradient flex items-center gap-2"
              >
                <Calendar size={20} />
                Book a Demo
                <ArrowRight size={16} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Start Building
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Column - Code Demo */}
          <div className="lg:block">
            <div className="code-window relative">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4">surflux-api-demo.js</span>
              </div>
              <pre className="text-sm leading-relaxed">
                <code>
                  {typedText}
                  {isTyping && <span className="typing-cursor"></span>}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;