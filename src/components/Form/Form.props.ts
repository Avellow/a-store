import { DetailedHTMLProps, HTMLAttributes } from "react";
import { DeliveryEnum } from "../../page-components/Order/delivery.reducer";

export interface FormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  onDeliveryChange?: (newDelivery: DeliveryEnum) => void;
}
