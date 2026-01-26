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

    return (
        <Link href={`/work/${project.slug}`} className="block relative group">
            <motion.div
                className="relative py-16 border-t border-white/10 overflow-hidden"
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

                    {/* Index (Col 1) - Fades out slightly on hover */}
                    <div className="md:col-span-1 hidden md:block">
                        <span className="font-mono text-neon/50 text-sm group-hover:text-neon transition-colors duration-500">
                            0{index + 1}
                        </span>
                    </div>

                    {/* Title (Col 2-7) - Slides Right */}
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

                    {/* Meta (Col 8-12) - Fades In */}
                    <div className="md:col-span-5 flex flex-col md:items-end gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                        {/* Tags */}
                        <div className="flex flex-wrap justify-end gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="font-mono text-xs text-mist group-hover:text-ice uppercase tracking-widest border border-white/10 group-hover:border-neon/30 px-3 py-1 rounded-full bg-void/50 transition-all">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {/* Description */}
                        <p className="font-sans text-mist group-hover:text-ice max-w-sm text-right hidden md:block transition-colors duration-500">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Arrow Icon Reveal (Absolute Right) */}
                <motion.div
                    className="absolute right-12 top-1/2 -translate-y-1/2 text-neon text-4xl overflow-hidden hidden md:block"
                    variants={{
                        initial: { opacity: 0, x: -50 },
                        hover: { opacity: 1, x: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    →
                </motion.div>
            </motion.div>
        </Link>
    );
};

const SelectedWork = () => {
    const projects = [
        {
            title: "RBAC & ROLES",
            slug: "rbac-role-management",
            description: "Deconstructing enterprise security into flexible building blocks.",
            tags: ["Security", "Enterprise", "Logic"],
            gradient: "linear-gradient(90deg, #FF3366, #FF9933)"
        },
        {
            title: "SIDE NAV",
            slug: "navigation-restructure",
            description: "Information architecture overhaul. Simplifying deep hierarchies.",
            tags: ["IA", "System Design"],
            gradient: "linear-gradient(90deg, #00C6FF, #0072FF)"
        },
        {
            title: "AI REPORTS",
            slug: "ai-assisted-reports",
            description: "Conversational Analytics. From natural language to structured dashboards.",
            tags: ["AI", "Analytics", "UX"],
            gradient: "linear-gradient(90deg, #00F260, #0575E6)"
        },
        {
            title: "NATIVEBASE & GLUESTACK",
            slug: "nativebase-gluestack",
            description: "The Evolution of UI. From Runtime Styling to High Performance Headless.",
            tags: ["Open Source", "Design Systems"],
            gradient: "linear-gradient(90deg, #6B73FF, #000DFF)"
        }
    ];

    return (
        <section id="work" className="relative bg-void py-32">
            <div className="container mx-auto px-8 mb-12 border-b border-white/10 pb-4 flex justify-between items-end">
                <h2 className="font-mono text-xs text-neon uppercase tracking-widest">Selected Work (2025-2026)</h2>
                <div className="text-xs font-mono text-mist hidden md:block">SCROLL TO EXPLORE</div>
            </div>

            <div className="w-full">
                {projects.map((project, i) => (
                    <ProjectItem key={i} index={i} project={project} />
                ))}
                <div className="border-t border-white/10" />
            </div>
        </section>
    );
};

export default SelectedWork;
