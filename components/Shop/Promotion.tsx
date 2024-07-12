"use client";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Promotion() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel className="container relative my-20" setApi={setApi}>
        <CarouselContent>
          <CarouselItem>
            <div className="flex flex-col items-start gap-2 pb-[150px] lg:h-full lg:flex-row lg:gap-10 lg:pb-[180px]">
              <div className="h-[200px] w-full bg-slate-200 lg:h-full lg:w-[100%]"></div>
              <div className="grid w-full grid-cols-2 gap-x-2 gap-y-[100px]">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="relative h-60 w-full place-content-stretch bg-slate-200"
                  >
                    <div className="grid h-full place-items-center">
                      <div className="absolute top-2 z-10 flex w-full items-center justify-between px-3">
                        <div className="grid place-content-center rounded-xl bg-yellow-500 px-2 text-[10px]">
                          Sale
                        </div>
                        <div className="grid place-content-center rounded-full bg-white p-1">
                          <CiHeart className="text-[15px] text-black" />
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
                      </div>
                      <div className="flex items-center justify-between">
                        <div className=" ">
                          <h1 className="text-[14px]">Name</h1>
                          <p className="text-[14px]">100000$$</p>
                        </div>
                        <div className="grid h-8 w-8 place-content-center rounded-full bg-black">
                          <IoCart size={20} color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col items-start gap-2 pb-[150px] lg:h-full lg:flex-row lg:gap-10 lg:pb-[80px]">
              <div className="h-[200px] w-full bg-slate-200 lg:h-full lg:w-[100%]"></div>
              <div className="grid w-full grid-cols-2 gap-x-2 gap-y-[100px]">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="relative h-60 w-full place-content-stretch bg-slate-200"
                  >
                    <div className="grid h-full place-items-center">
                      <div className="absolute top-2 z-10 flex w-full items-center justify-between px-3">
                        <div className="grid place-content-center rounded-xl bg-yellow-500 px-2 text-[10px]">
                          Sale
                        </div>
                        <div className="grid place-content-center rounded-full bg-white p-1">
                          <CiHeart className="text-[15px] text-black" />
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
                      </div>
                      <div className="flex items-center justify-between">
                        <div className=" ">
                          <h1 className="text-[14px]">Name</h1>
                          <p className="text-[14px]">100000$$</p>
                        </div>
                        <div className="grid h-8 w-8 place-content-center rounded-full bg-black">
                          <IoCart size={20} color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col items-start gap-2 pb-[150px] lg:h-full lg:flex-row lg:gap-10 lg:pb-[80px]">
              <div className="h-[200px] w-full bg-slate-200 lg:h-full lg:w-[100%]"></div>
              <div className="grid w-full grid-cols-2 gap-x-2 gap-y-[100px]">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="relative h-60 w-full place-content-stretch bg-slate-200"
                  >
                    <div className="grid h-full place-items-center">
                      <div className="absolute top-2 z-10 flex w-full items-center justify-between px-3">
                        <div className="grid place-content-center rounded-xl bg-yellow-500 px-2 text-[10px]">
                          Sale
                        </div>
                        <div className="grid place-content-center rounded-full bg-white p-1">
                          <CiHeart className="text-[15px] text-black" />
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
                      </div>
                      <div className="flex items-center justify-between">
                        <div className=" ">
                          <h1 className="text-[14px]">Name</h1>
                          <p className="text-[14px]">100000$$</p>
                        </div>
                        <div className="grid h-8 w-8 place-content-center rounded-full bg-black">
                          <IoCart size={20} color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bottom-3 right-10 text-[220px] md:right-12" />
        <CarouselNext className="bottom-3 right-3 text-[220px]" />
        <div className="absolute bottom-5 left-5 w-[75%] md:left-10 md:w-[80%]">
          {Array.from({ length: count }).map((_, index) => (
            <span
              key={index}
              className={`${
                current === index + 1 ? "bg-black" : "bg-slate-100"
              } inline-block h-1 w-1/3`}
            />
          ))}
        </div>
      </Carousel>
    </>
  );
}
