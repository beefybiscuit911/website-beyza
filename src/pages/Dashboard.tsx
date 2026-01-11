import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Heart, Settings } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <SEOHead
        title="Dashboard - ParentGO"
        description="Your ParentGO dashboard - manage your bookings, favourites, and account settings."
        canonical="/dashboard"
      />

      <section className="section-padding bg-background">
        <div className="container-width max-w-6xl">
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold text-foreground mb-2">
              Welcome back, {user?.name || "User"}!
            </h1>
            <p className="text-muted-foreground">
              Manage your bookings, favourites, and account settings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/bookings" className="bg-card rounded-2xl p-6 shadow-soft card-hover">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h2 className="font-display text-xl font-bold text-foreground mb-2">
                My Bookings
              </h2>
              <p className="text-muted-foreground text-sm">
                View and manage your activity bookings
              </p>
            </Link>

            <Link to="/favourites" className="bg-card rounded-2xl p-6 shadow-soft card-hover">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h2 className="font-display text-xl font-bold text-foreground mb-2">
                Favourites
              </h2>
              <p className="text-muted-foreground text-sm">
                Activities you've saved for later
              </p>
            </Link>

            <Link to="/settings" className="bg-card rounded-2xl p-6 shadow-soft card-hover">
              <Settings className="w-12 h-12 text-primary mb-4" />
              <h2 className="font-display text-xl font-bold text-foreground mb-2">
                Settings
              </h2>
              <p className="text-muted-foreground text-sm">
                Update your account information
              </p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
