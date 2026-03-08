import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    emoji: "💻",
    color: "bg-coral/10 border-coral/20",
    tagColor: "bg-coral/15 text-coral",
    skills: ["C#", "Python", "JavaScript", "SQL", "Java", "C", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    emoji: "⚡",
    color: "bg-lavender/10 border-lavender/20",
    tagColor: "bg-lavender/15 text-lavender",
    skills: [".NET Core", "React.js", "Node.js", "Vue.js", "Vite", "NumPy", "Pandas"],
  },
  {
    title: "Tools & DevOps",
    emoji: "🛠️",
    color: "bg-mint/10 border-mint/20",
    tagColor: "bg-mint/15 text-mint",
    skills: ["Git", "Docker", "Azure", "REST APIs", "CI/CD", "xUnit", "NUnit"],
  },
  {
    title: "Methods",
    emoji: "🎯",
    color: "bg-sunny/10 border-sunny/20",
    tagColor: "bg-sunny/20 text-foreground",
    skills: ["Agile/Scrum", "Clean Architecture", "SOLID", "Design Patterns"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-sm text-coral font-bold tracking-widest uppercase">(01)</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-2 mb-4">
            What I Do<span className="text-lavender">/</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            Specialized in C#/.NET and full-stack web development with a passion for scalable architecture and clean code.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bento-card border-2 ${cat.color}`}
            >
              <div className="text-3xl mb-3">{cat.emoji}</div>
              <h3 className="font-display font-bold text-xl mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold ${cat.tagColor}`}
                  >
                    {skill}
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

export default Skills;
