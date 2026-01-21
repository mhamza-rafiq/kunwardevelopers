import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Menu, X } from "lucide-react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Top City", href: "#top-city" },
  { label: "Legacy", href: "#legacy" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      // Initial header slide down
      gsap.from(headerRef.current, {
        y: -100,
        duration: 1,
        ease: "power2.out",
      });

      // Logo fade in
      gsap.from(logoRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      // Nav links stagger
      const links = navRef.current?.querySelectorAll("a");
      if (links?.length) {
        gsap.from(links, {
          opacity: 0,
          y: 10,
          duration: 0.6,
          stagger: 0.08,
          delay: 0.4,
          ease: "power2.out",
        });
      }

      // CTA button
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.6,
        delay: 0.7,
        ease: "power2.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Mobile menu animation
  useLayoutEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isMobileMenuOpen) {
      const ctx = gsap.context(() => {
        gsap.from(mobileMenuRef.current, {
          opacity: 0,
          duration: 0.4,
        });

        const links = mobileMenuRef.current?.querySelectorAll(".mobile-link");
        if (links?.length) {
          gsap.from(links, {
            x: -40,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          });
        }
      }, mobileMenuRef);

      return () => ctx.revert();
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "h-14" : "h-16"
          }`}>
            {/* Logo */}
            <a ref={logoRef} href="/" className="flex flex-col">
              <span className={`font-serif text-foreground transition-all duration-500 tracking-institutional ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}>
                Kunwar
              </span>
              <span className="text-accent font-sans text-[10px] tracking-[0.25em] uppercase -mt-0.5">
                Developers
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav ref={navRef} className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/70 font-sans text-sm tracking-wide hover:text-accent transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div ref={ctaRef} className="hidden lg:block">
              <a 
                href="#contact"
                className="px-7 py-3 bg-accent text-accent-foreground font-sans text-xs tracking-[0.15em] uppercase hover:scale-[1.03] transition-transform duration-300"
              >
                Invest Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-foreground p-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-background pt-24 lg:hidden"
        >
          <nav className="container mx-auto px-6 py-8">
            <div className="space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-link block text-foreground font-serif text-4xl hover:text-accent transition-colors tracking-institutional"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mobile-link mt-16">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block w-full text-center px-8 py-5 bg-accent text-accent-foreground font-sans text-sm tracking-[0.15em] uppercase"
              >
                Invest Now
              </a>
            </div>

            {/* Contact Info */}
            <div className="mobile-link mt-16 pt-10 border-t border-foreground/10">
              <p className="text-foreground/50 font-sans text-sm mb-3">
                info@kunwardevelopers.com
              </p>
              <p className="text-foreground/50 font-sans text-sm">
                +92 51 234 5678
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;