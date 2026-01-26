'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    href = '',
    onClick,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-dark-bg disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-accent text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]",
        secondary: "bg-transparent border border-dark-border text-white hover:bg-white/5 hover:border-accent/50 hover:text-accent",
        ghost: "bg-transparent text-muted hover:text-white hover:bg-white/5"
    };

    const Component = href ? motion(Link) : motion.button;

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
