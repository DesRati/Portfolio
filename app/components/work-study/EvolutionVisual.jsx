'use client';

export const EvolutionVisual = () => (
    <div className="w-full relative bg-charcoal border border-white/10 rounded-xl p-8 md:p-12 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 relative z-10 w-full">
            <div className="p-6 border-l border-white/20 flex-1 min-w-0">
                <div className="text-xs font-mono text-red-400 mb-2 truncate">GENERATION 1</div>
                <div className="font-display text-2xl text-mist truncate">NativeBase</div>
                <div className="text-xs text-mist/50 mt-2 truncate">Runtime Heavy</div>
            </div>
            <div className="p-6 border-l border-neon flex-1 min-w-0">
                <div className="text-xs font-mono text-neon mb-2 truncate">GENERATION 2</div>
                <div className="font-display text-2xl text-ice truncate">Gluestack</div>
                <div className="text-xs text-mist mt-2 truncate">Heading + Zero Runtime</div>
            </div>
            <div className="p-6 border-l border-blue-400 flex-1 min-w-0">
                <div className="text-xs font-mono text-blue-400 mb-2 truncate">ECOSYSTEM</div>
                <div className="font-display text-2xl text-ice truncate">Market</div>
                <div className="text-xs text-mist mt-2 truncate">Premium Templates</div>
            </div>
        </div>
    </div>
);
