import React from "react";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
  return (
    <div className="fixed left-0 top-0 overflow-hidden h-[100%] w-[100%] flex max-custom:flex max-custom:flex-col max-custom:overflow-auto  ">
      {/* Sidebar ثابت */}
      <Sidebar/>

      {/* محتوایی که بین dashboard و content متغییر است */}
      
        <Outlet />
      
    </div>
  );
}
