import React from "react";

export default function Description() {
  return (
    <div className="container border-y-1 pb-10 pt-5 md:flex md:items-center md:gap-7 lg:gap-10 lg:px-20 lg:py-16">
      <div className="flex w-full flex-col items-start gap-2 md:basis-1/2">
        <h1 className="text-[22px] lg:text-[30px]">
          Thông tin chi tiết sản phẩm
        </h1>
        <p className="text-[12px] lg:text-[15px]">
          Ullamcorper morbi tincidunt ornare massa eget. Viverra adipiscing at
          in tellus integer feugiat scelerisque varius. Pulvinar proin gravida
          hendrerit lectus a. Enim ut sem viverra aliquet eget sit amet.{" "}
        </p>
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between border-b-1 py-4">
            <h3 className="text-[12px] text-slate-500 lg:text-[15px]">Style</h3>
            <p className="text-[12px] lg:text-[15px]">Mid-century modern</p>
          </div>
          <div className="flex w-full items-center justify-between border-b-1 py-4">
            <h3 className="text-[12px] text-slate-500 lg:text-[15px]">
              Dimensions{" "}
            </h3>
            <p className="text-[12px] lg:text-[15px]"></p>
          </div>
          <div className="flex w-full items-center justify-between border-b-1 py-4">
            <h3 className="text-[12px] text-slate-500 lg:text-[15px]">
              Wood Stain
            </h3>
            <p className="text-[12px] lg:text-[15px]">Walnut</p>
          </div>
          <div className="flex w-full items-center justify-between border-b-1 py-4">
            <h3 className="text-[12px] text-slate-500 lg:text-[15px]">
              Materials
            </h3>
            <p className="text-[12px] lg:text-[15px]">
              Full-aniline leather, solid walnut, duck down
            </p>
          </div>
          <div className="flex w-full items-center justify-between pt-4">
            <h3 className="text-[12px] text-slate-500 lg:text-[15px]">
              SKU No.{" "}
            </h3>
            <p className="text-[12px] lg:text-[15px]">SKU001119</p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:h-[400px] md:w-[300px] md:basis-1/2 md:bg-slate-300"></div>
    </div>
  );
}
