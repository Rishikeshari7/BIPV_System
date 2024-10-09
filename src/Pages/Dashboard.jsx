import React, { useState } from "react";
import DataBox from "../Components/Home/DataBox";
import { Data } from "../Data/dashboardData";
import ShipAnomaliesChart from "../Components/Home/ShipAnomaliesChart";
import OilSpill from "../Components/Home/OilSpill";
import AlertTable from "../Components/Home/AlertTable";
import DataSent from "../Components/Home/DataSent";
import Pipeline from "../Components/Home/Pipeline";
import InTransit from "../Components/Home/InTransit";
import AisStation from "../Components/Home/AisStation";
import ShipMap from "../Components/RealtimeMap/ShipMap";
import { ships } from "../Data/shipdata";
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

import LocationInput from '../Components/input';
import CityModelVisualization from "../Components/Home/ModelVisualisation";

const Dashboard = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // const handleSubmit = async () => {
  //   if (!latitude || !longitude) {
  //     alert('Please enter both latitude and longitude.');
  //     return;
  //   }

  //   const latValue = parseFloat(latitude);
  //   const lngValue = parseFloat(longitude);

  //   // Validate latitude and longitude
  //   if (latValue < -90 || latValue > 90) {
  //     alert('Latitude must be between -90 and 90.');
  //     return;
  //   }
  //   if (lngValue < -180 || lngValue > 180) {
  //     alert('Longitude must be between -180 and 180.');
  //     return;
  //   }

  //   const data = {
  //     latitude: latValue,
  //     longitude: lngValue,
  //   };

  //   try {
  //     const response = await axios.post('/api/location', data, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (response.status === 200) {
  //       alert('Location submitted successfully');
  //     } else {
  //       alert('Failed to submit location');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('Error submitting location: ' + (error.response?.data?.message || 'Unknown error'));
  //   }
  // };

  return (
    <div className="w-full space-y-5">
      <h1 className=" text-black text-5xl font-medium bg-clip-text text-transparent bg-text-gradient pb-3">Solar energy & BIPV overview</h1>
      
      <div className="flex flex-wrap gap-6 justify-between pt-6">
        {Data.map((data, index) => (
          <DataBox key={index} data={data} />
        ))}
      </div>
      <div className="flex w-full flex-wrap gap-10 items-end justify-between">
      <Pipeline />
        <ShipAnomaliesChart />
        {/* <ShipMap ships={ships} lat={20.0} lng={-88.0} max={8} min={6} zoom={false} height={"36vh"} width={"25%"} /> */}
        <OilSpill />
      </div>
      <CityModelVisualization/>
     
    </div>
  );
};

export default Dashboard;
