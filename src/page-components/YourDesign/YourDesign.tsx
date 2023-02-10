import { useEffect } from 'react';
import { Group } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store';
import { groupsActions, groupsSelector } from '../../store/products-groups';
import { yourDesignSubtitleText, yourDesignTitleText } from '../../vendor/constants';
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
                groups && groups.map((group) => (
                    <Group
                        group={group}
                        key={group.id}
                    />
                ))
            }
        </Page>
    );
};
