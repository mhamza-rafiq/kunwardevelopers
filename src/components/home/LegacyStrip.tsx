import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
import { PatternLayer } from "@/components/brand";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "1956",
    title: "The Foundation",
    tagline: "Post-migration roots. A family's promise to rebuild.",
    description: "In the wake of migration, starting from Tando Jam, Hyderabad, what began as a modest effort to establish roots evolved into a lifelong commitment to shaping cities and creating enduring neighborhoods. Resilience, vision, and an unshakable belief in rebuilding lives through land and community.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
  },
  {
    year: "1972–1980",
    title: "The Colonies",
    tagline: "Organized settlements for ordinary Pakistanis.",
    description: "Kunwar Colony Chishtian and Kunwar Settlement Qazi Wala Road — we stopped selling plots and started building neighborhoods. Families that had nowhere to plant roots suddenly had streets, schools, and community. Development that serves people, not just profit.",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&q=80",
  },
  {
    year: "1990–2010",
    title: "The Expansion Era",
    tagline: "12 projects. 10,000 kanals. A region transformed.",
    description: "Approximately twelve housing projects across different names, developing around 10,000 kanals of land. Each project transformed barren stretches into thriving communities — not just bricks and mortar, but a legacy of trust passed down through generations.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
  },
  {
    year: "2010–2024",
    title: "Infrastructure & Integration",
    tagline: "Mega infrastructure. Mining. Vertical control.",
    description: "Complete motorway infrastructures including bridges. Development works in Top City Islamabad. Founding of Kunwar Mining with six mineral leases across Pakistan. Subsidiaries Pak-Italia Diligence (C-1) and Yellow Line Constructions ensuring quality from quarry to community gate.",
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
      gsap.from(headerRef.current, {
        opacity: 0, y: 40, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none none" },
      });

      gsap.to(panels, {
        x: -totalWidth, ease: "none",
        scrollTrigger: { trigger: wrapperRef.current, start: "top top", end: () => `+=${totalWidth}`, scrub: 1, pin: true, anticipatePin: 1 },
      });

      panelElements.forEach((panel) => {
        const image = panel.querySelector(".panel-image");
        const content = panel.querySelector(".panel-content");

        gsap.from(image, {
          opacity: 0, scale: 1.1, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: panel, containerAnimation: gsap.getById("legacyScroll"), start: "left 80%", toggleActions: "play none none none" },
        });
        gsap.from(content, {
          opacity: 0, y: 30, duration: 0.8, delay: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: panel, containerAnimation: gsap.getById("legacyScroll"), start: "left 70%", toggleActions: "play none none none" },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="legacy" ref={containerRef} className="bg-background relative overflow-hidden">
      <PatternLayer era="colony" opacity={0.04} />

      <div ref={headerRef} className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">The Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-institutional mb-6">
            A Family's Promise to a Nation
          </h2>
          <p className="text-foreground/60 font-sans text-lg max-w-3xl mx-auto leading-relaxed">
            The family's journey in real estate development began in 1956, in the wake of migration, with resilience, vision, and an unshakable belief in rebuilding lives through land and community. Over nearly seven decades, more than 30,000 kanals of land have been developed into thriving communities.
          </p>
        </div>
      </div>

      <div ref={wrapperRef} className="relative h-screen">
        <div ref={panelsRef} className="absolute top-0 left-0 h-full flex">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="legacy-panel relative w-screen h-full flex items-center flex-shrink-0">
              <div className="panel-image absolute inset-0">
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: `url('${milestone.image}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "sepia(30%) saturate(80%)" }}
                />
                <div className="absolute inset-0 bg-background/70" />
              </div>
              <div className="panel-content relative z-10 container mx-auto px-6 md:px-20">
                <div className="max-w-3xl">
                  <span className="text-accent font-serif text-7xl md:text-9xl opacity-30 absolute -top-8 -left-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">{milestone.year}</p>
                  <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-4 tracking-institutional">{milestone.title}</h3>
                  <p className="text-accent font-serif text-xl md:text-2xl italic mb-6">"{milestone.tagline}"</p>
                  <p className="text-foreground/70 font-sans text-base md:text-lg leading-relaxed max-w-2xl">{milestone.description}</p>
                </div>
              </div>
              {index < milestones.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-1/3 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
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