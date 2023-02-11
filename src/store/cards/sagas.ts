import { getProducts } from "../../api/cards";
import { ProductType } from "../../types/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { cardsActions } from "./slice";

export function* getProductsSaga() {
  try {
    const products: ProductType[] = yield call(getProducts);

    yield put(cardsActions.success(products));
  } catch (error) {
    yield put(cardsActions.failure());
  }
}

export function* watchCardsSaga() {
  yield takeLatest(cardsActions.request.type, getProductsSaga);
}
