"use client"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Menu, X, Home, Code, FolderGit2, FileText, Contact, GraduationCap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Skills", href: "#skills", icon: <Code size={18} /> },
    { name: "Projects", href: "#projects", icon: <FolderGit2 size={18} /> },
    { name: "Papers", href: "#papers", icon: <GraduationCap size={18} /> },
    { name: "Contact", href: "#contact", icon: <Contact size={18} /> },
    { name: "Resume", href: "/resume", icon: <FileText size={18} />, isCta: true }
  ]

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    if (href === "/resume") {
      window.location.href = href; // Redirect to /resume page directly
      return;
    }

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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-md py-2 border-b border-gray-700" : "bg-transparent py-4"}`}>
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          <nav className="hidden md:flex space-x-4 ml-auto">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium flex items-center gap-2 rounded-md transition-colors ${link.isCta ? "bg-red-600 hover:bg-red-700 text-white" : "text-gray-300 hover:text-white hover:bg-gray-800"}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-red-400">{link.icon}</span>
                {link.name}
                {!link.isCta && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          <motion.div className="md:hidden" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-gray-700/10"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={28} className="text-red-400" />
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 backdrop-blur-lg z-50 flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 text-white hover:bg-gray-700/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={28} className="text-red-400" />
            </Button>

            <motion.ul className="flex flex-col space-y-6 w-full max-w-xs">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className={`flex items-center gap-4 text-xl font-medium px-6 py-3 rounded-lg transition-colors ${link.isCta ? "bg-red-600 hover:bg-red-700 text-white" : "text-gray-300 hover:text-white hover:bg-gray-800"}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                  >
                    <span className="text-red-400">{link.icon}</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-12 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: navLinks.length * 0.1 + 0.2 }}
            >
              Navigate through my portfolio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
