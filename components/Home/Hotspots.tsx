"use client";
import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
export default function Hotspots() {
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
    <div className="my-10">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card className="rounded-none border-x-0">
                  <CardContent className="flex h-60 items-center justify-center md:h-[500px]">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="relative">
          <CarouselPrevious className="-bottom-[30px] right-7 md:-bottom-[40px] md:right-[100px] lg:right-[300px]" />
          <CarouselNext className="-bottom-[30px] right-1 md:-bottom-[40px] md:right-[60px] lg:right-[250px]" />
        </div>
      </Carousel>
      <div className="ml-2 mr-20 md:mx-auto md:mt-3 md:w-[600px]">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`${
              current === index + 1 ? "bg-black" : "bg-slate-100"
            } inline-block h-2 w-1/5`}
          />
        ))}
      </div>
    </div>
  );
}
