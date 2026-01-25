import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const overlineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Overline fade in
      gsap.from(overlineRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      // Split headline animation
      const headline = headlineRef.current;
      if (headline) {
        const text = headline.textContent || "";
        headline.innerHTML = text
          .split("")
          .map((char) => `<span class="inline-block">${char === " " ? "&nbsp;" : char}</span>`)
          .join("");

        gsap.from(headline.querySelectorAll("span"), {
          y: 80,
          opacity: 0,
          rotateX: -90,
          duration: 1,
          stagger: 0.02,
          ease: "power3.out",
          delay: 0.4,
        });
      }

      // Line reveal
      gsap.from(lineRef.current, {
        scaleX: 0,
        duration: 1.2,
        delay: 0.8,
        ease: "power3.inOut",
      });

      // Subtitle fade in
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 girih-pattern opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10 py-32">
        <div className="max-w-5xl mx-auto">
          {/* Overline Badge */}
          <div ref={overlineRef} className="inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase">
              Est. 1956. Destiny Unfolding.
            </span>
            <span className="w-12 h-px bg-accent" />
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-8"
            style={{ perspective: "1000px" }}
          >
            Our Story Isn't About Buildings. It's About Belief.
          </h1>

          {/* Decorative Line */}
          <div
            ref={lineRef}
            className="w-24 h-px bg-accent mx-auto mb-8 origin-center"
          />

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-sans text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Three generations of a family that bet everything—their name, their capital, their future—on the idea that you can build infrastructure that lasts centuries, on a timescale of decades, with a conscience that never sleeps.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-foreground/40 text-xs tracking-wider uppercase">
            Scroll to explore
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
