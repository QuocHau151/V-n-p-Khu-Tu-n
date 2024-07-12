import React from "react";
import { BreadcrumbShop } from "../../../components/Shop/Breadcrumb";
import Sidebar from "../../../components/Shop/Sidebar";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Products from "../../../components/Shop/Products";
import Promotion from "../../../components/Shop/Promotion";
import Features from "../../../components/Shop/Features";
export default function page() {
  return (
    <div className="pt-[80px]">
      <BreadcrumbShop />
      <div className="container flex w-full items-center justify-between">
        <div className="flex w-full items-center justify-between py-3 lg:justify-end lg:py-5">
          <p className="text-[13px] lg:hidden">Showing 1–12 of 71 results</p>
          <div className="flex items-center gap-2 text-[13px]">
            <div className="rounded-2xl border px-4 py-2 text-slate-600">
              <Sidebar />
            </div>
            <div className="">
              <Select>
                <SelectTrigger className="rounded-2xl border px-4 py-1 text-[13px] text-slate-600">
                  <SelectValue className="" placeholder="Default Sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Products />
      </div>
      <Promotion />
      <Features />
    </div>
  );
}
