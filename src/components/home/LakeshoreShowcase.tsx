import { useRef, useLayoutEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
import { PatternLayer } from "@/components/brand";

gsap.registerPlugin(ScrollTrigger);

const OrientalTowerShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 15, ease: "none",
        scrollTrigger: { trigger: containerRef.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.from(contentRef.current?.querySelectorAll(".reveal-item"), {
        opacity: 0, y: 60, duration: 1.2, stagger: 0.2, ease: "power2.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 55%", toggleActions: "play none none none" },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center py-24 overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      />
      <div className="absolute inset-0 bg-background/60" />
      <PatternLayer era="node" opacity={0.025} />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block" />

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <p className="reveal-item text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Our Flagship Project
          </p>
          <h2 className="reveal-item font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-institutional leading-[1.1]">
            Oriental Tower — Kunwar Block
          </h2>
          <h3 className="reveal-item font-serif text-xl md:text-2xl text-accent italic mb-8">
            "A Kunwar Developers Signature Development"
          </h3>
          <p className="reveal-item text-foreground/70 font-sans text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Oriental Tower Kunwar Block is a Kunwar Developers project — conceived, developed, and delivered under the family name. This is where our legacy of quality meets modern vertical living.
          </p>
          <p className="reveal-item text-foreground/60 font-sans text-base leading-relaxed mb-8 max-w-3xl mx-auto">
            Built with materials from our own mining operations and executed by our C-1 certified construction subsidiaries, Oriental Tower represents true vertical integration — from quarry to finished residence, every step under Kunwar's control.
          </p>

          <Link
            to="/projects"
            className="reveal-item inline-flex items-center gap-3 text-foreground font-sans text-sm tracking-[0.15em] uppercase group hover:text-accent transition-colors duration-300"
          >
            View Our Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>

          <div className="reveal-item flex flex-wrap justify-center gap-12 mt-16 pt-12 border-t border-foreground/10">
            <div className="text-center">
              <span className="font-serif text-4xl md:text-5xl text-accent tracking-institutional">C-1</span>
              <p className="text-foreground/50 font-sans text-sm mt-2">Built Standard</p>
            </div>
            <div className="text-center">
              <span className="font-serif text-4xl md:text-5xl text-accent tracking-institutional">Own</span>
              <p className="text-foreground/50 font-sans text-sm mt-2">Project Ownership</p>
            </div>
            <div className="text-center">
              <span className="font-serif text-4xl md:text-5xl text-accent tracking-institutional">100%</span>
              <p className="text-foreground/50 font-sans text-sm mt-2">Vertically Integrated</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:block">
        <span className="text-foreground/20 font-serif text-8xl">02</span>
      </div>
    </section>
  );
};

export default OrientalTowerShowcase;