import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

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

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Create main animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: chainRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });

      // First block appears
      tl.from(block1Ref.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
      });

      // First line draws
      tl.from(
        line1Ref.current,
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.6,
          ease: "power2.inOut",
        },
        "-=0.3"
      );

      // Second block appears
      tl.from(
        block2Ref.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // Second line draws
      tl.from(
        line2Ref.current,
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.6,
          ease: "power2.inOut",
        },
        "-=0.3"
      );

      // Third block appears
      tl.from(
        block3Ref.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // Count up animations - slow and authoritative
      tl.to(
        stat1Ref.current,
        {
          innerText: 6,
          duration: 1.5,
          snap: { innerText: 1 },
          ease: "power2.out",
        },
        "-=0.5"
      );

      // For C-1, just fade it in since it's text
      tl.from(
        stat2Ref.current,
        {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=1.2"
      );

      tl.to(
        stat3Ref.current,
        {
          innerText: 30000,
          duration: 2,
          snap: { innerText: 100 },
          ease: "power2.out",
        },
        "-=1.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-background relative overflow-hidden">
      {/* Subtle Girih Background */}
      <div className="girih-layer" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 md:mb-32">
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Our Differentiator
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-institutional">
            The Chain We Own
          </h2>
          <p className="text-foreground/50 font-sans text-lg mt-6 max-w-2xl mx-auto">
            Complete vertical integration from extraction to community.
          </p>
        </div>

        {/* Chain Diagram */}
        <div ref={chainRef} className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
            {/* Block 1: Mining */}
            <div ref={block1Ref} className="flex flex-col items-center">
              <div className="w-48 h-48 md:w-56 md:h-56 border border-accent/30 flex flex-col items-center justify-center bg-background relative group hover:border-accent/60 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span ref={stat1Ref} className="text-accent font-serif text-6xl md:text-7xl tracking-institutional">0</span>
                <span className="text-foreground/60 font-sans text-xs tracking-[0.2em] uppercase mt-2">Leases</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mt-6 tracking-institutional">Mining</h3>
              <p className="text-foreground/50 font-sans text-sm mt-2">Granite · Marble · Minerals</p>
            </div>

            {/* Connector Line 1 */}
            <div ref={line1Ref} className="hidden lg:block w-24 xl:w-32 h-px bg-gradient-to-r from-accent/60 to-accent/30" />
            <div className="lg:hidden w-px h-12 bg-gradient-to-b from-accent/60 to-accent/30" />

            {/* Block 2: Construction */}
            <div ref={block2Ref} className="flex flex-col items-center">
              <div className="w-48 h-48 md:w-56 md:h-56 border border-accent/30 flex flex-col items-center justify-center bg-background relative group hover:border-accent/60 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span ref={stat2Ref} className="text-accent font-serif text-5xl md:text-6xl tracking-institutional">C-1</span>
                <span className="text-foreground/60 font-sans text-xs tracking-[0.2em] uppercase mt-2">License</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mt-6 tracking-institutional">Construction</h3>
              <p className="text-foreground/50 font-sans text-sm mt-2">Roads · Bridges · Infrastructure</p>
            </div>

            {/* Connector Line 2 */}
            <div ref={line2Ref} className="hidden lg:block w-24 xl:w-32 h-px bg-gradient-to-r from-accent/30 to-accent/60" />
            <div className="lg:hidden w-px h-12 bg-gradient-to-b from-accent/30 to-accent/60" />

            {/* Block 3: Communities */}
            <div ref={block3Ref} className="flex flex-col items-center">
              <div className="w-48 h-48 md:w-56 md:h-56 border border-accent/30 flex flex-col items-center justify-center bg-background relative group hover:border-accent/60 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-baseline">
                  <span ref={stat3Ref} className="text-accent font-serif text-5xl md:text-6xl tracking-institutional">0</span>
                  <span className="text-accent font-serif text-3xl tracking-institutional">+</span>
                </div>
                <span className="text-foreground/60 font-sans text-xs tracking-[0.2em] uppercase mt-2">Kanals</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mt-6 tracking-institutional">Communities</h3>
              <p className="text-foreground/50 font-sans text-sm mt-2">Top City · Lakeshore · More</p>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-20 md:mt-32">
          <p className="text-foreground/40 font-serif text-xl md:text-2xl italic tracking-wide">
            "From the quarry to the community gate—we control every step."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChainWeOwn;