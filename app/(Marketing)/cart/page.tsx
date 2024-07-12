import { BreadcrumbCart } from "@/components/Cart/Breadcrumb";
import Cart from "@/components/Cart/Cart";
import Policy from "@/components/Cart/Policy";
import OtherProduct from "@/components/ShopDetail/OtherProduct";
import React from "react";

export default function page() {
  return (
    <div className="pt-[80px]">
      <BreadcrumbCart />
      <Cart />
      <Policy />
      <OtherProduct />
    </div>
  );
}
