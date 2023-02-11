import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/api";

const CARDS_SLICE_NAME = "cards";

type CardsStateType = {
  cards: ProductType[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: CardsStateType = {
  cards: [],
  isLoading: false,
  hasError: false,
};

const request: CaseReducer<CardsStateType> = (state) => {
  state.isLoading = true;
  state.hasError = false;
};

const success: CaseReducer<CardsStateType, PayloadAction<ProductType[]>> = (
  state,
  action
) => {
  state.isLoading = false;
  state.cards = action.payload;
  state.hasError = false;
};

const failure: CaseReducer<CardsStateType> = (state) => {
  state.isLoading = false;
  state.hasError = true;
};

const cardsSlice = createSlice({
  name: CARDS_SLICE_NAME,
  initialState: initialState,
  reducers: {
    request,
    success,
    failure,
  },
});

export const { reducer: cardsReducer, actions: cardsActions } = cardsSlice;
