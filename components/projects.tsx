"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import Image from "next/image"
import placeholder from '../public/placeholder.svg';

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[0]>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const projects = [
    {
      title: "Amazon Sentiment Analysis",
      dialog_description: "This is a Natural Language Processing (NLP)-based web application designed to analyze Amazon product feedback on the Amazon Echo product. The application classifies feedback as positive or negative, helping users gauge the overall sentiment of product reviews. Built using Flask, NLTK, and XGBoost, this tool utilizes advanced machine learning and text-processing techniques to accurately interpret customer experiences.",
      description: "A NLP based web app that classifies Amazon Echo product reviews as positive/negative using machine learning.",
      image: "./Amazon_sentiment.png",
      tags: ["Python", "Flask", "NLTK", "XGBoost", "Machine Learning", "NLP"],
      github: "https://github.com/amgaina/Amazon_Sentiment_Analysis",
      live_url: "https://github.com/amgaina/Amazon_Sentiment_Analysis"
    },
    {
      title: "House Price Prediction",
      dialog_description: "This project is a Flask-based web application for predicting house prices in the Bangalore area. The application uses a linear regression machine learning algorithm to predict house prices based on features such as the number of bathrooms, bedrooms, area in square feet, and location. The model achieves an accuracy of approximately 88-92% in predicting house prices.",
      description: "Flask web app that predicts Bangalore house prices using linear regression with 88-92% accuracy based on location, area, and room features.",
      image: "./house_price_prediction.png",
      tags: ["Python", "Flask", "Machine Learning", "Linear Regression", "scikit-learn", "Bootstrap"],
      github: "https://github.com/amgaina/House-Price-Prediction",
      live_url: "https://github.com/amgaina/House-Price-Prediction"
    },
    {
      title: "Placeaway - AI-Powered Trip Planner",
      dialog_description: "Placeaway revolutionizes travel planning with AI-powered personalized itineraries tailored to your preferences and budget. The platform offers real-time travel assistance through an intuitive chat interface, enabling dynamic itinerary adjustments and smart recommendations. With robust features like budget tracking, multi-user collaboration, and secure authentication, Placeaway simplifies trip planning from start to finish.",
      description: "Modern travel app using AI to generate personalized itineraries with real-time assistance, budget tracking, and interactive planning.",
      image: "./placeaway_logo.png",
      tags: [
        "Next.js 14",
        "TypeScript",
        "PostgreSQL",
        "OpenAI GPT-4",
        "Tailwind CSS",
        "shadcn/ui"
      ],
      github: "https://github.com/amgaina/placeaway",
      live_url: "https://placeaway.netlify.app/"
    },
    {
      title: "Google Stock Price Pattern Prediction",
      dialog_description: "Stock price prediction is a crucial area in financial markets. This project focuses on predicting Google stock prices using an LSTM and RNN model. The model leverages historical stock price data to forecast future prices.",
      description: "LSTM and RNN model that forecasts Google stock prices with 79% accuracy using historical time-series data.",
      image: "./stock_price_prediction.png",
      tags: [
        "Python",
        "TensorFlow/Keras",
        "LSTM",
        "RNN",
        "Time Series Analysis",
        "Financial Forecasting"
      ],
      github: "https://github.com/amgaina/Google_Stock_Price_Pattern_Prediction",
      live_url: "https://github.com/amgaina/Google_Stock_Price_Pattern_Prediction"
    },
    {
      title: "Movie Recommender System",
      dialog_description: "This project is a content based Movie Recommender System developed using Scikit Learn, Python, Pandas, Matplotlib, Count Vectorizer, and Cosine Similarity. The system recommends movies based on a given movie title by analyzing the similarity between movie plots.",
      description: "Content-based recommender system that suggests similar movies by analyzing plot similarities using cosine similarity and NLP techniques.",
      image: "./movie_recommendation.png",
      tags: [
        "Python",
        "Scikit-Learn",
        "Pandas",
        "NLP",
        "Cosine Similarity",
        "Count Vectorizer"
      ],
      github: "https://github.com/amgaina/Movie-Recommender-System",
      live_url: "https://github.com/amgaina/Movie-Recommender-System"
    },
    {
      title: "Grant Application Management System",
      dialog_description: "A streamlined platform for the Emerging Scholars program, enabling students to submit applications and faculty to manage projects. Features include secure authentication, application tracking, and decision management. Built with Spring Boot, React.js, and MySQL for robust performance.",
      description: "Streamlined application submission platform for Emerging Scholars program at ULM Computer Science Department.",
      image: "./grant_app_management.png",
      tags: [
        "Spring Boot",
        "Spring Security",
        "React.js",
        "MySQL",
        "Full-stack Development"
      ],
      github: "https://github.com/Georgey764/Grant-Application-Management-System",
      live_url: "https://github.com/Georgey764/Grant-Application-Management-System"
    }
  ]

  const showMoreProjects = () => {
    setVisibleProjects(projects.length)
  }

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
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  }

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of my technical projects and contributions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="overflow-hidden h-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Project Image with Hover Overlay */}
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={project.image || placeholder}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={false}
                    />
                    {/* Only render hover overlay on client side */}
                    {isClient && (
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}>
                        <motion.div
                          className="flex gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={hoveredProject === index ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-red-600 text-white border-red-600 hover:bg-red-700 hover:border-red-700"
                            onClick={() => setSelectedProject(project)}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-red-600 text-white border-red-600 hover:bg-red-700 hover:border-red-700"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-red-900/20 text-red-400 border-red-500/30 hover:bg-red-900/30 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-lg border border-gray-700 bg-gray-900">
            {selectedProject && (
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={selectedProject.image || placeholder}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-4">
                    <p className="text-gray-300">
                      {selectedProject.dialog_description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-red-900/20 text-red-400 border-red-500/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        asChild
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        <a
                          href={selectedProject.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ArrowRight className="h-4 w-4" />
                          View Project
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-red-600 hover:bg-red-700 text-white"
                        asChild
                      >
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Show More Button */}
        {visibleProjects < projects.length && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={showMoreProjects}
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg shadow-red-900/30"
            >
              Show More Projects
            </Button>
          </motion.div>
        )}

        {/* GitHub Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            className="bg-red-600 text-white border-red-600 hover:bg-red-700 hover:border-red-700"
            asChild
          >
            <a href="https://github.com/amgaina" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}