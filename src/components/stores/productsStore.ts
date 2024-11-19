import { create } from "zustand";

type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  discount: number | null | undefined;
};

type ProductStore = {
  nbProductsToShow: number;
  setNbProductsToShow: (count: number) => void;

  allProducts: Product[];
  setAllProducts: (products: Product[]) => void;

  sortBy: string;
  setSortBy: (sortBy: string) => void;
};

const useProductStore = create<ProductStore>((set) => ({
  // Initial state
  nbProductsToShow: 20,
  allProducts: [],
  sortBy: "desc",

  // Actions
  setNbProductsToShow: (count: number) => set(() => ({ nbProductsToShow: count })),

  setAllProducts: (products: Product[]) =>
    set((state) => {
      const isSame = JSON.stringify(state.allProducts) === JSON.stringify(products);
      return isSame ? state : { allProducts: products };
    }),

  setSortBy: (newSort: string) =>
    set((state) => {
      if (state.sortBy !== newSort) {
        return { sortBy: newSort };
      }
      return state;
    }),
}));

export default useProductStore;
