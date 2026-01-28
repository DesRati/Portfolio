'use client';

import { motion } from 'framer-motion';

const TestimonialBlock = ({ highlight, quote, role }) => (
    <div className="flex flex-col gap-4 p-8 border-l border-white/10 hover:border-neon/50 transition-colors">
        <h4 className="font-display text-2xl text-ice">{highlight}</h4>
        <p className="font-sans text-mist text-lg leading-relaxed">
            "{quote}"
        </p>
        <div className="text-xs font-mono text-neon uppercase tracking-widest mt-2">
            — {role}
        </div>
    </div>
);

const Impact = () => {
    return (
        <section className="py-32 bg-void border-t border-white/5">
            <div className="container mx-auto px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <h2 className="font-display text-4xl md:text-6xl text-ice">
                        IMPACT & <span className="text-neon">FEEDBACK</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                    <TestimonialBlock
                        highlight="Product Strategy"
                        quote="I cannot thank you enough for leading the RBAC designs. You're the acting PM for this project at this point."
                        role="Senior Product Manager"
                    />
                    <TestimonialBlock
                        highlight="Collaboration"
                        quote="She brings a new POV which engineering folks miss. Customer-like thinking helps a lot. It's so easy to approach and work with her."
                        role="Senior Engineer"
                    />
                    <TestimonialBlock
                        highlight="Craft"
                        quote="Her designs are top notch. Rati is very creative and researches patterns in other products to integrate innovative designs."
                        role="Tech Lead"
                    />
                    <TestimonialBlock
                        highlight="Ownership"
                        quote="Rati has taken ownership to drive initial discussions... She owns designs end to end. A pleasure to work with."
                        role="Frontend Engineer"
                    />
                </div>
            </div>
        </section>
    );
};

export default Impact;
