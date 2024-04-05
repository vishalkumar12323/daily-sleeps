"use client";

import Analytic from "@/app/ui/components/analytics";
import Graph from "@/app/ui/components/graph";

export default function Page() {
    return <section className="flex items-center flex-col md:flex-row mt-5 md:mt-10 h-[75vh]">
            <div className="w-1/2 h-full flex items-end justify-center">
             <Graph/>
            </div>
            <div className="w-1/2 h-full flex items-end justify-center">
                <Analytic/>
            </div>
        </section>
};