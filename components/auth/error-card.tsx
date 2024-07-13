"use client";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const ErrorCard = () => {
  return (
    <>
      <div className="bg-[url('/assets/images/Untitled-1.jpg')] h-[100vh]  bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
        <div className="bg-white bg-opacity-95 rounded-[30px] flex flex-col gap-6 items-center  p-[50px]">
          <div className="text-center">
            <h1 className="text-[45px] font-semibold text-slate-800">OPS!</h1>
            <p className="text-[18px] text-slate-600 mb-10">Something wrong</p>
            <div className="w-full flex justify-center flex-col items-center gap-4">
              <ExclamationTriangleIcon className="text-destructive " />
              <Link href="/login">Back to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
