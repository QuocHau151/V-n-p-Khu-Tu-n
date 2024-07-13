"use client";
import {
  Form,
  FormControl,
  FormLabel,
  FormMessage,
  FormItem,
  FormField,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Button } from "../ui/button";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";

import { useState, useTransition } from "react";
import { register } from "@/actions/register";

export default function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
    },
  });
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values).then((data) => {
        setSuccess(data.success);
        setError(data.error);
      });
    });
  };

  return (
    <>
      <Form {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col items-stretch gap-4 mb-8 max-md:mb-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Tên Khách Hàng"
                      type="text"
                      className="w-[500px] max-md:w-full max-md:text-[12px] max-md:h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Số điện thoại khách hàng"
                      type="text"
                      className="w-[500px] max-md:w-full max-md:text-[12px] max-md:h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Email"
                      type="email"
                      className="w-[500px] max-md:w-full max-md:text-[12px] max-md:h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Password"
                      type="password"
                      className="w-[500px] max-md:w-full max-md:text-[12px] max-md:h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="flex items-center justify-between w-full px-4 mb-8 max-md:mb-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                className="text-slate-500 border-black max-md:w-3 max-md:h-3"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium text-slate-500 leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70 max-md:text-[10px] text-left"
              >
                Ghi nhớ mật khẩu
              </label>
            </div>
            <Link
              href="/"
              className="text-sm font-medium text-slate-500 leading-none max-md:text-[10px] text-right"
            >
              Quên mật khẩu
            </Link>
          </div>
          <FormError message={error || ""} />
          <FormSuccess message={success || ""} />
          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-12 bg-orange-600 max-md:text-[12px] max-md:h-10 "
          >
            Tạo tài khoản
          </Button>
        </form>
      </Form>
    </>
  );
}
