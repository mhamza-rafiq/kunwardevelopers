import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
import { PatternLayer } from "@/components/brand";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { ArrowRight, Mountain, Waves, Building, Dumbbell, Coffee, Car } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "40+", label: "Stories High" },
  { value: "360°", label: "Panoramic Views" },
  { value: "5★", label: "Hotel Amenities" },
  { value: "2025", label: "Completion" },
];

const residences = [
  { type: "1 Bedroom", size: "850 - 1,100 sq ft", price: "Starting PKR 2.5 Cr", availability: "Available" },
  { type: "2 Bedroom", size: "1,200 - 1,600 sq ft", price: "Starting PKR 4.2 Cr", availability: "Limited" },
  { type: "3 Bedroom", size: "1,800 - 2,400 sq ft", price: "Starting PKR 6.8 Cr", availability: "Limited" },
  { type: "Penthouse", size: "3,500+ sq ft", price: "By Inquiry", availability: "Exclusive" },
];

const amenities = [
  { icon: Waves, title: "Infinity Pool", description: "Rooftop pool with city views" },
  { icon: Dumbbell, title: "Fitness Center", description: "State-of-the-art gym facilities" },
  { icon: Coffee, title: "Sky Lounge", description: "Executive lounge & business center" },
  { icon: Building, title: "Retail Podium", description: "Premium shops & restaurants" },
  { icon: Car, title: "Basement Parking", description: "Dedicated parking for residents" },
  { icon: Mountain, title: "Margalla Views", description: "Unobstructed mountain panoramas" },
];

const Lakeshore = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const residencesRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const viewsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations - vertical emphasis
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Stats
      gsap.from(statsRef.current?.querySelectorAll(".stat-item"), {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      });

      // Residences
      gsap.from(residencesRef.current?.querySelectorAll(".residence-card"), {
        opacity: 0,
        x: -40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: residencesRef.current,
          start: "top 75%",
        },
      });

      // Amenities
      gsap.from(amenitiesRef.current?.querySelectorAll(".amenity-item"), {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: amenitiesRef.current,
          start: "top 75%",
        },
      });

      // Views gallery
      gsap.from(viewsRef.current?.querySelectorAll(".view-item"), {
        opacity: 0,
        scale: 1.05,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: viewsRef.current,
          start: "top 70%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Vertical Tower Emphasis */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        />
        <div className="absolute inset-0 bg-background/75" />
        <PatternLayer era="node" opacity={0.03} />

        {/* Vertical accent line */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block" />

        <div className="relative z-10 container mx-auto px-6 py-32 text-center">
          <p className="hero-reveal text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
            The High-Rise Jewel
          </p>
          <h1 className="hero-reveal font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground tracking-institutional leading-[1.1] mb-8">
            Lakeshore
            <span className="block text-accent">Towers</span>
          </h1>
          <p className="hero-reveal text-foreground/70 font-sans text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Premium lakeside high-rise living. International-grade amenities. Unmatched Margalla views. Islamabad's most coveted address.
          </p>
          <div className="hero-reveal flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="/contact"
              className="inline-block px-10 py-5 bg-accent text-accent-foreground font-sans text-sm tracking-[0.15em] uppercase hover:scale-[1.03] transition-transform duration-300"
            >
              Book a Viewing
            </a>
            <a
              href="#residences"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-foreground/30 text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:border-accent hover:text-accent transition-colors duration-300"
            >
              View Residences
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} className="bg-card border-y border-foreground/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-foreground/10">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item py-8 md:py-10 text-center">
                <span className="font-serif text-4xl md:text-5xl text-accent tracking-institutional">
                  {stat.value}
                </span>
                <p className="text-foreground/50 font-sans text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residence Types */}
      <section id="residences" ref={residencesRef} className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Residences
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-institutional">
              Designed for Distinction
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {residences.map((residence) => (
              <div
                key={residence.type}
                className="residence-card flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 border border-foreground/10 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="font-serif text-2xl text-foreground mb-1 tracking-institutional">
                    {residence.type}
                  </h3>
                  <p className="text-foreground/50 font-sans text-sm">{residence.size}</p>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <span className="text-accent font-serif text-lg">{residence.price}</span>
                  <span
                    className={`px-4 py-2 text-xs font-sans tracking-wider uppercase text-center ${
                      residence.availability === "Available"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : residence.availability === "Limited"
                        ? "bg-amber-500/10 text-amber-400"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {residence.availability}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section ref={amenitiesRef} className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Five-Star Living
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-institutional">
              Premium Amenities
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <div key={amenity.title} className="amenity-item p-6 text-center">
                  <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-lg text-foreground mb-1">{amenity.title}</h3>
                  <p className="text-foreground/50 font-sans text-xs">{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Views Gallery */}
      <section ref={viewsRef} className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
              360° Panoramas
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-institutional">
              Views That Inspire
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div
              className="view-item aspect-[4/3] bg-cover bg-center relative overflow-hidden group"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80')`,
              }}
            >
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4">
                <p className="text-foreground font-sans text-sm">Margalla Hills</p>
              </div>
            </div>
            <div
              className="view-item aspect-[4/3] bg-cover bg-center relative overflow-hidden group"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&q=80')`,
              }}
            >
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4">
                <p className="text-foreground font-sans text-sm">City Skyline</p>
              </div>
            </div>
            <div
              className="view-item aspect-[4/3] bg-cover bg-center relative overflow-hidden group md:col-span-2 lg:col-span-1"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80')`,
              }}
            >
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4">
                <p className="text-foreground font-sans text-sm">Sunset View</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-accent-foreground tracking-institutional mb-6">
            Elevate Your Address
          </h2>
          <p className="text-accent-foreground/80 font-sans text-lg max-w-2xl mx-auto mb-10">
            Limited units available. Schedule a private viewing today.
          </p>
          <a
            href="/contact"
            className="inline-block px-12 py-5 bg-background text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:scale-[1.03] transition-transform duration-300"
          >
            Schedule Viewing
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lakeshore;
