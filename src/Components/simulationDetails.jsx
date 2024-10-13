import React from "react";
import { Line } from "react-chartjs-2";
import trial from "../assets/trial.webp"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [0, 200, 300, 400, 200, 100, -1000],
      borderColor: "rgba(255, 206, 86, 0.6)",
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      fill: true,
    },
    {
      label: "Dataset 2",
      data: [-1000, -500, 300, 0, 100, -200, 0],
      borderColor: "rgba(153, 102, 255, 0.6)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const SimulationComponent = () => {
  return (
    <div className="p-6  shadow-lg rounded-lg w-full  grid grid-cols-1 gap-5">
      {/* Chart Area */}
      <h1 className=" text-black text-5xl font-semibold text-left">
      Compare building shadow
      </h1>

      {/* Building Information */}

      <div className="border-2 w-[80%] flex justify-between border-yellow-300 p-4 rounded-lg bg-white">
        {/* Left Section */}
        <div className="flex justify-between gap-5
         ">
          <div className="p-2 bg-white border border-gray-400 rounded-md text-center text-xl font-bold w-[233px] self-center ">
          <div> Building ID : 16594</div> 
          <div><img src="https://media.istockphoto.com/id/473571622/photo/business-building-architecture.jpg?s=612x612&w=0&k=20&c=nMkB0BveibcS-Pp3eSQ-Fj4t80gHgB-Lk6uwne191CA=" className=" rounded-xl"/></div>
          </div>
          <div className="p-2 bg-white border border-gray-400 rounded-md text-center text-xl font-bold  w-[233px] self-center">
            Building ID : 12756
            <div><img src="https://media.istockphoto.com/id/473571622/photo/business-building-architecture.jpg?s=612x612&w=0&k=20&c=nMkB0BveibcS-Pp3eSQ-Fj4t80gHgB-Lk6uwne191CA=" className=" rounded-xl"/></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="border-2 w-[45%] border-yellow-300 p-4 px-0 pt-0 rounded-lg">
          <div className="text-center py-2   text-4xl font-semibold bg-gradient-to-b from-[#E6C300] to-[#FF8C00] text-white rounded-t-lg">
            Building Information
          </div>
          <table className="table-auto w-full border-collapse">
            <tbody>
              <tr className="border-t border-b">
                <td className="p-2 border-r text-center">Height (m) : 33m</td>
                <td className="p-2 text-center">Height (m) : 24m</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 border-r text-center">
                  Available rooftop area : 3467 sq.m
                </td>
                <td className="p-2 text-center">
                  Available rooftop area : 4578 sq.m
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 border-r text-center">
                  Incident Solar Energy : 3456 kWh
                </td>
                <td className="p-2 text-center">
                  Incident Solar Energy : 567 kWh
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 border-r text-center">
                  Facade Area for BIPV : 345
                </td>
                <td className="p-2 text-center">Facade Area for BIPV : 598</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 border-r text-center">BIPV Potential : 3456</td>
                <td className="p-2 text-center">BIPV Potential : 2367</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
    
    </div>
  );
};

export default SimulationComponent;

  