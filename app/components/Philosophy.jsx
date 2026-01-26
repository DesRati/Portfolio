'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';


const Philosophy = () => {
    return (
        <section id="philosophy" className="py-32 relative overflow-hidden bg-void border-t border-white/5">
            <div className="container mx-auto px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Text Side */}
                    <div>
                        <motion.h2
                            className="font-display text-5xl md:text-7xl text-ice mb-8 leading-[0.9]"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            OWNING <br />
                            <span className="text-neon">OUTCOMES</span>
                        </motion.h2>
                        <p className="font-sans text-mist text-lg md:text-xl leading-relaxed max-w-md mb-6">
                            I don't just deliver screens. I drive early discussions, align engineering complexity with user needs, and take responsibility for the final product.
                        </p>
                        <p className="font-sans text-mist text-lg md:text-xl leading-relaxed max-w-md">
                            My goal is to bridge the gap between <span className="text-ice">Creative Intuition</span> and <span className="text-neon">Technical Constraints</span>—delivering work that is beautiful, feasible, and scalable.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <div className="px-4 py-2 border border-white/10 rounded-full text-ice text-sm font-mono uppercase tracking-widest bg-white/5">
                                Human Centric
                            </div>
                            <div className="px-4 py-2 border border-neon/30 rounded-full text-neon text-sm font-mono uppercase tracking-widest">
                                Data Driven
                            </div>
                        </div>
                    </div>

                    {/* Visual Side: The Design-Code Bridge (Interactive Slider) */}
                    <div className="relative h-[500px] w-full bg-[#0F1115] rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center p-8 group">

                        <div className="absolute top-4 right-4 text-[10px] font-mono text-mist uppercase tracking-widest opacity-50">
                            Interactive: Design vs. Implementation
                        </div>

                        <InteractiveBridge />

                    </div>
                </div>
            </div>
        </section>
    );
};

const InteractiveBridge = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    const handleTouchMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-lg h-96 rounded-xl overflow-hidden cursor-col-resize select-none shadow-2xl border border-white/10 bg-void"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            {/* Layer 1: DESIGN (Figma View) - Bottom Layer */}
            <div className="absolute inset-0 bg-[#1e1e1e] flex items-center justify-center">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />

                {/* Figma Overlays */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 text-[10px] text-pink-500 font-mono">Frame 429</div>
                    <div className="border border-pink-500 box-content">
                        <FlightTripCard />
                    </div>
                    {/* Measurement Lines */}
                    <div className="absolute top-0 bottom-0 -right-4 w-4 border-l border-r border-pink-500/30 flex items-center justify-center"><span className="text-[8px] text-pink-500 -rotate-90">380</span></div>
                </div>
            </div>

            {/* Layer 2: CODE (Implementation) - Top Layer (Clipped) */}
            <div
                className="absolute inset-0 bg-[#050505] flex items-center justify-center border-r border-neon/50 shadow-[0_0_30px_rgba(0,255,148,0.1)]"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
                <div className="relative font-mono text-xs leading-relaxed text-blue-300 p-8 w-full h-full flex flex-col justify-center">
                    <span className="text-gray-600">{'// FlightTrip.tsx'}</span>
                    <div><span className="text-purple-400">export const</span> <span className="text-yellow-300">FlightTripCard</span> = () ={'>'} {'{'}</div>
                    <div className="pl-4"><span className="text-purple-400">return</span> (</div>

                    <div className="pl-8 text-white">
                        {'<'}<span className="text-yellow-300">div</span> <span className="text-blue-300">className</span>="bg-[#1C1C1E]"{'>'}
                    </div>
                    <div className="pl-12">
                        {'<'}<span className="text-yellow-300">HeaderImage</span> {'/>'}
                    </div>
                    <div className="pl-12">
                        {'<'}<span className="text-yellow-300">div</span> <span className="text-blue-300">className</span>="p-5"{'>'}
                    </div>
                    <div className="pl-16">
                        {'<'}<span className="text-yellow-300">TripTitle</span> <span className="text-blue-300">title</span>="San Francisco" {'/>'}
                    </div>
                    <div className="pl-16">
                        {'<'}<span className="text-yellow-300">FlightItinerary</span>
                    </div>
                    <div className="pl-20"><span className="text-blue-300">outbound</span>="SYD → JFK"</div>
                    <div className="pl-20"><span className="text-blue-300">inbound</span>="JFK → SYD"</div>
                    <div className="pl-16">{'/>'}</div>
                    <div className="pl-16">
                        {'<'}<span className="text-yellow-300">PriceSummary</span>
                    </div>
                    <div className="pl-20"><span className="text-blue-300">total</span>="$560.00"</div>
                    <div className="pl-16">{'/>'}</div>
                    <div className="pl-12">{'</div>'}</div>
                    <div className="pl-8 text-white">{'</div>'}</div>
                    <div className="pl-4">)</div>
                    <div>{'}'}</div>
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-[1px] bg-neon cursor-col-resize z-20 shadow-[0_0_20px_rgba(0,255,148,0.8)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-neon rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,255,148,0.6)] text-[#050505]">
                    <div className="w-1 h-3 bg-[#050505]/20 rounded-full" />
                </div>
            </div>

        </div>
    );
};

