import { useRef, useLayoutEffect } from "react";
import { Clock, Layers, Shield } from "lucide-react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: Clock,
    title: "Heritage",
    subtitle: "Seven Decades of Nation-Building",
    description:
      "What began as a post-migration construction enterprise in 1956 has evolved into one of Pakistan's most credible development groups. Our legacy is measured in trust, land transformed, and institutions served.",
    accent: "70 years of continuous operations",
  },
  {
    icon: Layers,
    title: "Integration",
    subtitle: "Mine to Community Control",
    description:
      "From mineral extraction to construction materials to finished communities—Kunwar Developers controls the entire value chain. This vertical integration ensures quality, cost discipline, and delivery certainty.",
    accent: "6 mining leases across Pakistan",
  },
  {
    icon: Shield,
    title: "Governance",
    subtitle: "Institutional Credibility",
    description:
      "C-1 licensed for national infrastructure. Leadership roles in policy and economic development. We operate with the discipline of institutions, not the speculation of developers.",
    accent: "Government-trusted execution",
  },
];

const KunwarDifference = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

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

      // Pillar cards with scroll-linked stagger
      const cards = pillarsRef.current?.querySelectorAll(".pillar-card");
      if (cards?.length) {
        cards.forEach((card, index) => {
          // Main card animation
          gsap.from(card, {
            y: 80,
            opacity: 0,
            rotationY: -5,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });

          // Icon animation
          const icon = card.querySelector(".pillar-icon");
          if (icon) {
            gsap.from(icon, {
              scale: 0,
              rotation: -180,
              duration: 0.8,
              delay: 0.3,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
          }

          // Border animation on hover
          const corners = card.querySelectorAll(".corner-decoration");
          card.addEventListener("mouseenter", () => {
            gsap.to(corners, {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              stagger: 0.05,
            });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(corners, {
              opacity: 0,
              scale: 0.8,
              duration: 0.3,
            });
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-secondary relative overflow-hidden"
    >
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 girih-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-24">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Why Kunwar
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            The Kunwar Difference
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            Where enterprise meets integrity. Development that builds nations,
            not just neighborhoods.
          </p>
        </div>

        {/* Pillars Grid */}
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {pillars.map((pillar) => (
            <div key={pillar.title} className="pillar-card relative group perspective-1000">
              <div className="bg-card p-8 md:p-10 h-full border border-border hover:border-accent/30 transition-colors duration-500">
                {/* Icon */}
                <div className="pillar-icon w-14 h-14 bg-primary flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-accent font-sans text-sm tracking-wide uppercase mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-muted-foreground font-sans text-base leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Accent Stat */}
                <div className="pt-6 border-t border-border">
                  <p className="text-foreground font-sans text-sm font-medium">
                    {pillar.accent}
                  </p>
                </div>

                {/* Corner Decorations */}
                <div className="corner-decoration absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/50 opacity-0 scale-80" />
                <div className="corner-decoration absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent/50 opacity-0 scale-80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KunwarDifference;
