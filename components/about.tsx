// File: components/About.tsx

"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/amgaina", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/abhishek-amgain-04b642265/", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/abhishekamgain/", label: "Instagram" },
    { icon: <Mail size={20} />, href: "mailto:abhi.amgain567@gmail.com", label: "Email" },
  ];

  // Animation variants for orchestrating children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    }
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      // The component is now transparent to let the global background show through
      className="relative w-full bg-transparent py-24 sm:py-32"
    >
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
            About <span className="text-primary">Me</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey from a single school computer to the world of artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Image with a professional, "glassmorphism" frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative h-[400px] sm:h-[480px] rounded-2xl border border-border bg-background/40 p-4 shadow-2xl shadow-black/10 backdrop-blur-lg"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/abhishek_about.png" // Ensure this image exists in your `public` folder
                alt="A portrait of Abhishek Amgain"
                fill
                className="object-cover object-[center_20%]"
              />
              {/* Subtle overlay for better text contrast if needed in other contexts */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* RIGHT: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-start space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-bold text-foreground">
              From QBASIC to AI
            </motion.h3>

            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
              Growing up in rural Nepal, I first discovered coding through QBASIC on my school's only computer. The
              thrill of making that blinking cursor obey my commands sparked a lifelong passion for technology.
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
              Now pursuing a double major in <span className="font-semibold text-primary/90">Computer Science</span> and <span className="font-semibold text-primary/90">Mathematics</span>,
              I'm on the path to becoming a <span className="font-semibold text-primary/90">Machine Learning Engineer</span>,
              transforming complex problems into elegant AI solutions.
            </motion.p>

            {/* NEW: "Read my full journey" link */}
            <motion.div variants={itemVariants} className="pt-2">
              <Link
                href="/about-me"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium group transition-colors"
              >
                Read my full journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Social Links with enhanced hover effects */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
