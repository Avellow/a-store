import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CartItemOptionsType, ProductType } from "../../types/api";

type ProductConfigOptionsType = Pick<
  ProductType,
  "sizes" | "colors" | "models" | "stickerNumbers"
>;

type FormProps = DetailedHTMLProps<
  HTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

type ConfigFormProps = FormProps & {
  productOptions: ProductConfigOptionsType;
  onConfirm?: (config: CartItemOptionsType) => void;
};

export { ConfigFormProps, ProductConfigOptionsType };
