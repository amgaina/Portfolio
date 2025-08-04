// File: components/navbar.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Code, FolderGit2, FileText, Contact, BookOpen, Home } from "lucide-react";
import { ThemeToggle } from "./ui/theme-toggle";

type NavLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  // --- Scroll & Resize Logic ---
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    const sections = document.querySelectorAll("section[id]");
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop;
      if (latest >= sectionTop - 100) {
        setActiveSection(section.id);
      }
    });
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Data & Helpers ---
  const navLinks: NavLink[] = [
    { name: "Home", href: "#home", icon: <Home size={20} /> },
    { name: "Skills", href: "#skills", icon: <Code size={20} /> },
    { name: "Projects", href: "#projects", icon: <FolderGit2 size={20} /> },
    { name: "Papers", href: "#papers", icon: <BookOpen size={20} /> },
    { name: "Contact", href: "#contact", icon: <Contact size={20} /> },
  ];

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // --- Animation Variants ---
  const headerVariants = {
    visible: { y: 0 },
    hidden: { y: "-110%" },
  };

  const mobileMenuVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40"
        variants={headerVariants}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="relative mt-4 flex items-center justify-between rounded-full border border-border bg-background/60 p-2 shadow-lg shadow-black/5 backdrop-blur-lg">
            {/* Logo */}
            <Link href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center gap-2 pl-3 group">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="font-bold text-lg text-primary-foreground">A</span>
              </div>
              <span className="font-semibold text-foreground hidden sm:inline-block">
                Abhishek<span className="text-primary">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-primary/10"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110"
              >
                <FileText size={16} />
                Resume
              </Link>
              <button
                className="md:hidden text-primary hover:bg-primary/10 rounded-full p-2.5 transition-colors"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex flex-col p-6"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-bold text-lg text-foreground">Navigation</span>
              <button
                className="text-primary hover:bg-primary/10 rounded-full p-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`flex w-full max-w-xs items-center justify-center gap-4 rounded-full p-4 text-lg font-medium transition-colors ${activeSection === link.href.substring(1) ? "bg-primary/10 text-foreground" : "text-muted-foreground"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5, ease: 'easeOut' }}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </nav>
            <div className="flex justify-center p-4">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
