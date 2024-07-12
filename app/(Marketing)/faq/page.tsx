"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LuPhoneIncoming } from "react-icons/lu";
import Autoplay from "embla-carousel-autoplay";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
export default function Page() {
  return (
    <div className="">
      <div className="flex h-[500px] w-full flex-col items-center justify-center bg-slate-200">
        <h1 className="text-[30px] font-medium">Câu hỏi liên quan</h1>
        <p className="px-5 text-center text-[15px]">
          You&apos;ll find a selection of our most frequently sought-after
          topics to assist you further
        </p>
      </div>
      <div className="container flex flex-col gap-5 py-10 md:mx-auto md:w-[900px] md:flex-row">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 border-b-1 py-5">
              <div className="h-14 w-14 bg-slate-200"></div>
              <h1 className="text-[20px] font-medium">Shopping & Payment</h1>
            </div>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[16px]">
                  Do you have a showroom?
                </AccordionTrigger>
                <AccordionContent className="pl-3 text-[12px]">
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium vulputate sapien nec. Ipsuma arcu cursus vitae congue
                  mauris rhoncus aenean vel. Ultrices dui sapien eget mi proin.
                  Massa ultricies mi quis hendrerit dolor. Montes nascetur
                  ridiculus mus mauris vitae ultricies leo integer malesuada.
                  Neque sodales ut etiam sit amet nisl purus. Ut porttitor leo a
                  diam sollicitudin tempor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[16px]">
                  Do you offer Free Shipping?
                </AccordionTrigger>
                <AccordionContent className="pl-3 text-[12px]">
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium vulputate sapien nec. Ipsuma arcu cursus vitae congue
                  mauris rhoncus aenean vel. Ultrices dui sapien eget mi proin.
                  Massa ultricies mi quis hendrerit dolor. Montes nascetur
                  ridiculus mus mauris vitae ultricies leo integer malesuada.
                  Neque sodales ut etiam sit amet nisl purus. Ut porttitor leo a
                  diam sollicitudin tempor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[16px]">
                  What modes of payment do you accept?
                </AccordionTrigger>
                <AccordionContent className="pl-3 text-[12px]">
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium vulputate sapien nec. Ipsuma arcu cursus vitae congue
                  mauris rhoncus aenean vel. Ultrices dui sapien eget mi proin.
                  Massa ultricies mi quis hendrerit dolor. Montes nascetur
                  ridiculus mus mauris vitae ultricies leo integer malesuada.
                  Neque sodales ut etiam sit amet nisl purus. Ut porttitor leo a
                  diam sollicitudin tempor.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 border-b-1 py-5">
              <div className="h-14 w-14 bg-slate-200"></div>
              <h1 className="text-[20px] font-medium">Shopping & Payment</h1>
            </div>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[16px]">
                  Do you have a showroom?
                </AccordionTrigger>
                <AccordionContent className="pl-3 text-[12px]">
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium vulputate sapien nec. Ipsuma arcu cursus vitae congue
                  mauris rhoncus aenean vel. Ultrices dui sapien eget mi proin.
                  Massa ultricies mi quis hendrerit dolor. Montes nascetur
                  ridiculus mus mauris vitae ultricies leo integer malesuada.
                  Neque sodales ut etiam sit amet nisl purus. Ut porttitor leo a
                  diam sollicitudin tempor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[16px]">
                  Do you offer Free Shipping?
                </AccordionTrigger>
                <AccordionContent className="pl-3 text-[12px]">
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium vulputate sapien nec. Ipsuma arcu cursus vitae congue
                  mauris rhoncus aenean vel. Ultrices dui sapien eget mi proin.
                  Massa ultricies mi quis hendrerit dolor. Montes nascetur
                  ridiculus mus mauris vitae ultricies leo integer malesuada.
                  Neque sodales ut etiam sit amet nisl purus. Ut porttitor leo a
                  diam sollicitudin tempor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[16px]">
                  What modes of payment do you accept?
                </AccordionTrigger>
                <AccordionContent className="pl-3 text-[12px]">
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium vulputate sapien nec. Ipsuma arcu cursus vitae congue
                  mauris rhoncus aenean vel. Ultrices dui sapien eget mi proin.
                  Massa ultricies mi quis hendrerit dolor. Montes nascetur
                  ridiculus mus mauris vitae ultricies leo integer malesuada.
                  Neque sodales ut etiam sit amet nisl purus. Ut porttitor leo a
                  diam sollicitudin tempor.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 border-b-1 py-5">
              <div className="h-14 w-14 bg-slate-200"></div>
              <h1 className="text-[20px] font-medium">Shopping & Payment</h1>
            </div>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[16px]">
                  Do you have a showroom?
                </AccordionTrigger>
                <AccordionContent className="pl-3 text-[12px]">
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium vulputate sapien nec. Ipsuma arcu cursus vitae congue
                  mauris rhoncus aenean vel. Ultrices dui sapien eget mi proin.
                  Massa ultricies mi quis hendrerit dolor. Montes nascetur
                  ridiculus mus mauris vitae ultricies leo integer malesuada.
                  Neque sodales ut etiam sit amet nisl purus. Ut porttitor leo a
                  diam sollicitudin tempor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[16px]">
                  Do you offer Free Shipping?
                </AccordionTrigger>
                <AccordionContent className="pl-3 text-[12px]">
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium vulputate sapien nec. Ipsuma arcu cursus vitae congue
                  mauris rhoncus aenean vel. Ultrices dui sapien eget mi proin.
                  Massa ultricies mi quis hendrerit dolor. Montes nascetur
                  ridiculus mus mauris vitae ultricies leo integer malesuada.
                  Neque sodales ut etiam sit amet nisl purus. Ut porttitor leo a
                  diam sollicitudin tempor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[16px]">
                  What modes of payment do you accept?
                </AccordionTrigger>
                <AccordionContent className="pl-3 text-[12px]">
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium vulputate sapien nec. Ipsuma arcu cursus vitae congue
                  mauris rhoncus aenean vel. Ultrices dui sapien eget mi proin.
                  Massa ultricies mi quis hendrerit dolor. Montes nascetur
                  ridiculus mus mauris vitae ultricies leo integer malesuada.
                  Neque sodales ut etiam sit amet nisl purus. Ut porttitor leo a
                  diam sollicitudin tempor.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-slate-200 p-5">
          <h1 className="text-[20px] font-medium">
            Have Questions? Ask Our Furnix Team!
          </h1>
          <p className="text-[13px] font-light">
            Ultrices neque ornare aenean euismod elementum nisi. Vulputate mi
            sit amet mauris commodo quis. Sit amet nisl purus in mollis.
          </p>
          <div className="flex items-center justify-start gap-20">
            <div className="flex items-center gap-3">
              <LuPhoneIncoming size={20} />
              <div className="flex flex-col text-[15px] font-light">
                <p>+ 123123123</p>
                <p>+ 123123123</p>
              </div>
            </div> 
            <div className="flex items-center gap-3">
              <CiMail size={20} />
              <div className="flex flex-col text-[15px] font-light">
                <p>+ 123123123</p>
                <p>+ 123123123</p>
              </div>
            </div>
          </div>
          <div className="flex w-32 items-center justify-center gap-2 rounded-2xl border-1 border-black px-3 py-2">
            Shop now <IoArrowForwardCircleOutline />
          </div>
          <div className="h-[500px] border-1 bg-white md:h-full"></div>
        </div>
      </div>
      <div className="relative py-10">
        <div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem className="basis-[70%] md:basis-[40%] lg:basis-[20%]">
                <div className="h-40 w-full bg-slate-200"></div>
              </CarouselItem>
              <CarouselItem className="basis-[70%] md:basis-[40%] lg:basis-[20%]">
                <div className="h-40 w-full bg-slate-200"></div>
              </CarouselItem>
              <CarouselItem className="basis-[70%] md:basis-[40%] lg:basis-[20%]">
                <div className="h-40 w-full bg-slate-200"></div>
              </CarouselItem>
              <CarouselItem className="basis-[70%] md:basis-[40%] lg:basis-[20%]">
                <div className="h-40 w-full bg-slate-200"></div>
              </CarouselItem>
              <CarouselItem className="basis-[70%] md:basis-[40%] lg:basis-[20%]">
                <div className="h-40 w-full bg-slate-200"></div>
              </CarouselItem>
              <CarouselItem className="basis-[70%] md:basis-[40%] lg:basis-[20%]">
                <div className="h-40 w-full bg-slate-200"></div>
              </CarouselItem>
              <CarouselItem className="basis-[70%] md:basis-[40%] lg:basis-[20%]">
                <div className="h-40 w-full bg-slate-200"></div>
              </CarouselItem>
              <CarouselItem className="basis-[70%] md:basis-[40%] lg:basis-[20%]">
                <div className="h-40 w-full bg-slate-200"></div>
              </CarouselItem>
              <CarouselItem className="basis-[70%] md:basis-[40%] lg:basis-[20%]">
                <div className="h-40 w-full bg-slate-200"></div>
              </CarouselItem>
              <CarouselItem className="basis-[70%] md:basis-[40%] lg:basis-[20%]">
                <div className="h-40 w-full bg-slate-200"></div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
