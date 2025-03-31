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
        <main className="min-h-screen bg-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-primary/90">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                            backgroundSize: "60px 60px",
                        }}
                    ></div>
                </div>

                <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                    <Link
                        href="/#about"
                        className="inline-flex items-center text-white mb-6 hover:text-primary-foreground transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        <span>Back to Home</span>
                    </Link>

                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        My Journey Into Tech & AI
                    </motion.h1>

                    <motion.p
                        className="text-xl text-white/90 max-w-2xl"
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
                            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 mb-24`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            variants={fadeInUp}
                        >
                            {/* Image */}
                            <div className="md:w-2/5">
                                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={step.image}
                                        alt={step.imageAlt}
                                        fill
                                        className="w-full h-full object-fill"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="md:w-3/5">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                                        {step.icon}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold">{step.title}</h2>
                                </div>

                                <div className="flex items-center text-sm text-slate-600 mb-6 space-x-4">
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        <span>{step.year}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        <span>{step.location}</span>
                                    </div>
                                </div>

                                <p className="text-slate-700 leading-relaxed mb-6">{step.content}</p>

                                <div className={`h-1 w-20 bg-primary rounded-full ${index % 2 === 0 ? "ml-0" : "ml-auto"}`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Current Focus */}
            <section className="bg-slate-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Where I Am Now
                        </motion.h2>

                        <motion.p
                            className="text-xl text-slate-700 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Today, I'm all-in on AI and Machine Learning(NLP, Computer Vision, GenAI, AI Agents) Every day feels like
                            that first time I made a cursor move—except now, I'm teaching machines to think.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                                <Link href="/#projects">See My Projects</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <motion.blockquote
                        className="text-2xl md:text-3xl font-medium text-center text-slate-700 italic"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        "The journey has been incredible. I'm excited to
                        see where this path leads next."
                    </motion.blockquote>
                </div>
            </section>
        </main>
    )
}