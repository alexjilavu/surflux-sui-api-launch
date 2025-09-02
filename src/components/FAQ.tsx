import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Surflux?",
      answer: "Surflux is a high-performance, developer-first Sui API provider that offers fast, reliable access to Sui blockchain data. We provide low-latency infrastructure designed for builders and institutions who need enterprise-grade blockchain data access."
    },
    {
      question: "How is Surflux different from running my own node?",
      answer: "Running your own Sui node requires significant infrastructure, maintenance, and expertise. Surflux provides instant access to optimized Sui data with 99.99% uptime, global edge locations, and comprehensive APIs - all without the operational overhead of managing blockchain infrastructure."
    },
    {
      question: "Which networks do you support?",
      answer: "Surflux currently supports Sui Mainnet and Testnet with full API coverage. We're continuously expanding our network support and adding new features based on developer feedback and ecosystem needs."
    },
    {
      question: "Do you offer SDKs?",
      answer: "Yes! We provide comprehensive SDKs for JavaScript/TypeScript, Python, and REST APIs with detailed documentation and examples. Our SDKs are designed to make integration as simple as possible while providing full access to Sui blockchain data."
    },
    {
      question: "Can I migrate from another provider?",
      answer: "Absolutely! We offer migration assistance and our APIs are designed to be compatible with standard Sui RPC methods. Our team can help you migrate your existing applications with minimal code changes and provide guidance throughout the process."
    },
    {
      question: "Is there a free Sui API tier?",
      answer: "Yes! Our Starter plan includes 1M API requests per month completely free, with access to core Sui API functionality. This is perfect for development, testing, and small applications. No credit card required to get started."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-surflux-aqua to-surflux-turquoise bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-foreground-muted">
            Everything you need to know about Surflux Sui API
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/60 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-surflux-aqua flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-surflux-aqua flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-foreground-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* JSON-LD for FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default FAQ;