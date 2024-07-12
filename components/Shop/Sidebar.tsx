import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>Fillter</div>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>Category</SheetHeader>
        <Accordion
          type="multiple"
          defaultValue={["item-1", "item-2", "item-3", "item-4"]}
          className="w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="border-b-1 text-[16px]">
              Product Type
            </AccordionTrigger>
            <AccordionContent className="">
              <div></div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="border-b-1 text-[16px]">
              Color
            </AccordionTrigger>
            <AccordionContent className="">
              <div></div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="border-b-1 text-[16px]">
              Price
            </AccordionTrigger>
            <AccordionContent className="">
              <div></div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="border-b-1 text-[16px]">
              Products
            </AccordionTrigger>
            <AccordionContent className="">
              <div></div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
