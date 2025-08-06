// File: components/DaySky.tsx

"use client";

import { useState, useEffect, Suspense } from "react";
import { useTheme } from "next-themes";
import { Canvas } from "@react-three/fiber";
import { Sky, Cloud } from "@react-three/drei";
import * as THREE from 'three';

// --- Accurate Sun Position Logic ---
// Calculates the sun's position based on real-world data for Monroe, LA.
const getSunPosition = () => {
    // Current time provided: August 5th, 11:26 AM
    const hours = 11 + 26 / 60;

    // Based on real data for Monroe, LA in August:
    // Sunrise is approx. 6:21 AM (6.35 hours)
    // Sunset is approx. 8:08 PM (20.13 hours)
    const sunrise = 6.35;
    const sunset = 20.13;
    const dayDuration = sunset - sunrise;

    // Calculate how far through the day we are (0.0 to 1.0)
    const progress = (hours - sunrise) / dayDuration;

    // Convert progress to an angle for the sun's arc (0 to PI)
    const zenithAngle = Math.PI * progress;

    const x = Math.cos(zenithAngle);
    // A slightly lower arc for a more natural feel
    const y = Math.sin(zenithAngle) * 0.8;

    // Position the sun far away in the sky
    return new THREE.Vector3(x * 1000, y * 1000, -800);
};

export default function DaySky() {
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    const [sunPosition, setSunPosition] = useState(new THREE.Vector3());

    useEffect(() => {
        setIsMounted(true);
        setSunPosition(getSunPosition());
    }, []);

    // We only want to render this for the light theme.
    if (!isMounted || theme !== 'light') {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[-10] opacity-0 animate-fade-in"
            style={{
                animationDelay: '0.5s',
                animationDuration: '1.5s',
                pointerEvents: 'none'
            }}>
            <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
                <Suspense fallback={null}>
                    {/* Drei's Sky component with fine-tuned parameters for realism */}
                    <Sky
                        sunPosition={sunPosition}
                        turbidity={10} // Creates a soft, hazy summer sky
                        rayleigh={5}   // Controls the deepness of the blue
                        mieCoefficient={0.004}
                        mieDirectionalG={0.8}
                    />

                    {/* A bright, warm light source that mimics the sun's glow */}
                    <directionalLight position={sunPosition} intensity={1.5} color="#FFDDAA" />
                    <ambientLight intensity={0.4} />
                </Suspense>
            </Canvas>
        </div>
    );
}
