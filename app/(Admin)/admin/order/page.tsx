"use client";

import React, {
  createContext,
  use,
  useEffect,
  useState,
  useTransition,
} from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fetchProduct } from "@/actions/product";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  MoreVertical,
  Truck,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  deleteOrder,
  fetchOrder,
  getOrderById,
  updateStateOrder,
} from "@/actions/order";
import { useOrder } from "@/store/useStore";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface OrderData {
  id: string;
  name: string;
  phone: string;
  email: string;
  state: string;
  address: string;
  note: string;
  payment: string;
  items_id: string;
  items_name: Array<string>;
  items_price: Array<string>;
  items_quantity: Array<string>;
  create_at: Date;
  update_at: Date;
}
const StateCell = ({ row }: { row: any }) => {
  const [state, setState] = useState(row.getValue("state") as string);
  const updateState = async (newState: StateOrder) => {
    await updateStateOrder(row.original.id, newState);
    setState(newState);
  };
  const [color, setColor] = useState(state);
  useEffect(() => {
    switch (state) {
      case "Pending":
        setColor("bg-yellow-600 max-md:text-[10px]");
        break;
      case "Done":
        setColor("bg-green-600 max-md:text-[10px]");
        break;
      case "Cancel":
        setColor("bg-red-600 max-md:text-[10px]");
        break;
    }
  }, [state]);

  return (
    <Select onValueChange={updateState}>
      <SelectTrigger
        className={`flex h-[24px] w-[78px] items-center text-[12px] ${color}`}
      >
        <SelectValue placeholder={state} />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem
          className="bg-yellow-600 max-md:text-[13px]"
          value="Pending"
        >
          Pending
        </SelectItem>
        <SelectItem className="bg-green-600 max-md:text-[13px]" value="Done">
          Done
        </SelectItem>
        <SelectItem className="bg-red-600 max-md:text-[13px]" value="Cancel">
          Cancel
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

const columns: ColumnDef<OrderData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "address",
    header: ({ column }) => {
      return <div>Address</div>;
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("address")}</div>
    ),
  },
  {
    accessorKey: "state",
    header: () => <div className="">State</div>,
    cell: ({ row }) => <StateCell row={row} />,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const order = row.original;

      return <GetOrder orderId={order.id} />;
    },
  },
];

