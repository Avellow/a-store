import { getCards } from "../../api/cards";
import { CardType } from "../../types/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { cardsActions } from "./slice";

export function* getCardsSaga() {
  try {
    const cards: CardType[] = yield call(getCards);

    yield put(cardsActions.success(cards));
  } catch (error) {
    yield put(cardsActions.failure());
  }
}

export function* watchCardsSaga() {
  yield takeLatest(cardsActions.request.type, getCardsSaga);
}
