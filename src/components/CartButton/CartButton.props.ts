import { IconButtonProps } from "@alfalab/core-components/icon-button";

export interface CartButtonProps extends Omit<IconButtonProps, "icon"> {
  goodsQuantity: number;
}
