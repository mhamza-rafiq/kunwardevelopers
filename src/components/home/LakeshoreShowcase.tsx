import { useRef, useLayoutEffect } from "react";
import { ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const amenities = [
  "Lakefront promenade & water features",
  "International-grade high-rise living",
  "Rooftop amenities & sky lounges",
  "Premium retail & dining district",
];

const LakeshoreShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Background parallax - vertical emphasis for towers
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Content reveal - vertical emphasis
      gsap.from(contentRef.current?.querySelectorAll(".reveal-item"), {
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 55%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-Bleed Background - Vertical/Tower imagery */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/75" />

      {/* Accent Line - Vertical for towers */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block" />

      {/* Content - Centered for tower emphasis */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <p className="reveal-item text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
            The High-Rise Jewel
          </p>
          <h2 className="reveal-item font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 tracking-institutional leading-[1.1]">
            Lakeshore
            <span className="block text-accent">Towers</span>
          </h2>
          <p className="reveal-item text-foreground/70 font-sans text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Premium lakeside residences within Top City. International-grade amenities 
            with panoramic views of the Margalla Hills and city skyline.
          </p>

          {/* Amenities Grid */}
          <div className="reveal-item grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-12">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border border-foreground/10 hover:border-accent/30 transition-colors duration-300">
                <div className="w-1.5 h-1.5 bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-foreground/80 font-sans text-base">{amenity}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#"
            className="reveal-item inline-flex items-center gap-3 text-foreground font-sans text-sm tracking-[0.15em] uppercase group hover:text-accent transition-colors duration-300"
          >
            Discover Lakeshore
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </a>

          {/* Stats Row */}
          <div className="reveal-item flex flex-wrap justify-center gap-12 mt-16 pt-12 border-t border-foreground/10">
            <div className="text-center">
              <span className="font-serif text-4xl md:text-5xl text-accent tracking-institutional">40+</span>
              <p className="text-foreground/50 font-sans text-sm mt-2">Stories High</p>
            </div>
            <div className="text-center">
              <span className="font-serif text-4xl md:text-5xl text-accent tracking-institutional">360°</span>
              <p className="text-foreground/50 font-sans text-sm mt-2">Panoramic Views</p>
            </div>
            <div className="text-center">
              <span className="font-serif text-4xl md:text-5xl text-accent tracking-institutional">5★</span>
              <p className="text-foreground/50 font-sans text-sm mt-2">Hotel Amenities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Marker */}
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <span className="text-foreground/20 font-serif text-8xl">02</span>
      </div>
    </section>
  );
};

export default LakeshoreShowcase;