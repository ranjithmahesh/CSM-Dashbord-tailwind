import React from "react";
import { GoGear } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="h-[60px] w-full flex flex-row justify-between px-4 items-center  ">
      <div className="flex flex-col items-center">
        <img
          src="https://softr-prod.imgix.net/applications/7c9443d6-15a9-495f-a44d-a0d3dceddeea/assets/5d87a207-dfb1-4e4e-88b4-4fb4e474e1d4.png"
          className="w-28"
        />
        <p className="">Fri,01 Sep</p>
      </div>
      <div className="">
        <h1 className=" font-bold text-xl">Welcome Ranjith, </h1>
        <p>Here is a summary of your business</p>
      </div>

      <div className="flex flex-row gap-2 items-center justify-center mx-40">
        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
          <GoGear className="text-xl" />
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
          <IoNotificationsOutline className="text-xl" />
        </div>
      </div>

      <div className="flex flex-row gap-2 items-center">
        <img
          src="https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis="
          className="rounded-full w-10 h-10"
        />

        <div>
          <h1 className="text-xl font-bold">Ranjith SM</h1>
          <p>cj@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
