import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "1956",
    title: "The Beginning",
    description:
      "Kunwar Mining established in Mirpur, laying the foundation for what would become one of Pakistan's most trusted family enterprises.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    year: "1972",
    title: "Expansion Era",
    description:
      "Strategic expansion into infrastructure contracting, building roads and bridges that connected communities across the region.",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600&q=80",
  },
  {
    year: "1985",
    title: "Real Estate Vision",
    description:
      "Entry into real estate development with a vision to create integrated communities that honor Pakistani heritage.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    year: "1998",
    title: "Institutional Growth",
    description:
      "Formal incorporation as Kunwar Developers, establishing governance structures modeled on global best practices.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    year: "2008",
    title: "Top City Islamabad",
    description:
      "Launch of our flagship project – a 25,000-kanal master-planned community redefining modern Pakistani urbanism.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
  {
    year: "2024",
    title: "Generational Transition",
    description:
      "Third-generation leadership takes the helm, bringing fresh perspective while honoring seven decades of family values.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
  },
];

const HorizontalTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current || !triggerRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const cards = track?.querySelectorAll(".timeline-card");
      
      // Calculate the scroll distance
      const scrollDistance = track!.scrollWidth - window.innerWidth;

      // Horizontal scroll animation
      const scrollTween = gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Progress bar
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
        },
      });

      // Card reveal animations
      cards?.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0.3,
          scale: 0.9,
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 40%",
            scrub: 1,
          },
        });

        // Image parallax within each card
        const image = card.querySelector(".timeline-image");
        if (image) {
          gsap.to(image, {
            x: 50,
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: 1,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background">
      {/* Section Header */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase mb-4 block">
            Our Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
            Seven Decades of Building
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Scroll through our history — from humble quarries to iconic developments 
            that shape Pakistan's urban landscape.
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border z-50 pointer-events-none opacity-0 md:opacity-100">
        <div
          ref={progressRef}
          className="h-full bg-accent origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={triggerRef} className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-8 md:gap-12 px-6 md:px-12"
          style={{ width: "fit-content" }}
        >
          {/* Left Spacer */}
          <div className="w-[10vw] flex-shrink-0" />

          {timelineData.map((item, index) => (
            <div
              key={item.year}
              className="timeline-card flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-[70vh] relative"
            >
              <div className="relative h-full bg-card border border-border overflow-hidden group">
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="timeline-image w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
                  {/* Year Badge */}
                  <div className="absolute top-8 left-8 md:top-12 md:left-12">
                    <span className="text-accent font-serif text-6xl md:text-8xl font-light opacity-30">
                      {item.year}
                    </span>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                    <div className="w-4 h-4 rounded-full bg-accent animate-pulse" />
                    <div className="absolute top-1/2 left-full w-16 h-px bg-accent/30 -translate-y-1/2" />
                  </div>

                  {/* Text Content */}
                  <div className="max-w-md">
                    <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Index */}
                  <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
                    <span className="text-muted-foreground/30 font-sans text-sm">
                      {String(index + 1).padStart(2, "0")} / {String(timelineData.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Right Spacer */}
          <div className="w-[10vw] flex-shrink-0" />
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="w-8 h-px bg-border" />
          <span className="text-xs tracking-wider uppercase">Scroll horizontally</span>
          <div className="w-8 h-px bg-border" />
        </div>
      </div>
    </section>
  );
};

export default HorizontalTimeline;
