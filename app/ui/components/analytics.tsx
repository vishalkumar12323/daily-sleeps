"use client";
import { graphData } from "@/app/lib/data";

export default function Analytic() {
  const time = "10:00PM";
  return (
    <main className="w-full">
      <table className="w-full ">
        <thead>
          <tr className=" p-4">
            <td className="text-center p-3"></td>
            <td className="text-center p-3">Time Of Sleep</td>
            <td className="text-center p-3">Wakeup Time</td>
            <td className="text-center p-3">Total Duration</td>
          </tr>
        </thead>
        <tbody>
          <tr className=" p-4  text-center">
            <td className="p-3 text-center">1/7</td>
            <td
              className={`p-2 text-center after:rounded-md after:waving-trans hover:after:content-['${time}'] hover:after:flex hover:after:items-center hover:after:justify-center hover:after:absolute hover:after:top-[80%] hover:after:left-[80%] hover:after:bg-sky-500 hover:after:w-full hover:after:h-full relative inline-block`}
            >
              <span className="relative cursor-default">10:00PM</span>
            </td>
            <td className="p-2 text-center">10:00AM</td>
            <td className="p-2 text-center">7:00H</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
