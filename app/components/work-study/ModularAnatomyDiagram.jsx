'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export const ModularAnatomyDiagram = () => {
    const [isHovered, setIsHovered] = useState(false);
    const fadeTransition = { duration: 0.4, ease: "easeInOut" };

    return (
        <div className="font-handdrawn py-12 flex flex-col items-center gap-16">
            <div className="relative w-full max-w-4xl aspect-[16/10] bg-void/50 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center p-8 group">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <svg viewBox="0 0 800 500" className="w-full h-full relative z-10 drop-shadow-2xl font-handdrawn">
                    <rect x="300" y="50" width="200" height="400" rx="24" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <text x="180" y="80" fill="white" className="text-xl font-bold tracking-tight font-handdrawn">&lt;Sidebar /&gt;</text>
                    <path d="M285 75 Q300 75 300 65" stroke="white" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                    <motion.g animate={{ opacity: isHovered ? 0.1 : 1 }} transition={fadeTransition}>
                        <rect x="310" y="65" width="180" height="60" rx="12" fill="rgba(59,130,246,0.15)" stroke="#3B82F6" strokeWidth="3" />
                        <text x="515" y="100" fill="#3B82F6" className="text-lg font-bold font-handdrawn">&lt;SidebarHeader /&gt;</text>
                        <path d="M510 95 L495 95" stroke="#3B82F6" strokeWidth="2" fill="none" />
                    </motion.g>
                    <motion.g animate={{ opacity: isHovered ? 0.1 : 1 }} transition={fadeTransition}>
                        <rect x="310" y="135" width="180" height="230" rx="12" fill="rgba(34,197,94,0.1)" stroke="#22C55E" strokeWidth="3" />
                        <text x="515" y="250" fill="#22C55E" className="text-lg font-bold font-handdrawn">&lt;SidebarContent /&gt;</text>
                    </motion.g>
                    <motion.g animate={{ opacity: isHovered ? 0.1 : 1 }} transition={fadeTransition}>
                        <rect x="310" y="375" width="180" height="60" rx="12" fill="rgba(239,68,68,0.15)" stroke="#EF4444" strokeWidth="3" />
                        <text x="515" y="410" fill="#EF4444" className="text-lg font-bold font-handdrawn">&lt;SidebarFooter /&gt;</text>
                        <path d="M510 405 L495 405" stroke="#EF4444" strokeWidth="2" fill="none" />
                    </motion.g>
                    <motion.g className="cursor-pointer" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
                        <motion.g animate={{ opacity: isHovered ? 0 : 1 }} transition={fadeTransition}>
                            <rect x="325" y="150" width="150" height="90" rx="8" fill="rgba(234,179,8,0.1)" stroke="#EAB308" strokeWidth="2" strokeDasharray="6 4" />
                            <rect x="325" y="250" width="150" height="100" rx="8" fill="rgba(234,179,8,0.1)" stroke="#EAB308" strokeWidth="2" strokeDasharray="6 4" />
                            <text x="130" y="260" fill="#EAB308" className="text-lg font-bold font-handdrawn">&lt;SidebarGroup /&gt;</text>
                            <path d="M285 255 L320 255" stroke="#EAB308" strokeWidth="2" fill="none" />
                        </motion.g>
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={fadeTransition}>
                            <rect x="260" y="120" width="280" height="260" rx="20" fill="#111" stroke="white" strokeWidth="2" />
                            <g transform="translate(280, 140)">
                                {[0, 1, 2, 3].map((i) => (
                                    <g key={i} transform={`translate(0, ${i * 55})`}>
                                        <rect width="240" height="40" rx="8" fill="rgba(59,130,246,0.1)" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5 3" />
                                        <rect x="5" y="5" width="190" height="30" rx="4" fill="rgba(239,68,68,0.15)" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 3" />
                                        <rect x="205" y="5" width="30" height="30" rx="4" fill="rgba(234,179,8,0.3)" stroke="#EAB308" strokeWidth="1" strokeDasharray="2 2" />
                                    </g>
                                ))}
                            </g>
                            <g>
                                <text x="120" y="100" fill="white" className="text-sm font-bold font-handdrawn">&lt;SidebarMenu /&gt;</text>
                                <path d="M220 105 Q 250 110, 260 130" stroke="white" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                            </g>
                            <g>
                                <text x="80" y="220" fill="#EF4444" className="text-sm font-bold font-handdrawn">&lt;SidebarMenuButton /&gt;</text>
                                <path d="M220 215 Q 250 215, 290 210" stroke="#EF4444" strokeWidth="2" fill="none" />
                                <circle cx="290" cy="210" r="3" fill="#EF4444" />
                            </g>
                            <g>
                                <text x="560" y="180" fill="#3B82F6" className="text-sm font-bold font-handdrawn">&lt;SidebarMenuItem /&gt;</text>
                                <path d="M550 180 Q 530 180, 520 160" stroke="#3B82F6" strokeWidth="2" fill="none" />
                                <circle cx="520" cy="160" r="3" fill="#3B82F6" />
                            </g>
                            <g>
                                <text x="560" y="300" fill="#EAB308" className="text-sm font-bold font-handdrawn">&lt;SidebarMenuAction /&gt;</text>
                                <path d="M550 295 Q 520 290, 505 265" stroke="#EAB308" strokeWidth="2" fill="none" />
                                <circle cx="505" cy="265" r="3" fill="#EAB308" />
                            </g>
                        </motion.g>
                    </motion.g>
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                        </marker>
                    </defs>
                </svg>
                <div className="absolute bottom-8 left-8 flex items-center gap-4 text-xs font-mono text-mist/30 uppercase tracking-[0.3em]">
                    <div className="w-12 h-[1px] bg-mist/20" />
                    Architecture Blueprint v2.0
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 0 : 0.6 }} className="absolute top-8 right-8 text-xs font-handdrawn text-mist bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    Hover to X-Ray
                </motion.div>
            </div>
        </div>
    );
};
