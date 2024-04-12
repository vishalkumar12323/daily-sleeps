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
import GraphSkeleton from "../skeletons/GraphSkeletons";

Chartjs.register(
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Title,
  BarElement
);

export default function Graph() {
  let theme = "light";
  const themeColor = theme === "dark" ? "white" : "black";
  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: { color: themeColor },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        ticks: { color: themeColor },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    color: themeColor,
    font: { size: 20, weight: "bold", lineHeight: 2 },
    plugins: {
      legend: {
        position: "top" as const,
        align: "start",
        labels: { color: themeColor },
        title: { color: themeColor, padding: 10 },
      },
      title: {
        display: true,
      },
      tooltip: {
        backgroundColor: "#08adee",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Sleep Time",
        pointStyle: "line",
        data: [8, 9, 10, 7, 5, 8, 9],
        backgroundColor: "#08adee",
        hoverBackgroundColor: "#0060dd",
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
    />
  );
}

{
  /* <GraphSkeleton /> */
}
