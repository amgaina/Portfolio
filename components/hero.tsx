"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative bg-white text-slate-900 px-4 py-16 sm:py-0"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      ></div>

      <div className="container mx-auto z-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image - Moved to top on mobile */}
          <div className="order-1 flex justify-center md:order-2 md:justify-end mb-6 md:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-40 h-40 xs:w-48 xs:h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-6 sm:border-8 border-white shadow-xl bg-white">
                <img
                  src="/abhishek_home.png"
                  alt="Abhishek Amgain"
                  className="w-full h-full object-contain object-center"
                  style={{
                    imageRendering: "crisp-edges",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-primary text-white text-xs sm:text-sm font-medium py-1.5 px-3 sm:py-2 sm:px-4 rounded-full shadow-lg">
                Enjoy Statistics
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 tracking-tight">
                Abhishek Amgain
              </h1>

              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl text-primary font-medium mb-4 sm:mb-6">
                AI and Machine Learning Enthusiast
              </h2>

              <p className="text-sm xs:text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
                Exploring the frontiers of artificial intelligence and transforming data into meaningful insights
              </p>

              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Button
                  size="default"
                  className="w-full xs:w-auto bg-slate-900 hover:bg-slate-800 text-white text-sm sm:text-base"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                </Button>

                <Button
                  variant="outline"
                  size="default"
                  className="w-full xs:w-auto border-slate-300 text-slate-900 hover:bg-slate-100 text-sm sm:text-base"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-400 hover:text-primary hover:bg-slate-100 rounded-full"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to About section"
        >
          <ArrowDown size={20} />
        </Button>
      </div>
    </section>
  )
}

