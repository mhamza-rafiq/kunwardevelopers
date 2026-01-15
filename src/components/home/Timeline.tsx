import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "1956",
    era: "Era I",
    title: "Foundations",
    description: "Post-migration beginnings. The Kunwar family starts rebuilding through construction and housing in Pakistan.",
  },
  {
    year: "1972",
    era: "Era I",
    title: "Kunwar Colony",
    description: "Establishment of Kunwar Colony, Chishtian—a permanent neighborhood signaling community-first development.",
  },
  {
    year: "1980-2010",
    era: "Era II",
    title: "Community Scale",
    description: "Delivery of 10,000+ kanals across multiple housing schemes. Institutional credibility established.",
  },
  {
    year: "2010",
    era: "Era III",
    title: "National Infrastructure",
    description: "Acquisition of Pakistan's C-1 Construction License. Expansion into motorways, bridges, and national projects.",
  },
  {
    year: "2018",
    era: "Era IV",
    title: "Vertical Integration",
    description: "Launch of Top City Islamabad and Kunwar Mining. Full ecosystem from resources to communities.",
  },
  {
    year: "Present",
    era: "Era IV",
    title: "Capital Ambition",
    description: "Leadership in policy, governance, and smart urban development. Building Pakistan's future.",
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-primary overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Our Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground">
            Seven Decades of Building Pakistan
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-accent/30 -translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-12 lg:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`lg:flex lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                  <div className="bg-primary-foreground/5 p-6 md:p-8 border border-primary-foreground/10 hover:border-accent/30 transition-colors duration-500">
                    <span className="text-accent font-sans text-xs tracking-[0.2em] uppercase">
                      {milestone.era}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mt-2 mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-accent font-serif text-xl mb-4">
                      {milestone.year}
                    </p>
                    <p className="text-primary-foreground/70 font-sans text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Point - Desktop */}
                <div className="hidden lg:flex items-center justify-center w-4 relative z-10">
                  <div className="w-4 h-4 bg-accent rounded-full" />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 border border-accent text-accent font-sans text-sm tracking-wider uppercase hover:bg-accent hover:text-accent-foreground transition-colors">
            Explore Our Full Story
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
