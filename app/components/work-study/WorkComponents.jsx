'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export const FramedMedia = ({ src, caption }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {mounted && isFullScreen && createPortal(
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsFullScreen(false)} className="fixed inset-0 z-[9999] bg-[#050505]/95 backdrop-blur-md flex items-center justify-center force-cursor-auto p-8">
                    {/* Close Button */}
                    <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors flex items-center gap-3 group force-cursor-pointer">
                        <span className="text-xs font-mono tracking-widest group-hover:text-neon">CLOSE</span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-neon group-hover:bg-neon/10">✕</div>
                    </button>
                    <motion.img
                        src={src}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                    />
                    {caption && (
                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <p className="text-sm font-mono text-white/70 bg-black/50 inline-block px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">{caption}</p>
                        </div>
                    )}
                </motion.div>,
                document.body
            )}
            <div className="mb-32">
                <div
                    onClick={() => setIsFullScreen(true)}
                    className="rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl relative group cursor-zoom-in"
                >
                    <div className="relative bg-void flex items-center justify-center overflow-hidden">
                        <img
                            src={src}
                            alt={caption || "Interface Demo"}
                            className="w-full h-auto block group-hover:scale-[1.01] transition-transform duration-700 will-change-transform"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                            <div className="bg-black/50 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-xs font-mono text-white flex items-center gap-2">
                                <span className="text-neon">⤢</span> EXPAND
                            </div>
                        </div>
                    </div>
                </div>
                {caption && (
                    <div className="mt-6 flex items-center justify-center gap-3">
                        <div className="w-8 h-px bg-white/10" />
                        <p className="text-xs font-mono text-mist uppercase tracking-widest">{caption}</p>
                        <div className="w-8 h-px bg-white/10" />
                    </div>
                )}
            </div>
        </>
    );
};

export const StaticEmbed = ({ src, title, caption }) => {
    return (
        <div className="mb-32 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
            <div className="relative w-full h-[300px] md:h-[508px] overflow-hidden">
                <iframe
                    src={src}
                    title={title}
                    loading="lazy"
                    className="w-full h-full rounded-none"
                    style={{
                        transformOrigin: '0px 0px',
                        transform: 'scale(0.8)',
                        width: '125%',
                        height: '125%',
                        border: 'none',
                    }}
                />
            </div>
            <div className="bg-[#111] p-4 text-center border-t border-white/10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-mist">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live Preview
                </div>
            </div>
        </div>
    );
};

export const ResizableEmbed = ({ src, title, caption }) => {
    const containerRef = useRef(null);
    const resizeOffset = useMotionValue(0);
    const width = useMotionTemplate`calc(100% + ${resizeOffset}px)`;
    const [isResizing, setIsResizing] = useState(false);

    return (
        <div className="mb-32 flex flex-col items-center">
            <motion.div
                ref={containerRef}
                style={{ width }}
                className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl origin-top mx-auto"
            >
                <div className="h-8 bg-white/5 border-b border-white/5 flex items-center justify-between px-4">
                    <div className="flex gap-1.5 opacity-50">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">{title}</div>
                    <div className="w-8" />
                </div>
                <div className="relative w-full h-[400px] md:h-[708px] overflow-hidden bg-charcoal">
                    <iframe
                        src={src}
                        title={title}
                        loading="lazy"
                        className="w-full h-full rounded-none"
                        style={{
                            transformOrigin: '0px 0px',
                            transform: 'scale(0.8)',
                            width: '125%',
                            height: '125%',
                            border: 'none',
                        }}
                    />
                    {isResizing && <div className="absolute inset-0 z-50 bg-transparent cursor-ew-resize hidden md:block" />}
                </div>
                <motion.div
                    className="absolute top-0 right-0 w-6 h-full cursor-ew-resize z-50 hidden md:flex items-center justify-center group touch-none"
                    onPan={(event, info) => {
                        if (!containerRef.current) return;
                        const sensitivity = 2;
                        const delta = info.delta.x * sensitivity;
                        const currentOffset = resizeOffset.get();
                        const newOffset = currentOffset + delta;
                        const currentVisualWidth = containerRef.current.offsetWidth;
                        const baseWidth = currentVisualWidth - currentOffset;
                        const minOffset = 400 - baseWidth;
                        resizeOffset.set(Math.max(minOffset, Math.min(100, newOffset)));
                    }}
                    onPanStart={() => setIsResizing(true)}
                    onPanEnd={() => setIsResizing(false)}
                >
                    <div className="w-1.5 h-12 bg-white/20 rounded-full group-hover:bg-neon transition-colors shadow-lg backdrop-blur-sm" />
                </motion.div>
            </motion.div>
            <div className="mt-6 text-center max-w-xl mx-auto">
                <p className="text-sm text-mist">{caption}</p>
            </div>
        </div>
    );
};

