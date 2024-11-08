"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategorieItem from "./CategorieItem";
import fetchCategories from "../utils/fetchCategories";

// Define the type for the fetched categories
interface Category {
  categorieName: string;
  categorieImgUrl: string;
}

export function Categories() {
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading categories: {error?.message}</p>;

  return (
    <div className="bg-white p-8 flex items-center flex-col">
      <div className="mb-8 text-center">
        <p className="text-[32px] font-bold">Browse the range</p>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          {categories?.map((categorie, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 gap-2"
            >
              <CategorieItem
                imgUrl={categorie.categorieImgUrl}
                categorieName={categorie.categorieName}
                link={"/login"}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
