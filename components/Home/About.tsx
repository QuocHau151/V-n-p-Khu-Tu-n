import React from "react";
import { Button } from "../ui/button";

export default function About() {
  return (
    <div className="container flex items-start justify-between gap-2 py-[50px] md:gap-20 lg:gap-[120px] lg:px-[150px]">
      <div className="flex basis-1/2 flex-col items-start gap-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-[14px] font-medium md:text-[22px]">
            Virtual Design Consultation Services for Your Dream Home
          </h1>
          <p className="mb-3 text-[10px] md:text-[16px]">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris{" "}
          </p>
          <Button className="rounded-2xl bg-black text-[12px] text-white md:p-4 md:text-[16px]">
            Shop Now
          </Button>
        </div>
        <div className="h-40 w-full bg-slate-200"></div>
      </div>
      <div className="basis-1/2 space-y-5 lg:space-y-10">
        <div className="h-[300px] w-full bg-slate-200"></div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col items-center">
            <p className="text-center text-[8px] md:text-[12px]">
              Years in Business
            </p>
            <p className="md:text-[30px]">
              10 <strong className="font-light text-yellow-500">%</strong>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-center text-[8px] md:text-[12px]">
              Years in Business
            </p>
            <p className="md:text-[30px]">
              10 <strong className="font-light text-yellow-500">%</strong>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-center text-[8px] md:text-[12px]">
              Years in Business
            </p>
            <p className="md:text-[30px]">
              10 <strong className="font-light text-yellow-500">%</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
