import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-families.jpg";

const HeroSection = () => {
  const handleDownloadApp = () => {
    toast.success("App download link sent to your email!", {
      description: "Check your email for App Store and Google Play links."
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-coral-light/20 to-background">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sunshine/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-lavender/20 rounded-full blur-2xl" />
      
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sunshine/20 text-accent-foreground mb-6">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium">Trusted by 10,000+ families</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Discover{" "}
              <span className="text-primary">Wonderful Activities</span>{" "}
              for Your Children
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              From sports to arts, music to science — find age-appropriate activities to help your children learn, grow, and have fun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link to="/activities">
                  Discover Activities
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="tealOutline" size="xl" onClick={handleDownloadApp}>
                <Download size={20} />
                Download App
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Activities</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Cities</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">4.9★</p>
                <p className="text-sm text-muted-foreground">App Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Happy families enjoying activities together - children playing sports, arts activities and fun"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-medium animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Art Workshop</p>
                  <p className="text-sm text-muted-foreground">Tomorrow, 3:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-medium animate-bounce-slow" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sunshine/30 flex items-center justify-center">
                  <span className="text-2xl">⚽</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Football Camp</p>
                  <p className="text-sm text-muted-foreground">Ages 5-8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
