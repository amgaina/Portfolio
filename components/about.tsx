"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/amgaina", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/abhishek-amgain-04b642265/", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/abhishekamgain/", label: "Instagram" },
    { icon: <Mail size={20} />, href: "mailto:abhi.amgain567@gmail.com", label: "Email" },
  ]

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img src="/abhishek_about.png" alt="Abhishek Amgain" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
              Learning
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">A Journey in Tech</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Growing up in rural Nepal, I first discovered coding through QBASIC on my school's only computer. The
              thrill of making that blinking cursor obey my commands sparked my passion for technology.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm now following the path to become a disciplined Machine Learning Engineer pursuing double major in CS
              and Mathematics. I specialize in NLP and computer vision, transforming complex problems into elegant AI
              solutions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <Link href="/about-me" className="text-primary hover:underline">
                Learn more about my journey
              </Link>{" "}
              from QBASIC to machine learning.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-white transition-colors"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

