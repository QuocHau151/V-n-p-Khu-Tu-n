import { BreadcrumbWishlist } from "@/components/Wishlist/Breadcrumb";
import Policy from "@/components/Wishlist/Policy";
import Wishlist from "@/components/Wishlist/Wishlist";
import React from "react";

export default function Page() {
  return (
    <div className="pt-[80px]">
      <BreadcrumbWishlist />
      <Wishlist />
      <Policy />
    </div>
  );
}
