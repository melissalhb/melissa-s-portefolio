import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import LoadingScreen from "@/components/portfolio/LoadingScreen";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <Marquee />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </>
      )}
    </div>
  );
};

export default Index;
