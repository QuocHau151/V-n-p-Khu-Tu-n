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
import { updateProductSchema } from "@/schemas";
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
import { getProductById, updateProduct } from "@/actions/product";
import { Textarea } from "@/components/ui/textarea";
import {
  FileState,
  MultiImageDropzone,
} from "../../../../../components/ui/uploadimg";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";

export default function EditProduct() {
  const [data, setData] = useState<ProductData>();
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();
  const [result, setResult] = useState<UpdateProductData>();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const param = useSearchParams();
  const id = param.get("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProductById(id as string);
        setData(res as unknown as ProductData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const form = useForm<z.infer<typeof updateProductSchema>>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      name: "",
      brand: "",
      tag: "",
      price: "",
      description: "",
      image: "",
    },
  });
  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key,
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  async function onSubmit(values: z.infer<typeof updateProductSchema>) {
    const update = {
      formValues: values,
      image: values.image,
    };
    const result = {
      name:
        update.formValues.name === ""
          ? data?.name || ""
          : update.formValues.name,
      brand:
        update.formValues.brand === ""
          ? data?.brand || ""
          : update.formValues.brand,
      tags:
        update.formValues.tag.toString() === ""
          ? data?.tag || []
          : update.formValues.tag.split(","),
      price:
        update.formValues.price.toString() === ""
          ? data?.price.toString() || ""
          : update.formValues.price.toString(),
      description:
        update.formValues.description === ""
          ? data?.description || ""
          : update.formValues.description,
      image:
        update.image.toString() === ""
          ? data?.image || []
          : update.image.split(","),
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
      }),
    );
    result.image = [...result.image, ...urls];
    console.log(result.image);
    setResult(result);

    await updateProduct(id as string, result as UpdateProductData).then(
      (data) => {
        setError(data?.error);
        setSuccess(data?.success);
      },
    );
  }

  const handleDeleteImage = (index: number) => {
    setData((prevData: ProductData | undefined) => {
      if (!prevData) {
        // Handle the case where prevData is undefined
        return undefined;
      }

      const newData = { ...prevData };
      if (newData.image) {
        newData.image.splice(index, 1);
      }
      return newData;
    });
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:ml-[60px] md:gap-8">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Cập nhật sản phẩm
          </h1>
        </div>
        <div className="flex w-full items-start justify-between gap-10">
          <div className="w-full flex-1 basis-2/3 rounded-xl border-[1px] border-black px-4 py-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            defaultValue={data?.name}
                            onChange={field.onChange}
                          />
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
                        <Input
                          defaultValue={data?.price}
                          onChange={field.onChange}
                        />
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
                        <Input
                          defaultValue={data?.brand}
                          onChange={field.onChange}
                        />
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
                        <Input
                          defaultValue={data?.tag}
                          onChange={field.onChange}
                        />
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
                        <Textarea
                          defaultValue={data?.description}
                          onChange={field.onChange}
                        ></Textarea>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Card
                  className="basis-1/3 overflow-hidden"
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
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-start justify-start gap-2">
                          {data?.image?.map((img, index) => (
                            <div
                              key={index}
                              className="relative h-20 w-20 rounded border"
                            >
                              <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="100"
                                src={img}
                                width="100"
                              />
                              <div
                                className="absolute right-1 top-1 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border bg-white text-[10px]"
                                onClick={() => handleDeleteImage(index)}
                              >
                                x
                              </div>
                            </div>
                          ))}
                        </div>
                        <div>
                          <MultiImageDropzone
                            value={fileStates}
                            dropzoneOptions={{
                              maxFiles: 3,
                            }}
                            onChange={(files) => {
                              setFileStates(files);
                            }}
                            // onFilesAdded={async (addedFiles) => {
                            //   setFileStates([...fileStates, ...addedFiles]);
                            //   await Promise.all(
                            //     addedFiles.map(async (addedFileState) => {
                            //       try {
                            //         const res =
                            //           await edgestore.publicFiles.upload({
                            //             file: addedFileState.file as File,
                            //             input: { type: "image" },
                            //             onProgressChange: async (progress) => {
                            //               updateFileProgress(
                            //                 addedFileState.key,
                            //                 progress
                            //               );
                            //               if (progress === 100) {
                            //                 // wait 1 second to set it to complete
                            //                 // so that the user can see the progress bar at 100%
                            //                 await new Promise((resolve) =>
                            //                   setTimeout(resolve, 1000)
                            //                 );
                            //                 updateFileProgress(
                            //                   addedFileState.key,
                            //                   "COMPLETE"
                            //                 );
                            //               }
                            //             },
                            //           });
                            //         setImageURL([res.url]);
                            //       } catch (err) {
                            //         updateFileProgress(
                            //           addedFileState.key,
                            //           "ERROR"
                            //         );
                            //       }
                            //     })
                            //   );
                            // }}
                          />
                          {/* <div className="h-[6px] w-44 border rounded overflow-hidden ">
                            <div
                              className="h-full bg-black"
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div> */}
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
