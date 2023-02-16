import { useEffect } from 'react';
import { CardSkeletons, Group } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store';
import { groupsActions, groupsSelector, isLoadingSelector } from '../../store/design-groups';
import { yourDesignSubtitleText, yourDesignTitleText } from '../../vendor/constants';
import { NotFound } from '../NotFound/NotFound';
import Page from "../Page";

export const YourDesign = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(groupsSelector);
  const isLoading = useAppSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(groupsActions.request());
  }, []);

  return (
    <Page
      data-testid='your-design-page'
      title={yourDesignTitleText}
      subtitle={yourDesignSubtitleText}
    >
      {isLoading && <CardSkeletons />}

      {
        groups && groups.map(group => (
          <Group
            group={group}
            key={group.id}
            data-testid='your-design-group'
          />
        ))
      }

      {
        !isLoading && !groups.length && (
          <span>Группы с товарами не найдены</span>
        )
      }
    </Page>
  );
};
