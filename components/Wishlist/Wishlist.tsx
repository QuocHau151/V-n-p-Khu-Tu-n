import React from "react";
import { IoMdStar } from "react-icons/io";
import { CiTrash } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
export default function Wishlist() {
  return (
    <div className="container py-10">
      <h2 className="mb-3 text-[20px] font-medium lg:text-[25px]">Wishlist</h2>
      <div className="flex w-full flex-col items-start gap-3">
        <div className="grid w-full grid-cols-12 border-y-1 py-2">
          <div className="col-span-6 text-[12px] font-medium lg:text-[20px]">
            Sản phẩm
          </div>
          <div className="font col-span-2 text-[12px] font-medium lg:text-[20px]">
            Giá
          </div>
          <div className="col-span-3 text-[12px]"></div>
          <div className="col-span-1 text-[12px]"></div>
        </div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="grid w-full grid-cols-12">
            <div className="col-span-6 flex items-center gap-2 text-[12px] font-medium">
              <div className="min-h-16 min-w-16 bg-slate-200 lg:min-h-24 lg:min-w-24"></div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center lg:text-[16px]">
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                  <IoMdStar className="text-yellow-500" />
                </div>
                <h3 className="text-[10px] font-medium lg:text-[14px]">
                  Upholstered
                </h3>
                <p className="text-[10px] lg:text-[14px]">Color: red</p>
                <p className="text-[10px] lg:text-[14px]">Size: 123</p>
              </div>
            </div>
            <div className="col-span-2 flex items-center text-[12px] font-medium lg:text-[16px]">
              100$
            </div>

            <div className="col-span-3 flex items-center justify-start">
              <div className="flex items-center gap-2 rounded-2xl border-1 px-2 py-1 text-[10px] font-medium lg:text-[16px]">
                Add to cart
                <BsCart2 />
              </div>
            </div>
            <div className="col-span-1 flex items-center text-[12px] font-medium">
              <CiTrash className="text-[15px] lg:text-[20px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
