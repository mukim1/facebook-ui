import React from "react";
import Leftbar from "../Appbars/Leftbar";
import Rightbar from "../Appbars/Rightbar";
import Topbar from "../Appbars/Topbar";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="dark:bg-zinc-900 dark:text-white">
    <Topbar />
    <div className="grid grid-cols-12 pt-2 lg:pt-16">
      <div className="col-span-3 hidden lg:block">
        <Leftbar />
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-6 mt-2">
        {children}
      </div>
      <div className="col-span-12 md:col-span-4 lg:col-span-3">
        <Rightbar />
      </div>
    </div>
  </div>
);

export default Layout;
