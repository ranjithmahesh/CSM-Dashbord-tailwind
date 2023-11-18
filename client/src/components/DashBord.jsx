import React from "react";
import Chart from "./Chart";
import Schedules from "./Schedules";

function DashBord() {
  return (
    <div className="flex flex-col ">
      <div className="flex  gap-1 px-3 mt-3 pr-6 ">
        <div className="flex-1 bg-white rounded-sm">
          <div className="flex justify-between px-3 border-b  border-gray-300 text-gray-500 text-sm">
            <h2>ACTIVE STUDENTS</h2>
            <h2>ACTIVE COACHES</h2>
          </div>
          <div className="flex justify-between px-10 pr-16 font-semibold text-xl ">
            <h2>5,000</h2>
            <h2>5</h2>
          </div>
        </div>
        <div className="flex-1 bg-white px-3 pb-1 rounded-sm">
          <h2 className="text-sm text-gray-400">QUICK ACTIONS</h2>
          <div className="flex justify-between">
            <button className="text-white rounded-md px-3 bg-gray-700 text-sm p-1">
              +Add new student
            </button>
            <button className="text-white rounded-md px-3 bg-gray-700 text-sm p-1">
              Collect Fees
            </button>
            <button className="text-white rounded-md px-3 bg-gray-700 text-sm p-1">
              +Add new enquiey
            </button>
          </div>
        </div>
      </div>
      <Chart />
      <Schedules />
    </div>
  );
}

export default DashBord;
