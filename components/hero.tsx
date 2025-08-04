// File: components/Hero.tsx

"use client";

import { useRef, useState, Suspense, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Code, BrainCircuit, RefreshCw, Combine, Layers, FolderGit2, BarChart3, Sparkles } from "lucide-react";
import Typewriter from 'typewriter-effect';
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from 'three';


const keyStrengths = [
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    text: "Skilled in creating sales and marketing dashboards using data visualization tools like Tableau and PowerBI.",
  },
  {
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    text: "Proficient in Python, TensorFlow, and scikit-learn, with strong data analysis and model development skills.",
  },
  {
    icon: <FolderGit2 className="h-6 w-6 text-primary" />,
    text: "Created a detailed repository on machine learning topics, demonstrating practical application of theory.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    text: "Eager to keep learning and contribute to AI advancements.",
  },
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    text: "Work experience in software engineering with skills in ReactJS, Spring, Bootstrap, AWS, APIs, and SQL.",
  },
  {
    icon: <Combine className="h-6 w-6 text-primary" />,
    text: "Passionate about converging software development and AI/machine learning to drive innovation.",
  },
];

// --- DATA ---
const socialLinks = [
  { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/amgaina" },
  { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/abhishek-amgain-04b642265/" },
  { name: "Email", icon: <Mail size={20} />, url: "mailto:abhi.amgain567@gmail.com" },
];
const roles = ['Data Scientist', 'Full Stack Developer', 'AI Researcher'];

// --- 3D COMPONENTS ---

/**
 * CelestialBody Component
 * This component now dynamically renders either a Sun or a Moon based on the theme.
 */
const CelestialBody = () => {
  const { theme } = useTheme();
  const planetRef = useRef<THREE.Group>(null!);
  const [primaryColor, setPrimaryColor] = useState("#ff5e00");
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  // This effect reads the current theme's primary color from the CSS variables
  // and updates the 3D model's color whenever the theme changes.
  useEffect(() => {
    if (isMounted) {
      const colorValue = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
      const [h, s, l] = colorValue.split(' ').map(parseFloat);
      setPrimaryColor(new THREE.Color(`hsl(${h}, ${s}%, ${l}%)`).getStyle());
    }
  }, [theme, isMounted]);


  useFrame(({ clock, mouse }) => {
    if (!planetRef.current) return;
    // Smoothly rotate the planet based on time and mouse position
    planetRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    const targetRotationX = -mouse.y * 0.2;
    const targetRotationY = -mouse.x * 0.2;
    planetRef.current.rotation.x = THREE.MathUtils.lerp(planetRef.current.rotation.x, targetRotationX, 0.05);
    planetRef.current.rotation.y += THREE.MathUtils.lerp(0, targetRotationY, 0.05);
  });

  if (!isMounted) {
    return null; // Don't render on the server to prevent theme mismatch
  }

  const isDark = theme === 'dark';

  return (
    <Float speed={isDark ? 0.8 : 1.5} rotationIntensity={0.1} floatIntensity={isDark ? 0.8 : 1.2}>
      <group ref={planetRef}>
        {/* Main celestial body */}
        <mesh scale={2.3}>
          <icosahedronGeometry args={[1, 12]} />
          {isDark ? (
            // Moon Material
            <meshStandardMaterial
              color="#888899"
              metalness={0.1}
              roughness={0.8}
            />
          ) : (
            // Sun Material
            <meshStandardMaterial
              color={primaryColor}
              metalness={0.1}
              roughness={0.6}
              emissive={primaryColor}
              emissiveIntensity={3}
            />
          )}
        </mesh>
        {/* Atmosphere / Glow */}
        <mesh scale={2.3}>
          <icosahedronGeometry args={[1.05, 12]} />
          <shaderMaterial
            uniforms={{
              glowColor: { value: isDark ? new THREE.Color("#90a0d0") : new THREE.Color(primaryColor) },
              p: { value: 6.0 },
              c: { value: 0.3 },
            }}
            vertexShader={`
              varying vec3 vNormal;
              void main() {
                vNormal = normalize( normalMatrix * normal );
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
              }`
            }
            fragmentShader={`
              uniform vec3 glowColor;
              uniform float p;
              uniform float c;
              varying vec3 vNormal;
              void main() {
                float intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), p );
                gl_FragColor = vec4( glowColor, 1.0 ) * intensity;
              }`
            }
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
            transparent
          />
        </mesh>
      </group>
    </Float>
  );
};

/**
 * NightSky Component for the dark theme background.
 */
const NightSky = () => (
  <>
    <Stars radius={200} depth={60} count={10000} factor={7} saturation={0} fade speed={1} />
  </>
);


// --- MAIN HERO COMPONENT ---
export default function Hero() {
  const { theme } = useTheme();
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });
  const [isMounted, setIsMounted] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll parallax effect for the 3D model
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent px-4 py-24 sm:py-32"
    >
      {/* --- CONDITIONAL BACKGROUND for DARK MODE --- */}
      {isMounted && theme === 'dark' && (
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <Suspense fallback={null}><NightSky /></Suspense>
          </Canvas>
        </div>
      )}

      {/* --- HERO CONTENT --- */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between h-full gap-10 pt-28 pb-12 lg:pt-0 lg:pb-0">
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          className="w-full max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary backdrop-blur-sm"
          >
            <BrainCircuit className="h-5 w-5" />
            <span className="font-medium">Digital Craftsmanship & Intelligence</span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Abhishek <span className="text-primary">Amgain</span>
          </motion.h1>
          <motion.div variants={itemVariants} className="mt-6 h-12">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Code size={28} className="text-primary" />
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-2xl md:text-3xl font-medium text-muted-foreground",
                  cursorClassName: "text-primary"
                }}
              />
            </div>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            Transforming data into meaningful insights and building intelligent systems that solve real-world problems
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px hsl(var(--primary), 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="group rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Explore Projects
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" />
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
                  whileHover={{ y: -3, color: 'hsl(var(--primary))' }}
                  className="relative text-muted-foreground transition-colors duration-300 p-2"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- RIGHT: INTERACTIVE CELESTIAL BODY --- */}
        {/* BOTTOM: FLIPPABLE CARD */}
        <motion.div
          className="w-full max-w-xl h-[500px] [perspective:1000px] cursor-pointer"
          variants={itemVariants}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
          >
            {/* Front of the card */}
            <div className="absolute inset-0 w-full h-full rounded-2xl border border-border bg-background/50 p-8 shadow-xl backdrop-blur-lg flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
              <div className="p-4 rounded-full bg-primary/10 mb-4">
                <BrainCircuit className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Key Strengths</h2>
              <p className="text-muted-foreground mt-2">Click to reveal my core competencies</p>
              <div className="absolute bottom-6 right-6 flex items-center gap-1 text-xs text-muted-foreground">
                <RefreshCw className="h-3 w-3" />
                <span>Click to flip</span>
              </div>
            </div>

            {/* Back of the card */}
            <div className="absolute inset-0 w-full h-full rounded-2xl border border-border bg-background/50 p-6 sm:p-8 shadow-xl backdrop-blur-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Core Competencies</h3>
              <ul className="space-y-3 sm:space-y-4">
                {keyStrengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">{strength.icon}</div>
                    {/* UPDATED: Responsive text size to prevent overflow */}
                    <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{strength.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
