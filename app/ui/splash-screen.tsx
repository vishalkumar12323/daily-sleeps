import Image from "next/image";
import {Button} from "@/app/ui/buttons/button"
export function SplashScreen() {
    return (
        <>
            <Image src="/Frases.jfif" alt="sleeping gril image" width={250} height={100} className=""/>
            <div className="mt-4">
              <h1 className="text-3xl font-medium">Sleepee<span className="text-sky-400">.</span>com</h1>
            </div>
            <div className="mt-3">
              <p className="text-[1rem] font-light capitalize">Welcome to <strong className="text-sky-400">sleepee</strong> track your sleeping record </p>
            </div>

            <div className="mt-4 flex flex-col gap-2">
                <Button children="login" aria-label="login-button" className="hover:bg-sky-500 transition-colors w-fit px-[4.2rem]"/>
                <Button children="signin" aria-label="login-button" className="hover:bg-sky-500 transition-colors w-fit"/>
            </div>
        </>
    )
}