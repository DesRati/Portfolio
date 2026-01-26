import clsx from 'clsx';

export const Heading = ({ level = 1, children, className, ...props }) => {
    const Tag = `h${level}`;

    const styles = {
        1: "font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6",
        2: "font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4",
        3: "font-display text-2xl md:text-3xl font-semibold text-white mb-3",
        4: "font-display text-xl md:text-2xl font-medium text-white mb-2"
    };

    return (
        <Tag className={clsx(styles[level], className)} {...props}>
            {children}
        </Tag>
    );
};

export const Text = ({ children, className, variant = 'body', ...props }) => {
    const styles = {
        body: "font-sans text-base md:text-lg text-muted leading-relaxed",
        small: "font-sans text-sm text-muted/80",
        large: "font-sans text-lg md:text-xl text-fg-dark leading-relaxed font-light"
    };

    return (
        <p className={clsx(styles[variant], className)} {...props}>
            {children}
        </p>
    );
};
