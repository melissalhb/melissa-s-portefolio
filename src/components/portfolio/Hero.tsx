import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            Software Engineer
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
            Melissa
            <br />
            <span className="text-gradient">Engineer.</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Final-year Software Engineering student at EFREI Paris. R&D Apprentice at{" "}
            <span className="text-foreground font-medium">Société Générale</span>.
            Specialized in C#/.NET and Full-stack Web Development.
          </p>

          <div className="flex items-center gap-3 text-muted-foreground text-sm mb-10">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Paris, France — Open to relocation & international opportunities (VIE)</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:melissa@efrei.net"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:brightness-110 transition glow"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/melissa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border hover:border-primary/50 transition text-muted-foreground hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border hover:border-primary/50 transition text-muted-foreground hover:text-primary"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
};

export default Hero;
