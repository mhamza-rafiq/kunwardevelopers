import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 70, suffix: "Years", label: "of Continuous Operations" },
  { value: 30000, suffix: "+", label: "Kanals Developed", formatted: "30,000" },
  { value: "C-1", suffix: "", label: "Licensed (Highest Tier)", isText: true },
  { value: 6, suffix: "Leases", label: "Mining Operations" },
];

const LegacyStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Stats cards stagger
      const cards = statsRef.current?.querySelectorAll(".stat-card");
      if (cards?.length) {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          rotationX: -15,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // Animate numbers counting up
      stats.forEach((stat, index) => {
        if (stat.isText) return;

        const numElement = statsRef.current?.querySelector(
          `.stat-number-${index}`
        );
        if (!numElement) return;

        const endValue = typeof stat.value === "number" ? stat.value : 0;
        const obj = { value: 0 };

        gsap.to(obj, {
          value: endValue,
          duration: 2,
          delay: 0.3 + index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            const formatted =
              endValue >= 1000
                ? Math.round(obj.value).toLocaleString()
                : Math.round(obj.value);
            numElement.textContent = formatted.toString();
          },
        });
      });

      // Decorative lines
      const lines = statsRef.current?.querySelectorAll(".stat-line");
      if (lines?.length) {
        gsap.from(lines, {
          scaleX: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // Tagline fade in
      gsap.from(taglineRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: taglineRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Legacy of Excellence
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Built on Seven Decades of Trust
          </h2>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-card text-center perspective-1000">
              <div className="mb-3">
                <span
                  className={`font-serif text-4xl md:text-5xl lg:text-6xl text-foreground stat-number-${index}`}
                >
                  {stat.isText ? stat.value : "0"}
                </span>
                <span className="font-serif text-2xl md:text-3xl text-accent ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="font-sans text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </p>

              {/* Decorative Line */}
              <div className="stat-line w-12 h-px bg-accent mx-auto mt-4 origin-center" />
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-center text-muted-foreground font-sans text-base mt-16 max-w-2xl mx-auto"
        >
          Kunwar Developers operates with institutional legitimacy rarely seen
          in private real estate—delivering communities, infrastructure, and
          resources designed to last generations.
        </p>
      </div>
    </section>
  );
};

export default LegacyStats;
