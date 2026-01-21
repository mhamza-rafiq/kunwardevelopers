import { useRef, useLayoutEffect } from "react";
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  { label: "Residential & Investment", href: "#contact" },
  { label: "Corporate & Government", href: "#contact" },
  { label: "Mining & Partnerships", href: "#contact" },
  { label: "Media Inquiries", href: "#contact" },
];

const quickLinks = [
  { label: "About Kunwar", href: "/about" },
  { label: "Top City Islamabad", href: "#top-city" },
  { label: "Our Legacy", href: "#legacy" },
  { label: "Leadership", href: "#leadership" },
];

const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger columns reveal
      gsap.from(columnsRef.current?.querySelectorAll(".footer-column"), {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" ref={containerRef} className="bg-background border-t border-foreground/10">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-20 md:py-24">
        <div ref={columnsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="footer-column lg:col-span-1">
            <div className="mb-8">
              <h3 className="font-serif text-3xl text-foreground tracking-institutional">
                Kunwar
              </h3>
              <p className="text-accent font-sans text-xs tracking-[0.2em] uppercase">
                Developers
              </p>
            </div>
            <p className="text-foreground/50 font-sans text-sm leading-relaxed mb-6">
              From earth to communities. Building Pakistan's future 
              through heritage credibility, institutional discipline, and 
              modern urban ambition.
            </p>
            <p className="text-accent font-serif text-sm italic">
              "Since 1956"
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="text-foreground font-sans text-sm tracking-[0.15em] uppercase mb-8">
              Explore
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/50 font-sans text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Segments */}
          <div className="footer-column">
            <h4 className="text-foreground font-sans text-sm tracking-[0.15em] uppercase mb-8">
              Inquiries
            </h4>
            <ul className="space-y-4">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/50 font-sans text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4 className="text-foreground font-sans text-sm tracking-[0.15em] uppercase mb-8">
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/50 font-sans text-sm">
                  Top City Islamabad,<br />
                  Pakistan
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+92512345678"
                  className="text-foreground/50 font-sans text-sm hover:text-accent transition-colors duration-300"
                >
                  +92 51 234 5678
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@kunwardevelopers.com"
                  className="text-foreground/50 font-sans text-sm hover:text-accent transition-colors duration-300"
                >
                  info@kunwardevelopers.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-10">
              <a
                href="#"
                className="w-10 h-10 border border-foreground/20 flex items-center justify-center text-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-foreground/20 flex items-center justify-center text-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-foreground/20 flex items-center justify-center text-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-foreground/10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/30 font-sans text-xs">
              © 2024 Kunwar Developers. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-foreground/30 font-sans text-xs hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-foreground/30 font-sans text-xs hover:text-accent transition-colors duration-300"
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