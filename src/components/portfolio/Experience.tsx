import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "R&D Software Engineer Apprentice",
    company: "Société Générale",
    period: "Sept. 2024 — Present",
    color: "border-coral bg-coral/5",
    dotColor: "bg-coral",
    bullets: [
      "Engineered a high-performance data validation tool in C#/.NET ensuring 100% data integrity for critical financial flows",
      "Developed a large-scale data converter processing massive datasets for legacy ↔ modern system interop",
      "Automated QA workflows with end-to-end file processing scripts",
      "Enforced quality through Unit Tests (xUnit/NUnit) and code reviews",
    ],
  },
  {
    title: "Private Tutor — Math & Science",
    company: "Independent",
    period: "2015 — Present",
    color: "border-lavender bg-lavender/5",
    dotColor: "bg-lavender",
    bullets: [
      "Mentored 10+ students with personalized frameworks, improving average grades by +15%",
    ],
  },
  {
    title: "Sales Associate",
    company: "Histoire d'Or",
    period: "Dec. 2022 — Jan. 2023",
    color: "border-sunny bg-sunny/5",
    dotColor: "bg-sunny",
    bullets: [
      "Achieved high-value sales (up to €3,000) in a fast-paced luxury retail environment",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { x: -60, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-24" ref={sectionRef}>
      <div className="section-container">
        <div ref={headingRef}>
          <span className="font-mono text-sm text-lavender font-bold tracking-widest uppercase">(02)</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-2 mb-12">
            Experience<span className="text-coral">/</span>
          </h2>
        </div>

        <div ref={cardsRef} className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className={`bento-card border-l-4 ${exp.color} rounded-l-lg`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${exp.dotColor}`} />
                  <h3 className="font-display font-bold text-lg">{exp.title}</h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
              </div>
              <p className="font-bold text-sm text-muted-foreground mb-3 ml-6">{exp.company}</p>
              <ul className="space-y-2 ml-6">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                    <span className="text-coral shrink-0">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
