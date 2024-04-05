import Link from "next/link";
import {Logo} from "@/app/ui/app-logo"
import {ArrowRightIcon } from "@heroicons/react/24/outline";
export function SplashScreen() {
    return (
        <>
          <div className="w-full h-52 flex gap-1">
            <Logo/>
          </div>
            <div className="mt-4">
              <h1 className="text-3xl font-medium">Sleepee.com</h1>
            </div>
            <div className="mt-2">
              <p className="text-[1rem] font-light capitalize">Welcome to <strong>sleepee</strong> track your sleeping record track your sleeping record </p>
            </div>

            <div className="mt-8 flex flex-col gap-2 w-fit absolute bottom-5">
              <Link href="#" className="flex items-center gap-1 py-[0.6rem] px-12 rounded-md bg-gradient-to-r from-yellow-600 to-red-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-red-500 transition-colors selection:bg-transparent">
                <span>Login</span> <ArrowRightIcon className="w-5 md:w-6"/>
              </Link>
              <Link href="#" className="flex items-center gap-1 py-[0.6rem] px-12 rounded-md bg-gradient-to-r from-yellow-600 to-red-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-red-500 transition-colors selection:bg-transparent">
                <span>Signin</span> <ArrowRightIcon className="w-5 md:w-6"/>
              </Link>
            </div>
        </>
    )
}