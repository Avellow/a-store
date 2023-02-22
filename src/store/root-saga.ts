import { fork } from "redux-saga/effects";
import { watchProductsSaga } from "./alfa-products";
import { watchGroupsSaga } from "./design-groups";

export function* rootSaga() {
  yield fork(watchProductsSaga);
  yield fork(watchGroupsSaga);
}
