import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Mum of 2",
    content: "ParentGO has been revolutionary for our family! We've discovered wonderful activities for our children. The booking process is so easy.",
    rating: 5,
    avatar: "SM",
  },
  {
    id: 2,
    name: "David T.",
    role: "Dad of 3",
    content: "As a busy parent, finding activities that fit our schedule is so easy. My children have tried everything from art classes to coding camps!",
    rating: 5,
    avatar: "DT",
  },
  {
    id: 3,
    name: "Emily L.",
    role: "Mum of 1",
    content: "The quality of activity providers on the platform is excellent. Every experience has been professional and my daughter absolutely loves her weekly dance lessons.",
    rating: 5,
    avatar: "EL",
  },
];

const stats = [
  { value: "10,000+", label: "Happy Families" },
  { value: "500+", label: "Activities" },
  { value: "100+", label: "Verified Providers" },
  { value: "4.9/5", label: "Average Rating" },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-primary to-coral-dark rounded-3xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Families Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of families experiencing the joy of discovering perfect activities for their children
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 shadow-soft card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-sunshine text-sunshine"
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
