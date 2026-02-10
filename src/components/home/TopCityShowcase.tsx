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
    <section id="top-city" ref={containerRef} className="relative h-screen flex items-center overflow-hidden">
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
      <div className="absolute inset-0 bg-background/65" />

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
            <h2 className="reveal-item font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-institutional leading-[1.1]">
              Where 10,000 Kanals Became
              <span className="block text-accent">Pakistan's Future</span>
            </h2>
            <h3 className="reveal-item font-serif text-xl md:text-2xl text-foreground/80 italic mb-8">
              "Top City Islamabad: The City We Promised Pakistan"
            </h3>
            <p className="reveal-item text-foreground/70 font-sans text-base md:text-lg leading-relaxed mb-6">
              Pakistan's first true smart city wasn't a government vision. It was ours. And we staked everything on it.
            </p>
            <p className="reveal-item text-foreground/60 font-sans text-base leading-relaxed mb-8">
              When we chose Islamabad's motorway junction—5 minutes from the new airport, directly linked to the nation's infrastructure spine—we didn't see real estate coordinates. We saw destiny. 10,000 kanals. 5 phases. 24/7 IoT security. 30% dedicated to green. This isn't development. This is urban poetry written in stone and fiber optic.
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
                  <p className="text-navy/60 font-sans text-sm mt-2">IoT Security</p>
                </div>
                <div>
                  <span className="font-serif text-5xl md:text-6xl text-navy tracking-institutional">30%</span>
                  <p className="text-navy/60 font-sans text-sm mt-2">Green Space</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-navy/10">
                <p className="text-navy/60 font-sans text-sm leading-relaxed">
                  Phase 3 is alive. Phases 4 and 5 are being built. The construction of Pakistan's next chapter started in 2008 and hasn't stopped.
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
