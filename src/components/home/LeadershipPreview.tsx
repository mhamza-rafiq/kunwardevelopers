import { useRef, useLayoutEffect } from "react";
import { ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const LeadershipPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Image parallax and reveal
      gsap.from(imageRef.current, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Content slide in
      gsap.from(contentRef.current, {
        x: 80,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Quote line-by-line reveal
      const quoteLines = contentRef.current?.querySelectorAll(".quote-line");
      if (quoteLines?.length) {
        gsap.from(quoteLines, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Leadership placeholder"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary flex items-center justify-center">
              <span className="text-accent font-serif text-3xl">K</span>
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef}>
            <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Leadership & Governance
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Vision That Builds Nations
            </h2>

            <blockquote className="border-l-2 border-accent pl-6 my-8">
              <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
                <span className="quote-line block">"Development must serve more than shareholders.</span>
                <span className="quote-line block">It must serve communities, cities, and the nation's future."</span>
              </p>
            </blockquote>

            <p className="text-muted-foreground font-sans text-base leading-relaxed mb-8">
              Kunwar Developers is guided by leadership that has shaped not only
              communities but policy itself.
            </p>

            <div className="space-y-4 mb-8">
              {["Policy & Economic Development Leadership", "70-Year Family Legacy", "Institutional Governance Standards"].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent" />
                  <p className="text-foreground font-sans text-sm">{item}</p>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-foreground font-sans text-sm tracking-wider uppercase group hover:text-accent transition-colors">
              Meet Our Leadership
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPreview;
