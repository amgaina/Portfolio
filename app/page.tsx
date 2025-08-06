// File: app/page.tsx

"use client";

import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Education from "../components/education";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Research from "../components/research";
import Contact from "../components/contact";
import Blogs from "../components/blogs";
import Papers from "../components/papers";
import { useEffect, useState, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "../components/preloader";
import { useSearchParams } from "next/navigation";

// A new inner component to handle the scrolling logic after the preloader.
// This is necessary because useSearchParams is a client-side hook.
function HomeContent() {
  const searchParams = useSearchParams();
  const sectionToScroll = searchParams.get('section');

  useEffect(() => {
    if (sectionToScroll) {
      const element = document.getElementById(sectionToScroll);
      if (element) {
        // Use a small timeout to ensure the layout is fully painted
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [sectionToScroll]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Research />
      <Papers />
      <Projects />
      <Blogs />
      <Contact />
      <footer className="bg-background/50 text-foreground py-6 text-center border-t border-border">
        <div className="container mx-auto px-4">
          <p>© 2025 Abhishek Amgain</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/amgaina" className="hover:text-primary transition-colors">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-amgain-04b642265/"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading time
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 2500); // Set loading time to 2.5 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen">
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        // Suspense is required by Next.js when using useSearchParams
        <Suspense fallback={<div />}>
          <HomeContent />
        </Suspense>
      )}
    </main>
  );
}
