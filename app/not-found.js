'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-void flex flex-col items-center justify-center p-8 text-center mt-[-10vh]">
            <h2 className="font-display text-4xl md:text-8xl text-ice mb-6 tracking-tighter">404</h2>
            <p className="font-sans text-xl text-mist mb-12 max-w-md italic">This page seems to have vanished into the void.</p>
            <Link
                href="/"
                className="px-8 py-4 border border-neon text-neon font-mono text-sm uppercase tracking-widest rounded-full hover:bg-neon hover:text-void transition-all"
            >
                Return Home
            </Link>
        </div>
    );
}
