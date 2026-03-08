import { motion } from "framer-motion";
import { GraduationCap, Globe, Award, Music } from "lucide-react";
import { CharReveal, LineReveal, StaggerContainer, StaggerItem } from "./TextReveal";

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <div>
          <LineReveal>
            <span className="font-mono text-sm text-sunny font-bold tracking-widest uppercase">(04)</span>
          </LineReveal>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-2 mb-12">
            <CharReveal delay={0.1}>Background</CharReveal>
            <span className="text-mint">/</span>
          </h2>
        </div>

        {/* Education cards */}
        <StaggerContainer className="grid md:grid-cols-2 gap-5 mb-8" staggerDelay={0.15}>
          <StaggerItem>
            <div className="bento-card bg-gradient-to-br from-lavender/15 to-coral/10 h-full">
              <GraduationCap className="w-10 h-10 text-lavender mb-4" />
              <h3 className="font-display font-bold text-xl mb-1">EFREI Paris</h3>
              <p className="text-sm text-muted-foreground mb-1">M.Eng in Software Engineering & IS</p>
              <p className="font-mono text-xs text-coral font-bold mb-3">2021 — 2026</p>
              <p className="text-sm text-muted-foreground italic">International Section · All coursework in English</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bento-card bg-gradient-to-br from-mint/15 to-sky/10 h-full">
              <Globe className="w-10 h-10 text-mint mb-4" />
              <h3 className="font-display font-bold text-xl mb-1">Asia Pacific University</h3>
              <p className="text-sm text-muted-foreground mb-1">Academic Exchange · Kuala Lumpur, Malaysia</p>
              <p className="font-mono text-xs text-mint font-bold">Aug. — Dec. 2023</p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Awards & Interests */}
        <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.1}>
          <StaggerItem>
            <div className="bento-card bg-sunny/10 border-sunny/20 text-center h-full">
              <Award className="w-8 h-8 text-sunny mx-auto mb-3" />
              <h4 className="font-display font-bold text-sm mb-1">Prix Coup de Cœur</h4>
              <p className="text-xs text-muted-foreground">Public Speaking · EFREI 2023</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bento-card bg-sky/10 border-sky/20 text-center h-full">
              <Award className="w-8 h-8 text-sky mx-auto mb-3" />
              <h4 className="font-display font-bold text-sm mb-1">TOEIC 950/990</h4>
              <p className="text-xs text-muted-foreground">Gold Certificate · Bilingual</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bento-card bg-coral/10 border-coral/20 text-center h-full">
              <Music className="w-8 h-8 text-coral mx-auto mb-3" />
              <h4 className="font-display font-bold text-sm mb-1">Head of Design</h4>
              <p className="text-xs text-muted-foreground">School Music Association</p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {["🥋 Karate", "🥊 Krav-Maga", "🤼 BJJ", "🏋️ Weightlifting", "🎤 Singing", "🎸 Bass Guitar"].map(
            (interest) => (
              <motion.span
                key={interest}
                whileHover={{ scale: 1.1, rotate: [-1, 1, 0] }}
                className="tag-pill bg-card hover:scale-105 transition-transform cursor-default"
              >
                {interest}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
