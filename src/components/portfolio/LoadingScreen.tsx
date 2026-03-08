import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        // Accelerating progress
        const increment = prev < 30 ? 2 : prev < 70 ? 3 : prev < 90 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-foreground flex flex-col items-center justify-center"
      exit={{ y: "-100%"  }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Background marquee text */}
      <div className="absolute inset-0 flex items-center overflow-hidden opacity-[0.04]">
        <div className="animate-marquee flex whitespace-nowrap w-fit">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display font-extrabold text-[12vw] text-background mx-8 shrink-0">
              SOFTWARE ENGINEER • FULL-STACK •
            </span>
          ))}
        </div>
      </div>

      {/* Welcome text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-mono text-xs text-background/40 tracking-[0.3em] uppercase mb-8"
      >
        Welcome
      </motion.p>

      {/* Name reveal */}
      <div className="overflow-hidden mb-10">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          className="font-display font-extrabold text-5xl md:text-7xl text-background tracking-tight"
        >
          Melissa<span className="text-coral">.</span>
        </motion.h1>
      </div>

      {/* Loading bar */}
      <div className="w-48 h-[2px] bg-background/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-coral rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Progress counter */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-mono text-sm text-background/30 mt-4 tabular-nums"
      >
        {progress}%
      </motion.span>
    </motion.div>
  );
};

export default LoadingScreen;
