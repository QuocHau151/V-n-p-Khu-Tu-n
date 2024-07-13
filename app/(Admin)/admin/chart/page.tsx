"use client";
import {
  createUserEnergy,
  deleteUserEnergy,
  fetchUserEnergy,
  updateUserEnergy,
} from "@/actions/totalGoal";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { db } from "@/lib/db";
import React, { FormEvent, useEffect, useState, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { redirect } from "next/navigation";
import { set } from "zod";
interface FormData {
  name: string;
  value: string;
}
export default function Chart() {
  const [data, setData] = useState<EnergyData[]>([]);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [id, setId] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [name, setName] = useState<string>("");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    value: "",
  });
  console.log(formData);
  const [isPending, startTransition] = useTransition();
  const fetchData = async () => {
    try {
      const res = await fetchUserEnergy();
      setData(res as unknown as EnergyData[]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Xử lý submit form ở đây, ví dụ: gửi dữ liệu đến server
    startTransition(() => {
      createUserEnergy(formData).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
      redirect("/admin/chart");
    });
  };

  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // Xử lý submit form ở đây, ví dụ: gửi dữ liệu đến server
    startTransition(() => {
      updateUserEnergy(id, formData).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
      redirect("/admin/chart");
    });
    console.log(formData);
  };
  const handleDelete = (id: string) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      deleteUserEnergy(id).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };
  return (
    <div className="mt-[60px] ml-[100px]  flex items-start justify-center gap-10">
      <div className="p-4 border rounded-xl">
        <h1 className="text-center text-[20px] font-semibold mb-10">
          Danh sách khách hàng
        </h1>
        {data?.map((item, index) => (
          <div key={index} className="flex items-center justify-start gap-3">
            <h1 className="w-[150px]">{item.name}:</h1>
            <input
              type="text"
              className=" h-10 border rounded-md px-2 text-right w-min"
              placeholder=""
              value={item.value}
            />
            KWh
            <Dialog>
              <DialogTrigger>
                <HiOutlineDotsHorizontal
                  onClick={() => {
                    setId(item.id);
                    setName(item.name);
                    setValue(item.value);
                    setFormData({
                      name: item.name,
                      value: item.value,
                    });
                  }}
                />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Sửa thông tin</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleUpdate}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleChangeName}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="value" className="text-right">
                        Value
                      </Label>
                      <Input
                        type="number"
                        id="value"
                        name="value"
                        value={value}
                        onChange={handleChangeValue}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end gap-3">
                    <FormError message={error || ""} />
                    <FormSuccess message={success || ""} />
                    <div className="flex items-center justify-end gap-3">
                      <Button
                        disabled={isPending}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(item.id);
                        }}
                        className=" bg-danger-500"
                      >
                        Xoá khách hàng
                      </Button>
                      <Button disabled={isPending} type="submit">
                        Lưu thay đổi
                      </Button>
                    </div>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
      <div className="p-4 border rounded-xl">
        <h1 className="text-center text-[20px] font-semibold mb-10">
          Tạo khách hàng mới
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col justify-center gap-2"
        >
          <div className="flex items-center gap-3">
            <label htmlFor="name">Name:</label>
            <input
              className="border rounded-md px-2 h-10 w-50"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="value">Value:</label>
            <input
              className="border rounded-md px-2 h-10 w-50"
              type="number"
              id="value"
              name="value"
              value={formData.value}
              onChange={handleChange}
            />
          </div>
          <FormSuccess message={success || ""} />
          <FormError message={error || ""} />
          <button
            type="submit"
            className="px-5 py-2 bg-black text-white rounded-xl "
          >
            Tạo Mới
          </button>
        </form>
      </div>
    </div>
  );
}
