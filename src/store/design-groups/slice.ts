import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsGroup } from "../../types/api";

const PRODUCTS_GROUPS_SLICE_NAME = "products-groups";

type GroupsStateType = {
  groups: ProductsGroup[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: GroupsStateType = {
  groups: [],
  isLoading: false,
  hasError: false,
};

const request: CaseReducer<GroupsStateType> = (state) => {
  state.isLoading = true;
  state.hasError = false;
};

const success: CaseReducer<GroupsStateType, PayloadAction<ProductsGroup[]>> = (
  state,
  action
) => {
  state.isLoading = false;
  state.groups = action.payload;
  state.hasError = false;
};

const failure: CaseReducer<GroupsStateType> = (state) => {
  state.isLoading = false;
  state.hasError = true;
};

const groupsSlice = createSlice({
  name: PRODUCTS_GROUPS_SLICE_NAME,
  initialState: initialState,
  reducers: {
    request,
    success,
    failure,
  },
});

export const { reducer: groupsReducer, actions: groupsActions } = groupsSlice;
