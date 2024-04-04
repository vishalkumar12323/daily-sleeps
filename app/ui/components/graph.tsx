"use client";
import { 
    Chart as Chartjs, 
    CategoryScale, 
    LinearScale, 
    Legend, Tooltip, 
    Title, BarElement} from "chart.js";
import {Bar} from "react-chartjs-2";

Chartjs.register(
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
    Title,
    BarElement,
);
export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
      },
    },
};
const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const data = {
    labels,
    datasets: [
      {
        label: 'Sleep Time',
        data: [8, 9, 10, 7, 5, 8, 9],
        backgroundColor: '#08adee',
        hoverBackgroundColor: "#0060dd",
      }
    ],
  };
export default function Graph() {
    return <Bar style={{width: "500px", height: "500px"}} data={data} options={options}/>
}

