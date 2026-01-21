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
        {/* Act I: Statement of Power */}
        <Hero />
        
        {/* Act II: Legacy Strip - Horizontal Pinned Timeline */}
        <LegacyStrip />
        
        {/* Act III: The Chain We Own */}
        <ChainWeOwn />
        
        {/* Act IV-A: Top City Flagship */}
        <TopCityShowcase />
        
        {/* Act IV-B: Lakeshore High-Rise Jewel */}
        <LakeshoreShowcase />
        
        {/* Supporting: Leadership */}
        <LeadershipPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;