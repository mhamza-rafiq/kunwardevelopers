import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "1956",
    title: "The Beginning: Mirpur's Awakening",
    description:
      "The Kunwar family's journey didn't begin with ambition. It began with observation. Post-Partition, Mirpur held mineral wealth that Pakistan desperately needed to rebuild itself. Our founder, Kunwar Qutubuddin Khan, didn't see a business opportunity. He saw a nation's skeleton asking to be built. That year, the first mining lease was acquired. The first granite blocks were extracted. The first promise was made: 'We will build this nation's infrastructure with the same care we'd build our own home.'",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    year: "1972–1980",
    title: "The Colonies: Organized Dreams",
    description:
      "While real estate speculators were playing land games, the Kunwar family was playing nation-building. Chishtian Colonies emerged as something revolutionary: organized residential communities for ordinary middle-class Pakistanis. Not luxury. Not slums. Justice—in the form of planned streets, reliable water, schools within walking distance, and enough space to plant a garden and raise a child with dignity. We learned something profound in those years: Development serves people, or it serves no one.",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600&q=80",
  },
  {
    year: "1985–1995",
    title: "The Expansion: From Stone to Cities",
    description:
      "By the mid-80s, Kunwar Mining had proven it could extract. Now we'd prove we could orchestrate. Real estate division launched—not as a profit center, but as an extension of the mining operation. We began asking: 'What if we didn't just supply the stone for others' cities, but built our own?' Kunwar Heights in Rawalpindi became the prototype: 500 homes. 100% occupancy. This is when the family realized: vertical integration wasn't a strategy. It was an obligation.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    year: "1998–2008",
    title: "Institutional Maturity: The C-1 Moment",
    description:
      "Kunwar Developers was formally incorporated. But this wasn't paperwork. It was a covenant. We applied for C-1 contractor status—Pakistan's highest construction certification. The application wasn't just checked off. It was lived. We spent a decade proving we could execute complex infrastructure projects—motorways, bridges, interchanges—on time, on budget, with zero safety compromises. When the C-1 license arrived in 2010, it wasn't a credential. It was an artifact of promise-keeping.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    year: "2008–2020",
    title: "Top City Islamabad: The Gamble",
    description:
      "Here's what people don't understand about Top City: it was a bet against conventional wisdom. In 2008, when we launched this 10,000-kanal smart city project at the Islamabad motorway junction, the real estate fraternity said we were mad. 'Why would anyone buy out there?' But we saw what others didn't: a new Islamabad being born. An airport coming. A nation reshaping its economic center. So we built it. All of it. From the quarries we own, with infrastructure we designed, on a timeline we promised.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
  {
    year: "2020–2025",
    title: "Lakeshore Towers & Vertical Dominion",
    description:
      "By 2020, we'd earned the right to build something purely beautiful. Lakeshore Towers isn't a profit center. It's a statement. 40+ stories of 'This is what Pakistan looks like when we stop compromising.' International construction standards. 5-star amenities. A lake view that changes your definition of home. Simultaneously, we acquired 6 additional mining leases, finalizing our vertical integration. From granite crystal to chandelier in a Lakeshore penthouse—it passes through no hands but ours.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
  },
  {
    year: "2024–2026",
    title: "Generational Transition: The Baton Passes",
    description:
      "Third-generation leadership takes the helm. But the principles? Unchanged. Hassan Masood Kunwar steps fully into the role of steward—not owner. That's the distinction. Owners extract. Stewards amplify. This generation adds something their fathers couldn't: global perspective, technology fluency, and a hunger to prove that Pakistani developers can compete with the world's best without compromising community values that made us great.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
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
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase mb-4 block">
            Our Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
            Seven Decades of Building
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Scroll through our history — each era isn't just a milestone. It's a choice we made about what kind of legacy we wanted to leave.
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

      {/* Horizontal Scroll Container - centered in viewport */}
      <div ref={triggerRef} className="relative overflow-hidden min-h-[80vh] flex items-center">
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
              className="timeline-card flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[55vw] h-[60vh] relative"
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
                    <span className="text-accent font-serif text-5xl md:text-7xl font-light opacity-30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                    <div className="w-4 h-4 rounded-full bg-accent animate-pulse" />
                    <div className="absolute top-1/2 left-full w-16 h-px bg-accent/30 -translate-y-1/2" />
                  </div>

                  {/* Text Content */}
                  <div className="max-w-xl">
                    <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed line-clamp-5 md:line-clamp-none">
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
