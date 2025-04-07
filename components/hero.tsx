"use client"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const skills = [
    "Skilled in creating sales and marketing dashboards using data visualization tools like Tableau and PowerBI",
    "Proficient in Python, TensorFlow, and scikit-learn, with strong data analysis and model development skills",
    "Created a detailed repository on machine learning topics, demonstrating practical application of theory",
    "Eager to keep learning and contribute to AI advancements",
    "Work experience in software engineering with skills in ReactJS, Spring, Bootstrap, AWS, APIs, and SQL",
    "Passionate about converging software development and AI/machine learning to drive innovation"
  ]

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/amgaina" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/abhishek-amgain-04b642265/" },
    { icon: <Mail size={20} />, url: "abhi.amgain567@gmail.com" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/abhishekamgain/" }
  ]

  const backgroundElements = [
    { id: 1, left: 10, top: 20, size: 8, y: 15, x: -10 },
    { id: 2, left: 85, top: 15, size: 12, y: -20, x: 15 },
    { id: 3, left: 30, top: 70, size: 10, y: 10, x: -15 },
    { id: 4, left: 75, top: 60, size: 7, y: -15, x: 10 },
    { id: 5, left: 20, top: 40, size: 9, y: 20, x: -5 },
    { id: 6, left: 65, top: 30, size: 11, y: -10, x: 20 },
    { id: 7, left: 40, top: 80, size: 6, y: 5, x: -20 },
    { id: 8, left: 90, top: 50, size: 8, y: -25, x: 5 }
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4 py-16 sm:py-0 overflow-hidden"
    >
      {/* Preload the hero image */}
      <link rel="preload" href="/abhishek_logo.png" as="image" />

      {/* Animated background elements */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {backgroundElements.map((el) => (
            <motion.div
              key={el.id}
              className="absolute rounded-full bg-red-500"
              style={{
                width: `${el.size}px`,
                height: `${el.size}px`,
                left: `${el.left}%`,
                top: `${el.top}%`,
              }}
              animate={{
                y: [0, el.y],
                x: [0, el.x],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Social Links - Desktop Left Side */}
            {isClient && (
              <motion.div
                className="hidden lg:flex flex-col space-y-6 fixed left-8 top-1/2 transform -translate-y-1/2 z-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 hover:bg-red-600/80 rounded-full backdrop-blur-sm transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                  Abhishek Amgain
                </span>
              </h1>

              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                AI & Machine Learning Enthusiast
              </motion.h2>

              <motion.p
                className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Transforming data into meaningful insights and building intelligent systems that solve real-world problems
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </Button>
              </motion.div>

              {/* Skills List - Desktop Only */}
              <motion.div
                className="hidden lg:block space-y-3 text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <p className="text-gray-400">{skill}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Image (Optimized for LCP) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-square"
            >
              <Image
                src="/abhishek_logo.png"
                alt="Abhishek Amgain"
                width={500}
                height={500}
                priority
                className="object-contain"
                quality={85}
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Links - Mobile */}
      {isClient && (
        <motion.div
          className="lg:hidden flex justify-center space-x-6 mt-12 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-red-600/80 rounded-full backdrop-blur-sm transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      )}

      {/* Scroll Down Button */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-red-500 hover:bg-gray-800/50 rounded-full backdrop-blur-sm"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to About section"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </Button>
      </motion.div>
    </section>
  )
}