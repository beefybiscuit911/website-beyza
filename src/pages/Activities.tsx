import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Users, Filter, Search, Heart, X } from "lucide-react";
import { toast } from "sonner";
import categoryArts from "@/assets/category-arts.jpg";
import categorySports from "@/assets/category-sports.jpg";
import categoryMusic from "@/assets/category-music.jpg";
import categoryStem from "@/assets/category-stem.jpg";
import categoryOutdoor from "@/assets/category-outdoor.jpg";
import categoryDance from "@/assets/category-dance.jpg";

const allActivities = [
  {
    id: 1,
    title: "Creative Art Workshop",
    category: "Arts & Crafts",
    categoryId: "arts",
    location: "Camden, London",
    ageRange: "Ages 4-8",
    price: "£25/session",
    rating: 4.9,
    reviews: 128,
    image: categoryArts,
  },
  {
    id: 2,
    title: "Junior Football League",
    category: "Sports",
    categoryId: "sports",
    location: "Islington, London",
    ageRange: "Ages 5-10",
    price: "£20/session",
    rating: 4.8,
    reviews: 256,
    image: categorySports,
  },
  {
    id: 3,
    title: "Piano for Beginners",
    category: "Music",
    categoryId: "music",
    location: "Hackney, London",
    ageRange: "Ages 6-12",
    price: "£35/session",
    rating: 5.0,
    reviews: 89,
    image: categoryMusic,
  },
  {
    id: 4,
    title: "Coding Adventures",
    category: "STEM",
    categoryId: "stem",
    location: "Westminster, London",
    ageRange: "Ages 8-14",
    price: "£40/session",
    rating: 4.9,
    reviews: 167,
    image: categoryStem,
  },
  {
    id: 5,
    title: "Nature Explorers Camp",
    category: "Outdoor",
    categoryId: "outdoor",
    location: "Richmond Park",
    ageRange: "Ages 7-12",
    price: "£45/day",
    rating: 4.7,
    reviews: 203,
    image: categoryOutdoor,
  },
  {
    id: 6,
    title: "Ballet Fundamentals",
    category: "Dance",
    categoryId: "dance",
    location: "Kensington, London",
    ageRange: "Ages 3-7",
    price: "£30/session",
    rating: 4.9,
    reviews: 145,
    image: categoryDance,
  },
  {
    id: 7,
    title: "Ceramics & Sculpture",
    category: "Arts & Crafts",
    categoryId: "arts",
    location: "Shoreditch, London",
    ageRange: "Ages 6-14",
    price: "£28/session",
    rating: 4.8,
    reviews: 92,
    image: categoryArts,
  },
  {
    id: 8,
    title: "Basketball Academy",
    category: "Sports",
    categoryId: "sports",
    location: "Tower Hamlets, London",
    ageRange: "Ages 8-15",
    price: "£22/session",
    rating: 4.6,
    reviews: 178,
    image: categorySports,
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "arts", name: "Arts & Crafts" },
  { id: "sports", name: "Sports" },
  { id: "music", name: "Music" },
  { id: "stem", name: "STEM" },
  { id: "outdoor", name: "Outdoor" },
  { id: "dance", name: "Dance" },
];

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredActivities = allActivities
    .filter((activity) => {
      const matchesCategory = selectedCategory === "all" || activity.categoryId === selectedCategory;
      const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""));
        case "price-high":
          return parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, ""));
        case "rating":
          return b.rating - a.rating;
        default:
          return b.reviews - a.reviews;
      }
    });

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
      toast.info("Removed from favourites");
    } else {
      setFavorites([...favorites, id]);
      toast.success("Added to favourites!");
    }
  };

  const handleBooking = (activity: typeof allActivities[0]) => {
    toast.success(`Booking request received for "${activity.title}"!`, {
      description: "We'll get in touch with you shortly."
    });
  };

  return (
    <Layout>
      <SEOHead
        title="Discover Children's Activities"
        description="Discover hundreds of age-appropriate activities for children in your area. From sports to arts, STEM to music - find the perfect experience for your child."
        canonical="/activities"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-coral-light/20 to-background section-padding py-12 md:py-16">
        <div className="container-width">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Find the Perfect Activity
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of activities designed to help children learn, grow, and have fun.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-medium p-4 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <Button variant="hero" size="lg">
              <Filter size={18} />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding py-6 border-b border-border">
        <div className="container-width">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredActivities.length}</span> activities
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-xl bg-muted border-0 text-foreground"
            >
              <option value="recommended">Sort: Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {filteredActivities.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl font-display font-bold text-foreground mb-2">No activities found</p>
              <p className="text-muted-foreground mb-4">Try changing your search criteria.</p>
              <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-card/90 backdrop-blur text-sm font-medium">
                        {activity.category}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleFavorite(activity.id)}
                      className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        favorites.includes(activity.id)
                          ? "bg-primary text-primary-foreground"
                          : "bg-card/90 backdrop-blur text-muted-foreground hover:text-primary"
                      }`}
                    >
                      <Heart size={18} className={favorites.includes(activity.id) ? "fill-current" : ""} />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sunshine">★</span>
                      <span className="font-semibold">{activity.rating}</span>
                      <span className="text-muted-foreground text-sm">
                        ({activity.reviews} reviews)
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-foreground mb-2">
                      {activity.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={16} />
                        {activity.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users size={16} />
                        {activity.ageRange}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-primary text-lg">
                        {activity.price}
                      </p>
                      <Button variant="tealOutline" size="sm" onClick={() => handleBooking(activity)}>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More */}
          {filteredActivities.length > 0 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => toast.info("Loading more activities...")}
              >
                Load More Activities
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="section-padding bg-muted/50">
        <div className="container-width max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Find the Best Children's Activities Near You
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              At ParentGO, we understand how challenging it can be to find the right activities for your children. That's why we've curated a comprehensive selection of age-appropriate activities across various categories, including sports, arts, music, STEM, and outdoor adventures.
            </p>
            <p>
              Whether you're looking for weekly classes, weekend workshops, or summer camps, our platform connects you with passionate, verified providers committed to helping children learn and grow. All activities are reviewed and rated by parents like you, ensuring quality experiences for your family.
            </p>
            <p>
              Browse by location to find activities in your neighbourhood, or filter by age group to discover experiences perfectly suited to your child's developmental stage. From art classes for little ones to coding camps for teens, there's something for every young explorer on ParentGO.
            </p>
          </div>
          <div className="mt-8">
            <Link to="/blog" className="text-primary hover:underline font-medium">
              Read more parenting tips on our blog →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
