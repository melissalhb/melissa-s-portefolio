import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import heroShapes from "@/assets/hero-shapes.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Color blobs */}
      <div className="color-blob w-[500px] h-[500px] bg-coral top-20 -right-40" />
      <div className="color-blob w-[400px] h-[400px] bg-lavender bottom-20 -left-20" />
      <div className="color-blob w-[300px] h-[300px] bg-mint top-40 left-1/3" />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-3 h-3 rounded-full bg-mint animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6">
            Hey, I'm{" "}
            <span className="text-coral">Melissa</span>
            <span className="text-lavender">.</span>
          </h1>

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

          <p className="text-muted-foreground mb-8">
            R&D Apprentice @ <span className="font-bold text-foreground">Société Générale</span> · EFREI Paris
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:melissa@efrei.net"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-transform"
            >
              <Mail className="w-4 h-4" />
              Contact me
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/melissa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-foreground/10 hover:border-lavender hover:bg-lavender/10 transition-all text-foreground"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-foreground/10 hover:border-coral hover:bg-coral/10 transition-all text-foreground"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center"
        >
          <img
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
