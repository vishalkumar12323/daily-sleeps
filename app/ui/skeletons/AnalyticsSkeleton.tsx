"use client";

export default function AnalyticsSkeleton() {
  return (
    <main className="w-full">
      <table className="w-full rounded-md">
        <thead>
          <tr className="p-4">
            <td className="text-center p-3">Days</td>
            <td className="text-center p-3">Time Of Sleep</td>
            <td className="text-center p-3">Wakeup Time</td>
            <td className="text-center p-3">Total Duration</td>
          </tr>
        </thead>
        <tbody className="w-full h-full">
          <TableRowSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
        </tbody>
      </table>
    </main>
  );
}

function TableRowSkeleton() {
  return (
    <tr className="text-center animate-pulse">
      <td className="p-3 w-fit h-full text-center relative">
        <span className="relative cursor-default block w-[3.75rem] h-10 bg-gray-200 rounded-md"></span>
      </td>
      <td className="p-3 w-fit h-full text-center relative">
        <span className="relative cursor-default block w-24 h-10 bg-gray-200   rounded-md"></span>
      </td>
      <td className="p-3 w-fit h-full text-center relative">
        <span className="relative cursor-default block w-24 h-10 bg-gray-200  rounded-md"></span>
      </td>
      <td className="p-3 w-fit h-full text-center relative">
        <span className="relative cursor-default block w-24 h-10 bg-gray-200  rounded-md"></span>
      </td>
    </tr>
  );
}
