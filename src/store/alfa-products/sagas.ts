import { getMadeInAlfaProducts } from "../../api/astore";
import { ProductType } from "../../types/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { productsActions } from "./slice";
import { notificationsActions } from "../notifications";

export function* getProductsSaga() {
  try {
    const products: ProductType[] = yield call(getMadeInAlfaProducts);

    yield put(productsActions.success(products));
  } catch (error) {
    yield put(productsActions.failure());
    yield put(
      notificationsActions.error({ title: "При загрузке произошла ошибка" })
    );
  }
}

export function* watchProductsSaga() {
  yield takeLatest(productsActions.request.type, getProductsSaga);
}
