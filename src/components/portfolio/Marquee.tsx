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

  const renderSet = (keyPrefix: string) =>
    items.map((item, i) => (
      <span key={`${keyPrefix}-${i}`} className="flex items-center mx-6 shrink-0">
        <span className={`font-display font-extrabold text-3xl md:text-4xl tracking-wide ${item.color}`}>
          {item.text}
        </span>
        <span className="mx-6 text-foreground/20 text-2xl">✦</span>
      </span>
    ));

  return (
    <div className="py-8 overflow-hidden border-y-2 border-foreground/5">
      <div className="animate-marquee flex whitespace-nowrap w-fit">
        {renderSet("a")}
        {renderSet("b")}
      </div>
    </div>
  );
};

export default Marquee;
