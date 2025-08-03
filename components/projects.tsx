"use client"
import { useState, useEffect, Suspense } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Github, ExternalLink, ArrowRight, X } from "lucide-react"
import {
  Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle
} from "./ui/dialog"
import Image from "next/image"
import placeholder from "../public/placeholder.svg"

// Dynamically import Canvas components to avoid SSR issues
const Canvas = dynamic(() => import("@react-three/fiber").then(mod => mod.Canvas), { ssr: false })
const Stars = dynamic(() => import("@react-three/drei").then(mod => mod.Stars), { ssr: false })
const Sparkles = dynamic(() => import("@react-three/drei").then(mod => mod.Sparkles), { ssr: false })

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[0]>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [])

  // -------- Your projects array (First: RhymeAI!) ---------
  const projects = [
    {
      title: "RhymeAI – AI-Powered Event Emcee",
      dialog_description: (
        <>
          <span className="text-red-400 font-semibold text-lg">The Ultimate Smart Event Emcee Platform</span>
          <ul className="mt-3 text-gray-300 text-base space-y-1 pl-3 list-disc">
            <li>🎉 <strong>Create Events</strong> instantly with seamless scheduling.</li>
            <li>🧠 <strong>AI MC Customization</strong> (voice, style, language).</li>
            <li>✍️ <strong>Script Support</strong>: Upload or type, AI generates pro-level MC narration.</li>
            <li>🔊 <strong>Audio Generation</strong>: Realistic voices in multiple languages.</li>
            <li>🖥️ <strong>Presentation Integration</strong> and slide sync with script.</li>
            <li>📊 <strong>Real-Time Dashboard</strong> for full event control, streaming, and analytics.</li>
            <li>🎛️ <strong>Sound System & Venue Control</strong> features.</li>
            <li>🔒 <strong>Clerk Authentication</strong> · 🌐 <strong>Fully Responsive UI</strong></li>
          </ul>
          <div className="mt-4">
            <strong>User Journey:</strong> Create event → info via chat/file/form → AI script → preview, customize, audio → present → engage & analyze.
          </div>
          <div className="text-sm mt-3 text-yellow-400">Future: Advanced engagement, multi-device sync, live translation, and more!</div>
        </>
      ),
      description: "AI-powered event host platform – Real-time emcee with customizable voices, script gen, live analytics, and full event dashboard.",
      image: "./rhymeai_logo.png", // Update actual path
      tags: [
        "Next.js 14", "TypeScript", "OpenAI GPT-4", "Tailwind CSS", "Shadcn/ui", "Clerk Auth", "R3F"
      ],
      github: "https://github.com/amgaina/rhymeai",
      live_url: "https://rhyme-ai.vercel.app/"
    },
    // ...Rest of your projects as provided (House Price Prediction, Placeaway, etc.)
    // (Copy the remaining objects from your query, except for "Amazon Sentiment Analysis")
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
      tags: ["Next.js 14", "TypeScript", "PostgreSQL", "OpenAI GPT-4", "Tailwind CSS", "shadcn/ui"],
      github: "https://github.com/amgaina/placeaway",
      live_url: "https://placeaway.netlify.app/"
    },
    {
      title: "Google Stock Price Pattern Prediction",
      dialog_description: "Stock price prediction is a crucial area in financial markets. This project focuses on predicting Google stock prices using an LSTM and RNN model. The model leverages historical stock price data to forecast future prices.",
      description: "LSTM and RNN model that forecasts Google stock prices with 79% accuracy using historical time-series data.",
      image: "./stock_price_prediction.png",
      tags: ["Python", "TensorFlow/Keras", "LSTM", "RNN", "Time Series Analysis", "Financial Forecasting"],
      github: "https://github.com/amgaina/Google_Stock_Price_Pattern_Prediction",
      live_url: "https://github.com/amgaina/Google_Stock_Price_Pattern_Prediction"
    },
    {
      title: "Movie Recommender System",
      dialog_description: "This project is a content based Movie Recommender System developed using Scikit Learn, Python, Pandas, Matplotlib, Count Vectorizer, and Cosine Similarity. The system recommends movies based on a given movie title by analyzing the similarity between movie plots.",
      description: "Content-based recommender system that suggests similar movies by analyzing plot similarities using cosine similarity and NLP techniques.",
      image: "./movie_recommendation.png",
      tags: ["Python", "Scikit-Learn", "Pandas", "NLP", "Cosine Similarity", "Count Vectorizer"],
      github: "https://github.com/amgaina/Movie-Recommender-System",
      live_url: "https://github.com/amgaina/Movie-Recommender-System"
    },
    {
      title: "Grant Application Management System",
      dialog_description: "A streamlined platform for the Emerging Scholars program, enabling students to submit applications and faculty to manage projects. Features include secure authentication, application tracking, and decision management. Built with Spring Boot, React.js, and MySQL for robust performance.",
      description: "Streamlined application submission platform for Emerging Scholars program at ULM Computer Science Department.",
      image: "./grant_app_management.png",
      tags: ["Spring Boot", "Spring Security", "React.js", "MySQL", "Full-stack Development"],
      github: "https://github.com/Georgey764/Grant-Application-Management-System",
      live_url: "https://github.com/Georgey764/Grant-Application-Management-System"
    }
  ]

  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.10 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30, filter: "blur(2px)" },
    show: { opacity: 1, y: 0, filter: "blur(0)", transition: { type: "spring", stiffness: 120, damping: 12 } }
  }

  // BG Star Layer
  const StarryBackground = () => (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Suspense fallback={null}>
          <Stars radius={200} depth={60} count={12000} factor={7} saturation={0} fade speed={1} />
          <Sparkles count={100} scale={10} size={3} speed={0.5} color="#ffae34" />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,5,0,0)_55%,_#000_100%)]" />
    </div>
  )

  // -------------------- MAIN SECTION --------------------
  return (
    <section id="projects" className="relative py-24 min-h-screen flex items-center px-0 md:px-0">
      {/* Starry animated background */}
      <StarryBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight text-transparent bg-gradient-to-r from-yellow-400 via-red-600 to-stone-50 bg-clip-text drop-shadow-glow animate-glow">
            My Projects
          </h2>
          <motion.div
            className="w-28 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full shadow-lg"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.slice(0, visibleProjects).map((project, idx) => (
            <motion.div
              key={idx}
              variants={item}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className={`
                relative overflow-hidden h-full border-0
                bg-gradient-to-br from-gray-950/90 via-gray-900/90 to-gray-900/70
                shadow-2xl group transition-transform
                hover:scale-[1.025] hover:shadow-red-900/30
                card-blur
                before:pointer-events-none before:absolute before:inset-0
                before:z-10 before:bg-gradient-to-br before:from-red-700/20 before:to-transparent
                before:rounded-[1.2rem] hover:before:opacity-40
              `}>
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden" style={{ minHeight: 192, backgroundColor: "#22221a" }}>
                    <Image
                      src={project.image || placeholder}
                      alt={project.title}
                      fill
                      className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={idx < 2}
                    />
                    {/* Image Overlay actions */}
                    {isClient && (
                      <div
                        className={`
    absolute inset-0 flex flex-row items-end
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300
    bg-gradient-to-t from-black/80 via-black/60 to-transparent
    z-10 p-4 gap-3
  `}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-orange-600/90 text-white border-orange-500 hover:bg-orange-700 hover:border-orange-700 shadow-orange-800"
                          onClick={() => setSelectedProject(project)}
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-gray-900/90 text-white border-orange-400 hover:bg-orange-800 hover:border-orange-700"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                  {/* Info */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className={`text-xl font-extrabold mb-2 tracking-tight transition-colors
    ${hoveredProject === idx ? "text-orange-400" : "text-white"}`}>
                      {project.title}
                    </h3>
                    <p className="text-white/90 mb-3 font-medium flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, ti) => (
                        <Badge
                          key={ti}
                          className="bg-orange-900/30 text-orange-300 border-orange-500/30 text-xs py-1 px-2 shadow-md mr-1 mb-1"
                          variant="outline"
                        >{tag}</Badge>
                      ))}
                    </div>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        {/* Dialog Modal */}
        <Dialog open={!!selectedProject} onOpenChange={open => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-2xl px-0 py-0 overflow-hidden rounded-xl border-2 border-yellow-900 bg-gray-900 drop-shadow-2xl">
            {selectedProject && (
              <>
                <DialogClose className="
                  absolute right-4 top-3 text-white bg-black/50 hover:bg-red-800/80 rounded-full p-2 z-30
                  focus:outline-none focus:ring-2 focus:ring-yellow-600
                ">
                  <X className="h-6 w-6" /><span className="sr-only">Close</span>
                </DialogClose>
                <div className="flex flex-col md:flex-row">
                  {/* Image Section for Desktop */}
                  <div className="hidden md:block relative min-h-[340px] min-w-[220px] flex-shrink-0">
                    <Image
                      src={selectedProject.image || placeholder}
                      alt={selectedProject.title}
                      fill
                      className="object-contain"
                      sizes="330px"
                      priority
                    />
                  </div>
                  {/* Content */}
                  <div className="w-full p-7 pt-12 md:pt-7 overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-extrabold text-orange-400 mb-1">
                        {selectedProject.title}
                      </DialogTitle>

                    </DialogHeader>
                    <div className="space-y-4 mt-2">
                      <div className="text-base text-white">{selectedProject.dialog_description}</div>
                      <div className="flex flex-wrap gap-2 mb-0">
                        {selectedProject.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="bg-orange-900/30 text-orange-400 border-orange-500/30 text-xs py-1 px-3"
                          >{tag}</Badge>
                        ))}
                      </div>

                      <div className="flex gap-3 md:gap-5 pt-4 flex-col md:flex-row">
                        <Button
                          asChild
                          className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold shadow-xl shadow-orange-900/40"
                        >
                          <a
                            href={selectedProject.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ArrowRight className="h-4 w-4" />
                            View Project
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-black/80 border-orange-800 text-orange-200 hover:bg-orange-950"
                          asChild
                        >
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
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
              onClick={() => setVisibleProjects(projects.length)}
              className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-700 text-white font-extrabold tracking-wide px-10 py-3 shadow-lg"
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
            className="bg-orange-900 text-orange-300 border-orange-700 hover:bg-orange-700 hover:border-orange-900 shadow-lg"
            asChild
          >
            <a href="https://github.com/amgaina" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              <span className="font-semibold">View More on GitHub</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
