"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stars, Sparkles } from "@react-three/drei";

export default function About() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/amgaina", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/abhishek-amgain-04b642265/", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/abhishekamgain/", label: "Instagram" },
    { icon: <Mail size={20} />, href: "mailto:abhi.amgain567@gmail.com", label: "Email" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
      {/* --- Thematic Star Background --- */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <Stars radius={200} depth={60} count={12000} factor={7} saturation={0} fade speed={1} />
            <Sparkles count={100} scale={10} size={3} speed={0.5} color="#ffae34" />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,5,0,0)_60%,_#000000_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* --- Futuristic Image Display --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-2 group relative h-[480px] p-4"
          >
            {/* HUD Frame */}
            <div className="absolute inset-0 border-2 border-orange-500/20 rounded-xl transition-all duration-500 group-hover:border-orange-500/50" />
            <motion.div
              className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-orange-400 rounded-tl-xl"
              initial={{ width: 0, height: 0 }}
              whileInView={{ width: '2rem', height: '2rem' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-orange-400 rounded-br-xl"
              initial={{ width: 0, height: 0 }}
              whileInView={{ width: '2rem', height: '2rem' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            />

            {/* The Image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl shadow-black">
              <Image
                src="/abhishek_about.png" // Make sure this path is correct
                alt="Abhishek Amgain"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
            </div>
          </motion.div>

          {/* --- Text Content --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              From QBASIC to AI
            </motion.h3>

            <motion.p variants={itemVariants} className="text-neutral-300 text-lg leading-relaxed">
              Growing up in rural Nepal, I first discovered coding through QBASIC on my school's only computer. The
              thrill of making that blinking cursor obey my commands sparked a lifelong passion for technology.
            </motion.p>

            <motion.p variants={itemVariants} className="text-neutral-300 text-lg leading-relaxed">
              Now pursuing a double major in <span className="text-orange-300 font-medium">Computer Science</span> and <span className="text-orange-300 font-medium">Mathematics</span>,
              I'm on the path to becoming a <span className="text-orange-300 font-medium">Machine Learning Engineer</span>.
              I specialize in <span className="text-orange-300 font-medium">NLP</span> and <span className="text-orange-300 font-medium">computer vision</span>,
              transforming complex problems into elegant AI solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <Link
                href="/about-me" // Link to a dedicated about page
                className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium group transition-colors"
              >
                Learn more about my journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group p-2"
                >
                  <span className="absolute inset-0.5 rounded-full bg-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg" />
                  <span className="relative text-neutral-400 group-hover:text-orange-300 transition-colors duration-300">
                    {link.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}