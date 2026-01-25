import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const BrandStory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !wordsRef.current) return;

    const ctx = gsap.context(() => {
      // Split words for animation
      const paragraph = wordsRef.current;
      if (paragraph) {
        const text = paragraph.textContent || "";
        const words = text.split(" ");
        paragraph.innerHTML = words
          .map((word) => `<span class="inline-block opacity-20">${word}</span>`)
          .join(" ");

        const wordSpans = paragraph.querySelectorAll("span");
        
        // Animate words as you scroll
        gsap.to(wordSpans, {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        });
      }

      // Tagline reveal
      gsap.from(".brand-tagline", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".brand-tagline",
          start: "top 85%",
        },
      });

      // Logo mark animation
      gsap.from(".brand-mark", {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".brand-mark",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 girih-pattern opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Brand Mark */}
        <div className="brand-mark text-center mb-16">
          <div className="inline-flex flex-col items-center">
            <div className="w-px h-16 bg-accent mb-6" />
            <span className="font-serif text-6xl md:text-8xl text-accent">K</span>
            <div className="w-px h-16 bg-accent mt-6" />
          </div>
        </div>

        {/* Story Paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p
            ref={wordsRef}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary leading-tight"
          >
            From the ancient quarries of Mirpur, where our ancestors first extracted 
            stone from the earth, to the modern skylines of Islamabad where we now 
            shape communities — our journey is Pakistan's journey. We are not just 
            developers. We are architects of enduring communities, guardians of 
            heritage, and builders of tomorrow.
          </p>
        </div>

        {/* Tagline */}
        <div className="brand-tagline text-center">
          <div className="inline-flex items-center gap-6">
            <span className="w-12 h-px bg-accent" />
            <p className="font-serif text-xl md:text-2xl text-accent italic">
              "From Earth to Communities. Since 1956."
            </p>
            <span className="w-12 h-px bg-accent" />
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-24 pt-16 border-t border-border">
          {[
            { value: "68+", label: "Years of Legacy" },
            { value: "3", label: "Generations" },
            { value: "25,000+", label: "Kanal Developed" },
            { value: "10,000+", label: "Families Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="font-serif text-4xl md:text-5xl text-primary block mb-2">
                {stat.value}
              </span>
              <span className="text-muted-foreground font-sans text-sm tracking-wider uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
