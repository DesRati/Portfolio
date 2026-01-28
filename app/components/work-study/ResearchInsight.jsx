'use client';

import { motion } from 'framer-motion';

export const ResearchInsight = () => {
    const layers = [0, 1, 2, 3];
    return (
        <div className="grid md:grid-cols-2 gap-8 mb-32">
            <div className="bg-charcoal border border-white/10 rounded-2xl p-10 relative overflow-hidden min-h-[400px] flex flex-col justify-between group">
                <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent opacity-50" />
                <div className="relative z-10">
                    <h3 className="font-display text-2xl text-white mb-2">User Mental Model</h3>
                    <p className="font-mono text-xs text-neon uppercase tracking-widest opacity-80">Lateral Context Switching</p>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="relative">
                        <div className="text-[120px] leading-none font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter">85%</div>
                        <div className="absolute -inset-10 bg-neon/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen" />
                    </motion.div>
                    <div className="mt-4 px-4 py-2 bg-neon/10 border border-neon/30 rounded-full text-neon font-bold text-sm uppercase tracking-wide">Organization Hopping</div>
                </div>
            </div>
            <div className="bg-charcoal border border-white/10 rounded-2xl p-10 relative overflow-hidden min-h-[400px] flex flex-col justify-between">
                <div className="relative z-10">
                    <h3 className="font-display text-2xl text-white mb-2">Legacy Architecture</h3>
                    <p className="font-mono text-xs text-red-400 uppercase tracking-widest opacity-80">Vertical Administrative Cost</p>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center flex-grow perspective-[1000px]">
                    {layers.map((i) => (
                        <motion.div key={i} initial={{ y: 0, opacity: 0, rotateX: 0 }} whileInView={{ y: i * -20, opacity: 1 - (i * 0.15), scale: 1 - (i * 0.05), rotateX: 10 }} transition={{ delay: i * 0.1, duration: 0.8 }} className="w-48 h-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl absolute top-1/2 left-1/2 -ml-24 flex items-center px-4" style={{ zIndex: 4 - i }}>
                            <div className="w-2 h-2 rounded-full bg-red-400/50 mr-3" />
                            <div className="h-1.5 bg-white/10 rounded-full w-20" />
                        </motion.div>
                    ))}
                    <div className="mt-32 text-center">
                        <p className="text-red-400 font-bold text-lg">Buried in Settings</p>
                        <p className="text-mist text-sm">Treats "Workspace" as "Admin Config"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
