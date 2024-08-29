import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex dark:bg-[#0F0F0F]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
