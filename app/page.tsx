"use client";
import { CenterContent } from "@/components/layout/CenterContent";
import { LeftsideBar } from "@/components/layout/leftsideBar";
import Navbar from "@/components/layout/navbar";
import { RightSideBar } from "@/components/layout/rightSideBar";
// import { useEffect, useLayoutEffect } from "react";

export default function Home() {
  // useLayoutEffect(() => {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    import("../mocks/mocks").then(({ worker }) => {
      worker.start();
    });
  }
  // }, []);

  return (
    <div className="min-h-screen bg-[#f6f7f8] p-8">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4  h-full gap-4 ">
        <div className="md:grid-cols-1 md:order-1 order-3 ">
          <LeftsideBar />
        </div>
        <div className="md:col-span-2 md:order-2 order-1">
          <CenterContent />
        </div>
        <div className="md:grid-cols-1 md:order-3 order-2">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
