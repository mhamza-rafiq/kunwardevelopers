import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Layers, Shield } from "lucide-react";

const pillars = [
  {
    icon: Clock,
    title: "Heritage",
    subtitle: "Seven Decades of Nation-Building",
    description: "What began as a post-migration construction enterprise in 1956 has evolved into one of Pakistan's most credible development groups. Our legacy is measured in trust, land transformed, and institutions served.",
    accent: "70 years of continuous operations",
  },
  {
    icon: Layers,
    title: "Integration",
    subtitle: "Mine to Community Control",
    description: "From mineral extraction to construction materials to finished communities—Kunwar Developers controls the entire value chain. This vertical integration ensures quality, cost discipline, and delivery certainty.",
    accent: "6 mining leases across Pakistan",
  },
  {
    icon: Shield,
    title: "Governance",
    subtitle: "Institutional Credibility",
    description: "C-1 licensed for national infrastructure. Leadership roles in policy and economic development. We operate with the discipline of institutions, not the speculation of developers.",
    accent: "Government-trusted execution",
  },
];

const KunwarDifference = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 girih-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Why Kunwar
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            The Kunwar Difference
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            Where enterprise meets integrity. Development that builds nations, 
            not just neighborhoods.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-card p-8 md:p-10 h-full border border-border hover:border-accent/30 transition-colors duration-500">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-accent font-sans text-sm tracking-wide uppercase mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-muted-foreground font-sans text-base leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Accent Stat */}
                <div className="pt-6 border-t border-border">
                  <p className="text-foreground font-sans text-sm font-medium">
                    {pillar.accent}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KunwarDifference;
