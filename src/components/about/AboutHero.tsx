import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
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
          stagger: 0.03,
          ease: "power3.out",
          delay: 0.3,
        });
      }

      // Year counter
      if (yearRef.current) {
        gsap.from(yearRef.current, {
          textContent: "1900",
          duration: 2,
          ease: "power2.out",
          delay: 0.5,
          snap: { textContent: 1 },
        });
      }

      // Line reveal
      gsap.from(lineRef.current, {
        scaleX: 0,
        duration: 1.2,
        delay: 0.6,
        ease: "power3.inOut",
      });

      // Subtitle fade in
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1,
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
        <div className="max-w-4xl mx-auto">
          {/* Year Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase">
              Est. <span ref={yearRef}>1956</span>
            </span>
            <span className="w-12 h-px bg-accent" />
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-8"
            style={{ perspective: "1000px" }}
          >
            Our Story
          </h1>

          {/* Decorative Line */}
          <div
            ref={lineRef}
            className="w-24 h-px bg-accent mx-auto mb-8 origin-center"
          />

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-sans text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            From the mineral-rich quarries of Mirpur to the skylines of Islamabad, 
            our journey spans seven decades of building Pakistan's future.
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
