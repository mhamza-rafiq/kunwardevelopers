import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "70", suffix: "Years", label: "of Continuous Operations" },
  { value: "30,000", suffix: "+", label: "Kanals Developed" },
  { value: "C-1", suffix: "", label: "Licensed (Highest Tier)" },
  { value: "6", suffix: "Leases", label: "Mining Operations" },
];

const LegacyStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Legacy of Excellence
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Built on Seven Decades of Trust
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="mb-3">
                <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
                  {stat.value}
                </span>
                <span className="font-serif text-2xl md:text-3xl text-accent ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="font-sans text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </p>
              
              {/* Decorative Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                className="w-12 h-px bg-accent mx-auto mt-4"
              />
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-muted-foreground font-sans text-base mt-16 max-w-2xl mx-auto"
        >
          Kunwar Developers operates with institutional legitimacy rarely seen 
          in private real estate—delivering communities, infrastructure, and 
          resources designed to last generations.
        </motion.p>
      </div>
    </section>
  );
};

export default LegacyStats;
