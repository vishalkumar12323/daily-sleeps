"use client";
import clsx from "clsx";
interface InputProp extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly validationerror?: string[] | undefined;
}
export default function Input({ type, className, ...rest }: InputProp) {
  return (
    <input
      {...rest}
      type={type}
      className={clsx(
        `w-full py-2 px-2 outline-none border border-sky-300 text-black focus:border focus:border-sky-500 rounded-md`,
        {
          "border border-red-500": rest.validationerror,
        }
      )}
    />
  );
}
