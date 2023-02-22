import { call, put } from "redux-saga/effects";
import { groupsActions } from ".";
import { getYourDesignGroups } from "../../api/astore";
import { testingGroups } from "../../tests/helpers/groups";
import { notificationsActions } from "../notifications";
import { getGroupsSaga } from "./sagas";

describe("fetch groups", () => {
  it("should fetch groups data", () => {
    const g = getGroupsSaga();

    // сравнение инструкций
    expect(g.next().value).toEqual(call(getYourDesignGroups));

    expect(g.next(testingGroups).value).toEqual(
      put(groupsActions.success(testingGroups))
    );

    expect(g.next().done).toBeTruthy();
  });

  it("should put error message if error was thrown", () => {
    const g = getGroupsSaga();

    const errorMessage = "Request failed";

    g.next();

    expect(g.throw({ message: errorMessage }).value).toEqual(
      put(groupsActions.failure())
    );

    expect(g.next().value).toEqual(
      put(
        notificationsActions.error({ title: "При загрузке произошла ошибка" })
      )
    );

    expect(g.next().done).toBeTruthy();
  });
});
