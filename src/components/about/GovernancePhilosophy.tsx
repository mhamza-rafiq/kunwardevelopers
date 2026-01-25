import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

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

      // Paragraphs stagger
      const paragraphs = contentRef.current?.querySelectorAll(".content-paragraph");
      if (paragraphs?.length) {
        gsap.from(paragraphs, {
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
            <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-8">
              How a Family Business Scales Without Losing Its Soul
            </h2>
            
            <p className="content-paragraph text-primary-foreground/80 font-sans text-lg leading-relaxed mb-6">
              Kunwar Developers operates with the rigor of a publicly traded company and the long-term thinking of a family enterprise. This combination is rare. Rarer still is pulling it off.
            </p>

            <p className="content-paragraph text-primary-foreground/70 font-sans text-base leading-relaxed mb-6">
              Our Chairman, Hassan Masood Kunwar, oversees operations with a family council and independent advisory board. Quarterly reviews ensure we stay aligned between heritage values and growth ambitions. But there's something no board agenda captures:
            </p>

            <p className="content-paragraph text-accent font-serif text-xl italic mb-6">
              Accountability that never sleeps.
            </p>

            <p className="content-paragraph text-primary-foreground/70 font-sans text-base leading-relaxed mb-6">
              When you own your family name on a project, profit margins take a backseat to legacy margins. You choose materials that will outlast your grandchildren. You hire architects who won't compromise. You select contractors who understand they're building someone's forever home, not just moving aggregate.
            </p>

            <p className="content-paragraph text-primary-foreground/60 font-sans text-base leading-relaxed">
              This is why Kunwar Developers' projects appreciate while others depreciate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernancePhilosophy;
