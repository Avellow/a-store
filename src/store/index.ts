import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productsReducer } from "./alfa-products";
import { cartReducer } from "./cart";
import { groupsReducer } from "./design-groups";
import { notificationsReducer } from "./notifications";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

export const appReducer = combineReducers({
  products: productsReducer,
  groups: groupsReducer,
  notifications: notificationsReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: appReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type ApplicationState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
