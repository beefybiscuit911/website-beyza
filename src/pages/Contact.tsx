import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@parentgo.co.uk",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "020 1234 5678",
    description: "Mon-Fri, 9:00 AM-6:00 PM",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Family Street",
    description: "London, UK",
  },
  {
    icon: Clock,
    title: "Office Hours",
    value: "Mon-Fri: 9:00 AM-6:00 PM",
    description: "Weekend support available",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Your message has been sent successfully!");
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Contact - Get in Touch"
        description="Have questions about ParentGO? Contact our team for activity discovery, provider applications, or general enquiries."
        canonical="/contact"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-lavender/20 to-background section-padding py-12 md:py-16">
        <div className="container-width text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or feedback? We'd love to hear from you. Our team is here to help you find perfect activities for your children.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 -mt-8">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card rounded-2xl p-6 shadow-soft text-center card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-lavender/30 text-foreground flex items-center justify-center mx-auto mb-4">
                  <info.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">
                  {info.title}
                </h3>
                <p className="text-foreground font-medium mb-1">{info.value}</p>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and we'll get back to you as soon as possible. For urgent matters, please call us directly.
              </p>

              {submitted ? (
                <div className="bg-secondary/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-secondary" size={32} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                  <Button variant="secondary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Questions</option>
                      <option value="activities">Finding Activities</option>
                      <option value="provider">Provider Support</option>
                      <option value="technical">Technical Issue</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* FAQ Preview */}
            <div className="bg-muted/50 rounded-3xl p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    How do I book an activity?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Browse our activities, select one you like, choose a suitable time slot, and complete your booking through our secure payment system.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Can I cancel a booking?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, most bookings can be cancelled up to 24 hours before the activity. Cancellation policies vary by provider and are shown before booking.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    How do I become a provider?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Visit our "Providers" page and fill out the application form. Our team will review your application within 2-3 business days.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Is ParentGO available in my city?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We currently serve 50+ cities across the UK and continue to grow! Visit our activities page to see available activities in your area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Map integration coming soon</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
