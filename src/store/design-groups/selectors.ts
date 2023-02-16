import { ApplicationState } from "..";

export const groupsStateSelector = (state: ApplicationState) => state.groups;
export const isLoadingSelector = (state: ApplicationState) =>
  groupsStateSelector(state).isLoading;
export const hasErrorSelector = (state: ApplicationState) =>
  groupsStateSelector(state).hasError;
export const groupsSelector = (state: ApplicationState) =>
  groupsStateSelector(state).groups;
