"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import Image from "next/image";

const projects = [
  {
    title: "RhymeAI – AI-Powered Event Emcee",
    dialog_description: (
      <>
        <span className="text-primary font-semibold text-lg">The Ultimate Smart Event Emcee Platform</span>
        <ul className="mt-3 text-muted-foreground text-base space-y-2 pl-4 list-disc">
          <li><strong>Create Events:</strong> Instantly schedule and manage events.</li>
          <li><strong>AI MC Customization:</strong> Tailor the AI's voice, style, and language.</li>
          <li><strong>Script Support:</strong> Upload or type scripts for AI-generated narration.</li>
          <li><strong>Audio Generation:</strong> Create realistic voices in multiple languages.</li>
          <li><strong>Live Dashboard:</strong> Full control over the event with real-time analytics.</li>
        </ul>
      </>
    ),
    description: "AI-powered event host platform with customizable voices, script generation, live analytics, and a full event dashboard.",
    image: "/rhymeai_logo.png",
    tags: ["Next.js 14", "TypeScript", "OpenAI GPT-4", "Tailwind CSS", "Shadcn/ui", "Clerk Auth"],
    github: "https://github.com/amgaina/rhymeai",
    live_url: "https://rhyme-ai.vercel.app/"
  },
  {
    title: "House Price Prediction",
    dialog_description: "This project is a Flask-based web application for predicting house prices in Bangalore. The application uses a linear regression model that achieves an accuracy of approximately 88-92% based on features like bathrooms, bedrooms, area, and location.",
    description: "A Flask web app that predicts Bangalore house prices using linear regression with 88-92% accuracy.",
    image: "/house_price_prediction.png",
    tags: ["Python", "Flask", "Machine Learning", "Linear Regression", "scikit-learn"],
    github: "https://github.com/amgaina/House-Price-Prediction",
    live_url: "https://github.com/amgaina/House-Price-Prediction"
  },
  {
    title: "Placeaway - AI Trip Planner",
    dialog_description: "Placeaway revolutionizes travel planning with AI-powered personalized itineraries tailored to your preferences and budget. The platform offers real-time travel assistance through an intuitive chat interface, enabling dynamic itinerary adjustments and smart recommendations.",
    description: "A modern travel app using AI to generate personalized itineraries with real-time assistance and budget tracking.",
    image: "/placeaway_logo.png",
    tags: ["Next.js 14", "TypeScript", "PostgreSQL", "OpenAI GPT-4", "Tailwind CSS"],
    github: "https://github.com/amgaina/placeaway",
    live_url: "https://placeaway.netlify.app/"
  },
  {
    title: "Google Stock Price Prediction",
    dialog_description: "This project focuses on predicting Google stock prices using an LSTM and RNN model. The model leverages historical stock price data to forecast future prices, achieving an accuracy of 79%.",
    description: "An LSTM and RNN model that forecasts Google stock prices with 79% accuracy using historical time-series data.",
    image: "/stock_price_prediction.png",
    tags: ["Python", "TensorFlow/Keras", "LSTM", "RNN", "Time Series"],
    github: "https://github.com/amgaina/Google_Stock_Price_Pattern_Prediction",
    live_url: "https://github.com/amgaina/Google_Stock_Price_Pattern_Prediction"
  },
  {
    title: "Movie Recommender System",
    dialog_description: "This project is a content-based Movie Recommender System. The system recommends movies based on a given movie title by analyzing the similarity between movie plots using cosine similarity and NLP techniques.",
    description: "A content-based recommender system that suggests movies by analyzing plot similarities using NLP.",
    image: "/movie_recommendation.png",
    tags: ["Python", "Scikit-Learn", "Pandas", "NLP", "Cosine Similarity"],
    github: "https://github.com/amgaina/Movie-Recommender-System",
    live_url: "https://github.com/amgaina/Movie-Recommender-System"
  },
  {
    title: "Grant Application Management",
    dialog_description: "A streamlined platform for the Emerging Scholars program, enabling students to submit applications and faculty to manage projects. Features include secure authentication, application tracking, and decision management.",
    description: "A streamlined application submission platform for the Emerging Scholars program at ULM.",
    image: "/grant_app_management.png",
    tags: ["Spring Boot", "Spring Security", "React.js", "MySQL", "Full-stack"],
    github: "https://github.com/Georgey764/Grant-Application-Management-System",
    live_url: "https://github.com/Georgey764/Grant-Application-Management-System"
  }
];

type Project = typeof projects[0];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  return (
    <section id="projects" className="relative w-full bg-transparent py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my work, from machine learning models to full-stack web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full h-full [perspective:1000px]"
            >
              <motion.div
                className="group relative flex flex-col w-full h-full rounded-xl sm:rounded-2xl border border-border bg-background/50 p-3 sm:p-4 shadow-lg sm:shadow-xl backdrop-blur-lg [transform-style:preserve-3d] transition-all duration-300"
              >
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm flex-grow mb-3 sm:mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/10 px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto w-full rounded-full bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* "Explore More" Button */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://github.com/amgaina"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:brightness-110 hover:shadow-xl hover:shadow-primary/30"
          >
            <Github size={16} />
            Explore More Projects
          </a>
        </motion.div>

        {/* Dialog Modal - Responsive Fixes */}
        <AnimatePresence>
          {selectedProject && (
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              />
              <DialogContent className="fixed z-50 w-[calc(100vw-2rem)] max-w-4xl max-h-[90vh] sm:max-h-[85vh] rounded-xl sm:rounded-2xl border border-border bg-card dark:bg-background/80 p-0 shadow-2xl dark:backdrop-blur-lg overflow-hidden">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", damping: 20, stiffness: 150 }}
                  className="flex flex-col md:flex-row h-full"
                >
                  {/* Image Side - Responsive */}
                  <div className="relative w-full h-48 sm:h-64 md:h-auto md:w-1/2 rounded-t-xl sm:rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-fit"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content Side - Responsive */}
                  <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {selectedProject.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="text-sm sm:text-base text-muted-foreground leading-relaxed my-3 sm:my-4">
                      {selectedProject.dialog_description}
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2 my-3 sm:my-4">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-primary/10 px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
                      <a
                        href={selectedProject.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1 sm:gap-2 rounded-full bg-primary px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-primary-foreground transition-all hover:brightness-110"
                      >
                        <ExternalLink size={16} /> View Live
                      </a>
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1 sm:gap-2 rounded-full border border-border bg-background/50 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-foreground transition-colors hover:bg-muted"
                      >
                        <Github size={16} /> View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}