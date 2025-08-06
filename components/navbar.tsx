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
    // Lock body scroll when mobile menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = "auto"; // Ensure scroll is unlocked on unmount
    }
  }, [isMenuOpen]);

  // --- Data & Helpers ---
  const navLinks: NavLink[] = [
    { name: "Home", href: "#home", icon: <Home size={20} /> },
    { name: "About", href: "#about", icon: <Code size={20} /> },
    { name: "Projects", href: "#projects", icon: <FolderGit2 size={20} /> },
    { name: "Contact", href: "#contact", icon: <Contact size={20} /> },
  ];

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // --- Animation Variants ---
  const headerVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-110%", opacity: 0 },
  };

  const mobileMenuVariants = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  const mobileNavContainerVariants = {
    animate: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };

  const mobileNavLinkVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring" } },
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
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <span className="font-bold text-lg text-primary-foreground">A</span>
              </div>
              <span className="font-semibold text-foreground hidden sm:inline-block">
                Abhishek<span className="text-primary">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  href={link.href}
                  key={link.name}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  whileHover={{ y: -2 }}
                >
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-primary/10"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 pr-1">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <a
                href="/Abhishek_Amgain.pdf"
                download
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:brightness-110"
              >
                <FileText size={16} />
                Resume
              </a>
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
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-background/95 backdrop-blur-xl z-50 flex flex-col p-6 shadow-2xl"
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

              {/* Main Navigation Links */}
              <motion.nav
                variants={mobileNavContainerVariants}
                className="flex flex-col gap-4"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`flex w-full items-center gap-4 rounded-lg p-3 text-lg font-medium transition-colors ${activeSection === link.href.substring(1) ? "bg-primary/10 text-foreground" : "text-muted-foreground"}`}
                    variants={mobileNavLinkVariants}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </motion.nav>

              {/* Bottom Actions: Resume and Theme Toggle */}
              <motion.div
                className=" pt-6 border-t border-border space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a
                  href="/Abhishek_Amgain.pdf"
                  download
                  className="flex w-full items-center justify-center gap-3 rounded-full p-3 text-lg font-medium bg-primary text-primary-foreground"
                >
                  <FileText size={20} />
                  <span>Download Resume</span>
                </a>
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
