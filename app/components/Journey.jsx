'use client';

import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, company, description, index }) => {
    const isNow = year === "NOW";
    // Colors based on polished screenshot
    const yearColor = isNow ? "text-[#15803d]" : "text-neon"; // Dark Green for NOW, Neon for others
    const dotColor = isNow ? "bg-[#15803d]" : "bg-neon";
    const titleColor = "text-white"; // White title for high contrast

    return (
        <motion.div
            className="relative grid md:grid-cols-[120px_1fr] gap-8 items-start group mb-16 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            {/* Year */}
            <div className="md:col-span-1 md:text-right pt-2">
                <span className={`font-display font-bold ${yearColor} text-5xl opacity-80 transition-opacity`}>
                    {year}
                </span>
            </div>

            {/* Content */}
            <div className="md:col-span-1 pl-10 border-l border-white/5 relative py-2">
                {/* Timeline Dot */}
                <div className={`absolute top-[1.2rem] -left-[9px] w-[18px] h-[18px] rounded-full bg-[#050505] border-[3px] border-[#0A0A0B] flex items-center justify-center p-0.5 z-10 box-content`}>
                    <div className={`w-full h-full rounded-full ${dotColor}`} />
                </div>

                <h3 className={`font-sans text-2xl font-medium ${titleColor} mb-1`}>{title}</h3>
                <div className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">{company}</div>
                <p className="font-sans text-gray-400 text-lg max-w-2xl leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

const Journey = () => {
    // Content adapted from "Commerce Grad to Systems Thinker" narrative
    const steps = [
        {
            year: "NOW",
            title: "Product Designer",
            company: "Spotnana",
            description: "Designing AI assisted traveler-facing experiences and booking workflows. Leading cross-functional design sprints to rapidly prototype features"
        },
        {
            year: "2023",
            title: "Complex Workflows",
            company: "Spotnana",
            description: "Travel tech. RBAC systems. AI integrations. The problems got harder. The solutions got simpler."
        },
        {
            year: "2022",
            title: "Systems at Scale",
            company: "GeekyAnts & NativeBase",
            description: "Built a component library now used by 91K+ developers weekly. Learned that constraints breed creativity. Shipped 'Startup+' and Gluestack Market ecosystem."
        },
        {
            year: "2021",
            title: "First Steps",
            company: "Full Creative",
            description: "Internship. Redesigned landing pages. Made mistakes. Learned that good design is invisible."
        },
        {
            year: "2021",
            title: "The Spark",
            company: "Commerce Grad",
            description: "A commerce degree, zero design background. But I had Figma, YouTube, and an obsession with 'why does this feel right?'"
        }
    ];

    return (
        <section id="about" className="py-32 bg-charcoal relative">
            <div className="container mx-auto px-8 max-w-7xl">
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-6xl text-ice mb-6 uppercase">
                        THE <span className="text-neon">JOURNEY</span>
                    </h2>
                    <h3 className="font-sans text-xl text-mist mb-6 max-w-xl">From <span className="text-ice">Commerce Grad</span> to <span className="text-neon">Systems Thinker</span></h3>
                    <div className="h-[2px] w-24 bg-gradient-to-r from-neon to-transparent opacity-50" />
                </motion.div>

                <div>
                    {steps.map((step, index) => (
                        <TimelineItem key={index} {...step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
