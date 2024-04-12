interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: string;
}

export default function Label({ children, ...rest }: LabelProps) {
  return (
    <label {...rest} className="mb-1 text-xl capitalize">
      {children}
    </label>
  );
}
