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

Chartjs.register(
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Title,
  BarElement
);

const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const options = {
  responsive: true,
  scales: {
    y: {
      ticks: { color: "#fff" },
    },
    x: {
      ticks: { color: "#fff" },
    },
  },
  color: "#fff",
  font: { size: 20, weight: "bold", lineHeight: 2 },
  plugins: {
    legend: {
      position: "top" as const,
      align: "start",
      labels: { color: "white" },
      title: { color: "white", padding: 10 },
    },
    title: {
      display: true,
    },
  },
};

export const data = {
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
export default function Graph() {
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
