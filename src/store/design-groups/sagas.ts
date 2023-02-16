import { getYourDesignGroups } from "../../api/astore";
import { ProductsGroup } from "../../types/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { groupsActions } from "./slice";

export function* getGroupsSaga() {
  try {
    const groups: ProductsGroup[] = yield call(getYourDesignGroups);

    yield put(groupsActions.success(groups));
  } catch (error) {
    yield put(groupsActions.failure());
  }
}

export function* watchGroupsSaga() {
  yield takeLatest(groupsActions.request.type, getGroupsSaga);
}
