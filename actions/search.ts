"use server";
import { db } from "@/lib/db";

export const searchProduct = async (name: string) => {
  try {
    const res = await db.product.findMany({
      where: {
        name: {
          contains: name,
          // mode: "insensitive",
        },
      },
    });
    return res;
  } catch (error) {
    return "failed to fetch product";
  }
};
