import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { productsActions, productsSelector, hasErrorSelector, isLoadingSelector } from '../../store/alfa-products';
import Page from "../Page";
import styles from './MadeInAlfa.module.css';
import { Typography } from "@alfalab/core-components/typography";
import { madeInAlfaSubtitleText, madeInAlfaTitleText } from '../../vendor/constants';
import { CardsContainer } from '../../components/';

export const MadeInAlfa = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(productsSelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const hasError = useAppSelector(hasErrorSelector);

  useEffect(() => {
    dispatch(productsActions.request());
  }, []);

  return (
    <Page
      data-testid='made-in-alfa-page'
      title={madeInAlfaTitleText}
      subtitle={madeInAlfaSubtitleText}
    >
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
