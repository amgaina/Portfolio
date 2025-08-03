"use client";
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Education from "../components/education"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Research from "../components/research"
import Contact from "../components/contact"
import Blogs from "../components/blogs"
import Papers from "../components/papers"
import Navbar from "../components/navbar"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/preloader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Optional: Prevent scrolling on the body while preloader is active
      document.body.style.overflow = 'auto';
    }, 3500); // Adjust time as needed (3.5 seconds)

    // Optional: Hide body scrollbar during loading
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto'; // Ensure scroll is restored
    };
  }, []);
  return (
    <main className="bg-black min-h-screen">
      <AnimatePresence>
        {isLoading ? (
          <Preloader key="preloader" />
        ) : null}
      </AnimatePresence>
      <Navbar />
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
      <footer className="bg-slate-900 text-white py-6 text-center">
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
    </main>
  )
}
