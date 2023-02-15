import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductsGroup } from "../../types/api";

export interface GroupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  group: ProductsGroup;
}
