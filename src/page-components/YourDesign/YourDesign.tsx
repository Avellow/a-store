import { useEffect } from 'react';
import { CardSkeletons, Group } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store';
import { groupsActions, groupsStateSelector } from '../../store/design-groups';
import { yourDesignSubtitleText, yourDesignTitleText } from '../../vendor/constants';
import Page from "../Page";

export const YourDesign = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { groups, isLoading } = useAppSelector(groupsStateSelector);

  useEffect(() => {
    dispatch(groupsActions.request());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && !groups.length && <CardSkeletons />}

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
          <span data-testid='no-groups'>Группы с товарами не найдены</span>
        )
      }
    </>
  );
};

export function YourDesignPage() {
  return (
    <Page
      data-testid='your-design-page'
      title={yourDesignTitleText}
      subtitle={yourDesignSubtitleText}
    >
      <YourDesign />
    </Page>
  );
};
