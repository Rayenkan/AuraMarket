import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../utils/fetchProducts";
import ProductItem from "./productItem";

export function Products({}) {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log(products);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading categories: {error?.message}</p>;

  return (
    <div className="bg-white p-8 flex items-center flex-col">
      <div className="mb-8 text-center">
        <p className="text-[32px] font-bold">Our Products</p>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-16">
        {products.map((item: { id:number ;image: string; title: string; description: string; price: number; discount: number | null | undefined; }, index: React.Key | null | undefined) => (
          <ProductItem
            key={item.id}
            id={item.id}
            imgUrl={item.image}
            productName={item.title}
            productDesc={item.description}
            price={item.price}
            discount={22}
          />
        ))}
      </div>
    </div>
  );
}
