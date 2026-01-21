import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "1956",
    title: "Tando Jam",
    description: "Post-migration foundations established in Sindh, beginning the Kunwar legacy.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
  },
  {
    year: "1972-1980",
    title: "Chishtian Colonies",
    description: "Kunwar Colony established—first organized residential communities in Punjab.",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&q=80",
  },
  {
    year: "2010s",
    title: "Motorway Era",
    description: "C-1 contractor status achieved. Major infrastructure across Pakistan's highway network.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
  },
  {
    year: "2020s",
    title: "Top City & Mining",
    description: "Smart city development meets mineral resources. Vertical integration complete.",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80",
  },
];

const LegacyStrip = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !panelsRef.current) return;

    const panels = panelsRef.current;
    const panelElements = panels.querySelectorAll(".legacy-panel");
    const totalWidth = panels.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Horizontal scroll pinning
      gsap.to(panels, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Panel content reveals
      panelElements.forEach((panel, i) => {
        const image = panel.querySelector(".panel-image");
        const content = panel.querySelector(".panel-content");

        gsap.from(image, {
          opacity: 0,
          scale: 1.1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: gsap.getById("legacyScroll"),
            start: "left 80%",
            toggleActions: "play none none none",
          },
        });

        gsap.from(content, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: gsap.getById("legacyScroll"),
            start: "left 70%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="legacy" ref={containerRef} className="bg-background">
      {/* Section Header - Outside pinned area */}
      <div ref={headerRef} className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
            The Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-institutional">
            1956 – 2026
          </h2>
          <p className="text-foreground/50 font-sans text-lg mt-4">
            From migration to smart cities
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div ref={wrapperRef} className="relative h-screen">
        {/* Panels Container */}
        <div ref={panelsRef} className="absolute top-0 left-0 h-full flex">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className="legacy-panel relative w-screen h-full flex items-center flex-shrink-0"
            >
              {/* Background Image with Bronze Grading */}
              <div className="panel-image absolute inset-0">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${milestone.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "sepia(30%) saturate(80%)",
                  }}
                />
                <div className="absolute inset-0 bg-background/70" />
              </div>

              {/* Content */}
              <div className="panel-content relative z-10 container mx-auto px-6 md:px-20">
                <div className="max-w-2xl">
                  {/* Year */}
                  <span className="text-accent font-serif text-7xl md:text-9xl opacity-30 absolute -top-8 -left-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
                    {milestone.year}
                  </p>
                  <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-6 tracking-institutional">
                    {milestone.title}
                  </h3>
                  <p className="text-foreground/70 font-sans text-lg leading-relaxed max-w-md">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Panel Divider */}
              {index < milestones.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-1/3 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {milestones.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-foreground/20" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyStrip;