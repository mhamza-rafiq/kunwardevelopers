import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";

const contactLinks = [
  { label: "Residential & Investment", href: "#contact" },
  { label: "Corporate & Government", href: "#contact" },
  { label: "Mining & Partnerships", href: "#contact" },
  { label: "Media Inquiries", href: "#contact" },
];

const quickLinks = [
  { label: "About Kunwar", href: "#about" },
  { label: "Our Developments", href: "#portfolio" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Mining Operations", href: "#mining" },
  { label: "Leadership", href: "#leadership" },
  { label: "Media & Insights", href: "#media" },
];

const Footer = () => {
  return (
    <footer className="bg-primary">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-serif text-2xl text-primary-foreground">
                Kunwar
              </h3>
              <p className="text-accent font-sans text-xs tracking-[0.2em] uppercase">
                Developers
              </p>
            </div>
            <p className="text-primary-foreground/60 font-sans text-sm leading-relaxed mb-6">
              Architects of Enduring Communities. Building Pakistan's future 
              through heritage credibility, institutional discipline, and 
              modern urban ambition.
            </p>
            <p className="text-accent font-serif text-sm italic">
              "From Earth to Communities. Since 1956."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-sans text-sm tracking-[0.15em] uppercase mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 font-sans text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Segments */}
          <div>
            <h4 className="text-primary-foreground font-sans text-sm tracking-[0.15em] uppercase mb-6">
              Inquiries
            </h4>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 font-sans text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary-foreground font-sans text-sm tracking-[0.15em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/60 font-sans text-sm">
                  Top City Islamabad,<br />
                  Islamabad, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+92512345678"
                  className="text-primary-foreground/60 font-sans text-sm hover:text-accent transition-colors"
                >
                  +92 51 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@kunwardevelopers.com"
                  className="text-primary-foreground/60 font-sans text-sm hover:text-accent transition-colors"
                >
                  info@kunwardevelopers.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/40 font-sans text-xs">
              © 2024 Kunwar Developers. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-primary-foreground/40 font-sans text-xs hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/40 font-sans text-xs hover:text-accent transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
