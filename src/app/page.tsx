"use client";
import React from "react";
import Desktop from "@/components/pages/Desktop";
import { usePage } from "@/store";
import LockedScreen from "@/components/pages/LockedScreen";

export default function Page() {
  const page = usePage((state) => state);
  return (
    <div>{page.onWhichPage === "desktop" ? <Desktop /> : <LockedScreen />}</div>
  );
}
