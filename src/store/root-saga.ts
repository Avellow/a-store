import { fork } from "redux-saga/effects";
import { watchCardsSaga } from "./cards";
import { watchGroupsSaga } from "./products-groups";

export function* rootSaga() {
  yield fork(watchCardsSaga);
  yield fork(watchGroupsSaga);
}
