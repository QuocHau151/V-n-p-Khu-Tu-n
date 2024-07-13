"use server";

import { OrderSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";

export const createOrder = async (values: z.infer<typeof OrderSchema>) => {
  const validatedFields = OrderSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Vui lòng nhập lại" };
  }
  const { name, phone, email, address, note, payment, items } =
    validatedFields.data;
  await db.order.create({
    data: {
      name,
      phone,
      email,
      address,
      note,
      payment,
      items: {
        create: items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity.toString(), // Convert quantity to string
        })),
      },
      create_at: new Date(),
    },
  });
  return { success: "Đặt hàng thành công" };
};
export const fetchOrder = async () => {
  try {
    const orders = await db.order.findMany();
    return orders;
  } catch (error) {
    return "failed to fetch user";
  }
};
export const getOrderById = async (id: string) => {
  try {
    const orders = await db.order.findUnique({
      where: { id }, // Add the 'id' property with a default value
    });
    return orders;
  } catch {
    return null;
  }
};
export const updateStateOrder = async (id: string, newState: StateOrder) => {
  const getOrder = await getOrderById(id);
  try {
    if (getOrder) {
      const users = await db.order.update({
        where: { id: getOrder.id },
        data: { state: newState },
      });
      return users;
    } else {
      return "Order not found";
    }
  } catch (error) {
    return "failed to update order";
  }
};

export const deleteOrder = async (id: string) => {
  try {
    const order = await db.order.delete({
      where: { id },
    });
    return order;
  } catch (error) {
    return "failed to fetch user";
  }
};
export const updateOrder = async (
  id: string,
  values: z.infer<typeof OrderSchema>,
) => {
  const validatedFields = OrderSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const {
    name,
    phone,
    email,
    address,
    items
  } = validatedFields.data;
  try {
    const order = await db.order.update({
      where: { id },
      data: {
        name,
        phone,
        email,
        address,
        items: {
          update: items.map((item) => ({
            where: { id: item.id }, // Specify the condition to find the item
            data: { // Specify the new values for the item
              name: item.name,
              price: item.price,
              quantity: item.quantity.toString(), // Convert quantity to string
            },
          })),
        },
      },
    });
    return order;
  } catch (error) {
    return "failed to fetch user";
  }
};
