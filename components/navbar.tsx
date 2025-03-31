"use client"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Papers", href: "#papers" },
    { name: "Blog", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm py-2 shadow-lg" : "bg-transparent py-4"
        }`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center">
            <a
              href="#home"
              className="text-3xl md:text-4xl font-bold"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#home")
              }}
            >
              <span className="bg-gradient-to-r from-slate-800 to-primary bg-clip-text text-transparent">
                ABHISHEK<span className="text-primary">.</span>
              </span>
            </a>

            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="relative text-slate-700 hover:text-primary transition-colors text-lg font-medium"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(link.href)
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary hover:bg-primary/10"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button Header */}
            <div className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-slate-200 sticky top-0 bg-white z-10">
              <a
                href="#home"
                className="text-3xl font-bold"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#home")
                }}
              >
                <span className="bg-gradient-to-r from-slate-800 to-primary bg-clip-text text-transparent">
                  ABHISHEK<span className="text-primary">.</span>
                </span>
              </a>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary hover:bg-primary/10"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="container mx-auto px-4 py-8">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      className="block text-2xl font-medium text-slate-700 hover:text-primary py-3 px-6"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(link.href)
                      }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        #home, #about, #skills, #education, #experience, 
        #projects, #research, #papers, #blogs, #contact {
          scroll-margin-top: 100px;
        }
      `}</style>
    </>
  )
}