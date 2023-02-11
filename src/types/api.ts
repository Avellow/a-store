type CardType = {
  id: number;
  preview: string;
  title: string;
  price: number;
  availability: boolean;
};

type size = "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL";

type Product = {
  id: number;
  preview: string;
  images: string[];
  title: string;
  subtitle: string;
  price: number;
  description: string;
  colors: string[];
  sizes: size[];
  stickerNumbers: number[];
  availability: boolean;
};

type ProductsGroup = {
  id: number;
  title: string;
  description: string;
  products: Product[];
};

export { CardType, ProductsGroup, Product };
