import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CardType } from "../../types/api";

export interface CardsContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cards: CardType[];
}
