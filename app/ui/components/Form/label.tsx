"use client";

interface InputLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}
export default function InputLabel(props: InputLabelProps) {
  return <label {...props}>{props.children}</label>;
}
