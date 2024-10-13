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

const BuildingComponent = () => {
  return (
    <div className="p-6 shadow-lg rounded-lg w-full  grid grid-cols-2 gap-4">
      {/* Chart Area */}
      <div className=" flex flex-col">
        {" "}
        <div className="p-4  rounded-lg border shadow-md">
          <h3 className="text-lg font-semibold text-center mb-4">
            Chart.js Line Chart- Multi Axis
          </h3>
          <Line data={chartData} options={options} />
          <div className="mt-4 flex justify-around">
            <span className="text-yellow-500">21st March</span>
            <span className="text-blue-500">21st June</span>
          </div>
        </div>
          {/* Download Button */}
      <div className="col-span-2 flex justify-center mt-6 ">
        <button className=" text-4xl font-semibold bg-gradient-to-b from-[#E6C300] to-[#FF8C00]  text-white py-2 px-4 rounded-lg  shadow-lg hover:shadow-xl transition duration-300 w-full h-[78px]">
          Download details
        </button>
      </div>
      </div>

      {/* Building Information */}

      <div className="p-6 pt-0 px-0 bg-white shadow-lg rounded-lg w-full max-w-2xl">
        <div className="p-4  bg-gradient-to-b from-[#E6C300] to-[#FF8C00] rounded-t-lg">
          <h3 className="text-center text-white text-3xl font-bold">
            Building Information
          </h3>
        </div>
        <table className="w-full text-left border-collapse">
          <tbody>
            <tr className="border-t">
              <td className="p-4 font-semibold">Building ID</td>
              <td className="p-4">1265</td>
            </tr>
            <tr className="border-t">
              <td className="p-4 font-semibold">Address</td>
              <td className="p-4">Near port x</td>
            </tr>
            <tr className="border-t">
              <td className="p-4 font-semibold">Height (m)</td>
              <td className="p-4">33 m</td>
            </tr>
            <tr className="border-t">
              <td className="p-4 font-semibold">Latitude</td>
              <td className="p-4">72.5467</td>
            </tr>
            <tr className="border-t">
              <td className="p-4 font-semibold">Longitude</td>
              <td className="p-4">56.4456</td>
            </tr>
            <tr className="border-t">
              <td className="p-4 font-semibold">Available rooftop area</td>
              <td className="p-4">3456 sq m</td>
            </tr>
            <tr className="border-t">
              <td className="p-4 font-semibold">Incident Solar Energy</td>
              <td className="p-4">3456 kWh</td>
            </tr>
            <tr className="border-t">
              <td className="p-4 font-semibold">Facade Area for BIPV</td>
              <td className="p-4">345</td>
            </tr>
            <tr className="border-t">
              <td className="p-4 font-semibold">BIPV Potential</td>
              <td className="p-4">4567</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuildingComponent;
