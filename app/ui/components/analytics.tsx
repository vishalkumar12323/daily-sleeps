"use client";
import { UserSleepData } from "@/app/lib/definitions";
import { getSleepData } from "@/app/lib/utils";

export default function Analytic({
  userSleepData,
}: {
  userSleepData: UserSleepData[] | undefined;
}) {
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
          {userSleepData ? (
            userSleepData.map((value, index) => {
              const {
                currentDay,
                nextDay,
                sleepDuration: { hours, minutes, timeInMinutes },
              } = getSleepData(
                value.date as string,
                value.sleepTime as string,
                value.wakeupTime as string
              );
              const nextDate = new Date(
                `${nextDay[0]} ${nextDay[1]} ${nextDay[2]} ${value.wakeupTime}:00 GMT+0530`
              );
              const newNextDate = `${nextDate.getFullYear()}-${
                nextDate.getMonth() + 1
              }-${nextDate.getDate()}`;

              return (
                <tr className=" text-center" key={value.id}>
                  <td
                    content={currentDay[0].substring(0, 3)}
                    className={`py-4 px-5 w-fit h-full text-center hover:before:w-0 hover:before:absolute hover:before:top-[30px] hover:before:left-[28px] hover:before:content-[''] hover:before:h-0 hover:before:border-x-[6px] hover:before:border-x-transparent hover:before:border-b-[8px] hover:before:border-b-black after:text-[0.6rem] after:rounded-full  hover:after:content-[attr(content)] hover:after:flex hover:after:items-center hover:after:justify-center hover:after:absolute hover:after:top-[66%] hover:after:left-[9px] md:hover:after:left- hover:after:bg-black hover:after:w-3/4 hover:after:h-[61%] hover:after:text-white relative`}
                  >
                    <span className="relative cursor-default">
                      {index + 1}/7
                    </span>
                  </td>
                  <td
                    content={value.date}
                    className={`py-4 px-5 w-fit h-full text-center hover:before:content-[''] hover:before:absolute hover:before:h-0 hover:before:w-0 hover:before:border-x-[6px] hover:before:border-x-transparent hover:before:border-b-[8px] hover:before:border-b-black hover:before:top-[30px] hover:before:left-[53px] md:hover:before:left-[65px] after:text-[0.6rem] after:rounded-full  hover:after:content-[attr(content)] hover:after:flex hover:after:items-center hover:after:justify-center hover:after:absolute hover:after:top-[66%] hover:after:left-6  md:hover:after:left-8 hover:after:bg-black hover:after:w-[60%] hover:after:h-[61%] hover:after:text-white relative`}
                  >
                    <span className="relative cursor-default">
                      {value.sleepTime}
                    </span>
                  </td>
                  <td
                    content={newNextDate}
                    className={`py-4 px-5 w-fit h-full text-center hover:before:content-[''] hover:before:absolute hover:before:h-0 hover:before:w-0 hover:before:border-x-[6px] hover:before:border-x-transparent hover:before:border-b-[8px] hover:before:border-b-black hover:before:top-[30px] hover:before:left-[53px] md:hover:before:left-[65px] after:text-[0.6rem] after:rounded-full  hover:after:content-[attr(content)] hover:after:flex hover:after:items-center hover:after:justify-center hover:after:absolute hover:after:top-[66%] hover:after:left-6  md:hover:after:left-8 hover:after:bg-black hover:after:w-[60%] hover:after:h-[61%] hover:after:text-white relative`}
                  >
                    <span className="relative cursor-default">
                      {value.wakeupTime}
                    </span>
                  </td>
                  <td
                    content={`${timeInMinutes}Minutes`}
                    className={`py-4 px-5 w-fit h-full text-center hover:before:content-[''] hover:before:absolute hover:before:h-0 hover:before:w-0 hover:before:border-x-[6px] hover:before:border-x-transparent hover:before:border-b-[8px] hover:before:border-b-black hover:before:top-[30px] hover:before:left-[53px] md:hover:before:left-[65px] after:text-[0.6rem] after:rounded-full  hover:after:content-[attr(content)] hover:after:flex hover:after:items-center hover:after:justify-center hover:after:absolute hover:after:top-[66%] hover:after:left-6  md:hover:after:left-8 hover:after:bg-black hover:after:w-[60%] hover:after:h-[61%] hover:after:text-white relative`}
                  >
                    <span className="relative cursor-default">
                      {hours}:{minutes}H
                    </span>
                  </td>
                </tr>
              );
            })
          ) : (
            <>
              <div className="w-full h-full flex justify-center item-center">
                <h1 className="text-xl font-medium text-center">
                  No Data Found
                </h1>
              </div>
            </>
          )}
        </tbody>
      </table>
    </main>
  );
}
