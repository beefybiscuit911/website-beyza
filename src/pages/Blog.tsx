import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";
import { Clock, User, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const blogPosts = [
  {
    id: 1,
    slug: "benefits-of-extracurricular-activities",
    title: "10 Benefits of Extracurricular Activities for Children",
    excerpt: "Discover how extracurricular activities can boost your child's confidence, social skills, and academic performance. Research shows that children who participate in structured activities develop better time management and leadership skills.",
    category: "Parenting Tips",
    author: "Dr. Sarah Johnson",
    readTime: "5 min read",
    date: "15 January 2024",
    image: "🎯",
    tags: ["parenting", "child development", "activities"],
  },
  {
    id: 2,
    slug: "choosing-right-sport-for-your-child",
    title: "How to Choose the Right Sport for Your Child",
    excerpt: "A comprehensive guide to matching your child's interests, personality, and physical abilities with the perfect sport. Learn about different sports and their benefits for various age groups.",
    category: "Sports",
    author: "Coach Michael Thompson",
    readTime: "7 min read",
    date: "10 January 2024",
    image: "⚽",
    tags: ["sports", "children's sports", "physical activity"],
  },
  {
    id: 3,
    slug: "stem-activities-at-home",
    title: "Fun STEM Activities You Can Do at Home",
    excerpt: "Easy and engaging science experiments and coding activities that spark curiosity in children of all ages. Turn your kitchen into a laboratory.",
    category: "STEM",
    author: "Emma Wilson",
    readTime: "6 min read",
    date: "5 January 2024",
    image: "🔬",
    tags: ["STEM", "science", "home activities"],
  },
  {
    id: 4,
    slug: "importance-of-creative-play",
    title: "The Importance of Creative Play in Child Development",
    excerpt: "Understand why unstructured creative play is essential for cognitive development, emotional regulation, and problem-solving skills in young children.",
    category: "Child Development",
    author: "Dr. David Brown",
    readTime: "8 min read",
    date: "28 December 2023",
    image: "🎨",
    tags: ["creativity", "play", "development"],
  },
  {
    id: 5,
    slug: "summer-camp-preparation-guide",
    title: "Comprehensive Guide to Preparing Your Child for Summer Camp",
    excerpt: "Everything you need to know to prepare your child for their first summer camp experience, from packing lists to emotional preparation tips.",
    category: "Summer Activities",
    author: "Camp Director James Wilson",
    readTime: "10 min read",
    date: "20 December 2023",
    image: "🏕️",
    tags: ["summer camp", "preparation", "outdoor"],
  },
  {
    id: 6,
    slug: "music-education-benefits",
    title: "Why Music Education Matters for Every Child",
    excerpt: "Research-backed reasons why learning a musical instrument enhances academic performance, creativity, and social-emotional development.",
    category: "Music",
    author: "Prof. Anna Williams",
    readTime: "6 min read",
    date: "15 December 2023",
    image: "🎵",
    tags: ["music", "education", "brain development"],
  },
];

const categories = [
  "All",
  "Parenting Tips",
  "Sports",
  "STEM",
  "Child Development",
  "Summer Activities",
  "Music",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Successfully subscribed to our newsletter!", {
        description: "Check your inbox for weekly parenting tips."
      });
      setEmail("");
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Blog - Parenting Tips & Activity Guides"
        description="Expert advice on children's activities, parenting tips, and guides to help your children thrive. Discover insights about sports, arts, STEM, and more."
        canonical="/blog"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-light/20 to-background section-padding py-12 md:py-16">
        <div className="container-width">
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              ParentGO Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert advice, tips, and guides to help your children discover their passions and reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding py-6 border-b border-border">
        <div className="container-width">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding py-12">
        <div className="container-width">
          <Link
            to={`/blog/${filteredPosts[0]?.slug}`}
            className="group block bg-card rounded-3xl overflow-hidden shadow-medium card-hover"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-coral-light/30 to-teal-light/30 flex items-center justify-center min-h-[300px]">
                <span className="text-8xl">{filteredPosts[0]?.image}</span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 w-fit">
                  Featured
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {filteredPosts[0]?.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {filteredPosts[0]?.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <User size={16} />
                    {filteredPosts[0]?.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {filteredPosts[0]?.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  Read More <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding pt-0">
        <div className="container-width">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
              >
                <div className="aspect-video bg-gradient-to-br from-coral-light/30 to-teal-light/30 flex items-center justify-center">
                  <span className="text-6xl">{post.image}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button 
              onClick={() => toast.info("Loading more articles...")}
              className="px-8 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-to-br from-primary to-coral-dark">
        <div className="container-width max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Get Parenting Tips in Your Inbox
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Subscribe to our newsletter for weekly children's activities, development insights, and special offers.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <button 
              type="submit"
              className="px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
