import { motion } from "framer-motion";
import { CharReveal, LineReveal, StaggerContainer, StaggerItem } from "./TextReveal";

const skillCategories = [
  {
    title: "Languages",
    emoji: "💻",
    color: "bg-coral/10 border-coral/20",
    tagColor: "bg-coral/15 text-coral",
    skills: [
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    ],
  },
  {
    title: "Frameworks",
    emoji: "⚡",
    color: "bg-lavender/10 border-lavender/20",
    tagColor: "bg-lavender/15 text-lavender",
    skills: [
      { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    ],
  },
  {
    title: "Tools & DevOps",
    emoji: "🛠️",
    color: "bg-mint/10 border-mint/20",
    tagColor: "bg-mint/15 text-mint",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
      { name: "xUnit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "NUnit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    ],
  },
  {
    title: "Methods",
    emoji: "🎯",
    color: "bg-sunny/10 border-sunny/20",
    tagColor: "bg-sunny/20 text-foreground",
    skills: [
      { name: "Agile/Scrum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Clean Architecture" },
      { name: "SOLID" },
      { name: "Design Patterns" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <div>
          <LineReveal>
            <span className="font-mono text-sm text-coral font-bold tracking-widest uppercase">(01)</span>
          </LineReveal>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold mt-2 mb-4 tracking-wide">
            <CharReveal delay={0.1}>What I Do</CharReveal>
            <span className="text-lavender">/</span>
          </h2>
          <LineReveal delay={0.3}>
            <p className="text-muted-foreground max-w-xl mb-12">
              Specialized in C#/.NET and full-stack web development with a passion for scalable architecture and clean code.
            </p>
          </LineReveal>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.12}>
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.title}>
              <div className={`bento-card border-2 ${cat.color}`}>
                <div className="text-3xl mb-3">{cat.emoji}</div>
                <h3 className="font-display font-bold text-2xl mb-4 tracking-wide">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold cursor-default ${cat.tagColor}`}
                    >
                      {skill.icon && (
                        <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                      )}
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;
