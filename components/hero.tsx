"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Code, BrainCircuit, RefreshCw, Combine, Layers, FolderGit2, BarChart3, Sparkles } from "lucide-react";
import Typewriter from 'typewriter-effect';

const keyStrengths = [
  {
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
    text: "Skilled in creating sales and marketing dashboards using data visualization tools like Tableau and PowerBI.",
  },
  {
    icon: <BrainCircuit className="h-5 w-5 text-primary" />,
    text: "Proficient in Python, TensorFlow, and scikit-learn, with strong data analysis and model development skills.",
  },
  {
    icon: <FolderGit2 className="h-5 w-5 text-primary" />,
    text: "Created a detailed repository on machine learning topics, demonstrating practical application of theory.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-primary" />,
    text: "Eager to keep learning and contribute to AI advancements.",
  },
  {
    icon: <Layers className="h-5 w-5 text-primary" />,
    text: "Work experience in software engineering with skills in ReactJS, Spring, Bootstrap, AWS, APIs, and SQL.",
  },
  {
    icon: <Combine className="h-5 w-5 text-primary" />,
    text: "Passionate about converging software development and AI/machine learning to drive innovation.",
  },
];

const socialLinks = [
  { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/amgaina" },
  { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/abhishek-amgain-04b642265/" },
  { name: "Email", icon: <Mail size={20} />, url: "mailto:abhi.amgain567@gmail.com" },
];
const roles = ['Machine Learning Engineer', 'Full Stack Developer', 'LLM Developer', 'Data Engineer'];

export default function Hero() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.2 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4
      }
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-background/0 to-background/80" />
      </div>

      <motion.div
        className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* LEFT: INTRODUCTORY TEXT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground"
          >
            <span className="inline-block  pb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Abhishek Amgain
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-6 h-12 flex items-center justify-center lg:justify-start gap-3"
          >
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
                wrapperClassName: "text-xl md:text-2xl font-medium text-muted-foreground",
                cursorClassName: "text-primary"
              }}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Transforming data into meaningful insights and building intelligent systems that solve real-world problems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="relative rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 opacity-0 cursor-pointer" />
              <span className="relative flex items-center gap-2">
                Explore Projects
                <ArrowRight className="h-5 w-5" />
              </span>
            </motion.button>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative group text-muted-foreground transition-colors duration-300"
                >
                  {link.icon}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT: COMPETENCIES CARD */}
        <motion.div
          className="w-full max-w-md mx-auto"
          variants={cardVariants}
        >
          <div className="relative h-full bg-background/50 border border-border rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-lg overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />

            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Core Competencies
              </span>
            </h3>

            <ul className="space-y-4">
              {keyStrengths.map((strength, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start rounded-lg hover:bg-accent/10 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10 text-primary">
                    {strength.icon}
                  </div>
                  <p className="text-sm pl-2 text-muted-foreground leading-relaxed">
                    {strength.text}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}