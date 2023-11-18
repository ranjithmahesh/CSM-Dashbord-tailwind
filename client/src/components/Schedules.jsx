import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { HiDotsHorizontal } from "react-icons/hi";
import { SCHEDULEButtons, scheduleData } from "../utility/data";

function Schedules() {
  const [clicked, setClicked] = useState(null);

  const handleItemClick = (index) => {
    setClicked(index);
  };

  return (
    <div className="flex gap-1 px-3 mt-1 pr-6">
      <div className="flex-1 rounded-sm bg-white">
        <div className="flex justify-between px-3 border-b border-gray-300 text-black font-semibold py-1">
          <h2>UPCOMING SCHEDULE</h2>
          <div className="flex items-center">
            <CiFilter className="text-xl mr-3" />
            <div>
              {SCHEDULEButtons.map((item, i) => (
                <button
                  key={i}
                  className={`bg-gray-400 mr-2 p-.5 px-6 text-white rounded-md hover:bg-gray-500 ${
                    clicked === i ? "bg-gray-500" : ""
                  }`}
                  onClick={() => handleItemClick(i)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <HiDotsHorizontal className="text-3xl ml-20" />
        </div>
        {scheduleData.map((item, i) => (
          <div key={i} className="flex flex-row justify-between p-2">
            <div className="flex flex-row">
              <input type="checkbox" />
              <h1 className="bg-gray-500 h-12 text-white pt-2 text-2xl font-semibold p-4 rounded-2xl ml-2">
                {item.name}
              </h1>
              <h2 className="ml-2 py-3 font-semibold">{item.date}</h2>
            </div>

            <h2 className="py-3 font-semibold flex-1">{item.time}</h2>
            <h2 className="py-3 font-bold flex-1">{item.Class}</h2>

            <div className="flex-1">
              {item.event && (
                <button className="border-dashed border-2 border-red-600 text-center mt-3 ml-10 px-1 text-sm text-red-600 py-1">
                  {item.event}
                </button>
              )}
            </div>

            <h2 className="py-3 text-gray-600 flex-1">{item.coach}</h2>

            <button className="text-blue-500 font-bold">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedules;
