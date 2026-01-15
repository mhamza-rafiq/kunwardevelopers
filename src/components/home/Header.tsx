import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Mining", href: "#mining" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-primary/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a href="/" className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl text-primary-foreground">
                Kunwar
              </span>
              <span className="text-accent font-sans text-[10px] tracking-[0.25em] uppercase -mt-1">
                Developers
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
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
            <div className="hidden lg:block">
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
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary pt-24 lg:hidden"
          >
            <nav className="container mx-auto px-6 py-8">
              <div className="space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-primary-foreground font-serif text-3xl hover:text-accent transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-12"
              >
                <button className="w-full px-8 py-4 bg-accent text-accent-foreground font-sans text-sm tracking-wider uppercase">
                  Invest Now
                </button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-12 pt-8 border-t border-primary-foreground/10"
              >
                <p className="text-primary-foreground/60 font-sans text-sm mb-2">
                  info@kunwardevelopers.com
                </p>
                <p className="text-primary-foreground/60 font-sans text-sm">
                  +92 51 234 5678
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
