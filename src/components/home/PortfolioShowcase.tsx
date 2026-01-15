import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Top City Islamabad",
    category: "Smart City Development",
    description: "A next‑generation smart city positioned at Islamabad's motorway junction and airport gateway. Residential, commercial, and automated infrastructure for the modern Pakistani.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    size: "large",
  },
  {
    id: 2,
    title: "Lakeshore Towers",
    category: "Luxury High-Rise",
    description: "Premium residences with lakeside orientation and international-grade amenities within Top City.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    size: "medium",
  },
  {
    id: 3,
    title: "Infrastructure Projects",
    category: "Motorways & Bridges",
    description: "C‑1 licensed execution of national motorway segments and critical infrastructure.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
    size: "medium",
  },
  {
    id: 4,
    title: "Kunwar Mining",
    category: "Resource Development",
    description: "Six operational mineral leases across Pakistan—Lead, Coal, Emerald, Granite, and Pink Salt.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    size: "large",
  },
];

const PortfolioShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Our Portfolio
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground max-w-xl">
              Developments That Define Cities
            </h2>
            <button className="flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase group">
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`group cursor-pointer ${
                project.size === "large" ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden bg-primary-foreground/5">
                {/* Image Container */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-accent font-sans text-xs tracking-[0.2em] uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/70 font-sans text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.description}
                  </p>
                  
                  {/* Explore Link */}
                  <div className="flex items-center gap-2 mt-4 text-accent font-sans text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    Explore Project
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/30 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
