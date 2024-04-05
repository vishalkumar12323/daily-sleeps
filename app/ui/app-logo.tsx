"use client";
export function Logo() {
    return (
        <>
            <div className="w-full h-full flex gap-1 flex-col">
              <div className="w-full h-full shadow-md bg-gradient-to-r from-yellow-600 to-red-600 rounded-md hover:from-yellow-700 hover:to-red-700"></div>
              <div className="w-full h-full shadow-md bg-gradient-to-r from-sky-400 to-blue-500 rounded-md hover:from-sky-500 hover:to-blue-600"></div>
            </div>
            <div className="w-full h-full flex flex-col gap-1">
              <div className="w-full h-full shadow-md bg-gradient-to-r from-sky-400 to-blue-500 rounded-md hover:from-sky-500 hover:to-blue-600"></div>
              <div className="w-full h-full shadow-md bg-gradient-to-r from-yellow-600 to-red-600 rounded-md hover:from-yellow-700 hover:to-red-700"></div>
            </div>
        </>
    )
}
