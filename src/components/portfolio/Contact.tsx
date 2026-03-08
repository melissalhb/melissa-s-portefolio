import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Heart, ArrowUpRight, MapPin } from "lucide-react";
import { CharReveal, LineReveal } from "./TextReveal";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated blobs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="color-blob w-[400px] h-[400px] bg-coral bottom-10 right-10"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="color-blob w-[300px] h-[300px] bg-lavender top-20 left-20"
      />

      <div className="section-container relative z-10 text-center">
        <div>
          <LineReveal>
            <span className="font-mono text-sm text-sky font-bold tracking-widest uppercase">(05)</span>
          </LineReveal>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold mt-2 mb-6">
            <CharReveal>Let's work</CharReveal>
            <br />
            <CharReveal delay={0.3} className="text-coral">together</CharReveal>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
              className="text-lavender inline-block"
            >
              .
            </motion.span>
          </h2>

          <LineReveal delay={0.4}>
            <p className="text-muted-foreground max-w-md mx-auto mb-4">
              Open to <span className="font-bold text-foreground">VIE positions</span>,{" "}
              <span className="font-bold text-foreground">graduate programs</span>, and international opportunities.
            </p>
          </LineReveal>

          <LineReveal delay={0.5}>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10">
              <MapPin className="w-4 h-4 text-coral" />
              Paris, France — Open to relocation
            </div>
          </LineReveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton>
              <a
                href="mailto:melissa@efrei.net"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
              >
                <Mail className="w-4 h-4" />
                melissa@efrei.net
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://www.linkedin.com/in/melissa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-lavender/15 hover:bg-lavender/25 transition text-foreground"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-coral/15 hover:bg-coral/25 transition text-foreground"
              >
                <Github className="w-6 h-6" />
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        <div className="mt-20 pt-8 border-t border-foreground/5">
          <p className="text-muted-foreground text-xs flex items-center justify-center gap-1 font-mono">
            Built with <Heart className="w-3 h-3 text-coral" /> by Melissa — 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
