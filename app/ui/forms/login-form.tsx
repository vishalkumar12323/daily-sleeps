import Link from "next/link";
import Input from "./input";
import Label from "./label";
import Image from "next/image";

export default function LoginForm() {
  return (
    <section className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[40%] h-[70%] bg-gray-100 rounded-md p-3">
        <h3 className="text-2xl capitalize font-medium mt-3">Login</h3>

        <form action="" className="mt-5 w-full">
          <div className="py-3">
            <Label htmlFor="email">email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your email"
              aria-describedby="input-email"
              className="w-full py-2 px-2 rounded-md outline-none focus:border focus:border-gray-500 focus:bg-white focus:shadow-md transition-colors"
            />
          </div>
          <div className="py-2">
            <Label htmlFor="password">password</Label>
            <Input
              type="text"
              id="password"
              name="password"
              placeholder="password"
              aria-describedby="input-password"
              className="w-full py-2 px-2 rounded-md outline-none focus:border focus:border-gray-500 focus:bg-white focus:shadow-md transition-colors"
            />
          </div>
          <div className="py-3 mt-1">
            <Input
              type="submit"
              value="login"
              className="py-2 px-10 w-full rounded-md border border-gray-300  hover:border-gray-500 hover:bg-white hover:shadow-md transition-colors capitalize cursor-pointer"
            />
          </div>
          <div className="py-3 w-full">
            <Link
              href="#"
              className="py-2 text-center px-10 w-full rounded-md border border-gray-300  hover:border-gray-500 hover:bg-white hover:shadow-md transition-colors capitalize cursor-pointer flex justify-center items-center gap-2"
            >
              <Image
                src="/google.svg"
                width={20}
                height={20}
                alt="google icon"
              />{" "}
              countinue with google
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
