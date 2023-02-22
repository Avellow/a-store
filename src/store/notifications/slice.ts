import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NotificationProps } from "@alfalab/core-components/notification";

export type NotificationsStateType = {
  notifications: AddNotificationProps[];
};

const initialState: NotificationsStateType = {
  notifications: [],
};

const NAME = "notifications";

export type AddNotificationProps = NotificationProps & {
  id?: string;
  subtitle?: string;
};

const success: CaseReducer<
  NotificationsStateType,
  PayloadAction<AddNotificationProps>
> = (
  state,
  { payload: { title, subtitle = "", id, autoCloseDelay = 5000 } }
) => {
  state.notifications.push({
    badge: "positive",
    title,
    subtitle,
    autoCloseDelay,
    id: id || `${Math.random()}`,
  });
};

const error: CaseReducer<
  NotificationsStateType,
  PayloadAction<AddNotificationProps>
> = (
  state,
  { payload: { title, subtitle = "", id, autoCloseDelay = 5000 } }
) => {
  state.notifications.push({
    badge: "negative",
    title,
    subtitle,
    autoCloseDelay,
    id: id || `${Math.random()}`,
  });
};

const neutral: CaseReducer<
  NotificationsStateType,
  PayloadAction<AddNotificationProps>
> = (
  state,
  { payload: { title, subtitle = "", autoCloseDelay = 5000, id } }
) => {
  state.notifications.push({
    title,
    subtitle,
    autoCloseDelay,
    id: id || `${Math.random()}`,
  });
};

const remove: CaseReducer<NotificationsStateType, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.notifications = state.notifications.filter(
    (notification) => notification.id !== payload
  );
};

export const { reducer: notificationsReducer, actions: notificationsActions } =
  createSlice({
    name: NAME,
    initialState,
    reducers: {
      success,
      error,
      neutral,
      remove,
    },
  });
