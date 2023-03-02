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

type CartItemOptionsType = Record<string, string | number | undefined>;

type CartItemType = {
  title: string;
  imageURL: string;
  options?: CartItemOptionsType;
  quantity: number;
  price: number;
};

export {
  ProductsGroup,
  ProductType as Product,
  CartItemType,
  CartItemOptionsType,
};
