"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import Application from "./Application";
import Image from "next/image";
import { GrPowerShutdown } from "react-icons/gr";
import { usePage } from "@/store";

const apps = [
  { name: "Microsoft Store", icon: "/icons/icons8-microsoft-store.svg" },
  { name: "Photos", icon: "/icons/icons8-photos.svg" },
  { name: "Edge", icon: "/icons/icons8-microsoft-edge.svg" },
  { name: "Powerpoint", icon: "/icons/icons8-powerpoint.svg" },
];

export default function WinIconModal() {
  // const eventHandler = (e: { type: any }, data: any) => {
  //   console.log("Event Type", e.type);
  //   console.log({ e, data });
  // };
  const changePage = usePage((state) => state.changePage);

  return (
    <div className="win-cont">
      <div className="max-w-2xl bg-opacity-75 w-full px-2  p-1 bg-white flex items-center">
        <BiSearch className="rotate-90 text-2xl" />
        <input
          className="bg-transparent w-full outline-none px-2"
          placeholder="Type here to search"
        />
      </div>

      <div className="flex max-w-2xl m-8 justify-between w-full items-center p-1">
        <span className="font-medium">Pinned</span>
        <div className="inline-flex p-1 hover:bg-opacity-75 cursor-pointer bg-white rounded items-center">
          All apps
          <AiOutlineRight className="ml-3 text-gray-400" />
        </div>
      </div>

      <div className="flex flex-wrap items-center p-1 max-w-2xl m-4">
        {apps.map((item, i) => (
          <div key={i} className="hover:scale-110 px-4">
            <Application title={item.name} icon={item.icon} />
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full items-center p-1 max-w-2xl m-16">
        <div className="flex p-1 w-full items-center justify-between">
          <span className="font-medium">Recommended</span>
          <div className="inline-flex p-1 hover:bg-opacity-75 cursor-pointer bg-white rounded items-center">
            More
            <AiOutlineRight className="ml-3 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full p-1">
          {/* TODO: Buraya cv ile ilgili bir şeyler koy */}
          {apps.map((item, i) => (
            <div key={i} className="hover:scale-110 px-4">
              <Application title={item.name} icon={item.icon} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center p-1 max-w-2xl w-full">
        <div className="flex items-center  p-1 justify-between w-full">
          <div className="flex items-center space-x-2">
            <Image
              src={"/images/bne2_150x150.jpg"}
              alt="bne"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />

            <span className="text-md">Ali Yasir Naç</span>
          </div>
          <button onClick={() => changePage("locked-screen")}>
            <GrPowerShutdown className="text-2xl hover:scale-105  text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
