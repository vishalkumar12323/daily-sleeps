"use client";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export function Button({children, className, ...rest}: ButtonProps) {
    return (
        <button {...rest} className={clsx(`py-2 uppercase rounded-md bg-gradient-to-r from-yellow-600 to-red-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-red-500 transition-colors`, className)}>
            {children}
        </button>
    )
}