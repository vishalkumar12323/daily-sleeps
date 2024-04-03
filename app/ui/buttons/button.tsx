import clsx from "clsx";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export function Button({children, className, ...rest}: ButtonProps) {
    return (
        <button {...rest} className={clsx(`bg-sky-400 py-[0.6rem] px-16 capitalize rounded-md`, className)}>
            {children}
        </button>
    )
}