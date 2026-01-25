import { useState, useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsapAnimations";
import { PatternLayer } from "@/components/brand";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { Building2, HardHat, Mountain, Newspaper, MapPin, Phone, Mail, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type InquiryType = "residential" | "corporate" | "mining" | "media";

const inquiryTypes = [
  { id: "residential" as const, label: "Residential", icon: Building2, description: "Top City & Lakeshore buyers" },
  { id: "corporate" as const, label: "Corporate", icon: HardHat, description: "Investor relations" },
  { id: "mining" as const, label: "Mining", icon: Mountain, description: "B2B partnerships" },
  { id: "media" as const, label: "Media", icon: Newspaper, description: "Press inquiries" },
];

const offices = [
  {
    name: "Islamabad Headquarters",
    address: "Top City Islamabad, Main Boulevard, Islamabad",
    phone: "+92 51 234 5678",
    email: "info@kunwardevelopers.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
  },
  {
    name: "Lahore Office",
    address: "42-A, Gulberg III, Lahore",
    phone: "+92 42 345 6789",
    email: "lahore@kunwardevelopers.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
  },
];

const Contact = () => {
  const [selectedType, setSelectedType] = useState<InquiryType>("residential");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
      });

      gsap.from(formRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
        },
      });

      gsap.from(officesRef.current?.querySelectorAll(".office-card"), {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: officesRef.current,
          start: "top 75%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <PatternLayer era="node" opacity={0.04} />
        <div className="girih-layer" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="hero-reveal text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
              Connect With Us
            </p>
            <h1 className="hero-reveal font-serif text-5xl md:text-6xl lg:text-7xl text-foreground tracking-institutional leading-[1.1] mb-8">
              Let's Build
              <span className="block text-accent">Together</span>
            </h1>
            <p className="hero-reveal text-foreground/70 font-sans text-lg md:text-xl leading-relaxed max-w-xl">
              Whether you're seeking a home, an investment opportunity, or a partnership — we're here to guide you.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Type Selector + Form */}
      <section className="min-h-screen flex items-center py-20 bg-card">
        <div className="container mx-auto px-6">
          <div ref={formRef} className="max-w-5xl mx-auto">
            {/* Inquiry Type Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {inquiryTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-6 border transition-all duration-300 text-left ${
                      selectedType === type.id
                        ? "border-accent bg-accent/5"
                        : "border-foreground/10 hover:border-foreground/30"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 mb-3 ${
                        selectedType === type.id ? "text-accent" : "text-foreground/50"
                      }`}
                    />
                    <h3 className="font-sans text-sm font-medium text-foreground mb-1">
                      {type.label}
                    </h3>
                    <p className="text-foreground/50 text-xs">{type.description}</p>
                  </button>
                );
              })}
            </div>

            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground/70 font-sans text-sm mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-foreground font-sans focus:border-accent focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground/70 font-sans text-sm mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-foreground font-sans focus:border-accent focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-foreground/70 font-sans text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-foreground font-sans focus:border-accent focus:outline-none transition-colors"
                    placeholder="+92 300 000 0000"
                  />
                </div>

                <div>
                  <label className="block text-foreground/70 font-sans text-sm mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-foreground font-sans focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder={`Tell us about your ${selectedType} inquiry...`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-5 bg-accent text-accent-foreground font-sans text-sm tracking-[0.15em] uppercase hover:scale-[1.03] transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-6 border-2 border-accent rounded-full flex items-center justify-center">
                  <span className="text-accent text-2xl">✓</span>
                </div>
                <h3 className="font-serif text-3xl text-foreground mb-4">Thank You</h3>
                <p className="text-foreground/70 font-sans text-lg">
                  Your inquiry has been received. Our team will respond within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section ref={officesRef} className="min-h-screen flex items-center py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Visit Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-institutional">
              Our Offices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office) => (
              <div key={office.name} className="office-card p-8 border border-foreground/10 bg-card">
                <h3 className="font-serif text-2xl text-foreground mb-6 tracking-institutional">
                  {office.name}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/70 font-sans text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-foreground/70 font-sans text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-foreground/70 font-sans text-sm">{office.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-foreground/70 font-sans text-sm">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
