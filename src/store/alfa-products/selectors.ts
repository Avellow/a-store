import { ApplicationState } from "..";

export const productsStateSelector = (state: ApplicationState) =>
  state.products;
export const isLoadingSelector = (state: ApplicationState) =>
  productsStateSelector(state).isLoading;
export const hasErrorSelector = (state: ApplicationState) =>
  productsStateSelector(state).hasError;
export const productsSelector = (state: ApplicationState) =>
  productsStateSelector(state).product;
