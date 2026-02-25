import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import LegacyStrip from "@/components/home/LegacyStrip";
import ChainWeOwn from "@/components/home/ChainWeOwn";
import TopCityShowcase from "@/components/home/TopCityShowcase";
import LakeshoreShowcase from "@/components/home/LakeshoreShowcase";
import LeadershipPreview from "@/components/home/LeadershipPreview";
import Footer from "@/components/home/Footer";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Wait for all sections to render before creating snap
    const timeout = setTimeout(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".snap-section");
      if (sections.length === 0) return;

      ScrollTrigger.create({
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.3, max: 0.6 },
          delay: 0.1,
          ease: "power2.inOut",
        },
      });

      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="snap-section relative z-10 bg-background">
          <Hero />
        </div>

        <div className="snap-section relative z-20 bg-background">
          <LegacyStrip />
        </div>

        <div className="snap-section relative z-30 bg-background">
          <ChainWeOwn />
        </div>

        <div className="snap-section relative z-40 bg-background">
          <TopCityShowcase />
        </div>

        <div className="snap-section relative z-50 bg-background">
          <LakeshoreShowcase />
        </div>

        <div className="snap-section relative z-[60] bg-background">
          <LeadershipPreview />
        </div>
      </main>
      <div className="snap-section relative z-[70] bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
