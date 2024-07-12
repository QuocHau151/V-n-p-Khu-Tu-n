import React from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoMdStar } from "react-icons/io";
import { CiTrash } from "react-icons/ci";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
export default function Cart() {
  return (
    <div className="container flex flex-col gap-2 pb-10 pt-5 md:flex-row md:gap-5">
      <div className="md:basis-[65%] lg:basis-[70%]">
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-semibold">Giỏ hàng</h1>
          <div className="flex items-center gap-1">
            <TiArrowBackOutline className="text-[20px]" />
            <p className="text-[13px] lg:text-[15px]">Back To Shopping</p>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <div className="grid grid-cols-12 border-y-1 py-3">
            <div className="col-span-5 text-[12px] font-medium lg:text-[16px]">
              Sản phẩm
            </div>
            <div className="col-span-2 text-[12px] font-medium lg:text-[16px]">
              Đơn giá
            </div>
            <div className="col-span-2 text-[12px] font-medium lg:text-[16px]">
              Số lượng
            </div>
            <div className="col-span-2 text-[12px] font-medium lg:text-[16px]">
              Tổng{" "}
            </div>
            <div className="col-span-1 text-[12px] font-medium lg:text-[16px]">
              <CiTrash className="text-[15px] lg:text-[20px]" />
            </div>
          </div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="grid grid-cols-12 border-b-1 py-5">
              <div className="col-span-5 flex items-center gap-2 text-[12px] font-medium">
                <div className="min-h-16 min-w-16 bg-slate-200 lg:min-h-20 lg:min-w-20"></div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center lg:text-[16px]">
                    <IoMdStar className="text-yellow-500" />
                    <IoMdStar className="text-yellow-500" />
                    <IoMdStar className="text-yellow-500" />
                    <IoMdStar className="text-yellow-500" />
                    <IoMdStar className="text-yellow-500" />
                  </div>
                  <h3 className="text-[10px] font-medium lg:text-[14px]">
                    Upholstered ádasdasdadáda
                  </h3>
                  <p className="text-[10px] lg:text-[14px]">Color: red</p>
                  <p className="text-[10px] lg:text-[14px]">Size: 123</p>
                </div>
              </div>
              <div className="col-span-2 flex items-center text-[12px] font-medium lg:text-[16px]">
                100$
              </div>
              <div className="col-span-2 my-auto flex h-min w-min items-center gap-2 rounded-3xl border-1 p-1 text-[12px] font-medium lg:text-[16px]">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-100 text-[12px] lg:h-6 lg:w-6">
                  -
                </div>
                1
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-100 text-[12px] lg:h-6 lg:w-6">
                  +
                </div>
              </div>
              <div className="col-span-2 flex items-center text-[12px] font-medium lg:text-[16px]">
                1000$
              </div>
              <div className="col-span-1 flex items-center text-[12px] font-medium">
                <CiTrash className="text-[15px] lg:text-[20px]" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-4">
          <input
            className="rounded-2xl border px-6 py-2 text-[10px]"
            type="text "
            placeholder="Add gift/voucher code"
          />
          <button className="flex items-center gap-1 text-[13px]">
            <p>Apply</p>
            <IoArrowForwardCircleOutline size={18} />
          </button>
        </div>
      </div>
      <div className="mt-12 flex w-full flex-col justify-between rounded-xl bg-slate-100 px-3 py-4 md:basis-[35%] lg:basis-[30%]">
        <div className="flex flex-col gap-5">
          <h2 className="text-[20px] font-medium">Cart Totals</h2>
          <div className="">
            <div className="mb-2 flex items-center justify-between text-[14px]">
              <p>Cart Subtotal</p>
              <strong>$1379.18</strong>
            </div>
            <div className="flex items-center justify-between text-[14px]">
              <p>Shipping</p>
              <strong>Free</strong>
            </div>
          </div>
          <div className="mb-5 flex w-full items-center justify-between border-t-1 pt-3 text-[16px]">
            <p>Total</p>
            <strong>1000$</strong>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 rounded-2xl bg-black py-2 text-[15px] text-white">
          Processed to Checkout
          <BsCart2 />
        </div>
      </div>
    </div>
  );
}
