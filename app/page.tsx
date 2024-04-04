import {SplashScreen} from "@/app/ui/splash-screen";
import Image from "next/image"

export default function Home() {
  return (
        <main className="w-full flex items-center gap-5">
          <div className="w-[25%] bg-black h-full p-3">
              <SplashScreen/>
          </div>
          <div className="relative">
            <Image src="/daily-sleeps-white-screenshot.png" width={800} height={600} alt="daily-sleeps-white-screenshot"/>
            <Image src="/daily-sleeps-black-screenshot.png" width={800} height={600} alt="daily-sleeps-white-screenshot" className="absolute top-5 left-5"/>
          </div>
        </main>
  )
}