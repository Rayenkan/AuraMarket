type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  discount: number | null | undefined;
};

export const getPaginatedProducts = (
  products: Product[],
  pageNumber: number,
  limit: number
): Product[] => {
  const startIndex = (pageNumber - 1) * limit;
  const endIndex = startIndex + limit;

  return products.slice(startIndex, endIndex);
};
