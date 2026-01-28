'use client';

import { motion } from 'framer-motion';

const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const KeyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5" /><path d="m21 2-9.6 9.6" /><path d="m15.5 7.5 3 3L22 7l-3-3" /></svg>;
const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>;
const BuildingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M16 18h.01" /></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;

export const RBACEquationVisual = () => (
    <div className="w-full relative bg-[#1e1e1e] border border-[#333] rounded-3xl p-8 lg:p-12 overflow-hidden select-none">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 flex flex-col flex-wrap lg:flex-nowrap items-center justify-center gap-8 min-h-[400px]">
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                <div className="relative group cursor-grab active:cursor-grabbing hover:z-20 transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                    <div className="w-40 h-40 bg-[#FFD02F] shadow-[8px_8px_0px_rgba(0,0,0,0.2)] rounded-sm flex flex-col items-center justify-center p-6 text-[#1e1e1e]">
                        <div className="scale-125 mb-3 opacity-80"><UserIcon /></div>
                        <div className="font-display text-xl font-bold">User</div>
                        <div className="font-serif italic text-sm opacity-70 mt-2 text-center leading-tight">"The Who"</div>
                    </div>
                    <div className="absolute -top-3 -left-3 z-30 pointer-events-none animate-pulse">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg"><path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19179L11.7841 12.3673H5.65376Z" fill="#F24E1E" stroke="white" strokeWidth="1" /></svg>
                        <div className="bg-[#F24E1E] text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-sm ml-2 -mt-1">Admin</div>
                    </div>
                </div>
                <div className="text-[#555] opacity-50 text-3xl font-light font-handwriting">+</div>
                <div className="relative group cursor-grab active:cursor-grabbing hover:z-20 transform md:rotate-[1deg] hover:rotate-0 transition-transform duration-300">
                    <div className="w-40 h-40 bg-[#E0B6FF] shadow-[8px_8px_0px_rgba(0,0,0,0.2)] rounded-sm flex flex-col items-center justify-center p-6 text-[#1e1e1e]">
                        <div className="scale-125 mb-3 opacity-80"><ShieldIcon /></div>
                        <div className="font-display text-xl font-bold">Role</div>
                        <div className="font-serif italic text-sm opacity-70 mt-2 text-center leading-tight">"The What"</div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 z-30 pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg transform rotate-180"><path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19179L11.7841 12.3673H5.65376Z" fill="#0D99FF" stroke="white" strokeWidth="1" /></svg>
                        <div className="bg-[#0D99FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-sm mr-2 -mt-1">Report Admin</div>
                    </div>
                </div>
                <div className="text-[#555] opacity-50 text-3xl font-light font-handwriting">+</div>
                <div className="relative group cursor-grab active:cursor-grabbing hover:z-20 transform md:rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
                    <div className="w-40 h-40 bg-[#69F0AE] shadow-[8px_8px_0px_rgba(0,0,0,0.2)] rounded-sm flex flex-col items-center justify-center p-6 text-[#1e1e1e]">
                        <div className="scale-125 mb-3 opacity-80"><TargetIcon /></div>
                        <div className="font-display text-xl font-bold">Scope</div>
                        <div className="font-serif italic text-sm opacity-70 mt-2 text-center leading-tight">"The Where"</div>
                    </div>
                    <div className="absolute top-0 right-0 z-30 pointer-events-none animate-bounce duration-1000">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg"><path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19179L11.7841 12.3673H5.65376Z" fill="#9747FF" stroke="white" strokeWidth="1" /></svg>
                        <div className="bg-[#9747FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-sm ml-2 -mt-1">Company</div>
                    </div>
                </div>
                <div className="text-[#555] opacity-50 text-3xl font-light font-handwriting">=</div>
                <div className="relative group cursor-grab active:cursor-grabbing hover:z-20 transform md:rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                    <div className="w-40 h-40 bg-[#FF9D9D] shadow-[8px_8px_0px_rgba(0,0,0,0.2)] rounded-sm flex flex-col items-center justify-center p-6 text-[#1e1e1e]">
                        <div className="scale-125 mb-3 opacity-80"><KeyIcon /></div>
                        <div className="font-display text-xl font-bold leading-none mb-1">Access</div>
                        <div className="font-serif italic text-sm opacity-70 text-center leading-tight">"The Result"</div>
                    </div>
                    <div className="absolute -bottom-4 left-4 z-30 pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg"><path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19179L11.7841 12.3673H5.65376Z" fill="#00C19C" stroke="white" strokeWidth="1" /></svg>
                        <div className="bg-[#00C19C] text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-sm ml-2 -mt-1">Report Admins</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const RBACScopeVisual = () => (
    <div className="w-full relative bg-[#050505] border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
                <div className="absolute left-[15px] top-6 bottom-6 w-px bg-gradient-to-b from-white/5 via-white/20 to-white/5" />
                <div className="space-y-4">
                    {[
                        { label: 'Platform', icon: GlobeIcon, active: false },
                        { label: 'TMC Agency', icon: BuildingIcon, active: false },
                        { label: 'Organization', icon: BriefcaseIcon, active: true },
                        { label: 'Legal Entity', icon: null, text: 'LE', active: false },
                        { label: 'Traveler', icon: UserIcon, active: false },
                    ].map((item, i) => (
                        <div key={i} className={`relative pl-12 transition-all duration-300 ${item.active ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}>
                            <div className={`absolute left-[11px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border border-[#050505] transition-colors ${item.active ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-white/10'}`} />
                            <div className={`p-4 rounded-lg border flex items-center justify-between group ${item.active ? 'bg-blue-500/5 border-blue-500/20' : 'bg-[#111] border-white/5'}`}>
                                <div className="flex items-center gap-3">
                                    <div className={`text-${item.active ? 'blue-400' : 'mist'}`}>
                                        {item.icon ? <item.icon /> : <span className="font-mono text-xs">{item.text}</span>}
                                    </div>
                                    <span className="text-sm font-medium text-white">{item.label}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="order-1 md:order-2">
                <div className="inline-block mb-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-mist uppercase tracking-widest">Hierarchy</div>
                <h3 className="font-display text-3xl text-white mb-6">Waterfall Inheritance</h3>
                <p className="text-mist leading-relaxed text-sm md:text-base">
                    Access flows downwards. Granting permissions at the <span className="text-white font-medium">Organization</span> level automatically cascades to every <span className="text-mist">Legal Entity</span> and <span className="text-mist">Traveler</span> node below it.
                </p>
            </div>
        </div>
    </div>
);

export const RBACRolesVisual = () => {
    const roles = [
        { name: "Trip Manager", desc: "Manage & approve bookings", scope: "Write", color: "bg-orange-500/20 text-orange-200" },
        { name: "Reporting Admin", desc: "View spend analytics", scope: "Read", color: "bg-blue-500/20 text-blue-200" },
        { name: "Company Admin", desc: "Full configuration access", scope: "Full", color: "bg-red-500/20 text-red-200" },
        { name: "Card Manager", desc: "Unmask corporate cards", scope: "Secure", color: "bg-yellow-500/20 text-yellow-200" },
        { name: "Integrator", desc: "HR feed synchronization", scope: "System", color: "bg-purple-500/20 text-purple-200" },
        { name: "Auditor", desc: "Read-only compliance check", scope: "Read", color: "bg-blue-500/20 text-blue-200" },
    ];
    return (
        <div className="w-full relative bg-[#191919] rounded-xl overflow-hidden border border-[#333]">
            <div className="flex items-center gap-2 p-4 border-b border-[#333] bg-[#202020]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="ml-4 text-xs font-sans text-stone-400">Roles Database</div>
            </div>
            <div className="p-0">
                <div className="w-full text-left border-collapse">
                    <div className="grid grid-cols-12 px-4 py-3 border-b border-[#333] text-xs font-sans text-stone-500">
                        <div className="col-span-4 pl-2">Aa Role Name</div>
                        <div className="col-span-6 border-l border-[#333] pl-4">≡ Description</div>
                        <div className="col-span-2 border-l border-[#333] pl-4">▼ Access</div>
                    </div>
                    {roles.map((role, i) => (
                        <div key={i} className="grid grid-cols-12 px-4 py-3 border-b border-[#333] last:border-0 hover:bg-[#202020] transition-colors group">
                            <div className="col-span-4 flex items-center gap-2 pl-2">
                                <span className="text-stone-600 group-hover:text-stone-400 transition-colors">📄</span>
                                <span className="font-sans text-sm text-stone-200 font-medium">{role.name}</span>
                            </div>
                            <div className="col-span-6 flex items-center pl-4 border-l border-[#333] border-dashed">
                                <span className="font-sans text-sm text-stone-400">{role.desc}</span>
                            </div>
                            <div className="col-span-2 flex items-center pl-4 border-l border-[#333] border-dashed">
                                <span className={`px-2 py-0.5 rounded text-[11px] font-sans font-medium ${role.color} whitespace-nowrap`}>{role.scope}</span>
                            </div>
                        </div>
                    ))}
                    <div className="grid grid-cols-12 px-4 py-3 text-stone-600 hover:bg-[#202020] transition-colors cursor-pointer">
                        <div className="col-span-12 pl-2 flex items-center gap-2 text-sm font-sans">
                            <span>+ New</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
