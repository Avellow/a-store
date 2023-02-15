import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductType } from "../../types/api";

export interface CardsContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cards: ProductType[];
}
