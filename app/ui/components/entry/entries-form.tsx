"use client";
import { Button } from "../button";

export default function EntriesForm() {
  return (
    <section className="w-full h-[90vh] flex items-center justify-center">
      <div className="w-1/2 h-fit p-5 bg-[#222121]">
        <h2 className="text-xl md:text-2xl capitalize px-2">
          create new entry
        </h2>
        <form action="" className="py-1 px-2 w-full">
          <div className="w-full py-2">
            <div>
              <label htmlFor="date">Choose Date</label>
            </div>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full text-black py-2 px-2 focus:outline-sky-500"
            />
          </div>
          <div className="w-full py-2">
            <div>
              <label htmlFor="s-time">Sleep Time</label>
            </div>
            <input
              type="time"
              name="s-time"
              id="s-time"
              className="w-full text-black py-2 px-2 focus:outline-sky-500"
            />
          </div>
          <div className="w-full py-2">
            <div>
              <label htmlFor="w-time">Wakeup Time</label>
            </div>
            <input
              type="time"
              name="w-time"
              id="w-time"
              className="w-full text-black py-2 px-2 focus:outline-sky-500"
            />
          </div>
          <div className="w-full py-2">
            <Button className="px-10">create</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
