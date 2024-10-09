import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { colors } from "@mui/material";
const Pipeline = () => {
  const data = [
    {
      id: 0,
      value: 56,
      label:
        "Unused surface (Total surface area of buildings available for BIPV)",
      color: "#EACA28",
    },
    {
      id: 1,
      value: 70,
      label: "Used surface (BIPV potential)",
      color: "#00DFEB",
    },
  ];
  return (
    <div className="flex flex-col w-fit border-gray border-2  rounded-xl overflow-hidden text-black max-w-[360px]">
      <div className="flex flex-col   bg-white px-5 py-2 ">
        <PieChart
          series={[
            {
              data: [
                {
                  id: 0,
                  value: 56,
                  label:
                    "Unused surface (Total surface area of buildings available for BIPV)",
                  color: "#EACA28",
                },
                {
                  id: 1,
                  value: 70,
                  label: "Used surface (BIPV potential)",
                  color: "#00DFEB",
                },
              ],
            },
          ]}
          width={400}
          height={200}
          slotProps={{ legend: { hidden: true } }}
        />
        <div className="flex gap-2  flex-col text-[22px]">
          {" "}
          {data.map((item) => (
            <div key={item.id} className="flex flex-col gap-0">
              <div className={`text-[${item.color}]  `}>{item.value} %</div>
              <div className=" text-[#595959] ">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pipeline;
