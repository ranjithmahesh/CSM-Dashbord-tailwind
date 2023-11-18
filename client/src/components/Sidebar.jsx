import { IoIosSearch } from "react-icons/io";
import React, { useState } from "react";
import { MainMenu, moreMenu } from "../utility/data";
import { Link } from "react-router-dom";

function Sidebar() {
  const [clicked, setClicked] = useState(null);

  const handleItemClick = (index) => {
    setClicked(index);
  };

  return (
    <div className="flex flex-col w-60 text-white pt-10 px-5">
      <div>
        <h1 className="text-lg pb-5">Main Menu</h1>
        {MainMenu.map((item, i) => (
          <Link to={item.Link} key={i}>
            <div
              className={`py-2.5 mt-1 hover:bg-gray-500 rounded-xl px-2 flex flex-row items-center gap-1 ${
                clicked === i ? "bg-gray-500" : ""
              }`}
              onClick={() => handleItemClick(i)}
            >
              {item.icon}
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="pt-20">
        <h1>More</h1>
        <div className="bg-white flex flex-row rounded-xl mt-5 mb-2">
          <IoIosSearch className="text-3xl text-black z-10" />
          <input
            className="rounded-xl border-none outline-none text-black"
            placeholder="Search students by name"
          />
        </div>

        {moreMenu.map((item, i) => (
          <Link  key={i}>
            <div
              className="py-2 hover:bg-gray-500 rounded-xl px-2 flex flex-row items-center gap-2 
              "
            >
              {item.icon}
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
