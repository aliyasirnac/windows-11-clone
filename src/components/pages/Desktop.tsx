"use client";
import Image from "next/image";
import React, { useState } from "react";
import Draggable from "react-draggable";
import {
  AiOutlineMinus,
  AiOutlineClose,
  AiOutlineArrowLeft,
  AiOutlineSearch,
  AiOutlineArrowRight,
  AiOutlineDown,
  AiOutlineRight,
} from "react-icons/ai";
import { IoIosRefresh } from "react-icons/io";
import { GoSquare, GoStarFill } from "react-icons/go";
import Link from "next/link";

export default function Desktop() {
  const [folder, setFolder] = useState(false);

  return (
    <div className="flex p-4 h-screen relative overflow-hidden w-full flex-wrap text-center font-mono flex-col ">
      <div className="w-fit h-fit hover:bg-white hover:bg-opacity-50 rounded-md p-2 inline-flex flex-col ">
        <Image
          src={"/icons/Computer.ico"}
          alt=""
          width={64}
          height={64}
          className="opacity-100"
        />
        <span className="text-center text-sm">This PC</span>
      </div>
      <div
        onClick={() => setFolder(!folder)}
        className="w-fit h-fit  hover:bg-white hover:bg-opacity-50 rounded-md p-2 flex-col "
      >
        <Image
          src={"/icons/icons8-folder.svg"}
          alt=""
          width={64}
          height={64}
          className="opacity-100"
        />
        <span className="text-center text-sm">Projects</span>
      </div>
      <div className="w-fit h-fit hover:bg-white hover:bg-opacity-50 rounded-md p-2 flex-col ">
        <Image
          src={"/icons/Trash_Empty.ico"}
          alt=""
          width={64}
          height={64}
          className="opacity-100"
        />
        <span className="text-center text-sm">Trash Bin</span>
      </div>
      <div className="w-fit h-fit hover:bg-white hover:bg-opacity-50 rounded-md p-2 inline-flex flex-col ">
        <Image
          src={"/icons/icons8-microsoft-edge.svg"}
          alt=""
          width={64}
          height={64}
          className="opacity-100"
        />
        <span className="text-center text-sm ">
          Microsoft <br />
          Edge
        </span>
      </div>
      {folder ? (
        <Draggable>
          <div className="cont">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <Image
                  src="/icons/icons8-folder.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <span className="cursor-default">Projects</span>
              </div>

              <div className="flex items-center">
                <span className="p-2  hover:bg-gray-400/50">
                  <AiOutlineMinus className="text-lg" />
                </span>
                <span className="p-2  hover:bg-gray-400/50">
                  <GoSquare className="text-lg" />
                </span>
                <span
                  onClick={() => setFolder(!folder)}
                  className="p-2 hover:rounded-tr hover:bg-red-600 hover:text-white"
                >
                  <AiOutlineClose className="text-lg" />
                </span>
              </div>
            </div>
            <div className="flex p-2 w-full flex-1 items-center">
              <div className="flex space-x-2 w-full items-center">
                <AiOutlineArrowLeft className="text-xl" />
                <AiOutlineArrowRight className="text-xl" />
                <AiOutlineDown className="text-sm" />
                <div className="flex flex-1 items-center p-1 space-x-1 justify-between border border-gray-400 w-full">
                  <div className="flex items-center">
                    <Image
                      src="/icons/icons8-folder.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <AiOutlineRight className="text-xs" />
                    <span>Projects</span>
                  </div>
                  <div className="flex items-center">
                    <AiOutlineDown className="text-md" />
                    <IoIosRefresh className="text-md" />
                  </div>
                </div>
              </div>
              <div className="w-fit items-center border border-gray-400 mx-4 px-2 flex">
                <AiOutlineSearch className="text-md rotate-90" />
                <input
                  placeholder="Search..."
                  className="p-1  bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 w-full">
              <div className="flex flex-col col-span-3 p-2">
                <ul className="flex flex-col">
                  <li className="inline-flex items-center hover:bg-blue-300">
                    <GoStarFill className="text-xl text-yellow-400 mx-2" />
                    Quick Access
                  </li>

                  <li className="inline-flex items-center hover:bg-blue-300">
                    <Image
                      src={"/icons/icons8-folder.svg"}
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6 mx-2"
                    />
                    Projects
                  </li>

                  <li className="inline-flex items-center hover:bg-blue-300">
                    <Image
                      src={"/icons/Computer.ico"}
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6 mx-2"
                    />
                    This PC
                  </li>
                </ul>
              </div>
              <div className="flex flex-col col-span-9 p-2 border-l border-gray-300">
                <table className="flex flex-col">
                  <thead>
                    <td className="flex px-2 container mx-auto justify-between">
                      <th className="flex flex-1">Name</th>
                      <div className="flex-1 justify-between flex mx-4">
                        <th>Size</th>
                        <th>Date Modified</th>
                      </div>
                    </td>
                  </thead>
                  <tbody>
                    <tr className="flex container mx-auto justify-between">
                      <Link
                        className="w-full"
                        href="https://github.com/aliyasirnac/windows-11-clone"
                      >
                        <td className="flex px-2 hover:bg-blue-300 container mx-auto justify-between">
                          <td className="flex text-sm flex-1">
                            Windows 11 Clone
                          </td>
                          <div className="flex-1 text-sm justify-between flex mx-4">
                            <td>50 MB</td>
                            <td>22.08.2023</td>
                          </div>
                        </td>
                      </Link>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Draggable>
      ) : null}
    </div>
  );
}
