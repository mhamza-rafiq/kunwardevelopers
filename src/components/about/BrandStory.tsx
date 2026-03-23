import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
gsap.registerPlugin(ScrollTrigger);

const BrandStory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !wordsRef.current) return;
    const ctx = gsap.context(() => {
      const paragraph = wordsRef.current;
      if (paragraph) {
        const text = paragraph.textContent || "";
        const words = text.split(" ");
        paragraph.innerHTML = words.map(word => `<span class="inline-block opacity-20">${word}</span>`).join(" ");
        const wordSpans = paragraph.querySelectorAll("span");
        gsap.to(wordSpans, {
          opacity: 1, stagger: 0.05, ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%", end: "bottom 40%", scrub: 1 },
        });
      }
      gsap.from(".brand-tagline", { y: 40, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".brand-tagline", start: "top 85%" } });
      gsap.from(".brand-mark", { scale: 0.5, opacity: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".brand-mark", start: "top 85%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 girih-pattern opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="brand-mark text-center mb-16">
          <div className="inline-flex flex-col items-center">
            <div className="w-px h-16 bg-accent mb-6" />
            <span className="font-serif text-6xl md:text-8xl text-accent">K</span>
            <div className="w-px h-16 bg-accent mt-6" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p ref={wordsRef} className="font-serif text-2xl md:text-3xl leading-tight text-primary-foreground lg:text-5xl">
            The family's journey in real estate development began in 1956, in the wake of migration from Tando Jam, Hyderabad, with resilience, vision, and an unshakable belief in rebuilding lives through land and community. Over nearly seven decades, more than 30,000 kanals of land have been transformed into thriving communities — each project reflecting not just bricks and mortar, but a legacy of trust, perseverance, and responsibility passed down through generations.
          </p>
        </div>

        <div className="brand-tagline text-center">
          <div className="inline-flex items-center gap-6">
            <span className="w-12 h-px bg-accent" />
            <p className="font-serif text-xl md:text-2xl text-accent italic">
              "Since 1956, we have not merely developed land — we have built communities, legacies, and futures."
            </p>
            <span className="w-12 h-px bg-accent" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-24 pt-16 border-t border-border">
          {[
            { value: "70+", label: "Years of Legacy" },
            { value: "3", label: "Generations" },
            { value: "30,000+", label: "Kanals Developed" },
            { value: "25,000+", label: "Families Served" },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <span className="font-serif text-4xl md:text-5xl text-primary block mb-2">{stat.value}</span>
              <span className="text-muted-foreground font-sans text-sm tracking-wider uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStory;