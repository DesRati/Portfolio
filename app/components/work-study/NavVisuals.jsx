'use client';

import { motion } from 'framer-motion';

export const HanddrawnTable = () => (
    <div className="font-handdrawn py-12 flex flex-col items-center">
        <div className="text-2xl font-bold mb-8 text-neon">Research Synthesis</div>
        <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
            <div className="p-8 border-2 border-white/20 rounded-lg -rotate-1">
                <div className="text-xl font-bold mb-4 opacity-70 italic text-red-400">The Friction</div>
                <ul className="space-y-4 text-mist">
                    <li>- 4 clicks to switch context</li>
                    <li>- No visual confirmation of "where" I am</li>
                    <li>- Buried administrative controls</li>
                </ul>
            </div>
            <div className="p-8 border-2 border-neon/40 rounded-lg rotate-1">
                <div className="text-xl font-bold mb-4 italic text-neon">The Solution</div>
                <ul className="space-y-4 text-ice">
                    <li>- Instant Org Selector (1 click)</li>
                    <li>- Dynamic Sidebar Breadcrumbs</li>
                    <li>- Centralized Admin Hub</li>
                </ul>
            </div>
        </div>
    </div>
);

export const NavHierarchyDiagram = () => (
    <div className="font-handdrawn py-12 flex flex-col items-center gap-4">
        {[
            { label: "DOMAIN / PLATFORM", color: "neon", sub: "Top Level Navigation", rot: "rotate-1", x: "translate-x-2", d: 0 },
            { label: "ORGANIZATION", color: "ice", sub: "Custom Branding / Policies", rot: "-rotate-1", x: "", d: 0.1 },
            { label: "WORKSPACE", color: "mist", sub: "Operational Context", rot: "rotate-2", x: "translate-x-3", d: 0.2 },
            { label: "FEATURE / APP", color: "mist/50", sub: "The Work Area", rot: "-rotate-2", x: "-translate-x-2", d: 0.3 }
        ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
                {i !== 0 && <div className={`h-10 w-px bg-${item.color.split('/')[0]}/40 ${item.x}`} />}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: item.d }} className={`w-64 p-5 border-2 border-${item.color.split('/')[0]} text-${item.color.split('/')[0]} text-center rounded-sm ${item.rot}`}>
                    <div className="text-xl font-bold">{item.label}</div>
                    <div className="text-xs opacity-60">{item.sub}</div>
                </motion.div>
            </div>
        ))}
    </div>
);

export const AnnotatedComparison = () => (
    <div className="font-handdrawn py-12 flex flex-col gap-24">
        <div className="relative group max-w-5xl mx-auto w-full">
            <div className="absolute -top-6 left-8 bg-white/10 backdrop-blur-md text-ice border border-white/20 px-6 py-2 rotate-[-1deg] text-xl font-bold z-10 shadow-2xl">Direction A: Dual-Tier Rail</div>
            <div className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                <img src="/images/side-nav/uploaded_media_1.png" alt="Dual-Tier Rail" className="w-full opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="mt-8 p-6 border-l-4 border-white/20 bg-white/5 rounded-r-2xl max-w-2xl">
                <div className="text-ice text-2xl font-bold mb-3">Dual-Tier Exploration</div>
                <ul className="text-mist space-y-2 text-lg">
                    <li>- High cognitive overhead for specialized operations</li>
                    <li>- Distant visual relationship with Organization context</li>
                    <li>- Inefficient vertical space usage for complex sub-menus</li>
                </ul>
            </div>
        </div>
        <div className="relative group max-w-5xl mx-auto w-full">
            <div className="absolute -top-6 right-8 bg-neon/90 text-charcoal px-6 py-2 rotate-[1deg] text-xl font-bold z-10 shadow-2xl shadow-neon/20">Direction B: Flat Accordion (Selected)</div>
            <div className="border-2 border-neon/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,255,163,0.1)] group-hover:shadow-[0_0_80px_rgba(0,255,163,0.2)] transition-all duration-700">
                <img src="/images/side-nav/uploaded_media_0.png" alt="Flat Accordion" className="w-full opacity-100" />
            </div>
            <div className="mt-8 p-6 border-l-4 border-neon/40 bg-neon/5 rounded-r-2xl max-w-2xl ml-auto text-right">
                <div className="text-neon text-2xl font-bold mb-3">Flat Accordion with Hub</div>
                <ul className="text-mist space-y-2 text-lg inline-block text-left text-right">
                    <li>- Clear, logical context hierarchy for all users</li>
                    <li>- Scales linearly for any number of child applications</li>
                    <li>- Superior accessibility (A11y) and keyboard navigation</li>
                </ul>
            </div>
        </div>
    </div>
);
