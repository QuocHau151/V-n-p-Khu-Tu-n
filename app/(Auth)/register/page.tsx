"use client";

import Link from "next/link";
import React from "react";
import RegisterForm from "@/components/auth/register-form";
import Social from "@/components/auth/social";
import { Helmet } from "react-helmet";

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Đăng Ký</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="bg-[url('/assets/images/Untitled-1.jpg')] h-[100vh]  bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
        <div className="bg-white bg-opacity-95 rounded-[30px] flex flex-col gap-6 items-center w-min  px-[50px] py-[20px] max-md:w-full max-md:px-[30px] max-md:gap-4">
          <div className="text-center">
            <h1 className="text-[45px] font-semibold text-slate-800 max-md:text-[25px]">
              Xin Chào
            </h1>
            <p className="text-[18px] text-slate-600 max-md:text-[12px]">
              Đăng ký tài khoản của bạn
            </p>
          </div>
          <RegisterForm />

          <div className="w-full flex flex-col text-center text-sm font-medium text-slate-500 leading-none">
            <hr className="w-full" />
            <p className="-mt-[8px]  max-md:text-[12px]">Hoặc đăng nhập bằng</p>
          </div>
          <Social />
          <p className=" flex gap-2 max-md:text-[12px]">
            Nếu bạn đã có tài khoản!
            <Link href="/login" className="text-orange-600">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
