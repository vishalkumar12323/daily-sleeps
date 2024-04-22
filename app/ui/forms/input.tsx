"use client";
import clsx from "clsx";

const inputClass = `w-full h-[3rem] py-2 px-2 border rounded-md outline-none shadow`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly errormessage?: string[];
}

export default function Input({
  type,
  className,
  errormessage,
  ...rest
}: InputProps) {
  return (
    <input
      type={type}
      {...rest}
      className={clsx(inputClass, className, {
        "border-red-500": errormessage,
        "border-black": !errormessage,
      })}
      autoComplete="off"
    />
  );
}
