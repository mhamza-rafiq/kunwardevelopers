import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
import { PatternLayer } from "@/components/brand";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { ArrowRight, MapPin, Plane, Car, Shield, Wifi, TreeDeciduous, Droplets } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "10K+", label: "Kanals Developed" },
  { value: "5", label: "Phases Planned" },
  { value: "24/7", label: "Security" },
  { value: "AAA", label: "Location Rating" },
];

const phases = [
  { name: "Phase 1", status: "Delivered", plots: "2,500+", type: "Residential" },
  { name: "Phase 2", status: "Delivered", plots: "3,000+", type: "Mixed-Use" },
  { name: "Phase 3", status: "Ongoing", plots: "2,800+", type: "Premium Residential" },
  { name: "Phase 4", status: "Launching", plots: "1,500+", type: "Commercial" },
  { name: "Phase 5", status: "Planning", plots: "TBA", type: "Smart City Hub" },
];

const amenities = [
  { icon: Shield, title: "24/7 Security", description: "Gated community with CCTV surveillance" },
  { icon: Wifi, title: "Smart Infrastructure", description: "IoT-ready fiber optic network" },
  { icon: TreeDeciduous, title: "Green Spaces", description: "30% dedicated to parks and greenery" },
  { icon: Droplets, title: "Water Treatment", description: "Independent water supply system" },
  { icon: Car, title: "Wide Roads", description: "80-120 ft main boulevards" },
  { icon: Plane, title: "Airport Access", description: "Direct corridor to new airport" },
];

const TopCity = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const phasesRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Stats counter
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

      // Phases grid
      gsap.from(phasesRef.current?.querySelectorAll(".phase-card"), {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: phasesRef.current,
          start: "top 75%",
        },
      });

      // Amenities
      gsap.from(amenitiesRef.current?.querySelectorAll(".amenity-card"), {
        opacity: 0,
        scale: 0.95,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: amenitiesRef.current,
          start: "top 75%",
        },
      });

      // Location section
      gsap.from(locationRef.current?.querySelectorAll(".location-reveal"), {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: locationRef.current,
          start: "top 70%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <PatternLayer era="node" opacity={0.03} />
        <div className="girih-layer" />

        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <p className="hero-reveal text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
              Flagship Development
            </p>
            <h1 className="hero-reveal font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground tracking-institutional leading-[1.1] mb-8">
              Top City
              <span className="block text-accent">Islamabad</span>
            </h1>
            <p className="hero-reveal text-foreground/70 font-sans text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
              Pakistan's premier smart city development at the heart of the new Islamabad. Direct airport corridor, IoT infrastructure, and world-class amenities.
            </p>
            <div className="hero-reveal flex flex-col sm:flex-row gap-5">
              <a
                href="/contact"
                className="inline-block px-10 py-5 bg-accent text-accent-foreground font-sans text-sm tracking-[0.15em] uppercase hover:scale-[1.03] transition-transform duration-300"
              >
                Invest Now
              </a>
              <a
                href="#phases"
                className="inline-flex items-center gap-3 px-10 py-5 border border-foreground/30 text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:border-accent hover:text-accent transition-colors duration-300"
              >
                View Phases
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Sticky */}
      <section ref={statsRef} className="bg-card border-y border-foreground/10 sticky top-16 z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-foreground/10">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item py-6 md:py-8 text-center">
                <span className="font-serif text-3xl md:text-4xl text-accent tracking-institutional">
                  {stat.value}
                </span>
                <p className="text-foreground/50 font-sans text-xs md:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases Grid */}
      <section id="phases" ref={phasesRef} className="min-h-screen flex flex-col justify-center py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Development Phases
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-institutional">
              Masterplan Progress
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {phases.map((phase, index) => (
              <div
                key={phase.name}
                className={`phase-card p-8 border transition-all duration-300 ${
                  phase.status === "Ongoing"
                    ? "border-accent bg-accent/5"
                    : "border-foreground/10 hover:border-foreground/30"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-6xl text-foreground/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-sans tracking-wider uppercase ${
                      phase.status === "Delivered"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : phase.status === "Ongoing"
                        ? "bg-accent/20 text-accent"
                        : phase.status === "Launching"
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-foreground/5 text-foreground/50"
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-2 tracking-institutional">
                  {phase.name}
                </h3>
                <p className="text-foreground/50 font-sans text-sm mb-4">{phase.type}</p>
                <div className="pt-4 border-t border-foreground/10">
                  <span className="text-accent font-serif text-xl">{phase.plots}</span>
                  <span className="text-foreground/50 font-sans text-sm ml-2">Plots</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section ref={amenitiesRef} className="min-h-screen flex flex-col justify-center py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Smart City Features
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-institutional">
              World-Class Amenities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={amenity.title}
                  className="amenity-card p-8 bg-background border border-foreground/10 hover:border-accent/30 transition-colors duration-300"
                >
                  <Icon className="w-10 h-10 text-accent mb-6" />
                  <h3 className="font-serif text-xl text-foreground mb-2 tracking-institutional">
                    {amenity.title}
                  </h3>
                  <p className="text-foreground/60 font-sans text-sm">{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section ref={locationRef} className="min-h-screen flex flex-col justify-center py-20 bg-background relative overflow-hidden">
        <PatternLayer era="corridor" opacity={0.03} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="location-reveal text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
                Strategic Location
              </p>
              <h2 className="location-reveal font-serif text-4xl md:text-5xl text-foreground tracking-institutional mb-8">
                At the Heart of
                <span className="block text-accent">New Islamabad</span>
              </h2>
              <div className="location-reveal space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Plane className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">Airport Proximity</h4>
                    <p className="text-foreground/60 font-sans text-sm">
                      5 minutes from New Islamabad International Airport via dedicated corridor
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Car className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">Motorway Access</h4>
                    <p className="text-foreground/60 font-sans text-sm">
                      Direct interchange on M-1 connecting to all major cities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">Prime Coordinates</h4>
                    <p className="text-foreground/60 font-sans text-sm">
                      Junction of Islamabad, Rawalpindi, and the new airport economic zone
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="location-reveal aspect-square bg-card border border-foreground/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent/30 mx-auto mb-4" />
                <p className="text-foreground/50 font-sans text-sm">Interactive Map</p>
                <p className="text-foreground/30 font-sans text-xs">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-accent-foreground tracking-institutional mb-6">
            Secure Your Plot Today
          </h2>
          <p className="text-accent-foreground/80 font-sans text-lg max-w-2xl mx-auto mb-10">
            Limited availability in Phase 3. Flexible payment plans available.
          </p>
          <a
            href="/contact"
            className="inline-block px-12 py-5 bg-background text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:scale-[1.03] transition-transform duration-300"
          >
            Request Pricing
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TopCity;
