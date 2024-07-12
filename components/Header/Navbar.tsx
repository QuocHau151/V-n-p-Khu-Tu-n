import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/utils/cn";

export const Navbar = () => {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
  return (
    <div className="fixed z-50 h-min w-full bg-white shadow-lg lg:py-[4px]">
      <div className="container flex items-center justify-between">
        <Link href="/" className="p-3">
          LOGO
        </Link>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/gioi-thieu" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Giới Thiệu
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Của Hàng</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/tin-tuc" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Tin Tức
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/lien-he" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Liên Hệ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center justify-center gap-3">
          <div className="hidden rounded-xl bg-red-500 px-5 py-2 text-sm text-white">
            Login
          </div>
          <div className="flex items-center justify-center gap-3">
            <Sheet>
              <SheetTrigger>
                <div className="flex items-center justify-center gap-1 rounded-2xl border border-black px-3 py-0.5">
                  <CiSearch className="text-[20px]" />
                  <p className="text-[12px]">Search</p>
                </div>
              </SheetTrigger>
              <SheetContent></SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger>
                <div className="flex items-center justify-center gap-2 rounded-2xl border border-black px-3 py-0.5">
                  <div className="relative">
                    <CiShoppingCart className="text-[20px]" />
                    <span className="absolute right-[-5px] top-[-2px] flex h-[12px] w-[12px] items-center justify-center rounded-full bg-red-600 text-[6px] text-white">
                      10
                    </span>
                  </div>

                  <p className="text-[12px]">Cart</p>
                </div>
              </SheetTrigger>
              <SheetContent></SheetContent>
            </Sheet>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <CiMenuBurger className="md:hi text-[20px] md:hidden" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-[13px] w-[100vw]">
                <Link href="/">
                  <DropdownMenuItem className="bg-gray-200 font-medium">
                    Trang Chủ
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />
                <Link href="/gioi-thieu">
                  <DropdownMenuItem className="font-medium">
                    Giới Thiệu
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="py-1">
                      <Link href="/cua-hang">
                        <DropdownMenuItem className="font-medium">
                          Cửa Hàng
                        </DropdownMenuItem>
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent className="ml-10">
                      Sản phẩm 1
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link href="/tin-tuc">
                  <DropdownMenuItem className="font-medium">
                    Tin Tức
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/lien-he">
                  <DropdownMenuItem className="font-medium">
                    Liên Hệ
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
