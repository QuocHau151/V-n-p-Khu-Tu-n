import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Products() {
  return (
    <div className="flex items-start gap-10">
      <Accordion
        type="multiple"
        defaultValue={["item-1", "item-2", "item-3", "item-4"]}
        className="hidden w-full basis-1/4 lg:block"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="border-b-1 text-[16px]">
            Product Type
          </AccordionTrigger>
          <AccordionContent className="">
            <div></div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="border-b-1 text-[16px]">
            Color
          </AccordionTrigger>
          <AccordionContent className="">
            <div></div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="border-b-1 text-[16px]">
            Price
          </AccordionTrigger>
          <AccordionContent className="">
            <div></div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="border-b-1 text-[16px]">
            Products
          </AccordionTrigger>
          <AccordionContent className="">
            <div></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full">
        <div className="mb-[120px] grid w-full grid-cols-2 gap-x-2 gap-y-[120px] md:grid-cols-3 md:gap-x-6">
          {Array.from({ length: 12 }).map((_, i) => (
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
        <Pagination className="mx-auto mb-10 w-full">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
