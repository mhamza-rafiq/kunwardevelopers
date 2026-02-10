import { useRef, useLayoutEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const LeadershipPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Image reveal - simplified
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -60,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Content reveal
      gsap.from(contentRef.current?.querySelectorAll(".reveal-item"), {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="leadership" ref={containerRef} className="h-screen flex items-center bg-background relative overflow-hidden">
      {/* Subtle Girih */}
      <div className="girih-layer" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Leadership"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                style={{ filter: "sepia(20%) saturate(80%)" }}
              />
            </div>
            {/* Accent Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-accent/10 flex items-center justify-center">
              <span className="text-accent font-serif text-3xl tracking-institutional">K</span>
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef}>
            <p className="reveal-item text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
              Leadership & Governance
            </p>
            <h2 className="reveal-item font-serif text-4xl md:text-5xl text-foreground mb-8 tracking-institutional">
              How a Family Business Scales Without Losing Its Soul
            </h2>

            <blockquote className="reveal-item border-l-2 border-accent pl-8 my-10">
              <p className="font-serif text-xl md:text-2xl text-foreground/90 italic leading-relaxed">
                "When you own your family name on a project, profit margins take a backseat to legacy margins. You choose materials that will outlast your grandchildren."
              </p>
            </blockquote>

            <p className="reveal-item text-foreground/60 font-sans text-base leading-relaxed mb-10">
              Kunwar Developers operates with the rigor of a publicly traded company and the long-term thinking of a family enterprise. Our Chairman, Hassan Masood Kunwar, oversees operations with a family council and independent advisory board. This is why our projects appreciate while others depreciate.
            </p>

            <Link
              to="/leadership"
              className="reveal-item inline-flex items-center gap-3 text-foreground font-sans text-sm tracking-[0.15em] uppercase group hover:text-accent transition-colors duration-300"
            >
              Meet Our Leadership
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPreview;
