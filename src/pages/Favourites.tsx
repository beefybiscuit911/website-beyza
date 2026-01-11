import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { useFavourites } from "@/hooks/useFavourites";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, MapPin, Users, ArrowRight, Star } from "lucide-react";
import { toast } from "sonner";

const Favourites = () => {
  const { favourites, removeFavourite } = useFavourites();

  const handleRemoveFavourite = (activityId: number, title: string) => {
    removeFavourite(activityId);
    toast.info(`"${title}" removed from favourites`);
  };

  return (
    <Layout>
      <SEOHead
        title="Favourites - ParentGO"
        description="View and manage your favourite activities on ParentGO."
        canonical="/favourites"
      />

      <section className="section-padding bg-background">
        <div className="container-width max-w-6xl">
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold text-foreground mb-2">
              My Favourites
            </h1>
            <p className="text-muted-foreground">
              Activities you've saved for later
            </p>
          </div>

          {favourites.length === 0 ? (
            <div className="bg-muted/50 rounded-2xl p-16 text-center">
              <Heart className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                No favourites yet
              </h2>
              <p className="text-muted-foreground mb-6">
                Start exploring activities and add them to your favourites!
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/activities">
                  Explore Activities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favourites.map((activity) => (
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
                      onClick={() => handleRemoveFavourite(activity.id, activity.title)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                    >
                      <Heart size={18} className="fill-current" />
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
                      <Button variant="tealOutline" size="sm" asChild>
                        <Link to="/activities">View Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Favourites;
