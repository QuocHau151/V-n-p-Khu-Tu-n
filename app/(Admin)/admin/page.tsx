"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/lib/db";
import { fetchOrder } from "@/actions/order";
import { fetchProduct } from "@/actions/product";
import { fetchUser } from "@/actions/users";

export default function Dashboard() {
  const [order, setOrder] = useState<any[]>([]);
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const order = await fetchOrder();
        setOrder(order as unknown as any);
        const product = await fetchProduct();
        setProduct(product as unknown as any);
        const user = await fetchUser();
        setUser(user as unknown as any);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const total = order.map((item) => {
    const data = item?.items_price.reduce((a: number, b: number) => {
      const total = Number(a) + Number(b);
      return total;
    }, 0);
    return data;
  });
  const sum = total.reduce(
    (acc, currentValue) => Number(acc) + Number(currentValue),
    0
  );
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Doanh Thu</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {" "}
                  {Number(sum).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
                <p className="text-xs text-muted-foreground"></p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Tổng Số Khách Hàng
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user?.length}+</div>
                <p className="text-xs text-muted-foreground"></p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Tổng Số Đơn Hàng
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+{order?.length}</div>
                <p className="text-xs text-muted-foreground"></p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Tổng Số Sản Phẩm
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+{product?.length}</div>
                <p className="text-xs text-muted-foreground"></p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Đơn Hàng Mới Nhất</CardTitle>
                  <CardDescription>
                    Hãy kiểm tra đơn hàng mới nhất của bạn
                  </CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                  <Link href="/admin/order">
                    Xem Tất Cả
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead className="">Type</TableHead>
                      <TableHead className="">Status</TableHead>
                      <TableHead className="">Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {order?.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="font-medium">{item?.name}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {item?.email}
                          </div>
                        </TableCell>
                        <TableCell className="">{item.payment}</TableCell>
                        <TableCell className="">
                          <Badge className="text-xs" variant="outline">
                            {item?.state}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell lg:">
                          {item?.create_at.toString()}
                        </TableCell>
                        <TableCell className="text-right">
                          {item?.items_price.reduce((a: number, b: number) => {
                            const total = Number(a) + Number(b);
                            return total;
                          }, 0)}
                          đ
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader>
                <CardTitle>Khách hàng mới nhất</CardTitle>
              </CardHeader>
              {user?.map((item, index) => (
                <CardContent className="grid gap-8" key={index}>
                  <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                      <AvatarImage src="/avatars/01.png" alt="Avatar" />
                      <AvatarFallback>?</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium leading-none">
                        {item?.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item?.email}
                      </p>
                    </div>
                    <div className="ml-auto font-medium">{item?.phone}</div>
                  </div>
                </CardContent>
              ))}
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
