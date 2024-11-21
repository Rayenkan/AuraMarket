import { Product } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (sortBy?: string): Promise<Product[]> => {
  const response = await fetch(
    `https://fakestoreapi.com/products?sort=${sortBy}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export const useProductsQuery = (
  sortBy?: string,
  options?: { onSuccess?: (data: Product[]) => void }
) => {
  return useQuery<Product[]>({
    queryKey: ["products", { sortBy }],
    queryFn: () => fetchProducts(sortBy),
    ...options, // Forward additional options, including onSuccess
  });
};
