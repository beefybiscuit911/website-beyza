import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { AppInstallModal } from "@/components/auth/AppInstallModal";

const providerBenefits = [
  "Reach thousands of local families",
  "Easy scheduling and booking management",
  "Secure payment processing",
  "Marketing tools and analytics",
];

const CTASection = () => {
  const [appInstallModalOpen, setAppInstallModalOpen] = useState(false);

  const handleDownloadApp = () => {
    setAppInstallModalOpen(true);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Parents */}
          <div className="bg-gradient-to-br from-primary to-coral-dark rounded-3xl p-8 md:p-12 text-primary-foreground">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to Discover Wonderful Activities?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Download our app and start discovering hundreds of activities for your children. Book instantly and create lasting memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/activities">
                  View Activities
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" onClick={handleDownloadApp}>
                Download App
              </Button>
            </div>
          </div>

          {/* For Providers */}
          <div className="bg-gradient-to-br from-secondary to-teal-dark rounded-3xl p-8 md:p-12 text-secondary-foreground">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Are You an Activity Provider?
            </h2>
            <ul className="space-y-3 mb-6">
              {providerBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-sunshine flex-shrink-0" />
                  <span className="text-secondary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/providers">
                Apply Now
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <AppInstallModal open={appInstallModalOpen} onOpenChange={setAppInstallModalOpen} />
    </section>
  );
};

export default CTASection;
