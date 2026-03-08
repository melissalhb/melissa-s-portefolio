import { motion } from "framer-motion";
import { GraduationCap, Globe, Award, Music, Dumbbell, Swords } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-sm text-sunny font-bold tracking-widest uppercase">(04)</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-2 mb-12">
            Background<span className="text-mint">/</span>
          </h2>
        </motion.div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card bg-gradient-to-br from-lavender/15 to-coral/10"
          >
            <GraduationCap className="w-10 h-10 text-lavender mb-4" />
            <h3 className="font-display font-bold text-xl mb-1">EFREI Paris</h3>
            <p className="text-sm text-muted-foreground mb-1">M.Eng in Software Engineering & IS</p>
            <p className="font-mono text-xs text-coral font-bold mb-3">2021 — 2026</p>
            <p className="text-sm text-muted-foreground italic">International Section · All coursework in English</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bento-card bg-gradient-to-br from-mint/15 to-sky/10"
          >
            <Globe className="w-10 h-10 text-mint mb-4" />
            <h3 className="font-display font-bold text-xl mb-1">Asia Pacific University</h3>
            <p className="text-sm text-muted-foreground mb-1">Academic Exchange · Kuala Lumpur, Malaysia</p>
            <p className="font-mono text-xs text-mint font-bold">Aug. — Dec. 2023</p>
          </motion.div>
        </div>

        {/* Awards & Interests */}
        <div className="grid md:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card bg-sunny/10 border-sunny/20 text-center"
          >
            <Award className="w-8 h-8 text-sunny mx-auto mb-3" />
            <h4 className="font-display font-bold text-sm mb-1">Prix Coup de Cœur</h4>
            <p className="text-xs text-muted-foreground">Public Speaking · EFREI 2023</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bento-card bg-sky/10 border-sky/20 text-center"
          >
            <Award className="w-8 h-8 text-sky mx-auto mb-3" />
            <h4 className="font-display font-bold text-sm mb-1">TOEIC 950/990</h4>
            <p className="text-xs text-muted-foreground">Gold Certificate · Bilingual</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bento-card bg-coral/10 border-coral/20 text-center"
          >
            <Music className="w-8 h-8 text-coral mx-auto mb-3" />
            <h4 className="font-display font-bold text-sm mb-1">Head of Design</h4>
            <p className="text-xs text-muted-foreground">School Music Association</p>
          </motion.div>
        </div>

        {/* Interests marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {["🥋 Karate", "🥊 Krav-Maga", "🤼 BJJ", "🏋️ Weightlifting", "🎤 Singing", "🎸 Bass Guitar"].map(
            (interest) => (
              <span
                key={interest}
                className="tag-pill bg-card hover:scale-105 transition-transform cursor-default"
              >
                {interest}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
