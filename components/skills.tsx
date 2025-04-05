"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import {
  Code,
  Database,
  LineChart,
  Brain,
  BarChart3,
  Terminal,
  PenTool,
  Cpu,
  Server,
  Globe,
  GitBranch,
  MessageSquare,
  Eye,
  LayoutGrid,
  FileCode,
  Github,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function Skills() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const skillCategories = [
    {
      name: "Programming",
      skills: [
        { name: "Python", icon: <Code className="h-5 w-5" /> },
        { name: "Java", icon: <FileCode className="h-5 w-5" /> },
        { name: "JavaScript", icon: <Terminal className="h-5 w-5" /> },
        { name: "SQL", icon: <Database className="h-5 w-5" /> },
      ],
    },
    {
      name: "ML & AI",
      skills: [
        { name: "ML Algorithms", icon: <Brain className="h-5 w-5" /> },
        { name: "NLP", icon: <MessageSquare className="h-5 w-5" /> },
        { name: "LLMs", icon: <Terminal className="h-5 w-5" /> },
        { name: "Computer Vision", icon: <Eye className="h-5 w-5" /> },
        { name: "Spatial Analysis", icon: <LayoutGrid className="h-5 w-5" /> },
      ],
    },
    {
      name: "Frameworks",
      skills: [
        { name: "TensorFlow/PyTorch", icon: <Cpu className="h-5 w-5" /> },
        { name: "Scikit-Learn", icon: <LineChart className="h-5 w-5" /> },
        { name: "NumPy/Pandas", icon: <Database className="h-5 w-5" /> },
        { name: "OpenCV/YOLO", icon: <PenTool className="h-5 w-5" /> },
        { name: "Langchain", icon: <GitBranch className="h-5 w-5" /> },
        { name: "NextJs", icon: <Globe className="h-5 w-5" /> },
      ],
    },
    {
      name: "Tools",
      skills: [
        { name: "Unix/Linux", icon: <Terminal className="h-5 w-5" /> },
        { name: "Docker", icon: <Server className="h-5 w-5" /> },
        { name: "Stats", icon: <BarChart3 className="h-5 w-5" /> },
        { name: "Hypothesis Testing", icon: <LineChart className="h-5 w-5" /> },
        { name: "Web Dev", icon: <Globe className="h-5 w-5" /> },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  }

  // Predefined positions for the dots to avoid hydration mismatch
  const dots = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    size: 3 + (i * 1),
    left: Math.random() * 100,
    top: Math.random() * 100,
    y: (Math.random() - 0.5) * 30,
    x: (Math.random() - 0.5) * 30,
    duration: 8 + (i * 2)
  }))

  return (
    <section id="skills" className="py-12 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Only render background dots on client side */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {dots.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute rounded-full bg-red-400"
              style={{
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                left: `${dot.left}%`,
                top: `${dot.top}%`,
              }}
              animate={{
                y: [0, dot.y],
                x: [0, dot.x],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <motion.div
            className="w-16 md:w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <motion.div
            className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory"
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="w-[85vw] flex-shrink-0 snap-center px-2"
                variants={item}
              >
                <Card className="h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-red-500/30 transition-all shadow-lg">
                  <CardContent className="p-4">
                    <h3 className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                      {category.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          whileHover="hover"
                          variants={item}
                          className="flex items-center p-2 rounded-lg bg-gray-800/50"
                        >
                          <div className="mr-2 p-2 bg-red-900/30 rounded-full border border-red-500/30 text-red-500">
                            {skill.icon}
                          </div>
                          <div className="font-medium text-sm text-white truncate">
                            {skill.name}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-2 text-sm text-gray-400">
            ← Swipe to view more →
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:block">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16"
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={item}
              >
                <motion.h3
                  className="text-xl md:text-2xl font-bold mb-6 text-center text-red-400"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {category.name}
                </motion.h3>
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={container}
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      whileHover="hover"
                    >
                      <Card className="h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-red-500/30 transition-all shadow-lg">
                        <CardContent className="p-4">
                          <div className="flex items-center">
                            <motion.div
                              className="mr-3 p-2 bg-red-900/30 rounded-full border border-red-500/30 text-red-500"
                              whileHover={{ rotate: 10 }}
                            >
                              {skill.icon}
                            </motion.div>
                            <div className="font-medium text-white">{skill.name}</div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* GitHub Button */}
        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg hover:shadow-red-500/20 transition-all text-sm md:text-base"
            asChild
          >
            <a
              href="https://github.com/amgaina"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Github className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="group-hover:translate-x-1 transition-transform">
                My GitHub Projects
              </span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}