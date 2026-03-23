import { useRef, useLayoutEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
import { PatternLayer } from "@/components/brand";

gsap.registerPlugin(ScrollTrigger);

const TopCityShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 20, ease: "none",
        scrollTrigger: { trigger: containerRef.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.from(contentRef.current?.querySelectorAll(".reveal-item"), {
        opacity: 0, y: 50, duration: 1, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 60%", toggleActions: "play none none none" },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top-city" ref={containerRef} className="relative min-h-screen flex items-center py-24 overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-background/65" />
      <PatternLayer era="node" opacity={0.03} />
      <div className="girih-layer" />

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={contentRef}>
            <p className="reveal-item text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
              Development Partner
            </p>
            <h2 className="reveal-item font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-institutional leading-[1.1]">
              Developed by Kunwar.
              <span className="block text-accent">Trusted by Pakistan.</span>
            </h2>
            <h3 className="reveal-item font-serif text-xl md:text-2xl text-foreground/80 italic mb-8">
              "Top City Islamabad: Built with Kunwar's Hands"
            </h3>
            <p className="reveal-item text-foreground/70 font-sans text-base md:text-lg leading-relaxed mb-6">
              Kunwar Developers was engaged as the developer of Top City Islamabad — entrusted with the complete development contract for one of the country's most ambitious urban projects.
            </p>
            <p className="reveal-item text-foreground/60 font-sans text-base leading-relaxed mb-8">
              From 2010 to 2024, our teams executed comprehensive development works — infrastructure, roads, utilities, and community planning. Our C-1 contractor status and subsidiary companies Pak-Italia Diligence and Yellow Line Constructions ensured institutional-grade execution at every phase.
            </p>

            <Link
              to="/top-city"
              className="reveal-item inline-flex items-center gap-3 text-foreground font-sans text-sm tracking-[0.15em] uppercase group hover:text-accent transition-colors duration-300"
            >
              Explore Top City
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          <div className="reveal-item">
            <div className="card-cream p-10 md:p-14">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="font-serif text-5xl md:text-6xl text-secondary-foreground tracking-institutional">10K+</span>
                  <p className="text-secondary-foreground/60 font-sans text-sm mt-2">Kanals Developed</p>
                </div>
                <div>
                  <span className="font-serif text-5xl md:text-6xl text-secondary-foreground tracking-institutional">5</span>
                  <p className="text-secondary-foreground/60 font-sans text-sm mt-2">Phases Planned</p>
                </div>
                <div>
                  <span className="font-serif text-5xl md:text-6xl text-secondary-foreground tracking-institutional">C-1</span>
                  <p className="text-secondary-foreground/60 font-sans text-sm mt-2">Contractor Status</p>
                </div>
                <div>
                  <span className="font-serif text-5xl md:text-6xl text-secondary-foreground tracking-institutional">2010</span>
                  <p className="text-secondary-foreground/60 font-sans text-sm mt-2">Development Start</p>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-secondary-foreground/10">
                <p className="text-secondary-foreground/60 font-sans text-sm leading-relaxed">
                  Engaged as development partner — executing infrastructure, construction, and community planning across all phases of Top City Islamabad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 hidden lg:block">
        <span className="text-foreground/20 font-serif text-8xl">01</span>
      </div>
    </section>
  );
};

export default TopCityShowcase;