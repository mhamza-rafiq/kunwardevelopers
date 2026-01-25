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
      // Background parallax
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Content reveal
      gsap.from(contentRef.current?.querySelectorAll(".reveal-item"), {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top-city" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-Bleed Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/80" />

      {/* Node Network Pattern - Era 3 (Smart Cities) */}
      <PatternLayer era="node" opacity={0.03} />

      {/* Girih Layer */}
      <div className="girih-layer" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div ref={contentRef}>
            <p className="reveal-item text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
              Flagship Development
            </p>
            <h2 className="reveal-item font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 tracking-institutional leading-[1.1]">
              Top City
              <span className="block text-accent">Islamabad</span>
            </h2>
            <p className="reveal-item text-foreground/70 font-sans text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
              Smart city at Islamabad's motorway junction. Direct airport corridor. IoT infrastructure.
            </p>

            {/* CTA */}
            <Link
              to="/top-city"
              className="reveal-item inline-flex items-center gap-3 text-foreground font-sans text-sm tracking-[0.15em] uppercase group hover:text-accent transition-colors duration-300"
            >
              Explore Top City
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Stats Card - Cream on Dark */}
          <div className="reveal-item">
            <div className="card-cream p-10 md:p-14">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="font-serif text-5xl md:text-6xl text-navy tracking-institutional">10K+</span>
                  <p className="text-navy/60 font-sans text-sm mt-2">Kanals Developed</p>
                </div>
                <div>
                  <span className="font-serif text-5xl md:text-6xl text-navy tracking-institutional">5</span>
                  <p className="text-navy/60 font-sans text-sm mt-2">Phases Planned</p>
                </div>
                <div>
                  <span className="font-serif text-5xl md:text-6xl text-navy tracking-institutional">24/7</span>
                  <p className="text-navy/60 font-sans text-sm mt-2">Security Coverage</p>
                </div>
                <div>
                  <span className="font-serif text-5xl md:text-6xl text-navy tracking-institutional">AAA</span>
                  <p className="text-navy/60 font-sans text-sm mt-2">Location Rating</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-navy/10">
                <p className="text-navy/50 font-sans text-sm">
                  Adjacent to New Islamabad International Airport with direct motorway access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Marker */}
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <span className="text-foreground/20 font-serif text-8xl">01</span>
      </div>
    </section>
  );
};

export default TopCityShowcase;