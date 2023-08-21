import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="flex p-4 h-screen w-full flex-wrap flex-col ">
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
    </div>
  );
}
