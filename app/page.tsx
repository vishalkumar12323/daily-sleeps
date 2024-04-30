import Analytic from "@/app/ui/components/analytics";
import Graph from "@/app/ui/components/graph";
import { fetchUserSleepRecord } from "@/app/lib/data";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { auth } from "@/auth";
import { ButtonLink } from "./ui/components/button";

export default async function HomePage() {
  const session = await auth();
  const userSleepData = await fetchUserSleepRecord(session?.user?.id as string);
  return (
    <>
      {userSleepData && session ? (
        <section className="max-w-screen-lg mx-auto flex items-start flex-col md:flex-row my-3 md:my-10 h-[90vh] gap-4">
          <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gray-50 shadow rounded-md">
            {userSleepData && <Graph userSleepData={userSleepData} />}
          </div>
          <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gray-50 rounded-md shadow">
            {userSleepData && <Analytic userSleepData={userSleepData} />}
          </div>
        </section>
      ) : (
        <section className="max-w-screen-lg mx-auto flex items-center justify-center flex-col my-3 bg-gray-50 h-[90vh] shadow">
          <h3 className="text-center text-[2.50rem] font-medium w-2/3 capitalize">
            welcome to daily-sleeps make <br /> your day more expensive <br />{" "}
            and sleep better.
          </h3>

          <ButtonLink
            link="/login"
            className="mt-5 capitalize rounded-md transition-colors bg-black hover:bg-slate-950 focus:bg-slate-900 shadow-md py-3 px-12 text-xl text-white flex gap-2"
          >
            Login
            <ArrowLongRightIcon width={30} />
          </ButtonLink>
        </section>
      )}
    </>
  );
}
