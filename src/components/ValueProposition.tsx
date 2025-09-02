import { Button } from '@/components/ui/button';
import { Zap, Code, Shield, Layers, ArrowRight } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-surflux-aqua" />,
      title: "Lightning-Fast API",
      description: "Real-time access to Sui blockchain data with ultra-low latency. Built for performance with global edge infrastructure."
    },
    {
      icon: <Code className="w-8 h-8 text-surflux-turquoise" />,
      title: "Developer-First", 
      description: "Intuitive, well-documented endpoints to speed up development. Comprehensive SDKs and examples to get you started instantly."
    },
    {
      icon: <Shield className="w-8 h-8 text-surflux-aqua" />,
      title: "Scalable & Reliable",
      description: "Enterprise-ready infrastructure you can trust. 99.99% uptime SLA with automatic failover and redundancy."
    },
    {
      icon: <Layers className="w-8 h-8 text-surflux-turquoise" />,
      title: "Complete Experience",
      description: "Everything you need to build and deploy Sui apps, all in one platform. From development to production deployment."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Supercharge your Sui development with{' '}
            <span className="bg-gradient-to-r from-surflux-aqua to-surflux-turquoise bg-clip-text text-transparent">
              Surflux
            </span>{' '}
            – Performant Sui API
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid mb-12">
          {features.map((feature, index) => (
            <div key={index} className="card-dark p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6">
          <p className="text-lg text-foreground-muted">
            Build, launch, and scale your app on Sui
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="btn-gradient flex items-center gap-2"
            >
              Start Building
              <ArrowRight size={16} />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Learn More
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;