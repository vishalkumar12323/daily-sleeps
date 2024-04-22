"use client";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        `capitalize rounded-md transition-colors bg-black hover:bg-slate-900 focus:bg-slate-900 shadow-md py-3 px-10 text-white`,
        className
      )}
    >
      {children}
    </button>
  );
}
