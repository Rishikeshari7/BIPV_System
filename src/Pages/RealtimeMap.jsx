import React from "react";
import ShipMap from "../Components/RealtimeMap/ShipMap";
import ShipTable from "../Components/RealtimeMap/ShipTable";
import { ships } from "../Data/shipdata";
import newLogo from "../assets/newLogo.svg";
import BuildingComponent from "../Components/viewerDetails";

const RealtimeMap = () => {
  return (
    <div className=" flex flex-col gap-5 flex-1">
      <h1 className=" text-black text-5xl font-semibold text-left">
        City Models & 3D Visualization
      </h1>
      <div className="ml-6 flex justify-between mt-2  text-2xl  ">
       
        <input
          type="text"
          placeholder="Enter GHI value"
          className="border border-gray-300 p-3 w-[25vw] min-w-[414px] h-[69px] rounded-xl text-black"
        />
         <input
          type="date"
          placeholder="Enter date"
          className="border border-gray-300 p-3 w-[25vw] h-[69px] min-w-[414px] rounded-xl"
        />

        <input
          type="text"
          placeholder="Available solar energy"
          className="border border-gray-300 p-3 w-[25vw] min-w-[414px] h-[69px] rounded-xl"
        />
      </div>
      <div className="flex justify-center items-center">
        <img src={newLogo} className=" h-[70vh] w-[100%]" />
      </div>
      
        <BuildingComponent/>
      
    
    </div>
  );
};

export default RealtimeMap;
