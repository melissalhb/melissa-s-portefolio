import { motion } from "framer-motion";
import { GraduationCap, Globe, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            Education & Awards
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-12">
            Background
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <GraduationCap className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display font-semibold text-lg mb-1">EFREI Paris</h3>
            <p className="text-muted-foreground text-sm mb-1">
              M.Eng in Software Engineering & Information Systems
            </p>
            <p className="font-mono text-xs text-muted-foreground mb-3">2021 — 2026</p>
            <p className="text-muted-foreground text-sm italic">
              International Section — All coursework delivered in English
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <Globe className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display font-semibold text-lg mb-1">Asia Pacific University</h3>
            <p className="text-muted-foreground text-sm mb-1">
              Academic Exchange Semester — Kuala Lumpur, Malaysia
            </p>
            <p className="font-mono text-xs text-muted-foreground">Aug. — Dec. 2023</p>
          </motion.div>
        </div>

        {/* Awards */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 items-start bg-card rounded-xl p-5 border border-border"
          >
            <Award className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-semibold text-sm mb-1">Prix Coup de Cœur — Public Speaking</h4>
              <p className="text-muted-foreground text-xs">
                Awarded by EFREI Paris (2023) for excellence in rhetoric and persuasive communication.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4 items-start bg-card rounded-xl p-5 border border-border"
          >
            <Award className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-semibold text-sm mb-1">TOEIC Gold Certificate — 950/990</h4>
              <p className="text-muted-foreground text-xs">
                Professional bilingual proficiency in English.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
