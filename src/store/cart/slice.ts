import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../../types/api";

const deepEqual = require("deep-equal");

const CART_SLICE_NAME = "cart";

type CartStateType = {
  items: CartItemType[];
  hasError: boolean;
};

const initialState: CartStateType = {
  items: [],
  hasError: false,
};

/*
 * формирует поля для проверки есть ли товар в корзине
 * временный метод для идентификации элемента корзины при сравнении
 */
const formMainItemFields = (item: CartItemType) => ({
  title: item.title,
  options: item.options,
});

const addItem: CaseReducer<CartStateType, PayloadAction<CartItemType>> = (
  state,
  { payload: itemToAdd }
) => {
  const mainItemFields = formMainItemFields(itemToAdd);
  const alreadyInCartItem = state.items.find((item) => {
    return deepEqual(mainItemFields, formMainItemFields(item));
  });

  if (alreadyInCartItem) {
    alreadyInCartItem.quantity += 1;
  } else {
    state.items.push(itemToAdd);
  }
};

const removeItem: CaseReducer<CartStateType, PayloadAction<CartItemType>> = (
  state,
  { payload: itemToRemove }
) => {
  const mainItemFields = formMainItemFields(itemToRemove);
  state.items = state.items.filter(
    (item) => !deepEqual(mainItemFields, formMainItemFields(item))
  );
};

const decreaseQuantity: CaseReducer<
  CartStateType,
  PayloadAction<CartItemType>
> = (state, { payload: itemToDecrease }) => {
  const mainItemFields = formMainItemFields(itemToDecrease);
  const item = state.items.find((item) => {
    return deepEqual(mainItemFields, formMainItemFields(item));
  });

  if (item) {
    item.quantity -= 1;
  }
};

const cartSlice = createSlice({
  name: CART_SLICE_NAME,
  initialState: initialState,
  reducers: {
    addItem,
    removeItem,
    decreaseQuantity,
  },
});

export const { reducer: cartReducer, actions: cartActions } = cartSlice;
