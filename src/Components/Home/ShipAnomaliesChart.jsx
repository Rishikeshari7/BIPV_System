import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import "../../App.css";

// Years from 2000 to 2005
const years = [
  new Date(2000, 0, 1),
  new Date(2001, 0, 1),
  new Date(2002, 0, 1),
  new Date(2003, 0, 1),
  new Date(2004, 0, 1),
  new Date(2005, 0, 1),
];

// Define potential energy values with significant fluctuations for zigzag effect
const potentialEnergy = [10, 50, 20, 80, 30, 90]; // Zigzag values for spikes

const lineChartsParams = {
  series: [
    {
      label: 'Potential Energy',
      data: potentialEnergy,
      showMark: true, // Show marks on the points
      stroke: '#FF8C00', // Line color (orange)
    },
  ],
  width: 480,
  height: 250,
};

const yearFormatter = (date) => date.getFullYear().toString();

export default function EnergyChart() {
  return (
    <div className='text-black min-h-[422px] border-gray border-2 rounded-xl bg-white flex flex-col'>
      <h2 className='text-xl text-center font-bold mb-1 bg-gradient-to-r from-yellow-200 via-purple-400 to-green-500 text-transparent bg-clip-text pt-2 px-2'>
        Potential Energy Trends (2000-2005)
      </h2>
      <LineChart
        className='bg-white rounded-lg self-center'
        {...lineChartsParams}
        xAxis={[
          {
            data: potentialEnergy,
            label: 'Potential Energy (Joules)', // Title for the x-axis
            scaleType: 'linear', // Linear scale for potential energy
            labelFontSize: 14, // Axis title font size
            tickColor: 'black',
            labelColor: 'black',
          },
        ]}
        yAxis={[
          {
            data: years,
            label: '', // Title for the y-axis
            scaleType: 'time',
            valueFormatter: yearFormatter,
            labelFontSize: 14, // Axis title font size
            tickColor: 'black',
            labelColor: 'black',
          },
        ]}
        series={lineChartsParams.series}
      />
    </div>
  );
}
