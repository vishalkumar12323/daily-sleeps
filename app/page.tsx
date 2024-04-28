import Analytic from "@/app/ui/components/analytics";
import Graph from "@/app/ui/components/graph";
import { fetchUserSleepRecord } from "@/app/lib/data";
import { auth } from "@/auth";

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
        <section className="max-w-screen-lg mx-auto flex items-center justify-center my-3 bg-gray-50 h-[90vh] shadow">
          <h3 className="text-center text-[2.50rem] font-medium w-2/3 capitalize">
            welcome to daily-sleeps <br />{" "}
            <span className="text-4xl">make your day enjoyable</span> <br />{" "}
            <span className="text-4xl">and sleep batter</span>
          </h3>
        </section>
      )}
    </>
  );
}
