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
    const timeout = setTimeout(() => {
      // Only snap non-pinned sections (exclude LegacyStrip which has its own pin)
      const sections = gsap.utils.toArray<HTMLElement>(".snap-section");
      if (sections.length === 0) return;

      const maxScroll = ScrollTrigger.maxScroll(window);

      // Pre-calculate snap points once after layout is stable
      const points = sections.map((section) => {
        const top = section.offsetTop;
        return gsap.utils.clamp(0, 1, top / maxScroll);
      });

      ScrollTrigger.create({
        snap: {
          snapTo: points,
          directional: true,
          duration: { min: 0.15, max: 0.4 },
          delay: 0.05,
          ease: "power1.inOut",
        },
      });

      ScrollTrigger.refresh();
    }, 1200);

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

        <div className="relative z-20 bg-background">
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
