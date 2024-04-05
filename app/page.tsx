import {SplashScreen} from "@/app/ui/splash-screen";
import Image from "next/image"

export default function Home() {
  return (
        <main className="w-full h-[100vh] flex items-center gap-5">
          <div className="w-[25%] bg-black h-full p-3">
              <SplashScreen/>
          </div>
          <div className="relative">
            <Image src="/Daily-Sleeps.jpg" width={850} height={600} alt="daily-sleeps-screenshot" className="ml-5"/>
          </div>
        </main>
  )
}