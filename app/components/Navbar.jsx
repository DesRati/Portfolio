'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const navLinks = [
        { name: 'Work', href: '#work' },
        { name: 'About', href: '#about' },
        { name: 'Philosophy', href: '#philosophy' },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-card border-t-0 border-x-0 rounded-none' : 'py-6 bg-transparent border-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="group relative z-10 block">
                    <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                        {/* Subtle neon glow behind logo on hover */}
                        <div className="absolute inset-0 bg-neon/20 blur-md rounded-full scale-0 group-hover:scale-150 transition-transform duration-300" />
                        <Image
                            src="/logo.png"
                            alt="Rati Agarwal"
                            fill
                            className="object-contain relative z-10"
                        />
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-sans text-sm text-mist hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    ))}
                    <Button variant="primary" href="mailto:contact@ratiagarwal.com" className="!py-2 !px-4 text-sm hover:!bg-neon hover:!text-void border-none">
                        Let's Talk
                    </Button>
                </nav>
            </Container>
        </motion.header>
    );
};

export default Navbar;
