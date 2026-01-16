import { useRef, useLayoutEffect } from "react";
import { ChevronDown } from "lucide-react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLButtonElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Create main timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate decorative line from center
      tl.from(lineRef.current, {
        scaleX: 0,
        duration: 1,
        ease: "power3.inOut",
      });

      // Animate tagline with blur effect
      tl.from(
        taglineRef.current,
        {
          opacity: 0,
          y: 30,
          filter: "blur(10px)",
          duration: 1,
        },
        "-=0.5"
      );

      // Split headline animation - animate each word
      const headlines = headlineRef.current?.querySelectorAll(".gsap-word");
      if (headlines?.length) {
        tl.from(
          headlines,
          {
            y: 120,
            opacity: 0,
            rotationX: -40,
            duration: 1.2,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.7"
        );
      }

      // Subheadline fade in
      tl.from(
        subheadRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 1,
        },
        "-=0.5"
      );

      // CTA buttons stagger up
      const buttons = ctaRef.current?.querySelectorAll("button");
      if (buttons?.length) {
        tl.from(
          buttons,
          {
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 0.8,
          },
          "-=0.4"
        );
      }

      // Scroll indicator
      tl.from(
        scrollRef.current,
        {
          opacity: 0,
          duration: 0.6,
        },
        "-=0.2"
      );

      // Continuous scroll indicator bounce
      gsap.to(scrollRef.current?.querySelector("svg"), {
        y: 10,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Parallax background on scroll
      gsap.to(bgRef.current, {
        yPercent: 30,
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

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      {/* Girih Pattern Overlay */}
      <div className="absolute inset-0 girih-pattern opacity-60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary" />

      {/* Parallax Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-20 scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Line */}
          <div ref={lineRef} className="w-24 h-px bg-accent mx-auto mb-8" />

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6"
          >
            From Earth to Communities · Since 1956
          </p>

          {/* Main Headline with split text */}
          <h1
            ref={headlineRef}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-8 perspective-1000"
          >
            <span className="inline-block overflow-hidden">
              <span className="inline-block gsap-word">Building</span>
            </span>{" "}
            <span className="inline-block overflow-hidden">
              <span className="inline-block gsap-word">Futures,</span>
            </span>
            <br />
            <span className="inline-block overflow-hidden text-accent">
              <span className="inline-block gsap-word">Not</span>
            </span>{" "}
            <span className="inline-block overflow-hidden text-accent">
              <span className="inline-block gsap-word">Just</span>
            </span>{" "}
            <span className="inline-block overflow-hidden text-accent">
              <span className="inline-block gsap-word">Properties</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadRef}
            className="text-primary-foreground/80 font-sans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Pakistan's most credible vertically integrated development
            group—combining heritage, infrastructure mastery, and smart urban
            ambition.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="px-8 py-4 bg-accent text-accent-foreground font-sans text-sm tracking-wider uppercase hover:bg-accent/90 transition-colors">
              Explore Developments
            </button>
            <button className="px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-sans text-sm tracking-wider uppercase hover:bg-primary-foreground/10 transition-colors">
              Our Legacy
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        ref={scrollRef}
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-accent transition-colors cursor-pointer"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Bottom Brand Mark */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <p
          className="text-primary-foreground/40 font-sans text-xs tracking-widest uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Kunwar Developers
        </p>
      </div>
    </section>
  );
};

export default Hero;
