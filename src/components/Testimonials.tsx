import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Surflux has transformed how we build on Sui. The API speed and reliability are unmatched. Our development velocity increased by 300% after switching.",
      author: "Sarah Chen",
      title: "CTO",
      company: "SuiSwap",
      logo: "/placeholder-logo-1.png",
      rating: 5
    },
    {
      quote: "The developer experience is incredible. From documentation to support, everything is designed with developers in mind. Highly recommended for any Sui project.",
      author: "Marcus Rodriguez", 
      title: "Lead Developer",
      company: "NextGen DeFi",
      logo: "/placeholder-logo-2.png",
      rating: 5
    },
    {
      quote: "We needed enterprise-grade infrastructure for our institutional clients. Surflux delivered beyond our expectations with 99.99% uptime and incredible support.",
      author: "Emily Wang",
      title: "Head of Engineering",
      company: "Sui Capital",
      logo: "/placeholder-logo-3.png", 
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-surflux-aqua to-surflux-turquoise bg-clip-text text-transparent">
              leading teams
            </span>
          </h2>
          <p className="text-xl text-foreground-muted">
            See what developers and teams are saying about Surflux
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-surflux-turquoise transition-all duration-300 hover:scale-105"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground-muted leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-surflux-aqua to-surflux-turquoise rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-foreground-light">
                    {testimonial.title} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Structured Data for Reviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Surflux",
              "review": testimonials.map(testimonial => ({
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": testimonial.rating,
                  "bestRating": "5"
                },
                "reviewBody": testimonial.quote,
                "author": {
                  "@type": "Person",
                  "name": testimonial.author
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default Testimonials;