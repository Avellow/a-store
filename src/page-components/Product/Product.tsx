import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getProduct } from '../../api/cards';
import { ProductType } from '../../types/api';
import Page from '../Page'

export const Product = (): JSX.Element => {

  const { id } = useParams();

  const [product, setProduct] = useState<ProductType | null>(null)

  useEffect(() => {
    getProduct(Number(id)).then(card => card && setProduct(card));
  }, []);

  return (
    <Page>
      {
        product ? (
          <>
            <p>{product.id}</p>
            <div>{product.price}</div>
            <div>описание</div>
          </>
        ) : (
          <div>Продукт с таким id не найден</div>
        )
      }
    </Page>
  );
};
