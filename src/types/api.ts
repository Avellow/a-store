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
  id: number;
  title: string;
  imageURL: string;
  options?: CartItemOptionsType;
  quantity: number;
  price: number;
};

type ProductToOrder = {
  id: number;
  totalPrice: number;
  totalCount: number;
  stickerNumber?: number;
  color?: string;
  size?: string;
  model?: string;
};

type OrderType = {
  name: string;
  email: string;
  phone: string;
  address?: string;
  comment?: string;
  deliveryType:
    | "Доставка по России — 350₽"
    | "Курьером по Москве — 300₽"
    | "Самовывоз (пр-т Андропова, 18 корп. 3)";
  paymentType: "Банковская карта" | "Промокод";
  products: ProductToOrder[];
};

export {
  ProductsGroup,
  ProductType as Product,
  CartItemType,
  CartItemOptionsType,
  OrderType,
  ProductToOrder,
};
