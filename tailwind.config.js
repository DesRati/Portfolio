/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
                display: ['var(--font-oswald)', 'sans-serif'],
            },
            colors: {
                // Bioluminescent Noir Palette
                void: '#000000', // Deepest black
                charcoal: '#0a0a0a', // Slightly lighter for cards
                neon: '#00FF94', // Electric Green
                ice: '#FFFFFF', // Pure White for text
                mist: '#A1A1AA', // Muted text
                glass: 'rgba(255, 255, 255, 0.05)',
            },
            animation: {
                'spotlight': 'spotlight 2s ease .75s 1 forwards',
                'grain': 'grain 8s steps(10) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                spotlight: {
                    '0%': { opacity: 0, transform: 'translate(-72%, -62%) scale(0.5)' },
                    '100%': { opacity: 1, transform: 'translate(-50%,-40%) scale(1)' },
                },
                grain: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '10%': { transform: 'translate(-5%, -10%)' },
                    '20%': { transform: 'translate(-15%, 5%)' },
                    '30%': { transform: 'translate(7%, -25%)' },
                    '40%': { transform: 'translate(-5%, 25%)' },
                    '50%': { transform: 'translate(-15%, 10%)' },
                    '60%': { transform: 'translate(15%, 0%)' },
                    '70%': { transform: 'translate(0%, 15%)' },
                    '80%': { transform: 'translate(3%, 35%)' },
                    '90%': { transform: 'translate(-10%, 10%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.text-stroke': {
                    '-webkit-text-stroke': '1px rgba(255, 255, 255, 0.2)',
                    'color': 'transparent',
                },
                '.text-stroke-neon': {
                    '-webkit-text-stroke': '1px #00FF94',
                    'color': 'transparent',
                },
                '.text-stroke-white': {
                    '-webkit-text-stroke': '1px #FFFFFF',
                    'color': 'transparent',
                },
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        }
    ],
}
