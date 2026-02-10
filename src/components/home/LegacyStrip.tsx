import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
import { PatternLayer } from "@/components/brand";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "1956",
    title: "The Quarry",
    tagline: "Kunwar Mining born in Mirpur. Not a business. A belief.",
    description: "While others saw stone in the ground, our founder saw the nation it could build. He extracted the first granite blocks that would become Pakistan's foundational infrastructure. This wasn't commerce. This was custodianship of Pakistan's future.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
  },
  {
    year: "1972–1980",
    title: "The Colonies",
    tagline: "Organized settlements for ordinary Pakistanis.",
    description: "We stopped selling plots. We started building neighborhoods. Chishtian Colonies wasn't a real estate project—it was a social architecture experiment. Families that had nowhere to plant roots suddenly had streets, schools, and Saturday bazaars. We learned that day: development that doesn't serve community is just real estate.",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&q=80",
  },
  {
    year: "2010s",
    title: "The Infrastructure Era",
    tagline: "C-1 Contractor Status. National roads. A nation connected.",
    description: "When Pakistan needed someone to build the arteries that would let its blood flow, Kunwar Developers answered. C-1 license wasn't handed to us. It was earned through a thousand promises kept and zero corners cut. Motorways. Bridges. Flyovers. We didn't just build infrastructure. We wove Pakistan tighter.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
  },
  {
    year: "2020s",
    title: "Vertical Integration",
    tagline: "When you control every step, there's nowhere to hide.",
    description: "We acquired 6 active mining leases. Not for profit. For power—the power to guarantee quality, to control timelines, to own accountability. From the moment granite breaks from our earth to the moment a family turns a key in Top City, nothing passes through hands but ours. This is why we sleep well.",
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
    <section id="legacy" ref={containerRef} className="bg-background relative">
      {/* Colony Grid Pattern - Era 1 (1972-1980) */}
      <PatternLayer era="colony" opacity={0.04} />

      {/* Section Header - Outside pinned area */}
      <div ref={headerRef} className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
            The Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-institutional mb-6">
            A Family's Promise to a Nation
          </h2>
          <p className="text-foreground/60 font-sans text-lg max-w-3xl mx-auto leading-relaxed">
            In 1956, Mirpur's mines held limestone and possibility. Our founder, Kunwar Sahib, saw neither. He saw community. He saw Pakistan building itself. So he built with it. Each era below isn't a milestone. It's a choice we made about what kind of legacy we wanted to leave.
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
                <div className="max-w-3xl">
                  {/* Year */}
                  <span className="text-accent font-serif text-7xl md:text-9xl opacity-30 absolute -top-8 -left-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
                    {milestone.year}
                  </p>
                  <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-4 tracking-institutional">
                    {milestone.title}
                  </h3>
                  <p className="text-accent font-serif text-xl md:text-2xl italic mb-6">
                    "{milestone.tagline}"
                  </p>
                  <p className="text-foreground/70 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
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
