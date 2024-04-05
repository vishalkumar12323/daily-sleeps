"use client";

import Analytic from "@/app/ui/components/analytics";
import Graph from "@/app/ui/components/graph";

export default function Page() {
  return (
    <section className="flex items-start flex-col md:flex-row mt-5 md:mt-10 h-[80vh] gap-4">
      <div className="w-1/2 h-full flex items-center justify-center">
        <Graph />
      </div>
      <div className="h-[90%] w-[2px] bg-sky-500"></div>
      <div className="w-1/2 h-full flex items-start justify-center">
        <Analytic />
      </div>
    </section>
  );
}
