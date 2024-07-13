"use client";

import Link from "next/link";
import React from "react";
import LoginForm from "@/components/auth/login-form";
import Social from "@/components/auth/social";
import { Helmet } from "react-helmet";

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Đăng Nhập</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="bg-[url('/assets/images/Untitled-1.jpg')] h-[100vh]  bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center py-10 ">
        <div className="bg-white bg-opacity-95 rounded-[30px]  flex flex-col gap-6 items-center  p-[40px] h-min max-md:w-full max-md:p-[20px] md:mt-[60px]">
          <div className="text-center w-full">
            <h1 className="text-[45px] font-semibold text-slate-800 max-md:text-[30px]">
              Xin Chào
            </h1>
            <p className="text-[18px] text-slate-600 max-md:text-[12px]">
              Đăng nhập vào tài khoản của bạn
            </p>
          </div>
          <LoginForm />

          <div className="w-full flex flex-col text-center text-sm font-medium text-slate-500 leading-none">
            <hr className="w-full" />
            <p className="-mt-[8px] max-md:text-[12px] ">Hoặc đăng nhập bằng</p>
          </div>
          <Social />
          <p className=" flex gap-2 max-md:text-[12px]">
            Nếu bạn chưa có tài khoản!
            <Link
              href="/register"
              className="text-orange-600 max-md:text-[12px]"
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
