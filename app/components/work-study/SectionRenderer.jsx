'use client';

import {
    FramedMedia,
    StaticEmbed,
    ResizableEmbed,
    PrototypePlayer,
    GifShowcase,
    RuleBuilderCarousel
} from './WorkComponents';
import { RBACEquationVisual, RBACScopeVisual, RBACRolesVisual } from './RBACVisuals';
import { HanddrawnTable, NavHierarchyDiagram, AnnotatedComparison } from './NavVisuals';
import { ResearchInsight } from './ResearchInsight';
import { EvolutionVisual } from './EvolutionVisual';
import { ModularAnatomyDiagram } from './ModularAnatomyDiagram';

export const SectionRenderer = ({ section }) => {
    switch (section.type) {
        case 'iframe-embed':
            return <ResizableEmbed src={section.src} title={section.title} caption={section.caption} />;
        case 'text-row':
            return (
                <div className={section.className || "mb-12"}>
                    <h2 className="font-display text-3xl md:text-5xl text-ice mb-6 leading-tight">{section.header}</h2>
                    <p className="font-sans text-lg md:text-xl text-mist leading-relaxed font-light max-w-2xl">{section.body}</p>
                </div>
            );
        case 'grid-problem-solution':
            return (
                <div className="flex flex-col gap-0 mb-32 rounded-2xl overflow-hidden border border-white/10">
                    <div className="p-10 bg-[#111] relative">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="text-xs font-mono text-red-400 tracking-widest">THE PROBLEM</div>
                        </div>
                        <p className="font-sans text-xl text-mist leading-relaxed max-w-4xl">{section.problem}</p>
                    </div>
                    <div className="p-10 bg-white/[0.03] relative border-t border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                            <div className="text-xs font-mono text-neon tracking-widest">THE SOLUTION</div>
                        </div>
                        <p className="font-sans text-xl text-ice leading-relaxed max-w-4xl">{section.solution}</p>
                    </div>
                </div>
            );
        case 'metrics-grid':
            return (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-32 rounded-lg overflow-hidden">
                    {section.items.map((item, i) => (
                        <div key={i} className="bg-void p-8 hover:bg-white/[0.02] transition-colors group">
                            <div className="text-4xl md:text-5xl font-display text-ice mb-2 group-hover:text-neon transition-colors">{item.value}</div>
                            <div className="text-xs font-mono text-mist uppercase tracking-wider">{item.label}</div>
                        </div>
                    ))}
                </div>
            );
        case 'full-text':
            return (
                <div className="mb-32 border-l-2 border-neon pl-6 md:pl-8 py-2">
                    <h3 className="font-display text-2xl md:text-3xl text-ice mb-4">{section.header}</h3>
                    <p className="font-sans text-lg text-mist leading-relaxed max-w-3xl">{section.body}</p>
                </div>
            );
        case 'link-list':
            return (
                <div className="mb-12">
                    <div className="grid md:grid-cols-1 gap-4">
                        {section.links.map((link, i) => (
                            <a key={i} href={link.url} target="_blank" className="relative group block p-8 border border-white/10 hover:border-neon transition-colors rounded-xl bg-charcoal overflow-hidden">
                                <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10 flex items-center justify-between">
                                    <div>
                                        <div className="font-display text-2xl text-ice group-hover:text-neon transition-colors">{link.label}</div>
                                        <div className="text-xs font-mono text-mist mt-1">{link.desc}</div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-neon group-hover:border-neon group-hover:text-charcoal transition-all">↗</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            );
        case 'quote':
            return (
                <div className="mb-32 flex flex-col items-center text-center">
                    <p className="font-display text-3xl md:text-5xl text-ice leading-tight max-w-4xl mb-8 opacity-90">"{section.text}"</p>
                    <div className="font-mono text-xs text-neon uppercase tracking-widest px-4 py-2 border border-neon rounded-full">{section.author}</div>
                </div>
            );
        case 'process-timeline':
            return (
                <div className="mb-32">
                    <div className="grid md:grid-cols-2 gap-8">
                        {section.steps.map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="text-6xl font-display text-white/5 font-bold mb-4 absolute -top-8 -left-2 z-0 group-hover:text-neon/10 transition-colors">0{i + 1}</div>
                                <div className="relative z-10 p-6 bg-[#111] border border-white/5 rounded-xl h-full hover:border-neon/30 transition-colors">
                                    <h4 className="text-xl text-white font-bold mb-2">{step.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case 'reflection-grid':
            return (
                <div className="mb-32 flex flex-col gap-6">
                    <div className="bg-[#111] p-10 rounded-2xl border-l-[6px] border-green-500 w-full relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"><div className="w-32 h-32 bg-green-500 rounded-full" /></div>
                        <h4 className="text-2xl font-display text-white mb-6 relative z-10">What went right</h4>
                        <ul className="space-y-4 relative z-10">
                            {section.rights.map((item, i) => (
                                <li key={i} className="flex gap-4 text-mist leading-relaxed items-start text-lg"><span className="text-green-500 mt-1.5 text-xl">✓</span><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#111] p-10 rounded-2xl border-l-[6px] border-red-500 w-full relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"><div className="w-32 h-32 bg-red-500 rounded-full" /></div>
                        <h4 className="text-2xl font-display text-white mb-6 relative z-10">What went wrong</h4>
                        <ul className="space-y-4 relative z-10">
                            {section.wrongs.map((item, i) => (
                                <li key={i} className="flex gap-4 text-mist leading-relaxed items-start text-lg"><span className="text-red-500 mt-1.5 text-xl">×</span><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        case 'image-grid':
            return (
                <div className="mb-32">
                    <div className="grid md:grid-cols-2 gap-4">
                        {section.items.map((item, i) => (
                            <div key={i} className="bg-[#111] border border-white/5 rounded-xl overflow-hidden group hover:border-neon/30 transition-colors">
                                <div className="p-8 min-h-[300px] flex flex-col items-center justify-center text-center">
                                    <div className="text-4xl mb-4 opacity-20 group-hover:opacity-100 transition-opacity">🖼️</div>
                                    <div className="text-white font-medium mb-2">{item.caption}</div>
                                    <div className="text-xs text-gray-500 font-mono uppercase">Image Placeholder</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case 'stat-row':
            return (
                <div className="mb-32 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {section.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl font-display text-white font-bold mb-2">{stat.value}</div>
                            <div className="text-xs font-mono text-neon uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            );
        case 'visual-rbac-equation': return <div className="mb-32"><RBACEquationVisual /></div>;
        case 'visual-rbac-scope': return <div className="mb-32"><RBACScopeVisual /></div>;
        case 'visual-rbac-roles': return <div className="mb-32"><RBACRolesVisual /></div>;
        case 'visual-evolution': return <div className="mb-32"><EvolutionVisual /></div>;
        case 'framed-media': return <FramedMedia src={section.src} caption={section.caption} />;
        case 'static-embed': return <StaticEmbed src={section.src} title={section.title} caption={section.caption} />;
        case 'prototype-player': return <PrototypePlayer images={section.images} description={section.description} />;
        case 'gif-showcase': return <GifShowcase description={section.description} src={section.src} />;
        case 'rule-builder-carousel': return <RuleBuilderCarousel items={section.items} />;
        case 'research-insight': return <ResearchInsight />;
        case 'visual-handdrawn-table': return <div className="mb-32"><HanddrawnTable /></div>;
        case 'visual-nav-hierarchy': return <div className="mb-32"><NavHierarchyDiagram /></div>;
        case 'visual-modular-anatomy': return <div className="mb-32"><ModularAnatomyDiagram /></div>;
        case 'visual-annotated-comparison': return <div className="mb-32"><AnnotatedComparison /></div>;
        default: return null;
    }
};
