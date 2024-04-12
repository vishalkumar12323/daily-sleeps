"use client";
import { submitEntries } from "@/app/lib/actions";

export default function EntriesForm() {
  return (
    <section className="flex justify-center items-center w-full h-[75vh] p-2">
      <div className="bg-gray-100 w-2/4 h-full rounded-md">
        <div className="pt-8 px-4">
          <h3 className="text-2xl font-medium capitalize">create new entry</h3>
          <form action={submitEntries} className="w-full mt-3">
            <div className="w-full my-4">
              <label htmlFor="date" className="py-1">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="w-full py-2 px-2 rounded-md outline-none transition focus:shadow-md focus:border focus:border-gray-500"
                required
              />
            </div>
            <div className="w-full my-2">
              <label htmlFor="sleep-time" className="py-1">
                Sleep Time
              </label>
              <input
                type="time"
                name="sleep-time"
                id="sleep-time"
                className="w-full py-2 px-2 rounded-md outline-none transition focus:shadow-md focus:border focus:border-gray-500"
                required
              />
            </div>
            <div className="w-full my-4">
              <label htmlFor="wakeup-time" className="py-1">
                Wakeup Time
              </label>
              <input
                type="time"
                name="wakeup-time"
                id="wakeup-time"
                className="w-full py-2 px-2 rounded-md outline-none focus:shadow-md transition focus:border focus:border-gray-500"
                required
              />
            </div>
            <div className="my-2">
              <input
                type="submit"
                value="request"
                className="py-2 px-8 rounded-md border border-gray-300 hover:border-gray-500 hover:bg-white hover:shadow-md transition-colors capitalize cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
