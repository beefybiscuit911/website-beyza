import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, TrendingUp, Calendar, DollarSign, Shield, Upload, X } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  {
    icon: Users,
    title: "Reach Thousands of Families",
    description: "Connect with parents actively searching for activities in your area.",
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Manage bookings, waiting lists, and schedules all in one place.",
  },
  {
    icon: DollarSign,
    title: "Secure Payments",
    description: "Get paid on time with our secure payment processing system.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Access marketing tools and analytics to expand your reach.",
  },
  {
    icon: Shield,
    title: "Verified Badge",
    description: "Build trust with our verification and review system.",
  },
];

const Providers = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    location: "",
    description: "",
    categories: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const categories = [
    "Sports",
    "Arts & Crafts",
    "Music",
    "STEM",
    "Dance",
    "Outdoor",
    "Language",
    "Other",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryToggle = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).map(f => f.name);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
      toast.success(`${newFiles.length} file(s) uploaded!`);
    }
  };

  const removeFile = (fileName: string) => {
    setUploadedFiles(uploadedFiles.filter(f => f !== fileName));
    toast.info("File removed");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.categories.length === 0) {
      toast.error("Please select at least one category");
      return;
    }

    console.log("Form submitted:", formData);
    toast.success("Your application has been submitted successfully!");
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Become a Provider - List Your Activity"
        description="Join ParentGO as an activity provider. Reach thousands of local families, manage bookings easily, and grow your business with our platform."
        canonical="/providers"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/20 to-background section-padding py-12 md:py-20">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                Grow Your Activity Business with{" "}
                <span className="text-secondary">ParentGO</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Join our trusted network of activity providers and connect with thousands of families seeking wonderful experiences for their children.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-secondary" size={20} />
                  <span>Free to join</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-secondary" size={20} />
                  <span>No upfront payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-secondary" size={20} />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-large">
              <div className="text-center mb-6">
                <p className="text-4xl font-display font-bold text-foreground">10,000+</p>
                <p className="text-muted-foreground">Active families on platform</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Cities covered</p>
                </div>
                <div className="bg-muted rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Active providers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-muted/50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage and grow your activity business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-6 shadow-soft card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding" id="apply">
        <div className="container-width max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Apply to Become a Provider
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below, and our team will review your application within 2-3 business days.
            </p>
          </div>

          {submitted ? (
            <div className="bg-secondary/10 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-secondary" size={40} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Application Submitted!
              </h3>
              <p className="text-muted-foreground mb-6">
                Thank you for applying to become a ParentGO provider. We'll review your application and get back to you within 2-3 business days.
              </p>
              <Button variant="teal" onClick={() => setSubmitted(false)}>
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 shadow-medium">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Your business name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="020 1234 5678"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Website (optional)
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="City, County"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Activity Categories *
                </label>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleCategoryToggle(category)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        formData.categories.includes(category)
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-secondary/10"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                {formData.categories.length > 0 && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Selected: {formData.categories.join(", ")}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell Us About Your Activities *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  placeholder="Tell us about your activities, target age groups, your experience, and what makes your programmes special..."
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Upload Photos (optional)
                </label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-secondary transition-colors cursor-pointer relative">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Upload className="mx-auto text-muted-foreground mb-2" size={32} />
                  <p className="text-muted-foreground text-sm">
                    Drag photos here or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PNG, JPG max 10MB each
                  </p>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {uploadedFiles.map((file) => (
                      <div key={file} className="flex items-center gap-2 bg-muted px-3 py-1 rounded-lg">
                        <span className="text-sm">{file}</span>
                        <button onClick={() => removeFile(file)} className="text-muted-foreground hover:text-foreground">
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button type="submit" variant="teal" size="xl" className="w-full">
                Submit Application
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting, you agree to our Terms & Conditions and Privacy Policy.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Providers;
