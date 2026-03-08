import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { CharReveal, LineReveal, StaggerContainer, StaggerItem } from "./TextReveal";

const projects = [
  {
    title: "Behavia",
    subtitle: "AI Immersive Platform",
    year: "2024",
    color: "from-coral/20 to-lavender/20",
    accentColor: "text-coral",
    description:
      "Full-stack learning platform with a 3D avatar featuring adaptive human-AI feedback. Built with MERN stack + Clean Architecture + Docker.",
    tags: ["React", "Node.js", "MongoDB", "Docker", "REST API"],
  },
  {
    title: "Metro Efrei Dodo",
    subtitle: "Pathfinding Algorithm",
    year: "2025",
    color: "from-mint/20 to-sky/20",
    accentColor: "text-mint",
    description:
      "Shortest-path calculator for the Paris Metro using Dijkstra's algorithm. Processes 2024 IDFM open data for real-time visualization.",
    tags: ["Python", "Dijkstra", "NumPy", "Pandas", "Matplotlib"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <div>
          <LineReveal>
            <span className="font-mono text-sm text-mint font-bold tracking-widest uppercase">(03)</span>
          </LineReveal>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-2 mb-4">
            <CharReveal delay={0.1}>Selected Works</CharReveal>
            <span className="text-sunny">/</span>
          </h2>
          <LineReveal delay={0.3}>
            <p className="text-muted-foreground max-w-xl mb-12">
              Thoughtfully crafted projects that blend utility and aesthetics.
            </p>
          </LineReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.2}>
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group bento-card bg-gradient-to-br ${project.color} cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-6">
                  <FolderGit2 className={`w-10 h-10 ${project.accentColor}`} />
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-2xl mb-1">{project.title}</h3>
                <p className={`font-mono text-sm ${project.accentColor} mb-3`}>{project.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1 }}
                      className="bg-foreground/5 text-foreground/70 px-3 py-1 rounded-full text-xs font-mono font-bold"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Projects;
