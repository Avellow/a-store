import { ApplicationState } from "..";

export const cartStateSelector = (state: ApplicationState) => state.cart;
export const cartItemsSelector = (state: ApplicationState) =>
  cartStateSelector(state).items;
export const hasErrorSelector = (state: ApplicationState) =>
  cartStateSelector(state).hasError;
export const isCartHasItemsSelector = (state: ApplicationState) =>
  !!cartStateSelector(state).items.length;

export const itemsQuantitySelector = (state: ApplicationState) =>
  cartStateSelector(state).items.reduce(
    (acc, { quantity }) => acc + quantity,
    0
  );

export const totalAmountSelector = (state: ApplicationState) =>
  cartStateSelector(state).items.reduce(
    (acc, { quantity, price }) => acc + price * quantity,
    0
  );
