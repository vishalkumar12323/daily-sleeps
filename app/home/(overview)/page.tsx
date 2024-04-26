import Analytic from "@/app/ui/components/analytics";
import Graph from "@/app/ui/components/graph";
import { fetchUserSleepRecord } from "@/app/lib/data";
import { auth } from "@/auth";

export default async function HomePage(): Promise<JSX.Element> {
  const session = await auth();
  const userSleepData = await fetchUserSleepRecord(session?.user?.id as string);

  return (
    <section className="max-w-screen-lg mx-auto flex items-start flex-col md:flex-row my-3 md:my-10 h-[90vh] gap-4">
      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gray-50 shadow rounded-md">
        <Graph userSleepData={userSleepData} />
      </div>
      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gray-50 rounded-md shadow">
        <Analytic userSleepData={userSleepData} />
      </div>
    </section>
  );
}
