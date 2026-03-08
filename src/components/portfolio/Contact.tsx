import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Heart, ArrowUpRight, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Color blobs */}
      <div className="color-blob w-[400px] h-[400px] bg-coral bottom-0 right-0" />
      <div className="color-blob w-[300px] h-[300px] bg-lavender top-0 left-20" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-sm text-sky font-bold tracking-widest uppercase">(05)</span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold mt-2 mb-6">
            Let's work
            <br />
            <span className="text-coral">together</span>
            <span className="text-lavender">.</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-4">
            Open to <span className="font-bold text-foreground">VIE positions</span>,{" "}
            <span className="font-bold text-foreground">graduate programs</span>, and international opportunities.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10">
            <MapPin className="w-4 h-4 text-coral" />
            Paris, France — Open to relocation
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:melissa@efrei.net"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              <Mail className="w-4 h-4" />
              melissa@efrei.net
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/melissa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-lavender/15 hover:bg-lavender/25 transition text-foreground"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-coral/15 hover:bg-coral/25 transition text-foreground"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

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
