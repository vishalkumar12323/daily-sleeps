import { graphData } from "@/app/lib/data";

export default function Analytic() {
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
          <tr className=" p-4">
            <td className="p-3 text-center">1/7</td>
            <td className="p-3 text-center">10:00PM</td>
            <td className="p-3 text-center">10:00AM</td>
            <td className="p-3 text-center">7:00H</td>
          </tr>
          <tr className=" p-4">
            <td className="p-3 text-center">2/7</td>
            <td className="p-3 text-center">10:00PM</td>
            <td className="p-3 text-center">10:00AM</td>
            <td className="p-3 text-center">7:00H</td>
          </tr>
          <tr className=" p-4">
            <td className="p-3 text-center">3/7</td>
            <td className="p-3 text-center">10:00PM</td>
            <td className="p-3 text-center">10:00AM</td>
            <td className="p-3 text-center">7:00H</td>
          </tr>
          <tr className=" p-4">
            <td className="p-3 text-center">4/7</td>
            <td className="p-3 text-center">10:00PM</td>
            <td className="p-3 text-center">10:00AM</td>
            <td className="p-3 text-center">7:00H</td>
          </tr>
          <tr className=" p-4">
            <td className="p-3 text-center">5/7</td>
            <td className="p-3 text-center">10:00PM</td>
            <td className="p-3 text-center">10:00AM</td>
            <td className="p-3 text-center">7:00H</td>
          </tr>
          <tr className=" p-4">
            <td className="p-3 text-center">6/7</td>
            <td className="p-3 text-center">10:00PM</td>
            <td className="p-3 text-center">10:00AM</td>
            <td className="p-3 text-center">7:00H</td>
          </tr>
          <tr className=" p-4">
            <td className="p-3 text-center">7/7</td>
            <td className="p-3 text-center">10:00PM</td>
            <td className="p-3 text-center">10:00AM</td>
            <td className="p-3 text-center">7:00H</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
