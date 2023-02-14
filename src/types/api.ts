type size = "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type ProductType = {
  id: number;
  preview: string;
  images?: string[];
  title: string;
  subtitle?: string;
  price: number;
  description?: string;
  colors?: string[];
  sizes?: size[];
  models?: string[];
  stickers?: string[];
  stickerNumbers?: number[];
  availability: boolean;
};

type ProductsGroup = {
  id: number;
  title: string;
  description: string;
  products: ProductType[];
};

export { ProductsGroup, ProductType as Product };
