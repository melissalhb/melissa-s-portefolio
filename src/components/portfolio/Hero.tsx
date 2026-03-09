import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Download } from "lucide-react";
import heroShapes from "@/assets/hero-shapes.png";
import { CharReveal, LineReveal } from "./TextReveal";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Color blobs with parallax-like float */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="color-blob w-[500px] h-[500px] bg-coral top-20 -right-40"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="color-blob w-[400px] h-[400px] bg-lavender bottom-20 -left-20"
      />
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="color-blob w-[300px] h-[300px] bg-mint top-40 left-1/3"
      />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <LineReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-3 h-3 rounded-full bg-mint animate-pulse" />
              <span className="font-mono text-sm text-muted-foreground">Available for opportunities</span>
            </div>
          </LineReveal>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6">
            <CharReveal delay={0.2}>Hey, I'm</CharReveal>
            <br />
            <CharReveal delay={0.5} className="text-coral">Melissa</CharReveal>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
              className="text-lavender inline-block"
            >
              .
            </motion.span>
          </h1>

          <LineReveal delay={0.7}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-4 leading-relaxed">
              Software Engineer building{" "}
              <span className="text-foreground font-semibold underline decoration-sunny decoration-4 underline-offset-4">
                beautiful
              </span>{" "}
              &{" "}
              <span className="text-foreground font-semibold underline decoration-mint decoration-4 underline-offset-4">
                scalable
              </span>{" "}
              digital products.
            </p>
          </LineReveal>

          <LineReveal delay={0.8}>
            <p className="text-muted-foreground mb-8">
              R&D Apprentice @ <span className="font-bold text-foreground">Société Générale</span> · EFREI Paris
            </p>
          </LineReveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <MagneticButton>
              <a
                href="mailto:melissa.lacheb@efrei.net"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-transform"
              >
                <Mail className="w-4 h-4" />
                Contact me
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 border-2 border-foreground/15 text-foreground px-6 py-3.5 rounded-full font-bold text-sm hover:border-coral hover:bg-coral/10 hover:scale-105 transition-all"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://www.linkedin.com/in/melissa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-foreground/10 hover:border-lavender hover:bg-lavender/10 transition-all text-foreground"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-foreground/10 hover:border-coral hover:bg-coral/10 transition-all text-foreground"
              >
                <Github className="w-5 h-5" />
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="hidden lg:flex justify-center"
        >
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={heroShapes}
            alt="Creative abstract shapes"
            className="w-[450px] h-[450px] object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
