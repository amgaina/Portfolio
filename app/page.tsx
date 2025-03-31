import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Education from "../components/education"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Research from "../components/research"
import Contact from "../components/contact"
import Blogs from "../components/blogs"
import Papers from "../components/papers"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Research />
      <Papers />
      <Blogs />
      <Contact />
      <footer className="bg-slate-900 text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <p>© 2025 Abhishek Amgain</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/amgaina" className="hover:text-primary transition-colors">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-amgain-04b642265/"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
