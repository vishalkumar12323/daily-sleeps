"use client";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Title,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { UserSleepData } from "@/app/lib/definitions";
import { getSleepData } from "@/app/lib/utils";

Chartjs.register(
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Title,
  BarElement
);

export default function Graph({
  userSleepData,
}: {
  userSleepData: UserSleepData[] | undefined;
}) {
  const values = userSleepData?.map((value) => {
    const {
      sleepDuration: { hours, minutes },
    } = getSleepData(
      value.date as string,
      value.sleepTime as string,
      value.wakeupTime as string
    );

    const minuteInPoints = minutes / 100;
    const minuteDuration = hours + minuteInPoints;
    return minuteDuration;
  });
  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: { color: "black" },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        ticks: { color: "black" },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    color: "white",
    font: { size: 20, weight: "bold", lineHeight: 2 },
    plugins: {
      legend: {
        position: "top" as const,
        align: "start",
        labels: { color: "black" },
        title: { color: "black", padding: 10 },
      },
      title: {
        display: true,
      },
      tooltip: {
        backgroundColor: "#030211",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Sleep Time",
        pointStyle: "line",
        data: values,
        backgroundColor: "black",
        hoverBackgroundColor: "#030211",
        barPercentage: 0.6,
        barThickness: "flex",
        borderRadius: 5,
      },
    ],
  };
  return (
    <Bar
      about="sleep tracker chart"
      style={{ width: "500px", height: "280px" }}
      //@ts-ignore
      data={data}
      //@ts-ignore
      options={options}
      key="GraphTable"
    />
  );
}
