export default function FeildError({
  error,
  id,
}: {
  error: string[] | undefined;
  id: string;
}) {
  return (
    <div id={id}>
      {error && <p className="text-sm text-red-500 pl-1 md:pl-2">{error}</p>}
    </div>
  );
}
