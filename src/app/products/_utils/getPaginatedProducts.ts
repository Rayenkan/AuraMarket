import { Product } from "@/lib/types";

export const getPaginatedProducts = (
  products: Product[],
  pageNumber: number,
  limit: number
): Product[] => {
  const startIndex = (pageNumber - 1) * limit;
  const endIndex = startIndex + limit;

  return products.slice(startIndex, endIndex);
};
