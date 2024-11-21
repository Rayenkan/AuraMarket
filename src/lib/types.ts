export type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  discount: number | null | undefined;
};

export type ProductItemType = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  discount: number | null | undefined;
};

export type Category = {
  categorieName: string;
  categorieImgUrl: string;
};