export const PrototypePlayer = ({ images, description }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [cursorVariant, setCursorVariant] = useState("initial");

    useEffect(() => {
        let t1, t2, t3, t4;
        const sequence = () => {
            setActiveIndex(0);
            setCursorVariant("initial");
            t1 = setTimeout(() => setCursorVariant("target"), 500);
            t2 = setTimeout(() => setCursorVariant("click"), 1000);
            t3 = setTimeout(() => { setCursorVariant("modal"); setActiveIndex(1); }, 1300);
            t4 = setTimeout(sequence, 3000);
        };
        sequence();
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }, []);

    const cursorVariants = {
        initial: { left: "90%", top: "90%", opacity: 1, scale: 1 },
        target: { left: "89%", top: "16%", opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
        click: { left: "89%", top: "16%", opacity: 1, scale: 0.9, transition: { duration: 0.1 } },
        modal: { left: "89%", top: "16%", opacity: 0, scale: 1, transition: { duration: 0.2 } }
    };

    return (
        <div className="mb-32">
            <div className="mb-12"><p className="font-sans text-xl text-mist leading-relaxed font-light max-w-2xl">{description}</p></div>
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-transparent shadow-2xl w-full">
                {images.map((src, i) => (
                    <motion.div key={i} className={`${i === 0 ? 'relative' : 'absolute inset-0'} w-full`} initial={{ opacity: i === 0 ? 1 : 0 }} animate={{ opacity: activeIndex === i ? 1 : 0 }} transition={{ duration: 0.4 }}>
                        <img src={src} alt="" className="w-full h-auto block" />
                    </motion.div>
                ))}
                <motion.div className="absolute w-6 h-6 z-50 pointer-events-none drop-shadow-xl" variants={cursorVariants} animate={cursorVariant}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19179L11.7841 12.3673H5.65376Z" fill="#F24E1E" stroke="white" strokeWidth="1.5" /></svg>
                </motion.div>
            </div>
        </div>
    );
};

export const GifShowcase = ({ description, src }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {mounted && isFullScreen && createPortal(
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsFullScreen(false)} className="fixed inset-0 z-[9999] bg-[#050505]/95 backdrop-blur-md flex items-center justify-center force-cursor-auto p-8">
                    {/* Close Button */}
                    <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors flex items-center gap-3 group force-cursor-pointer">
                        <span className="text-xs font-mono tracking-widest group-hover:text-neon">CLOSE</span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-neon group-hover:bg-neon/10">✕</div>
                    </button>
                    <motion.img
                        src={src}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                    />
                </motion.div>,
                document.body
            )}
            <div className="mb-32">
                <div className="mb-12"><p className="font-sans text-xl text-mist leading-relaxed font-light max-w-2xl">{description}</p></div>
                <div
                    onClick={() => setIsFullScreen(true)}
                    className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl w-full group cursor-zoom-in"
                >
                    <img src={src} alt="" className="w-full h-auto block" />

                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                        <div className="bg-black/50 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-xs font-mono text-white flex items-center gap-2">
                            <span className="text-neon">⤢</span> EXPAND
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const RuleBuilderCarousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isFullScreen) return;
        const interval = setInterval(() => { setActiveIndex((prev) => (prev + 1) % items.length); }, 5000);
        return () => clearInterval(interval);
    }, [items.length, isFullScreen]);

    const activeItem = items[activeIndex];

    return (
        <>
            {mounted && isFullScreen && createPortal(
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col force-cursor-auto">
                    <div className="absolute top-0 right-0 p-6 z-50">
                        <button onClick={() => setIsFullScreen(false)} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/10 force-cursor-pointer hover:bg-white/20 transition-colors">✕</button>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-12 overflow-hidden">
                        <motion.img key={activeItem.image} src={activeItem.image} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="bg-[#0A0A0A] border-t border-white/10 p-8 shadow-2xl">
                        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-display text-white mb-2">{activeItem.title}</h3>
                                <p className="text-mist text-lg">{activeItem.description}</p>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => setActiveIndex((prev) => (prev - 1 + items.length) % items.length)} className="p-4 rounded-full border border-white/10 hover:bg-white/10 force-cursor-pointer">←</button>
                                <button onClick={() => setActiveIndex((prev) => (prev + 1) % items.length)} className="p-4 rounded-full border border-white/10 hover:bg-white/10 force-cursor-pointer">→</button>
                            </div>
                        </div>
                    </div>
                </motion.div>,
                document.body
            )}
            <div className="mb-32 w-full group cursor-pointer relative" onClick={() => setIsFullScreen(true)}>
                <div className="relative w-full aspect-[2.5/1] bg-[#0A0A0A] border border-dashed border-white/10 rounded-2xl overflow-hidden hover:border-neon/30">
                    <div className="absolute inset-0 flex items-center justify-center z-10 opacity-60 group-hover:opacity-100">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon group-hover:text-black">↗</div>
                            <span className="font-mono text-xs text-mist uppercase tracking-widest group-hover:text-neon">View Rule Builder</span>
                        </div>
                    </div>
                    <div className="absolute inset-0 opacity-20 blur-sm scale-110 pointer-events-none grayscale group-hover:grayscale-0">
                        <img src={activeItem.image} className="w-full h-full object-cover" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export const FooterNav = ({ nextProjectSlug, nextProject }) => {
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <section ref={containerRef} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="py-40 border-t border-white/10 flex flex-col items-center justify-center text-center bg-void relative overflow-hidden group min-h-[80vh] cursor-none">
            <motion.div className="absolute w-24 h-24 border border-white/20 rounded-full z-20 flex items-center justify-center backdrop-blur-sm pointer-events-none" style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%", scale: isHovering ? 1 : 0, opacity: isHovering ? 1 : 0 }} transition={{ type: "spring", stiffness: 150, damping: 15 }}>
                <div className="w-2 h-2 bg-neon rounded-full" />
            </motion.div>
            <motion.div style={{ scale, opacity }} className="relative z-10 p-12">
                <div className="text-sm font-mono text-mist mb-8 uppercase tracking-widest flex items-center justify-center gap-3">
                    Next Case Study
                    {nextProject.hero.comingSoon && (
                        <span className="bg-neon text-void px-2 py-0.5 rounded text-[10px] font-bold tracking-wider">COMING SOON</span>
                    )}
                </div>
                {nextProject.hero.comingSoon ? (
                    <div className="block relative outline-none cursor-not-allowed opacity-50">
                        <span className="font-display text-6xl md:text-9xl text-ice leading-[0.8] tracking-tighter block">{nextProject.hero.title}</span>
                    </div>
                ) : (
                    <Link href={`/work/${nextProjectSlug}`} className="block relative group-nav outline-none">
                        <span className="font-display text-6xl md:text-9xl text-ice transition-colors duration-500 leading-[0.8] tracking-tighter block group-hover:text-neon">{nextProject.hero.title}</span>
                    </Link>
                )}
            </motion.div>
        </section>
    );
};
