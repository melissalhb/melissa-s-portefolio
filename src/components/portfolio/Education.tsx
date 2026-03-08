import { useRef, useEffect } from "react";
import { GraduationCap, Globe, Award, Music } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
      });

      if (eduRef.current) {
        gsap.fromTo(eduRef.current.children, { y: 60, opacity: 0, scale: 0.9 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.15, ease: "back.out(1.4)",
          scrollTrigger: { trigger: eduRef.current, start: "top 80%" },
        });
      }

      if (awardsRef.current) {
        gsap.fromTo(awardsRef.current.children, { y: 40, opacity: 0, scale: 0.9 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.4)",
          scrollTrigger: { trigger: awardsRef.current, start: "top 85%" },
        });
      }

      if (interestsRef.current) {
        gsap.fromTo(interestsRef.current.children, { y: 20, opacity: 0, scale: 0.8 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.06, ease: "back.out(2)",
          scrollTrigger: { trigger: interestsRef.current, start: "top 90%" },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="education" className="py-24" ref={sectionRef}>
      <div className="section-container">
        <div ref={headingRef}>
          <span className="font-mono text-sm text-sunny font-bold tracking-widest uppercase">(04)</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-2 mb-12">
            Background<span className="text-mint">/</span>
          </h2>
        </div>

        <div ref={eduRef} className="grid md:grid-cols-2 gap-5 mb-8">
          <div className="bento-card bg-gradient-to-br from-lavender/15 to-coral/10">
            <GraduationCap className="w-10 h-10 text-lavender mb-4" />
            <h3 className="font-display font-bold text-xl mb-1">EFREI Paris</h3>
            <p className="text-sm text-muted-foreground mb-1">M.Eng in Software Engineering & IS</p>
            <p className="font-mono text-xs text-coral font-bold mb-3">2021 — 2026</p>
            <p className="text-sm text-muted-foreground italic">International Section · All coursework in English</p>
          </div>

          <div className="bento-card bg-gradient-to-br from-mint/15 to-sky/10">
            <Globe className="w-10 h-10 text-mint mb-4" />
            <h3 className="font-display font-bold text-xl mb-1">Asia Pacific University</h3>
            <p className="text-sm text-muted-foreground mb-1">Academic Exchange · Kuala Lumpur, Malaysia</p>
            <p className="font-mono text-xs text-mint font-bold">Aug. — Dec. 2023</p>
          </div>
        </div>

        <div ref={awardsRef} className="grid md:grid-cols-3 gap-5">
          <div className="bento-card bg-sunny/10 border-sunny/20 text-center">
            <Award className="w-8 h-8 text-sunny mx-auto mb-3" />
            <h4 className="font-display font-bold text-sm mb-1">Prix Coup de Cœur</h4>
            <p className="text-xs text-muted-foreground">Public Speaking · EFREI 2023</p>
          </div>
          <div className="bento-card bg-sky/10 border-sky/20 text-center">
            <Award className="w-8 h-8 text-sky mx-auto mb-3" />
            <h4 className="font-display font-bold text-sm mb-1">TOEIC 950/990</h4>
            <p className="text-xs text-muted-foreground">Gold Certificate · Bilingual</p>
          </div>
          <div className="bento-card bg-coral/10 border-coral/20 text-center">
            <Music className="w-8 h-8 text-coral mx-auto mb-3" />
            <h4 className="font-display font-bold text-sm mb-1">Head of Design</h4>
            <p className="text-xs text-muted-foreground">School Music Association</p>
          </div>
        </div>

        <div ref={interestsRef} className="mt-10 flex flex-wrap justify-center gap-3">
          {["🥋 Karate", "🥊 Krav-Maga", "🤼 BJJ", "🏋️ Weightlifting", "🎤 Singing", "🎸 Bass Guitar"].map(
            (interest) => (
              <span key={interest} className="tag-pill bg-card hover:scale-105 transition-transform cursor-default">
                {interest}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
