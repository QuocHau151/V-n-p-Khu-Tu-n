import Image from "next/image";
import React, { useState } from "react";

import { CiHeart } from "react-icons/ci";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { IoCart } from "react-icons/io5";

export default function Carousels() {
  return (
    <div className="container mx-auto h-min py-5">
      <div className="mt-10 md:mt-20">
        <Carousel
          opts={{
            align: "start",
          }}
          className="mx-auto w-full"
        >
          <CarouselContent>
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <div className="relative h-60 rounded-lg border bg-slate-200">
                    <div className="absolute right-4 top-4 z-50 grid h-8 w-8 place-content-center rounded-full bg-white">
                      <CiHeart className="text-[20px] text-black" />
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="flex items-center gap-2 py-3">
                    <div className="h-5 w-5 rounded-full bg-black"></div>
                    <div className="h-5 w-5 rounded-full bg-slate-100"></div>
                    <div className="h-5 w-5 rounded-full bg-slate-300"></div>
                    <div className="h-5 w-5 rounded-full bg-slate-400"></div>
                    <div className="h-5 w-5 rounded-full bg-slate-500"></div>
                    <div className="h-5 w-5 rounded-full bg-slate-700"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className=" ">
                      <h1>Name</h1>
                      <p>100000</p>
                    </div>
                    <div className="grid h-10 w-10 place-content-center rounded-full bg-black">
                      <IoCart size={25} color="white" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-top-10 right-7 text-black md:right-10" />
          <CarouselNext className="-top-10 right-1" />
          <h1 className="absolute -top-10 left-1 text-[20px] md:-top-14 md:text-[30px]">
            This weeks bestsellers
          </h1>
        </Carousel>
      </div>
    </div>
  );
}
