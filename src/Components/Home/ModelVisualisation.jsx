import React from "react";
import img from "../../assets/img.svg"

const CityModelVisualization = () => {
  return (
    <div className="flex flex-col  min-h-screen gap-10 pt-9">
        <h1 className=" text-black text-5xl font-semibold text-left">City Models & 3D Visualization</h1>
      <div className="flex">
        {/* Left Section: 3D Visualization */}
        <div className="">
          <img
            src={img}
            alt="3D Model"
            className="w-[50vw] object-cover"
          />
          
        </div>

        {/* Right Section: Form Inputs */}
        <div className="ml-6 flex flex-col space-y-4 text-2xl ">
          <input
            type="date"
            placeholder="Enter date"
            className="border border-gray-300 p-3 w-[25vw] h-[69px] min-w-[414px] rounded-xl"
          />
          <input
            type="text"
            placeholder="Enter GHI value"
            className="border border-gray-300 p-3 w-[25vw] min-w-[414px] h-[69px] rounded-xl text-black"
          />
          <input
            type="number"
            placeholder="No. of buildings"
            className="border border-gray-300 p-3 w-[25vw] min-w-[414px] h-[69px] rounded-xl"
          />
          <input
            type="text"
            placeholder="Available solar energy"
            className="border border-gray-300 p-3 w-[25vw] min-w-[414px] h-[69px] rounded-xl"
          />
          <button className="bg-gradient-to-b from-[#E6C300] to-[#FF8C00] text-white py-3 px-6 rounded-xl font-bold h-[78px]">
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityModelVisualization;
