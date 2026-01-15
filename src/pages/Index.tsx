import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import LegacyStats from "@/components/home/LegacyStats";
import PortfolioShowcase from "@/components/home/PortfolioShowcase";
import KunwarDifference from "@/components/home/KunwarDifference";
import Timeline from "@/components/home/Timeline";
import LeadershipPreview from "@/components/home/LeadershipPreview";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LegacyStats />
        <PortfolioShowcase />
        <KunwarDifference />
        <Timeline />
        <LeadershipPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
