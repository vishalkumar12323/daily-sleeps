interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}

export default function Label({ children, ...rest }: LabelProps) {
  return (
    <label {...rest} className="mb-2 text-sm capitalize">
      {children}
    </label>
  );
}
