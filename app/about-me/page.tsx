"use client"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, Lightbulb, Code, GraduationCap, Rocket } from "lucide-react"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
    const journeySteps = [
        {
            id: "early-spark",
            title: "Early Spark in Nepal",
            year: "2010-2015",
            location: "Nepal",
            icon: <Lightbulb className="h-6 w-6" />,
            content:
                'Born and raised in Nepal, I got my first computer in grade 8. At first, I just played games—but soon, I became obsessed with how things worked. Why did the cursor move when I dragged the mouse? How did buttons on the screen "do" things? That curiosity led me to tear apart every piece of software I could find, even if I barely understood it.',
            image: "./abhishek_about1.png",
            imageAlt: "Childhood in Nepal",
        },
        {
            id: "first-code",
            title: "First Lines of Code",
            year: "2019-2021",
            location: "Oxford College of Engineering and Management",
            icon: <Code className="h-6 w-6" />,
            content:
                "At Oxford College of Engineering and Management, I learned QBASIC, HTML, and CSS. I'll never forget the rush I felt when I wrote my first program—a simple addition calculator. It was clunky, but I made it work. That tiny success hooked me. Soon after, I built a full calculator with HTML, CSS, and JavaScript. At the time, it felt like I'd built a spaceship.",
            image: "./abhishek_about2.png",
            imageAlt: "First coding experiences",
        },
        {
            id: "us-leap",
            title: "Leap to the U.S.",
            year: "2022",
            location: "University of Louisiana at Monroe",
            icon: <GraduationCap className="h-6 w-6" />,
            content:
                "Like many students, I dreamed of studying abroad. Thanks to a full scholarship at the University of Louisiana at Monroe, I got my chance. Initially, I sharpened my software engineering and data analysis skills, working on research projects with professors. But my real turning point came in March 2023.",
            image: "./abhishek_about3.png",
            imageAlt: "Moving to the United States",
        },
        {
            id: "ai-awakening",
            title: "The AI Awakening",
            year: "2023",
            location: "The Digital Frontier",
            icon: <Rocket className="h-6 w-6" />,
            content:
                "When OpenAI released GPT-4, something clicked. Seeing AI generate human-like text, solve problems, and even code was mind-blowing. Around the same time, I dove into Tesla's Optimus Robot and Stable Diffusion. The idea that machines could learn, create, and adapt—not just follow rigid code—rewired my ambitions.",
            image: "./abhishek_about4.png",
            imageAlt: "AI and machine learning exploration",
        },
    ]

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-red-900/90">
                    <div className="absolute inset-0 opacity-20">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-red-500"
                                style={{
                                    width: `${8 + (i * 2)}px`,
                                    height: `${8 + (i * 2)}px`,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, 20, 0],
                                    opacity: [0.2, 0.8, 0.2],
                                }}
                                transition={{
                                    duration: 10 + (i * 2),
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/#about"
                            className="inline-flex items-center text-white/80 hover:text-red-400 transition-colors mb-8 group"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Home</span>
                        </Link>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                            My Journey Into Tech & AI
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-300 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        From a curious child in Nepal to an AI enthusiast in the United States — this is my story.
                    </motion.p>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto">
                    {journeySteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 mb-32`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            variants={fadeInUp}
                        >
                            {/* Image */}
                            <div className="md:w-1/2">
                                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-800 group">
                                    <Image
                                        src={step.image}
                                        alt={step.imageAlt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="md:w-1/2 flex flex-col justify-center">
                                <div className="flex items-center mb-6">
                                    <div className="w-14 h-14 rounded-full bg-red-900/20 flex items-center justify-center text-red-500 mr-5 border border-red-500/30">
                                        {step.icon}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                        {step.title}
                                    </h2>
                                </div>

                                <div className="flex items-center text-sm text-gray-400 mb-6 space-x-6">
                                    <div className="flex items-center">
                                        <Calendar className="h-5 w-5 mr-2 text-red-500" />
                                        <span>{step.year}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 mr-2 text-red-500" />
                                        <span>{step.location}</span>
                                    </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed mb-8 text-lg">{step.content}</p>

                                <div className={`h-1 w-24 bg-gradient-to-r from-red-500 to-red-700 rounded-full ${index % 2 === 0 ? "ml-0" : "ml-auto"}`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Current Focus */}
            <section className="bg-gray-900/50 py-24 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                                Where I Am Now
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-xl text-gray-300 mb-10 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Today, I'm all-in on <span className="text-red-400 font-medium">AI and Machine Learning</span> (NLP, Computer Vision, GenAI, AI Agents). Every day feels like
                            that first time I made a cursor move—except now, I'm teaching machines to think.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Button 
                                size="lg" 
                                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg"
                                asChild
                            >
                                <Link href="/#projects">See My Projects</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="container mx-auto px-4 py-24">
                <div className="max-w-4xl mx-auto">
                    <motion.blockquote
                        className="text-2xl md:text-3xl font-medium text-center text-gray-300 italic relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <svg 
                            className="absolute -top-8 -left-8 text-red-500/30 w-16 h-16" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        "The journey has been incredible. I'm excited to see where this path leads next."
                        <svg 
                            className="absolute -bottom-8 -right-8 text-red-500/30 w-16 h-16" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </motion.blockquote>
                </div>
            </section>
        </main>
    )
}