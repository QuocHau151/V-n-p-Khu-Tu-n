import Image from "next/image";
import React, { useState } from "react";

import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { IoCart } from "react-icons/io5";

export default function Reviews() {
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
                  <div className="relative h-60 rounded-lg border bg-slate-200"></div>
                </div>
                <div className="px-2">
                  <div className="flex flex-col items-start gap-2">
                    <h2 className="mt-2">Rustic Dining Table</h2>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                    <p className="text-[13px]">
                      Absolutely thrilled with the new coffee table! Weve
                      received so many compliments, and friends are eager to
                      know where we found it.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-top-10 right-7 text-black md:right-10" />
          <CarouselNext className="-top-10 right-1" />
          <h1 className="absolute -top-10 left-1 text-[20px] md:-top-14 md:text-[30px]">
            Ratings from Our Customers
          </h1>
        </Carousel>
      </div>
    </div>
  );
}
