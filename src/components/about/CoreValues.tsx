import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
import { Shield, Users, Gem, TreePine } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Shield,
    title: "Heritage Credibility",
    tagline: "Your trust isn't borrowed. It's inherited.",
    description:
      "We don't ask you to bet on Kunwar's vision. We ask you to look at what Kunwar's built. Every stone we've extracted is still standing. Every family we've housed is still living. Every road we've paved is still connecting communities. Three generations don't earn trust by making promises. They earn it by keeping the ones they make, even when circumstances change, markets crash, and easier paths appear.",
    accent: "Since 1956",
  },
  {
    icon: Users,
    title: "Family Governance",
    tagline: "We put our name on it. So we answer for it.",
    description:
      "Kunwar Developers isn't a corporation. It's a family business. The difference? When shareholders want profits, families want legacies. Our governance structure includes independent advisors and institutional discipline. But our real board? It's our grandchildren. Every decision we make is filtered through one question: 'Would we want our great-grandchildren living with the consequences?' This changes everything.",
    accent: "Third Generation",
  },
  {
    icon: Gem,
    title: "Enduring Quality",
    tagline: "We build for generations, not quarters.",
    description:
      "Every structure Kunwar Developers builds is designed to appreciate—not depreciate—over decades. We use materials that age like wine, not milk. We design communities that become more valuable as they mature, not less. Top City Phase 1, delivered in 2012, appreciates yearly. Kunwar Heights, completed in 1995, is now a coveted address. This isn't accident. This is intention.",
    accent: "Built to Last",
  },
  {
    icon: TreePine,
    title: "Community Stewardship",
    tagline: "From the earth we extract to the communities we build, we are custodians.",
    description:
      "We don't build subdivisions. We architect neighborhoods. We don't sell plots. We invite families into a future. 25,000+ families have chosen to plant their roots in Kunwar communities. Not because they had no choice, but because they had the instinct to recognize that real estate companies create supply. Kunwar creates belonging.",
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
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="values-header text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase mb-4 block">
            What Guides Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            What We Believe (Because We've Lived It)
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed">
            These aren't corporate values. These are family lessons earned in blood, sweat, and 70 years of keeping promises when keeping them was expensive.
          </p>
        </div>

        {/* Values Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
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
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                {value.title}
              </h3>
              <p className="font-serif text-lg text-accent/80 italic mb-4">
                "{value.tagline}"
              </p>
              <div className="value-line w-12 h-px bg-accent mb-4 origin-left" />
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
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
