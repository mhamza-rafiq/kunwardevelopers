import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Menu, X } from "lucide-react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Infrastructure", href: "/#infrastructure" },
  { label: "Mining", href: "/#mining" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/#contact" },
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
        duration: 0.8,
        ease: "power3.out",
      });

      // Logo scale animation
      gsap.from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "back.out(1.7)",
      });

      // Nav links stagger from right
      const links = navRef.current?.querySelectorAll("a");
      if (links?.length) {
        gsap.from(links, {
          x: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.4,
          ease: "power3.out",
        });
      }

      // CTA button
      gsap.from(ctaRef.current, {
        x: 30,
        opacity: 0,
        duration: 0.5,
        delay: 0.7,
        ease: "power3.out",
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
          duration: 0.3,
        });

        const links = mobileMenuRef.current?.querySelectorAll(".mobile-link");
        if (links?.length) {
          gsap.from(links, {
            x: -40,
            opacity: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: "power3.out",
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
            ? "bg-primary/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a ref={logoRef} href="/" className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl text-primary-foreground">
                Kunwar
              </span>
              <span className="text-accent font-sans text-[10px] tracking-[0.25em] uppercase -mt-1">
                Developers
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav ref={navRef} className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground/80 font-sans text-sm tracking-wide hover:text-accent transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div ref={ctaRef} className="hidden lg:block">
              <button className="px-6 py-3 bg-accent text-accent-foreground font-sans text-xs tracking-wider uppercase hover:bg-accent/90 transition-colors">
                Invest Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-primary-foreground p-2"
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
          className="fixed inset-0 z-40 bg-primary pt-24 lg:hidden"
        >
          <nav className="container mx-auto px-6 py-8">
            <div className="space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-link block text-primary-foreground font-serif text-3xl hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mobile-link mt-12">
              <button className="w-full px-8 py-4 bg-accent text-accent-foreground font-sans text-sm tracking-wider uppercase">
                Invest Now
              </button>
            </div>

            {/* Contact Info */}
            <div className="mobile-link mt-12 pt-8 border-t border-primary-foreground/10">
              <p className="text-primary-foreground/60 font-sans text-sm mb-2">
                info@kunwardevelopers.com
              </p>
              <p className="text-primary-foreground/60 font-sans text-sm">
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
