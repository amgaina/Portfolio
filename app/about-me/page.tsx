"use client"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, Lightbulb, Code, GraduationCap, Rocket } from "lucide-react"
import { Button } from "../../components/ui/button" // Adjust path if needed
import Link from "next/link"
import Image from "next/image"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Stars, Sparkles } from "@react-three/drei"

// Data for the journey timeline
const journeySteps = [
    {
        id: "early-spark",
        title: "Early Spark in Nepal",
        year: "2010-2015",
        location: "Nepal",
        icon: <Lightbulb className="h-8 w-8" />,
        content: 'Born and raised in Nepal, I got my first computer in grade 8. At first, I just played games—but soon, I became obsessed with how things worked. That curiosity led me to tear apart every piece of software I could find, even if I barely understood it.',
        image: "/abhishek_about1.png", // Use root path for public folder
        imageAlt: "Childhood in Nepal",
    },
    {
        id: "first-code",
        title: "First Lines of Code",
        year: "2019-2021",
        location: "Oxford College",
        icon: <Code className="h-8 w-8" />,
        content: "At Oxford College, I learned QBASIC, HTML, and CSS. I'll never forget the rush I felt when I wrote my first program—a simple addition calculator. That tiny success hooked me. Soon after, I built a full calculator with JS. At the time, it felt like I'd built a spaceship.",
        image: "/abhishek_about2.png",
        imageAlt: "First coding experiences",
    },
    {
        id: "us-leap",
        title: "Leap to the U.S.",
        year: "2022",
        location: "ULM, Monroe, LA",
        icon: <GraduationCap className="h-8 w-8" />,
        content: "Like many students, I dreamed of studying abroad. Thanks to a full scholarship at the University of Louisiana at Monroe, I got my chance. Initially, I sharpened my software engineering skills, but my real turning point came in March 2023.",
        image: "/abhishek_about3.png",
        imageAlt: "Moving to the United States",
    },
    {
        id: "ai-awakening",
        title: "The AI Awakening",
        year: "2023-Present",
        location: "The Digital Frontier",
        icon: <Rocket className="h-8 w-8" />,
        content: "When OpenAI released GPT-4, something clicked. Seeing AI generate human-like text, solve problems, and even code was mind-blowing. The idea that machines could learn and adapt—not just follow rigid code—rewired my ambitions toward AI.",
        image: "/abhishek_about4.png",
        imageAlt: "AI and machine learning exploration",
    },
]

// Main page component
export default function AboutPage() {
    return (
        <main className="bg-black text-white">
            {/* Persistent Starfield Background */}
            <div className="fixed inset-0 z-0 opacity-70">
                <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                    <Suspense fallback={null}>
                        <Stars radius={150} depth={50} count={10000} factor={6} saturation={0} fade speed={1} />
                        <Sparkles count={80} scale={8} size={2} speed={0.4} color="#ffae34" />
                    </Suspense>
                </Canvas>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="container mx-auto px-4 pt-28 pb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors mb-8 group"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Home</span>
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                                My Journey Into Tech & AI
                            </span>
                        </h1>
                        <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                            From a curious child in Nepal to an AI enthusiast in the United States — this is my story, chapter by chapter.
                        </p>
                    </motion.div>
                </section>

                {/* Journey Timeline Section */}
                <section className="container mx-auto px-4 py-16">
                    <div className="relative max-w-5xl mx-auto">
                        {/* The vertical timeline line */}
                        <motion.div
                            className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-orange-500/50 to-transparent"
                            initial={{ scaleY: 0, originY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true, margin: "-200px" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />

                        {journeySteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="relative flex items-start gap-6 md:gap-12 mb-16"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-150px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {/* Timeline Node (Icon) */}
                                <div className={`sticky top-28 z-10 flex-shrink-0 md:absolute md:top-0 ${index % 2 === 0 ? 'md:left-1/2 md:-translate-x-1/2' : 'md:left-1/2 md:-translate-x-1/2'}`}>
                                    <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-orange-500/30 bg-black shadow-lg shadow-orange-500/10">
                                        <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-orange-500/20 to-transparent text-orange-400">
                                            {step.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[calc(50%-3rem)] rounded-xl border border-orange-500/10 bg-neutral-900/40 p-6 backdrop-blur-md ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                                    {/* Image Frame */}
                                    <div className="group relative mb-6 h-64 overflow-hidden rounded-lg border border-orange-500/20">
                                        <Image
                                            src={step.image}
                                            alt={step.imageAlt}
                                            fill
                                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>
                                    {/* Text Content */}
                                    <h3 className="mb-2 text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                                        {step.title}
                                    </h3>
                                    <div className="mb-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-400">
                                        <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-orange-500" /><span>{step.year}</span></div>
                                        <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange-500" /><span>{step.location}</span></div>
                                    </div>
                                    <p className="text-neutral-300 leading-relaxed">{step.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Current Focus Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 max-w-3xl text-center">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Where I Am Now
                        </motion.h2>
                        <motion.p
                            className="text-xl text-neutral-300 mb-10 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Today, I'm all-in on <span className="text-orange-300 font-medium">AI and Machine Learning</span>. Every day feels like
                            that first time I made a cursor move—except now, I'm teaching machines to think, see, and create.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Button
                                size="lg"
                                className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:scale-105 hover:shadow-orange-500/30"
                                asChild
                            >
                                <Link href="/#projects">See My AI Projects</Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </div>
        </main>
    )
}