import { ApplicationState } from "..";

export const cardsStateSelector = (state: ApplicationState) => state.cards;
export const isLoadingSelector = (state: ApplicationState) =>
  cardsStateSelector(state).isLoading;
export const hasErrorSelector = (state: ApplicationState) =>
  cardsStateSelector(state).hasError;
export const cardsSelector = (state: ApplicationState) =>
  cardsStateSelector(state).cards;
