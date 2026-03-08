import { motion } from "framer-motion";
import { ReactNode } from "react";

// Animates each word sliding up from below
export const WordReveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) => {
  const words = children.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.3em] pb-[0.15em] -mb-[0.15em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                  delay: delay + i * 0.04,
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// Animates each character
export const CharReveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) => {
  const chars = children.split("");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`inline-block ${className}`}
    >
      {chars.map((char, i) => (
        <span key={i} className="overflow-hidden inline-block pb-[0.15em] -mb-[0.15em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", rotateX: -80 },
              visible: {
                y: 0,
                rotateX: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.33, 1, 0.68, 1],
                  delay: delay + i * 0.025,
                },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// Line reveal - a block that wipes away to reveal content
export const LineReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left";
}) => (
  <div className={`overflow-hidden pb-[0.15em] -mb-[0.15em] ${className}`}>
    <motion.div
      initial={{ y: direction === "up" ? "100%" : 0, x: direction === "left" ? "-100%" : 0, opacity: 0 }}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay }}
    >
      {children}
    </motion.div>
  </div>
);

// Stagger container for child elements
export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: staggerDelay },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
