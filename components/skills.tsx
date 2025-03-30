"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", icon: <Code className="h-6 w-6" /> },
        { name: "Java", icon: <FileCode className="h-6 w-6" /> },
        { name: "JavaScript", icon: <Terminal className="h-6 w-6" /> },
        { name: "SQL", icon: <Database className="h-6 w-6" /> },
      ],
    },
    {
      name: "Machine Learning & AI",
      skills: [
        { name: "Machine Learning Algorithms", icon: <Brain className="h-6 w-6" /> },
        { name: "Natural Language Processing", icon: <MessageSquare className="h-6 w-6" /> },
        { name: "Large Language Models", icon: <Terminal className="h-6 w-6" /> },
        { name: "Computer Vision", icon: <Eye className="h-6 w-6" /> },
        { name: "Spatial Analysis", icon: <LayoutGrid className="h-6 w-6" /> },
      ],
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "TensorFlow/PyTorch", icon: <Cpu className="h-6 w-6" /> },
        { name: "Scikit-Learn", icon: <LineChart className="h-6 w-6" /> },
        { name: "NumPy/Pandas", icon: <Database className="h-6 w-6" /> },
        { name: "OpenCV/YOLO", icon: <PenTool className="h-6 w-6" /> },
        { name: "Langchain", icon: <GitBranch className="h-6 w-6" /> },
        { name: "NextJs", icon: <Globe className="h-6 w-6" /> },
      ],
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "Unix/Linux", icon: <Terminal className="h-6 w-6" /> },
        { name: "Docker", icon: <Server className="h-6 w-6" /> },
        { name: "Statistical Analysis", icon: <BarChart3 className="h-6 w-6" /> },
        { name: "Hypothesis Testing", icon: <LineChart className="h-6 w-6" /> },
        { name: "Web Development", icon: <Globe className="h-6 w-6" /> },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3
                className="text-2xl font-bold mb-6 text-primary text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {category.name}
              </motion.h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="mr-4 text-primary">{skill.icon}</div>
                          <div className="font-medium">{skill.name}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            asChild
          >
            <a href="https://github.com/amgaina" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              See My Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}