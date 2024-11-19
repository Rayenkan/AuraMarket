import { FilterSheet } from './filterSheet';
import React from "react";
import { Icon2 } from "../svgs/icon2";
import { Icon1 } from "../svgs/icon1";


import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDown, ArrowUp } from "lucide-react";
import useProductStore from "@/components/stores/productsStore";
import useUpdateSearchParams from "@/customHooks/useUpdateSearchParams";
import { useProductsQuery } from "@/app/homePage/utils/fetchProducts";

export function Filters() {
  const { setSearchParam } = useUpdateSearchParams();
  const { nbProductsToShow, setNbProductsToShow, sortBy, setSortBy } =
    useProductStore();
  const { data: products, isLoading } = useProductsQuery(sortBy || "asc");

  useEffect(() => {
    if (sortBy) {
      setSearchParam("sortBy", sortBy);
    }
    if (nbProductsToShow) {
      setSearchParam("setNbProductsToShow", String(nbProductsToShow));
    }
  }, [sortBy, nbProductsToShow]);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="h-[100px] bg-[#f9f1e7] flex items-center justify-between px-[4%] ">
      <div className="flex items-center justify-start space-x-6">
       <FilterSheet     />

        <Icon1 />
        <Icon2 />
        <div className="h-[40px] w-[2px] bg-gray-400">&shy;</div>
        <p>{products?.length} Results </p>
      </div>
      <div className="flex items-center justify-center flex-row space-x-4">
        <div className="flex items-center flex-row space-x-2">
          <p className="text-[20px]"> Show</p>
          <Input
            value={nbProductsToShow}
            onChange={(e) => setNbProductsToShow(Number(e.target.value))}
            className="size-fit w-10 p-2 bg-white"
          />
        </div>
        <div className="flex items-center flex-row space-x-2">
          <p className="text-[20px]">SortBy</p>
          <Select onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="SortBy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">
                <div className="flex justify-between items-center flex-row">
                  <p>Price</p> <ArrowUp />
                </div>
              </SelectItem>
              <SelectItem value="desc">
                <div className="flex justify-between items-center flex-row">
                  <p>Price</p> <ArrowDown />
                </div>
              </SelectItem>
              <SelectItem value="popularity">Popularity</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
