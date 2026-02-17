import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import LegacyStrip from "@/components/home/LegacyStrip";
import ChainWeOwn from "@/components/home/ChainWeOwn";
import TopCityShowcase from "@/components/home/TopCityShowcase";
import LakeshoreShowcase from "@/components/home/LakeshoreShowcase";
import LeadershipPreview from "@/components/home/LeadershipPreview";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="relative z-10 bg-background">
          <Hero />
        </div>

        <div className="relative z-20 bg-background">
          <LegacyStrip />
        </div>

        <div className="relative z-30 bg-background">
          <ChainWeOwn />
        </div>

        <div className="relative z-40 bg-background">
          <TopCityShowcase />
        </div>

        <div className="relative z-50 bg-background">
          <LakeshoreShowcase />
        </div>

        <div className="relative z-[60] bg-background">
          <LeadershipPreview />
        </div>
      </main>
      <div className="relative z-[70] bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
