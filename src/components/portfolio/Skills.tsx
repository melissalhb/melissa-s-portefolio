import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C#", "Python", "JavaScript (ES6+)", "SQL", "Java", "C", "HTML5/CSS3"],
  },
  {
    title: "Frameworks",
    skills: [".NET Core 6/8", "React.js", "Node.js", "Vue.js", "Vite", "NumPy", "Pandas"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "Azure", "REST APIs", "CI/CD", "xUnit", "NUnit"],
  },
  {
    title: "Methodologies",
    skills: ["Agile/Scrum", "Clean Architecture", "SOLID", "Design Patterns"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            Technical Skills
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-12">
            What I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <h3 className="font-display font-semibold text-lg mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md text-sm font-mono"
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
