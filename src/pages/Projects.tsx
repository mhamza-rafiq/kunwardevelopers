import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { PatternLayer } from "@/components/brand";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Building2, Mountain, Home } from "lucide-react";

type ProjectStatus = "active" | "upcoming" | "completed";
type ProjectType = "residential" | "commercial" | "mixed-use" | "mining";

interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  status: ProjectStatus;
  type: ProjectType;
  location: string;
  stats: { label: string; value: string }[];
  link: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "top-city",
    name: "Top City Islamabad",
    subtitle: "Flagship Smart City Development",
    description: "Pakistan's premier gated community featuring world-class infrastructure, smart city technologies, and unparalleled location advantage.",
    status: "active",
    type: "mixed-use",
    location: "Islamabad",
    stats: [
      { label: "Total Area", value: "10K+ Kanals" },
      { label: "Phases", value: "5 Phases" },
      { label: "Status", value: "Phase 3 Active" },
    ],
    link: "/top-city",
    featured: true,
  },
  {
    id: "lakeshore",
    name: "Lakeshore Towers",
    subtitle: "Iconic High-Rise Living",
    description: "40+ stories of luxury residences with panoramic views of Margalla Hills and Rawal Lake, redefining vertical living in the capital.",
    status: "active",
    type: "residential",
    location: "Islamabad",
    stats: [
      { label: "Height", value: "40+ Stories" },
      { label: "Units", value: "200+ Residences" },
      { label: "Views", value: "360° Panoramic" },
    ],
    link: "/lakeshore",
    featured: true,
  },
  {
    id: "mining-operations",
    name: "Mining & Minerals Division",
    subtitle: "Resource Extraction Excellence",
    description: "Six active mining leases across Pakistan, supplying construction materials and rare minerals to domestic and international markets.",
    status: "active",
    type: "mining",
    location: "Multiple Locations",
    stats: [
      { label: "Leases", value: "6 Active" },
      { label: "Experience", value: "40+ Years" },
      { label: "Output", value: "Industrial Scale" },
    ],
    link: "/contact",
  },
  {
    id: "top-city-phase-4",
    name: "Top City Phase 4",
    subtitle: "Commercial & Tech Hub",
    description: "Upcoming commercial district featuring tech parks, corporate offices, and retail destinations within the Top City masterplan.",
    status: "upcoming",
    type: "commercial",
    location: "Islamabad",
    stats: [
      { label: "Launch", value: "2025" },
      { label: "Focus", value: "Tech & Business" },
      { label: "Area", value: "2K+ Kanals" },
    ],
    link: "/contact",
  },
  {
    id: "lakeshore-villas",
    name: "Lakeshore Villas",
    subtitle: "Waterfront Estate Living",
    description: "Exclusive villa community adjacent to Lakeshore Towers, offering private gardens, lake access, and resort-style amenities.",
    status: "upcoming",
    type: "residential",
    location: "Islamabad",
    stats: [
      { label: "Villas", value: "50 Units" },
      { label: "Size", value: "1-2 Kanal" },
      { label: "Launch", value: "2025" },
    ],
    link: "/contact",
  },
  {
    id: "kunwar-heights",
    name: "Kunwar Heights",
    subtitle: "Legacy Development",
    description: "Our foundational residential project that established the Kunwar standard for quality construction and community planning.",
    status: "completed",
    type: "residential",
    location: "Rawalpindi",
    stats: [
      { label: "Completed", value: "1995" },
      { label: "Units", value: "500+ Homes" },
      { label: "Occupancy", value: "100%" },
    ],
    link: "/about",
  },
];

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  active: { label: "Active", className: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
  upcoming: { label: "Upcoming", className: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
  completed: { label: "Completed", className: "bg-slate-500/20 text-slate-300 border-slate-500/30" },
};

const typeConfig: Record<ProjectType, { label: string; icon: typeof Building2 }> = {
  residential: { label: "Residential", icon: Home },
  commercial: { label: "Commercial", icon: Building2 },
  "mixed-use": { label: "Mixed-Use", icon: Building2 },
  mining: { label: "Mining", icon: Mountain },
};

const Projects = () => {
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "all">("all");
  const [typeFilter, setTypeFilter] = useState<ProjectType | "all">("all");

  const filteredProjects = projects.filter((project) => {
    if (statusFilter !== "all" && project.status !== statusFilter) return false;
    if (typeFilter !== "all" && project.type !== typeFilter) return false;
    return true;
  });

  const statuses: (ProjectStatus | "all")[] = ["all", "active", "upcoming", "completed"];
  const types: (ProjectType | "all")[] = ["all", "residential", "commercial", "mixed-use", "mining"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <PatternLayer era="node" opacity={0.06} />
        
        <div className="relative z-10 container mx-auto px-6 py-32 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-sm tracking-[0.3em] text-primary/70 uppercase mb-4"
          >
            Our Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6"
          >
            Projects & Developments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Seven decades of building Pakistan's future—from flagship smart cities 
            to mining operations that power our nation's infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Status:</span>
              <div className="flex gap-2">
                {statuses.map((status) => (
                  <Button
                    key={status}
                    variant={statusFilter === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter(status)}
                    className="capitalize"
                  >
                    {status === "all" ? "All" : statusConfig[status].label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Type:</span>
              <div className="flex gap-2 flex-wrap">
                {types.map((type) => (
                  <Button
                    key={type}
                    variant={typeFilter === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTypeFilter(type)}
                    className="capitalize"
                  >
                    {type === "all" ? "All" : typeConfig[type].label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects match the selected filters.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setStatusFilter("all");
                  setTypeFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => {
                const TypeIcon = typeConfig[project.type].icon;
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link to={project.link} className="group block h-full">
                      <div className={`
                        relative h-full p-8 rounded-sm border border-border/50 
                        bg-gradient-to-br from-card/50 to-card
                        hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5
                        transition-all duration-500
                        ${project.featured ? 'ring-1 ring-primary/20' : ''}
                      `}>
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute -top-3 left-6">
                            <Badge className="bg-primary text-primary-foreground">
                              Featured
                            </Badge>
                          </div>
                        )}

                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-2 rounded-sm bg-primary/10">
                            <TypeIcon className="w-5 h-5 text-primary" />
                          </div>
                          <Badge className={statusConfig[project.status].className}>
                            {statusConfig[project.status].label}
                          </Badge>
                        </div>

                        {/* Content */}
                        <h3 className="font-serif text-2xl font-light mb-1 group-hover:text-primary transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm text-primary/70 font-medium mb-3">
                          {project.subtitle}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                          {project.stats.map((stat) => (
                            <div key={stat.label}>
                              <p className="font-serif text-lg text-foreground">{stat.value}</p>
                              <p className="text-xs text-muted-foreground">{stat.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* Hover Arrow */}
                        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-primary">→</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
            Interested in Our Developments?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Connect with our team to explore investment opportunities, 
            residential options, or partnership possibilities.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
