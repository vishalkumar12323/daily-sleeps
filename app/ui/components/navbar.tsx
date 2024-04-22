import Link from "next/link";
import UserProfile from "./user-profile";

export default function Navbar() {
  return (
    <nav className="w-full py-3 px-5 h-16 max-w-screen-lg mx-auto">
      <div className="flex justify-between items-center h-full">
        <div className="flex gap-6 items-center">
          <Link
            href="/"
            className="uppercase text-[1.3rem] font-medium select-none"
          >
            sleepee.com
          </Link>
          <Link href="/home/entries" className="capitalize font-normal">
            new entry
          </Link>
        </div>
        <div className="flex gap-6 flex-col relative">
          <UserProfile />
        </div>
      </div>
    </nav>
  );
}
