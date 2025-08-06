// File: components/NightSky.tsx

"use client";

import { useState, useEffect, Suspense, useRef, useMemo } from "react";
import { useTheme } from "next-themes";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, PointMaterial, Points } from "@react-three/drei";
import * as THREE from 'three';

// --- Realistic Shooting Star Component ---
const RealisticShootingStar = () => {
    const ref = useRef<THREE.Mesh>(null!);
    const [position, setPosition] = useState([0, 0, 0]);
    const [speed, setSpeed] = useState(0);
    const [opacity, setOpacity] = useState(0);

    const reset = () => {
        const x = (Math.random() - 0.5) * 300;
        const y = Math.random() * 100 + 50;
        const z = -200 - Math.random() * 200;
        setPosition([x, y, z]);
        setSpeed(Math.random() * 150 + 100);
        setOpacity(1);
    };

    useEffect(() => {
        const timeoutId = setTimeout(reset, Math.random() * 5000);
        return () => clearTimeout(timeoutId);
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.position.z += speed * delta;
            ref.current.position.x -= (speed / 2) * delta;

            const currentOpacity = (ref.current.material as THREE.MeshBasicMaterial).opacity;
            (ref.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, currentOpacity - delta * 0.5);

            if (ref.current.position.z > 200 || (ref.current.material as THREE.MeshBasicMaterial).opacity <= 0) {
                (ref.current.material as THREE.MeshBasicMaterial).opacity = 0;
                setTimeout(reset, 2000 + Math.random() * 5000);
            }
        }
    });

    return (
        <mesh ref={ref} position={new THREE.Vector3(...position)}>
            <boxGeometry args={[80, 0.1, 0.1]} />
            <meshBasicMaterial color="#FFA500" transparent opacity={opacity} blending={THREE.AdditiveBlending} />
        </mesh>
    );
};

// --- Enhanced Nebula Component ---
const EnhancedNebula = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        if (meshRef.current) {
            const material = meshRef.current.material as THREE.ShaderMaterial;
            material.uniforms.uTime.value = state.clock.getElapsedTime();
        }
    });
    return (
        <mesh ref={meshRef} position={[0, 50, -500]}>
            <planeGeometry args={[1200, 400, 1, 1]} />
            <shaderMaterial
                uniforms={{
                    uTime: { value: 0.0 },
                    uColor1: { value: new THREE.Color('#2e003e') },
                    uColor2: { value: new THREE.Color('#00203e') },
                }}
                vertexShader={`
                    varying vec2 vUv;
                    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
                `}
                fragmentShader={`
                    varying vec2 vUv;
                    uniform float uTime;
                    uniform vec3 uColor1;
                    uniform vec3 uColor2;
                    float noise(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123); }
                    float fbm(vec2 st) {
                        float value = 0.0;
                        float amplitude = .5;
                        for (int i = 0; i < 4; i++) {
                            value += amplitude * noise(st);
                            st *= 2.;
                            amplitude *= .5;
                        }
                        return value;
                    }
                    void main() {
                        vec2 st = vUv * 3.0;
                        st.x += uTime * 0.02;
                        float density = fbm(st);
                        vec3 color = mix(uColor1, uColor2, vUv.x);
                        gl_FragColor = vec4(color, density * 0.2);
                    }
                `}
                transparent depthWrite={false} blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
};

// --- Twinkling Stars Component ---
const TwinklingStars = () => {
    const ref = useRef<THREE.Points>(null!);
    const count = 1500;
    const particles = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const radius = 50 + Math.random() * 250;
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);
            p[i3] = radius * Math.sin(theta) * Math.cos(phi);
            p[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
            p[i3 + 2] = radius * Math.cos(theta);
        }
        return p;
    }, []);
    useFrame((state) => {
        if (ref.current) {
            const material = ref.current.material as THREE.PointsMaterial;
            material.opacity = 0.5 + Math.sin(state.clock.getElapsedTime() * 2 + ref.current.uuid.length) * 0.5;
        }
    });
    return (
        <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
            <PointMaterial transparent color="#ffffff" size={0.5} sizeAttenuation={true} depthWrite={false} />
        </Points>
    );
};

// --- Moon Component ---
const Moon = () => {
    return (
        <group position={[-150, 100, -400]}>
            <mesh>
                <sphereGeometry args={[15, 32, 32]} />
                <meshStandardMaterial color="#b0c4de" emissive="#87ceeb" emissiveIntensity={0.1} roughness={0.8} />
            </mesh>
            <pointLight color="#87ceeb" intensity={5000} distance={100} />
        </group>
    );
};

export default function NightSky() {
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted || theme !== 'dark') {
        return null;
    }

    return (
    
        <div className="fixed inset-0 opacity-0 animate-fade-in"
            style={{
                animationDelay: '1s',
                animationDuration: '2s',
                pointerEvents: 'none'
            }}>
            <Canvas
                camera={{ position: [0, 0, 1], fov: 60 }}
                gl={{ antialias: false }}
                dpr={[1, 1.5]}
            >
                <color attach="background" args={['#000000']} />
                <ambientLight intensity={0.05} />
                <Suspense fallback={null}>
                    <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
                    <Stars radius={200} depth={60} count={4000} factor={6} saturation={0} fade speed={0.7} />
                    <TwinklingStars />
                    <EnhancedNebula />
                </Suspense>
            </Canvas>
        </div>
    );
}
