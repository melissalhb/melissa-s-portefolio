import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "R&D Software Engineer Apprentice",
    company: "Société Générale",
    period: "Sept. 2024 — Present",
    bullets: [
      "Engineered a high-performance data validation tool in C#/.NET, ensuring 100% data integrity for critical financial flows.",
      "Developed a large-scale data converter to process massive datasets, improving interoperability between legacy and modern systems.",
      "Automated QA workflows by creating end-to-end file processing scripts, reducing manual validation time.",
      "Enforced software quality standards through Unit Tests and code reviews.",
    ],
  },
  {
    title: "Private Tutor — Mathematics & Science",
    company: "Independent",
    period: "2015 — Present",
    bullets: [
      "Mentored 10+ students, improving average grades by +15% through personalized learning frameworks.",
    ],
  },
  {
    title: "Sales Associate",
    company: "Histoire d'Or",
    period: "Dec. 2022 — Jan. 2023",
    bullets: [
      "Achieved high-value sales (up to €3,000) in a fast-paced, high-pressure retail environment.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            Experience
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-12">
            Where I've worked
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
            >
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <Briefcase className="w-2.5 h-2.5 text-primary" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-display font-semibold text-lg">
                  {exp.title} — <span className="text-primary">{exp.company}</span>
                </h3>
                <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <ul className="space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
