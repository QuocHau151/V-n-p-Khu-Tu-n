import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Features() {
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent className="">
          <CarouselItem className="flex basis-full items-center justify-center gap-2 border-y-1 py-10 md:basis-1/4">
            <Image
              src="/assets/icons/Icon/icon.png"
              width={20}
              height={20}
              alt=""
            />
            Premium Materials
          </CarouselItem>
          <CarouselItem className="flex basis-full items-center justify-center gap-2 border-y-1 py-10 md:basis-1/4">
            <Image
              src="/assets/icons/Icon/Icon-premium.png"
              width={20}
              height={20}
              alt=""
            />
            Free Swatches
          </CarouselItem>
          <CarouselItem className="flex basis-full items-center justify-center gap-2 border-y-1 py-10 md:basis-1/4">
            <Image
              src="/assets/icons/Icon/Icon-premium1.png"
              width={20}
              height={20}
              alt=""
            />
            Flat Rate Shipping
          </CarouselItem>
          <CarouselItem className="flex basis-full items-center justify-center gap-2 border-y-1 py-10 md:basis-1/4">
            <Image
              src="/assets/icons/Icon/Icon-premium2.png"
              width={20}
              height={20}
              alt=""
            />
            14-Day Returns
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
