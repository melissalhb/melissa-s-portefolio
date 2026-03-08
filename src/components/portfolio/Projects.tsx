import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Behavia — AI Immersive Platform",
    year: "2024",
    description:
      "Full-stack learning platform featuring a 3D avatar with adaptive human-AI feedback. Built with the MERN stack following Clean Architecture principles.",
    tags: ["React", "Node.js", "MongoDB", "Docker", "REST API"],
  },
  {
    title: "Metro Efrei Dodo — Pathfinding",
    year: "2025",
    description:
      "Shortest-path calculator for the Paris Metro using Dijkstra's algorithm and NetworkX. Processes 2024 IDFM open data with NumPy/Pandas for real-time visualization.",
    tags: ["Python", "Dijkstra", "NumPy", "Pandas", "Matplotlib"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            Projects
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-12">
            Things I've built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center justify-between mb-4">
                <FolderGit2 className="w-8 h-8 text-primary" />
                <span className="font-mono text-sm text-muted-foreground">{project.year}</span>
              </div>
              <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground px-2.5 py-1 rounded text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
