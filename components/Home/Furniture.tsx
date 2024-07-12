import React from "react";
import { GoArrowUpRight } from "react-icons/go";
export default function Furniture() {
  return (
    <div className="container flex items-center justify-center gap-3 py-10 md:gap-5">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between gap-2 border-t-1 py-3">
          <div className="flex items-center gap-3">
            <span className="text-[10px]">01</span>
            <h1 className="whitespace-nowrap text-[14px] md:text-[16px]">
              Living Room Furniture
            </h1>
          </div>
          <GoArrowUpRight />
        </div>
        <div className="flex items-center justify-between gap-2 border-t-1 py-3">
          <div className="flex items-center gap-3">
            <span className="text-[10px]">02</span>
            <h1 className="whitespace-nowrap text-[14px] md:text-[16px]">
              Living Room Furniture
            </h1>
          </div>
          <GoArrowUpRight />
        </div>
        <div className="flex items-center justify-between gap-2 border-t-1 py-3">
          <div className="flex items-center gap-3">
            <span className="text-[10px]">03</span>
            <h1 className="whitespace-nowrap text-[14px] md:text-[16px]">
              Living Room Furniture
            </h1>
          </div>
          <GoArrowUpRight />
        </div>
        <div className="flex items-center justify-between gap-2 border-t-1 py-3">
          <div className="flex items-center gap-3">
            <span className="text-[10px]">04</span>
            <h1 className="whitespace-nowrap text-[14px] md:text-[16px]">
              Living Room Furniture
            </h1>
          </div>
          <GoArrowUpRight />
        </div>
        <div className="flex items-center justify-between gap-2 border-b-1 border-t-1 py-3">
          <div className="flex items-center gap-3">
            <span className="text-[10px]">05</span>
            <h1 className="whitespace-nowrap text-[14px] md:text-[16px]">
              Living Room Furniture
            </h1>
          </div>
          <GoArrowUpRight />
        </div>
      </div>
      <div className="h-64 basis-1/2 bg-slate-200"></div>
    </div>
  );
}
