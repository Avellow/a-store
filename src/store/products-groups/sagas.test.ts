import { call, put } from "redux-saga/effects";
import { groupsActions } from ".";
import { getGroups } from "../../api/cards";
import { testingGroups } from "../../tests/helpers/groups";
import { getGroupsSaga } from "./sagas";

describe("fetch groups", () => {
  it("should fetch groups data", () => {
    const g = getGroupsSaga();

    // сравнение инструкций
    expect(g.next().value).toEqual(call(getGroups));

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

    expect(g.next().done).toBeTruthy();
  });
});