// Flight Content - Custom Design Implementation
const FlightTripCard = () => (
    <div className="w-[360px] bg-[#1C1C1E] rounded-2xl overflow-hidden font-sans border border-white/10 shadow-2xl text-white">

        {/* Header Illustration Area */}
        <div className="h-40 bg-[#1C1C1E] relative flex items-center justify-center overflow-hidden border-b border-white/5">
            {/* Abstract Plane Illustration Placeholder */}
            <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0 text-gray-700">
                <path fill="#2C2C2E" d="M48.5,108.5 C48.5,108.5 73.5,82.5 106.5,75.5 C139.5,68.5 281.5,41.5 306.5,45.5 C331.5,49.5 356.5,66.5 316.5,82.5 L129.5,138.5 L97.5,152.5 L48.5,108.5 Z" />
                <path fill="#FF3B30" d="M96.5,77.5 L108.5,116.5 L92.5,123.5 L78.5,84.5 Z" />
                {/* Clouds */}
                <circle cx="50" cy="90" r="30" fill="#3A3A3C" />
                <circle cx="90" cy="80" r="35" fill="#3A3A3C" />
                <circle cx="330" cy="50" r="20" fill="#3A3A3C" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] to-transparent/10" />
        </div>

        <div className="p-5 space-y-6">

            {/* Title Section */}
            <div>
                <h3 className="text-xl font-semibold mb-1">Trip to San Francisco (Sep 2024)</h3>
                <p className="text-gray-400 text-sm">Starts in 23 days</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Flights Section */}
            <div className="space-y-5">
                {/* Outbound */}
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <div className="text-xs text-gray-500 mb-1">Outbound</div>
                        <div className="flex items-center gap-2">
                            <QantasLogo />
                            <span className="font-medium text-sm">SYD <span className="text-gray-500 mx-1">→</span> JFK</span>
                            <span className="text-xs text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">Nonstop</span>
                        </div>
                    </div>
                    <div className="text-right space-y-1">
                        <div className="text-xs text-gray-500 mb-1">Sun, Jul 13</div>
                        <div className="font-medium text-sm">5:25 PM – 11:56 PM</div>
                    </div>
                </div>

                {/* Inbound */}
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <div className="text-xs text-gray-500 mb-1">Inbound</div>
                        <div className="flex items-center gap-2">
                            <QantasLogo />
                            <span className="font-medium text-sm">JFK <span className="text-gray-500 mx-1">→</span> SYD</span>
                            <span className="text-xs text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">Nonstop</span>
                        </div>
                    </div>
                    <div className="text-right space-y-1">
                        <div className="text-xs text-gray-500 mb-1">Wed, Jul 15</div>
                        <div className="font-medium text-sm">10:11 AM – 12:42 AM</div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Price Summary */}
            <div className="space-y-3">
                <h4 className="font-medium">Price summary</h4>

                <div className="flex justify-between text-sm text-gray-400">
                    <span>Flight fare</span>
                    <span className="text-white">$520.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                    <span>Taxes and fees</span>
                    <span className="text-white">$40.00</span>
                </div>

                <div className="h-px bg-white/10 my-2" />

                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-sm text-gray-400">Total price</div>
                        <button className="text-xs text-white underline mt-1 underline-offset-2">Details</button>
                    </div>
                    <span className="text-2xl font-bold">$560.00</span>
                </div>
            </div>

        </div>
    </div>
);

const QantasLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#E40000" />
        <path d="M15 8L6 14L9 16L18 8H15Z" fill="white" />
    </svg>
);

export default Philosophy;
