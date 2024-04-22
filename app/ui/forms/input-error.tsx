export default function InputError({
  id,
  error,
}: {
  id: string;
  error: string[] | undefined;
}) {
  return (
    <div id={id}>
      {error &&
        error.map((err: string) => {
          return (
            <span className="pl-2 text-sm text-red-500" key={err}>
              {err}
            </span>
          );
        })}
    </div>
  );
}
