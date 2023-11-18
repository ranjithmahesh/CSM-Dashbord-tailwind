import { FaRegArrowAltCircleDown } from "react-icons/fa";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
} from "recharts";
import {
  COLORS,
  FeeSummary,
  activeStudentsData,
  revenueData,
} from "../utility/data";

function Chart() {
  return (
    <div className="flex  gap-1 px-3 mt-1 pr-6 ">
      <div className="flex-1 rounded-sm bg-white">
        <div className="flex justify-between px-3 border-b border-gray-300 text-black font-semibold py-1  bg-white">
          <h2>FEE PAYMENT SUMMARY</h2>
          <div>
            <select className="border outline-none font-medium text-sm ">
              <option className="">last 30 days</option>
              <option>last 6 months</option>
              <option>last 1 yeare</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col  ">
          <PieChart width={400} height={200}>
            <Pie
              data={FeeSummary}
              cx="50%"
              cy="50%"
              innerRadius={25}
              outerRadius={80}
              fill="#3668afa1"
              dataKey="value"
            >
              {FeeSummary.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>

          <div className="justify-between flex px-5">
            {FeeSummary.map((entry, index) => (
              <div
                key={`legend-${index}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <div
                  style={{
                    backgroundColor: COLORS[index % COLORS.length],
                  }}
                  className="w-2.5 h-2.5 mr-1 rounded-sm text-sm text-gray-400"
                />
                <h1 className="text-xs text-gray-400">{entry.name}</h1>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-between px-2">
            <h1 className="font-bold text-xl">
              ₹ 6240,000
              <span className="text-sm font-medium"> by 400 students</span>
            </h1>
            <h1 className="font-bold text-xl">
              ₹ 334,000
              <span className="text-sm font-medium"> by 123 students</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-sm bg-white px-3 pb-1">
        <div className="flex justify-between px-3 border-b border-gray-300 text-black font-semibold py-1 ">
          <h2>MONTH-ON-MONTH-GROUTH</h2>
          <div>
            <select className="border outline-none">
              <option>last 3 months</option>
              <option>last 6 months</option>
              <option>last 1 yeare</option>
            </select>
          </div>
          <FaRegArrowAltCircleDown className="text-2xl text-gray-600" />
        </div>
        <div className="flex gap-1">
          <h3 className="absolute text-gray-400">Revenue</h3>

          <BarChart
            width={250}
            height={250}
            data={revenueData}
            margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="0 200 0 0" vertical={false} />
            <XAxis dataKey="month" />

            <Tooltip />
            <Legend />
            <Bar dataKey="Fee_Recived" fill="#4b5563a2" />
          </BarChart>
          <h3
            className="absolute right-56
           text-gray-400"
          >
            Students
          </h3>
          <BarChart
            className="border-l-2 pl-5"
            width={250}
            height={250}
            data={activeStudentsData}
            margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="0 200 0 0" vertical={false} />
            <XAxis dataKey="month" />

            <Tooltip />
            <Legend />
            <Bar
              dataKey="Active_Students"
              fill="#4b556358"
              className="rounded-lg"
            />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default Chart;
