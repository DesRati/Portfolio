'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-void flex flex-col items-center justify-center p-8 text-center mt-[-10vh]">
            <h2 className="font-display text-4xl md:text-6xl text-ice mb-6">Something went wrong.</h2>
            <p className="font-mono text-mist mb-12 max-w-md">{error?.message || "An unexpected error occurred while rendering this page."}</p>
            <button
                onClick={() => reset()}
                className="px-8 py-4 bg-neon text-void font-bold rounded-full hover:scale-105 transition-transform"
            >
                Try again
            </button>
        </div>
    );
}
