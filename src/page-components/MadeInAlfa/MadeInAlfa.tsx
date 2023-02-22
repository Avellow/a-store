import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { productsActions, productsSelector, isLoadingSelector } from '../../store/alfa-products';
import Page from "../Page";
import { madeInAlfaSubtitleText, madeInAlfaTitleText } from '../../vendor/constants';
import { CardsContainer, CardSkeletons } from '../../components/';

export const MadeInAlfa = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productsSelector);
  const isLoading = useAppSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(productsActions.request());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page
      data-testid='made-in-alfa-page'
      title={madeInAlfaTitleText}
      subtitle={madeInAlfaSubtitleText}
    >
      {isLoading && !products.length && (<CardSkeletons />)}

      {products && <CardsContainer cards={products} />}

      {
        !isLoading && !products.length && (
          <span>Товар не найден</span>
        )
      }
    </Page>
  );
};
