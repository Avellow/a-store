import { call, put } from "redux-saga/effects";
import { productsActions } from ".";
import { getMadeInAlfaProducts } from "../../api/astore";
import { testingProducts } from "../../tests/helpers/products";
import { notificationsActions } from "../notifications";
import { getProductsSaga } from "./sagas";

describe("fetch products", () => {
  it("should fetch products data", () => {
    const g = getProductsSaga();

    // сравнение инструкций
    expect(g.next().value).toEqual(call(getMadeInAlfaProducts));

    expect(g.next(testingProducts).value).toEqual(
      put(productsActions.success(testingProducts))
    );

    expect(g.next().done).toBeTruthy();
  });

  it("should put error message if error was thrown", () => {
    const g = getProductsSaga();

    const errorMessage = "Request failed";

    g.next();

    expect(g.throw({ message: errorMessage }).value).toEqual(
      put(productsActions.failure())
    );

    expect(g.next().value).toEqual(
      put(
        notificationsActions.error({ title: "При загрузке произошла ошибка" })
      )
    );

    expect(g.next().done).toBeTruthy();
  });
});
