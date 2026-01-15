import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const LeadershipPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Leadership placeholder"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 -z-10" />
            
            {/* Accent Block */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary flex items-center justify-center">
              <span className="text-accent font-serif text-3xl">K</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Leadership & Governance
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Vision That Builds Nations
            </h2>
            
            <blockquote className="border-l-2 border-accent pl-6 my-8">
              <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
                "Development must serve more than shareholders. It must serve communities, 
                cities, and the nation's future."
              </p>
            </blockquote>

            <p className="text-muted-foreground font-sans text-base leading-relaxed mb-8">
              Kunwar Developers is guided by leadership that has shaped not only 
              communities but policy itself. With roles spanning economic development, 
              governance, and industry associations, our leadership brings institutional 
              thinking to private enterprise.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-accent" />
                <p className="text-foreground font-sans text-sm">Policy & Economic Development Leadership</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-accent" />
                <p className="text-foreground font-sans text-sm">70-Year Family Legacy in Pakistani Development</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-accent" />
                <p className="text-foreground font-sans text-sm">Institutional Governance Standards</p>
              </div>
            </div>

            <button className="flex items-center gap-2 text-foreground font-sans text-sm tracking-wider uppercase group hover:text-accent transition-colors">
              Meet Our Leadership
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPreview;
