import { Button } from '@/components/ui/button';
import { Check, Star, ArrowRight, Calendar } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for getting started with Sui development",
      features: [
        "1M API requests/month",
        "Basic Sui API access",
        "Community support",
        "Standard rate limits",
        "Basic documentation"
      ],
      cta: "Sign Up Free",
      popular: false
    },
    {
      name: "Pro", 
      price: "$49",
      period: "per month",
      description: "For growing projects and production applications",
      features: [
        "50M API requests/month",
        "Full Sui API access",
        "Email support",
        "Higher rate limits",
        "Advanced analytics",
        "WebSocket connections",
        "Historical data access"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large-scale applications and institutions",
      features: [
        "Unlimited API requests",
        "Dedicated infrastructure", 
        "99.99% SLA guarantee",
        "Priority support",
        "Custom integrations",
        "On-premise deployment",
        "Dedicated account manager"
      ],
      cta: "Book a Demo",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, transparent pricing for{' '}
            <span className="bg-gradient-to-r from-surflux-aqua to-surflux-turquoise bg-clip-text text-transparent">
              builders of all sizes
            </span>
          </h2>
          <p className="text-xl text-foreground-muted">
            For builders of all sizes
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-surflux-aqua shadow-xl' 
                  : 'border-border hover:border-surflux-turquoise'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-surflux-aqua to-surflux-turquoise text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period !== "contact us" && (
                    <span className="text-foreground-muted ml-2">/{plan.period}</span>
                  )}
                </div>
                <p className="text-foreground-light">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-surflux-aqua flex-shrink-0" />
                    <span className="text-foreground-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'btn-gradient' 
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
              >
                {plan.name === "Enterprise" ? (
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {plan.cta}
                  </div>
                ) : (
                  plan.cta
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="bg-gradient-to-r from-surflux-aqua to-surflux-turquoise rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">
            Start your free Sui API trial – 1M credits
          </h3>
          <p className="text-lg opacity-90 mb-6">
            No credit card required • Start building in seconds
          </p>
          <Button 
            size="lg"
            className="bg-white text-surflux-aqua hover:bg-gray-100 font-medium"
          >
            Start Now
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;