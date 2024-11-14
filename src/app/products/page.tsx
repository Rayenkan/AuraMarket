"use client";
import { Icon2 } from "./svgs/icon2";
import { Icon1 } from "./svgs/icon1";
import { FilterIcon } from "./svgs/filterIcon";
import { Footer } from "@/components/reusable/footer";
import TopBar from "@/components/reusable/topBar";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDown, ArrowUp } from "lucide-react";

const Page = () => {
  const [nbProductsToShow, setNbProductsToShow] = useState(20);
  const [shownProducts, setShownProducts] = useState("");
  const [allProducts, setAllProducts] = useState("");
  useEffect(() => {
    setShownProducts("20")
    setAllProducts("30")
  }, []);
  return (
    <div className="h-screen w-screen bg-white overflow-x-hidden">
      <TopBar />
      <div className="h-[100px] bg-[#f9f1e7] flex items-center justify-between px-[4%] ">
        <div className="flex items-center justify-start space-x-6">
          <div className="flex items-center flex-row space-x-3 cursor-pointer">
            <FilterIcon />
            <p>Filter</p>
          </div>
          <Icon1 />
          <Icon2 />
          <div className="h-[40px] w-[2px] bg-gray-400">&shy;</div>
          <p>
            Showing 1-{shownProducts} of {allProducts} Results{" "}
          </p>
        </div>
        <div className="flex items-center justify-center flex-row space-x-4">
          <div className="flex items-center flex-row space-x-2">
            <p className="text-[20px]"> Show</p>
            <Input
              placeholder={String(nbProductsToShow)}
              onChange={(e) => setNbProductsToShow(Number(e.target.value))}
              className="size-fit w-10 p-2 bg-white"
            />
          </div>
          <div className="flex items-center flex-row space-x-2">
            <p className="text-[20px]">SortBy</p>
            <Select>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="SortBy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Price <ArrowUp/></SelectItem>
                <SelectItem value="desc">Price <ArrowDown/></SelectItem>
                <SelectItem value="Popularity">Popularity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Page;
