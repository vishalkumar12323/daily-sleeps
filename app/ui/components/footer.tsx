import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-2 flex justify-center items-center flex-col gap-1 text-center border border-sky-400 rounded-md">
      <p>
        <Link href="/" className="text-sky-500">
          SLEEPEE.COM
        </Link>{" "}
        &copy;Copyright {new Date().getFullYear()}. All Right Reserverd{" "}
      </p>
      <p>
        Software developed by{" "}
        <Link href="#" className="text-sky-500">
          Vishal Kumar
        </Link>{" "}
      </p>
    </div>
  );
}
