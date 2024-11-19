import React, { useEffect, useState } from "react";
import ProductItem from "./productItem";
import { useProductsQuery } from "../utils/fetchProducts";
import useProductStore from "@/components/stores/productsStore";
import useUpdateSearchParams from "@/customHooks/useUpdateSearchParams";
import { getPaginatedProducts } from "@/app/products/utils/getPaginatedProducts";

type ProductsProps = {
  limit?: number;
  sortBy?: string;
};

type ProductItemType = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  discount: number | null | undefined;
};

export function Products({ sortBy }: ProductsProps) {
  const { getSearchParam, setSearchParam } = useUpdateSearchParams();
  const pageNumber = Number(getSearchParam("page")) || 1;
  const { nbProductsToShow } = useProductStore();
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useProductsQuery(sortBy || "asc");

  // State for paginated products
  const [paginatedProducts, setPaginatedProducts] = useState<ProductItemType[]>(
    []
  );

  // Update paginated products when dependencies change
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
            imgUrl={item.image}
            productName={item.title}
            productDesc={item.description}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
}
