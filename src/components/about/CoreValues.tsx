import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
import { Shield, Users, Gem, TreePine } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Shield,
    title: "Heritage Credibility",
    description:
      "Three generations of trust built on unwavering commitment to our word. Every promise kept, every commitment honored.",
    accent: "Since 1956",
  },
  {
    icon: Users,
    title: "Family Governance",
    description:
      "Institutional discipline with family values. We blend corporate best practices with the accountability that comes from putting our family name on every project.",
    accent: "Third Generation",
  },
  {
    icon: Gem,
    title: "Enduring Quality",
    description:
      "We build for generations, not quarters. Our developments are designed to appreciate in value and stand the test of time.",
    accent: "Built to Last",
  },
  {
    icon: TreePine,
    title: "Community Stewardship",
    description:
      "From the land we extract to the communities we build, we are custodians of Pakistan's future, not just developers.",
    accent: "Earth to Communities",
  },
];

const CoreValues = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section header animation
      gsap.from(".values-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-header",
          start: "top 85%",
        },
      });

      // Cards stagger reveal with rotation
      const cards = cardsRef.current?.querySelectorAll(".value-card");
      if (cards?.length) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            y: 100,
            opacity: 0,
            rotateY: index % 2 === 0 ? -15 : 15,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          });

          // Icon animation
          const icon = card.querySelector(".value-icon");
          if (icon) {
            gsap.from(icon, {
              scale: 0,
              rotate: -180,
              duration: 0.8,
              delay: 0.3,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            });
          }

          // Decorative line draw
          const line = card.querySelector(".value-line");
          if (line) {
            gsap.from(line, {
              scaleX: 0,
              duration: 0.8,
              delay: 0.5,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="values-header text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase mb-4 block">
            What Guides Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Our Core Values
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed">
            These aren't just words on a wall. They are the principles that have 
            guided our family through seven decades of building Pakistan's future.
          </p>
        </div>

        {/* Values Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className="value-card group relative bg-card p-8 md:p-10 border border-border hover:border-accent/30 transition-colors duration-500"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-accent/0 group-hover:border-accent/40 transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-accent/0 group-hover:border-accent/40 transition-colors duration-500" />

              {/* Icon */}
              <div className="value-icon w-16 h-16 bg-primary/5 flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <span className="text-accent font-sans text-xs tracking-[0.2em] uppercase mb-2 block">
                {value.accent}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                {value.title}
              </h3>
              <div className="value-line w-12 h-px bg-accent mb-4 origin-left" />
              <p className="text-muted-foreground font-sans leading-relaxed">
                {value.description}
              </p>

              {/* Index */}
              <div className="absolute top-8 right-8">
                <span className="text-muted-foreground/20 font-serif text-5xl font-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
