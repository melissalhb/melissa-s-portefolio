import { motion } from "framer-motion";

const Marquee = () => {
  const items = [
    { text: "SOFTWARE ENGINEER", color: "text-coral" },
    { text: "C# / .NET", color: "text-lavender" },
    { text: "REACT", color: "text-mint" },
    { text: "FULL-STACK", color: "text-sunny" },
    { text: "CLEAN CODE", color: "text-sky" },
    { text: "OPEN TO RELOCATE", color: "text-coral" },
    { text: "NODE.JS", color: "text-lavender" },
    { text: "DOCKER", color: "text-mint" },
    { text: "PYTHON", color: "text-sunny" },
    { text: "AGILE / SCRUM", color: "text-sky" },
  ];

  const doubled = [...items, ...items];

  return (
    <div className="py-8 overflow-hidden border-y-2 border-foreground/5">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center mx-6 shrink-0">
            <span className={`font-display font-extrabold text-2xl md:text-3xl ${item.color}`}>
              {item.text}
            </span>
            <span className="mx-6 text-foreground/20 text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
