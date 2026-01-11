import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { href: "/activities", label: "Discover Activities" },
      { href: "/providers", label: "Become a Provider" },
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "About" },
    ],
    activities: [
      { href: "/activities?category=sports", label: "Sports" },
      { href: "/activities?category=arts", label: "Arts & Crafts" },
      { href: "/activities?category=music", label: "Music" },
      { href: "/activities?category=stem", label: "STEM" },
    ],
    support: [
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-width section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">P</span>
              </div>
              <span className="font-display font-bold text-xl">ParentGO</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Discover wonderful activities for your children. From sports to arts, find the perfect experiences to help children learn, grow, and have fun.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Activities</h4>
            <ul className="space-y-3">
              {footerLinks.activities.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail size={18} />
                <span>hello@parentgo.co.uk</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone size={18} />
                <span>020 1234 5678</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin size={18} className="mt-1" />
                <span>123 Family Street<br />London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} ParentGO. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.support.slice(2).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-primary-foreground/50 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
