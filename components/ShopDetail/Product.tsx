"use client";
import React, { useRef, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { LiaCartPlusSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export default function Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="container space-y-5 py-5 lg:flex lg:gap-20">
      <div className="lg:w-[400px]">
        <Swiper
          spaceBetween={10}
          thumbs={{
            swiper: thumbsSwiper,
          }}
          modules={[FreeMode, Thumbs]}
          className="mb-1 h-[300px] rounded-xl md:h-[400px]"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
          spaceBetween={2}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className="aspect-square w-full overflow-hidden">
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="lg: flex flex-col items-start gap-2 lg:gap-4">
        <h1 className="text-[22px] font-semibold lg:text-[30px]">
          Elegance Lounge Armchair
        </h1>
        <div className="flex items-center justify-start gap-2">
          <div className="flex items-center">
            <IoMdStar className="text-[12px] text-yellow-500 lg:text-[20px]" />
            <IoMdStar className="text-[12px] text-yellow-500 lg:text-[20px]" />
            <IoMdStar className="text-[12px] text-yellow-500 lg:text-[20px]" />
            <IoMdStar className="text-[12px] text-yellow-500 lg:text-[20px]" />
            <IoMdStar className="text-[12px] text-yellow-500 lg:text-[20px]" />
          </div>
          <span className="text-[8px] lg:text-[16px]">2 Review</span>
        </div>
        <p className="text-[12px] lg:text-[15px]">
          Ullamcorper morbi tincidunt ornare massa eget. Viverra adipiscing at
          in tellus integer feugiat scelerisque varius. Pulvinar proin gravida
          hendrerit lectus.
        </p>
        <div className="text-[18px] font-light text-red-500 lg:text-[25px]">
          {" "}
          Price: 100$
        </div>
        <div className="flex flex-col items-start gap-2">
          <h5 className="text-[12px] lg:text-[20px]">Material: Caramel</h5>
          <div className="flex items-center justify-start gap-1">
            <div className="h-[13px] w-[13px] rounded-full bg-gray-100 lg:h-[20px] lg:w-[20px]"></div>
            <div className="h-[13px] w-[13px] rounded-full bg-gray-200 lg:h-[20px] lg:w-[20px]"></div>
            <div className="h-[13px] w-[13px] rounded-full bg-gray-300 lg:h-[20px] lg:w-[20px]"></div>
            <div className="h-[13px] w-[13px] rounded-full bg-gray-400 lg:h-[20px] lg:w-[20px]"></div>
            <div className="h-[13px] w-[13px] rounded-full bg-gray-500 lg:h-[20px] lg:w-[20px]"></div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-start gap-3">
          <div className="flex items-center gap-1 rounded-xl bg-black px-6 py-[6px] text-[10px] font-extralight text-white lg:px-10 lg:py-3 lg:text-[15px]">
            Add to cart
            <LiaCartPlusSolid size={15} />
          </div>
          <div className="flex items-center gap-1 rounded-xl border bg-white px-6 py-[6px] text-[10px] font-extralight lg:px-10 lg:py-3 lg:text-[15px]">
            Add to wishlist
            <CiHeart size={15} />
          </div>
        </div>
        <div className="mt-5 flex flex-col items-start gap-2">
          <div className="flex items-center gap-2 lg:gap-3">
            <CiLocationOn className="lg:text-[22px]" />
            <p className="text-[10px] lg:text-[14px]">
              Ship to Los Angeles, 90024
            </p>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <CiCircleCheck className="lg:text-[22px]" />
            <p className="text-[10px] lg:text-[14px]">In stock</p>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <CiDeliveryTruck className="lg:text-[22px]" />
            <p className="text-[10px] lg:text-[14px]">
              Delivery Estimated Within Oct 6 - Oct 13
            </p>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <CiTimer className="lg:text-[22px]" />
            <p className="text-[10px] lg:text-[14px]">14-Day Returns</p>
          </div>
        </div>
      </div>
    </div>
  );
}
