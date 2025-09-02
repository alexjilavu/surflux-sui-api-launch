import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, TrendingUp, Clock, CheckCircle, Award, Users } from 'lucide-react';

const Metrics = () => {
  const stats = [
    {
      icon: <CheckCircle className="w-8 h-8 text-surflux-aqua" />,
      value: "99.99%",
      label: "Uptime",
      description: "Reliable infrastructure"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-surflux-turquoise" />,
      value: "99.99%", 
      label: "Success Rate",
      description: "High-quality responses"
    },
    {
      icon: <Clock className="w-8 h-8 text-surflux-aqua" />,
      value: "3x",
      label: "Faster API responses",
      description: "Ultra-low latency"
    },
    {
      icon: <Award className="w-8 h-8 text-surflux-turquoise" />,
      value: "Trusted by",
      label: "Sui Foundation",
      description: "Official partnership"
    },
    {
      icon: <Users className="w-8 h-8 text-surflux-aqua" />,
      value: "Working with",
      label: "the best teams on Sui",
      description: "Leading projects choose us"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-surflux-aqua to-surflux-turquoise bg-clip-text text-transparent">
              Surflux Performance Metrics
            </span>{' '}
            – High-Availability Sui API
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Custom made solutions just for you – Blockchain data delivered to you
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="metric-card text-center group hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground-muted mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-foreground-light">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="btn-gradient flex items-center gap-2"
            >
              <Calendar size={20} />
              Schedule a Call
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

export default Metrics;