import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
import { PillarK } from "@/components/brand";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const girihRef = useRef<HTMLDivElement>(null);

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

      // Scroll indicator - subtle fade pulse (no bounce)
      gsap.from(scrollRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 1.6,
        ease: "power2.out",
      });

      gsap.to(scrollRef.current, {
        opacity: 0.4,
        duration: 2,
        repeat: -1,
        yoyo: true,
        delay: 2,
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
          {/* Heritage Pillar K Logo Mark */}
          <div ref={logoRef} className="mb-10">
            <div className="inline-block text-accent">
              <PillarK size={80} variant="primary" animated className="md:w-24 md:h-24" />
            </div>
          </div>

          {/* Main Headline - Statement of Power */}
          <h1
            ref={headlineRef}
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] mb-8 tracking-institutional"
          >
            From earth to communities.
            <br />
            <span className="text-accent">C-1 construction. Mining-backed development.</span>
            <br />
            70 years in Pakistan.
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadRef}
            className="text-foreground/70 font-sans text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
          >
            30,000 kanals. C-1 license. 6 mining leases. Complete vertical integration.
          </p>

          {/* Two CTAs Only */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#top-city"
              className="inline-block px-10 py-5 bg-accent text-accent-foreground font-sans text-sm tracking-[0.15em] uppercase hover:scale-[1.03] transition-transform duration-300"
            >
              Explore Top City
            </a>
            <a
              href="#legacy"
              className="inline-block px-10 py-5 border border-foreground/30 text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:border-accent hover:text-accent transition-colors duration-300"
            >
              View Our Story
            </a>
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