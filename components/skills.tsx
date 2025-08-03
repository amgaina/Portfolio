"use client"
import { motion } from "framer-motion"
import {
  Code, Database, Brain, Terminal, Cpu, Server, Globe, GitBranch,
  MessageSquare, Eye, LayoutGrid, FileCode, Github, BarChart3, LineChart, AreaChart, Box
} from "lucide-react"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars, Sparkles } from "@react-three/drei"
import Link from "next/link"
import { Button } from "./ui/button"

// SKILLS DATA -- UPDATED WITH NEW SKILLS
const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", icon: <Code /> },
      { name: "Java", icon: <FileCode /> },
      { name: "JavaScript / TypeScript", icon: <Terminal /> },
      { name: "SQL", icon: <Database /> },
    ],
  },
  {
    name: "Machine Learning & AI",
    skills: [
      { name: "ML Algorithms", icon: <Brain /> },
      { name: "Natural Language Processing", icon: <MessageSquare /> },
      { name: "Computer Vision (OpenCV)", icon: <Eye /> },
      { name: "Databricks", icon: <Box /> }, // ADDED
      { name: "Large Language Models", icon: <Terminal /> },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "TensorFlow & PyTorch", icon: <Cpu /> },
      { name: "Scikit-Learn", icon: <LineChart /> },
      { name: "Langchain & LlamaIndex", icon: <GitBranch /> },
      { name: "Node.js", icon: <Server /> }, // ADDED
      { name: "Next.js & React", icon: <Globe /> },
    ],
  },
  {
    name: "Developer & Data Tools",
    skills: [
      { name: "Unix / Linux Shell", icon: <Terminal /> },
      { name: "Docker", icon: <Server /> },
      { name: "Git & GitHub", icon: <Github /> },
      { name: "Power BI", icon: <AreaChart /> }, // ADDED
      { name: "Tableau", icon: <BarChart3 /> }, // ADDED
    ],
  },
]

// Main component
export default function Skills() {

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.05 }
    },
  };

  const orbVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 20px rgba(255, 165, 0, 0.6)",
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
      {/* --- Thematic Star Background --- */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <Stars radius={200} depth={60} count={12000} factor={7} saturation={0} fade speed={1} />
            <Sparkles count={100} scale={10} size={3} speed={0.5} color="#ffae34" />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,5,0,0)_60%,_#000000_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Core Competencies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={categoryVariants}
              className="rounded-2xl border border-orange-500/10 bg-neutral-900/40 p-6 backdrop-blur-md"
            >
              <h3 className="mb-6 text-2xl font-bold text-center text-orange-400">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={orbVariants}
                    whileHover="hover"
                    className="flex flex-col items-center justify-center text-center p-2"
                  >
                    <div className="grid h-20 w-20 place-items-center rounded-full border-2 border-orange-500/20 bg-black/30 text-orange-400 transition-all duration-300 hover:bg-orange-500/10 hover:border-orange-500/50">
                      <div className="h-8 w-8">{skill.icon}</div>
                    </div>
                    <p className="mt-3 text-sm font-medium text-neutral-300 break-words">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:scale-105 hover:shadow-orange-500/30"
            asChild
          >
            <Link
              href="https://github.com/amgaina"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2"
            >
              <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span>View My Work on GitHub</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}