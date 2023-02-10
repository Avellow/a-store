import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { cardsActions, cardsSelector, hasErrorSelector, isLoadingSelector } from '../../store/cards';
import Page from "../Page";
import styles from './MadeInAlfa.module.css';
import { Typography } from "@alfalab/core-components/typography";
import { madeInAlfaSubtitleText, madeInAlfaTitleText } from '../../vendor/constants';
import { CardsContainer } from '../../components/';

export const MadeInAlfa = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const cards = useAppSelector(cardsSelector);
    const isLoading = useAppSelector(isLoadingSelector);
    const hasError = useAppSelector(hasErrorSelector);

    useEffect(() => {
        dispatch(cardsActions.request());
    }, []);

    return (
        <Page data-testid='made-in-alfa-page'>

            <Typography.Title
                tag="h2"
                view='xlarge'
                weight='bold'
                color='primary'
                className={styles.pageTitle}
                dataTestId='made-in-alfa-title'
            >
                {madeInAlfaTitleText}
            </Typography.Title>
            <Typography.Title
                tag='div'
                view='xsmall'
                color='primary'
                className={styles.pageSubtitle}
            >
                {madeInAlfaSubtitleText}
            </Typography.Title>

            {
                (cards && cards.length) ? (
                    <CardsContainer cards={cards} />
                ) : (
                    <Typography.Title
                        tag='div'
                        view='xsmall'
                        color='primary'
                        className={styles.pageSubtitle}
                    >
                        Товар не найден
                    </Typography.Title>
                )
            }
        </Page>
    )
}
