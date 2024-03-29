export enum DeliveryEnum {
  pickup = "Самовывоз (пр-т Андропова, 18 корп. 3)",
  moscow = "Курьером по Москве — 300₽",
  russia = "Доставка по России — 350₽",
}

interface ChangeDeliveryAction {
  type: DeliveryEnum;
}

export interface DeliveryState {
  name: string;
  price: number;
}

export const deliveryReducer = (
  state: DeliveryState,
  { type }: ChangeDeliveryAction
) => {
  switch (type) {
    case DeliveryEnum.pickup:
      return { ...state, name: "Самовывоз", price: 0 };
    case DeliveryEnum.moscow:
      return { ...state, name: "Курьером по Москве", price: 300 };
    case DeliveryEnum.russia:
      return { ...state, name: "Доставка по России", price: 350 };
    default:
      throw new Error("Такого типа доставки нет");
  }
};
