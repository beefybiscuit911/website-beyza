import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    slug: "benefits-of-extracurricular-activities",
    title: "10 Benefits of Extracurricular Activities for Children",
    excerpt: "Discover how extracurricular activities can boost your child's confidence, social skills, and academic performance.",
    category: "Parenting Tips",
    author: "Dr. Sarah Johnson",
    readTime: "5 min read",
    date: "2024-01-15",
    image: "🎯",
  },
  {
    id: 2,
    slug: "choosing-right-sport-for-your-child",
    title: "How to Choose the Right Sport for Your Child",
    excerpt: "A comprehensive guide to matching your child's interests and abilities with the perfect sport.",
    category: "Sports",
    author: "Coach Michael Thompson",
    readTime: "7 min read",
    date: "2024-01-10",
    image: "⚽",
  },
  {
    id: 3,
    slug: "stem-activities-at-home",
    title: "Fun STEM Activities You Can Do at Home",
    excerpt: "Easy and engaging science experiments and coding activities that spark curiosity.",
    category: "STEM",
    author: "Emma Wilson",
    readTime: "6 min read",
    date: "2024-01-05",
    image: "🔬",
  },
];

const BlogHighlightsSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-width">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              From Our Blog
            </h2>
            <p className="text-muted-foreground">
              Tips, guides, and insights for parents
            </p>
          </div>
          <Button variant="tealOutline" asChild>
            <Link to="/blog">
              View All Articles
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-coral-light/30 to-teal-light/30 flex items-center justify-center">
                <span className="text-6xl">{post.image}</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {post.category}
                </span>
                
                <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHighlightsSection;
