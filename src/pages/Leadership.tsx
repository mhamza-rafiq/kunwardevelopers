import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
import { PatternLayer } from "@/components/brand";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { Award, Shield, Users, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    name: "Hassan Masood Kunwar",
    title: "Chief Executive",
    bio: "Hassan Masood Kunwar's professional journey began at eighteen when he founded HKS International and introduced what became Pakistan's first Health Card initiative. By 2013, it was formally adopted by the Government, evolving into one of the largest public healthcare programs in the country's history. Between 2013 and 2016, he served as Transaction and Financial Consultant to Cathay Oil & Gas (Canada) on the Thar Coal Project. In 2016, he formally joined Kunwar Developers, expanding its scope into government infrastructure projects. He founded Kunwar Mining in 2018, securing six mineral leases. In 2023, he was appointed Vice Chairman, Board of Investment & Trade, KP, where he revived the New Peshawar Valley Project and led the conceptualization of the New Blue Area, Hayatabad. He represented Pakistan at Osaka Expo 2025.",
    credentials: [
      "Health Card Policy Creator — adopted nationally",
      "Vice Chairman, Board of Investment & Trade, KP",
      "Pakistan Representative at Osaka Expo 2025",
      "Led 1,500-student evacuation from Kyrgyzstan (2024)",
    ],
  },
  {
    name: "Board of Directors",
    title: "Governance Structure",
    bio: "The board comprises family principals and independent advisors ensuring fiduciary responsibility across all Kunwar entities. Quarterly reviews maintain alignment between heritage values and growth objectives. Subsidiaries Pak-Italia Diligence (C-1) and Yellow Line Constructions operate under this governance framework.",
    credentials: [
      "Family Principal Council",
      "Independent Advisory Board",
      "Quarterly Strategic Reviews",
    ],
  },
];

const timeline = [
  { year: "1956", event: "Post-Migration Foundation", description: "Family roots in Tando Jam, Hyderabad, Sindh" },
  { year: "1972", event: "Kunwar Colony Chishtian", description: "First organized settlement development" },
  { year: "1980", event: "Kunwar Settlement", description: "Qazi Wala Road, Chishtian expansion" },
  { year: "1990–2010", event: "12 Housing Projects", description: "~10,000 kanals developed across the region" },
  { year: "2010", event: "HKS International Founded", description: "Pakistan's first Health Card initiative" },
  { year: "2010–2018", event: "Mega Infrastructure Works", description: "Motorway infrastructure including bridges" },
  { year: "2010–2024", event: "Top City Development", description: "Engaged as developer for Top City Islamabad" },
  { year: "2018", event: "Kunwar Mining Founded", description: "Six mineral leases across Pakistan" },
  { year: "2023", event: "Vice Chairman, BoIT KP", description: "Revived New Peshawar Valley Project" },
  { year: "2025", event: "Osaka Expo 2025", description: "Represented Pakistan internationally" },
];

const values = [
  {
    icon: Shield,
    title: "Stewardship",
    description: "Three generations of family commitment to long-term community development over short-term gains.",
  },
  {
    icon: Building2,
    title: "Integration",
    description: "Complete vertical control from raw materials to finished communities ensures quality at every stage.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building not just structures, but lasting neighborhoods that serve generations of families.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "C-1 certification reflects our commitment to the highest standards in Pakistan's construction industry.",
  },
];

const Leadership = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const leadersRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", { opacity: 0, y: 40, duration: 1, stagger: 0.15, ease: "power2.out" });
      gsap.from(leadersRef.current?.querySelectorAll(".leader-card"), {
        opacity: 0, y: 50, stagger: 0.3, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: leadersRef.current, start: "top 75%" },
      });
      gsap.from(timelineRef.current?.querySelectorAll(".timeline-item"), {
        opacity: 0, x: -30, stagger: 0.1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: timelineRef.current, start: "top 70%" },
      });
      gsap.from(valuesRef.current?.querySelectorAll(".value-card"), {
        opacity: 0, scale: 0.95, stagger: 0.15, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: valuesRef.current, start: "top 75%" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <PatternLayer era="colony" opacity={0.03} />
        <div className="girih-layer" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="hero-reveal text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">70 Years of Stewardship</p>
            <h1 className="hero-reveal font-serif text-5xl md:text-6xl lg:text-7xl text-foreground tracking-institutional leading-[1.1] mb-8">
              Leadership
              <span className="block text-accent">& Governance</span>
            </h1>
            <p className="hero-reveal text-foreground/70 font-sans text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Leadership shaped by legacy, institutional credibility, and disciplined growth — where enterprise is balanced with public responsibility.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-foreground/10">
        <div className="container mx-auto px-6">
          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl text-foreground italic tracking-wide leading-relaxed">
              "Enterprise balanced with public responsibility, and long-term value takes precedence over short-term gain."
            </p>
            <cite className="block mt-6 text-accent font-sans text-sm tracking-[0.2em] uppercase not-italic">
              — Hassan Masood Kunwar
            </cite>
          </blockquote>
        </div>
      </section>

      <section ref={leadersRef} className="min-h-screen flex flex-col justify-center py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            {leaders.map((leader, index) => (
              <div key={leader.name} className={`leader-card grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 ${index === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="aspect-[3/4] bg-card border border-foreground/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 border-2 border-accent/30 rounded-full flex items-center justify-center">
                      <span className="font-serif text-4xl text-accent/50">{leader.name.charAt(0)}</span>
                    </div>
                    <p className="text-foreground/30 font-sans text-xs uppercase tracking-wider">Portrait</p>
                  </div>
                </div>
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-2">{leader.title}</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-institutional mb-6">{leader.name}</h2>
                  <p className="text-foreground/70 font-sans text-lg leading-relaxed mb-8">{leader.bio}</p>
                  <div className="space-y-3">
                    {leader.credentials.map((credential) => (
                      <div key={credential} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-foreground/60 font-sans text-sm">{credential}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={timelineRef} className="min-h-screen flex flex-col justify-center py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">1956 – 2025</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-institutional">Seven Decades of Growth</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />
              {timeline.map((item, index) => (
                <div key={item.year} className={`timeline-item relative flex items-start gap-6 md:gap-0 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 -ml-1.5 bg-accent rounded-full z-10" />
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-accent font-serif text-2xl tracking-institutional">{item.year}</span>
                    <h3 className="font-serif text-xl text-foreground mt-1 tracking-institutional">{item.event}</h3>
                    <p className="text-foreground/50 font-sans text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="min-h-screen flex flex-col justify-center py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">Our Philosophy</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-institutional">Guiding Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="value-card p-8 border border-foreground/10 hover:border-accent/30 transition-colors duration-300">
                  <Icon className="w-10 h-10 text-accent mb-6" />
                  <h3 className="font-serif text-2xl text-foreground mb-3 tracking-institutional">{value.title}</h3>
                  <p className="text-foreground/60 font-sans text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;