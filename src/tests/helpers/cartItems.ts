import { CartItemType } from "../../types/api";

export const cartTestingItem1: CartItemType = {
  title: "Тестовое худи",
  imageURL: "https://68519498.jpg",
  quantity: 2,
  price: 1799,
  options: {
    stickerNumber: 1,
    color: "white",
    size: "M",
  },
};

export const cartTestingItem2: CartItemType = {
  title: "Тестовый рюкзак",
  imageURL: "https://68519498.jpg",
  quantity: 3,
  price: 3999,
};
