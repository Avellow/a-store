import { fork } from "redux-saga/effects";
import { watchCardsSaga } from "./cards";

export function* rootSaga() {
  yield fork(watchCardsSaga);
}
