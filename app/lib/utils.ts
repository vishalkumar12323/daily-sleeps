import { FormattedSleepData } from "./definitions";

export function getSleepData(
  currentDate: string,
  sleepTime: string,
  wakeupTime: string
): FormattedSleepData {
  // Parse the currentDate string into a Date object
  const currentDateObj = new Date(currentDate);
  // Parse the sleepTime and wakeupTime strings into Date objects
  const sleepTimeObj = new Date(
    currentDateObj.getFullYear(),
    currentDateObj.getMonth(),
    currentDateObj.getDate(),
    ...sleepTime.split(":").map(Number)
  );
  const wakeupTimeObj = new Date(
    currentDateObj.getFullYear(),
    currentDateObj.getMonth(),
    currentDateObj.getDate() + 1,
    ...wakeupTime.split(":").map(Number)
  );

  // Calculate the total sleep duration in minutes
  let duration = wakeupTimeObj.getTime() - sleepTimeObj.getTime();
  let hours = Math.floor(duration / (1000 * 60 * 60));

  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

  // Calculate the total sleep duration in minutes
  const timeInMinutes = hours * 60 + minutes;

  // Format the current day and next day as strings
  const currentDay = currentDateObj
    .toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .split(",");
  const nextDay = wakeupTimeObj
    .toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .split(",");

  let period = "";
  if (hours >= 12) {
    period = "PM";
    hours -= 12;
  }
  if (hours === 0) {
    hours = 12;
  }

  // Return the current day, next day, and sleep duration as an object
  return {
    currentDay,
    nextDay,
    sleepDuration: { hours, minutes, timeInMinutes },
  };
}
