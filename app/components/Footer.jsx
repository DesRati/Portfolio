'use client';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { name: 'LINKEDIN', href: 'https://in.linkedin.com/in/rati-agarwal-464a041b3' },
        { name: 'X / TWITTER', href: 'https://x.com/RatiAgarwal13' },
        { name: 'MAIL', href: 'mailto:rati3198@gmail.com' },
        { name: 'CALL', href: 'tel:8433229711' }
    ];

    return (
        <footer className="py-20 bg-void border-t border-white/5">
            <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between md:items-end gap-12 md:gap-0">
                <div>
                    <h2 className="font-display text-5xl md:text-8xl text-ice leading-[0.8] mb-8">
                        LET'S <br />
                        <span className="text-neon">TALK</span>.
                    </h2>
                    <p className="font-sans text-mist text-lg">
                        BENGALURU • INDIA
                    </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-6">
                    <div className="flex flex-wrap gap-8">
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
                        © {currentYear} RATI AGARWAL.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
