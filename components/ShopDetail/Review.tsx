"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoMdStar } from "react-icons/io";
import Autoplay from "embla-carousel-autoplay";
export default function Review() {
  return (
    <div className="relative py-10">
      <h1 className="mb-2 px-4 text-[20px] font-medium lg:px-36 lg:text-[25px]">
        Customer Reviews
      </h1>
      <div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="h-[200px] w-full space-y-3 bg-slate-100 p-5">
                <div className="flex items-center justify-start gap-3">
                  <div className="h-12 w-12 rounded-full bg-black"></div>
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-[12px] font-semibold">Amira Anderson</p>
                    <p className="text-[10px]">October 29, 2023 at 3:30PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                </div>
                <p className="text-[12px]">
                  absolutely in love with my Mid-Century TV Cabinet! The
                  combination of wood and cane doors adds a touch of elegance to
                  my living room. The solid oak handles and legs give it a
                  sturdy feel. The soft-close drawers are a bonus.{" "}
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="h-[200px] w-full space-y-3 bg-slate-100 p-5">
                <div className="flex items-center justify-start gap-3">
                  <div className="h-12 w-12 rounded-full bg-black"></div>
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-[12px] font-semibold">Amira Anderson</p>
                    <p className="text-[10px]">October 29, 2023 at 3:30PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                </div>
                <p className="text-[12px]">
                  absolutely in love with my Mid-Century TV Cabinet! The
                  combination of wood and cane doors adds a touch of elegance to
                  my living room. The solid oak handles and legs give it a
                  sturdy feel. The soft-close drawers are a bonus.{" "}
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="h-[200px] w-full space-y-3 bg-slate-100 p-5">
                <div className="flex items-center justify-start gap-3">
                  <div className="h-12 w-12 rounded-full bg-black"></div>
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-[12px] font-semibold">Amira Anderson</p>
                    <p className="text-[10px]">October 29, 2023 at 3:30PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                </div>
                <p className="text-[12px]">
                  absolutely in love with my Mid-Century TV Cabinet! The
                  combination of wood and cane doors adds a touch of elegance to
                  my living room. The solid oak handles and legs give it a
                  sturdy feel. The soft-close drawers are a bonus.{" "}
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="h-[200px] w-full space-y-3 bg-slate-100 p-5">
                <div className="flex items-center justify-start gap-3">
                  <div className="h-12 w-12 rounded-full bg-black"></div>
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-[12px] font-semibold">Amira Anderson</p>
                    <p className="text-[10px]">October 29, 2023 at 3:30PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                </div>
                <p className="text-[12px]">
                  absolutely in love with my Mid-Century TV Cabinet! The
                  combination of wood and cane doors adds a touch of elegance to
                  my living room. The solid oak handles and legs give it a
                  sturdy feel. The soft-close drawers are a bonus.{" "}
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="h-[200px] w-full space-y-3 bg-slate-100 p-5">
                <div className="flex items-center justify-start gap-3">
                  <div className="h-12 w-12 rounded-full bg-black"></div>
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-[12px] font-semibold">Amira Anderson</p>
                    <p className="text-[10px]">October 29, 2023 at 3:30PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                </div>
                <p className="text-[12px]">
                  absolutely in love with my Mid-Century TV Cabinet! The
                  combination of wood and cane doors adds a touch of elegance to
                  my living room. The solid oak handles and legs give it a
                  sturdy feel. The soft-close drawers are a bonus.{" "}
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="h-[200px] w-full space-y-3 bg-slate-100 p-5">
                <div className="flex items-center justify-start gap-3">
                  <div className="h-12 w-12 rounded-full bg-black"></div>
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-[12px] font-semibold">Amira Anderson</p>
                    <p className="text-[10px]">October 29, 2023 at 3:30PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                  <IoMdStar className="text-[15px] text-yellow-500 lg:text-[20px]" />
                </div>
                <p className="text-[12px]">
                  absolutely in love with my Mid-Century TV Cabinet! The
                  combination of wood and cane doors adds a touch of elegance to
                  my living room. The solid oak handles and legs give it a
                  sturdy feel. The soft-close drawers are a bonus.{" "}
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
