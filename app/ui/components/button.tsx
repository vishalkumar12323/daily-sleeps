"use client";
import clsx from "clsx";
import Link from "next/link";
import { Url } from "url";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        `capitalize rounded-md transition-colors bg-black hover:bg-slate-950 focus:bg-slate-900 shadow-md py-3 px-10 text-white`,
        className
      )}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  link,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link href={link} className={clsx(`capitalize font-normal`, className)} {...rest}>
      {" "}
      {children}{" "}
    </Link>
  );
}
