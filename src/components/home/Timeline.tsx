import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "1956",
    era: "Era I",
    title: "Foundations",
    description:
      "Post-migration beginnings. The Kunwar family starts rebuilding through construction and housing in Pakistan.",
  },
  {
    year: "1972",
    era: "Era I",
    title: "Kunwar Colony",
    description:
      "Establishment of Kunwar Colony, Chishtian—a permanent neighborhood signaling community-first development.",
  },
  {
    year: "1980-2010",
    era: "Era II",
    title: "Community Scale",
    description:
      "Delivery of 10,000+ kanals across multiple housing schemes. Institutional credibility established.",
  },
  {
    year: "2010",
    era: "Era III",
    title: "National Infrastructure",
    description:
      "Acquisition of Pakistan's C-1 Construction License. Expansion into motorways, bridges, and national projects.",
  },
  {
    year: "2018",
    era: "Era IV",
    title: "Vertical Integration",
    description:
      "Launch of Top City Islamabad and Kunwar Mining. Full ecosystem from resources to communities.",
  },
  {
    year: "Present",
    era: "Era IV",
    title: "Capital Ambition",
    description:
      "Leadership in policy, governance, and smart urban development. Building Pakistan's future.",
  },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Animate center line drawing progressively
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleY: 0,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
          },
        });
      }

      // Milestone cards with alternating slide direction
      const milestoneCards = timelineRef.current?.querySelectorAll(".milestone-card");
      if (milestoneCards?.length) {
        milestoneCards.forEach((card, index) => {
          const isLeft = index % 2 === 0;

          gsap.from(card, {
            x: isLeft ? -60 : 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      }

      // Center dots pulse and activate
      const dots = timelineRef.current?.querySelectorAll(".timeline-dot");
      if (dots?.length) {
        dots.forEach((dot, index) => {
          gsap.from(dot, {
            scale: 0,
            duration: 0.5,
            delay: 0.2,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: dot,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });

          // Subtle pulse animation
          gsap.to(dot, {
            scale: 1.2,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: index * 0.1,
          });
        });
      }

      // CTA button
      gsap.from(ctaRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-primary overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Our Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground">
            Seven Decades of Building Pakistan
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center Line - Desktop */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-accent/30 -translate-x-1/2"
          />

          {/* Milestones */}
          <div className="space-y-12 lg:space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`milestone-card lg:flex lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                  }`}
                >
                  <div className="bg-primary-foreground/5 p-6 md:p-8 border border-primary-foreground/10 hover:border-accent/30 transition-colors duration-500">
                    <span className="text-accent font-sans text-xs tracking-[0.2em] uppercase">
                      {milestone.era}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mt-2 mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-accent font-serif text-xl mb-4">
                      {milestone.year}
                    </p>
                    <p className="text-primary-foreground/70 font-sans text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Point - Desktop */}
                <div className="hidden lg:flex items-center justify-center w-4 relative z-10">
                  <div className="timeline-dot w-4 h-4 bg-accent rounded-full" />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center mt-16">
          <button className="px-8 py-4 border border-accent text-accent font-sans text-sm tracking-wider uppercase hover:bg-accent hover:text-accent-foreground transition-colors">
            Explore Our Full Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
