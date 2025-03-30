"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[0]>(null)

  const projects = [
    {
      title: "Amazon Sentiment Analysis",
      dialog_description: "This is a Natural Language Processing (NLP)-based web application designed to analyze Amazon product feedback on the Amazon Echo product. The application classifies feedback as positive or negative, helping users gauge the overall sentiment of product reviews. Built using Flask, NLTK, and XGBoost, this tool utilizes advanced machine learning and text-processing techniques to accurately interpret customer experiences.",
      description: "A NLP based web app that classifies Amazon Echo product reviews as positive/negative using machine learning.",
      image: "/Amazon_sentiment.png",
      tags: ["Python", "Flask", "NLTK", "XGBoost", "Machine Learning", "NLP"],
      github: "https://github.com/amgaina/Amazon_Sentiment_Analysis"
    },
    {
      title: "House Price Prediction",
      dialog_description: "This project is a Flask-based web application for predicting house prices in the Bangalore area. The application uses a linear regression machine learning algorithm to predict house prices based on features such as the number of bathrooms, bedrooms, area in square feet, and location. The model achieves an accuracy of approximately 88-92% in predicting house prices.",
      description: "Flask web app that predicts Bangalore house prices using linear regression with 88-92% accuracy based on location, area, and room features.",
      image: "/house_price_prediction.png",
      tags: ["Python", "Flask", "Machine Learning", "Linear Regression", "scikit-learn", "Bootstrap"],
      github: "https://github.com/amgaina/House-Price-Prediction",
    },
    {
      title: "Placeaway - AI-Powered Trip Planner",
      dialog_description: "Placeaway revolutionizes travel planning with AI-powered personalized itineraries tailored to your preferences and budget. The platform offers real-time travel assistance through an intuitive chat interface, enabling dynamic itinerary adjustments and smart recommendations. With robust features like budget tracking, multi-user collaboration, and secure authentication, Placeaway simplifies trip planning from start to finish.",
      description: "Modern travel app using AI to generate personalized itineraries with real-time assistance, budget tracking, and interactive planning.",
      image: "/placeaway_logo.png",
      tags: [
        "Next.js 14",
        "TypeScript",
        "PostgreSQL",
        "OpenAI GPT-4",
        "Tailwind CSS",
        "shadcn/ui"
      ],
      github: "https://github.com/amgaina/placeaway",
    },
    {
      title: "Google Stock Price Pattern Prediction",
      dialog_description: "Stock price prediction is a crucial area in financial markets. This project focuses on predicting Google stock prices using an LSTM and RNN model. The model leverages historical stock price data to forecast future prices.",
      description: "LSTM and RNN model that forecasts Google stock prices with 79% accuracy using historical time-series data.",
      image: "/stock_price_prediction.png",
      tags: [
        "Python",
        "TensorFlow/Keras",
        "LSTM",
        "RNN",
        "Time Series Analysis",
        "Financial Forecasting"
      ],
      github: "https://github.com/amgaina/Google_Stock_Price_Pattern_Prediction",
    },
    {
      title: "Movie Recommender System",
      dialog_description: "This project is a content based Movie Recommender System developed using Scikit Learn, Python, Pandas, Matplotlib, Count Vectorizer, and Cosine Similarity. The system recommends movies based on a given movie title by analyzing the similarity between movie plots.",
      description: "Content-based recommender system that suggests similar movies by analyzing plot similarities using cosine similarity and NLP techniques.",
      image: "/movie_recommendation.png",
      tags: [
        "Python",
        "Scikit-Learn",
        "Pandas",
        "NLP",
        "Cosine Similarity",
        "Count Vectorizer"
      ],
      github: "https://github.com/amgaina/Movie-Recommender-System",
    },
    {
      title: "Grant Application Management System",
      dialog_description: "A streamlined platform for the Emerging Scholars program, enabling students to submit applications and faculty to manage projects. Features include secure authentication, application tracking, and decision management. Built with Spring Boot, React.js, and MySQL for robust performance.",
      description: "Streamlined application submission platform for Emerging Scholars program at ULM Computer Science Department.",
      image: "/grant_app_management.png",
      tags: [
        "Spring Boot",
        "Spring Security",
        "React.js",
        "MySQL",
        "Full-stack Development"
      ],
      github: "https://github.com/Georgey764/Grant-Application-Management-System",
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
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden h-full hover:shadow-xl transition-all group">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="icon" variant="secondary" className="rounded-full" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full"
                        onClick={() => setSelectedProject(project)}
                        aria-label="Project Details"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
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
          <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-lg">
            {selectedProject && (
              <div className="grid grid-cols-1">
                <div className="p-6">
                  <DialogHeader>
                    <div className="flex justify-between items-start">
                      <DialogTitle className="text-2xl font-bold mb-2">
                        {selectedProject.title}
                      </DialogTitle>
                    </div>
                  </DialogHeader>

                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedProject.dialog_description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button asChild>
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {visibleProjects < projects.length && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button onClick={showMoreProjects} className="bg-primary hover:bg-primary/90 text-white">
              Show More Projects
            </Button>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
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