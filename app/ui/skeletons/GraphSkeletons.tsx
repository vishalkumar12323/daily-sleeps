"use client";

export default function GraphSkeleton() {
  return (
    <div
      className={`w-full animate-pulse h-full flex items-end justify-start gap-10 bg-gray-100 rounded-md`}
    >
      <GraphBarLines height="300px" />
      <GraphBarLines height="250px" />
      <GraphBarLines height="330px" />
      <GraphBarLines height="370px" />
      <GraphBarLines height="280px" />
      <GraphBarLines height="300px" />
    </div>
  );
}

function GraphBarLines({ height }: { height?: string }) {
  return (
    <div
      style={{ height: height }}
      className={` w-[40px] bg-gray-200 rounded-tl-md rounded-tr-md`}
    ></div>
  );
}
