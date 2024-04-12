"use client";
import AnalyticsSkeleton from "@/app/ui/skeletons/AnalyticsSkeleton";

export default function Analytic() {
  const time = "06-04-2024";
  return (
    <main className="w-full">
      <table className="w-full">
        <thead>
          <tr className=" p-4">
            <td className="text-center p-3">Days</td>
            <td className="text-center p-3">Time Of Sleep</td>
            <td className="text-center p-3">Wakeup Time</td>
            <td className="text-center p-3">Total Duration</td>
          </tr>
        </thead>
        <tbody>
          <tr className=" text-center">
            <td
              content="Sun"
              className={`p-2 w-fit h-full text-center hover:before:w-0 hover:before:absolute hover:before:top-[27px] hover:before:left-[28px] hover:before:content-[''] hover:before:h-0 hover:before:border-x-[6px] hover:before:border-x-transparent hover:before:border-b-[8px] hover:before:border-b-sky-500 after:text-[0.7rem] after:rounded-md  hover:after:content-[attr(content)] hover:after:flex hover:after:items-center hover:after:justify-center hover:after:absolute hover:after:top-[83%] hover:after:left-2 hover:after:bg-sky-500 hover:after:w-3/4 hover:after:h-3/4 hover:after:text-white relative`}
            >
              <span className="relative cursor-default">1/7</span>
            </td>
            <td
              content={time}
              className={`p-2 w-fit h-full text-center hover:before:content-[''] hover:before:absolute hover:before:h-0 hover:before:w-0 hover:before:border-x-[6px] hover:before:border-x-transparent hover:before:border-b-[8px] hover:before:border-b-sky-500 hover:before:top-[27px] hover:before:left-[80px] after:text-[0.7rem] after:rounded-md  hover:after:content-[attr(content)] hover:after:flex hover:after:items-center hover:after:justify-center hover:after:absolute hover:after:top-[83%] hover:after:left-8 hover:after:bg-sky-500 hover:after:w-3/4 hover:after:h-3/4 hover:after:text-white relative`}
            >
              <span className="relative cursor-default">10:00PM</span>
            </td>
            <td
              content="04-05-2024"
              className={`p-2 w-fit h-full text-center hover:before:content-[''] hover:before:absolute hover:before:h-0 hover:before:w-0 hover:before:border-x-[6px] hover:before:border-x-transparent hover:before:border-b-[8px] hover:before:border-b-sky-500 hover:before:top-[27px] hover:before:left-[80px] after:text-[0.7rem] after:rounded-md  hover:after:content-[attr(content)] hover:after:flex hover:after:items-center hover:after:justify-center hover:after:absolute hover:after:top-[83%] hover:after:left-8 hover:after:bg-sky-500 hover:after:w-3/4 hover:after:h-3/4 hover:after:text-white relative`}
            >
              <span className="relative cursor-default">06:30PM</span>
            </td>
            <td
              content="120 Mintus"
              className={`p-2 w-fit h-full text-center hover:before:content-[''] hover:before:absolute hover:before:h-0 hover:before:w-0 hover:before:border-x-[6px] hover:before:border-x-transparent hover:before:border-b-[8px] hover:before:border-b-sky-500 hover:before:top-[27px] hover:before:left-[80px] after:text-[0.7rem] after:rounded-md  hover:after:content-[attr(content)] hover:after:flex hover:after:items-center hover:after:justify-center hover:after:absolute hover:after:top-[83%] hover:after:left-8 hover:after:bg-sky-500 hover:after:w-3/4 hover:after:h-3/4 hover:after:text-white relative`}
            >
              <span className="relative cursor-default">7:00H</span>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
