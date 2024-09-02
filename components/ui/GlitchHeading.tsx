"use client"

import { useEffect, useState } from 'react';
import { Typography } from './typography';


export default function GlitchHeading() {

    const [glitchText, setGlitchText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitchText(Math.random() < 0.1 ? 'glitch' : '');
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return <Typography variant="h1" className={`mb-8 text-red-500 border-b border-red-500 pb-2 text-4xl ${glitchText}`} data-text="Startup Security Handbook">
        Startup Security Handbook
    </Typography>
}