const GetOrder = ({ orderId }: { orderId: any }) => {
  const setOrderId = useOrder((state) => state.setOrderId);
  const storedOrderId = useOrder((state) => state.orderId);
  const [isPending, startTransition] = useTransition();

  const handleOrderId = (id: any) => {
    setOrderId(id);
  };
  const handleDeleteOrder = async (id: any) => {
    try {
      await deleteOrder(id);
      return { success: "Delete order success" };
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const { toast } = useToast();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="max-md:text-[13px]">
            More
          </DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(orderId)}
            className="max-md:text-[13px]"
          >
            Copy ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="max-md:text-[13px]"
            onClick={() => {
              handleOrderId(orderId);
            }}
          >
            Chi tiết đơn hàng
          </DropdownMenuItem>
          <DropdownMenuItem
            className="max-md:text-[13px]"
            onClick={() =>
              startTransition(() => {
                handleDeleteOrder(orderId).then((data) => {
                  toast({
                    title: data?.success,
                  });
                });
              })
            }
          >
            Xoá đơn hàng
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default function Order() {
  const orderId = useOrder((state) => state.orderId);
  const [order, setOrder] = useState<OrderData | null>(null);
  const [data, setData] = useState<OrderData[]>([]);
  const [installation, setInstallation] = useState("5%");
  const [tax, setTax] = useState("10%");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchOrder();
        setData(res as unknown as OrderData[]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getOrder = async () => {
      try {
        if (orderId) {
          const res = await getOrderById(orderId);
          setOrder(res as unknown as OrderData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getOrder();
  }, [orderId]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  const [searchType, setSearchType] = useState("name");

  const newArrayOrderDetail = order?.items_name.map((itemName, index) => ({
    items_id: order.items_id,
    items_name: itemName,
    items_price: order.items_price[index],
    items_quantity: order.items_quantity[index],
  }));
  const calculateSubTotal = (array: typeof newArrayOrderDetail) => {
    return array?.reduce((total, item) => total + Number(item.items_price), 0);
  };

  // Sử dụng hàm
  const subTotal = calculateSubTotal(newArrayOrderDetail);
  const calculateTotalPrices = (subTotal: number) => {
    const installation = subTotal * 0.05; // Tính phí installation là 5% của subTotal
    const tax = subTotal * 0.1; // Tính thuế là 10% của subTotal
    const totalPrice = subTotal + installation + tax; // Tính totalPrice
    return totalPrice;
  };
  const totalPrice = calculateTotalPrices(subTotal as number);

  return (
    <>
      <main
        className={
          order
            ? "grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:ml-14 md:gap-8 lg:grid-cols-2 xl:grid-cols-3"
            : "grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:ml-14 md:gap-8 lg:grid-cols-2 xl:grid-cols-1"
        }
      >
        <div className="grid auto-rows-max items-start gap-4 md:gap-6 lg:col-span-1 xl:col-span-2">
          <div className="mr-4 flex items-center py-4">
            <Input
              placeholder={`Filter ${searchType}...`}
              value={
                (table.getColumn(searchType)?.getFilterValue() as string) || ""
              }
              onChange={(event) =>
                table.getColumn(searchType)?.setFilterValue(event.target.value)
              }
              className="mr-2 h-min max-w-sm"
            />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Type</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="border-b-[1px] border-black text-center">
                  Loại tìm kiếm
                </DropdownMenuLabel>
                <div
                  className="cursor-pointer border-b-[1px] border-black py-2 text-center"
                  onClick={() => setSearchType("name")}
                >
                  Name
                </div>
                <div
                  className="cursor-pointer border-b-[1px] border-black py-2 text-center"
                  onClick={() => setSearchType("email")}
                >
                  Email
                </div>
                <div
                  className="cursor-pointer border-b-[1px] border-black py-2 text-center"
                  onClick={() => setSearchType("address")}
                >
                  Address
                </div>
                <div
                  className="cursor-pointer py-2 text-center"
                  onClick={() => setSearchType("phone")}
                >
                  Phone
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className=""
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className="max-w-[130px] overflow-auto whitespace-nowrap lg:max-w-[150px]"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="mr-4 flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
        {order && (
          <div className="mr-4 lg:mr-0 xl:col-span-1">
            <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    ID: {order?.id}
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    Date: {order?.create_at.toDateString()}
                  </CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button
                    size="sm"
                    variant="outline"
                    className="relative h-8 gap-1"
                  >
                    <Truck className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap"></span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Trash</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Chi Tiết Đơn Hàng</div>
                  <ul className="grid gap-3">
                    {newArrayOrderDetail?.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-muted-foreground">
                          {item.items_name} x {item.items_quantity}
                        </span>
                        <span>
                          {Number(item.items_price).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tạm Tính</span>
                      <span>
                        {Number(subTotal).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Chi phí lắp đặt
                      </span>
                      <span>{installation}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Thuế</span>
                      <span>{tax}</span>
                    </li>
                    <li className="flex items-center justify-between font-semibold">
                      <span className="text-muted-foreground">Tổng</span>
                      <span>
                        {Number(totalPrice).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </li>
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <div className="font-semibold">Địa chỉ đơn hàng</div>
                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                      <span>{order?.address}</span>
                    </address>
                  </div>
                  <div className="grid auto-rows-max gap-3">
                    <div className="font-semibold">Ghi chú khách hàng</div>
                    <div className="text-muted-foreground">{order?.note}</div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Thông tin đơn hàng</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Tên khách hàng</dt>
                      <dd className="line-clamp-1">{order?.name}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Email</dt>
                      <dd>
                        <a href="mailto:">{order?.email}</a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Số điện thoại</dt>
                      <dd>
                        <a href="tel:">{order?.phone}</a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Cách thức thanh toán</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1 text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        Visa
                      </dt>
                      <dd>{order.payment}</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">November 23, 2023</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </div>
        )}
      </main>
    </>
  );
}
