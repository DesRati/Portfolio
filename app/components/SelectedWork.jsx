'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Link from 'next/link';

const ProjectItem = ({ project, index }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const isComingSoon = project.comingSoon;
    const Wrapper = isComingSoon ? 'div' : Link;
    const wrapperProps = isComingSoon
        ? { className: "block relative group cursor-not-allowed" }
        : { href: `/work/${project.slug}`, className: "block relative group" };

    return (
        <Wrapper {...wrapperProps}>
            <motion.div
                className={`relative py-8 md:py-12 border-t border-white/10 overflow-hidden`}
                initial="initial"
                whileHover="hover"
                onMouseMove={handleMouseMove}
            >
                {/* 1. Subtle Ambient Glow (Fixed) */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 ease-out"
                    style={{ background: project.gradient }}
                />

                {/* 2. Mouse Follow Spotlight (Polished) */}
                <motion.div
                    className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                        background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.1),
                            transparent 80%
                        )
                    `
                    }}
                />

                {/* Content Grid */}
                <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center pointer-events-none">

                    {/* Index (Col 1) */}
                    <div className="md:col-span-1 hidden md:block">
                        <span className="font-mono text-neon/50 text-sm group-hover:text-neon transition-colors duration-500">
                            0{index + 1}
                        </span>
                    </div>

                    {/* Title (Col 2-7) */}
                    <div className="md:col-span-6">
                        <motion.h3
                            className="font-display text-4xl md:text-7xl text-ice transition-colors duration-500 leading-none"
                            variants={{
                                initial: { x: 0 },
                                hover: { x: 30 }
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {project.title}
                        </motion.h3>
                    </div>

                    {/* Meta (Col 8-12) */}
                    <div className="md:col-span-5 flex flex-col md:items-end gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                        {/* Tags or Coming Soon Label */}
                        <div className="flex flex-wrap justify-end gap-2">
                            {isComingSoon ? (
                                <span className="font-mono text-xs text-void bg-neon px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                                    Coming Soon
                                </span>
                            ) : (
                                project.tags.map(tag => (
                                    <span key={tag} className="font-mono text-xs text-mist group-hover:text-ice uppercase tracking-widest border border-white/10 group-hover:border-neon/30 px-3 py-1 rounded-full bg-void/50 transition-all">
                                        {tag}
                                    </span>
                                ))
                            )}
                        </div>
                        {/* Description */}
                        <p className="font-sans text-mist group-hover:text-ice max-w-sm text-right hidden md:block transition-colors duration-500">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Arrow Icon Reveal or Lock Icon */}
                <motion.div
                    className="absolute right-12 top-1/2 -translate-y-1/2 text-neon text-4xl overflow-hidden hidden md:block"
                    variants={{
                        initial: { opacity: 0, x: -50 },
                        hover: { opacity: 1, x: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    {isComingSoon ? "" : "→"}
                </motion.div>
            </motion.div>
        </Wrapper>
    );
};

const SelectedWork = () => {
    const projects = [
        {
            title: "Role-Based Access Control (RBAC)",
            slug: "role-basedaccesscontrolrbac",
            description: "Deconstructing rigid permissions into a flexible, scalable system for enterprise security.",
            tags: ["Security", "Enterprise", "Logic"],
            gradient: "linear-gradient(90deg, #FF3366, #FF9933)"
        },
        {
            title: "NAVIGATION UX",
            slug: "navigation-restructure",
            description: "Context-aware information architecture. Elevating organization switching into a primary navigation layer.",
            tags: ["IA", "System Design", "UX"],
            gradient: "linear-gradient(90deg, #00C6FF, #0072FF)"
        },
        {
            title: "SEMANTIC SYSTEM DESIGN",
            slug: "semantic-system-design",
            description: "Establishing the comprehensive token logic and headless structure for a massive open-source ecosystem.",
            tags: ["Tokens", "Design Ops", "Strategy"],
            gradient: "linear-gradient(90deg, #6B73FF, #000DFF)"
        },
        {
            title: "AI REPORTING",
            slug: "ai-assisted-reports",
            description: "Conversational analytics. Translating natural language intent into instant, structured insights.",
            tags: ["AI", "Analytics", "UX"],
            gradient: "linear-gradient(90deg, #00F260, #0575E6)",
            comingSoon: true
        }
    ];

    return (
        <section id="work" className="relative bg-void py-16 md:py-24 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-8 max-w-7xl mb-12 md:mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-mono text-xs text-neon uppercase tracking-widest mb-3 block"
                        >
                            [ 2024 — 2026 ]
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-5xl md:text-[4vw] leading-none flex flex-wrap items-baseline gap-x-4 md:gap-x-6"
                        >
                            <span className="text-ice font-bold tracking-tighter">SELECTED</span>
                            <span className="text-white/20 italic font-light tracking-tighter">WORKS</span>
                        </motion.h2>
                    </div>
                </div>
            </div>

            <div className="w-full relative border-b border-white/10">
                {projects.map((project, i) => (
                    <ProjectItem key={project.slug} index={i} project={project} />
                ))}
            </div>
        </section>
    );
};

export default SelectedWork;
