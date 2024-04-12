"use client";

import Analytic from "@/app/ui/components/analytics";
import Graph from "@/app/ui/components/graph";

export default function Page() {
  return (
    <section className="flex items-start flex-col md:flex-row my-5 md:my-10 h-[80vh] gap-4">
      <div className="w-1/2 h-full flex items-center justify-center bg-gray-50">
        <Graph />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center bg-gray-50 rounded-md">
        <Analytic />
      </div>
    </section>
  );
}
