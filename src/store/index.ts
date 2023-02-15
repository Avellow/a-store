import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cardsReducer } from "./cards";
import { groupsReducer } from "./products-groups";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  // TODO: отрефакторить названия
  reducer: {
    cards: cardsReducer,
    groups: groupsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type ApplicationState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
