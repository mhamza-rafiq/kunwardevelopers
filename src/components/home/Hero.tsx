import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlineRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const girihRef = useRef<HTMLDivElement>(null);
  const proofStripRef = useRef<HTMLDivElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Camera pullback on background - cinematic opening
      gsap.from(bgRef.current, {
        scale: 1.15,
        duration: 2.5,
        ease: "power2.out",
      });

      // Gold accent line wipe
      gsap.from(accentLineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
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

      // Main headline slide up
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
          y: 20,
          stagger: 0.1,
          duration: 0.8,
          delay: 1.5,
          ease: "power2.out",
        });
      }

      // Scroll indicator
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
      className="relative h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Girih Pattern Layer */}
      <div ref={girihRef} className="girih-layer" />

      {/* Background Image - Higher opacity for cinematic depth */}
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      />

      {/* Lighter gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />

      {/* Content - Left-aligned on desktop, centered on mobile */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 pb-32 md:pb-28">
        <div className="max-w-4xl text-center lg:text-left">
          {/* Gold accent line */}
          <div ref={accentLineRef} className="hidden lg:block w-24 h-px bg-accent mb-8" />

          {/* Overline */}
          <p
            ref={overlineRef}
            className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6"
          >
            The Earth Remembers
          </p>

          {/* Main Headline - Larger, more cinematic */}
          <h1
            ref={headlineRef}
            className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[1.1] mb-8 tracking-institutional"
          >
            From the stone beneath our feet to the skylines above us—
            <span className="text-accent">we build what lasts.</span>
          </h1>

          {/* Subheadline - Trimmed to 2 sentences */}
          <p
            ref={subheadRef}
            className="text-foreground/70 font-sans text-base md:text-lg max-w-3xl leading-relaxed mb-12 mx-auto lg:mx-0"
          >
            For seven decades, our family has understood a simple truth: the greatest developments aren't projects. They're legacies.
          </p>

          {/* CTAs - Left-aligned on desktop */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
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
      </div>

      {/* Proof Strip - Pinned to bottom of viewport */}
      <div
        ref={proofStripRef}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-foreground/10 bg-background/40 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="proof-item text-center md:text-left">
              <p className="font-serif text-2xl md:text-3xl text-accent tracking-institutional mb-1">70 Years</p>
              <p className="text-foreground/50 font-sans text-xs tracking-wide">Three generations. One family name.</p>
            </div>
            <div className="proof-item text-center md:text-left">
              <p className="font-serif text-2xl md:text-3xl text-accent tracking-institutional mb-1">Quarry to Gate</p>
              <p className="text-foreground/50 font-sans text-xs tracking-wide">Complete control. Complete accountability.</p>
            </div>
            <div className="proof-item text-center md:text-left">
              <p className="font-serif text-2xl md:text-3xl text-accent tracking-institutional mb-1">C-1 Status</p>
              <p className="text-foreground/50 font-sans text-xs tracking-wide">Pakistan's highest construction certification.</p>
            </div>
            <div className="proof-item text-center md:text-left">
              <p className="font-serif text-2xl md:text-3xl text-accent tracking-institutional mb-1">10,000+</p>
              <p className="text-foreground/50 font-sans text-xs tracking-wide">Kanals developed. 25,000+ families.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        onClick={scrollToContent}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-foreground/50 font-sans text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>

      {/* Bottom Brand Mark */}
      <div className="absolute bottom-28 right-12 hidden lg:block">
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
