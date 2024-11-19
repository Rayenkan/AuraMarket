import React from "react";
import { FilterIcon } from "../svgs/filterIcon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export function FilterSheet({}) {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center flex-row space-x-3 cursor-pointer">
          <FilterIcon />
          <p>Filter</p>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>will do later</SheetTitle>
          <SheetDescription>To do later</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
