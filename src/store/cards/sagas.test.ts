import { call, put } from "redux-saga/effects";
import { cardsActions } from ".";
import { getProducts } from "../../api/cards";
import { madeInAlfaTestProducts } from "../../tests/helpers/products";
import { getProductsSaga } from "./sagas";

describe("fetch products", () => {
  it("should fetch products data", () => {
    const g = getProductsSaga();

    // сравнение инструкций
    expect(g.next().value).toEqual(call(getProducts));

    expect(g.next(madeInAlfaTestProducts).value).toEqual(
      put(cardsActions.success(madeInAlfaTestProducts))
    );

    expect(g.next().done).toBeTruthy();
  });

  it("should put error message if error was thrown", () => {
    const g = getProductsSaga();

    const errorMessage = "Request failed";

    g.next();

    expect(g.throw({ message: errorMessage }).value).toEqual(
      put(cardsActions.failure())
    );

    expect(g.next().done).toBeTruthy();
  });
});
