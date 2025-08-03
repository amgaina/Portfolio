"use client";

import { useRef, useState, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Code, BrainCircuit, GithubIcon } from "lucide-react";
import Typewriter from 'typewriter-effect';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Stars, Sparkles, Points, PointMaterial } from "@react-three/drei";
import { TextureLoader } from 'three';
import * as THREE from 'three';

// --- Social Links & Roles Data ---
const socialLinks = [
  { name: "GitHub", icon: <GithubIcon size={20} />, url: "https://github.com/amgaina" },
  { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/abhishek-amgain-04b642265/" },
  { name: "Email", icon: <Mail size={20} />, url: "mailto:abhi.amgain567@gmail.com" },
];

const roles = ['Data Scientist', 'Full Stack Developer', 'AI Researcher'];


// --- Interactive Celestial Planet Component ---
const CelestialBody = () => {
  const [colorMap] = useLoader(TextureLoader, ['/lava_texture.jpg']);
  const planetRef = useRef<THREE.Group>(null!);

  useFrame(({ clock, mouse }) => {
    // Base rotation
    planetRef.current.rotation.y = clock.getElapsedTime() * 0.05;

    // Mouse-based rotation (lerped for smoothness)
    const targetRotationX = -mouse.y * 0.2;
    const targetRotationY = -mouse.x * 0.2;
    planetRef.current.rotation.x = THREE.MathUtils.lerp(planetRef.current.rotation.x, targetRotationX, 0.05);
    planetRef.current.rotation.y += THREE.MathUtils.lerp(0, targetRotationY, 0.05);
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={1.1}>
      <group ref={planetRef}>
        {/* Main planet body */}
        <mesh scale={2.2}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            map={colorMap}
            metalness={0.1}
            roughness={0.7}
            emissiveMap={colorMap}
            emissive={new THREE.Color("#ff5e00")}
            emissiveIntensity={1.5}
          />
        </mesh>
        {/* Atmosphere glow effect */}
        <mesh scale={2.2}>
          <sphereGeometry args={[1.04, 64, 64]} />
          <shaderMaterial
            uniforms={{
              "c": { value: 0.1 },
              "p": { value: 5.0 },
              glowColor: { value: new THREE.Color("#ff8c00") },
            }}
            vertexShader={`
              varying vec3 vNormal;
              void main() {
                vNormal = normalize( normalMatrix * normal );
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
              }
            `}
            fragmentShader={`
              uniform vec3 glowColor;
              uniform float p;
              uniform float c;
              varying vec3 vNormal;
              void main() {
                float intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), p );
                gl_FragColor = vec4( glowColor, 1.0 ) * intensity;
              }
            `}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
            transparent
          />
        </mesh>
      </group>
    </Float>
  );
};

// --- Planetary Ring Component (NO MAATH DEPENDENCY) ---
const OrbitalRing = () => {
  const ref = useRef<THREE.Points>(null!);

  // Generate points in a torus shape using vanilla JS
  const [points] = useState(() => {
    const pointsArray = [];
    const innerRadius = 3.5;
    const outerRadius = 4;
    const thickness = 0.1;
    const count = 5000;

    for (let i = 0; i < count; i++) {
      // Random angle
      const theta = Math.random() * 2 * Math.PI;
      // Random radius between inner and outer radius
      const r = innerRadius + Math.random() * (outerRadius - innerRadius);
      // Position on the XY plane
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      // Random height within the thickness
      const z = (Math.random() - 0.5) * thickness;

      pointsArray.push(x, y, z);
    }
    return new Float32Array(pointsArray);
  });

  useFrame((state, delta) => {
    ref.current.rotation.z -= delta * 0.1;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#FFA500"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};


// --- Main Hero Component ---
export default function Hero() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden"
    >
      {/* --- PERFECT NIGHT SKY BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <Stars radius={200} depth={60} count={12000} factor={7} saturation={0} fade speed={1} />
            <Sparkles count={100} scale={10} size={3} speed={0.5} color="#ffae34" />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,5,0,0)_60%,_#000000_100%)]" />
      </div>

      {/* --- HERO CONTENT --- */}
      <div className="container mx-auto px-5 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between h-full gap-10 pt-28 pb-12 lg:pt-0 lg:pb-0">
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          className="w-full max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-black/40 px-4 py-2 text-sm text-orange-200 backdrop-blur-sm"
          >
            <BrainCircuit className="h-5 w-5 text-orange-300" />
            <span className="font-medium">Digital Craftsmanship & Intelligence</span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-white">Abhishek</span>
            <br />
            {/* --- Shimmer Effect --- */}
            <span className="relative inline-block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Amgain
              <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent_20%,rgba(255,255,255,0.4)_50%,transparent_80%)] bg-[200%_100%] bg-clip-text animate-shimmer" />
            </span>
          </motion.h1>
          <motion.div variants={itemVariants} className="mt-7 h-12">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Code size={28} className="text-orange-400" />
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-2xl md:text-3xl font-medium text-gray-200",
                  cursorClassName: "text-orange-400"
                }}
              />
            </div>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-lg text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            Architecting intelligent digital universes where complex code and novel logic converge.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row items-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px rgba(255, 140, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="group rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300"
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
                  whileHover={{ y: -4 }}
                  className="relative group p-2"
                >
                  {/* --- Hover Glow Effect --- */}
                  <span className="absolute inset-0 rounded-full bg-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg" />
                  <span className="relative text-gray-400 group-hover:text-orange-300 transition-colors duration-300">
                    {link.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- RIGHT: INTERACTIVE CELESTIAL BODY --- */}
        <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg h-[320px] sm:h-[360px] lg:h-[550px]">
          <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.4} color="#ffae34" />
              <pointLight position={[10, 5, 10]} intensity={2} color="#ff8c00" />
              <group rotation={[0, 0, -0.2]}> {/* Tilt the whole system */}
                <CelestialBody />
                <OrbitalRing />
              </group>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}