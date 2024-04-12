interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly inputfielderror?: string[] | undefined;
}

export default function Input({ type, className, ...rest }: InputProps) {
  return (
    <input type={type} {...rest} className={className} autoComplete="off" />
  );
}
