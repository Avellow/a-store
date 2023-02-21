import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { productsActions, productsStateSelector } from '../../store/alfa-products';
import Page from "../Page";
import { madeInAlfaSubtitleText, madeInAlfaTitleText } from '../../vendor/constants';
import { CardsContainer, CardSkeletons } from '../../components/';

export const MadeInAlfa = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isLoading, products } = useAppSelector(productsStateSelector);

  useEffect(() => {
    dispatch(productsActions.request());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && !products.length && (<CardSkeletons />)}

      {products && <CardsContainer cards={products} />}

      {
        !isLoading && !products.length && (
          <span data-testid='no-products'>Товар не найден</span>
        )
      }
    </>
  );
};

export function MadeInAlfaPage(): JSX.Element {
  return (
    <Page
      data-testid='made-in-alfa-page'
      title={madeInAlfaTitleText}
      subtitle={madeInAlfaSubtitleText}
    >
      <MadeInAlfa />
    </Page>
  );
};
