'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax & Opacity
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Mouse Move Interaction
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for mouse movement
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        // Calculate distinct movement for layers
        const x = (clientX / innerWidth - 0.5) * 50;
        const y = (clientY / innerHeight - 0.5) * 50;

        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section
            ref={containerRef}
            className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-void"
            onMouseMove={handleMouseMove}
        >
            {/* Background Grid/Noise handled by globals */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* MAIN TYPOGRAPHY LAYER */}
            <motion.div
                className="relative z-10 flex flex-col items-center mix-blend-difference"
                style={{ y: y1, opacity }}
            >
                <motion.h1
                    className="font-display font-bold text-[15vw] leading-[0.8] tracking-tighter text-ice whitespace-nowrap"
                    style={{ x: springX }}
                >
                    RATI
                </motion.h1>
                <motion.h1
                    className="font-display font-bold text-[15vw] leading-[0.8] tracking-tighter text-transparent text-stroke hover:text-neon hover:text-stroke-neon transition-colors duration-500 whitespace-nowrap cursor-none"
                    style={{ x: useSpring(mouseX, { stiffness: 50, damping: 20 }) }} // Slower layer
                >
                    AGARWAL
                </motion.h1>
            </motion.div>

            {/* SUBTEXT LAYER */}
            <motion.div
                className="absolute bottom-20 left-10 md:left-20 z-20"
                style={{ y: y2 }}
            >
                <div className="flex flex-col gap-2">
                    <span className="font-sans text-brand-neon text-sm tracking-[0.2em] uppercase text-neon">
                        [ 2026 Archive ]
                    </span>
                    <p className="font-display text-4xl md:text-6xl text-ice max-w-2xl leading-none">
                        SIMPLIFYING <br />
                        <span className="text-mist italic">COMPLEXITY</span>
                    </p>
                </div>
            </motion.div>

            {/* SCROLL INDICATOR */}
            <motion.div
                className="absolute bottom-10 right-10 flex flex-col items-center gap-2 mix-blend-difference"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="w-[1px] h-20 bg-neon animate-pulse" />
                <span className="font-mono text-xs text-neon vert-rl writing-mode-vertical-rl transform rotate-180">
                    SCROLL TO EXPLORE
                </span>
            </motion.div>
        </section>
    );
};

export default Hero;
