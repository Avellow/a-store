import { CartItemType } from "../../types/api";

export interface CartItemProps {
  item: CartItemType;
  onIncrease: (item: CartItemType) => void;
  onDecrease: (item: CartItemType) => void;
  onRemove: (item: CartItemType) => void;
}
