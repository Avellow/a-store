import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductType } from "../../types/api";

type SelectOptions = Pick<
  ProductType,
  "sizes" | "colors" | "models" | "stickerNumbers"
>;

type FormProps = DetailedHTMLProps<
  HTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

type ConfigFormProps = FormProps & {
  productOptions: SelectOptions;
};

export { ConfigFormProps, SelectOptions };
