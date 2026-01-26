import { Oswald, Manrope } from 'next/font/google'
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

export const metadata = {
    title: 'RATI AGARWAL [2026] | PRODUCT DESIGN',
    description: 'Archive of Rati Agarwal. 5 Years Experience. Designing systems for the future.',
    themeColor: '#000000',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${manrope.variable} ${oswald.variable}`}>
            <body className="font-sans antialiased bg-void text-ice selection:bg-neon selection:text-void overflow-x-hidden">
                <CustomCursor />
                {children}
            </body>
        </html>
    )
}
