'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ToolIcon = ({ name, color, icon, isLocal, isCustom }) => {
    const [imgError, setImgError] = useState(false);

    // Determine icon source
    let iconSrc = null;
    if (isLocal) {
        iconSrc = `/logos/${isLocal}`;
    } else if (icon) {
        iconSrc = `https://api.iconify.design/${icon.replace(':', '/')}.svg?color=${encodeURIComponent(color)}`;
    }

    const showFallback = !iconSrc || imgError;

    return (
        <div className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-neon/30 hover:bg-white/[0.08] transition-all duration-300 group cursor-none">
            <div className="w-10 h-10 rounded-xl bg-void border border-white/10 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110 group-hover:border-neon/40 shadow-xl relative">
                {(iconSrc && !imgError) ? (
                    <img
                        src={iconSrc}
                        alt={name}
                        className="w-6 h-6 object-contain Tool-Logo opacity-90 group-hover:opacity-100 transition-all duration-300"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div
                        className="absolute inset-0 flex items-center justify-center text-lg font-bold"
                        style={{ color: color || 'var(--neon)' }}
                    >
                        {name.charAt(0)}
                    </div>
                )}
            </div>
            <span className="font-mono text-xs text-mist group-hover:text-ice uppercase tracking-widest whitespace-nowrap">
                {name}
            </span>
        </div>
    );
};

const MarqueeRow = ({ items, reverse = false, duration = 40 }) => {
    const doubledItems = [...items, ...items];

    return (
        <div className="flex overflow-hidden py-4 select-none">
            <motion.div
                className="flex gap-4 pr-4"
                initial={{ x: reverse ? "-50%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-50%" }}
                transition={{
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity
                }}
            >
                {doubledItems.map((item, idx) => (
                    <ToolIcon key={`${item.name}-${idx}`} {...item} />
                ))}
            </motion.div>
        </div>
    );
};

const Arsenal = () => {
    const row1 = [
        { name: "Figma", color: "#F24E1E", icon: "simple-icons:figma" },
        { name: "Framer", color: "#0055FF", icon: "simple-icons:framer" },
        { name: "Antigravity", color: "#00FFA3", isLocal: 'google-antigravity.svg' },
        { name: "Figma Make", color: "#A259FF", icon: "simple-icons:figma" },
        { name: "Adobe Suite", color: "#FF0000", icon: "simple-icons:adobe" },
        { name: "Procreate", color: "#E841D6", icon: "ic:baseline-brush" },
        { name: "Figjam", color: "#8C4FFF", icon: "simple-icons:figma" }
    ];

    const row2 = [
        { name: "Claude", color: "#D97757", isLocal: "claude-ai-icon.svg" },
        { name: "Cursor", color: "#54B689", isLocal: "cursor-ai-code-icon.svg" },
        { name: "ChatGPT", color: "#10A37F", icon: "simple-icons:openai" },
        { name: "Gemini", color: "#4285F4", isLocal: "google-gemini-icon.svg" },
        { name: "Perplexity", color: "#00A3A3", isLocal: "perplexity-ai-icon.svg" },
        { name: "Grok", color: "#FFFFFF", isLocal: "grok-icon.svg" },
        { name: "Lovable", color: "#FF3B30", isLocal: "lovable-ai-icon.svg" },
        { name: "Next.js", color: "#FFFFFF", icon: "simple-icons:nextdotjs" }
    ];

    const row3 = [
        { name: "Notion", color: "#FFFFFF", icon: "simple-icons:notion" },
        { name: "Linear", color: "#5E6AD2", icon: "simple-icons:linear" },
        { name: "Slack", color: "#4A154B", icon: "simple-icons:slack" },
        { name: "Miro", color: "#FFD02F", icon: "simple-icons:miro" },
        { name: "Spotify", color: "#1ED760", icon: "simple-icons:spotify" },
        { name: "VS Code", color: "#007ACC", icon: "simple-icons:visualstudiocode" },
        { name: "React", color: "#61DAFB", icon: "simple-icons:react" }
    ];

    return (
        <section id="arsenal" className="py-40 bg-void relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-void via-void/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void via-void/80 to-transparent z-10 pointer-events-none" />

            <div className="pl-8 md:pl-20 relative z-20">
                <div className="text-left mb-20">
                    <motion.h2
                        className="font-display text-4xl md:text-6xl text-ice mb-6 tracking-tight uppercase"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        TOOLS <span className="text-neon">I USE</span>
                    </motion.h2>
                    <motion.p
                        className="font-sans text-mist text-lg max-w-xl"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        This is how I create most of my magic—a blend of craft, AI assistance, and high-performance building.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-2 -ml-20">
                    <div className="overflow-visible">
                        <MarqueeRow items={row1} duration={45} />
                        <MarqueeRow items={row2} reverse duration={55} />
                        <MarqueeRow items={row3} duration={50} />
                    </div>
                </div>

                <div className="mt-24 flex justify-start">
                    <div className="h-[2px] w-24 bg-gradient-to-r from-neon to-transparent opacity-50" />
                </div>
            </div>
        </section>
    );
};

export default Arsenal;
