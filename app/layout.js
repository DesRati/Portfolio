import { Oswald, Manrope, Architects_Daughter } from 'next/font/google'
import CustomCursor from './components/CustomCursor'
import './globals.css'

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
})

const oswald = Oswald({
    subsets: ['latin'],
    variable: '--font-oswald',
    display: 'swap',
    weight: ['200', '400', '500', '700'], // Light to Bold for editorial feel
})

const handdrawn = Architects_Daughter({
    subsets: ['latin'],
    variable: '--font-handdrawn',
    weight: '400',
    display: 'swap',
})

export const metadata = {
    title: 'Rati Agarwal',
    description: 'Archive of Rati Agarwal. 5 Years Experience. Designing systems for the future.',
    themeColor: '#000000',
    icons: {
        icon: '/favicon.svg',
    },
    openGraph: {
        title: 'Rati Agarwal',
        description:
            'Archive of Rati Agarwal. 5 Years Experience. Designing systems for the future.',
        url: 'https://ratiagarwal.vercel.app',
        siteName: 'Rati Agarwal',
        images: [
            {
                url: '/logo.svg',
                width: 1200,
                height: 630,
                alt: 'Rati Agarwal - Product Designer',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rati Agarwal',
        description:
            'Archive of Rati Agarwal. 5 Years Experience. Designing systems for the future.',
        images: ['/logo.svg'],
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${manrope.variable} ${oswald.variable} ${handdrawn.variable}`}>
            <body className="font-sans antialiased bg-void text-ice selection:bg-neon selection:text-void overflow-x-hidden">
                <CustomCursor />
                {children}
            </body>
        </html>
    )
}
