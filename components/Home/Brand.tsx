"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingBrands } from "../ui/infinity-scroll-brand";

export function Brand() {
  return (
    <div className="relative flex h-[10rem] flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased">
      <InfiniteMovingBrands
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "/images/brand/brand-1.png",
  },
  {
    image: "/images/brand/brand-1.png",
  },
  {
    image: "/images/brand/brand-1.png",
  },
  {
    image: "/images/brand/brand-1.png",
  },
  {
    image: "/images/brand/brand-1.png",
  },
  {
    image: "/images/brand/brand-1.png",
  },
  {
    image: "/images/brand/brand-1.png",
  },
];
