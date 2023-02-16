import { useEffect } from 'react';
import { Group } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store';
import { groupsActions, groupsSelector } from '../../store/design-groups';
import { yourDesignSubtitleText, yourDesignTitleText } from '../../vendor/constants';
import { Typography } from "@alfalab/core-components/typography";
import Page from "../Page";

export const YourDesign = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(groupsSelector);

  useEffect(() => {
    dispatch(groupsActions.request());
  }, []);


  return (
    <Page
      data-testid='your-design-page'
      title={yourDesignTitleText}
      subtitle={yourDesignSubtitleText}
    >
      {
        (groups && groups.length) ? groups.map((group) => (
          <Group
            group={group}
            key={group.id}
            data-testid='your-design-group'
          />
        )) : (
          <Typography.Title
            tag='div'
            view='xsmall'
            color='primary'
          >
            Товар не найден
          </Typography.Title>
        )
      }
    </Page>
  );
};
