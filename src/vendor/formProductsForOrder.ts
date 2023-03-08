import { CartItemType, ProductToOrder } from "../types/api";

export const formProductForOrder = (cartItem: CartItemType): ProductToOrder => {
  const { id, price, quantity, options } = cartItem;

  return {
    id,
    totalCount: quantity,
    totalPrice: quantity * price,
    ...options,
  };
};
