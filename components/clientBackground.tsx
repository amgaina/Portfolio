// components/ClientBackgrounds.tsx
"use client";

import dynamic from 'next/dynamic';

const DaySky = dynamic(() => import('./daySky'), { ssr: false });
const NightSky = dynamic(() => import('./nightSky'), { ssr: false });

export default function ClientBackgrounds() {
    return (
        <div className="background-container">
            <DaySky />
            <NightSky />
        </div>
    );
}