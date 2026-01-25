import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
import { AnimatedLogoReveal } from "@/components/brand";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlineRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const girihRef = useRef<HTMLDivElement>(null);
  const proofStripRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Camera pullback on background - cinematic opening
      gsap.from(bgRef.current, {
        scale: 1.15,
        duration: 2.5,
        ease: "power2.out",
      });

      // Logo mark fade in
      gsap.from(logoRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });

      // Overline fade in
      gsap.from(overlineRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
      });

      // Main headline slide up - authoritative, no rotation
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: 0.5,
        ease: "power2.out",
      });

      // Subheadline fade in
      gsap.from(subheadRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.9,
        ease: "power2.out",
      });

      // CTA buttons stagger
      const buttons = ctaRef.current?.querySelectorAll("a");
      if (buttons?.length) {
        gsap.from(buttons, {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.8,
          delay: 1.2,
          ease: "power2.out",
        });
      }

      // Proof strip reveal
      const proofItems = proofStripRef.current?.querySelectorAll(".proof-item");
      if (proofItems?.length) {
        gsap.from(proofItems, {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.8,
          delay: 1.5,
          ease: "power2.out",
        });
      }

      // Scroll indicator - subtle fade pulse (no bounce)
      gsap.from(scrollRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 1.8,
        ease: "power2.out",
      });

      gsap.to(scrollRef.current, {
        opacity: 0.4,
        duration: 2,
        repeat: -1,
        yoyo: true,
        delay: 2.2,
        ease: "sine.inOut",
      });

      // Girih pattern slow parallax on scroll
      gsap.to(girihRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Background parallax on scroll
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Girih Pattern Layer - 4% opacity watermark with parallax */}
      <div ref={girihRef} className="girih-layer" />

      {/* Background Image - Dusk/Dawn Aerial */}
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      />

      {/* Heavy Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Animated Logo Reveal */}
          <div ref={logoRef} className="mb-8">
            <AnimatedLogoReveal 
              size={100} 
              duration={1.5} 
              delay={0.3}
              showText={false}
              className="md:scale-110"
            />
          </div>

          {/* Overline - Bronze/Gold */}
          <p
            ref={overlineRef}
            className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6"
          >
            The Earth Remembers
          </p>

          {/* Main Headline - Statement of Power */}
          <h1
            ref={headlineRef}
            className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.15] mb-8 tracking-institutional"
          >
            From the stone beneath our feet to the skylines above us—
            <span className="text-accent">we build what lasts.</span>
          </h1>

          {/* Subheadline - Narrative */}
          <p
            ref={subheadRef}
            className="text-foreground/70 font-sans text-base md:text-lg max-w-4xl mx-auto leading-relaxed mb-12"
          >
            For seven decades, our family has understood a simple truth: the greatest developments aren't projects. They're legacies. From the mineral-rich quarries where our grandfathers first struck granite, to the smart cities where our grandchildren will raise their children—we own the entire story. This isn't vertical integration. This is sovereignty over destiny.
          </p>

          {/* Two CTAs Only */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <a
              href="/top-city"
              className="inline-block px-10 py-5 bg-accent text-accent-foreground font-sans text-sm tracking-[0.15em] uppercase hover:scale-[1.03] transition-transform duration-300"
            >
              Explore Top City
            </a>
            <a
              href="/about"
              className="inline-block px-10 py-5 border border-foreground/30 text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:border-accent hover:text-accent transition-colors duration-300"
            >
              View Our Story
            </a>
          </div>
        </div>

        {/* Proof Strip */}
        <div
          ref={proofStripRef}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-foreground/10"
        >
          <div className="proof-item text-center md:text-left">
            <p className="font-serif text-2xl md:text-3xl text-accent tracking-institutional mb-1">70 Years</p>
            <p className="text-foreground/50 font-sans text-xs tracking-wide">Three generations. One family name on every stone.</p>
          </div>
          <div className="proof-item text-center md:text-left">
            <p className="font-serif text-2xl md:text-3xl text-accent tracking-institutional mb-1">Quarry to Gate</p>
            <p className="text-foreground/50 font-sans text-xs tracking-wide">Complete control. Complete accountability.</p>
          </div>
          <div className="proof-item text-center md:text-left">
            <p className="font-serif text-2xl md:text-3xl text-accent tracking-institutional mb-1">C-1 Status</p>
            <p className="text-foreground/50 font-sans text-xs tracking-wide">Pakistan's highest construction certification. Earned.</p>
          </div>
          <div className="proof-item text-center md:text-left">
            <p className="font-serif text-2xl md:text-3xl text-accent tracking-institutional mb-1">10,000+</p>
            <p className="text-foreground/50 font-sans text-xs tracking-wide">Kanals developed. 25,000+ families. Still counting.</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Subtle Fade Pulse */}
      <div
        ref={scrollRef}
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-foreground/50 font-sans text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>

      {/* Bottom Brand Mark */}
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <p
          className="text-foreground/30 font-sans text-[10px] tracking-[0.3em] uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Kunwar Developers · Est. 1956
        </p>
      </div>
    </section>
  );
};

export default Hero;
