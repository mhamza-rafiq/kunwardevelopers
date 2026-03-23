import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
import { PatternLayer } from "@/components/brand";

gsap.registerPlugin(ScrollTrigger);

const ChainWeOwn = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const chainRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const block3Ref = useRef<HTMLDivElement>(null);
  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);
  const stat3Ref = useRef<HTMLSpanElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0, y: 40, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%", toggleActions: "play none none none" },
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: chainRef.current, start: "top 65%", toggleActions: "play none none none" },
      });

      tl.from(block1Ref.current, { opacity: 0, y: 40, duration: 0.8, ease: "power2.out" });
      tl.from(line1Ref.current, { scaleX: 0, transformOrigin: "left center", duration: 0.6, ease: "power2.inOut" }, "-=0.3");
      tl.from(block2Ref.current, { opacity: 0, y: 40, duration: 0.8, ease: "power2.out" }, "-=0.2");
      tl.from(line2Ref.current, { scaleX: 0, transformOrigin: "left center", duration: 0.6, ease: "power2.inOut" }, "-=0.3");
      tl.from(block3Ref.current, { opacity: 0, y: 40, duration: 0.8, ease: "power2.out" }, "-=0.2");
      tl.to(stat1Ref.current, { innerText: 6, duration: 1.5, snap: { innerText: 1 }, ease: "power2.out" }, "-=0.5");
      tl.from(stat2Ref.current, { opacity: 0, duration: 0.8, ease: "power2.out" }, "-=1.2");
      tl.to(stat3Ref.current, { innerText: 25000, duration: 2, snap: { innerText: 100 }, ease: "power2.out" }, "-=1.5");
      tl.from(quoteRef.current, { opacity: 0, y: 30, duration: 1, ease: "power2.out" }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center py-24 bg-background relative overflow-hidden">
      <PatternLayer era="corridor" opacity={0.03} />
      <div className="girih-layer" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">Our Differentiator</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-institutional mb-6">
            The Only Developer Who Owns the Entire Chain
          </h2>
          <p className="text-foreground/60 font-sans text-lg max-w-2xl mx-auto">
            Pak-Italia Diligence (C-1) and Yellow Line Constructions power our execution. Six mining leases fuel our supply — Lead in Khuzdar, Coal in Orakzai, Emerald in Chitral, Granite in Bajaur, and Pink Salt in Khushab.
          </p>
        </div>

        <div ref={chainRef} className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
            {/* Block 1: Mining */}
            <div ref={block1Ref} className="flex flex-col items-center max-w-xs">
              <div className="w-48 h-48 md:w-64 md:h-64 border border-accent/30 flex flex-col items-center justify-center bg-background relative group hover:border-accent/60 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span ref={stat1Ref} className="text-accent font-serif text-6xl md:text-7xl tracking-institutional">0</span>
                <span className="text-foreground/60 font-sans text-xs tracking-[0.2em] uppercase mt-2">Mineral Leases</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mt-6 tracking-institutional">Mining</h3>
              <p className="text-foreground/50 font-sans text-sm mt-2 text-center leading-relaxed px-4">
                Lead, Coal, Emerald, Granite, Pink Salt — strategic control of raw materials across Pakistan.
              </p>
            </div>

            <div ref={line1Ref} className="hidden lg:block w-24 xl:w-32 h-px bg-gradient-to-r from-accent/60 to-accent/30" />
            <div className="lg:hidden w-px h-12 bg-gradient-to-b from-accent/60 to-accent/30" />

            {/* Block 2: Construction */}
            <div ref={block2Ref} className="flex flex-col items-center max-w-xs">
              <div className="w-48 h-48 md:w-64 md:h-64 border border-accent/30 flex flex-col items-center justify-center bg-background relative group hover:border-accent/60 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span ref={stat2Ref} className="text-accent font-serif text-5xl md:text-6xl tracking-institutional">C-1</span>
                <span className="text-foreground/60 font-sans text-xs tracking-[0.2em] uppercase mt-2">License</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mt-6 tracking-institutional">Construction</h3>
              <p className="text-foreground/50 font-sans text-sm mt-2 text-center leading-relaxed px-4">
                Pak-Italia Diligence (C-1) and Yellow Line Constructions — highest tier execution capability.
              </p>
            </div>

            <div ref={line2Ref} className="hidden lg:block w-24 xl:w-32 h-px bg-gradient-to-r from-accent/30 to-accent/60" />
            <div className="lg:hidden w-px h-12 bg-gradient-to-b from-accent/30 to-accent/60" />

            {/* Block 3: Communities */}
            <div ref={block3Ref} className="flex flex-col items-center max-w-xs">
              <div className="w-48 h-48 md:w-64 md:h-64 border border-accent/30 flex flex-col items-center justify-center bg-background relative group hover:border-accent/60 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-baseline">
                  <span ref={stat3Ref} className="text-accent font-serif text-5xl md:text-6xl tracking-institutional">0</span>
                  <span className="text-accent font-serif text-3xl tracking-institutional">+</span>
                </div>
                <span className="text-foreground/60 font-sans text-xs tracking-[0.2em] uppercase mt-2">Families</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mt-6 tracking-institutional">Communities</h3>
              <p className="text-foreground/50 font-sans text-sm mt-2 text-center leading-relaxed px-4">
                30,000+ kanals developed into thriving neighborhoods across seven decades.
              </p>
            </div>
          </div>
        </div>

        <div ref={quoteRef} className="text-center mt-12 md:mt-16 max-w-3xl mx-auto">
          <blockquote className="border-l-2 border-accent pl-8 text-left">
            <p className="text-foreground/80 font-serif text-xl md:text-2xl italic leading-relaxed mb-4">
              "Since 1956, we have not merely developed land — we have built communities, legacies, and futures."
            </p>
            <cite className="text-accent font-sans text-sm tracking-wide not-italic">
              — Kunwar Family Principle
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ChainWeOwn;