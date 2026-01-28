'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import Footer from '../../components/Footer';
import { projects } from '../../data/projects';
import { SectionRenderer } from '../../components/work-study/SectionRenderer';
import { FooterNav } from '../../components/work-study/WorkComponents';

export default function ProjectPage() {
    const { slug } = useParams();
    const project = projects[slug];

    if (!project) {
        notFound();
    }

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    const { nextSlug, nextProject } = getNextProject(slug);
    const { prevSlug } = getPreviousProject(slug);

    return (
        <main className="bg-void min-h-screen">
            {/* Custom Cursor / Noise / Overlays (if any) */}
            <div className="fixed inset-0 pointer-events-none z-[100] opacity-20 grain-overlay" />

            {/* Top Navigation */}
            <nav className="fixed top-0 left-0 right-0 p-6 md:p-8 z-50 flex justify-between items-center mix-blend-difference pointer-events-none">
                <Link href="/" className="group relative z-10 block pointer-events-auto">
                    <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                        <div className="absolute inset-0 bg-neon/20 blur-md rounded-full scale-0 group-hover:scale-150 transition-transform duration-300" />
                        <Image
                            src="/logo.png"
                            alt="Rati Agarwal"
                            fill
                            className="object-contain relative z-10"
                        />
                    </div>
                </Link>

                <Link href="/#work" className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest hover:text-neon transition-colors pointer-events-auto">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">Back to Work</span>
                    <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-neon">✕</div>
                </Link>
            </nav>

            <div ref={containerRef} className="relative z-10">

                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex flex-col justify-end pb-32 px-8 pt-40">
                    <motion.div style={{ y: yHero, opacity: opacityHero }} className="container mx-auto">
                        <div className="flex flex-col gap-6">
                            {/* Tags/Links Row */}
                            <div className="flex flex-wrap items-center justify-between mb-4">
                                <div className="flex items-center gap-6">
                                    <div className="font-mono text-neon tracking-widest uppercase text-sm">
                                        0{Object.keys(projects).indexOf(slug) + 1} / {project.hero.subtitle.split(' ')[0]}
                                    </div>
                                    <div className="h-px w-20 bg-white/20" />
                                    {project.hero.links && project.hero.links.map((link, i) => (
                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-mist hover:text-ice transition-colors uppercase border-b border-transparent hover:border-neon">
                                            {link.label} ↗
                                        </a>
                                    ))}
                                </div>

                                {/* Header Navigation */}
                                <div className="flex items-center gap-4">
                                    <Link href={`/work/${prevSlug}`} className="group flex items-center gap-2 font-mono text-xs text-mist hover:text-neon transition-colors">
                                        <span className="group-hover:-translate-x-1 transition-transform">←</span> PREV
                                    </Link>
                                    <div className="w-px h-3 bg-white/20" />
                                    <Link href={`/work/${nextSlug}`} className="group flex items-center gap-2 font-mono text-xs text-mist hover:text-neon transition-colors">
                                        NEXT <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Massive Title */}
                            <h1 className="font-display font-bold text-[10vw] leading-[0.85] tracking-tighter text-ice mix-blend-overlay">
                                {project.hero.title}
                            </h1>

                            <p className="font-sans text-2xl md:text-3xl text-mist max-w-3xl mt-8 font-light leading-relaxed">
                                {project.hero.subtitle}
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* MAIN CONTENT GRID */}
                <section className="bg-charcoal border-t border-white/10 relative">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12">

                            {/* Sticky Sidebar (Meta) */}
                            <div className="lg:col-span-3 border-r border-white/10 p-8 lg:p-12 lg:min-h-screen">
                                <div className="lg:sticky lg:top-32 flex flex-col gap-12">
                                    {project.meta.map((item) => (
                                        <div key={item.label}>
                                            <div className="text-xs font-mono text-mist mb-2 uppercase tracking-widest">{item.label}</div>
                                            <div className="font-sans text-lg text-ice">{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="lg:col-span-9 p-8 lg:p-16">
                                {project.sections.map((section, i) => (
                                    <div key={i} className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${section.wrapperClass || 'mb-12'}`}>
                                        {/* Section Label (Left) */}
                                        {!section.hideColumnTitle && (
                                            <div className="md:col-span-3">
                                                {section.title && (
                                                    <span className="font-mono text-xs text-neon uppercase tracking-widest sticky top-32">
                                                        {section.title}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                        {/* Section Body (Right) */}
                                        <div className={section.hideColumnTitle ? "md:col-span-12" : "md:col-span-9"}>
                                            <SectionRenderer section={section} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                {/* NEXT PROJECT FOOTER */}
                <FooterNav nextProjectSlug={nextSlug} nextProject={nextProject} />

                <Footer />
            </div>
        </main>
    );
}

function getNextProject(currentSlug) {
    const slugs = Object.keys(projects);
    const nextIndex = (slugs.indexOf(currentSlug) + 1) % slugs.length;
    const nextSlug = slugs[nextIndex];
    return { nextSlug, nextProject: projects[nextSlug] };
}

function getPreviousProject(currentSlug) {
    const slugs = Object.keys(projects);
    const prevIndex = (slugs.indexOf(currentSlug) - 1 + slugs.length) % slugs.length;
    const prevSlug = slugs[prevIndex];
    return { prevSlug, prevProject: projects[prevSlug] };
}
