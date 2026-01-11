import { Search, Calendar, Sparkles, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover Activities",
    description: "Explore hundreds of activities by category, location, age group, and schedule that fits your family.",
    color: "bg-coral/10 text-primary",
  },
  {
    icon: Calendar,
    title: "Instant Booking",
    description: "Reserve your spot in just a few clicks. Get instant confirmation and calendar reminders.",
    color: "bg-teal/10 text-secondary",
  },
  {
    icon: Sparkles,
    title: "Enjoy the Experience",
    description: "Watch your children learn, grow, and create lasting memories with wonderful experiences.",
    color: "bg-sunshine/20 text-accent-foreground",
  },
  {
    icon: Star,
    title: "Share Your Review",
    description: "Share your experience and help other families discover the best activities.",
    color: "bg-lavender/30 text-foreground",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How ParentGO Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finding and booking the perfect activities for your children has never been easier
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 shadow-soft card-hover text-center">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4`}>
                  <step.icon size={28} />
                </div>
                
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
