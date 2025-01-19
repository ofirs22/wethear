// Chart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { History } from "../App"; // Import the History type

// Register Chart.js components and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin
);

interface ChartProps {
  historyData: History[];
}

const ChartComponent: React.FC<ChartProps> = ({ historyData }) => {
  const chartData = {
    labels: historyData.map((item) => item.date),
    datasets: [
      {
        label: "Min Temperature",
        data: historyData.map((item) => item.minTemp),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
        fill: false,
      },
      {
        label: "Max Temperature",
        data: historyData.map((item) => item.maxTemp),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const index = context.dataIndex;
            const historyItem = historyData[index];
            if (historyItem) {
              return [
                `Date: ${historyItem.date}`,
                `Min Temp: ${historyItem.minTemp}°C`,
                `Max Temp: ${historyItem.maxTemp}°C`,
              ];
            }
            return "";
          },
        },
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x", // Panning in the x-direction
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x", // Zooming in the x-direction
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
          align: "end"
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions as any} />;
};

export default ChartComponent;
