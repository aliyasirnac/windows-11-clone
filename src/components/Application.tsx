import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  icon: string;
}

export default function Application({ title, icon }: Props) {
  return (
    <div className="inline-flex p-1 flex-col items-center">
      <Image src={icon} alt={title} width={48} height={48} className="w-12 h-12 " />
      <span className="font-medium">{title}</span>
    </div>
  );
}
