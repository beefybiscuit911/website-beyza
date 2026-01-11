import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Users, Calendar, ArrowRight, Heart } from "lucide-react";
import categoryArts from "@/assets/category-arts.jpg";
import categorySports from "@/assets/category-sports.jpg";
import categoryMusic from "@/assets/category-music.jpg";

// Sample activities to show at the bottom
const suggestedActivities = [
  {
    id: 1,
    title: "Creative Art Workshop",
    category: "Arts & Crafts",
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
    location: "Hackney, London",
    ageRange: "Ages 6-12",
    price: "£35/session",
    rating: 5.0,
    reviews: 89,
    image: categoryMusic,
  },
];

const MyBookings = () => {
  // For demo purposes, we'll show no bookings
  // In a real app, this would fetch from localStorage or API
  const bookings: any[] = [];

  return (
    <Layout>
      <SEOHead
        title="My Bookings - ParentGO"
        description="View and manage your activity bookings on ParentGO."
        canonical="/bookings"
      />

      <section className="section-padding bg-background">
        <div className="container-width max-w-6xl">
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold text-foreground mb-2">
              My Bookings
            </h1>
            <p className="text-muted-foreground">
              Manage your activity bookings and upcoming sessions
            </p>
          </div>

          {/* Bookings Container */}
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-12">
            {bookings.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-xl font-display font-semibold text-foreground">
                  No active bookings :(.
                </p>
                <p className="text-muted-foreground mt-2 mb-6">
                  Start booking activities to see them here
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/activities">
                    Browse Activities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-card rounded-xl p-6 shadow-soft border border-border"
                  >
                    {/* Booking content would go here */}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Suggested Activities Section */}
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Discover More Activities
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore activities that might interest you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {suggestedActivities.map((activity) => (
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
                    <Button variant="tealOutline" size="sm" asChild>
                      <Link to="/activities">View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/activities">
                Show More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MyBookings;
