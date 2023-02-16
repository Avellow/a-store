import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/api";

const SLICE_NAME = "alfa-products";

type ProductsStateType = {
  product: ProductType[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: ProductsStateType = {
  product: [],
  isLoading: false,
  hasError: false,
};

const request: CaseReducer<ProductsStateType> = (state) => {
  state.isLoading = true;
  state.hasError = false;
};

const success: CaseReducer<ProductsStateType, PayloadAction<ProductType[]>> = (
  state,
  action
) => {
  state.isLoading = false;
  state.product = action.payload;
  state.hasError = false;
};

const failure: CaseReducer<ProductsStateType> = (state) => {
  state.isLoading = false;
  state.hasError = true;
};

const cardsSlice = createSlice({
  name: SLICE_NAME,
  initialState: initialState,
  reducers: {
    request,
    success,
    failure,
  },
});

export const { reducer: productsReducer, actions: productsActions } =
  cardsSlice;
