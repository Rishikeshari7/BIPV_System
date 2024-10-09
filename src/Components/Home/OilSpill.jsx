import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

const oilSpillData = [
  {
    "name": "Feburary",
    "Afternoon": 4000,
    "Morning": 2400,
    "damageAmt": 2400
  },
  {
    "name": "March",
    "Afternoon": 3000,
    "Morning": 1398,
    "damageAmt": 2210
  },
  {
    "name": "April",
    "Afternoon": 2000,
    "Morning": 7800,
    "damageAmt": 2290
  },
  {
    "name": "May",
    "Afternoon": 2780,
    "Morning": 3908,
    "damageAmt": 2000
  },
 
  {
    "name": "June",
    "Afternoon": 2390,
    "Morning": 3800,
    "damageAmt": 2500
  }
];

const OilSpill = () => {
  return (
    <div className='text-white border-gray border-2 h-[422px] bg-white rounded-xl flex flex-col gap-7  '>
    <p className='text-xl font-bold mb-1 bg-gradient-to-r from-blue-100 via-purple-600 to-red-500 text-transparent bg-clip-text text-center pt-2'>Forecasting Over Months</p>
      <AreaChart width={430} height={250} data={oilSpillData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorOilSpilled" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFD60A" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#FFD60A" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorContainers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4da6ff" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#4da6ff" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Afternoon" stroke="#FFD60A" fillOpacity={1} fill="url(#colorOilSpilled)" />
        <Area type="monotone" dataKey="Morning" stroke="#4da6ff" fillOpacity={1} fill="url(#colorContainers)" />
      </AreaChart>
    </div>
  );
};

export default OilSpill;
