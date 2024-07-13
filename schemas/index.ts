import { create } from "domain";
import { link } from "fs";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  phone: z.string().min(10, {
    message: "Phone is required",
  }),
});
export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});
export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});
export const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(10),
  note: z.string().min(10).max(100),
});
export const OrderSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  note: z.string(),
  payment: z.string(),
  items: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      price: z.string(),
      quantity: z.number(),
    }),
  ),
});
export const formCheckoutSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Tên Khách hàng không được để trống",
    })
    .max(30, { message: "Tên Khách hàng không được quá 30 ký tự" }),
  phone: z
    .string()
    .min(2, {
      message: "Số điện thoại không được để trống",
    })
    .max(11, { message: "Tên Khách hàng không được quá 11 ký tự" }),
  email: z
    .string()
    .min(2, {
      message: "Email không được để trống",
    })
    .max(30, { message: "Tên Khách hàng không được quá 30 ký tự" }),
  address: z
    .string()
    .min(2, {
      message: "Địa chỉ không được để trống",
    })
    .max(50, { message: "Tên Khách hàng không được quá 50 ký tự" }),
  note: z
    .string()
    .max(100, { message: "Tên Khách hàng không được quá 100 ký tự" }),
  payment: z.string(),
});
export const updateProductSchema = z.object({
  name: z.string().max(50),
  brand: z.string().max(50),
  tag: z.string(),
  price: z.string(),
  description: z.string().max(500),
  image: z.string(),
});
export const addProductSchema = z.object({
  id_product: z.string().max(50),
  name: z.string().max(50),
  brand: z.string().max(50),
  category: z.string(),
  tag: z.string(),
  price: z.string(),
  description: z.string().max(500),
  image: z.string(),
});
export const addEnergySchema = z.object({
  name: z.string().max(50),
  value: z.string(),
});
