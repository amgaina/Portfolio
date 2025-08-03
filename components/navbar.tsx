"use client"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Menu, X, Code, FolderGit2, FileText, Contact, BookOpen, Home } from "lucide-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  // --- Simplified Scroll Logic ---
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    // Hide navbar on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }

    // --- Active Section Logic (no change needed here, it's efficient) ---
    const sections = document.querySelectorAll("section[id]")
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop
      if (latest >= sectionTop - 100) {
        setActiveSection(section.id)
      }
    })
  })

  // Close menu on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const navLinks: { name: string; href: string; icon: React.ReactNode; isCta?: boolean }[] = [
    { name: "Home", href: "#home", icon: <Home size={16} /> },
    { name: "Skills", href: "#skills", icon: <Code size={16} /> },
    { name: "Projects", href: "#projects", icon: <FolderGit2 size={16} /> },
    { name: "Papers", href: "#papers", icon: <BookOpen size={16} /> },
    { name: "Contact", href: "#contact", icon: <Contact size={16} /> },
  ]

  const resumeLink = { name: "Resume", href: "/resume", icon: <FileText size={16} />, isCta: true }

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="relative my-2 flex items-center justify-between rounded-full border border-orange-500/20 bg-black/50 p-2 shadow-lg shadow-black/20 backdrop-blur-md"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
          >
            {/* Logo */}
            <Link href="#home" onClick={(e) => { e.preventDefault(); document.querySelector("#home")?.scrollIntoView({ behavior: 'smooth' }) }} className="flex items-center gap-2 pl-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center shadow-inner shadow-black/30">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-medium hidden sm:inline-block">
                Abhishek<span className="text-orange-400">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${activeSection === link.href.substring(1) ? "text-white" : "text-neutral-400 hover:text-white"
                    }`}
                >
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-orange-500/20"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}
            </nav>

            {/* CTA and Mobile Menu Toggle */}
            <div className="flex items-center gap-2">
              <Link
                href={resumeLink.href}
                target="_blank"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                {resumeLink.icon}
                {resumeLink.name}
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-orange-400 hover:bg-orange-500/10 hover:text-orange-300 rounded-full"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex flex-col p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                className="text-orange-400 hover:bg-orange-500/10 hover:text-orange-300 rounded-full"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </Button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-6">
              {[...navLinks, resumeLink].map((link, index) => (
                <motion.div
                  key={link.name}
                  className="w-full max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5, ease: 'easeOut' }}
                >
                  {link.isCta ? (
                    <Link
                      href={link.href}
                      target="_blank"
                      className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/20"
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`flex w-full items-center justify-center gap-3 rounded-full p-4 text-lg font-medium transition-colors ${activeSection === link.href.substring(1) ? "bg-orange-500/20 text-white" : "text-neutral-300"
                        }`}
                    >
                      {link.icon}
                      {link.name}
                    </button>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}