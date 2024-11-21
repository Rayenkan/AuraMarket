import React, { useEffect, useState } from "react";
import ProductItem from "./productItem";
import { useProductsQuery } from "../_utils/fetchProducts";
import useProductStore from "@/components/stores/productsStore";
import useUpdateSearchParams from "@/customHooks/useUpdateSearchParams";
import { getPaginatedProducts } from "@/app/products/_utils/getPaginatedProducts";
import { ProductItemType } from "@/lib/types";

type ProductsProps = {
  limit?: number;
  sortBy?: string;
};

export function Products({ sortBy }: ProductsProps) {
  const { getSearchParam } = useUpdateSearchParams();
  const { nbProductsToShow } = useProductStore();
  const pageNumber = Number(getSearchParam("page")) || 1;
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useProductsQuery(sortBy || "asc");
  const [paginatedProducts, setPaginatedProducts] = useState<ProductItemType[]>(
    []
  );

  useEffect(() => {
    if (products) {
      const paginated = getPaginatedProducts(
        products,
        pageNumber,
        nbProductsToShow
      );
      setPaginatedProducts(paginated);
    }
  }, [products, nbProductsToShow, pageNumber]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-white p-8 flex items-center flex-col">
      <div className="mb-12 text-center">
        <p className="text-[32px] font-bold">Our Products</p>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-16">
        {paginatedProducts.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
}
