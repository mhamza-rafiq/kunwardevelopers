import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Girih Pattern Overlay */}
      <div className="absolute inset-0 girih-pattern opacity-60" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary" />

      {/* Placeholder Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-px bg-accent mx-auto mb-8"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6"
          >
            From Earth to Communities · Since 1956
          </motion.p>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-8 text-balance">
            Building Futures,
            <br />
            <span className="text-accent">Not Just Properties</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-primary-foreground/80 font-sans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Pakistan's most credible vertically integrated development group—combining 
            heritage, infrastructure mastery, and smart urban ambition.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <button className="px-8 py-4 bg-accent text-accent-foreground font-sans text-sm tracking-wider uppercase hover:bg-accent/90 transition-colors">
              Explore Developments
            </button>
            <button className="px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-sans text-sm tracking-wider uppercase hover:bg-primary-foreground/10 transition-colors">
              Our Legacy
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-accent transition-colors cursor-pointer"
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>

      {/* Bottom Brand Mark */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <p className="text-primary-foreground/40 font-sans text-xs tracking-widest uppercase vertical-rl rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Kunwar Developers
        </p>
      </div>
    </section>
  );
};

export default Hero;
