'use client';

import { motion } from 'framer-motion';

const EditorialItem = ({ title, meta, date, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-6 border-b border-white/5 hover:border-white/20 transition-colors"
        >
            <div className="flex justify-between items-start mb-2">
                <h4 className="font-display text-2xl md:text-3xl text-ice group-hover:text-neon transition-colors leading-tight max-w-sm">
                    {title}
                </h4>
                <div className="overflow-hidden relative w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="absolute top-0 left-0 -translate-x-full text-neon group-hover:translate-x-0 transition-transform duration-300">
                        ↗
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-mist/40 group-hover:text-mist/60 transition-colors uppercase tracking-widest">
                <span>{date}</span>
                <span className="w-1 h-1 bg-white/10 rounded-full" />
                <span>{meta}</span>
            </div>
        </a>
    );
};

const Writing = () => {
    const blogs = [
        { title: "Affordances in UI Design", meta: "Principals", date: "Nov 2022", href: "https://blog.geekyants.com/affordances-in-ui-design-903492f73ca8" },
        { title: "Get Started with Auto Layout", meta: "Tutorial", date: "Mar 2022", href: "https://ratiagarwal.notion.site/Get-Started-with-Auto-Layout-Figma-66a4ec7895ea494289974a50057b3b19" },
        { title: "Best 7 Figma plugins", meta: "Workflow", date: "Jan 2023", href: "https://geekyants.com/blog/best-7-figma-plugins-to-design-faster" }
    ];

    const talks = [
        { title: "Introduction to Design System", meta: "Connect 2022", date: "Jan 2022", href: "https://www.youtube.com/watch?v=G8GmZkwMpsw" },
        { title: "Affordances and Signifiers", meta: "Design Lecture", date: "Oct 2022", href: "https://www.youtube.com/watch?v=uIJe7xQjA_I" },
        { title: "Break The Bias", meta: "Women's Day", date: "Mar 2022", href: "https://www.youtube.com/live/V8yX30hnY-A" }
    ];

    const sideProjects = [
        { name: "WhatsApp Business", link: "https://www.behance.net/gallery/137315425/WhatsApp-Business" },
        { name: "Smart Calendar", link: "https://www.behance.net/gallery/179894503/Smart-Calendar-Manages-global-schedule-and-travel" },
        { name: "Procreate Art", link: "https://www.instagram.com/p/C1hP8d4NUlP/" }
    ];

    return (
        <section id="writing" className="py-32 bg-charcoal relative">
            <div className="container mx-auto px-8 max-w-7xl">

                {/* Header - Simple & Clean */}
                <motion.div
                    className="mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-6xl text-ice uppercase mb-6">
                        Writing <span className="text-neon">&</span> Speaking
                    </h2>
                    <p className="font-sans text-xl text-mist max-w-2xl leading-relaxed">
                        Thinking out loud about <span className="text-white">Design Systems</span>, <span className="text-white">Craft</span>, and the chaotic process of building product.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-24 lg:gap-32">

                    {/* WRITING COLUMN */}
                    <div>
                        <div className="flex items-center gap-3 mb-10 opacity-40">
                            <div className="w-2 h-2 rounded-full bg-neon" />
                            <h3 className="font-mono text-sm tracking-[0.2em] uppercase text-ice">Published Notes</h3>
                        </div>
                        <div className="flex flex-col">
                            {blogs.map((blog, i) => (
                                <EditorialItem key={i} {...blog} />
                            ))}
                        </div>
                    </div>

                    {/* SPEAKING COLUMN */}
                    <div>
                        <div className="flex items-center gap-3 mb-10 opacity-40">
                            <div className="w-2 h-2 rounded-full bg-blue-400" />
                            <h3 className="font-mono text-sm tracking-[0.2em] uppercase text-ice">On Stage</h3>
                        </div>
                        <div className="flex flex-col">
                            {talks.map((talk, i) => (
                                <EditorialItem key={i} {...talk} />
                            ))}
                        </div>
                    </div>

                </div>

                {/* SIDE QUESTS - Visible Footer Link */}
                <div className="mt-12 pt-8">
                    <div className="flex flex-wrap gap-x-12 gap-y-4 items-center font-mono text-sm uppercase tracking-widest text-mist">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-neon" />
                            <span className="text-neon/50">Side Quests</span>
                        </div>
                        {sideProjects.map((project, i) => (
                            <a
                                key={i}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-neon transition-colors border-b border-transparent hover:border-neon/50 pb-0.5"
                            >
                                {project.name} <span className="text-sm opacity-100 ml-1 inline-block transform translate-y-[-1px]">↗</span>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Writing;
