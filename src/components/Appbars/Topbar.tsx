import { Logo } from "../Avatars/Avatar";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger, FaBell } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import {
  SiHomeassistantcommunitystore,
  SiFacebookgaming,
} from "react-icons/si";
import { HiUserGroup } from "react-icons/hi";
import React from "react";

const Topbar = () => (
  <React.Fragment>
    {/* PHONE LAYOUT */}
    <div className="md:hidden h-16 dark:bg-zinc-800 px-2 py-2 ">
      <div className="flex items-center gap-x-3 justify-between">
        <Logo />
        <input
          type="text"
          placeholder="Search Facebook"
          className="px-5 py-2 w-full rounded-full dark:bg-zinc-700 text-xl"
        />
        <img
          src={`/images/left-bar-icons/Messenger.png`}
          alt=""
          width={45}
          height={45}
        />
      </div>
    </div>

    {/* DESKTOP LAYOUT */}
    <div className="grid grid-cols-12 h-16 dark:bg-zinc-800 justify-between px-5 py-2 lg:fixed w-full z-10 border-y dark:border-gray-600">
      <div className="hidden md:block md:col-span-4 lg:col-span-3">
        <div className="flex items-center gap-x-2">
          <Logo />
          <input
            type="text"
            placeholder="Search Facebook"
            className="flex-1 w-60 xl:w-72 px-5 py-2 rounded-full dark:bg-zinc-700 text-xl"
          />
        </div>
      </div>

      <div className="col-span-12 md:col-span-8 lg:col-span-6 flex justify-between items-center text-3xl dark:text-gray-400 md:ml-14 lg:mx-14">
        <AiFillHome />
        <MdOndemandVideo />
        <span className=" text-2xl">
          <SiHomeassistantcommunitystore />
        </span>
        <span className="border dark:border-gray-400 rounded-full p-1 text-xl">
          <HiUserGroup />
        </span>
        <span className="text-2xl">
          <SiFacebookgaming />
        </span>
      </div>

      <div className="hidden col-span-6 lg:col-span-3 lg:flex justify-end items-center gap-x-3">
        <span className="p-2 dark:bg-gray-600 rounded-full text-3xl">
          <CgMenuGridO />
        </span>
        <span className={cmnCls1}>
          <FaFacebookMessenger />
        </span>
        <span className={cmnCls1}>
          <FaBell />
        </span>
        <span className={cmnCls1}>
          <BsFillPersonFill />
        </span>
      </div>
    </div>
  </React.Fragment>
);

export default Topbar;

const cmnCls1 = `p-3 dark:bg-gray-600 rounded-full text-xl`;
