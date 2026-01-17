import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import AboutHero from "@/components/about/AboutHero";
import HorizontalTimeline from "@/components/about/HorizontalTimeline";
import CoreValues from "@/components/about/CoreValues";
import GovernancePhilosophy from "@/components/about/GovernancePhilosophy";
import BrandStory from "@/components/about/BrandStory";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutHero />
        <HorizontalTimeline />
        <CoreValues />
        <GovernancePhilosophy />
        <BrandStory />
      </main>
      <Footer />
    </div>
  );
};

export default About;
