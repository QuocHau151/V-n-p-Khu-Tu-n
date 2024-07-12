import { Button } from "@nextui-org/react";
import React from "react";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
export default function Page() {
  return (
    <div className="">
      <div className="flex h-[500px] w-full flex-col items-center justify-center bg-slate-200">
        <h1 className="text-[30px] font-medium">Contacts</h1>
        <p className="px-5 text-center text-[15px]">
          For questions or inquiries about our products and services, please
          contact us using the form below
        </p>
      </div>
      <div className="container">
        <div className="flex flex-col items-center py-10">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-[25px] font-medium">We Are Ready To Help</h2>
            <p className="px-10 text-center text-[13px]">
              ádadadas ádasdadadadsasre here to help you with whatever you need
            </p>
          </div>
          <div className="grid w-full grid-cols-2 grid-rows-2 gap-10 py-10 md:flex md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-2 md:basis-1/4">
              <CiPhone className="text-[35px]" />
              <p className="text-[16px] font-light">Phone call</p>
              <div className="flex flex-col items-center">
                <p className="text-center text-[13px]">+ 12 345 67 89</p>
                <p className="text-center text-[13px]"> + 12 234 56 78</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 md:basis-1/4">
              <CiMail className="text-[35px]" />
              <p className="text-[16px] font-light">Email contact</p>
              <div className="flex flex-col items-center">
                <p className="text-center text-[13px]">furnix@template.com</p>
                <p className="text-center text-[13px]"> furnix@template.com</p>
              </div>
            </div>{" "}
            <div className="flex flex-col items-center gap-2 md:basis-1/4">
              <CiLocationOn className="text-[35px]" />
              <p className="text-[16px] font-light">Our Location</p>
              <div className="flex flex-col items-center">
                <p className="text-center text-[13px]">
                  21 County Route 3/6, New York,wv, 26101{" "}
                </p>
              </div>
            </div>{" "}
            <div className="flex flex-col items-center gap-2 md:basis-1/4">
              <CiTimer className="text-[35px]" />
              <p className="text-[16px] font-light">Working Time</p>
              <div className="flex flex-col items-center">
                <p className="text-center text-[13px]">Mon - Fri</p>
                <p className="text-center text-[13px]"> 10:00am - 6:00pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center py-10 md:flex-row md:gap-5">
          <div className="aspect-square w-full bg-slate-200 md:basis-1/2"></div>
          <div className="flex flex-col items-center py-10 md:basis-1/2 md:items-start">
            <h2 className="text-[25px] font-medium">Contact Us</h2>
            <p className="px-10 text-center text-[13px] font-light md:px-0 md:text-start">
              Wed like to hear from you. Please complete the form below so we
              can respond to your enquiry
            </p>
            <div className="flex w-full items-center gap-3 py-6">
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="text" className="px-2 text-[10px] font-light">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-xl border-1 border-slate-200 p-2 text-[10px]"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="email" className="px-2 text-[10px] font-light">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-xl border-1 border-slate-200 p-2 text-[10px]"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="text" className="px-2 text-[10px] font-light">
                Massage
              </label>
              <textarea
                placeholder=""
                className="rounded-xl border-1 border-slate-200 p-2 text-[13px]"
              />
            </div>
            <button className="mt-5 rounded-2xl bg-slate-700 px-3 py-2 text-[13px] text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
