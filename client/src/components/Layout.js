import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="overflow-hidden w-full h-full">
      <Header  />
      <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
        <div className="bg-gray-600">
          <Sidebar />
        </div>
        <div className="bg-slate-200 w-full">{<Outlet />}</div>
      </div>
    </div>
  );
}

export default Layout;
