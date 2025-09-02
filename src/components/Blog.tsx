import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with Sui API Development",
      excerpt: "Learn how to build your first Sui application using Surflux API with this comprehensive tutorial covering setup, authentication, and basic queries.",
      date: "Nov 28, 2024",
      author: "Alex Chen",
      category: "Tutorials",
      readTime: "8 min read"
    },
    {
      title: "Advanced Sui NFT Querying Techniques",
      excerpt: "Discover powerful patterns for querying NFT collections, tracking ownership changes, and building marketplace features with Sui blockchain data.",
      date: "Nov 25, 2024", 
      author: "Sarah Kim",
      category: "Guides",
      readTime: "12 min read"
    },
    {
      title: "Surflux Performance Benchmarks: 3x Faster Than Competition",
      excerpt: "Deep dive into our latest performance improvements and how Surflux delivers the fastest Sui API responses in the industry.",
      date: "Nov 22, 2024",
      author: "Dev Team",
      category: "Product Updates", 
      readTime: "6 min read"
    },
    {
      title: "The Future of Sui Ecosystem: Developer Insights",
      excerpt: "Analysis of the growing Sui ecosystem, emerging trends, and what developers should know about building on Sui in 2024 and beyond.",
      date: "Nov 20, 2024",
      author: "Mike Johnson",
      category: "Industry Insights",
      readTime: "10 min read"
    }
  ];

  const categories = ["Tutorials", "Guides", "Product Updates", "Industry Insights"];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Latest from our{' '}
            <span className="bg-gradient-to-r from-surflux-aqua to-surflux-turquoise bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Tutorials, guides, and insights to help you build better on Sui
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <span 
              key={category}
              className="px-4 py-2 bg-white/60 text-foreground-muted rounded-full text-sm border border-border hover:border-surflux-aqua hover:text-surflux-aqua transition-colors cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-surflux-turquoise transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="mb-4">
                <div className="flex items-center gap-4 text-sm text-foreground-light mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag size={14} />
                    <span className="text-surflux-aqua">{post.category}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-surflux-aqua transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground-light">{post.readTime}</span>
                  <div className="text-surflux-aqua group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Blog CTAs */}
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="btn-gradient flex items-center gap-2"
            >
              Browse all posts
              <ArrowRight size={16} />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Subscribe to Updates
            </Button>
          </div>
          <p className="text-sm text-foreground-light">
            Get the latest tutorials and updates delivered to your inbox
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;