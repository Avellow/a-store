import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  subtitle?: string;
  isBasketButtonVisible?: boolean;
}
