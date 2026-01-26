'use client';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { name: 'LINKEDIN', href: '#' },
        { name: 'X / TWITTER', href: '#' },
        { name: 'MAIL', href: 'mailto:contact@ratiagarwal.com' }
    ];

    return (
        <footer className="py-20 bg-void border-t border-white/5">
            <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between items-end">
                <div>
                    <h2 className="font-display text-8xl text-ice leading-[0.8] mb-8">
                        LET'S <br />
                        <span className="text-neon">TALK</span>.
                    </h2>
                    <p className="font-sans text-mist text-lg">
                        BENGALURU • INDIA
                    </p>
                </div>

                <div className="flex flex-col items-end gap-6 mt-12 md:mt-0">
                    <div className="flex gap-8">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-mono text-sm text-mist hover:text-neon transition-colors tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="text-mist/50 text-xs font-mono">
                        © {currentYear} RATI AGARWAL. ARCHIVE.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
