import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: "Institutional Discipline",
    description:
      "We operate with the rigor of a publicly traded company while maintaining the agility and long-term thinking of a family enterprise.",
  },
  {
    title: "Generational Stewardship",
    description:
      "Every decision is made with future generations in mind. We are custodians, not just owners, of the Kunwar legacy.",
  },
  {
    title: "Transparent Accountability",
    description:
      "Open books, clear communication, and measurable outcomes. We hold ourselves to the standards we expect of others.",
  },
];

const GovernancePhilosophy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image parallax and reveal
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Image parallax on scroll
      gsap.to(imageRef.current?.querySelector("img"), {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Content reveal
      gsap.from(contentRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Pillar cards stagger
      const pillars = contentRef.current?.querySelectorAll(".governance-pillar");
      if (pillars?.length) {
        gsap.from(pillars, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        });
      }

      // Quote line draw
      gsap.from(".quote-line", {
        scaleY: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center py-20 bg-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
                alt="Kunwar Governance"
                className="w-full h-[500px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/30 -z-10" />
            
            {/* Quote Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-transparent p-8">
              <div className="flex gap-4">
                <div className="quote-line w-1 bg-accent origin-top" />
                <blockquote className="font-serif text-xl md:text-2xl text-primary-foreground italic">
                  "We don't build for today. We build for our grandchildren."
                </blockquote>
              </div>
              <p className="text-accent font-sans text-sm mt-4 ml-5">
                — Founder's Philosophy, 1956
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div ref={contentRef}>
            <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase mb-4 block">
              How We Operate
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6">
              Governance Philosophy
            </h2>
            <p className="text-primary-foreground/70 font-sans text-lg leading-relaxed mb-12">
              Family-owned doesn't mean family-run. We've built institutional 
              structures that ensure accountability, transparency, and 
              long-term thinking — the hallmarks of enterprises that endure.
            </p>

            {/* Pillars */}
            <div className="space-y-8">
              {pillars.map((pillar, index) => (
                <div key={pillar.title} className="governance-pillar group">
                  <div className="flex items-start gap-6">
                    <span className="text-accent font-serif text-3xl font-light mt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-primary-foreground mb-2 group-hover:text-accent transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-primary-foreground/60 font-sans leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                  {index < pillars.length - 1 && (
                    <div className="w-full h-px bg-primary-foreground/10 mt-8 ml-12" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernancePhilosophy;
