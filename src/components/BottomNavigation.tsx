import Image from "next/image";
import React from "react";

export default function BottomNavigation() {
  return (
    <div className="flex w-full space-x-2  bottom-0 h-10 justify-center absolute items-center bg-gradient-to-r from-gray-100 bg-opacity-50 to-gray-300">
      <div className="w-8 h-8 hover:bg-white">
        <Image
          src={"/icons/icons8-windows-10.svg"}
          alt=""
          width={32}
          height={32}
        />
      </div>
      <div className="w-8 h-8 hover:bg-white">
        <Image
          src={"/icons/icons8-microsoft-edge.svg"}
          alt=""
          width={32}
          height={32}
        />
      </div>
    </div>
  );
}
