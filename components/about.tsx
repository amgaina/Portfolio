"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"

export default function About() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/amgaina", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/abhishek-amgain-04b642265/", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/abhishekamgain/", label: "Instagram" },
    { icon: <Mail size={20} />, href: "mailto:abhi.amgain567@gmail.com", label: "Email" },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-500"
            style={{
              width: `${8 + (i * 2)}px`,
              height: `${8 + (i * 2)}px`,
              left: `${10 + (i * 10)}%`,
              top: `${10 + (i * 10)}%`,
            }}
            animate={{
              y: [0, 20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 10 + (i * 2),
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-2xl border-2 border-gray-800 group">
              <Image
                src="./abhishek_about.png"
                alt="Abhishek Amgain"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <motion.div
                className="absolute bottom-6 right-6 bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-full font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Always Learning
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              From QBASIC to AI
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              Growing up in rural Nepal, I first discovered coding through QBASIC on my school's only computer. The
              thrill of making that blinking cursor obey my commands sparked a lifelong passion for technology.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Now pursuing a double major in <span className="text-red-400 font-medium">Computer Science</span> and <span className="text-red-400 font-medium">Mathematics</span>,
              I'm on the path to becoming a <span className="text-red-400 font-medium">Machine Learning Engineer</span>.
              I specialize in <span className="text-red-400 font-medium">NLP</span> and <span className="text-red-400 font-medium">computer vision</span>,
              transforming complex problems into elegant AI solutions.
            </p>

            <div className="pt-4">
              <Link
                href="./about-me"
                className="inline-flex items-center text-red-400 hover:text-red-300 font-medium group transition-colors"
              >
                Learn more about my journey
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-700 bg-gray-900 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      {link.icon}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}