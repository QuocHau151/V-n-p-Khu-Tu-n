"use client";
import React, { use, useEffect, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { set, z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { addProductSchema } from "@/schemas";
import { useEdgeStore } from "@/lib/edgestore";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addProduct, getProductById, updateProduct } from "@/actions/product";
import { Textarea } from "@/components/ui/textarea";
import {
  FileState,
  MultiImageDropzone,
} from "../../../../../components/ui/uploadimg";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";

export default function EditProduct() {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();
  const [result, setResult] = useState<AddProductData>();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof addProductSchema>>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      id_product: "",
      name: "",
      brand: "",
      tag: "",
      category: "",
      price: "",
      description: "",
      image: "",
    },
  });
  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  async function onSubmit(values: z.infer<typeof addProductSchema>) {
    const add = {
      formValues: values,
      image: values.image,
    };

    const result = {
      id_product: add.formValues.id_product,
      name: add.formValues.name,
      brand: add.formValues.brand,
      category: add.formValues.category,
      tags: add.formValues.tag.split(","),
      price: add.formValues.price,
      description: add.formValues.description,
      image: add.image.split(","),
    };
    let urls: string[] = [];
    await Promise.all(
      fileStates.map(async (addedFileState: any) => {
        try {
          const res = await edgestore.publicFiles.upload({
            file: addedFileState.file as File,
            input: { type: "image" },
            onProgressChange: async (progress) => {
              updateFileProgress(addedFileState.key, progress);
              if (progress === 100) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                updateFileProgress(addedFileState.key, "COMPLETE");
              }
            },
          });
          urls.push(res.url);
        } catch (err) {
          updateFileProgress(addedFileState.key, "ERROR");
        }
      })
    );
    result.image = [...result.image, ...urls];

    setResult(result);

    await addProduct(result as AddProductData).then((data) => {
      setError(data?.error);
      setSuccess(data?.success);
    });
  }
  console.log(result);
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:ml-[60px]">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Thêm sản phẩm
          </h1>
        </div>
        <div className="flex  items-start justify-between gap-10 w-full">
          <div className="flex-1 basis-2/3 w-full border-[1px] border-black px-4 py-6 rounded-xl">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
              >
                <FormField
                  control={form.control}
                  name="id_product"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>ID</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="brand"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Brand </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tag"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tag</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="resize-none"></Textarea>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Card
                  className="overflow-hidden basis-1/3"
                  x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Cập nhật hình ảnh</CardTitle>
                    <CardDescription>
                      Hãy cập nhật hình ảnh sản phẩm trước khi lưu sản phẩm
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className=" ">
                      <div className="flex flex-col  gap-2">
                        <div>
                          <MultiImageDropzone
                            value={fileStates}
                            dropzoneOptions={{
                              maxFiles: 3,
                            }}
                            onChange={(files) => {
                              setFileStates(files);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <FormError message={error || ""} />
                <FormSuccess message={success || ""} />
                <Button type="submit" disabled={isPending}>
                  Lưu Thay Đổi
                </Button>
                <Button
                  className="ml-2 bg-slate-100 text-black"
                  onClick={() => {
                    setResult(undefined);
                    window.location.reload();
                  }}
                >
                  Huỷ Bỏ
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}
