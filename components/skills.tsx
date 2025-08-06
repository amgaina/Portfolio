// File: components/skills.tsx

"use client";

import { motion } from "framer-motion";
import {
  Code, Database, Brain, Terminal, Cpu, Server, Globe, GitBranch,
  MessageSquare, Eye, Box, FileCode, Github, BarChart3, LineChart, AreaChart
} from "lucide-react";

// --- DATA ---
const skillCategories = [
  {
    name: "Programming Languages",
    icon: <Code className="h-7 w-7 text-primary" />,
    skills: ["Python", "Java", "JavaScript / TypeScript", "SQL"],
  },
  {
    name: "Machine Learning & AI",
    icon: <Brain className="h-7 w-7 text-primary" />,
    skills: ["ML Algorithms", "NLP", "Computer Vision (OpenCV)", "Databricks", "Large Language Models"],
  },
  {
    name: "Frameworks & Libraries",
    icon: <Cpu className="h-7 w-7 text-primary" />,
    skills: ["TensorFlow & PyTorch", "Scikit-Learn", "Langchain & LlamaIndex", "Node.js", "Next.js & React"],
  },
  {
    name: "Developer & Data Tools",
    icon: <Server className="h-7 w-7 text-primary" />,
    skills: ["Unix / Linux Shell", "Docker", "Git & GitHub", "Power BI", "Tableau"],
  },
];

// --- MAIN COMPONENT ---
export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  return (
    <section id="skills" className="relative w-full bg-transparent py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Core <span className="text-primary">Competencies</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of the primary tools and technologies I utilize to build modern, intelligent applications.
          </p>
        </motion.div>

        {/* Unified Skills Card */}
        <motion.div
          className="max-w-6xl mx-auto rounded-2xl border border-border bg-background/50 p-8 sm:p-12 shadow-xl backdrop-blur-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{category.name}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-muted-foreground">
                      <GitBranch className="h-4 w-4 text-primary/70 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
