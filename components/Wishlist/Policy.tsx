import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { PiKeyReturn } from "react-icons/pi";
import { LuShieldCheck } from "react-icons/lu";
export default function Policy() {
  return (
    <div className="container flex flex-col items-center gap-5 border-t-1 py-10 md:flex-row md:items-start">
      <div className="flex flex-col gap-2 border-b-1 pb-10 md:border-b-0">
        <div className="flex items-center gap-2 text-[20px] font-medium md:items-start">
          <CiCircleQuestion size={30} />
          Assistance needed?
        </div>
        <p className="pl-10 font-thin">
          You can always call in case of any questions
        </p>
        <p className="pl-10 text-[18px]">+ 12 345 67 89</p>
        <p className="pl-10 font-thin">
          Mon - Fr: 9:00 - 5:00 CET.Hotline available in English and German.
        </p>
      </div>
      <div className="flex flex-col gap-2 border-b-1 pb-10 md:border-b-0">
        <div className="flex items-center gap-2 text-[20px] font-medium md:items-start">
          <PiKeyReturn size={30} />
          Return Policy
        </div>
        <p className="pl-10 font-thin">
          Most items can be returned within 30 days of delivery.
        </p>
        <p className="pl-10 font-thin">
          Find all the specifics and finer details to make your return process
          hassle-free.
        </p>
      </div>
      <div className="flex flex-col gap-2 border-b-1 pb-10 md:border-b-0">
        <div className="flex items-center gap-2 text-[20px] font-medium md:items-start">
          <LuShieldCheck size={30} />
          100% Secure Payment
        </div>
        <p className="pl-10 font-thin">
          Experience peace of mind with our 100% secure payment system.
        </p>
      </div>
    </div>
  );
}
