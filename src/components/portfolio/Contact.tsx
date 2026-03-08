import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            Contact
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's work together
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Open to VIE positions, graduate programs, and international opportunities.
            Feel free to reach out!
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <a
              href="mailto:melissa@efrei.net"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:brightness-110 transition glow"
            >
              <Mail className="w-4 h-4" />
              melissa@efrei.net
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

          <p className="text-muted-foreground text-xs flex items-center justify-center gap-1">
            Built with <Heart className="w-3 h-3 text-primary" /> by Melissa
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
