import clsx from 'clsx';

const Container = ({ children, className, ...props }) => {
    return (
        <div
            className={clsx(
                "mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;
