import { memo, useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { AddNotificationProps, notificationsActions, notificationsSelector } from '../../store/notifications';

import { Notification } from '@alfalab/core-components/notification';
import { NotificationManager } from '@alfalab/core-components/notification-manager';
import { Spinner } from '@alfalab/core-components/spinner';

export const Notifications = memo(() => {
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector(notificationsSelector);

  const handleRemoveNotification = useCallback((id: string) => {
    dispatch(notificationsActions.remove(id));
  }, [dispatch]);

  const notificationsList = useMemo(() => notifications.map((notification: AddNotificationProps) => {
    const {
      id, title, badge, autoCloseDelay, subtitle,
    } = notification || {};

    return (
      <Notification
        key={id}
        id={id}
        title={title}
        badge={badge}
        autoCloseDelay={autoCloseDelay}
        leftAddons={badge ? null : <Spinner visible={true} size='s' colors='inverted' />}
      >
        {subtitle}
      </Notification>
    );
  }), [notifications]);

  return (
    <NotificationManager
      notifications={notificationsList}
      onRemoveNotification={handleRemoveNotification}
    />
  );
});
