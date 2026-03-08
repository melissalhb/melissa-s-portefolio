import { useRef, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import heroShapes from "@/assets/hero-shapes.png";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Blobs float in
      tl.fromTo(
        [blob1.current, blob2.current, blob3.current],
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 0.3, duration: 1.2, stagger: 0.15 },
        0
      );

      // Badge slides in
      tl.fromTo(
        badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.3
      );

      // Name reveal - split into characters
      if (nameRef.current) {
        const chars = nameRef.current.querySelectorAll(".char");
        tl.fromTo(
          chars,
          { y: 120, opacity: 0, rotateX: 90 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.04 },
          0.4
        );
      }

      // Title line
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".word");
        tl.fromTo(
          words,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          0.9
        );
      }

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        1.2
      );

      // CTA buttons
      if (ctaRef.current) {
        const buttons = ctaRef.current.children;
        tl.fromTo(
          buttons,
          { y: 20, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 },
          1.4
        );
      }

      // Hero image
      tl.fromTo(
        imageRef.current,
        { scale: 0.5, opacity: 0, rotate: -15 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1, ease: "elastic.out(1,0.5)" },
        0.6
      );

      // Floating animation for blobs (infinite)
      gsap.to(blob1.current, {
        y: -30, x: 20, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      gsap.to(blob2.current, {
        y: 20, x: -15, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      gsap.to(blob3.current, {
        y: -20, x: -25, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut",
      });

      // Floating image
      gsap.to(imageRef.current, {
        y: -15, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nameChars = "MELISSA".split("");

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Color blobs */}
      <div ref={blob1} className="color-blob w-[500px] h-[500px] bg-coral top-20 -right-40" />
      <div ref={blob2} className="color-blob w-[400px] h-[400px] bg-lavender bottom-20 -left-20" />
      <div ref={blob3} className="color-blob w-[300px] h-[300px] bg-mint top-40 left-1/3" />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div ref={badgeRef} className="flex items-center gap-3 mb-8 opacity-0">
            <span className="inline-block w-3 h-3 rounded-full bg-mint animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Name with character animation */}
          <h1 className="font-display text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight mb-3">
            <span ref={nameRef} className="inline-flex overflow-hidden" style={{ perspective: "600px" }}>
              {nameChars.map((char, i) => (
                <span key={i} className="char inline-block text-coral" style={{ transformOrigin: "bottom" }}>
                  {char}
                </span>
              ))}
              <span className="char inline-block text-lavender">.</span>
            </span>
          </h1>

          <div ref={titleRef} className="mb-6">
            <span className="word inline-block font-display text-2xl md:text-3xl font-bold text-foreground/80">
              Software&nbsp;
            </span>
            <span className="word inline-block font-display text-2xl md:text-3xl font-bold text-foreground/80">
              Engineer
            </span>
          </div>

          <p ref={subtitleRef} className="text-lg text-muted-foreground max-w-lg mb-4 leading-relaxed opacity-0">
            Building{" "}
            <span className="text-foreground font-semibold underline decoration-sunny decoration-4 underline-offset-4">
              beautiful
            </span>{" "}
            &{" "}
            <span className="text-foreground font-semibold underline decoration-mint decoration-4 underline-offset-4">
              scalable
            </span>{" "}
            digital products at{" "}
            <span className="font-bold text-foreground">Société Générale</span> · EFREI Paris
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-3 mt-8">
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
        </div>

        <div ref={imageRef} className="hidden lg:flex justify-center opacity-0">
          <img
            src={heroShapes}
            alt="Creative abstract shapes"
            className="w-[450px] h-[450px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
