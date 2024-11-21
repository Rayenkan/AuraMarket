"use client";
import { Filters } from "./_components/filters";
import { Footer } from "@/components/reusable/footer";
import TopBar from "@/components/reusable/topBar";
import { Products } from "../homePage/_components/products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useProductStore from "@/components/stores/productsStore";
import useUpdateSearchParams from "@/customHooks/useUpdateSearchParams";
import { PaginationComp } from "./_components/pagination";
import { useEffect } from "react";

const Page = () => {
  const queryClient = new QueryClient();

  const { getSearchParam } = useUpdateSearchParams();

  const { nbProductsToShow, sortBy, setNbProductsToShow } = useProductStore();
  useEffect(() => {
    setNbProductsToShow(
      getSearchParam("setNbProductsToShow")
        ? Number(getSearchParam("setNbProductsToShow"))
        : 10
    );
  }, [getSearchParam, setNbProductsToShow]);

  return (
    <QueryClientProvider client={queryClient}>
     
        <div className="h-screen w-screen bg-white overflow-x-hidden">
          <TopBar />
          <Filters />
          <Products limit={nbProductsToShow} sortBy={sortBy} />
          <PaginationComp />
          <Footer />
        </div>
    </QueryClientProvider>
  );
};
export default Page;
